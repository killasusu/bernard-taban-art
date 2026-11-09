// ─────────────────────────────────────────────────────────────
//  EDIT ME: everything about the artist lives here.
//  Text marked [PLACEHOLDER] should be replaced with real details.
// ─────────────────────────────────────────────────────────────

export const artist = {
  name: "Bernard Taban",
  tagline: "Paintings & mixed media",
  location: "Juba, South Sudan",
  email: "hello@bernardtabanart.com", // [PLACEHOLDER] real email
  phone: "", // optional, e.g. "+211 9xx xxx xxx"
  socials: [
    { label: "Instagram", href: "https://instagram.com/" }, // [PLACEHOLDER]
    { label: "Facebook", href: "https://facebook.com/" }, // [PLACEHOLDER]
  ],
  intro:
    "[PLACEHOLDER] A short, one- or two-sentence introduction to Bernard's work: the subjects, the materials, and what drives the practice.",
  bio: [
    "[PLACEHOLDER] Paragraph one: where Bernard grew up, how he came to art, and his training or self-taught path.",
    "[PLACEHOLDER] Paragraph two: the themes in the work (people, landscape, memory, community), the techniques and materials used.",
    "[PLACEHOLDER] Paragraph three: current projects, collaborations, and what collectors or visitors can expect.",
  ],
  statement:
    "[PLACEHOLDER] An artist statement in Bernard's own words, a sentence or two that could be quoted.",
  portrait: "", // e.g. "/bernard.jpg" once a photo is added to /public
  copyrightYear: 2026,
};

export type Exhibition = { year: string; title: string; place: string };

// [PLACEHOLDER] Replace with real exhibitions, residencies, awards
export const exhibitions: Exhibition[] = [
  { year: "2026", title: "Exhibition title", place: "Gallery or venue, City" },
  { year: "2025", title: "Group show title", place: "Venue, City" },
  { year: "2024", title: "Residency or award", place: "Organisation, City" },
];
