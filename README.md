# Polar Bird Astrology

Public website for Polar Bird Astrology, currently publishing sample
astrology reports with Core Blockchain as the primary sample set.

This project publishes sample astrology reports for public reading. It reads
Core through natal, solar-return, and new-moon-cycle reports while avoiding
official Core claims, investment claims, and unverified product or payment
claims.

## Philosophy

Polar Bird Astrology treats astrology as a language for noticing rhythm, mood,
timing, and meaning. Public sample reports are edited for a general audience
and keep a clear line between symbolic interpretation and factual product
claims.

## What This Repository Contains

- A static Astro website.
- Public sample reports in English, Japanese, and German.
- Public-facing reading-policy and report-purchase preparation pages.
- Public-safe Japanese homepage copy guidance.
- Tests that prevent accidental private-data and unverified product claims.

## What This Repository Does Not Contain

- Client profiles or birth data.
- Raw chart data or generated private reports.
- Payment receipts, sessions, logs, or secrets.
- Server-side payment, wallet, or sign-in code.

## Local Development

```bash
npm install
npm run check
npm run build
```

The static build output is written to `dist/`.

For Japanese homepage and UI copy, see
`docs/homepage_copy_policy_ja.md`.

## Deployment

The site is designed for static hosting. Cloudflare Pages can build it with:

- build command: `npm run build`
- output directory: `dist`

No server functions are required for the current public site.

The intended production domain is `polarbirdastrology.com`. The Cloudflare
Pages project name can be `polarbirdastrology` so the temporary Pages URL stays
aligned with the public brand.
