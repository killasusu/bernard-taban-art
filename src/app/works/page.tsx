import type { Metadata } from "next";
import { WorksGallery } from "@/components/WorksGallery";
import { artworks, series } from "@/data/artworks";

export const metadata: Metadata = { title: "All work" };

export default function WorksPage() {
  return (
    <div className="wrap pt-12 pb-24">
      <p className="eyebrow text-accent">Portfolio</p>
      <h1 className="h-section mt-4 mb-3 text-[clamp(40px,5vw,60px)]">All work</h1>
      <p className="mt-0 mb-10 text-[17px] text-muted">
        {artworks.length} works in graphite, charcoal and engraved glass. Tap any piece to see it larger.
      </p>
      <WorksGallery artworks={artworks} series={series} />
    </div>
  );
}
