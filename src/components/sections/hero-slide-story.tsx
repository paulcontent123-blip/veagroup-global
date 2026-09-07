"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useLocale } from "@/components/i18n/locale-provider";

/** Slide 2 của hero carousel — hành trình / video giới thiệu (bám demo `.hero-slide` #2). */
export function HeroSlideStory() {
  const { locale } = useLocale();

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(160deg,#FFF9F5_0%,#FFF4EC_50%,#FFF8F4_100%)]"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-flag-strip" />

      <Container className="relative z-10 flex h-full flex-col justify-center py-16 sm:py-20 lg:pb-[60px] lg:pt-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="flex items-center gap-2.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-brand">
              <span aria-hidden className="h-px w-[18px] bg-brand" />
              Vietnam Era Group
            </span>
            <h2 className="mt-3.5 text-balance font-black leading-[1.1] tracking-[-0.8px] text-ink text-[32px] sm:text-[36px] lg:text-[40px]">
              {locale === "en" ? "Building the" : "Hành trình xây dựng"}
              <br />
              <span className="text-gradient italic">{locale === "en" ? "Vietnam Era" : "Kỷ nguyên Việt Nam"}</span>
            </h2>
            <p className="mt-3.5 max-w-lg text-[15px] leading-7 text-muted">
              {locale === "en"
                ? "The story of five companies, 14 digital platforms and VEA Group's long-term vision — born from love and a desire to contribute to the country."
                : "Câu chuyện về 5 công ty, 14 nền tảng số và tầm nhìn dài hạn của VEA Group — bắt nguồn từ tình yêu và khát vọng cống hiến cho đất nước."}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/ve-vea/cau-chuyen" size="lg">
                {locale === "en" ? "Read our story" : "Đọc câu chuyện của chúng tôi"} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/lien-he" variant="secondary" size="lg">
                {locale === "en" ? "Partner with VEA" : "Hợp tác với VEA"}
              </Button>
            </div>
          </div>

          <Link
            href="/ve-vea/cau-chuyen"
            aria-label={locale === "en" ? "Watch the VEA Group story" : "Xem câu chuyện VEA Group"}
            className="group relative block aspect-video w-full overflow-hidden rounded-2xl border-2 border-brand/25 bg-[linear-gradient(135deg,#1E0E05,#2A1208)] shadow-brand transition hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-3.5">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-gradient shadow-[0_0_32px_rgba(200,84,26,0.5)] transition group-hover:scale-110">
                <Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
              </span>
              <span className="text-[13px] font-medium text-white/70">
                {locale === "en" ? "Watch the VEA Group story" : "Xem câu chuyện VEA Group"}
              </span>
            </span>
            <span aria-hidden className="absolute left-2.5 top-2.5 h-4 w-4 border-l-2 border-t-2 border-brand-500/50" />
            <span aria-hidden className="absolute right-2.5 top-2.5 h-4 w-4 border-r-2 border-t-2 border-brand-500/50" />
            <span aria-hidden className="absolute bottom-2.5 left-2.5 h-4 w-4 border-b-2 border-l-2 border-brand-500/50" />
            <span aria-hidden className="absolute bottom-2.5 right-2.5 h-4 w-4 border-b-2 border-r-2 border-brand-500/50" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
