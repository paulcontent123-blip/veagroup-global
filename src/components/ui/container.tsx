import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Khung nội dung căn giữa, max-width + padding ngang thống nhất toàn site. */
export function Container({
  as: Tag = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-container container-px", className)}>
      {children}
    </Tag>
  );
}
