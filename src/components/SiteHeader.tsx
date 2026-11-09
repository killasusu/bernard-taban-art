"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { artist } from "@/data/artist";

const nav = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-xl tracking-tight" onClick={() => setOpen(false)}>
          {artist.name}
        </Link>
        <button
          type="button"
          className="text-sm uppercase tracking-widest sm:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="site-nav"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border-b border-line bg-background px-5 pb-4 sm:static sm:flex sm:flex-row sm:gap-8 sm:border-0 sm:p-0`}
        >
          {nav.map((n) => {
            const active = pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`py-2 text-sm uppercase tracking-widest sm:py-0 ${
                  active ? "text-accent" : "hover:text-accent"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
