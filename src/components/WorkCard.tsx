import Image from "next/image";
import Link from "next/link";
import type { Artwork } from "@/data/artworks";

export function WorkCard({ artwork, eager = false }: { artwork: Artwork; eager?: boolean }) {
  return (
    <Link
      href={`/works/${artwork.slug}`}
      className="group flex flex-col gap-3 rounded-2xl bg-surface p-4 text-foreground transition-shadow hover:shadow-lg hover:shadow-black/5"
    >
      <div className="relative h-[340px] overflow-hidden rounded-lg bg-line">
        {artwork.image && (
          <Image
            src={artwork.image}
            alt={`${artwork.title}, ${artwork.medium} by Bernard Taban`}
            fill
            sizes="(min-width: 1200px) 280px, (min-width: 640px) 45vw, 100vw"
            loading={eager ? "eager" : "lazy"}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <span className="text-[15px] font-semibold group-hover:text-accent">{artwork.title}</span>
    </Link>
  );
}
