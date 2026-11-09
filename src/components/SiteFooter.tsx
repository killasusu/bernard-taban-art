import { artist } from "@/data/artist";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {artist.copyrightYear} {artist.name}. All artworks are the property of the artist.
        </p>
        <div className="flex gap-6">
          <a href={`mailto:${artist.email}`} className="hover:text-foreground">
            Email
          </a>
          {artist.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-foreground">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
