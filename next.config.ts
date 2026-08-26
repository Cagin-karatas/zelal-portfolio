import type { NextConfig } from "next";

// `output: 'export'` is deliberately not set — a static export disables
// next/image's on-demand optimization pipeline, and this design depends
// on it (per-image AVIF encoding, blur placeholders, responsive sizes).
const nextConfig: NextConfig = {
  images: {
    // AVIF before WebP: at matched visual quality AVIF compresses better,
    // and this design leans on near-black portraits and saturated red —
    // exactly the tones where WebP's extra banding shows up first.
    formats: ["image/avif", "image/webp"],
    // `next/image`'s `quality` prop only accepts values from this list.
    // 80 is the floor because below it the accent red and deep blacks in
    // the source photography start banding (see design-plan.md §9).
    qualities: [80, 90, 100],
  },
};

export default nextConfig;
