import { cn } from "@/lib/cn";

interface RuleProps {
  className?: string;
}

/**
 * The hairline divider used throughout (Section's opener strip, and from
 * Step 6, the Work grid). A real `<hr>` — a thematic break is what this
 * is semantically, not a styled `<div>`. 0.5px, not Tailwind's default
 * 1px border: at hairline weight the difference actually reads on screen.
 */
export function Rule({ className }: RuleProps) {
  return <hr className={cn("border-t-[0.5px] border-rule", className)} />;
}
