import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const contentRoot = join(root, "content", "sample-reports");
const expectedLocales = ["en", "ja", "de"];
const expectedSubjects = ["core", "steve-jobs", "leonardo-da-vinci"];
const expectedReportTypes = ["natal", "solar-return", "new-moon"];

function parseFrontmatter(markdown, file) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) {
    throw new Error(`Sample report is missing frontmatter: ${file}`);
  }

  const data = new Map();
  for (const line of match[1].split(/\r?\n/)) {
    const entry = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (entry) {
      data.set(entry[1], entry[2].trim().replace(/^["']|["']$/g, ""));
    }
  }
  return data;
}

const reportMap = new Map();
const staleSubjects = new Set();

for (const dirent of await readdir(contentRoot, { withFileTypes: true })) {
  if (!dirent.isDirectory()) {
    continue;
  }

  const reportDir = join(contentRoot, dirent.name);
  for (const localeFile of await readdir(reportDir)) {
    if (!localeFile.endsWith(".md")) {
      continue;
    }

    const file = join(reportDir, localeFile);
    const frontmatter = parseFrontmatter(await readFile(file, "utf8"), file);
    const locale = frontmatter.get("locale");
    const subject = frontmatter.get("subject");
    const reportType = frontmatter.get("reportType");

    if (!expectedSubjects.includes(subject)) {
      staleSubjects.add(subject || "(missing subject)");
      continue;
    }

    reportMap.set(`${locale}:${subject}:${reportType}`, file);
  }
}

const missing = [];
for (const locale of expectedLocales) {
  for (const subject of expectedSubjects) {
    for (const reportType of expectedReportTypes) {
      const key = `${locale}:${subject}:${reportType}`;
      if (!reportMap.has(key)) {
        missing.push(`${locale} / ${subject} / ${reportType}`);
      }
    }
  }
}

if (staleSubjects.size > 0 || missing.length > 0) {
  const lines = [];
  if (staleSubjects.size > 0) {
    lines.push(`Unexpected sample subjects: ${[...staleSubjects].join(", ")}`);
  }
  if (missing.length > 0) {
    lines.push(`Missing release sample reports:\n- ${missing.join("\n- ")}`);
  }
  throw new Error(lines.join("\n\n"));
}

console.log("Sample release completeness check passed.");
