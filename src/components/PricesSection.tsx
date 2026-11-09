import { orderLink, priceGroups, priceTerms, type PriceGroup, type PriceRow } from "@/data/artist";

export function PricesSection() {
  const order = orderLink("Hello Bernard, I would like to order a portrait. Could you tell me your prices?");
  const terms = [priceTerms.turnaround, priceTerms.deposit, priceTerms.signed, priceTerms.delivery].filter(Boolean);

  return (
    <section id="prices" className="scroll-mt-4 bg-surface">
      <div className="wrap py-[88px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="h-section mt-0 mb-3">Prices</h2>
            <p className="m-0 max-w-[560px] text-[17px] text-muted">
              Every portrait is drawn by hand from your photo. Prices depend on size and how many people are in the
              picture.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-5">
          {priceGroups.map((g) => (
            <PriceCard key={g.title} group={g} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-background p-6 sm:p-7">
          <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px] text-ink-2">
            {terms.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
          <a href={order.href} target="_blank" rel="noreferrer" className="pill bg-accent text-white hover:bg-accent-dark">
            Ask about a portrait
          </a>
        </div>
      </div>
    </section>
  );
}

function PriceCard({ group }: { group: PriceGroup }) {
  const featured = Boolean(group.highlight);
  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl ${featured ? "border-2 border-accent p-[27px]" : "border border-line p-7"}`}
    >
      <div className="flex flex-col gap-2">
        {group.highlight && <p className="eyebrow text-[12px] text-accent">{group.highlight}</p>}
        <h3 className="m-0 font-display text-2xl font-bold tracking-[-0.01em]">{group.title}</h3>
        <p className="m-0 text-[15px] leading-normal text-ink-2">{group.description}</p>
      </div>
      <dl className="m-0 divide-y divide-line border-t border-line">
        {group.rows.map((r) => (
          <div key={r.label} className="flex min-h-12 items-center justify-between gap-4 py-2">
            <dt className="text-[15px] text-ink-2">{r.label}</dt>
            <dd className="m-0 text-right">
              <PriceValue group={group} row={r} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function PriceValue({ group, row }: { group: PriceGroup; row: PriceRow }) {
  if (row.price && row.price !== "On request") {
    return <span className="font-display text-xl font-bold">{row.price}</span>;
  }
  const ask = orderLink(`Hello Bernard, what is the price for: ${group.title}, ${row.label}?`);
  return (
    <a
      href={ask.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
    >
      {row.price === "On request" ? "On request" : "Ask"}
      <span aria-hidden="true">→</span>
      <span className="sr-only">
        about {group.title}, {row.label}, on {ask.via}
      </span>
    </a>
  );
}
