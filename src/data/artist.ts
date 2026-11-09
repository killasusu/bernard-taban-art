// ─────────────────────────────────────────────────────────────
//  EDIT ME: everything about the artist lives here.
//  Fill in `whatsapp` and the `prices` to complete the site; until then
//  buttons fall back to Facebook and prices show "Ask for price".
// ─────────────────────────────────────────────────────────────

export const artist = {
  name: "Bernard Taban",
  alias: "Venom Art",
  eyebrow: "Pencil portrait artist · South Sudan",
  country: "South Sudan",
  /** digits only, with country code, e.g. "211912345678". Empty = use Facebook. */
  whatsapp: "256790243772",
  /** how the number is shown on the site */
  whatsappDisplay: "+256 790 243 772",
  facebook: "https://www.facebook.com/bernerd.taban",
  tiktok: "https://www.tiktok.com/@bernerdtaban",
  copyrightYear: 2026,
  about: [
    "Bernard Taban is a young pencil portrait artist from South Sudan, based in Kampala, Uganda. He signs much of his work as “Venom Art”.",
    "He draws detailed graphite and charcoal portraits from photographs: faces full of character, close studies of eyes and hands, and the occasional lion or fox. He also engraves images into glass by hand. He shares new drawings and videos of his process on TikTok and Facebook.",
  ],
};

export type Price = { label: string; price: string; note: string; popular?: boolean };

// Set `price` to e.g. "150,000 SSP" or "$40". Empty shows "Ask for price".
export const prices: Price[] = [
  { label: "A4 portrait", price: "", note: "Unframed. A thoughtful gift." },
  { label: "A3 portrait", price: "", note: "Larger, with more detail.", popular: true },
  { label: "A3 framed", price: "", note: "Glass and wooden frame, ready to present." },
];

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
