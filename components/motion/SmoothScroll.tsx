"use client"; // calls the Lenis-mounting hook, a browser-only side effect

import { useLenis } from "@/lib/hooks/useLenis";

/**
 * New folder, not in the brief's §8 skeleton: Step 7a introduces four
 * distinct interaction devices (this, ClipReveal, LineMaskHeadline,
 * ParallaxImage) that don't belong under `layout/` (they're not page
 * chrome) or `ui/` (they're not visual atoms) or `sections/` (they're
 * reused across sections) — `components/motion/` groups them by what they
 * actually are.
 *
 * Renders nothing. Its only job is calling `useLenis()` once, so smooth
 * scrolling mounts for the page's lifetime without turning
 * `app/layout.tsx` itself into a client component — the "use client"
 * boundary sits at this one leaf instead.
 */
export function SmoothScroll(): null {
  useLenis();
  return null;
}
