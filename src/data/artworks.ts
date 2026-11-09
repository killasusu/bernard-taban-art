// ─────────────────────────────────────────────────────────────
//  EDIT ME: the artworks.
//  To add a real photo: put the file in /public/artworks/ and set
//  `image: "/artworks/your-file.jpg"`. Until then a generated
//  placeholder in the artwork's `palette` colours is shown.
// ─────────────────────────────────────────────────────────────

export type Availability = "available" | "sold" | "private";

export type Artwork = {
  slug: string;
  title: string;
  year: number;
  medium: string;
  size: string;
  series: string;
  availability: Availability;
  description: string;
  image?: string;
  /** width / height of the real image (or placeholder) */
  ratio: number;
  /** used for the placeholder until a real image is added */
  palette: [string, string, string, string];
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    slug: "river-at-dusk",
    title: "River at Dusk",
    year: 2026,
    medium: "Acrylic on canvas",
    size: "120 × 90 cm",
    series: "Nile",
    availability: "available",
    description: "[PLACEHOLDER] A few lines about this piece.",
    ratio: 4 / 3,
    palette: ["#1f3a4a", "#d9893b", "#f2d7a6", "#0f1d26"],
    featured: true,
  },
  {
    slug: "market-morning",
    title: "Market Morning",
    year: 2026,
    medium: "Oil on canvas",
    size: "100 × 100 cm",
    series: "People",
    availability: "available",
    description: "[PLACEHOLDER] A few lines about this piece.",
    ratio: 1,
    palette: ["#e8c27a", "#b5452b", "#2e5d4b", "#3b2418"],
    featured: true,
  },
  {
    slug: "cattle-camp",
    title: "Cattle Camp",
    year: 2025,
    medium: "Mixed media on board",
    size: "60 × 80 cm",
    series: "Land",
    availability: "sold",
    description: "[PLACEHOLDER] A few lines about this piece.",
    ratio: 3 / 4,
    palette: ["#c9a46a", "#5b3a29", "#efe3cf", "#8a5a3b"],
    featured: true,
  },
  {
    slug: "mother-and-child",
    title: "Mother and Child",
    year: 2025,
    medium: "Acrylic on canvas",
    size: "80 × 120 cm",
    series: "People",
    availability: "private",
    description: "[PLACEHOLDER] A few lines about this piece.",
    ratio: 2 / 3,
    palette: ["#7a2e2a", "#e3b25b", "#f5ebd9", "#2b1a17"],
  },
  {
    slug: "rains-are-coming",
    title: "The Rains Are Coming",
    year: 2025,
    medium: "Oil on canvas",
    size: "150 × 100 cm",
    series: "Land",
    availability: "available",
    description: "[PLACEHOLDER] A few lines about this piece.",
    ratio: 3 / 2,
    palette: ["#3d4a52", "#9fb3a8", "#e9e1cf", "#c96f3b"],
  },
  {
    slug: "drum-circle",
    title: "Drum Circle",
    year: 2024,
    medium: "Mixed media on canvas",
    size: "90 × 90 cm",
    series: "People",
    availability: "available",
    description: "[PLACEHOLDER] A few lines about this piece.",
    ratio: 1,
    palette: ["#f0b43c", "#1d2a44", "#d2552f", "#f7ecd2"],
  },
  {
    slug: "papyrus",
    title: "Papyrus",
    year: 2024,
    medium: "Acrylic on paper",
    size: "50 × 70 cm",
    series: "Nile",
    availability: "sold",
    description: "[PLACEHOLDER] A few lines about this piece.",
    ratio: 5 / 7,
    palette: ["#4f6b3a", "#d8c690", "#1e2b1a", "#a8783a"],
  },
  {
    slug: "evening-light",
    title: "Evening Light",
    year: 2024,
    medium: "Oil on canvas",
    size: "120 × 80 cm",
    series: "Nile",
    availability: "available",
    description: "[PLACEHOLDER] A few lines about this piece.",
    ratio: 3 / 2,
    palette: ["#5a2f4a", "#ef9a4a", "#fbe2b8", "#1c1424"],
  },
];

export const series = Array.from(new Set(artworks.map((a) => a.series)));

export function getArtwork(slug: string) {
  return artworks.find((a) => a.slug === slug);
}

export const availabilityLabel: Record<Availability, string> = {
  available: "Available",
  sold: "Sold",
  private: "Private collection",
};
