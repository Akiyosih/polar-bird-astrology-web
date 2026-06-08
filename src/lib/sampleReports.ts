import type { Lang } from "./i18n";
import type { ReportTypeKey, SampleSubjectKey } from "../data/site";

type SampleReportSection = {
  heading: string;
  body: string[];
};

export type SampleReportTocItem = {
  id: string;
  level: 2 | 3;
  title: string;
};

export type SampleReport = {
  lang: Lang;
  slug: string;
  subject: SampleSubjectKey;
  reportType: ReportTypeKey;
  title: string;
  eyebrow: string;
  summary: string;
  pdfUrl?: string;
  chartImage?: string;
  chartImageDark?: string;
  chartAlt?: string;
  coverImage?: string;
  period?: string;
  intro: string[];
  sections: SampleReportSection[];
  tableOfContents: SampleReportTocItem[];
  bodyHtml: string;
};

const reportTypeKeys = ["natal", "solar-return", "new-moon"] as const;
const sampleSubjectKeys = ["core", "steve-jobs", "leonardo-da-vinci"] as const;

function isReportType(value: string | undefined): value is ReportTypeKey {
  return reportTypeKeys.includes(value as ReportTypeKey);
}

function isSampleSubject(value: string | undefined): value is SampleSubjectKey {
  return sampleSubjectKeys.includes(value as SampleSubjectKey);
}

const rawModules = import.meta.glob("../../content/sample-reports/*/*.md", {
  eager: true,
  import: "default",
  query: "?raw"
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Sample report content is missing frontmatter.");
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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderInlineMarkdown(value: string): string {
  return escapeHtml(value).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function plainMarkdownText(value: string): string {
  return value
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

function headingSlug(value: string): string {
  const slug = plainMarkdownText(value)
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "section";
}

function uniqueHeadingId(value: string, seen: Map<string, number>): string {
  const base = `heading-${headingSlug(value)}`;
  const count = seen.get(base) || 0;
  seen.set(base, count + 1);
  return count === 0 ? base : `${base}-${count + 1}`;
}

function markdownToHtml(markdown: string): { bodyHtml: string; tableOfContents: SampleReportTocItem[] } {
  const withoutTitle = markdown.replace(/^# .*(?:\n|$)/, "").trim();
  const html: string[] = [];
  const tableOfContents: SampleReportTocItem[] = [];
  const seenHeadingIds = new Map<string, number>();
  let paragraph: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) {
      return;
    }
    html.push(`<p>${renderInlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (listItems.length === 0) {
      return;
    }
    html.push(`<ul>${listItems.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join("")}</ul>`);
    listItems = [];
  };

  for (const rawLine of withoutTitle.split("\n")) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = line.match(/^(#{2,3})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      const title = heading[2].trim();
      const id = uniqueHeadingId(title, seenHeadingIds);
      tableOfContents.push({ id, level: level as 2 | 3, title: plainMarkdownText(title) });
      if (level === 2) {
        html.push(`<div class="section-mark" aria-hidden="true"></div>`);
      }
      html.push(
        `<h${level} id="${escapeHtml(id)}"><a class="report-heading-link" href="#report-toc">${renderInlineMarkdown(title)}</a></h${level}>`
      );
      continue;
    }

    const listItem = line.match(/^-\s+(.+)$/);
    if (listItem) {
      flushParagraph();
      listItems.push(listItem[1]);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return { bodyHtml: html.join("\n"), tableOfContents };
}

function parseSections(markdown: string): { intro: string[]; sections: SampleReportSection[] } {
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

function parseSampleReport(path: string, raw: string): SampleReport {
  const { data, body } = parseFrontmatter(raw);
  const { intro, sections } = parseSections(body);
  const { bodyHtml, tableOfContents } = markdownToHtml(body);
  const lang = data.locale as Lang;
  const slug = data.slug;
  const subject = data.subject;
  const reportType = data.reportType;

  if (!lang || !slug || !data.title || !data.summary || !data.eyebrow) {
    throw new Error(`Missing required sample report frontmatter in ${path}`);
  }

  if (!isReportType(reportType)) {
    throw new Error(`Missing or unsupported reportType in ${path}`);
  }

  if (!isSampleSubject(subject)) {
    throw new Error(`Missing or unsupported subject in ${path}`);
  }

  return {
    lang,
    slug,
    subject,
    reportType,
    title: data.title,
    eyebrow: data.eyebrow,
    summary: data.summary,
    pdfUrl: data.pdfUrl,
    chartImage: data.chartImage,
    chartImageDark: data.chartImageDark,
    chartAlt: data.chartAlt,
    coverImage: data.coverImage,
    period: data.period,
    intro,
    sections,
    tableOfContents,
    bodyHtml
  };
}

const allSampleReports = Object.entries(rawModules).map(([path, raw]) => parseSampleReport(path, raw));

export function getSampleReports(lang: Lang): SampleReport[] {
  return allSampleReports.filter((report) => report.lang === lang);
}

export function getLatestSampleReportByReportType(
  lang: Lang,
  reportType: ReportTypeKey
): SampleReport | undefined {
  return getLatestSampleReportBySubjectAndReportType(lang, "core", reportType);
}

export function getLatestSampleReportBySubjectAndReportType(
  lang: Lang,
  subject: SampleSubjectKey,
  reportType: ReportTypeKey
): SampleReport | undefined {
  return allSampleReports.find(
    (report) => report.lang === lang && report.subject === subject && report.reportType === reportType
  );
}

export function getSampleReport(lang: Lang, slug: string | undefined): SampleReport | undefined {
  return allSampleReports.find((report) => report.lang === lang && report.slug === slug);
}

export function getSampleReportStaticPaths() {
  return allSampleReports.map((report) => ({ params: { lang: report.lang, slug: report.slug } }));
}
