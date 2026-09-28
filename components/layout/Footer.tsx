import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { sectionMeta, siteIdentity, socialLinks } from "@/content/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const contactMeta = sectionMeta.contact;

  return (
    <footer id={contactMeta.id} aria-labelledby={`${contactMeta.id}-title`}>
      <PageContainer className="pb-7">
        <SectionHeader
          titleId={`${contactMeta.id}-title`}
          number={contactMeta.number}
          title={contactMeta.title}
          count={contactMeta.count}
        />

        <div className="grid grid-cols-editorial gap-x-gutter gap-y-6 pt-7">
          <div className="col-span-12 md:col-span-4">
            <p className="label text-ink">© {currentYear} Zelal Günay</p>
            <p className="label mt-2">All rights reserved</p>
          </div>

          <nav className="col-span-12 md:col-span-4" aria-label="Social links">
            <ul className="space-y-2">
              {socialLinks.map((socialLink) => (
                <li key={socialLink.label}>
                  <a
                    className="label inline-block py-2 text-ink"
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {socialLink.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-12 md:col-span-4 md:text-right">
            <p className="label">{siteIdentity.location}</p>
            <a
              className="label mt-3 inline-block text-ink"
              href={`mailto:${siteIdentity.contactEmail}`}
            >
              {siteIdentity.contactEmail} <span className="text-accent">→</span>
            </a>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
