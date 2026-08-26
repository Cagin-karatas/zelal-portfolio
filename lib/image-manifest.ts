import imageManifest from "@/content/generated/image-manifest.json";
import type { ImageManifest } from "@/types/image";

// The JSON import satisfies `ImageManifest`'s shape by construction
// (scripts/extract-colors.ts is the only writer), but resolveJsonModule
// widens object literals to their exact inferred keys rather than the
// `Record<string, ImageManifestEntry>` this file's callers need to index
// with an arbitrary string.
const manifest = imageManifest as ImageManifest;

/**
 * Reads a build-time-extracted dominant color by its public/images-relative
 * key (e.g. "work/01.jpg") — the same key scripts/extract-colors.ts writes,
 * and the source the ambient-color-bleed signature effect (§3.6) reads
 * from. `blurDataUrl`, the manifest's other field, stays unused: Next's
 * native blur placeholder already generates one automatically for a
 * statically-imported `<Image placeholder="blur">`, so this manifest's
 * real job turned out to be dominant-color extraction alone.
 *
 * Throws rather than falling back to a guessed color: extract-colors.ts
 * scans every file under public/images, so every image this site actually
 * renders already has a real entry. A miss here means the manifest is
 * stale relative to public/images/ — a build-time data bug, not a case
 * worth silently papering over with a color that isn't really that
 * image's own.
 */
export function getDominantColor(path: string): string {
  const entry = manifest[path];
  if (!entry) {
    throw new Error(
      `getDominantColor: no manifest entry for "${path}" — run "npm run extract-colors".`,
    );
  }
  return entry.dominantColor;
}
