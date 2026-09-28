// Client hook: delegated pointer events coordinate one ambient layer for every work card.
"use client";

import { useEffect, useState, type RefObject } from "react";

import { DATA_SELECTOR, MEDIA_QUERY } from "@/lib/constants";

interface AmbientState {
  readonly color: string;
  readonly opacity: number;
}

const NEUTRAL_AMBIENT: AmbientState = {
  color: "transparent",
  opacity: 0,
};

function findAmbientSource(target: EventTarget | null) {
  return target instanceof Element
    ? target.closest<HTMLElement>(DATA_SELECTOR.ambientSource)
    : null;
}

function readAmbient(source: HTMLElement): AmbientState {
  const opacity = Number(source.dataset.ambientOpacity);

  if (!Number.isFinite(opacity) || opacity < 0.08 || opacity > 0.14) {
    return NEUTRAL_AMBIENT;
  }

  return {
    color: source.dataset.ambientColor ?? NEUTRAL_AMBIENT.color,
    opacity,
  };
}

export function useAmbientColor(regionRef: RefObject<HTMLElement | null>) {
  const [ambient, setAmbient] = useState<AmbientState>(NEUTRAL_AMBIENT);

  useEffect(() => {
    const region = regionRef.current;
    const finePointerQuery = window.matchMedia(MEDIA_QUERY.finePointer);

    if (!region || !finePointerQuery.matches) {
      return;
    }

    const handlePointerOver = (event: PointerEvent) => {
      const source = findAmbientSource(event.target);

      if (source && region.contains(source)) {
        setAmbient(readAmbient(source));
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      const currentSource = findAmbientSource(event.target);
      const nextSource = findAmbientSource(event.relatedTarget);

      if (!currentSource || currentSource === nextSource) {
        return;
      }

      setAmbient(
        nextSource && region.contains(nextSource) ? readAmbient(nextSource) : NEUTRAL_AMBIENT,
      );
    };

    region.addEventListener("pointerover", handlePointerOver);
    region.addEventListener("pointerout", handlePointerOut);

    return () => {
      region.removeEventListener("pointerover", handlePointerOver);
      region.removeEventListener("pointerout", handlePointerOut);
    };
  }, [regionRef]);

  return ambient;
}
