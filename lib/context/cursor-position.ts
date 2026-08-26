"use client"; // React Context's Provider/consumer pair both require the client runtime

import { createContext, useContext } from "react";
import type { MotionValue } from "motion/react";

interface CursorPosition {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export const CursorPositionContext = createContext<CursorPosition | null>(null);

/**
 * Thin accessor, same shape as useSetAmbientColor: callers (CustomCursor,
 * CursorPreview) get one function instead of wiring up `useContext` and
 * its null-check themselves. `CursorPositionProvider` is mounted exactly
 * once, in app/layout.tsx — a null context here means a component using
 * this hook rendered outside it, a setup bug rather than a real case to
 * handle.
 */
export function useCursorPosition(): CursorPosition {
  const position = useContext(CursorPositionContext);
  if (!position) {
    throw new Error(
      "useCursorPosition must be used within <CursorPositionProvider>",
    );
  }
  return position;
}
