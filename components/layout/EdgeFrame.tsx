import { SITE } from "@/content/site";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

/**
 * §6 item 1 — the fixed edge architecture. Not listed in the brief's §8
 * skeleton (which names only Header/Footer/Section under layout/), added
 * because the effect is genuinely site-wide and fixed, not something
 * either Header or Section owns: it has to sit outside the scrolling
 * document to stay put while everything else moves.
 *
 * These columns live in the outer margin (the `px-edge` zone), not inside
 * the 1600px content grid — Hero's own right-hand column (§2.1 of
 * design-plan.md) sits inboard, inside the grid. The two don't compete
 * for the same space; this frame is the print-margin, Hero's column is
 * page content.
 *
 * Hidden below `lg` (1024px) per the brief — there's no room for a page
 * margin once the content itself needs the full viewport width.
 */
export function EdgeFrame() {
  return (
    <>
      <aside
        aria-hidden="true"
        className="fixed inset-y-0 left-0 z-edge-frame hidden w-12 items-center justify-center lg:flex"
      >
        <span className="label origin-center whitespace-nowrap [transform:rotate(-90deg)]">
          {SITE.locationLabel}
        </span>
      </aside>

      <aside
        aria-hidden="true"
        className="fixed inset-y-0 right-0 z-edge-frame hidden w-12 flex-col items-center justify-center gap-4 lg:flex"
      >
        {/* Live section number + scroll-fill line (§5.8, Step 7d) — see
            ScrollProgress's own docstring for what's actually driving it. */}
        <ScrollProgress />
      </aside>
    </>
  );
}
