// Client hook: URL hash changes expose active navigation without moving the Header client boundary.
"use client";

import { useEffect, useState } from "react";

import { navigation } from "@/content/site";

type NavigationHash = (typeof navigation)[number]["href"];

function findNavigationHash(hash: string): NavigationHash {
  return navigation.find((item) => item.href === hash)?.href ?? navigation[1].href;
}

export function useActiveNavigation(): NavigationHash {
  const [activeHash, setActiveHash] = useState<NavigationHash>(navigation[1].href);

  useEffect(() => {
    const handleHashChange = () => setActiveHash(findNavigationHash(window.location.hash));

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return activeHash;
}
