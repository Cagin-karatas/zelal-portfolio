import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import type { ImageManifest } from "../types/image";

const IMAGES_DIRECTORY = path.join(process.cwd(), "public", "images");
const OUTPUT_FILE = path.join(
  process.cwd(),
  "content",
  "generated",
  "image-manifest.json",
);
const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
// Small enough to cost nothing to inline as base64, large enough that the
// blur still reads as the image's shape rather than a flat color.
const BLUR_PLACEHOLDER_WIDTH_PIXELS = 12;

async function listImageFiles(directory: string): Promise<string[]> {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch {
    // public/images doesn't exist yet — real photography hasn't been
    // placed. Not an error at this stage of the build.
    return [];
  }

  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listImageFiles(fullPath)));
      continue;
    }
    if (SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

function rgbToHex(red: number, green: number, blue: number): string {
  const toHex = (value: number) => value.toString(16).padStart(2, "0");
  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}

/**
 * Dominant color is extracted at build time, never at runtime. Resizing an
 * image to 1x1 with sharp is a single decode-and-downsample on the server;
 * doing the equivalent with a <canvas> in the browser means shipping a
 * fully decoded bitmap to the client just to throw away every pixel but
 * one. See design-plan.md §5.1 for the full rationale.
 */
async function extractDominantColor(filePath: string): Promise<string> {
  const { data } = await sharp(filePath)
    .resize(1, 1, { fit: "fill" })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const [red, green, blue] = data;
  return rgbToHex(red ?? 0, green ?? 0, blue ?? 0);
}

async function extractBlurDataUrl(filePath: string): Promise<string> {
  const resized = await sharp(filePath)
    .resize(BLUR_PLACEHOLDER_WIDTH_PIXELS)
    .jpeg({ quality: 40 })
    .toBuffer();
  return `data:image/jpeg;base64,${resized.toString("base64")}`;
}

function toManifestKey(filePath: string): string {
  return path.relative(IMAGES_DIRECTORY, filePath).split(path.sep).join("/");
}

async function main(): Promise<void> {
  const files = await listImageFiles(IMAGES_DIRECTORY);

  if (files.length === 0) {
    console.warn(
      "[extract-colors] public/images altında görsel bulunamadı — boş manifest yazılıyor. " +
        "Görseller eklendiğinde `npm run extract-colors` tekrar çalıştırılmalı.",
    );
  }

  const manifest: ImageManifest = {};

  for (const filePath of files) {
    const key = toManifestKey(filePath);
    const [dominantColor, blurDataUrl] = await Promise.all([
      extractDominantColor(filePath),
      extractBlurDataUrl(filePath),
    ]);
    manifest[key] = { dominantColor, blurDataUrl };
    console.info(`[extract-colors] ${key} → ${dominantColor}`);
  }

  await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await writeFile(OUTPUT_FILE, `${JSON.stringify(manifest, null, 2)}\n`, "utf-8");
  console.info(
    `[extract-colors] ${files.length} görsel işlendi → ${path.relative(process.cwd(), OUTPUT_FILE)}`,
  );
}

main().catch((error: unknown) => {
  console.error("[extract-colors] başarısız oldu:", error);
  process.exitCode = 1;
});
