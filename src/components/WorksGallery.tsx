"use client";

import { useState } from "react";
import type { Artwork } from "@/data/artworks";
import { WorkCard } from "./WorkCard";

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
            className={`min-h-11 rounded-full border px-5 text-[15px] font-semibold transition ${
              active === s
                ? "border-foreground bg-foreground text-white"
                : "border-line bg-surface hover:border-foreground"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
        {shown.map((a, i) => (
          <WorkCard key={a.slug} artwork={a} eager={i < 4} />
        ))}
      </div>
    </>
  );
}
