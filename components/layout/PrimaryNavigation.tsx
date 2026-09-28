// Client boundary: the current URL hash marks one primary navigation item as active.
"use client";

import { VerticalSwapText } from "@/components/ui/VerticalSwapText";
import { navigation } from "@/content/site";
import { useActiveNavigation } from "@/hooks/useActiveNavigation";
import { cn } from "@/lib/cn";

export function PrimaryNavigation() {
  const activeHash = useActiveNavigation();

  return (
    <nav className="col-span-10" aria-label="Primary navigation">
      <ul className="flex items-center justify-end gap-3 md:gap-5">
        {navigation.map((navigationItem) => {
          const isActive = navigationItem.href === activeHash;

          return (
            <li key={navigationItem.href}>
              <a
                className={cn("group label block py-2", isActive ? "text-accent" : "text-ink-soft")}
                href={navigationItem.href}
                aria-current={isActive ? "location" : undefined}
              >
                <VerticalSwapText>{navigationItem.label}</VerticalSwapText>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
