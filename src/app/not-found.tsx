import Link from "next/link";
import { WorkCard } from "@/components/WorkCard";
import { getArtwork } from "@/data/artworks";

export default function NotFound() {
  const suggestions = ["lion-king", "radiance", "hidden"].map(getArtwork).filter((a) => a !== undefined);

  return (
    <div className="wrap pt-16 pb-24">
      <p className="eyebrow text-accent">Page not found</p>
      <h1 className="m-0 mt-4 font-display text-[clamp(40px,6vw,72px)] leading-[1.02] font-bold tracking-[-0.03em]">
        This page isn&rsquo;t here,
        <br />
        but the drawings are.
      </h1>
      <p className="mt-6 mb-0 max-w-[520px] text-[19px] leading-relaxed text-ink-2">
        The link may be old or mistyped. Have a look at Bernard&rsquo;s work instead.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="pill bg-accent text-white hover:bg-accent-dark">
          Back to the home page
        </Link>
        <Link href="/works" className="pill border border-foreground px-[27px] py-[15px] text-foreground hover:bg-foreground hover:text-white">
          See all work
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
        {suggestions.map((a) => (
          <WorkCard key={a.slug} artwork={a} />
        ))}
      </div>
    </div>
  );
}
