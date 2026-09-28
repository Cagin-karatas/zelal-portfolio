import type { Metadata } from "next";
import localFont from "next/font/local";

import { EdgeRails } from "@/components/layout/EdgeRails";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { siteIdentity } from "@/content/site";
import { Z_LAYER_CLASS } from "@/lib/constants";

import "lenis/dist/lenis.css";
import "./globals.css";

const displayFont = localFont({
  src: [
    {
      path: "../public/fonts/BodoniModa-Variable.woff2",
      style: "normal",
      weight: "400 900",
    },
    {
      path: "../public/fonts/BodoniModa-VariableItalic.woff2",
      style: "italic",
      weight: "400 900",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const sansFont = localFont({
  src: "../public/fonts/Geist-Variable.woff2",
  variable: "--font-sans",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteIdentity.canonicalUrl),
  title: siteIdentity.title,
  description: siteIdentity.description,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: siteIdentity.name }],
  creator: siteIdentity.name,
  category: "Visual storytelling",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteIdentity.name,
    title: siteIdentity.title,
    description: siteIdentity.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteIdentity.title,
    description: siteIdentity.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body>
        <SmoothScroll />
        <CustomCursor />
        <a
          href="#main-content"
          className={`label fixed left-3 top-3 -translate-y-10 bg-paper px-3 py-2 text-accent focus:translate-y-0 ${Z_LAYER_CLASS.skip}`}
        >
          Skip to content
        </a>
        <EdgeRails />
        <Header />
        <div className={`relative ${Z_LAYER_CLASS.content}`}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
