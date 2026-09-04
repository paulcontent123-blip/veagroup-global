import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "brand" | "neutral" | "success" | "warning" | "info";

const toneClass: Record<Tone, string> = {
  brand: "bg-brand/10 text-brand ring-1 ring-brand/20",
  neutral: "bg-sand-200 text-muted ring-1 ring-line",
  success: "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200",
  warning: "bg-amber-100 text-amber-700 ring-1 ring-amber-200",
  info: "bg-sky-100 text-sky-700 ring-1 ring-sky-200",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2.5 py-0.5 text-[11px] font-bold leading-5",
        toneClass[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
