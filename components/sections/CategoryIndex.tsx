import { VerticalSwapText } from "@/components/ui/VerticalSwapText";
import { categories } from "@/content/categories";

export function CategoryIndex() {
  return (
    <nav aria-label="Project categories">
      <p className="label mb-3 text-ink">Index</p>
      <ul className="border-t-hairline border-rule">
        {categories.map((category) => (
          <li key={category.label} className="border-b-hairline border-rule">
            <a
              href={category.href}
              className="group label flex items-center justify-between gap-2 py-3 text-ink"
            >
              <VerticalSwapText>{category.label}</VerticalSwapText>
              <span
                className="text-accent transition-transform duration-fast ease-editorial group-hover:translate-x-1 group-focus-visible:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
