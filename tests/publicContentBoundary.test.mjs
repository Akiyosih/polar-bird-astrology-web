import { existsSync } from "node:fs";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const requiredDocs = [
  "docs/publication_policy.md",
  "docs/release_checklist.md"
];

for (const file of requiredDocs) {
  if (!existsSync(join(root, file))) {
    throw new Error(`Missing required public-boundary doc: ${file}`);
  }
}

const expectedJapaneseReports = new Map([
  ["core-natal-field-note", "natal"],
  ["core-2026-solar-return-field-note", "solar-return"],
  ["core-2026-new-moon-cycle-field-note", "new-moon"]
]);

for (const [slug, reportType] of expectedJapaneseReports) {
  const noteDir = join(root, "content/core-field-notes", slug);
  const localeFiles = await readdir(noteDir);
  if (!localeFiles.includes("ja.md")) {
    throw new Error(`Missing Japanese Field Note locale file: ${slug}/ja.md`);
  }

  const markdown = await readFile(join(noteDir, "ja.md"), "utf8");
  if (!markdown.includes(`reportType: ${reportType}`)) {
    throw new Error(`Japanese Field Note has wrong reportType: ${slug}`);
  }

  if (!markdown.includes("pdfUrl: /reports/core/")) {
    throw new Error(`Japanese Field Note is missing PDF download URL: ${slug}`);
  }

  if (!markdown.includes("chartImage: /reports/core/charts/")) {
    throw new Error(`Japanese Field Note is missing chart image URL: ${slug}`);
  }

  const sectionCount = markdown.match(/^## /gm)?.length || 0;
  if (sectionCount < 3) {
    throw new Error(`Japanese Field Note has too few rendered sections: ${slug}`);
  }
}

const siteData = await readFile(join(root, "src/data/site.ts"), "utf8");
if (siteData.includes("export const fieldNotes")) {
  throw new Error("Field Note content should be sourced from content/, not duplicated in src/data/site.ts");
}

for (const forbidden of ["src/pages/api", "functions"]) {
  if (existsSync(join(root, forbidden))) {
    throw new Error(`The public static site must not include dynamic surface: ${forbidden}`);
  }
}

const trackedAgents = execFileSync("git", ["ls-files", "AGENTS.md"], {
  cwd: root,
  encoding: "utf8"
}).trim();

if (trackedAgents) {
  throw new Error("AGENTS.md must stay local-only and must not be tracked in the public repository");
}

console.log("Public content boundary test passed.");
