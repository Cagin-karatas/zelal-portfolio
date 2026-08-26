"use client"; // reads live cursor position + a matchMedia-backed hook, both browser-only

import { motion, useReducedMotion, useSpring } from "motion/react";
import { useCursorPosition } from "@/lib/context/cursor-position";
import { useFinePointer } from "@/lib/hooks/useFinePointer";

const CURSOR_SIZE_PX = 12;
const CURSOR_SPRING = { damping: 30, stiffness: 400, mass: 0.5 };

/**
 * Replaces the OS cursor with a small filled dot, on fine-pointer input
 * only. globals.css hides the native cursor under the same
 * `(hover: hover) and (pointer: fine)` query, in plain CSS, so there's no
 * gap where the native cursor is hidden before this has mounted, or
 * shown-then-hidden as it does. Touch input is entirely untouched —
 * `useFinePointer` renders nothing until a real mouse/trackpad answers.
 *
 * The dot springs toward the raw pointer position for a slight, deliberate
 * trailing feel — except under reduced motion, where it tracks the raw
 * position directly with no spring lag: a cursor that visibly lags its
 * own input is exactly the kind of motion that preference exists to
 * remove, not just shorten.
 */
export function CustomCursor() {
  const hasFinePointer = useFinePointer();
  const prefersReducedMotion = useReducedMotion();
  const { x, y } = useCursorPosition();
  const springX = useSpring(x, CURSOR_SPRING);
  const springY = useSpring(y, CURSOR_SPRING);

  if (!hasFinePointer) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-cursor rounded-full bg-accent"
      style={{
        width: CURSOR_SIZE_PX,
        height: CURSOR_SIZE_PX,
        marginLeft: -CURSOR_SIZE_PX / 2,
        marginTop: -CURSOR_SIZE_PX / 2,
        x: prefersReducedMotion ? x : springX,
        y: prefersReducedMotion ? y : springY,
      }}
    />
  );
}
