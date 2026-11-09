"use client";

import { useState } from "react";
import type { Artwork } from "@/data/artworks";
import { ArtworkCard } from "./ArtworkCard";

export function WorksGallery({ artworks, series }: { artworks: Artwork[]; series: string[] }) {
  const [active, setActive] = useState<string>("All");
  const shown = active === "All" ? artworks : artworks.filter((a) => a.series === active);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter by series">
        {["All", ...series].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setActive(s)}
            aria-pressed={active === s}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              active === s
                ? "border-foreground bg-foreground text-background"
                : "border-line hover:border-foreground"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        {shown.map((a) => (
          <div key={a.slug} className="mb-10 break-inside-avoid">
            <ArtworkCard artwork={a} />
          </div>
        ))}
      </div>
    </>
  );
}
