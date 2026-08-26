import { NAV_LINKS, SITE } from "@/content/site";
import { SECTION_ID } from "@/lib/constants";
import { SwapLink } from "@/components/ui/SwapLink";

/**
 * Fixed and transparent, not sticky-with-a-background: Hero (§2.1 of
 * design-plan.md) runs its portrait and name to the very top of the
 * viewport, so the nav has to float over that content rather than push it
 * down or claim its own opaque band.
 *
 * Nav link hover is the vertical text-swap idiom (§5.10, Step 7d) via
 * `SwapLink` — see that component's own docstring for the mechanics.
 *
 * The logo carries §6 item 14's print-misregistration device: a second,
 * `aria-hidden` copy of "ZG" in `--ink`, offset 2px down-right behind the
 * real `--accent` copy — a two-plate print that's slightly out of
 * register, built from only the site's existing two ink tones since there
 * is no third/cyan color available. This is the site's persistent,
 * always-on use of the device (distinct from §6 item 13's two-use red
 * overlay budget, spent once so far in Selected Work).
 *
 * Nav gap is `gap-4 sm:gap-8` (Step 8 audit fix, §12): at `gap-8` all four
 * labels plus the logo don't fit inside 375px's `px-edge` margins — this
 * is the one spot on the page where the fixed edge margin and a row of
 * inline text genuinely compete for the same narrow space. `gap-4` is
 * still an 8px-multiple, so this is a breakpoint-scoped value within the
 * scale, not an exception to it.
 */
export function Header() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-header focus:bg-paper focus:px-4 focus:py-2 focus:text-label focus:text-ink"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-header flex items-center justify-between px-edge py-6">
        <a
          href={`#${SECTION_ID.hero}`}
          className="relative inline-block font-display text-section"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[2px] top-[2px] text-ink"
          >
            {SITE.logoMonogram}
          </span>
          <span className="relative text-accent">{SITE.logoMonogram}</span>
        </a>

        <nav aria-label="Primary">
          <ul className="flex gap-4 sm:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <SwapLink href={link.href}>{link.label}</SwapLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
