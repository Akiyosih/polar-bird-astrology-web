import { copyFile, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();

const reports = {
  natal: {
    sourcePattern: /^reading_general_core_(\d{8}-\d{6})\.md$/,
    pdfName: (date) => `core-natal-field-note-${date}.pdf`,
    pdfPattern: /^core-natal-field-note-\d{8}\.pdf$/,
    pdfSourceName: (stamp) => `reading_general_core_${stamp}.pdf`,
    chartPattern: (stamp) => new RegExp(`^chart_wheel_natal_core_${escapeRegExp(stamp)}_.+\\.png$`),
    chartName: (date) => `core-natal-chart-${date}.png`,
    chartPublicPattern: /^core-natal-chart-\d{8}\.png$/,
    contentFile: path.join("content", "core-field-notes", "core-natal-field-note", "ja.md")
  },
  "solar-return": {
    sourcePattern: /^reading_solar_return_core_(\d{8}-\d{6})\.md$/,
    pdfName: (date) => `core-2026-solar-return-report-${date}.pdf`,
    pdfPattern: /^core-2026-solar-return-report-\d{8}\.pdf$/,
    pdfSourceName: (stamp) => `reading_solar_return_core_${stamp}.pdf`,
    chartPattern: (stamp) => new RegExp(`^chart_wheel_solar_return_core_${escapeRegExp(stamp)}_.+\\.png$`),
    chartName: (date) => `core-solar-return-chart-${date}.png`,
    chartPublicPattern: /^core-solar-return-chart-\d{8}\.png$/,
    contentFile: path.join("content", "core-field-notes", "core-2026-solar-return-field-note", "ja.md")
  },
  "new-moon": {
    sourcePattern: /^reading_new_moon_core_(\d{8}-\d{6})\.md$/,
    pdfName: (date) => `core-2026-new-moon-cycle-report-${date}.pdf`,
    pdfPattern: /^core-2026-new-moon-cycle-report-\d{8}\.pdf$/,
    pdfSourceName: (stamp) => `reading_new_moon_core_${stamp}.pdf`,
    chartPattern: (stamp) => new RegExp(`^chart_wheel_new_moon_core_${escapeRegExp(stamp)}_.+\\.png$`),
    chartName: (date) => `core-new-moon-chart-${date}.png`,
    chartPublicPattern: /^core-new-moon-chart-\d{8}\.png$/,
    contentFile: path.join("content", "core-field-notes", "core-2026-new-moon-cycle-field-note", "ja.md")
  }
};

function usage() {
  return [
    "Usage:",
    "  node scripts/import-core-report-set.mjs --source-dir <dir> [--reports natal,solar-return,new-moon] [--keep-old-assets]",
    "",
    "The source directory must contain the selected Core reading Markdown files, matching PDFs,",
    "and chart wheel PNGs retained by the PDF rendering pipeline."
  ].join("\n");
}

function parseArgs(argv) {
  const options = {
    sourceDir: "",
    reports: Object.keys(reports),
    pruneOldAssets: true
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--source-dir") {
      options.sourceDir = argv[++index] || "";
    } else if (arg === "--reports") {
      options.reports = (argv[++index] || "").split(",").map((value) => value.trim()).filter(Boolean);
    } else if (arg === "--keep-old-assets") {
      options.pruneOldAssets = false;
    } else if (arg === "--help" || arg === "-h") {
      console.log(usage());
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${arg}\n\n${usage()}`);
    }
  }

  if (!options.sourceDir) {
    throw new Error(`Missing --source-dir.\n\n${usage()}`);
  }

  for (const key of options.reports) {
    if (!reports[key]) {
      throw new Error(`Unsupported report key: ${key}`);
    }
  }

  return options;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function assertInside(baseDir, target) {
  const relative = path.relative(baseDir, target);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Refusing to write outside repository: ${target}`);
  }
}

async function walkFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function findLatestMarkdown(sourceDir, config) {
  const entries = await readdir(sourceDir, { withFileTypes: true });
  const candidates = entries
    .filter((entry) => entry.isFile())
    .map((entry) => {
      const match = entry.name.match(config.sourcePattern);
      return match ? { name: entry.name, stamp: match[1], fullPath: path.join(sourceDir, entry.name) } : undefined;
    })
    .filter(Boolean)
    .sort((a, b) => b.stamp.localeCompare(a.stamp));

  if (candidates.length === 0) {
    throw new Error(`No matching Markdown source found for ${config.contentFile}`);
  }

  return candidates[0];
}

async function findChart(sourceDir, config, stamp) {
  const matcher = config.chartPattern(stamp);
  const files = await walkFiles(sourceDir);
  const candidates = [];

  for (const file of files) {
    const name = path.basename(file);
    if (!matcher.test(name)) {
      continue;
    }
    candidates.push({
      fullPath: file,
      nestingPenalty: file.includes(`${path.sep}chart_included${path.sep}`) ? 1 : 0,
      mtimeMs: (await stat(file)).mtimeMs
    });
  }

  candidates.sort((a, b) => a.nestingPenalty - b.nestingPenalty || b.mtimeMs - a.mtimeMs);
  if (candidates.length === 0) {
    throw new Error(`No chart wheel PNG found for stamp ${stamp}. Re-render that PDF with retained artifacts before importing.`);
  }

  return candidates[0].fullPath;
}

function stripFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]*)$/);
  return (match ? match[1] : markdown).trim();
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Existing public Field Note is missing frontmatter.");
  }

  const lines = match[1].split(/\r?\n/);
  const data = new Map();
  for (const line of lines) {
    const entry = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (entry) {
      data.set(entry[1], entry[2]);
    }
  }

  return { lines, data };
}

function updateFrontmatterValue(lines, key, value) {
  const next = `${key}: ${value}`;
  const index = lines.findIndex((line) => line.match(new RegExp(`^${escapeRegExp(key)}:\\s*`)));
  if (index >= 0) {
    lines[index] = next;
  } else {
    lines.push(next);
  }
}

function normalizeJapanesePeriod(markdown) {
  const periodLine = markdown.match(/^対象期間[:：]\s*(.+)$/m);
  if (!periodLine) {
    return undefined;
  }

  const match = periodLine[1].match(
    /(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日(?:\s+\d{1,2}:\d{2})?\s*[-–]\s*(\d{4})年\s*(\d{1,2})月\s*(\d{1,2})日/
  );
  if (!match) {
    return undefined;
  }

  const left = `${match[1]}.${match[2].padStart(2, "0")}.${match[3].padStart(2, "0")}`;
  const right = `${match[4]}.${match[5].padStart(2, "0")}.${match[6].padStart(2, "0")}`;
  const start = `${match[1]}年${Number(match[2])}月${Number(match[3])}日`;
  const end = match[1] === match[4]
    ? `${Number(match[5])}月${Number(match[6])}日`
    : `${match[4]}年${Number(match[5])}月${Number(match[6])}日`;
  return { frontmatter: `${left} - ${right}`, summaryRange: `${start}から${end}まで`, titleDate: left };
}

function stripLeadingJapanesePeriodLine(markdown) {
  return markdown.replace(
    /^(#[^\r\n]*\r?\n)(?:[ \t]*\r?\n)?対象期間[:：][^\r\n]*(?:\r?\n){1,2}/,
    "$1\n"
  );
}

function buildPublicMarkdown(existing, sourceBody, config, publicPdf, publicChart) {
  const { lines, data } = parseFrontmatter(existing);
  updateFrontmatterValue(lines, "pdfUrl", `/reports/core/${publicPdf}`);
  updateFrontmatterValue(lines, "chartImage", `/reports/core/charts/${publicChart}`);

  let publicBody = sourceBody;
  if (config === reports["new-moon"]) {
    const period = normalizeJapanesePeriod(sourceBody);
    publicBody = stripLeadingJapanesePeriodLine(sourceBody);
    if (period) {
      updateFrontmatterValue(lines, "period", period.frontmatter);
      const title = data.get("title") || "";
      if (/^Core(?: Blockchain)? 新月サイクル分析/.test(title)) {
        updateFrontmatterValue(lines, "title", `Core Blockchain 新月サイクル分析 ${period.titleDate}`);
      }
      const summary = data.get("summary") || "";
      if (summary) {
        updateFrontmatterValue(
          lines,
          "summary",
          summary.replace(/\d{4}年\d{1,2}月\d{1,2}日から\d{1,2}月\d{1,2}日まで/, period.summaryRange)
        );
      }
    }
  }

  return `---\n${lines.join("\n")}\n---\n${publicBody.trim()}\n`;
}

async function pruneMatching(dir, pattern, keepName) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile() || entry.name === keepName || !pattern.test(entry.name)) {
      continue;
    }
    const target = path.join(dir, entry.name);
    assertInside(root, target);
    await rm(target);
  }
}

async function importReport(key, sourceDir, pruneOldAssets) {
  const config = reports[key];
  const source = await findLatestMarkdown(sourceDir, config);
  const date = source.stamp.slice(0, 8);
  const sourcePdf = path.join(sourceDir, config.pdfSourceName(source.stamp));
  if (!existsSync(sourcePdf)) {
    throw new Error(`Missing matching PDF for ${source.name}: ${sourcePdf}`);
  }

  const sourceChart = await findChart(sourceDir, config, source.stamp);
  const publicPdf = config.pdfName(date);
  const publicChart = config.chartName(date);
  const pdfDir = path.join(root, "public", "reports", "core");
  const chartDir = path.join(pdfDir, "charts");
  const pdfTarget = path.join(pdfDir, publicPdf);
  const chartTarget = path.join(chartDir, publicChart);
  const contentTarget = path.join(root, config.contentFile);

  for (const target of [pdfTarget, chartTarget, contentTarget]) {
    assertInside(root, target);
  }

  await mkdir(pdfDir, { recursive: true });
  await mkdir(chartDir, { recursive: true });

  await copyFile(sourcePdf, pdfTarget);
  await copyFile(sourceChart, chartTarget);

  const existing = await readFile(contentTarget, "utf8");
  const sourceBody = stripFrontmatter(await readFile(source.fullPath, "utf8"));
  const publicMarkdown = buildPublicMarkdown(existing, sourceBody, config, publicPdf, publicChart);
  await writeFile(contentTarget, publicMarkdown, "utf8");

  if (pruneOldAssets) {
    await pruneMatching(pdfDir, config.pdfPattern, publicPdf);
    await pruneMatching(chartDir, config.chartPublicPattern, publicChart);
  }

  return {
    report: key,
    stamp: source.stamp,
    markdown: path.relative(root, contentTarget),
    pdf: path.relative(root, pdfTarget),
    chart: path.relative(root, chartTarget)
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const sourceDir = path.resolve(options.sourceDir);
  if (!existsSync(sourceDir)) {
    throw new Error(`Source directory does not exist: ${sourceDir}`);
  }

  const imported = [];
  for (const key of options.reports) {
    imported.push(await importReport(key, sourceDir, options.pruneOldAssets));
  }

  console.log(JSON.stringify({ imported }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
