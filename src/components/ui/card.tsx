import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card nền: viền hairline, bo góc, shadow mềm.
 * `interactive` thêm hiệu ứng hover nhấc lên + đổi viền cam (pattern lặp khắp demo).
 */
export function Card({
  as: Tag = "div",
  interactive = false,
  id,
  className,
  children,
}: {
  as?: ElementType;
  interactive?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "rounded-lg border border-line bg-white shadow-soft",
        interactive &&
          "transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
