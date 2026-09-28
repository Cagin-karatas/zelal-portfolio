import { cn } from "@/lib/cn";

export interface MaskedLine {
  readonly text: string;
  readonly className?: string;
}

export interface MaskedLinesProps {
  readonly as?: "h1" | "p";
  readonly ariaLabel: string;
  readonly lines: readonly MaskedLine[];
  readonly className?: string;
}

export function MaskedLines({
  as: Component = "p",
  ariaLabel,
  lines,
  className,
}: MaskedLinesProps) {
  return (
    <Component className={className}>
      <span className="sr-only">{ariaLabel}</span>
      {lines.map((line, index) => (
        <span key={`${line.text}-${index}`} className="block overflow-hidden" aria-hidden="true">
          <span className={cn("block", line.className)}>{line.text}</span>
        </span>
      ))}
    </Component>
  );
}
