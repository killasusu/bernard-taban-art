import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtworkImage } from "@/components/ArtworkImage";
import { artist } from "@/data/artist";
import { artworks, availabilityLabel, getArtwork } from "@/data/artworks";

export function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/works/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const art = getArtwork(slug);
  return art ? { title: art.title, description: `${art.title} (${art.year}), ${art.medium}` } : {};
}

export default async function ArtworkPage({ params }: PageProps<"/works/[slug]">) {
  const { slug } = await params;
  const art = getArtwork(slug);
  if (!art) notFound();

  const i = artworks.indexOf(art);
  const prev = artworks[(i - 1 + artworks.length) % artworks.length];
  const next = artworks[(i + 1) % artworks.length];
  const subject = encodeURIComponent(`Enquiry: ${art.title} (${art.year})`);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <Link href="/works" className="text-sm uppercase tracking-widest text-muted hover:text-accent">
        ← All works
      </Link>
      <div className="mt-8 grid gap-12 lg:grid-cols-[3fr_2fr]">
        <ArtworkImage artwork={art} priority sizes="(min-width: 1024px) 60vw, 100vw" className="shadow-2xl shadow-black/20" />
        <div className="lg:pt-6">
          <p className="text-sm uppercase tracking-[0.25em] text-accent">{art.series} series</p>
          <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{art.title}</h1>
          <dl className="mt-8 divide-y divide-line border-y border-line text-sm">
            {[
              ["Year", art.year],
              ["Medium", art.medium],
              ["Size", art.size],
              ["Status", availabilityLabel[art.availability]],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-3">
                <dt className="text-muted">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 leading-relaxed">{art.description}</p>
          {art.availability === "available" && (
            <a
              href={`mailto:${artist.email}?subject=${subject}`}
              className="mt-8 inline-block rounded-full bg-foreground px-6 py-3 text-sm uppercase tracking-widest text-background hover:bg-accent"
            >
              Enquire about this work
            </a>
          )}
        </div>
      </div>
      <nav className="mt-20 flex justify-between border-t border-line pt-6 text-sm" aria-label="More works">
        <Link href={`/works/${prev.slug}`} className="hover:text-accent">
          ← {prev.title}
        </Link>
        <Link href={`/works/${next.slug}`} className="text-right hover:text-accent">
          {next.title} →
        </Link>
      </nav>
    </div>
  );
}
