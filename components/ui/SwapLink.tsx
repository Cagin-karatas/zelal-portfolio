import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface SwapLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: string;
}

/**
 * The vertical text-swap hover idiom (§5.10) for Header's nav and
 * Footer's social links: two stacked copies of the same label sit inside
 * one `h-[1.6em]` overflow-hidden window — `1.6em` is `text-label`'s own
 * line-height (tailwind.config.ts), not an invented number, so the window
 * is exactly one line tall. The current copy (`--ink-soft`) sits on top, a
 * second `--accent` copy directly beneath it; hovering slides the whole
 * two-line stack up by half its height — exactly one line — so the accent
 * copy takes the visible slot. Mouse-leave reverses the same transform for
 * free, since this is one continuous CSS state, not a one-shot animation.
 *
 * Pure CSS: `:hover` on the anchor drives `group-hover`, so Header and
 * Footer — both server components — get this device without either one
 * crossing a "use client" boundary.
 */
export function SwapLink({
  href,
  children,
  className,
  ...anchorProps
}: SwapLinkProps) {
  return (
    <a
      href={href}
      className={cn("label group relative block h-[1.6em] overflow-hidden", className)}
      {...anchorProps}
    >
      <span
        className="flex flex-col transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] motion-reduce:transition-none group-hover:-translate-y-1/2"
      >
        <span className="text-ink-soft">{children}</span>
        <span aria-hidden="true" className="text-accent">
          {children}
        </span>
      </span>
    </a>
  );
}
