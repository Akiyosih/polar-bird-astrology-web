import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const textExtensions = new Set([
  ".astro",
  ".css",
  ".js",
  ".json",
  ".md",
  ".mjs",
  ".ts",
  ".txt",
  ".yml",
  ".yaml"
]);

const forbiddenPathParts = [
  "birth_data",
  "raw_chart",
  "generated_report",
  "consultation_qa",
  "output/clients",
  "output/consultation_qa",
  "evidence_bundle",
  "review_packet",
  "client_profile",
  "payment_receipt",
  "payment_receipts",
  "session_log",
  "session_logs"
];

const forbiddenContentPatterns = [
  /-----BEGIN (?:RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----/,
  /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/,
  /\bsk-[A-Za-z0-9_-]{20,}\b/,
  /\bCF_API_TOKEN\s*=/,
  /\bCOREPASS_(?:SECRET|SESSION|TOKEN)\s*=/,
  /\bPAYTO_(?:SECRET|TOKEN|WEBHOOK_SECRET)\s*=/,
  /\bWALL_MONEY_(?:SECRET|TOKEN|WEBHOOK_SECRET)\s*=/,
  /\b(?:birth_data|raw_chart|generated_report|consultation_qa|receipt|session_log|client_profile)\s*[:=]\s*["'{[]?[^,\n]+/i
];

function extensionOf(path) {
  const match = path.match(/\.[^.]+$/);
  return match ? match[0] : "";
}

function publicCandidateFiles() {
  const output = execFileSync(
    "git",
    ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
    { cwd: root }
  );

  return [...new Set(output.toString("utf8").split("\0").filter(Boolean))];
}

const files = publicCandidateFiles();
const failures = [];

for (const rel of files) {
  const file = join(root, rel);

  if (rel === ".env" || /^\.env\.(?!example$)/.test(rel)) {
    failures.push(`${rel}: secret environment file is not public-safe`);
  }

  for (const part of forbiddenPathParts) {
    if (rel.includes(part)) {
      failures.push(`${rel}: forbidden private-data path marker "${part}"`);
    }
  }

  if (!textExtensions.has(extensionOf(rel))) {
    continue;
  }

  let text;
  try {
    text = await readFile(file, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      continue;
    }
    throw error;
  }

  for (const pattern of forbiddenContentPatterns) {
    if (pattern.test(text)) {
      failures.push(`${rel}: matched forbidden content pattern ${pattern}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Public boundary scan failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Public boundary scan passed (${files.length} files checked).`);
