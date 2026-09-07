"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getMessages } from "@/lib/i18n/messages";
import { useLocale } from "@/components/i18n/locale-provider";
import { HeroSlideIntro } from "./hero-slide-intro";
import { HeroSlideStory } from "./hero-slide-story";

const SLIDES = [
  { key: "intro", label: "Giới thiệu hệ sinh thái", Slide: HeroSlideIntro },
  { key: "story", label: "Hành trình VEA Group", Slide: HeroSlideStory },
] as const;

const AUTOPLAY_MS = 9000;

/**
 * Hero carousel — 2 slide, tự chạy 9s, tạm dừng khi hover/focus,
 * tôn trọng prefers-reduced-motion. Bám cấu trúc `<!-- HERO CAROUSEL -->` của demo HTML.
 */
export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const { locale } = useLocale();
  const messages = getMessages(locale);

  const go = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      id="top"
      aria-roledescription="carousel"
      aria-label={messages.carousel.label}
      className="relative isolate overflow-hidden border-b border-line bg-sand-100"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative h-[calc(100svh-4rem)] max-h-[900px] min-h-[600px] w-full overflow-hidden">
        <div
          aria-live="off"
          className="flex h-full transition-transform duration-700 [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map(({ key, label, Slide }, i) => (
            <div
              key={key}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${SLIDES.length} — ${locale === "en" ? (key === "intro" ? "Ecosystem introduction" : "VEA Group journey") : label}`}
              aria-hidden={i !== index}
              inert={i !== index}
              className="h-full w-full shrink-0"
            >
              <Slide />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-3.5">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label={messages.carousel.prev}
          className="grid h-9 w-9 place-items-center rounded-full border border-line-strong bg-white/80 text-muted shadow-soft backdrop-blur transition hover:border-brand hover:text-brand"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {SLIDES.map(({ key }, i) => (
            <button
              key={key}
              type="button"
              onClick={() => go(i)}
              aria-label={`${messages.carousel.goTo} ${i + 1}`}
              aria-current={i === index}
              className={cn(
                "h-[3px] rounded-full transition-all",
                i === index ? "w-9 bg-brand" : "w-6 bg-brand/25 hover:bg-brand/40",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label={messages.carousel.next}
          className="grid h-9 w-9 place-items-center rounded-full border border-line-strong bg-white/80 text-muted shadow-soft backdrop-blur transition hover:border-brand hover:text-brand"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
