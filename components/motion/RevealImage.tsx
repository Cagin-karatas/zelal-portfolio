// Client rendering is required to coordinate viewport entry with clip and image-scale motion.
"use client";

import type { PropsWithChildren } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";

import { cn } from "@/lib/cn";
import { DURATION, EASE, IMAGE_REVEAL, REVEAL_VIEWPORT } from "@/lib/motion";

export interface RevealImageProps extends PropsWithChildren {
  readonly source: StaticImageData;
  readonly alt: string;
  readonly sizes: string;
  readonly quality: number;
  readonly preload?: boolean;
  readonly isRevealEnabled?: boolean;
  readonly hasNaturalAspectRatio?: boolean;
  readonly className?: string;
  readonly imageClassName?: string;
}

export function RevealImage({
  source,
  alt,
  sizes,
  quality,
  preload = false,
  isRevealEnabled = true,
  hasNaturalAspectRatio = false,
  className,
  imageClassName,
  children,
}: RevealImageProps) {
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial={isRevealEnabled ? { clipPath: IMAGE_REVEAL.hiddenClip } : false}
      whileInView={{ clipPath: IMAGE_REVEAL.visibleClip }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: DURATION.slow, ease: EASE.out }}
      style={hasNaturalAspectRatio ? { aspectRatio: `${source.width} / ${source.height}` } : {}}
      data-image-wrapper="true"
      data-motion-reveal="true"
    >
      <motion.div
        className="absolute inset-0"
        initial={isRevealEnabled ? { scale: IMAGE_REVEAL.hiddenScale } : false}
        whileInView={{ scale: IMAGE_REVEAL.visibleScale }}
        viewport={REVEAL_VIEWPORT}
        transition={{ duration: DURATION.slow, ease: EASE.out }}
        data-motion-reveal-image="true"
      >
        <Image
          src={source}
          alt={alt}
          fill
          className={cn("object-cover", imageClassName)}
          sizes={sizes}
          quality={quality}
          placeholder="blur"
          preload={preload}
          data-image="true"
        />
      </motion.div>
      {children}
    </motion.div>
  );
}
