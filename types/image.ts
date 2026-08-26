/**
 * One entry in the build-time image manifest produced by
 * `scripts/extract-colors.ts`. Consumed by `useAmbientColor` (added in
 * step 7b) and by the `blurDataURL` prop wherever a project image is
 * rendered.
 */
export interface ImageManifestEntry {
  /** Hex color from downsampling the source image to a single pixel. */
  dominantColor: string;
  /** Inline base64 JPEG placeholder for `next/image`'s `blurDataURL`. */
  blurDataUrl: string;
}

/** Keyed by the image's path relative to `public/images`, e.g. `work/film-01.jpg`. */
export type ImageManifest = Record<string, ImageManifestEntry>;
