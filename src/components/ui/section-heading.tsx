import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Tiêu đề section: eyebrow + heading (có phần tô gradient) + mô tả.
 * `highlight` là đoạn trong tiêu đề được tô màu thương hiệu.
 */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  className,
  children,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  highlight?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow", tone === "dark" && "text-brand-400 before:bg-brand-400")}>
          {eyebrow}
        </span>
      ) : null}
      <Heading
        className={cn(
          "text-balance font-black leading-[1.1] tracking-tight",
          "text-[32px] sm:text-[36px] lg:text-[40px]",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="text-gradient italic">{highlight}</span>
          </>
        ) : null}
      </Heading>
      {description ? (
        <p
          className={cn(
            "max-w-prose text-[15px] leading-relaxed",
            tone === "dark" ? "text-white/60" : "text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
