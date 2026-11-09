/**
 * The public address of the site. Set NEXT_PUBLIC_SITE_URL when deploying
 * (e.g. https://bernardtaban.art) so link previews, the sitemap and
 * search engines use the real address.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
