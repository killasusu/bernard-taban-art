import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { artist } from "@/data/artist";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["500", "600", "700"] });

const description =
  "Detailed graphite portraits of the people who matter to you, drawn by hand by Bernard Taban, an artist from Wau, South Sudan. Order a portrait for a gift, celebration, memorial or office.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${artist.name} Art | Pencil portraits drawn by hand`, template: `%s | ${artist.name} Art` },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: `${artist.name} Art`,
    title: `${artist.name} Art | Every face, drawn by hand`,
    description,
    locale: "en",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-foreground px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
