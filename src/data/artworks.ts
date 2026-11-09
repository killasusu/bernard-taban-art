// ─────────────────────────────────────────────────────────────
//  EDIT ME: the artworks.
//  Photos live in /public/artworks/. Images were taken from Bernard's
//  Facebook photos; titles are working titles. Please confirm titles,
//  years, sizes and availability with Bernard and fill them in.
//  Optional fields (year, size, availability) are hidden until set.
// ─────────────────────────────────────────────────────────────

export type Availability = "available" | "sold" | "private" | "commission";

export type Artwork = {
  slug: string;
  title: string;
  year?: number;
  medium: string;
  size?: string;
  series: string;
  availability?: Availability;
  description: string;
  image?: string;
  /** width / height of the image */
  ratio: number;
  /** fallback colours if no image is set */
  palette: [string, string, string, string];
  featured?: boolean;
};

const mono: Artwork["palette"] = ["#d9d4cc", "#4a4540", "#f2efe9", "#1a1816"];
const img = (slug: string) => `/artworks/${slug}.jpg`;
const PENCIL = "Graphite & charcoal on paper";

export const artworks: Artwork[] = [
  {
    slug: "lion-king",
    title: "Lion King",
    medium: "Hand-engraved glass, framed",
    series: "Glass art",
    description: "A lion engraved into a pane of glass by hand, dot by dot, then framed over a black background so the image shines.",
    image: img("lion-king"),
    ratio: 0.7565,
    palette: mono,
    featured: true,
  },
  {
    slug: "radiance",
    title: "Radiance",
    medium: PENCIL,
    series: "Portraits",
    description: "A smiling portrait built from fine layers of graphite and charcoal.",
    image: img("radiance"),
    ratio: 1.0013,
    palette: mono,
    featured: true,
  },
  {
    slug: "ambassador",
    title: "Ambassador portrait",
    medium: "Graphite on paper, framed",
    series: "Commissions",
    availability: "commission",
    description: "A commissioned portrait of an ambassador in suit and glasses, framed for presentation.",
    image: img("ambassador"),
    ratio: 0.773,
    palette: mono,
    featured: true,
  },
  {
    slug: "ziko",
    title: "Ziko with his award",
    medium: "Graphite on paper, framed",
    series: "Commissions",
    availability: "commission",
    description: "South Sudanese comedian Ziko with his Best Comedian of the Year awards, drawn and presented to him in person.",
    image: img("ziko"),
    ratio: 0.761,
    palette: mono,
    featured: true,
  },
  {
    slug: "the-gentleman",
    title: "The Gentleman",
    medium: PENCIL,
    series: "Portraits",
    description: "A portrait in sunglasses and a checked shirt, with careful attention to reflections and fabric.",
    image: img("the-gentleman"),
    ratio: 0.6206,
    palette: mono,
    featured: true,
  },
  {
    slug: "pure-joy",
    title: "Pure Joy",
    medium: PENCIL,
    series: "Portraits",
    description: "Laughter and a full crown of hair, rendered in deep charcoal tones.",
    image: img("pure-joy"),
    ratio: 0.9979,
    palette: mono,
    featured: true,
  },
  {
    slug: "hidden",
    title: "Hidden",
    medium: PENCIL,
    series: "Studies",
    description: "Weathered hands covering a face: a study of skin, age and emotion.",
    image: img("hidden"),
    ratio: 1.0091,
    palette: mono,
    featured: true,
  },
  {
    slug: "childs-gaze",
    title: "A Child's Gaze",
    medium: PENCIL,
    series: "Portraits",
    description: "A close-up profile of a child, shown with the pencils used to draw it.",
    image: img("childs-gaze"),
    ratio: 1.0009,
    palette: mono,
    featured: true,
  },
  {
    slug: "crown-of-thorns",
    title: "Crown of Thorns",
    medium: "Pencil on black paper, framed",
    series: "Faith",
    description: "Christ wearing the crown of thorns, drawn on black paper and framed.",
    image: img("crown-of-thorns"),
    ratio: 0.788,
    palette: mono,
  },
  {
    slug: "the-bishop",
    title: "The Bishop",
    medium: "Charcoal on paper",
    series: "Faith",
    description: "A portrait of a bishop in his mitre, signed by the artist and dedicated in Wau.",
    image: img("the-bishop"),
    ratio: 0.7767,
    palette: mono,
  },
  {
    slug: "contemplation",
    title: "Contemplation",
    medium: PENCIL,
    series: "Portraits",
    description: "A young man in a patterned headwrap, deep in thought.",
    image: img("contemplation"),
    ratio: 0.8915,
    palette: mono,
  },
  {
    slug: "weathered",
    title: "Weathered",
    medium: PENCIL,
    series: "Studies",
    description: "An intense close-up of a face, every line and pore drawn by hand.",
    image: img("weathered"),
    ratio: 0.9845,
    palette: mono,
  },
  {
    slug: "tears",
    title: "Tears",
    medium: PENCIL,
    series: "Studies",
    description: "A crying eye, with light catching in the iris and the falling tears.",
    image: img("tears"),
    ratio: 0.5838,
    palette: mono,
  },
  {
    slug: "fox",
    title: "Fox",
    medium: "Coloured pencil on paper",
    series: "Wildlife",
    description: "A fox drawn in warm coloured pencil and set against black.",
    image: img("fox"),
    ratio: 0.7483,
    palette: mono,
  },
  {
    slug: "little-one",
    title: "Little One",
    medium: PENCIL,
    series: "Portraits",
    description: "A portrait of a baby with braided hair and wide, curious eyes.",
    image: img("little-one"),
    ratio: 0.9927,
    palette: mono,
  },
  {
    slug: "boy-in-a-cap",
    title: "Boy in a Cap",
    medium: PENCIL,
    series: "Portraits",
    description: "A young man in a cap and hoodie, with a quiet, direct gaze.",
    image: img("boy-in-a-cap"),
    ratio: 1.0042,
    palette: mono,
  },
  {
    slug: "smile",
    title: "Smile",
    medium: PENCIL,
    series: "Portraits",
    description: "A joyful portrait of a woman with short hair and an open smile.",
    image: img("smile"),
    ratio: 0.8175,
    palette: mono,
  },
  {
    slug: "the-hoodie",
    title: "The Hoodie",
    medium: PENCIL,
    series: "Portraits",
    description: "A tall high-top hairstyle and a heavy hood, drawn in bold contrast.",
    image: img("the-hoodie"),
    ratio: 0.7483,
    palette: mono,
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
  commission: "Commission",
};
