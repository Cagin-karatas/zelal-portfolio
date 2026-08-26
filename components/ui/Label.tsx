import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface LabelProps {
  children: ReactNode;
  /** Rendered tag — defaults to <span>; use "li" or "p" where the label needs block/list layout. */
  as?: ElementType;
  className?: string;
}

/**
 * The single tag/label idiom (§3.2) as a component, not a bare
 * `className="label"` string — a typo in a class name fails silently,
 * a typo in a component name fails at compile time.
 */
export function Label({ children, as: Tag = "span", className }: LabelProps) {
  return <Tag className={cn("label", className)}>{children}</Tag>;
}
