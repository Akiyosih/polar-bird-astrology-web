import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { inflateRawSync, inflateSync } from "node:zlib";

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

const forbiddenPdfClaimPatterns = [
  /paid readings are open(?: now| for|$)/i,
  /core-native payments? (?:is|are) ready/i,
  /wall money (?:is|are)? ?available now/i,
  /payto (?:is|are)? ?available now/i,
  /corepass (?:is|are)? ?(?:enabled|live|available|ready)/i,
  /(?:wallet|account) sign-?in (?:is|are)? ?(?:enabled|live|available|ready)/i,
  /payments? (?:is|are)? ?(?:enabled|live|available|ready)/i,
  /(?:is|are|as|an) official core (?:announcement|communication|project|reading)/i,
  /officially supported payment/i,
  /official roadmap (?:is|has been)? ?(?:confirmed|guaranteed|certain)\b/i,
  /(?<!not a )(?<!not an )(?<!not )guaranteed (?:return|profit|launch|success)/i,
  /有料(?:鑑定|リーディング|レポート)?.*(?:受付中|開始|販売中)/,
  /(?:支払い|決済|ウォレット|wallet).*(?:利用可能です|受付中です|開始しました|対応済みです|有効化しました|利用できます|使えます)/i,
  /(?:支払い|決済)(?:が|は)?可能(?:です|になりました|な状態です|$)/,
  /CorePass.*(?:利用可能です|開始しました|対応済みです|有効化しました|利用できます|使えます)/i,
  /(?:Core)?公式(?:プロジェクト|発表|見解|ロードマップ)(?:です|として|が確定しました|を保証します|は確実です)/,
  /(?:利益|リターン|ローンチ|成功).*(?:保証します|確実です|確実に)/,
  /bezahlte readings? (?:sind )?(?:offen|geöffnet|verfügbar)/i,
  /(?:zahlung|zahlungen|wallet|konto|sign-?in)\s+(?:ist|sind)\s+(?:aktiv|live|verfügbar|bereit|freigeschaltet)/i,
  /(?:zahlung|zahlungen|wallet|konto|sign-?in)\s+(?:verfügbar|bereit|aktiv|live|freigeschaltet)/i,
  /corepass\s+(?:ist|sind)\s+(?:aktiv|live|verfügbar|bereit|freigeschaltet)/i,
  /(?<!nicht )(?<!kein )(?<!keine )(?:ist|als) offizielle(?:r|s|n)? core-(?:projekt|mitteilung|roadmap)/i,
  /offizielle(?:r|s|n)? (?:core-mitteilung|roadmap).*(?:bestätigt|garantiert|sicher)\b/i,
  /(?<!kein )(?<!keine )garantierte?.*(?:rendite|gewinn|launch|erfolg)/i
];

function extensionOf(path) {
  const match = path.match(/\.[^.]+$/);
  return match ? match[0] : "";
}

function decodeUtf16Ascii(buffer, littleEndian) {
  const chars = [];
  for (let index = 0; index + 1 < buffer.length; index += 2) {
    const code = littleEndian
      ? buffer[index] | (buffer[index + 1] << 8)
      : (buffer[index] << 8) | buffer[index + 1];
    if (code === 9 || code === 10 || code === 13 || (code >= 32 && code <= 126)) {
      chars.push(String.fromCharCode(code));
    } else {
      chars.push(" ");
    }
  }
  return chars.join("");
}

function textViews(buffer) {
  const latin1 = buffer.toString("latin1");
  return [
    buffer.toString("utf8"),
    latin1,
    latin1.replaceAll("\0", ""),
    decodeUtf16Ascii(buffer, true),
    decodeUtf16Ascii(buffer, false)
  ];
}

function flatePdfStreams(pdfBuffer) {
  const source = pdfBuffer.toString("latin1");
  const streams = [];
  const streamPattern = /stream\r?\n([\s\S]*?)\r?\nendstream/g;
  let match;

  while ((match = streamPattern.exec(source)) !== null) {
    const prefix = source.slice(Math.max(0, match.index - 800), match.index);
    if (!prefix.includes("/FlateDecode")) {
      continue;
    }

    const compressed = Buffer.from(match[1], "latin1");
    for (const inflate of [inflateSync, inflateRawSync]) {
      try {
        streams.push(inflate(compressed));
        break;
      } catch {
        // Some PDF streams use zlib headers and others raw deflate. Try both.
      }
    }
  }

  return streams;
}

function scanText(rel, text, failures, extraPatterns = []) {
  for (const pattern of [...forbiddenContentPatterns, ...extraPatterns]) {
    if (pattern.test(text)) {
      failures.push(`${rel}: matched forbidden content pattern ${pattern}`);
    }
  }
}

async function scanPdf(rel, file, failures) {
  let buffer;
  try {
    buffer = await readFile(file);
  } catch (error) {
    if (error.code === "ENOENT") {
      return;
    }
    throw error;
  }

  const texts = textViews(buffer);
  for (const stream of flatePdfStreams(buffer)) {
    texts.push(...textViews(stream));
  }

  for (const text of texts) {
    scanText(rel, text, failures, forbiddenPdfClaimPatterns);
  }
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

  if (extensionOf(rel) === ".pdf") {
    await scanPdf(rel, file, failures);
    continue;
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

  scanText(rel, text, failures);
}

if (failures.length > 0) {
  console.error("Public boundary scan failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`Public boundary scan passed (${files.length} files checked).`);
