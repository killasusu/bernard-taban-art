import { artist, orderLink } from "@/data/artist";

export function SiteFooter() {
  const order = orderLink();
  return (
    <footer id="contact" className="scroll-mt-4 bg-foreground text-background">
      <div className="wrap flex flex-col gap-8 pt-[88px] pb-12">
        <h2 className="m-0 font-display text-[clamp(36px,5vw,60px)] leading-[1.05] font-bold tracking-[-0.03em]">
          Want a portrait of
          <br />
          someone you love?
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href={order.href}
            target="_blank"
            rel="noreferrer"
            className="pill bg-accent-light text-foreground hover:bg-white"
          >
            {artist.whatsapp ? `WhatsApp ${artist.whatsappDisplay}` : "Message on Facebook"}
          </a>
          {artist.whatsapp && (
            <a href={artist.facebook} target="_blank" rel="noreferrer" className="pill border border-background text-background hover:bg-background hover:text-foreground">
              Facebook
            </a>
          )}
          <a href={artist.tiktok} target="_blank" rel="noreferrer" className="pill border border-background text-background hover:bg-background hover:text-foreground">
            TikTok
          </a>
        </div>
        <p className="mt-6 border-t border-[#333] pt-6 text-sm text-night-muted">
          © {artist.copyrightYear} {artist.name} Art · {artist.country}
        </p>
      </div>
    </footer>
  );
}
