import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type Tone = "default" | "subtle" | "muted" | "dark";

const toneClass: Record<Tone, string> = {
  default: "bg-white",
  subtle: "bg-sand-100",
  muted: "bg-sand-200",
  dark: "bg-ink-800 text-white",
};

/**
 * Section chuẩn: nền theo tone, viền hairline trên/dưới, padding dọc responsive,
 * và Container bên trong (tắt bằng `bleed` nếu cần layout tràn).
 */
export function Section({
  id,
  tone = "default",
  bordered = false,
  bleed = false,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: Tone;
  bordered?: boolean;
  bleed?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24 scroll-mt-24",
        toneClass[tone],
        bordered && "border-y border-line",
        tone === "dark" && bordered && "border-white/10",
        className,
      )}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
