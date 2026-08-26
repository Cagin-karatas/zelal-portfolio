import { SOCIAL_LINKS, SITE } from "@/content/site";
import { SECTION_ID } from "@/lib/constants";
import { Section } from "@/components/layout/Section";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { SwapLink } from "@/components/ui/SwapLink";

/**
 * The one deliberately calm beat on the page (design-plan.md §4): no
 * opener strip, no asymmetry, just a single quiet row. Both the copyright
 * line and the social links use `.label` — understated by design, and
 * the same idiom used everywhere else rather than a one-off footer style.
 *
 * Still gets the same ClipReveal (Step 7a) as Disciplines/Selected
 * Work — calm doesn't mean exempt from the site's one entrance idiom for
 * below-the-fold content, it just means there's less inside it to reveal.
 * Social links share Header nav's vertical text-swap hover (`SwapLink`,
 * §5.10, Step 7d) — one link-hover idiom sitewide, not two.
 */
export function Footer() {
  // Resolved at build time, not per-request — this page has no dynamic
  // rendering, so the year is correct as of the last deploy and updates
  // on the next one. A portfolio site redeploys far more often than
  // once a year, so that's not a real staleness risk here.
  const currentYear = new Date().getFullYear();

  return (
    <Section id={SECTION_ID.footer}>
      <ClipReveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="label">
          © {currentYear} {SITE.name}. All rights reserved.
        </p>

        <ul className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <SwapLink href={link.href} target="_blank" rel="noreferrer noopener">
                {link.label}
              </SwapLink>
            </li>
          ))}
        </ul>
      </ClipReveal>
    </Section>
  );
}
