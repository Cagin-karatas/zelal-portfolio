import { ArrowLink } from "@/components/ui/ArrowLink";
import { WorkItem } from "@/components/sections/WorkItem";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { CATEGORIES, PROJECTS } from "@/content/projects";
import { SECTION_ID } from "@/lib/constants";
import type { Project, ProjectCategory } from "@/types/project";

// ASSUMPTION: exact wording is placeholder, same caveat as Disciplines'
// FRAMING_SENTENCE — only the *shape* is specified by the brief: a
// sans-serif sentence with one display-italic, accent-colored word, the
// site's single sanctioned exception to "accent never appears in body
// text" (§6 item 5).
const INTRO_PREFIX = "A working archive of frames, stills and ";
const INTRO_ACCENT_WORD = "stories.";

function findProject(id: string): Project {
  const project = PROJECTS.find((candidate) => candidate.id === id);
  if (!project) {
    throw new Error(`SelectedWork: no project with id "${id}"`);
  }
  return project;
}

/**
 * Real anchors, not `href="#"`: each category points at its first matching
 * PROJECTS entry, falling back to the section id when no placeholder
 * exists yet for that category (currently only "Writing") — the same
 * fake-link mistake corrected once already in Disciplines (Step 5).
 */
function categoryHref(categoryId: ProjectCategory): string {
  const match = PROJECTS.find((project) => project.category === categoryId);
  return match ? `#${match.id}` : `#${SECTION_ID.selectedWork}`;
}

/**
 * The asymmetric grid (§6 item 3): every row's col-start/col-span pair is
 * written out by hand rather than derived from moduleSpan, because the
 * void is a row-level decision — *where* the empty twelfths fall — and a
 * single item's span can't express that on its own. No two rows repeat the
 * same void shape.
 *
 * §6 item 12 ("kontakt föy" contact-sheet treatment) is deliberately not
 * applied here: it's scoped in the brief to an Archive page this site's
 * structure doesn't have (resolved via AskUserQuestion; see
 * design-plan.md's Step 6 entry).
 *
 * The intro/categories row and the grid below it share one ClipReveal
 * (Step 7a) — the section settles in as a single block, the same
 * treatment Disciplines gets, so the two below-the-fold sections read as
 * one consistent entrance idiom rather than two different ones.
 *
 * The grid itself is a `focus-dim-group` (Step 7b): hovering one WorkItem
 * dims every other tile, and — via that same hover, inside WorkItem's own
 * AmbientTrigger — bleeds its dominant color into the page. The two Step
 * 7b devices fire off the same hover, on purpose: one draws the eye in,
 * the other tints the room around it.
 */
export function SelectedWork() {
  return (
    <ClipReveal className="flex flex-col gap-y-16">
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-gutter">
        <p className="text-body text-ink-soft lg:col-span-4">
          {INTRO_PREFIX}
          <em className="font-display italic text-accent">
            {INTRO_ACCENT_WORD}
          </em>
        </p>

        <ul className="flex flex-col gap-4 lg:col-span-3 lg:col-start-10">
          {CATEGORIES.map((category) => (
            <li key={category.id}>
              <ArrowLink href={categoryHref(category.id)}>
                {category.label}
              </ArrowLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="focus-dim-group grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-gutter lg:gap-y-24">
        <WorkItem
          project={findProject("work-photography-01")}
          className="lg:col-span-4 lg:col-start-1"
        />
        <WorkItem
          project={findProject("work-collage-01")}
          className="lg:col-span-5 lg:col-start-7"
        />

        <WorkItem
          project={findProject("work-films-01")}
          className="lg:col-span-7 lg:col-start-4"
        />

        <WorkItem
          project={findProject("work-music-video-01")}
          className="lg:col-span-5 lg:col-start-1"
        />
        <WorkItem
          project={findProject("work-drawing-01")}
          className="lg:col-span-4 lg:col-start-8"
        />

        <WorkItem
          project={findProject("work-films-02")}
          className="lg:col-span-7 lg:col-start-2"
        />
      </div>
    </ClipReveal>
  );
}
