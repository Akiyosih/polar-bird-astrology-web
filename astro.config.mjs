import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: process.env.PUBLIC_SITE_URL || "https://polar-bird-astrology.example",
  trailingSlash: "never"
});

