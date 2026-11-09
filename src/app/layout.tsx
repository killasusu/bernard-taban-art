import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { artist } from "@/data/artist";
import "./globals.css";

const display = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const body = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: `${artist.name} | ${artist.tagline}`, template: `%s | ${artist.name}` },
  description: `Portfolio of ${artist.name}, artist based in ${artist.location}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
