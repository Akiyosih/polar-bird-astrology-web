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
- [ ] `/en/status`, `/ja/status`, and `/de/status` describe the current public status.
- [ ] `/en/privacy`, `/ja/privacy`, and `/de/privacy` match the current collection state.
- [ ] `/en/transparency`, `/ja/transparency`, and `/de/transparency` link to the public repository after the repo exists.

## Validation

- [ ] `npm run check`
- [ ] `npm run build`
