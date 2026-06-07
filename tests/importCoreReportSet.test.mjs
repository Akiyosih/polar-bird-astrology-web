import { execFile } from "node:child_process";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const repoRoot = process.cwd();

const tempRoot = await mkdtemp(join(tmpdir(), "core-report-import-"));
const sourceDir = join(tempRoot, "source");
const contentDir = join(tempRoot, "content", "core-field-notes", "core-natal-field-note");
try {
  await mkdir(sourceDir, { recursive: true });
  await mkdir(contentDir, { recursive: true });

  await writeFile(
    join(contentDir, "ja.md"),
    [
      "---",
      "title: Core 出生ホロスコープ分析",
      "reportType: natal",
      "summary: old summary",
      "pdfUrl: /reports/core/old.pdf",
      "chartImage: /reports/core/charts/old.png",
      "chartImageDark: /reports/core/charts/old-dark.png",
      "---",
      "# Old",
      "",
      "## Old section",
      "",
      "Old body.",
      ""
    ].join("\n"),
    "utf8"
  );

  await writeFile(
    join(sourceDir, "reading_general_core_20990101-000000.md"),
    [
      "---",
      "private: stripped",
      "---",
      "# Core 出生ホロスコープ分析",
      "",
      "## Coreの星まわりから見える本質",
      "",
      "本文です。",
      ""
    ].join("\n"),
    "utf8"
  );
  await writeFile(join(sourceDir, "reading_general_core_20990101-000000.pdf"), "pdf", "utf8");
  await writeFile(join(sourceDir, "chart_wheel_natal_core_20990101-000000_report_plus_tight.png"), "light", "utf8");
  await writeFile(join(sourceDir, "chart_wheel_natal_core_20990101-000000_report_plus_tight_dark.png"), "dark", "utf8");

  const { stdout } = await execFileAsync(
    process.execPath,
    [
      join(repoRoot, "scripts", "import-core-report-set.mjs"),
      "--source-dir",
      sourceDir,
      "--reports",
      "natal",
      "--asset-version",
      "auto"
    ],
    { cwd: tempRoot }
  );

  const summary = JSON.parse(stdout);
  const imported = summary.imported[0];
  if (imported.chartUrl !== "/reports/core/charts/core-natal-chart-20990101.png?v=20990101-000000") {
    throw new Error(`Unexpected light chart URL: ${imported.chartUrl}`);
  }
  if (imported.chartDarkUrl !== "/reports/core/charts/core-natal-chart-20990101-dark.png?v=20990101-000000") {
    throw new Error(`Unexpected dark chart URL: ${imported.chartDarkUrl}`);
  }

  const markdown = await readFile(join(contentDir, "ja.md"), "utf8");
  if (!markdown.includes("chartImage: /reports/core/charts/core-natal-chart-20990101.png?v=20990101-000000")) {
    throw new Error("Imported markdown did not include auto-versioned chartImage.");
  }
  if (!markdown.includes("chartImageDark: /reports/core/charts/core-natal-chart-20990101-dark.png?v=20990101-000000")) {
    throw new Error("Imported markdown did not include auto-versioned chartImageDark.");
  }

  console.log("Core report import script test passed.");
} finally {
  await rm(tempRoot, { recursive: true, force: true });
}
