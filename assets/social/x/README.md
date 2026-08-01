# X profile assets

These are the adopted profile assets for
[`@CoreCats_CCAT`](https://x.com/CoreCats_CCAT), combining Core Cats and Polar
Bird Astrology without presenting the account as official Core communication.

## Avatar

- `avatar/core-cats-0255-transparent.png` is the 384 x 384 transparent source
  for Core Cats #0255.
- `avatar/core-cats-0255-polar-night.png` is the adopted 384 x 384 export. Its
  transparent pixels are composited over Polar Bird night green `#062F37`.
- The composite is deterministic and introduces no generated or redrawn pixels.

SHA-256:

- transparent source:
  `9acb413d45451a887c6f38d40422992280ce1c71fd4705d3cdd19d622e815e87`
- adopted export:
  `a0efe0d5be086ea6582a584e39774ee10df0c716bc40d06c923897471a9d5572`

## Header

- `header/polar-bird-core-cats-x-header-1500x500.png` is the adopted 1500 x
  500 export.
- `header/polar-bird-core-cats-x-header-source.svg` is the self-contained,
  editable source.
- `header/polar-bird-core-cats-x-header-manifest.json` records the exact crop,
  placement, source hashes, output hashes, and excluded treatments.

The header keeps the original prominent star from the aurora artwork left of
center and places the 300 px Polar Bird Astrology seal at the canvas center so
that X mobile navigation controls do not cover it.

These files live outside `public/` because they are source-controlled social
identity assets, not website runtime assets. If the website later serves a
derived image, place only that web-facing derivative under `public/images/`.
