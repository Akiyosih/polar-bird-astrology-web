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

const noteDir = join(root, "content/core-field-notes/core-2026-solar-return-field-note");
const localeFiles = await readdir(noteDir);
for (const locale of ["en.md", "ja.md", "de.md"]) {
  if (!localeFiles.includes(locale)) {
    throw new Error(`Missing Field Note locale file: ${locale}`);
  }

  const markdown = await readFile(join(noteDir, locale), "utf8");
  const sectionCount = markdown.match(/^## /gm)?.length || 0;
  if (sectionCount < 5) {
    throw new Error(`Field Note locale file has too few rendered sections: ${locale}`);
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
