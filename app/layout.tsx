import type { Metadata } from "next";
import { EdgeFrame } from "@/components/layout/EdgeFrame";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { AmbientColorProvider } from "@/components/motion/AmbientColorProvider";
import { CursorPositionProvider } from "@/components/motion/CursorPositionProvider";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { archivo, bodoniModa } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zelal Günay — Visual Storyteller, Director, Photographer",
  description:
    "I tell stories through images, words and frames. Based in Istanbul, working worldwide.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

// Header and EdgeFrame are genuinely global chrome (fixed, present above
// every section) so they live in the root layout. Footer is one of the
// four page sections (§4) and is composed in app/page.tsx alongside
// Hero/Disciplines/Selected Work instead.
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`overflow-x-hidden ${bodoniModa.variable} ${archivo.variable}`}
    >
      <body className="overflow-x-hidden bg-paper font-body text-body text-ink antialiased">
        {/* `overflow-x-hidden` on both html and body (Step 8 audit fix,
            §9/§12): the site has several deliberate corner-hang/full-bleed
            elements (Hero's film-frame still, the portrait's
            `lg:-mr-edge`) that are meant to overhang their container right
            up to the viewport edge. Below `lg`, the film-frame's fixed
            `-right-8` offset has no extra grid column to absorb it and
            pushes ~8px past 375px without this — clipping at the true
            edge preserves the bleed look everywhere it already fits, and
            removes page-level horizontal scroll everywhere it doesn't,
            without redesigning the offset per breakpoint. Setting it only
            on `body` relies on CSS's html/body overflow-propagation rule,
            which measuring tools (and some engines) don't always reflect
            consistently — setting it explicitly on `html` too removes any
            doubt about which element actually owns the clip. */}
        {/* Backmost fixed layer (§6 item 15) — a plain div here rather
            than its own component file, since it's one decorative
            element, not a reusable unit. */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-vignette paper-vignette"
        />
        {/* Native cursor is hidden via globals.css's own media query, not
            JS, so a JS-disabled visit never loses its cursor — this is the
            fallback for the other direction: CustomCursor never mounts
            without JS, so this restores `cursor: auto` for that case. */}
        <noscript>
          <style>{"html { cursor: auto !important; }"}</style>
        </noscript>

        {/* AmbientColorProvider (§3.6, Step 7b) and CursorPositionProvider
            (Step 7c) each render their own fixed layer as a child, then
            pass the rest of the page through as `children` — "use client"
            context providers wrapping server-rendered content, not the
            other way around, so Header/EdgeFrame/page sections stay
            server code. */}
        <AmbientColorProvider>
          <CursorPositionProvider>
            <CustomCursor />
            <SmoothScroll />
            <Header />
            <EdgeFrame />
            {children}
          </CursorPositionProvider>
        </AmbientColorProvider>

        {/* Topmost fixed layer (§6 item 15's atmosphere stack: vignette →
            ambient → content → grain) — a plain div, same reasoning as the
            vignette above: one decorative element, not a reusable unit. */}
        <div
          aria-hidden="true"
          className="grain-layer pointer-events-none fixed inset-0 z-grain"
        />
      </body>
    </html>
  );
}
