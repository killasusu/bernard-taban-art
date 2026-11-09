import Image from "next/image";
import Link from "next/link";
import { PricesSection } from "@/components/PricesSection";
import { WorkCard } from "@/components/WorkCard";
import { artist, orderLink, steps } from "@/data/artist";
import { artworks } from "@/data/artworks";
import { SITE_URL } from "@/lib/site";
import heroPhoto from "../../public/bernard-with-ambassador-portrait.jpg";
import zikoPhoto from "../../public/bernard-presenting-to-ziko.jpg";

export default function Home() {
  const featured = artworks.filter((a) => a.featured);
  const order = orderLink();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: artist.name,
    alternateName: artist.alias,
    jobTitle: "Pencil portrait artist",
    description: "Hand-drawn graphite and charcoal portraits and engraved glass art.",
    url: SITE_URL,
    image: `${SITE_URL}/bernard-with-ambassador-portrait.jpg`,
    birthPlace: { "@type": "Place", name: "Wau, South Sudan" },
    homeLocation: { "@type": "Place", name: "Kampala, Uganda" },
    sameAs: [artist.facebook, artist.tiktok],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      {/* Hero */}
      <section className="wrap flex flex-wrap items-center gap-14 pt-12 pb-20">
        <div className="flex min-w-0 flex-[999_1_460px] flex-col gap-6">
          <p className="eyebrow text-accent">{artist.eyebrow}</p>
          <h1 className="m-0 font-display text-[clamp(44px,6vw,76px)] leading-[1.02] font-bold tracking-[-0.03em]">
            Every face,
            <br />
            drawn by hand.
          </h1>
          <p className="m-0 max-w-[520px] text-[19px] leading-relaxed text-ink-2">
            Detailed graphite portraits of the people who matter to you, for gifts, celebrations, memorials and
            offices. Framed and ready to hang.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a href={order.href} target="_blank" rel="noreferrer" className="pill bg-accent text-white hover:bg-accent-dark">
              Order on {order.via}
            </a>
            <Link href="/#work" className="pill border border-foreground px-[27px] py-[15px] text-foreground hover:bg-foreground hover:text-white">
              See his work
            </Link>
          </div>
        </div>
        <figure className="m-0 min-w-0 max-w-[440px] flex-[1_1_360px]">
          <Image
            src={heroPhoto}
            alt="Bernard Taban holding a framed pencil portrait he drew"
            priority
            sizes="(min-width: 900px) 440px, 100vw"
            className="block h-[560px] w-full rounded-[20px] object-cover object-[center_30%]"
          />
          <figcaption className="mt-3 text-sm text-muted">Bernard with a framed portrait of an ambassador.</figcaption>
        </figure>
      </section>

      {/* Recognized by */}
      <section className="bg-foreground text-background">
        <div className="wrap flex flex-wrap items-center gap-14 py-[88px]">
          <Image
            src={zikoPhoto}
            alt="Bernard presenting a framed pencil portrait to comedian Ziko"
            sizes="(min-width: 1100px) 620px, 100vw"
            className="block h-[480px] w-full max-w-[620px] min-w-0 flex-[1_1_420px] rounded-[20px] object-cover"
          />
          <div className="flex min-w-0 flex-[999_1_340px] flex-col gap-5">
            <p className="eyebrow text-accent-light">Recognized by</p>
            <h2 className="h-section m-0">Presented to South Sudanese comedian Ziko</h2>
            <p className="m-0 text-lg leading-relaxed text-night-text">
              Bernard drew Ziko with his Best Comedian of the Year awards and handed him the framed portrait in person.
            </p>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="wrap scroll-mt-4 pt-24 pb-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="h-section m-0">Selected work</h2>
          <p className="m-0 text-base text-muted">Graphite, charcoal and engraved glass</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6">
          {featured.map((a, i) => (
            <WorkCard key={a.slug} artwork={a} eager={i < 4} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/works" className="pill border border-foreground px-[27px] py-[15px] text-foreground hover:bg-foreground hover:text-white">
            See all {artworks.length} works
          </Link>
        </div>
      </section>

      {/* Prices */}
      <PricesSection />

      {/* How to order */}
      <section id="order" className="wrap scroll-mt-4 py-[88px]">
        <h2 className="h-section mt-0 mb-10">How to order</h2>
        <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 p-0">
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-2.5">
              <span className="font-display text-[40px] font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-lg font-semibold">{s.title}</span>
              <span className="text-[15px] leading-normal text-ink-2">
                {i === 0 ? `On ${order.via}, a sharp photo with good light.` : s.text}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* About */}
      <section id="about" className="bg-surface">
        <div className="mx-auto flex max-w-[800px] flex-col gap-5 px-6 py-[88px]">
          <h2 className="h-section m-0">About Bernard</h2>
          {artist.about.map((p) => (
            <p key={p.slice(0, 20)} className="m-0 text-lg leading-[1.7] text-[#333]">
              {p}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
