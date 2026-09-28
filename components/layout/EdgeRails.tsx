import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { siteIdentity } from "@/content/site";
import { Z_LAYER_CLASS } from "@/lib/constants";

export function EdgeRails() {
  return (
    <div className="hidden rails:block" aria-hidden="true">
      <p
        className={`label fixed left-3 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-ink-soft ${Z_LAYER_CLASS.rails}`}
      >
        {siteIdentity.location}
      </p>

      <ScrollProgress />
    </div>
  );
}
