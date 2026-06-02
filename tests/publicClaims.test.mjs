import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const scannedRoots = ["src", "content", "docs"];
const scannedFiles = ["README.md"];
const disallowedPublicClaims = [
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
  /CorePass.*(?:利用可能です|開始しました|対応済みです|有効化しました|利用できます|使えます)/i,
  /(?:Core)?公式(?:プロジェクト|発表|見解|ロードマップ)(?:です|として|が確定しました|を保証します|は確実です)/,
  /(?:利益|リターン|ローンチ|成功).*(?:保証します|確実です|確実に)/,
  /bezahlte readings? (?:sind )?(?:offen|geöffnet|verfügbar)/i,
  /(?:zahlung|zahlungen|wallet|konto|sign-?in)\s+(?:ist|sind)\s+(?:aktiv|live|verfügbar|bereit|freigeschaltet)/i,
  /corepass\s+(?:ist|sind)\s+(?:aktiv|live|verfügbar|bereit|freigeschaltet)/i,
  /(?<!nicht )(?<!kein )(?<!keine )(?:ist|als) offizielle(?:r|s|n)? core-(?:projekt|mitteilung|roadmap)/i,
  /offizielle(?:r|s|n)? (?:core-mitteilung|roadmap).*(?:bestätigt|garantiert|sicher)\b/i,
  /(?<!kein )(?<!keine )garantierte?.*(?:rendite|gewinn|launch|erfolg)/i
];

const positiveClaimFixtures = [
  "Paid readings are open now.",
  "CorePass is available.",
  "Wallet sign-in is live.",
  "This is an official Core announcement.",
  "The official roadmap is guaranteed.",
  "支払いは利用可能です。",
  "CorePassは有効化しました。",
  "Core公式プロジェクトです。",
  "利益を保証します。",
  "Zahlungen sind verfügbar.",
  "CorePass ist live.",
  "Dies ist offizielles Core-Projekt.",
  "Garantierte Rendite."
];

const negativeClaimFixtures = [
  "The site does not accept payments.",
  "This is not official Core communication.",
  "The note does not predict the official roadmap.",
  "This is not a guaranteed return.",
  "支払いは利用可能ではありません。",
  "Core公式発信ではありません。",
  "利益を保証しません。",
  "Zahlungen sind nicht verfügbar.",
  "Dies ist kein offizielles Core-Projekt.",
  "Keine garantierte Rendite."
];

function matchesDisallowedClaim(text) {
  return disallowedPublicClaims.some((pattern) => pattern.test(text));
}

for (const fixture of positiveClaimFixtures) {
  if (!matchesDisallowedClaim(fixture)) {
    throw new Error(`Positive public-claim fixture was not detected: ${fixture}`);
  }
}

for (const fixture of negativeClaimFixtures) {
  if (matchesDisallowedClaim(fixture)) {
    throw new Error(`Negative public-claim fixture was over-detected: ${fixture}`);
  }
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(path)));
    } else {
      files.push(path);
    }
  }

  return files;
}

const files = [];
for (const scannedRoot of scannedRoots) {
  files.push(...(await walk(join(root, scannedRoot))));
}
for (const scannedFile of scannedFiles) {
  files.push(join(root, scannedFile));
}

const failures = [];

for (const file of files) {
  const text = await readFile(file, "utf8");
  for (const pattern of disallowedPublicClaims) {
    if (pattern.test(text)) {
      failures.push(`${file}: ${pattern}`);
    }
  }
}

if (failures.length > 0) {
  throw new Error(`Disallowed public claim found:\n${failures.join("\n")}`);
}

console.log("Public claims test passed.");
