/**
 * Section ids used for in-page anchors, nav hrefs, and (from Step 7d) the
 * IntersectionObserver targets behind `useSectionProgress`. Centralized so
 * a typo can't silently produce a dead `href="#..."` link — every usage
 * imports the same value instead of retyping a string.
 */
export const SECTION_ID = {
  hero: "hero",
  disciplines: "disciplines",
  selectedWork: "selected-work",
  footer: "footer",
} as const;

export type SectionId = (typeof SECTION_ID)[keyof typeof SECTION_ID];

/**
 * Stacking order for the site's fixed layers, low to high. Defined once
 * and consumed by tailwind.config.ts as the `z-*` utilities (`z-header`,
 * `z-edge-frame`…), so a layering bug can be reasoned about by reading
 * this list instead of grepping every component for a bare `z-[...]`
 * value. Keys are kebab-case because their primary use is as Tailwind
 * class name suffixes, not as JS property access.
 */
export const Z_INDEX = {
  vignette: -2, // fixed paper-vignette atmosphere layer (§6 item 15)
  ambient: -1, // fixed ambient-color-bleed layer (§3.6, Step 7b)
  content: 0,
  "edge-frame": 10, // fixed left/right meta columns
  header: 20,
  cursor: 50, // custom cursor (Step 7c)
  grain: 60, // full-page grain overlay (Step 7d)
} as const;

/**
 * Ceiling opacity for the ambient-color-bleed layer (Step 7b) — a wash,
 * not a background swap. See AmbientColorProvider's docstring for why a
 * low, fixed cap is the contrast-safe reading of "ambient" against an
 * arbitrary future photo's dominant color.
 */
export const AMBIENT_COLOR_OPACITY = 0.16;
