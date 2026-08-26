import type { ReactNode } from "react";
import { Label } from "@/components/ui/Label";
import { Rule } from "@/components/ui/Rule";
import { cn } from "@/lib/cn";

interface SectionOpener {
  /** Zero-padded section number, e.g. '02'. */
  number: string;
  /** Section name, rendered through the shared `.label` treatment. */
  title: string;
  /** Item count the section lists, rendered as `(05)`. */
  itemCount: number;
}

interface SectionProps {
  id: string;
  children: ReactNode;
  /**
   * Renders the §6 item-2 "film jeneriği" opening strip — number, name,
   * item count. Omit for sections with their own custom header treatment:
   * Hero already carries its own "01" in its meta column, and Footer has
   * no strip at all.
   */
  opener?: SectionOpener;
  className?: string;
}

/**
 * Every section's padding and margin rhythm is decided here, once. The
 * brief calls this out specifically (§3.3) because scattering `py-*`
 * classes across individual sections is the most common way spacing
 * drifts off the 8px baseline grid without anyone noticing.
 */
export function Section({ id, children, opener, className }: SectionProps) {
  return (
    <section id={id} className={cn("w-full px-edge py-section", className)}>
      {opener ? (
        <div className="mb-12">
          <Rule />
          <div className="flex h-12 items-center justify-between">
            <span className="text-number tabular-nums text-ink-soft">
              {opener.number}
            </span>
            <Label>{opener.title}</Label>
            <span className="text-number tabular-nums text-ink-soft">
              ({String(opener.itemCount).padStart(2, "0")})
            </span>
          </div>
        </div>
      ) : null}
      {children}
    </section>
  );
}
