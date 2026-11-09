// ─────────────────────────────────────────────────────────────
//  EDIT ME: everything about the artist lives here.
//  Details below come from Bernard's public Facebook profile and the
//  signatures on his drawings. Please confirm them with Bernard.
// ─────────────────────────────────────────────────────────────

export const artist = {
  name: "Bernard Taban",
  tagline: "Hyperrealistic pencil & charcoal portraits",
  location: "Kampala, Uganda",
  alias: "Venom Art",
  email: "", // add a public email when Bernard has one
  phone: "", // optional, e.g. "+256 7xx xxx xxx"
  socials: [
    { label: "TikTok", href: "https://www.tiktok.com/@bernerdtaban" },
    { label: "Facebook", href: "https://www.facebook.com/bernerd.taban" },
  ],
  /** where enquiries go when there is no email */
  contactHref: "https://www.facebook.com/bernerd.taban",
  intro:
    "Hyperrealistic portraits drawn by hand in graphite and charcoal: faces, hands, eyes and wildlife, rendered one careful layer at a time.",
  bio: [
    "Bernard Taban is a self-described digital creator and pencil artist based in Kampala, Uganda. He signs much of his work as “Venom Art”.",
    "His drawings focus on people: portraits full of character, close studies of eyes, hands and skin, and faces lit against deep black backgrounds. He also draws wildlife, including lions and foxes, and devotional pieces.",
    "Bernard takes commissions for hand-drawn portraits and shares new work and drawing videos on TikTok and Facebook.",
  ],
  statement: "", // a short quote in Bernard's own words, shown on the home page
  portrait: "", // e.g. "/bernard.jpg" once a photo of Bernard is added to /public
  copyrightYear: 2026,
};

export type Exhibition = { year: string; title: string; place: string };

// Add exhibitions, awards or notable commissions when known.
export const exhibitions: Exhibition[] = [];

/** Link for enquiries: email if set, otherwise Bernard's Facebook. */
export function enquireHref(subject: string) {
  return artist.email
    ? `mailto:${artist.email}?subject=${encodeURIComponent(subject)}`
    : artist.contactHref;
}
