import type { ProjectMeta } from "@/types/project";

interface TimecodeMetaProps {
  meta: ProjectMeta;
}

/**
 * §6 item 7 — one line of real technical data, shaped two honest ways.
 * Positioned top-right so it never fights ImageCaption (bottom-left) or
 * CropMarks' ratio label (bottom-right corner) for the same corner of the
 * frame — film-strip metadata reads like a slate at the top of a shot,
 * caption text reads like a subtitle at the bottom; keeping that split
 * physical, not just semantic, is what keeps three overlays legible on one
 * image.
 */
export function TimecodeMeta({ meta }: TimecodeMetaProps) {
  const text =
    meta.kind === "film"
      ? `${meta.timecode} · ${meta.year} · ${meta.format} · ${meta.location}`
      : `${meta.aperture} · ${meta.shutterSpeed} · ISO ${meta.iso}`;

  return (
    <p className="absolute right-4 top-4 text-label tabular-nums text-ink-soft">
      {text}
    </p>
  );
}
