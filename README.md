# Polar Bird Astrology

Public website for Polar Bird Astrology's Core community Field Notes.

This project publishes unofficial astrology notes for community reflection and
entertainment. It is not official Core communication, investment advice, or a
payment product.

## Philosophy

Polar Bird Astrology treats astrology as a language for noticing rhythm, mood,
timing, and meaning. Public Field Notes are edited for a general audience and
keep a clear line between symbolic interpretation and factual product claims.

## What This Repository Contains

- A static Astro website.
- Public Field Notes in English, Japanese, and German.
- Public-facing privacy, method, and transparency pages.
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

## Deployment

The site is designed for static hosting. Cloudflare Pages can build it with:

- build command: `npm run build`
- output directory: `dist`

No server functions are required for the current public site.
