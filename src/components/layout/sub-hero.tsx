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
        "relative overflow-hidden border-b pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pt-[100px] lg:pb-16",
        isDark ? "border-white/10 bg-ink text-white" : "border-line bg-sand-100 text-ink",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[500px] max-w-[45%] bg-[radial-gradient(ellipse_80%_100%_at_100%_50%,rgba(200,84,26,0.08),transparent_65%)] lg:block"
      />
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
        <div className="mt-6 max-w-4xl">
          <span className={cn("eyebrow", isDark && "text-brand-400 before:bg-brand-400")}>{eyebrow}</span>
          <h1 className="mt-3.5 text-balance font-black leading-[1.15] tracking-[-1.5px] text-[36px] sm:text-[48px] lg:text-[64px]">
            {title}
            {highlight ? (
              <>
                {" "}
                <span className={cn("italic", isDark ? "text-brand-400" : "text-gradient")}>{highlight}</span>
              </>
            ) : null}
          </h1>
          {description ? (
            <p className={cn("mt-5 max-w-[560px] text-[15px] leading-[1.75]", isDark ? "text-white/62" : "text-muted")}>
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-7 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
