import Link from "next/link";
import { availabilityLabel, type Artwork } from "@/data/artworks";
import { ArtworkImage } from "./ArtworkImage";

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <Link href={`/works/${artwork.slug}`} className="group block">
      <ArtworkImage
        artwork={artwork}
        className="transition duration-500 group-hover:opacity-90"
      />
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg leading-tight group-hover:underline group-hover:underline-offset-4">
          {artwork.title}
        </h3>
        <span className="shrink-0 text-sm text-muted">{artwork.year}</span>
      </div>
      <p className="text-sm text-muted">
        {artwork.medium} · {availabilityLabel[artwork.availability]}
      </p>
    </Link>
  );
}
