// Deployed to: polarbirdastrology.com/ja/reading-policy*
// Purpose: prevent a removed legacy route from serving stale edge HTML.
export default {
  async fetch() {
    return new Response("Page not found", {
      status: 404,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store, max-age=0",
        "x-robots-tag": "noindex, nofollow"
      }
    });
  }
};
