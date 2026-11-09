import type { Metadata } from "next";
import { artist, enquireHref } from "@/data/artist";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-display text-5xl tracking-tight">Contact</h1>
      <p className="mt-6 text-lg leading-relaxed">
        To commission a portrait, ask about a drawing, or collaborate, get in touch with Bernard. He is
        based in {artist.location}.
      </p>
      <div className="mt-12 grid gap-8 border-t border-line pt-10 sm:grid-cols-2">
        {artist.email && (
          <div>
            <h2 className="text-sm uppercase tracking-widest text-muted">Email</h2>
            <a href={`mailto:${artist.email}`} className="mt-2 block font-display text-2xl hover:text-accent">
              {artist.email}
            </a>
          </div>
        )}
        {artist.phone && (
          <div>
            <h2 className="text-sm uppercase tracking-widest text-muted">Phone / WhatsApp</h2>
            <p className="mt-2 font-display text-2xl">{artist.phone}</p>
          </div>
        )}
        <div>
          <h2 className="text-sm uppercase tracking-widest text-muted">Find Bernard on</h2>
          <ul className="mt-2 space-y-1">
            {artist.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="font-display text-2xl hover:text-accent">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a
        href={enquireHref("Commission enquiry")}
        target={artist.email ? undefined : "_blank"}
        rel="noreferrer"
        className="mt-14 inline-block rounded-full bg-foreground px-6 py-3 text-sm uppercase tracking-widest text-background hover:bg-accent"
      >
        {artist.email ? "Start a commission enquiry" : "Message Bernard on Facebook"}
      </a>
    </div>
  );
}
