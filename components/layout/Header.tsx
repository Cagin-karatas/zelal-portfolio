import { PageContainer } from "@/components/layout/PageContainer";
import { PrimaryNavigation } from "@/components/layout/PrimaryNavigation";
import { siteIdentity } from "@/content/site";
import { SECTION_IDS, Z_LAYER_CLASS } from "@/lib/constants";

export function Header() {
  return (
    <header className={`relative ${Z_LAYER_CLASS.header}`}>
      <PageContainer className="grid h-8 grid-cols-editorial items-center gap-gutter">
        <a
          href={`#${SECTION_IDS.about}`}
          className="col-span-2 w-fit font-display text-body text-accent"
        >
          <span className="inline-grid">
            <span className="z-content col-start-1 row-start-1">{siteIdentity.monogram}</span>
            <span
              className="col-start-1 row-start-1 translate-x-misregister translate-y-misregister opacity-30 mix-blend-multiply"
              aria-hidden="true"
            >
              {siteIdentity.monogram}
            </span>
          </span>
          <span className="sr-only">— {siteIdentity.name}, home</span>
        </a>

        <PrimaryNavigation />
      </PageContainer>
    </header>
  );
}
