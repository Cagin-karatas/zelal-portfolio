import { cn } from "@/lib/cn";

interface ImageCaptionProps {
  children: string;
  className?: string;
}

/**
 * §6 item 8 — treated like a film subtitle: bottom-left, at most two
 * lines, `--ink-soft`, never centered, never ending in a period (a
 * caption states what something is; it doesn't conclude a sentence —
 * that discipline belongs to whoever writes the caption text, not to
 * this component).
 *
 * Built on the `label` size (0.7rem) for scale, but explicitly cancels
 * its uppercase/tracking/color — a caption is a read sentence, not a tag,
 * even though it borrows the same small size from the same 5-role scale
 * (§6 item 6 leaves no other small size to borrow from).
 */
export function ImageCaption({ children, className }: ImageCaptionProps) {
  return (
    <p
      className={cn(
        "absolute bottom-4 left-4 line-clamp-2 max-w-[28ch] text-label normal-case tracking-normal text-ink-soft",
        className,
      )}
    >
      {children}
    </p>
  );
}
