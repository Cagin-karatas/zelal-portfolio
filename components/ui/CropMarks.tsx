import type { ProjectAspectRatio } from "@/types/project";

interface CropMarksProps {
  aspectRatio: ProjectAspectRatio;
}

/**
 * §6 item 11 — Work-grid-only "contact sheet" instrumentation: four
 * hairline corner ticks plus the frame's own aspect ratio, printed tight
 * against the bottom-right tick the way a loupe mark sits on a negative.
 * Decoration, not information a screen-reader user needs (the same ratio
 * is already implied by the image's rendered shape), so the whole thing is
 * `aria-hidden`. Ticks reuse `--rule` — the hairline-divider color — rather
 * than inventing a 6th token for what is, structurally, still a hairline.
 */
export function CropMarks({ aspectRatio }: CropMarksProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-rule" />
      <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-rule" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-rule" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-rule" />
      <span className="absolute bottom-1 right-5 text-label tabular-nums text-ink-soft">
        {aspectRatio}
      </span>
    </div>
  );
}
