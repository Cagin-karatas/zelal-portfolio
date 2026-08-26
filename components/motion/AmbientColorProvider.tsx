"use client"; // owns hover-driven state and the fixed layer that reads it

import { useState, type ReactNode } from "react";
import { AmbientColorContext } from "@/lib/context/ambient-color";
import { AMBIENT_COLOR_OPACITY } from "@/lib/constants";

interface AmbientColorProviderProps {
  children: ReactNode;
}

/**
 * The site's signature interaction (design-plan.md §3: "ambient renk
 * sızması" — the page itself takes on the color of the image, turning a
 * passive viewer into someone entering the image's atmosphere). A single
 * fixed, full-viewport layer sits at z-ambient — just above the paper
 * vignette, still behind all real content — and tints toward whatever
 * image is currently hovered, using that image's own dominant color
 * (content/generated/image-manifest.json, extracted at build time in
 * Step 2 and unused until now).
 *
 * State lives here, not in each image: many separate triggers (Hero's two
 * images, every WorkItem) need to write to the one shared layer, so a
 * context is the natural fit — prop-drilling a setter through every
 * section would be worse, and this is the one effect the brief calls out
 * as sitewide rather than per-section.
 *
 * ASSUMPTION: the wash is capped at `AMBIENT_COLOR_OPACITY` (16%) rather
 * than replacing the page background outright. The brief names this the
 * signature effect but doesn't specify strength, and a full-opacity swap
 * to an arbitrary photo's dominant color can't be contrast-checked in
 * advance — a future real photograph could land close enough to
 * `--ink-soft`'s own luminance to wash out body text sitewide during the
 * hover. A low-opacity tint reads as "the room's light shifting," stays
 * legible under any dominant color, and is the safer reading of "ambient."
 */
export function AmbientColorProvider({ children }: AmbientColorProviderProps) {
  const [color, setColor] = useState<string | null>(null);

  return (
    <AmbientColorContext.Provider value={setColor}>
      <div
        aria-hidden="true"
        className="ambient-color-layer pointer-events-none fixed inset-0 z-ambient"
        style={{
          backgroundColor: color ?? undefined,
          opacity: color ? AMBIENT_COLOR_OPACITY : 0,
        }}
      />
      {children}
    </AmbientColorContext.Provider>
  );
}
