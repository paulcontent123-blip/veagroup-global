"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companies } from "@/content/vea-demo";
import { companyAccent } from "@/lib/company-accent";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function CompanySection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((i: number) => {
    const card = scrollerRef.current?.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }, []);

  const onScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const anchor = scroller.getBoundingClientRect().left;
    let best = 0;
    let min = Infinity;
    Array.from(scroller.children).forEach((child, i) => {
      const d = Math.abs((child as HTMLElement).getBoundingClientRect().left - anchor);
      if (d < min) {
        min = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  return (
    <section id="companies" className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* chữ nền mờ "VEA GROUP" */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[18vw] font-black leading-none tracking-tighter text-brand/[0.04] lg:text-[240px]"
      >
        VEA GROUP
      </span>

      <Container className="relative z-10 pb-10">
        <span className="eyebrow">5 Công ty thành viên</span>
        <h2 className="mt-3 text-balance font-black leading-[1.1] tracking-tight text-ink text-[clamp(1.9rem,1.2rem+2.6vw,2.6rem)]">
          Mỗi công ty một
          <br />
          <span className="text-gradient italic">thế mạnh riêng biệt</span>
        </h2>
        <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-muted">
          Năm mảng kinh doanh được thiết kế để bổ trợ lẫn nhau — từ truyền thông, công nghệ, pháp lý đến bán lẻ và giáo dục.
        </p>
      </Container>

      {/* Cuộn ngang có scroll-snap */}
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="hide-scrollbar relative z-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 scroll-px-5 sm:px-8 sm:scroll-px-8 lg:px-10 lg:scroll-px-10"
      >
        {companies.map((c) => {
          const a = companyAccent[c.accent];
          return (
            <article
              key={c.key}
              className="group flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lift sm:w-[320px]"
            >
              <div className={cn("bg-gradient-to-br to-transparent p-6 pb-[18px]", a.wash)}>
                <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-ink/50">{c.member}</div>
                <div className="mt-3 flex items-center gap-2.5">
                  <span className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-xl border text-xl", a.icon)} aria-hidden>
                    {c.emoji}
                  </span>
                  <div>
                    <div className="text-[19px] font-black tracking-tight text-ink">{c.name}</div>
                    <div className="mt-0.5 text-[10px] text-muted">{c.sub}</div>
                  </div>
                </div>
                <p className="mt-3.5 text-[12.5px] leading-relaxed text-muted">{c.tagline}</p>
                <div className="mt-3.5 flex flex-wrap gap-1">
                  {c.services.map((s) => (
                    <span key={s} className={cn("rounded border px-2 py-0.5 text-[10px] font-semibold", a.chip)}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border-t border-line bg-sand-100 px-4 py-3.5">
                {c.stats.map(([value, label]) => (
                  <div key={label}>
                    <div className="text-gradient text-[17px] font-black leading-tight">{value}</div>
                    <div className="mt-px text-[10px] leading-tight text-muted">{label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-line px-4 py-3">
                <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-muted">{c.platformsLabel}</div>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {c.platforms.map((p) => (
                    <span key={p} className="rounded border border-line bg-sand-200 px-2 py-0.5 text-[9.5px] text-muted">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-line px-4 py-3">
                <span className="flex items-center gap-1.5 text-[10.5px] text-muted">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      c.statusTone === "green" ? "animate-blink bg-emerald-500" : "bg-amber-500",
                    )}
                  />
                  {c.status}
                </span>
                <Link
                  href={`/ve-vea/cong-ty#${c.key}`}
                  className="inline-flex items-center gap-1 rounded border border-line-strong px-3 py-1.5 text-[11px] font-semibold text-ink shadow-soft transition-[color,border-color,box-shadow] group-hover:border-brand group-hover:text-brand group-hover:shadow-lift"
                >
                  {c.cta} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Dots điều hướng */}
      <div className="relative z-10 mt-5 flex justify-center gap-1.5">
        {companies.map((c, i) => (
          <button
            key={c.key}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Xem ${c.name}`}
            aria-current={i === active}
            className={cn(
              "h-[3px] rounded-full transition-all",
              i === active ? "w-8 bg-brand" : "w-5 bg-line-strong hover:bg-brand/40",
            )}
          />
        ))}
      </div>
    </section>
  );
}
