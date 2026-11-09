import Link from "next/link";
import { artist } from "@/data/artist";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#prices", label: "Prices" },
  { href: "/#order", label: "How to order" },
];

export function SiteHeader() {
  return (
    <header className="wrap flex w-full flex-wrap items-center justify-between gap-4 py-5">
      <Link href="/" className="font-display text-[22px] font-bold tracking-[-0.01em] text-foreground no-underline">
        {artist.name} <span className="text-accent">Art</span>
      </Link>
      <nav aria-label="Main" className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[15px]">
        {nav.map((n) => (
          <Link key={n.href} href={n.href} className="py-3 text-foreground hover:text-accent">
            {n.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          className="rounded-full bg-foreground px-5 py-3 font-semibold text-white hover:bg-accent"
        >
          Order a portrait
        </Link>
      </nav>
    </header>
  );
}
