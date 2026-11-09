import { NextResponse, type NextRequest } from "next/server";
import { artworks } from "@/data/artworks";

/** Old artwork addresses that moved, so shared links keep working. */
const moved: Record<string, string> = {
  "the-elder": "the-bishop",
};

const known = new Set(artworks.map((a) => a.slug));

/**
 * Artwork pages stream their content, so a missing artwork would otherwise
 * show the 404 page with a 200 status. Checking the slug here, before the
 * page renders, returns a real 404 (or a permanent redirect for moved works).
 */
export function proxy(request: NextRequest) {
  const slug = decodeURIComponent(request.nextUrl.pathname.split("/")[2] ?? "");

  if (moved[slug]) {
    return NextResponse.redirect(new URL(`/works/${moved[slug]}`, request.url), 308);
  }
  if (!known.has(slug)) {
    // A path no route matches renders the site's not-found page with a 404 status.
    return NextResponse.rewrite(new URL("/_artwork-not-found", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/works/:slug",
};
