import type { MetadataRoute } from "next";
import { artworks } from "@/data/artworks";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/works`, changeFrequency: "monthly", priority: 0.8 },
    ...artworks.map((a) => ({
      url: `${SITE_URL}/works/${a.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: a.image ? [`${SITE_URL}${a.image}`] : undefined,
    })),
  ];
}
