import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type SubHeroProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  highlight?: ReactNode;
  description?: ReactNode;
  backHref?: string;
  backLabel?: string;
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
};

/** Intro shell dùng chung cho các trang public cấp hai và trang detail. */
export function SubHero({
  eyebrow,
  title,
  highlight,
  description,
  backHref = "/",
  backLabel = "Về trang chủ",
  tone = "light",
  className,
  children,
}: SubHeroProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24",
        isDark ? "border-white/10 bg-ink text-white" : "border-line bg-sand-100 text-ink",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[28%] border-l border-brand/10 lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-1 w-40 bg-flag-strip" />
      <Container className="relative">
        <Link
          href={backHref}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-bold transition-colors",
            isDark ? "text-white/60 hover:text-white" : "text-muted hover:text-brand",
          )}
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        <div className="mt-10 max-w-4xl">
          <span className={cn("eyebrow", isDark && "text-brand-400 before:bg-brand-400")}>{eyebrow}</span>
          <h1 className="mt-4 text-balance text-4xl font-black leading-[1.06] tracking-normal sm:text-5xl lg:text-6xl">
            {title}
            {highlight ? (
              <>
                {" "}
                <span className={isDark ? "text-brand-400" : "text-gradient"}>{highlight}</span>
              </>
            ) : null}
          </h1>
          {description ? (
            <p className={cn("mt-6 max-w-2xl text-base leading-8 sm:text-lg", isDark ? "text-white/62" : "text-muted")}>
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-7 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
