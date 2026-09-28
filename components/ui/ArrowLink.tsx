import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";
import { VerticalSwapText } from "@/components/ui/VerticalSwapText";
import type { SectionId } from "@/types/site";

export interface ArrowLinkProps extends PropsWithChildren {
  readonly href: `#${SectionId}`;
  readonly className?: string;
}

export function ArrowLink({ href, children, className }: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={cn("group label inline-flex items-center gap-2 py-2 text-ink", className)}
    >
      <span
        className="text-accent transition-transform duration-fast ease-editorial group-hover:translate-x-1 group-focus-visible:translate-x-1"
        aria-hidden="true"
      >
        →
      </span>
      <VerticalSwapText>{children}</VerticalSwapText>
    </a>
  );
}
