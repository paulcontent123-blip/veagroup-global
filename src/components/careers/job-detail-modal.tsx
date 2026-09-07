"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { getJob } from "@/content/jobs";
import { tx } from "@/lib/i18n/tx";
import { cn } from "@/lib/utils";
import type { Localized } from "@/lib/types";

/* ── Context ─────────────────────────────────────────────── */
// Khớp `.detail-overlay` / `openJobDetail()` của demo: click 1 job-card mở
// overlay tại chỗ thay vì điều hướng sang trang riêng. Trang `/tuyen-dung/[slug]`
// vẫn giữ lại để có URL chia sẻ/SEO — modal chỉ thay đổi luồng click trong danh sách.

type JobDetailCtx = { activeSlug: string | null; open: (slug: string) => void; close: () => void };

const Ctx = createContext<JobDetailCtx | null>(null);

export function useJobDetail(): JobDetailCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useJobDetail must be used within <JobDetailProvider>");
  return ctx;
}

export function JobDetailProvider({ children }: { children: ReactNode }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const open = useCallback((slug: string) => setActiveSlug(slug), []);
  const close = useCallback(() => setActiveSlug(null), []);

  return (
    <Ctx.Provider value={{ activeSlug, open, close }}>
      {children}
      <JobDetailModal slug={activeSlug} close={close} />
    </Ctx.Provider>
  );
}

/* ── Modal (bottom sheet, bám .detail-overlay/.detail-sheet của demo) ──── */

function JobDetailModal({ slug, close }: { slug: string | null; close: () => void }) {
  const router = useRouter();
  const job = slug ? getJob(slug) : undefined;
  const isOpen = Boolean(job);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    // Mount ở vị trí translateY(40px) rồi trượt lên ngay khung hình kế —
    // khớp transition trượt lên của `.detail-sheet.open` trong demo.
    const raf = requestAnimationFrame(() => setShown(true));
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(raf);
      setShown(false);
    };
  }, [isOpen, close]);

  if (!job) return null;

  function applyNow() {
    close();
    router.push("/#contact");
  }

  return (
    <div
      role="presentation"
      onClick={close}
      className={cn(
        "fixed inset-0 z-[100] flex items-end justify-center bg-ink/60 backdrop-blur-sm transition-opacity duration-300",
        shown ? "opacity-100" : "opacity-0",
      )}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="job-detail-title"
        onClick={(event) => event.stopPropagation()}
        className={cn(
          "max-h-[88vh] w-full max-w-[860px] overflow-y-auto rounded-t-[20px] bg-white transition-transform duration-[350ms] ease-[cubic-bezier(.22,1,.36,1)]",
          shown ? "translate-y-0" : "translate-y-10",
        )}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-line bg-white px-6 py-4 sm:px-8">
          <div className="text-xs text-muted">
            Tuyển dụng <span className="text-brand">/ {job.company}</span>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Đóng"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sand-200 text-sm text-muted transition-colors hover:bg-sand-300 hover:text-ink"
          >
            ✕
          </button>
        </div>

        <div className="px-6 pb-10 pt-6 sm:px-8">
          <h2 id="job-detail-title" className="text-[22px] font-black leading-tight text-ink sm:text-2xl">
            {tx(job.title, "vi")}
          </h2>

          <div className="mt-4 rounded-lg border border-brand/25 bg-brand/[0.06] px-3.5 py-2.5 text-[13px] text-ink">
            <strong className="font-bold">{job.company}</strong> · {tx(job.location, "vi")} · {tx(job.level, "vi")}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted">{tx(job.summary, "vi")}</p>

          <JobReqList title="Mô tả công việc" items={job.responsibilities} />
          <JobReqList title="Yêu cầu" items={job.requirements} />

          <div className="mt-4 rounded-lg border border-brand/20 bg-brand/[0.06] px-3.5 py-2.5 text-[13px] text-brand">
            <strong className="font-bold text-ink">Quyền lợi:</strong> {job.benefits.map((b) => tx(b, "vi")).join(" · ")}
          </div>

          <button
            type="button"
            onClick={applyNow}
            className="mt-6 block w-full rounded-[10px] bg-brand-gradient px-4 py-3 text-center text-sm font-bold text-white shadow-brand transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-[1.05]"
          >
            Ứng tuyển ngay →
          </button>
        </div>
      </div>
    </div>
  );
}

function JobReqList({ title, items }: { title: string; items: Localized[] }) {
  if (!items.length) return null;
  return (
    <div className="mt-5">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.5px] text-ink">{title}</div>
      <div>
        {items.map((item) => {
          const label = tx(item, "vi");
          return (
            <div key={label} className="flex gap-2 border-b border-line py-1.5 text-[13px] text-muted last:border-b-0">
              <span className="shrink-0 font-bold text-brand">+</span>
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
