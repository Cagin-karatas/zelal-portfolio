"use client"; // hover handlers write to the shared ambient-color context

import type { ReactNode } from "react";
import { useSetAmbientColor } from "@/lib/context/ambient-color";
import { cn } from "@/lib/cn";

interface AmbientTriggerProps {
  color: string;
  children: ReactNode;
  className?: string;
}

/**
 * Where §3.6's signature effect actually gets triggered: renders the box
 * an image sits in, with hover handlers that push the image's build-time
 * dominant color into the shared ambient layer, and clear it back to
 * `null` on leave. Used in place of the plain wrapper `<div>` an image box
 * would otherwise need, so Hero and WorkItem — both server components —
 * only cross the "use client" boundary here, at the one leaf that needs
 * hover interactivity, not for the whole section.
 */
export function AmbientTrigger({ color, children, className }: AmbientTriggerProps) {
  const setAmbientColor = useSetAmbientColor();

  return (
    <div
      className={cn(className)}
      onMouseEnter={() => setAmbientColor(color)}
      onMouseLeave={() => setAmbientColor(null)}
    >
      {children}
    </div>
  );
}
