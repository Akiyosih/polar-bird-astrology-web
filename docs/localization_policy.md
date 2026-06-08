# Localization Policy

Status: public-safe website localization policy.

This document guides English and German localization for the public Polar Bird
Astrology website. It is intentionally sanitized for a public repository.

Do not add non-public benchmark details, local or private paths, unpublished
personal report text, private source materials, internal review records, client
data, or private planning notes to this repository.

## Purpose

The goal is to localize the website without lowering the quality reached in the
Japanese copy.

English and German are not separate product concepts. They should carry the
same meaning, report-role clarity, and brand voice as the Japanese site, while
using natural target-language wording.

## Source Of Truth

For Web UI and homepage copy, use:

1. the current Japanese website copy as the semantic source;
2. `docs/homepage_copy_policy_ja.md`;
3. this localization policy;
4. the current implementation and publication status.

English and German draft text should not be preserved merely because it already
exists. If it was written as a rough draft, replace it from the Japanese
semantic source and this policy.

Direct translation is not required when it would be unnatural in English or
German, but the target-language copy must not become more generic, defensive,
or detached from the Japanese meaning.

Treat the Japanese copy as an evidence-backed semantic source. If English or
German localization raises doubt about a Japanese claim, do not solve the issue
by weakening only the target-language copy into vague future-safe wording. Mark
the claim for source-owner or human confirmation. This is a parity gate, not a
reason to add defensive disclaimers to normal UI.

## Web Copy Scope

The public website uses Japanese, English, and German UI/homepage copy.

Homepage and UI copy may summarize, label, and route. It should keep surfaces
clear: hero, cards, buttons, report listings, footer, and explanatory pages
have different jobs.

When public report pages contain full report bodies, those bodies are not
translated in this public repository. Report-body localization is completed and
reviewed outside this public repository, then synchronized here only as
public-safe localized Markdown, PDFs, chart references, and frontmatter.

Report body locale scope is explicit. The website can support Japanese,
English, and German UI at the same time, but report bodies are synced only for
the locale versions that have been explicitly produced and approved in the
upstream report workflow. A full Japanese/English/German Core sample report set
is a special publication path and requires explicit user instruction.

## Boundary Style

Public-facing copy should protect boundaries through accurate scope and natural
wording, not by adding defensive disclaimers everywhere.

Do not add repeated sentences such as "this is not official" or "this is not
investment advice" to normal brand UI, cards, buttons, or report teasers.

Instead:

- make Polar Bird Astrology the speaker;
- keep Core as a sample subject and reader context;
- avoid official Core voice or authority posture;
- do not claim price prediction, investment recommendation, payment readiness,
  wallet/sign-in availability, launch certainty, guaranteed outcomes, or
  unverified product facts;
- move necessary factual boundaries to the appropriate explanatory page.

If a claim is not supported by the current public implementation or accepted
publication status, remove or narrow the claim rather than weakening the whole
surface with broad disclaimers.

## English Notes

Use plain, direct English that international readers can understand.

Do not make the copy overly poetic or vague. Avoid overusing "may", "could",
"might", "possibly", or "can be interpreted as" when the Japanese source makes
a clear accepted claim.

Avoid AI-like abstractions such as "navigate", "transform", "align", or
"journey" unless the sentence also says what the reader can actually understand
or do.

Use familiar astrology terms naturally: natal chart, solar return, and new moon
cycle. When the sentence needs technical meaning, connect the term to the
reader-facing point.

Before finalizing English website copy, run a calque / idiom sweep:

- Do not translate `導線` mechanically as "path". Use the surface's actual job:
  "Order", "Report ordering", "CorePay order flow in preparation", or
  another natural UI phrase.
- Do not force every `星まわり` into "planetary patterns". Choose by surface:
  "charts", "astrology reports", "planetary placements", "planetary pattern",
  or a more natural compact tagline.
- Do not translate `自然に読める` as "astrology can read naturally". Use an
  English subject such as "when the chart supports a direct reading".
- Do not turn `公開元の情報を参照します` into a warning to the reader. Keep it as
  scope, for example "Product facts belong to public source information."
- Do not translate sensory phrases such as `心が洗われる感覚` or `身体感覚` word
  for word. Use natural English sensory or embodied language.

## German Notes

Use natural German, including normal German characters. Finished public copy
should not use ASCII transliterations such as "fuer", "oeffentlich", or
"Ueber" unless a technical constraint requires them.

Do not convert one Japanese sentence into one long German sentence. Split
sentences so each one has a clear role.

Avoid heavy compound nouns, abstract nominalizations, and passive structures
when they make the copy feel administrative rather than readable.

Use astrology terms that German readers can recognize, such as "Radix",
"Solar Return", "Neumondzyklus", "Aszendent", and "Mondknoten", while keeping
the sentence practical and readable.

For report-ordering surfaces, prefer "Bestellung" and "bestellen" over
"Reportkauf" when the workflow is an order with later delivery rather than
instant purchase or access.

## Public Sync Checklist

Before syncing localized report artifacts into this repository, confirm:

- the localized report body was produced in the approved upstream report
  workflow;
- the public repository is not being used to translate unpublished report text;
- frontmatter, period labels, report type, chart references, Markdown, and PDF
  filenames point to the same locale and report version;
- no non-public benchmark details, unpublished personal report text, private
  source materials, internal review records, local/private paths, or client
  data are included;
- English copy has passed the calque / idiom sweep when English artifacts are
  being synced;
- the copy does not drift into repeated defensive disclaimers;
- the copy does not make unsupported public, product, payment, wallet/sign-in,
  price, investment, or official-status claims.
