"use client"; // React Context's Provider/consumer pair both require the client runtime

import { createContext, useContext } from "react";

type SetAmbientColor = (color: string | null) => void;

export const AmbientColorContext = createContext<SetAmbientColor | null>(null);

/**
 * Thin accessor so call sites (AmbientTrigger) import one function instead
 * of wiring up `useContext(AmbientColorContext)` and its null-check
 * themselves. `AmbientColorProvider` is mounted exactly once, in
 * app/layout.tsx, wrapping the whole page — a null context here means a
 * component using this hook rendered outside that provider, which is a
 * real setup bug, not a case a caller should have to code around.
 */
export function useSetAmbientColor(): SetAmbientColor {
  const setColor = useContext(AmbientColorContext);
  if (!setColor) {
    throw new Error(
      "useSetAmbientColor must be used within <AmbientColorProvider>",
    );
  }
  return setColor;
}
