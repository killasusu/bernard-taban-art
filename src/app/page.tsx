import Link from "next/link";
import { ArtworkCard } from "@/components/ArtworkCard";
import { ArtworkImage } from "@/components/ArtworkImage";
import { artist } from "@/data/artist";
import { artworks } from "@/data/artworks";

export default function Home() {
  const featured = artworks.filter((a) => a.featured);
  const hero = featured[0] ?? artworks[0];

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-12 pb-20 md:grid-cols-2 md:pt-20">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-accent">{artist.location}</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            {artist.name}
          </h1>
          <p className="mt-3 font-display text-2xl text-muted italic">{artist.tagline}</p>
          <p className="mt-8 max-w-md text-lg leading-relaxed">{artist.intro}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/works"
              className="rounded-full bg-foreground px-6 py-3 text-sm uppercase tracking-widest text-background hover:bg-accent"
            >
              View the works
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-foreground px-6 py-3 text-sm uppercase tracking-widest hover:border-accent hover:text-accent"
            >
              Commission a piece
            </Link>
          </div>
        </div>
        <Link href={`/works/${hero.slug}`} className="block">
          <ArtworkImage artwork={hero} priority sizes="(min-width: 768px) 50vw, 100vw" className="shadow-2xl shadow-black/20" />
          <p className="mt-3 text-sm text-muted">
            <span className="font-display text-base text-foreground italic">{hero.title}</span>, {hero.year}
          </p>
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex items-end justify-between border-b border-line pb-4">
          <h2 className="font-display text-3xl">Selected works</h2>
          <Link href="/works" className="text-sm uppercase tracking-widest hover:text-accent">
            All works →
          </Link>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => (
            <ArtworkCard key={a.slug} artwork={a} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-4xl px-5 text-center">
        <blockquote className="font-display text-3xl leading-snug italic sm:text-4xl">
          “{artist.statement}”
        </blockquote>
        <p className="mt-6 text-sm uppercase tracking-widest text-muted">{artist.name}</p>
      </section>
    </>
  );
}
