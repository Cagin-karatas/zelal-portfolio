import type { Config } from "tailwindcss";
import { Z_INDEX } from "./lib/constants";

// Every value here is a *replacement* of Tailwind's default theme, not an
// extension, in the five places marked below. The brief's constraint is
// literal: 5 named colors, 5 typographic roles, no medium heading size
// between display and label. Extending instead of replacing would leave
// Tailwind's defaults (red-500, text-3xl, font-serif with system fallbacks…)
// reachable as an accidental escape hatch — a single `text-3xl` typo would
// silently reintroduce the "medium heading" the brief explicitly forbids.
// Where the default scale is already correct for this design (spacing,
// screens), it is extended instead, because reinventing an already-correct
// 4px-based scale would just be surface area with no design intent behind it.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    // Replaced: only these 5 names exist. `transparent`/`current` are kept
    // because border/fill utilities need them structurally, not as design
    // colors. Values point at CSS custom properties (defined once, in
    // globals.css :root) rather than inlining hex here, because the
    // ambient-color-bleed and misregistration effects (§5.1, §6 item 14)
    // read these same tokens from inline styles/JS at runtime — one
    // definition, readable from both Tailwind and plain CSS/JS.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      paper: "var(--paper)",
      ink: "var(--ink)",
      "ink-soft": "var(--ink-soft)",
      rule: "var(--rule)",
      accent: "var(--accent)",
    },
    // Replaced: `font-display` and `font-body` are the only two typefaces
    // this site uses. No `font-sans`/`font-serif` fallback classes are
    // left lying around to be reached for out of habit.
    fontFamily: {
      display: [
        "var(--font-bodoni-moda)",
        "Didot",
        "Georgia",
        "ui-serif",
        "serif",
      ],
      body: [
        "var(--font-archivo)",
        "Helvetica Neue",
        "Arial",
        "ui-sans-serif",
        "sans-serif",
      ],
    },
    // Replaced: exactly the 5 roles from design-plan.md §1.2. Each bundles
    // size + line-height + letter-spacing + weight into one utility
    // (`text-display`, `text-label`, …) so a component never assembles a
    // role from loose classes, and — per §6 item 6 — there is no `text-2xl`
    // / `text-3xl` / `text-4xl` sitting between `text-label` and
    // `text-display` for a future edit to reach for by accident.
    fontSize: {
      display: [
        "clamp(3.5rem, 11vw, 11rem)",
        { lineHeight: ".88", letterSpacing: "-0.02em", fontWeight: "500" },
      ],
      section: [
        "clamp(2rem, 4vw, 3.5rem)",
        { lineHeight: "1.05", letterSpacing: "-0.01em", fontWeight: "500" },
      ],
      body: ["1rem", { lineHeight: "1.65", fontWeight: "400" }],
      label: [
        ".7rem",
        { lineHeight: "1.6", letterSpacing: ".16em", fontWeight: "500" },
      ],
      number: [
        ".75rem",
        { lineHeight: "1.4", letterSpacing: ".1em", fontWeight: "500" },
      ],
    },
    extend: {
      // Kept as an extension: Tailwind's default spacing scale is already
      // 4px-based (spacing[2] = 8px, spacing[8] = 32px, spacing[32] = 128px…),
      // which is exactly the brief's §3.3 scale. Only the values that have
      // no static Tailwind equivalent — because they're `clamp()` — are
      // added. Vertical rhythm (Section padding, block margins) must only
      // ever use spacing keys that are multiples of 8px (2, 4, 6, 8, 10, 12,
      // 16, 20, 24, 32, 40, 48…); the odd-numbered 4px-only keys (1, 3, 5, 7…)
      // are reserved for hairline-scale details (crop marks, 1-2px offsets),
      // never for stacking whitespace. That distinction lives here as a
      // comment because Tailwind has no mechanism to enforce it at build time.
      spacing: {
        gutter: "clamp(1rem, 2vw, 2rem)",
        edge: "clamp(1.5rem, 5vw, 6rem)",
        section: "clamp(6rem, 12vh, 10rem)",
      },
      maxWidth: {
        content: "1600px",
      },
      // `lg` (1024px) already matches the brief's "kenar sütunları 1024px
      // altında kaybolur" breakpoint exactly, so the default screens are
      // left untouched rather than adding a same-value custom key.
      // Sourced from lib/constants.ts so a z-index bug can be traced to
      // one list instead of a bare `z-[9999]` buried in a component.
      // Z_INDEX itself holds numbers (so JS call sites can use them
      // directly); Tailwind's zIndex theme requires string values, so
      // they're coerced here rather than at the source of truth.
      zIndex: Object.fromEntries(
        Object.entries(Z_INDEX).map(([key, value]) => [key, String(value)]),
      ),
    },
  },
  plugins: [],
};

export default config;
