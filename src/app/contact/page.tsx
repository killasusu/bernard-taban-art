import type { Metadata } from "next";
import { artist } from "@/data/artist";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const subject = encodeURIComponent("Commission enquiry");
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-display text-5xl tracking-tight">Contact</h1>
      <p className="mt-6 text-lg leading-relaxed">
        For purchases, commissions, exhibitions or press, please get in touch. Bernard is based in{" "}
        {artist.location} and works with collectors locally and abroad.
      </p>
      <div className="mt-12 grid gap-8 border-t border-line pt-10 sm:grid-cols-2">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-muted">Email</h2>
          <a href={`mailto:${artist.email}`} className="mt-2 block font-display text-2xl hover:text-accent">
            {artist.email}
          </a>
        </div>
        {artist.phone && (
          <div>
            <h2 className="text-sm uppercase tracking-widest text-muted">Phone / WhatsApp</h2>
            <p className="mt-2 font-display text-2xl">{artist.phone}</p>
          </div>
        )}
        <div>
          <h2 className="text-sm uppercase tracking-widest text-muted">Follow</h2>
          <ul className="mt-2 space-y-1">
            {artist.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="text-lg hover:text-accent">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a
        href={`mailto:${artist.email}?subject=${subject}`}
        className="mt-14 inline-block rounded-full bg-foreground px-6 py-3 text-sm uppercase tracking-widest text-background hover:bg-accent"
      >
        Start a commission enquiry
      </a>
    </div>
  );
}
