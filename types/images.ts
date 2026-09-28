export interface ImageManifestEntry {
  readonly source: string;
  readonly width: number;
  readonly height: number;
  readonly dominantColor: `#${string}`;
  readonly blurDataUrl: `data:image/${string}`;
}
