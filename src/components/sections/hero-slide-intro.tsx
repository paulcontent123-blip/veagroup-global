"use client";

import { ArrowRight } from "lucide-react";
import { companyChips, heroStats } from "@/content/vea-demo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useLocale } from "@/components/i18n/locale-provider";
import { tx } from "@/lib/i18n/tx";
//them
/** Slide 1 của hero carousel — giới thiệu hệ sinh thái (bám demo `.hero-slide` #1). */
export function HeroSlideIntro() {
  const { locale } = useLocale();

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* nền cream + sọc cờ + chữ "VEA" mờ + orb (trang trí) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(160deg,#FFFDF9_0%,#FFF5EC_35%,#FFF9F5_65%,#F8F3EE_100%)]"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-flag-strip" />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-4vw] top-1/2 -translate-y-1/2 select-none text-[180px] font-black leading-none tracking-[-8px] text-brand/[0.06] sm:text-[260px] lg:text-[360px]"
      >
        VEA
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 animate-orb-pulse rounded-full bg-[radial-gradient(circle,rgba(200,84,26,.07)_0%,transparent_65%)] sm:h-[720px] sm:w-[720px]"
      />

      <Container className="relative z-10 flex h-full flex-col justify-center py-16 sm:py-20 lg:pb-[60px] lg:pt-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_minmax(360px,440px)]">
          {/* Cột trái */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/[0.08] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-brand" />
              {locale === "en" ? "Vietnam Era Group · Vietnam Era" : "Vietnam Era Group · Kỷ nguyên Việt Nam"}
            </span>
            <h1 className="mt-6 text-balance font-black leading-[1.05] tracking-[-2px] text-[40px] sm:text-[52px] lg:text-[68px]">
              <span className="block text-ink">{locale === "en" ? "One ecosystem." : "Một hệ sinh thái."}</span>
              <span className="block text-gradient">{locale === "en" ? "Five companies." : "Năm công ty."}</span>
              <span className="mt-0.5 block font-normal italic text-muted text-[32px] sm:text-[40px] lg:text-[48px]">
                {locale === "en" ? "Endless opportunities." : "Vô số cơ hội."}
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-[16px] leading-[1.8] text-muted">
              {locale === "en"
                ? "We build a multi-industry business ecosystem in Vietnam — where every member company supports the others to optimize cost and create more value for customers, partners and communities."
                : "Chúng tôi xây dựng hệ sinh thái kinh doanh đa ngành tại Việt Nam — nơi mỗi công ty thành viên đan xen, bổ trợ lẫn nhau để tối ưu chi phí và tối đa hóa giá trị cho khách hàng, đối tác và cộng đồng."}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/ve-vea/cong-ty" size="lg">
                {locale === "en" ? "Explore 5 member companies" : "Khám phá 5 công ty thành viên"} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/he-sinh-thai" variant="secondary" size="lg">
                {locale === "en" ? "Explore 14 digital platforms" : "Xem 14 nền tảng số"} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Cột phải: panel số liệu (ẩn trên mobile để giữ chiều cao hero) */}
          <div className="relative hidden overflow-hidden rounded-3xl border border-line bg-white/70 p-7 shadow-lift backdrop-blur-md sm:p-8 lg:block">
            <div aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-brand-gradient" />
            <div className="flex items-center gap-3 rounded-xl border border-brand/15 bg-brand/[0.06] px-3.5 py-3">
              <span className="text-2xl" aria-hidden>🇻🇳</span>
              <div>
                <div className="text-[13px] font-bold text-brand">Vietnam Era Group</div>
                <div className="mt-0.5 text-[11px] text-muted">
                  {locale === "en" ? "Vietnam Era · Built from love of country" : "Kỷ nguyên Việt Nam · Xây dựng từ tình yêu đất nước"}
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {heroStats.map((stat) => (
                <div key={tx(stat.label, locale)} className="rounded-xl border border-line bg-sand-100 p-4 text-center">
                  <div className="text-gradient text-[26px] font-black leading-none">{stat.value}</div>
                  <div className="mt-1.5 text-[11px] leading-4 text-muted">{tx(stat.label, locale)}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.1em] text-muted">
              {locale === "en" ? "5 member companies" : "5 công ty thành viên"}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {companyChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded border border-brand/20 bg-brand/[0.08] px-2.5 py-1 text-[10.5px] font-semibold text-brand"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
