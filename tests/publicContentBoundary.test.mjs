import { existsSync } from "node:fs";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const requiredDocs = [
  "docs/publication_policy.md",
  "docs/release_checklist.md"
];
const profileImagePaths = [
  "public/images/profile/writer-profile.jpg",
  "public/images/profile/writer-profile-dark.webp"
];

for (const file of requiredDocs) {
  if (!existsSync(join(root, file))) {
    throw new Error(`Missing required public-boundary doc: ${file}`);
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findJpegPrivacyMetadata(buffer) {
  const blocks = [];
  let offset = 2;

  if (buffer[0] !== 0xff || buffer[1] !== 0xd8) {
    throw new Error("Profile JPEG does not start with SOI marker");
  }

  while (offset < buffer.length - 1) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    while (buffer[offset] === 0xff) {
      offset += 1;
    }

    const marker = buffer[offset];
    offset += 1;

    if (marker === 0xd9 || marker === 0xda) {
      break;
    }

    if (offset + 2 > buffer.length) {
      break;
    }

    const length = buffer.readUInt16BE(offset);
    if (marker === 0xe1 || marker === 0xed || marker === 0xfe) {
      const label = marker === 0xe1 ? "APP1" : marker === 0xed ? "APP13" : "COM";
      blocks.push(label);
    }

    offset += length;
  }

  return blocks;
}

function findWebpPrivacyMetadata(buffer) {
  const blocks = [];

  if (buffer.subarray(0, 4).toString("ascii") !== "RIFF" || buffer.subarray(8, 12).toString("ascii") !== "WEBP") {
    throw new Error("Profile WebP does not start with a WEBP RIFF header");
  }

  let offset = 12;
  while (offset + 8 <= buffer.length) {
    const fourcc = buffer.subarray(offset, offset + 4).toString("ascii");
    const size = buffer.readUInt32LE(offset + 4);
    if (["EXIF", "XMP ", "ICCP"].includes(fourcc)) {
      blocks.push(fourcc.trim());
    }
    offset += 8 + size + (size % 2);
  }

  return blocks;
}

const headers = await readFile(join(root, "public/_headers"), "utf8");
for (const assetPath of profileImagePaths) {
  const assetUrlPath = assetPath.replace(/^public/, "");
  const headerPattern = new RegExp(`${escapeRegExp(assetUrlPath)}\\s*\\r?\\n\\s*X-Robots-Tag:\\s*noindex,\\s*noimageindex`, "i");
  if (!headerPattern.test(headers)) {
    throw new Error(`Profile image is missing noindex/noimageindex response header: ${assetPath}`);
  }

  const image = await readFile(join(root, assetPath));
  const metadataBlocks = assetPath.endsWith(".webp")
    ? findWebpPrivacyMetadata(image)
    : findJpegPrivacyMetadata(image);

  if (metadataBlocks.length > 0) {
    throw new Error(`Profile image contains privacy metadata blocks: ${assetPath} (${metadataBlocks.join(", ")})`);
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
