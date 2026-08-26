/**
 * Every animation duration and easing curve lives here — the brief (§6.4)
 * explicitly forbids bare duration/easing values inside components.
 * Framer Motion animations (from Step 7a onward) import these directly.
 *
 * The one pure-CSS transition that needs a duration before then — §6 item
 * 9's optical-size hover, in globals.css's `.hover-opsz-shift` — can't
 * import a TS value, so `--duration-base`/`--ease-out` are mirrored there
 * as CSS custom properties. Change both together.
 */
export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 1.2,
} as const;

export const EASE = {
  out: [0.16, 1, 0.3, 1],
} as const;
