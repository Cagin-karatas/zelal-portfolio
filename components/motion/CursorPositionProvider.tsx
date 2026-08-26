"use client"; // tracks live pointer position via a window listener — a real, cleaned-up side effect

import { useEffect, type ReactNode } from "react";
import { useMotionValue } from "motion/react";
import { CursorPositionContext } from "@/lib/context/cursor-position";

interface CursorPositionProviderProps {
  children: ReactNode;
}

/**
 * One `pointermove` listener for the whole page, shared by every consumer
 * that needs live cursor position (CustomCursor's dot, CursorPreview's
 * floating thumbnail) — both Step 7c devices. MotionValues update outside
 * React's render cycle, so adding a second or third consumer never means
 * a second or third listener, and never triggers a re-render on every
 * mouse move.
 */
export function CursorPositionProvider({ children }: CursorPositionProviderProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    function handlePointerMove(event: PointerEvent): void {
      x.set(event.clientX);
      y.set(event.clientY);
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
    <CursorPositionContext.Provider value={{ x, y }}>
      {children}
    </CursorPositionContext.Provider>
  );
}
