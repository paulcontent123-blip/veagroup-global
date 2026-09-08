"use client";

import { useEffect, useState } from "react";

// Bám hiệu ứng chào lần đầu vào trang của veagroup.global: overlay trắng full-screen,
// 8 chữ cái "V E A G r o u p" trượt vào từ trái, xếp thành hàng, tô gradient cam→trắng,
// lệch nhịp delay theo thứ tự, cùng 1 gạch ngang gradient quét bên dưới. Chỉ hiện 1 lần
// mỗi phiên (sessionStorage) — vào lại/chuyển trang trong cùng phiên sẽ không lặp lại.
const LETTERS = ["V", "E", "A", "G", "r", "o", "u", "p"];
const SESSION_KEY = "vea-intro-shown";
const HOLD_MS = 1300; // đủ để chữ trượt vào + xếp hàng đọc được "VEA Group" trước khi fade
const FADE_MS = 350;

export function IntroPreloader() {
  const [phase, setPhase] = useState<"idle" | "shown" | "fading">("idle");

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // Storage bị chặn (chế độ riêng tư nghiêm ngặt…) — coi như chưa xem, không chặn trang.
    }
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (alreadyShown || reduceMotion) return;

    setPhase("shown");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const fadeTimer = window.setTimeout(() => setPhase("fading"), HOLD_MS);
    const doneTimer = window.setTimeout(() => {
      setPhase("idle");
      document.body.style.overflow = previousOverflow;
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // no-op — không có storage thì lần sau vẫn hiện lại, chấp nhận được.
      }
    }, HOLD_MS + FADE_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (phase === "idle") return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-white transition-opacity duration-300 ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative mx-8 w-full max-w-[520px] pb-6 text-center">
        <div className="flex justify-evenly text-[13vw] font-black leading-[1.1] tracking-[0.08em] sm:text-[64px]">
          {LETTERS.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className="intro-letter"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
        <span className="intro-line" />
      </div>
    </div>
  );
}
