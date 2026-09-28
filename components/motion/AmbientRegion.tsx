// Client boundary: work-card hover state drives the fixed ambient color layer.
"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";

import { useAmbientColor } from "@/hooks/useAmbientColor";
import { DURATION, EASE } from "@/lib/motion";

interface AmbientLayerStyle extends CSSProperties {
  "--ambient-color": string;
}

export interface AmbientRegionProps {
  readonly children: ReactNode;
}

export function AmbientRegion({ children }: AmbientRegionProps) {
  const regionRef = useRef<HTMLDivElement>(null);
  const ambient = useAmbientColor(regionRef);
  const layerStyle: AmbientLayerStyle = {
    "--ambient-color": ambient.color,
    opacity: ambient.opacity,
    transitionDuration: `${DURATION.base}s`,
    transitionTimingFunction: EASE.outCss,
  };

  return (
    <>
      <div ref={regionRef}>{children}</div>
      <div
        className="ambient-layer pointer-events-none fixed inset-0 z-ambient bg-ambient"
        style={layerStyle}
        aria-hidden="true"
      />
    </>
  );
}
