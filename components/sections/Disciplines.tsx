import { Rule } from "@/components/ui/Rule";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { CursorPreview } from "@/components/motion/CursorPreview";
import { DISCIPLINES } from "@/content/disciplines";

// ASSUMPTION: the brief asks for a short framing sentence in this
// section's left column (§4) but doesn't supply the actual copy — this
// is placeholder text pending Zelal's own wording, not a finished line.
const FRAMING_SENTENCE = "Five ways of working, one way of seeing.";

/**
 * Rows are plain <li>, not <a> — there's no per-discipline page to link
 * to (Selected Work's category links, in Step 6, are the real
 * navigation). The hover-to-red state makes the list feel alive and, as
 * of Step 7c, also drives the cursor-follow preview thumbnail
 * (`CursorPreview`, §5.4) — purely decorative, so a keyboard user loses
 * nothing by never triggering it. Styling a non-actionable row like a
 * link would be the actual accessibility problem here, not the fix for one.
 *
 * §6 item 7 (the timecode/meta strip) isn't applied in this section: it
 * needs real per-project technical data — film timecode, f-stop, ISO —
 * that only exists once content/projects.ts is written in Step 6. Item 9
 * (this list's hover-driven optical-size shift) is applied below.
 *
 * The whole grid is wrapped in one ClipReveal (Step 7a) rather than one
 * per row — the section arrives as a single settled block, and the
 * per-row hover treatment (already present) stays the only per-row motion.
 *
 * The row list is also a `focus-dim-group` (Step 7b): hovering one row
 * dims the other four, on top of its own existing color/opsz shift — the
 * same "draw the eye toward the one thing you're pointing at" idiom
 * Selected Work's grid uses, applied to a list instead of an image grid.
 */
export function Disciplines() {
  return (
    <ClipReveal className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-gutter">
      <div className="lg:col-span-4">
        <p className="max-w-[36ch] text-body text-ink-soft">
          {FRAMING_SENTENCE}
        </p>
      </div>

      <ul className="focus-dim-group lg:col-span-8">
        {DISCIPLINES.map((discipline) => (
          <li key={discipline.id} className="group focus-dim-item">
            <Rule />
            <CursorPreview
              image={discipline.previewImage}
              className="flex items-center justify-between py-6"
            >
              <span className="text-number tabular-nums text-ink-soft transition-colors group-hover:text-accent">
                {discipline.number}
              </span>
              <span className="hover-opsz-shift flex-1 px-8 font-display text-section text-ink transition-colors group-hover:text-accent">
                {discipline.title}
              </span>
              <span
                aria-hidden="true"
                className="text-section text-ink-soft transition-colors group-hover:text-accent"
              >
                →
              </span>
            </CursorPreview>
          </li>
        ))}
        <Rule />
      </ul>
    </ClipReveal>
  );
}
