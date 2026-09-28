import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export interface VerticalSwapTextProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function VerticalSwapText({ children, className }: VerticalSwapTextProps) {
  return (
    <span className={cn("relative block overflow-hidden", className)}>
      <span className="vertical-swap-primary block">{children}</span>
      <span
        className="vertical-swap-copy absolute inset-0 translate-y-full text-accent"
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}
