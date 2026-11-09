import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { artist, orderLink } from "@/data/artist";
import { artworks, availabilityLabel, getArtwork } from "@/data/artworks";

export function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/works/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const art = getArtwork(slug);
  if (!art) return {};
  const description = `${art.title}: ${art.medium} by ${artist.name}. ${art.description}`;
  return {
    title: art.title,
    description,
    alternates: { canonical: `/works/${art.slug}` },
    openGraph: {
      title: `${art.title} by ${artist.name}`,
      description,
      images: art.image ? [{ url: art.image, alt: `${art.title}, ${art.medium}` }] : undefined,
    },
  };
}

export default function ArtworkPage({ params }: PageProps<"/works/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-[70vh]" />}>
      <ArtworkDetail params={params} />
    </Suspense>
  );
}

async function ArtworkDetail({ params }: { params: PageProps<"/works/[slug]">["params"] }) {
  const { slug } = await params;
  const art = getArtwork(slug);
  if (!art) notFound();

  const i = artworks.indexOf(art);
  const prev = artworks[(i - 1 + artworks.length) % artworks.length];
  const next = artworks[(i + 1) % artworks.length];
  const order = orderLink(`Hello Bernard, I saw "${art.title}" on your website and would like a portrait like it.`);

  const details = (
    [
      ["Year", art.year],
      ["Medium", art.medium],
      ["Size", art.size],
      ["Status", art.availability && availabilityLabel[art.availability]],
    ] as const
  ).filter(([, v]) => v);

  return (
    <div className="wrap pt-8 pb-24">
      <Link href="/works" className="inline-block py-3 text-[15px] font-semibold text-muted hover:text-accent">
        ← All work
      </Link>
      <div className="mt-4 flex flex-wrap items-start gap-14">
        <div className="min-w-0 flex-[1_1_480px] rounded-[20px] bg-surface p-4">
          {art.image && (
            <a href={art.image} target="_blank" rel="noreferrer" className="group block cursor-zoom-in">
              <Image
                src={art.image}
                alt={`${art.title}, ${art.medium} by Bernard Taban`}
                width={1600}
                height={Math.round(1600 / art.ratio)}
                priority
                sizes="(min-width: 1100px) 640px, 100vw"
                className="block h-auto max-h-[80vh] w-full rounded-lg object-contain"
              />
              <span className="mt-3 flex min-h-11 items-center justify-center gap-2 text-[15px] font-semibold text-muted group-hover:text-accent">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                </svg>
                View full size
              </span>
            </a>
          )}
        </div>
        <div className="flex min-w-0 flex-[999_1_320px] flex-col gap-5 lg:pt-4">
          <p className="eyebrow text-accent">{art.series}</p>
          <h1 className="h-section m-0 text-[clamp(36px,4.5vw,56px)]">{art.title}</h1>
          <dl className="m-0 divide-y divide-line rounded-2xl border border-line bg-surface px-6 text-[15px]">
            {details.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 py-4">
                <dt className="text-muted">{k}</dt>
                <dd className="m-0 text-right font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="m-0 text-lg leading-relaxed text-ink-2">{art.description}</p>
          <div className="flex flex-wrap gap-3">
            <a href={order.href} target="_blank" rel="noreferrer" className="pill bg-accent text-white hover:bg-accent-dark">
              Order a portrait like this
            </a>
          </div>
        </div>
      </div>
      <nav className="mt-20 flex justify-between gap-6 border-t border-line pt-6 text-[15px] font-semibold" aria-label="More work">
        <Link href={`/works/${prev.slug}`} className="py-3 hover:text-accent">
          ← {prev.title}
        </Link>
        <Link href={`/works/${next.slug}`} className="py-3 text-right hover:text-accent">
          {next.title} →
        </Link>
      </nav>
    </div>
  );
}
