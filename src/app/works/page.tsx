import type { Metadata } from "next";
import { WorksGallery } from "@/components/WorksGallery";
import { artworks, series } from "@/data/artworks";

export const metadata: Metadata = { title: "Works" };

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="font-display text-5xl tracking-tight">Works</h1>
      <p className="mt-3 mb-10 text-muted">
        {artworks.length} works. Get in touch to ask about availability or to arrange a viewing.
      </p>
      <WorksGallery artworks={artworks} series={series} />
    </div>
  );
}
