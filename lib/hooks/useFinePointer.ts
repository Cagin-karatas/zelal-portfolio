"use client"; // reads matchMedia, a browser-only API

import { useEffect, useState } from "react";

const QUERY = "(hover: hover) and (pointer: fine)";

/**
 * True only for input that can meaningfully drive a custom cursor — a
 * mouse or trackpad. Starts `false` (matching the touch/no-pointer case,
 * and matching server rendering, which has no matchMedia at all) and
 * corrects itself once mounted, so CustomCursor and CursorPreview default
 * to rendering nothing until a fine pointer is actually confirmed, rather
 * than assuming one and having to undo it on a touch device.
 */
export function useFinePointer(): boolean {
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    setHasFinePointer(mediaQuery.matches);

    function handleChange(event: MediaQueryListEvent): void {
      setHasFinePointer(event.matches);
    }

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return hasFinePointer;
}
