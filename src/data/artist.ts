// ─────────────────────────────────────────────────────────────
//  EDIT ME: everything about the artist lives here.
//  Fill in the `prices` to complete the site; until then each price
//  card shows an "Ask for price" link to WhatsApp.
// ─────────────────────────────────────────────────────────────

export const artist = {
  name: "Bernard Taban",
  alias: "BeRRo Art",
  eyebrow: "Pencil portrait artist · Wau, South Sudan",
  country: "South Sudan",
  /** digits only, with country code, e.g. "211912345678". Empty = use Facebook. */
  whatsapp: "256790243772",
  /** how the number is shown on the site */
  whatsappDisplay: "+256 790 243 772",
  facebook: "https://www.facebook.com/bernerd.taban",
  tiktok: "https://www.tiktok.com/@bernerdtaban",
  copyrightYear: 2026,
  about: [
    "Bernard Taban is a young pencil portrait artist from Wau, South Sudan. He is currently studying art in Kampala, Uganda, and works under the name “BeRRo Art”.",
    "He draws detailed graphite and charcoal portraits from photographs: faces full of character, close studies of eyes and hands, and striking wildlife. He also engraves images into glass by hand. He shares new drawings and videos of his process on TikTok and Facebook.",
  ],
};

// ─────────────────────────────────────────────────────────────
//  PRICES: fill in each `price`, e.g. "150,000 UGX" or "$40".
//  An empty price shows an "Ask" link that opens WhatsApp about
//  that exact option. Use "On request" for things priced case by case.
// ─────────────────────────────────────────────────────────────

export type PriceRow = { label: string; price: string };
export type PriceGroup = {
  title: string;
  description: string;
  rows: PriceRow[];
  highlight?: string;
};

export const priceGroups: PriceGroup[] = [
  {
    title: "Pencil portrait",
    description: "Graphite and charcoal on quality drawing paper, drawn from your photo. Unframed.",
    highlight: "Most popular",
    rows: [
      { label: "A4, one person", price: "" },
      { label: "A3, one person", price: "" },
      { label: "A3, two people", price: "" },
      { label: "Larger or more people", price: "On request" },
    ],
  },
  {
    title: "Framing",
    description: "Glass and wooden frame, ready to present or hang. Added to any portrait.",
    rows: [
      { label: "A4 frame", price: "" },
      { label: "A3 frame", price: "" },
    ],
  },
  {
    title: "Engraved glass",
    description: "An image engraved into glass by hand, dot by dot, then framed over black.",
    rows: [{ label: "Any subject", price: "On request" }],
  },
];

/** Short facts shown under the prices. Empty strings are hidden. */
export const priceTerms = {
  /** e.g. "Usually 1 to 2 weeks" */
  turnaround: "",
  deposit: "50% deposit to start, the balance on pickup or delivery.",
  signed: "Every piece is signed by Bernard.",
  /** e.g. "Delivery in Kampala; shipping to Juba and Wau on request" */
  delivery: "",
};

export const steps = [
  { title: "Send a clear photo", text: "A sharp photo with good light." },
  { title: "Choose size and date", text: "Agree the price and when you need it." },
  { title: "Pay a 50% deposit", text: "Bernard starts drawing once it arrives." },
  { title: "Collect your portrait", text: "Pay the balance on pickup or delivery." },
];

/** Where "Order" buttons go: WhatsApp if a number is set, otherwise Facebook. */
export function orderLink(message = "Hello Bernard, I would like to order a portrait.") {
  return artist.whatsapp
    ? { href: `https://wa.me/${artist.whatsapp}?text=${encodeURIComponent(message)}`, via: "WhatsApp" }
    : { href: artist.facebook, via: "Facebook" };
}
