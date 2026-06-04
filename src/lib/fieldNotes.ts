import type { Lang } from "./i18n";
import type { ReportTypeKey } from "../data/site";

type FieldNoteSection = {
  heading: string;
  body: string[];
};

export type FieldNote = {
  lang: Lang;
  slug: string;
  reportType: ReportTypeKey;
  title: string;
  eyebrow: string;
  status: string;
  summary: string;
  intro: string[];
  sections: FieldNoteSection[];
};

const reportTypeKeys = ["natal", "solar-return", "new-moon"] as const;

function isReportType(value: string | undefined): value is ReportTypeKey {
  return reportTypeKeys.includes(value as ReportTypeKey);
}

const rawModules = import.meta.glob("../../content/core-field-notes/*/*.md", {
  eager: true,
  import: "default",
  query: "?raw"
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Field Note content is missing frontmatter.");
  }

  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const entry = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!entry) {
      continue;
    }
    data[entry[1]] = entry[2].replace(/^["']|["']$/g, "");
  }

  return { data, body: match[2].trim() };
}

function markdownParagraphs(markdown: string): string[] {
  return markdown
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => block.replace(/\n/g, " "));
}

function parseSections(markdown: string): { intro: string[]; sections: FieldNoteSection[] } {
  const withoutTitle = markdown.replace(/^# .*(?:\n|$)/, "").trim();
  const parts = withoutTitle.split(/\n## /);
  const intro = markdownParagraphs(parts.shift() || "");
  const sections = parts.map((part) => {
    const [headingLine, ...rest] = part.split("\n");
    return {
      heading: headingLine.trim(),
      body: markdownParagraphs(rest.join("\n"))
    };
  });

  return { intro, sections };
}

function parseFieldNote(path: string, raw: string): FieldNote {
  const { data, body } = parseFrontmatter(raw);
  const { intro, sections } = parseSections(body);
  const lang = data.locale as Lang;
  const slug = data.slug;
  const reportType = data.reportType;

  if (!lang || !slug || !data.title || !data.summary || !data.status || !data.eyebrow) {
    throw new Error(`Missing required Field Note frontmatter in ${path}`);
  }

  if (!isReportType(reportType)) {
    throw new Error(`Missing or unsupported reportType in ${path}`);
  }

  return {
    lang,
    slug,
    reportType,
    title: data.title,
    eyebrow: data.eyebrow,
    status: data.status,
    summary: data.summary,
    intro,
    sections
  };
}

const allFieldNotes = Object.entries(rawModules).map(([path, raw]) => parseFieldNote(path, raw));

export function getFieldNotes(lang: Lang): FieldNote[] {
  return allFieldNotes.filter((note) => note.lang === lang);
}

export function getLatestFieldNoteByReportType(
  lang: Lang,
  reportType: ReportTypeKey
): FieldNote | undefined {
  return allFieldNotes.find((note) => note.lang === lang && note.reportType === reportType);
}

export function getFieldNote(lang: Lang, slug: string | undefined): FieldNote | undefined {
  return allFieldNotes.find((note) => note.lang === lang && note.slug === slug);
}

export function getFieldNoteStaticPaths() {
  return allFieldNotes.map((note) => ({ params: { lang: note.lang, slug: note.slug } }));
}
