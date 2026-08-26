import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ArrowLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: string;
}

/**
 * The "→ label" link idiom: Hero's CTA, Selected Work's category links.
 * The arrow is a real character, not an icon font or inline SVG, so it
 * needs no extra accessibility treatment.
 *
 * The 4px hover shift (§5.10, Step 7d): the arrow nudges right on hover,
 * suggesting forward motion — pure CSS (`group`/`group-hover`), no client
 * component needed for a reversible hover transform. `motion-reduce:`
 * removes the eased transition under reduced motion while leaving the
 * shifted end-state itself alone, the same policy as every other hover
 * device on the site. Distinct from SwapLink's vertical text-swap:
 * ArrowLink already carries its own arrow glyph, so shifting *that* is
 * this component's device, rather than layering a second one over its text.
 */
export function ArrowLink({
  href,
  children,
  className,
  ...anchorProps
}: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "label group inline-flex items-center gap-2 text-accent",
        className,
      )}
      {...anchorProps}
    >
      <span
        aria-hidden="true"
        className="transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] motion-reduce:transition-none group-hover:translate-x-1"
      >
        →
      </span>
      {children}
    </a>
  );
}
