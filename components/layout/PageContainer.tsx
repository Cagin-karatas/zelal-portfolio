import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

export interface PageContainerProps extends PropsWithChildren {
  readonly className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return <div className={cn("mx-auto w-full max-w-content px-frame", className)}>{children}</div>;
}
