// Client hook: pointer input and rAF interpolation drive the single shared cursor element.
"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { DATA_SELECTOR, MEDIA_QUERY } from "@/lib/constants";
import { CURSOR_MOTION } from "@/lib/motion";
import type { DisciplineSlug } from "@/types/disciplines";

export interface CursorState {
  readonly isVisible: boolean;
  readonly disciplineSlug: DisciplineSlug | null;
}

interface CursorPositionResult extends CursorState {
  readonly isEnabled: boolean;
  readonly cursorRef: RefObject<HTMLDivElement | null>;
  readonly previewRef: RefObject<HTMLDivElement | null>;
}

interface CursorPoint {
  x: number;
  y: number;
}

const INITIAL_STATE: CursorState = {
  isVisible: false,
  disciplineSlug: null,
};

const DISCIPLINE_SLUGS: readonly DisciplineSlug[] = [
  "visual-storytelling",
  "directing",
  "script-writing",
  "photography",
  "collage-drawings",
];

function isDisciplineSlug(value: string | undefined): value is DisciplineSlug {
  return value !== undefined && DISCIPLINE_SLUGS.some((slug) => slug === value);
}

function lerp(current: number, target: number, amount: number): number {
  return current + (target - current) * amount;
}

export function useCursorPosition(): CursorPositionResult {
  const cursorRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<CursorPoint>({
    x: CURSOR_MOTION.hiddenPosition,
    y: CURSOR_MOTION.hiddenPosition,
  });
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>(INITIAL_STATE);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isEnabled = hasFinePointer && !prefersReducedMotion;

  useEffect(() => {
    const finePointerQuery = window.matchMedia(MEDIA_QUERY.finePointer);
    const handleChange = () => setHasFinePointer(finePointerQuery.matches);

    handleChange();
    finePointerQuery.addEventListener("change", handleChange);
    return () => finePointerQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const preview = previewRef.current;

    if (!isEnabled || !cursor || !preview) {
      return;
    }

    let frameId = 0;
    let cursorX: number = pointerRef.current.x;
    let cursorY: number = pointerRef.current.y;
    let previewX: number = cursorX;
    let previewY: number = cursorY;

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>(DATA_SELECTOR.cursorTarget)
          : null;
      const disciplineSlug = target?.dataset.discipline;
      const nextState: CursorState = {
        isVisible: target !== null,
        disciplineSlug: isDisciplineSlug(disciplineSlug) ? disciplineSlug : null,
      };

      setCursorState((current) =>
        current.isVisible === nextState.isVisible &&
        current.disciplineSlug === nextState.disciplineSlug
          ? current
          : nextState,
      );
    };

    const handlePointerExit = (event: PointerEvent) => {
      if (event.relatedTarget === null) {
        setCursorState(INITIAL_STATE);
      }
    };

    const renderFrame = () => {
      cursorX = lerp(cursorX, pointerRef.current.x, CURSOR_MOTION.lerp);
      cursorY = lerp(cursorY, pointerRef.current.y, CURSOR_MOTION.lerp);
      previewX = lerp(previewX, pointerRef.current.x, CURSOR_MOTION.previewLerp);
      previewY = lerp(previewY, pointerRef.current.y, CURSOR_MOTION.previewLerp);
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      preview.style.transform = `translate3d(${previewX - cursorX + CURSOR_MOTION.previewOffsetX}px, ${previewY - cursorY + CURSOR_MOTION.previewOffsetY}px, 0)`;
      frameId = window.requestAnimationFrame(renderFrame);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerExit);
    frameId = window.requestAnimationFrame(renderFrame);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerExit);
      window.cancelAnimationFrame(frameId);
    };
  }, [isEnabled]);

  return { ...cursorState, isEnabled, cursorRef, previewRef };
}
