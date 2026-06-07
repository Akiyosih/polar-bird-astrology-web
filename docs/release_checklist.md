# Release Checklist

Use this before a public launch or meaningful public content update.

## Public Boundary

- [ ] No `.env` or secret-bearing file is committed.
- [ ] No raw chart data, private report, client profile, receipt, session log, or private consultation output is committed.
- [ ] Public copy does not imply Core authorization or Core-operated communication.
- [ ] Public copy does not present astrology as financial guidance, market prediction, or guaranteed result.
- [ ] Public copy does not make unverified payment, wallet, sign-in, or product availability claims.
- [ ] Internal planning notes are not committed.
- [ ] Initial public history does not contain removed internal files or local agent instructions.

## Site

- [ ] `/en`, `/ja`, and `/de` routes build.
- [ ] `/en/core-field-notes`, `/ja/core-field-notes`, and `/de/core-field-notes` have the current Field Note entry.
- [ ] `/en/purchase`, `/ja/purchase`, and `/de/purchase` clearly mark report purchase as in preparation.
- [ ] `/en/reading-policy`, `/ja/reading-policy`, and `/de/reading-policy` explain the reading style, boundaries, and public repository link.

## Core Report Updates

- [ ] The source report set contains the latest selected Markdown, matching PDF, and matching light/dark chart wheel PNGs for each report being updated.
- [ ] Prefer the private workflow wrapper that stages matching light/dark chart assets from the same ChartData before import. If importing a prepared set directly, run `node scripts/import-core-report-set.mjs --source-dir <source-report-dir>` for a full Core set update, or add `--reports new-moon` for a monthly new-moon-only update.
- [ ] Confirm the import summary points to the intended Markdown, PDF, and chart assets.
- [ ] Confirm old same-type Core PDF/chart assets were removed unless `--keep-old-assets` was intentionally used.

## Validation

- [ ] `npm run check`
- [ ] `npm run build`
