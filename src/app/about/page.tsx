import type { Metadata } from "next";
import Image from "next/image";
import { artist, exhibitions } from "@/data/artist";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
        <div className="relative aspect-[4/5] overflow-hidden bg-line">
          {artist.portrait ? (
            <Image src={artist.portrait} alt={`Portrait of ${artist.name}`} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center p-8 text-center text-sm text-muted">
              Add a portrait photo to <code className="mx-1">/public</code> and set
              <code className="mx-1">portrait</code> in <code className="mx-1">src/data/artist.ts</code>
            </div>
          )}
        </div>
        <div>
          <h1 className="font-display text-5xl tracking-tight">About</h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed">
            {artist.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
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
        </div>
      </div>
    </div>
  );
}
