import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [80, 85, 90, 100],
  },
  poweredByHeader: false,
};

export default nextConfig;
