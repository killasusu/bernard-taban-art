import type { Metadata } from "next";
import Image from "next/image";
import { ArtworkImage } from "@/components/ArtworkImage";
import { artist, exhibitions } from "@/data/artist";
import { getArtwork } from "@/data/artworks";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  const feature = getArtwork("hidden");

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
        <div>
          {artist.portrait ? (
            <div className="relative aspect-[4/5] overflow-hidden bg-line">
              <Image src={artist.portrait} alt={`Portrait of ${artist.name}`} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </div>
          ) : (
            feature && <ArtworkImage artwork={feature} sizes="(min-width: 768px) 40vw, 100vw" className="shadow-2xl shadow-black/20" />
          )}
        </div>
        <div>
          <h1 className="font-display text-5xl tracking-tight">About</h1>
          <p className="mt-3 font-display text-xl text-muted italic">
            {artist.name}
            {artist.alias && ` · ${artist.alias}`}
          </p>
          <div className="mt-8 space-y-5 text-lg leading-relaxed">
            {artist.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {exhibitions.length > 0 && (
            <>
              <h2 className="mt-16 border-b border-line pb-3 font-display text-3xl">Exhibitions &amp; recognition</h2>
              <ul className="divide-y divide-line">
                {exhibitions.map((e) => (
                  <li key={e.year + e.title} className="grid grid-cols-[4rem_1fr] gap-4 py-4">
                    <span className="text-muted">{e.year}</span>
                    <span>
                      <span className="font-medium">{e.title}</span>
                      <span className="block text-sm text-muted">{e.place}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
