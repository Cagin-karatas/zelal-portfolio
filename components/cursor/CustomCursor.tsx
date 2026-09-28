// Client boundary: the cursor reads live pointer state and mutates transform-only presentation refs.
"use client";

import { CursorPreview } from "@/components/cursor/CursorPreview";
import { useCursorPosition } from "@/hooks/useCursorPosition";
import { cn } from "@/lib/cn";
import { CURSOR_MOTION, DURATION, EASE } from "@/lib/motion";

export function CustomCursor() {
  const { isEnabled, isVisible, disciplineSlug, cursorRef, previewRef } = useCursorPosition();

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-cursor"
      style={{
        transform: `translate3d(${CURSOR_MOTION.hiddenPosition}px, ${CURSOR_MOTION.hiddenPosition}px, 0)`,
        willChange: isVisible ? "transform" : undefined,
      }}
      aria-hidden="true"
    >
      <div
        className={cn(
          "label flex size-cursor -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-paper transition-opacity",
          isVisible ? "opacity-100" : "opacity-0",
        )}
        style={{
          transitionDuration: `${DURATION.fast}s`,
          transitionTimingFunction: EASE.outCss,
        }}
      >
        VIEW
      </div>
      <div
        ref={previewRef}
        className="absolute left-0 top-0"
        style={{ willChange: disciplineSlug ? "transform" : undefined }}
      >
        <CursorPreview disciplineSlug={disciplineSlug} />
      </div>
    </div>
  );
}
