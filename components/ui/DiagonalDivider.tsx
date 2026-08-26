import { cn } from "@/lib/cn";

interface DiagonalDividerProps {
  className?: string;
}

/**
 * The break between major sections (Step 7d) — a slightly uneven cut
 * instead of Section's own perfectly horizontal opener `<Rule />`, so the
 * two hairline devices stay visually distinct: one is a straight ruler
 * line inside a section's own header strip, this is a cut *between*
 * sections. Reuses `--rule`, the same hairline-divider token, rather than
 * a new color.
 *
 * Contained within `px-edge` (via the caller) rather than bleeding to the
 * viewport edge — the brief reserves full-bleed for exactly one moment,
 * Hero's portrait (design-plan.md §3.4: "her ekranda tek bir tam kanama
 * anı"); a second edge-to-edge element here would quietly break that.
 *
 * `preserveAspectRatio="none"` lets the line stretch to whatever width
 * the container gives it while keeping the same subtle rise regardless of
 * viewport — the angle is a fixed visual idea, not a fixed pixel shape.
 * The `px-edge` inset is the caller's job (a wrapping `<div>`, matching
 * how Section applies its own edge padding), not this component's — it
 * just draws the line across whatever width it's given.
 */
export function DiagonalDivider({ className }: DiagonalDividerProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 12"
      preserveAspectRatio="none"
      className={cn("h-3 w-full", className)}
    >
      <line
        x1="0"
        y1="9"
        x2="100"
        y2="3"
        stroke="var(--rule)"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
