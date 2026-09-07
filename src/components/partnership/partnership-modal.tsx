"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ── Context ─────────────────────────────────────────────── */

type PartnershipCtx = { isOpen: boolean; open: () => void; close: () => void };

const Ctx = createContext<PartnershipCtx | null>(null);

export function usePartnership(): PartnershipCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("usePartnership must be used within <PartnershipProvider>");
  return ctx;
}

export function PartnershipProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <Ctx.Provider value={{ isOpen, open, close }}>
      {children}
      <PartnershipModal isOpen={isOpen} close={close} />
    </Ctx.Provider>
  );
}

/* ── Modal (coop form) ───────────────────────────────────── */

const TOPICS = [
  "🏢 VEA Group (Tập đoàn — hợp tác chiến lược)",
  "📡 VEA Media (Influencer, KOL, Digital Marketing)",
  "⚙️ VEA Tech (Nền tảng, phần mềm, công nghệ)",
  "⚖️ VEA Law (Pháp lý, tranh tụng, tư vấn)",
  "🛍️ VEA Retail (Bán lẻ, phân phối, OEM)",
  "🎓 VEA Academy (Đào tạo, giáo dục)",
];

const LABEL = "text-[10.5px] font-bold uppercase tracking-[0.5px] text-muted-light";
const INPUT =
  "w-full rounded-[7px] border-[1.5px] border-line bg-sand-100 px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted-lighter focus:border-brand focus:bg-white";

function PartnershipModal({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) {
      setSent(false);
      setError(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const filled = ["name", "email", "phone", "type"].every((key) => String(data.get(key) ?? "").trim());
    if (!filled) {
      setError(true);
      return;
    }
    setError(false);
    setSent(true);
  }

  return (
    <div
      role="presentation"
      onClick={close}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/55 p-4 backdrop-blur-sm sm:p-5"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="coop-title"
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-[580px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_64px_rgba(15,15,15,0.2)]"
      >
        <div className="flex items-center justify-between gap-3 bg-brand-gradient px-6 py-5 sm:px-7">
          <h2 id="coop-title" className="text-base font-bold text-white sm:text-lg">
            🤝 Đăng ký hợp tác với VEA Group
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Đóng"
            className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/20 text-sm text-white transition-colors hover:bg-white/30"
          >
            ✕
          </button>
        </div>

        {sent ? (
          <div className="px-6 py-10 text-center sm:px-7">
            <div className="text-3xl" aria-hidden>
              ✅
            </div>
            <p className="mt-3 text-sm font-bold text-ink">Đã ghi nhận (bản demo)</p>
            <p className="mx-auto mt-1.5 max-w-sm text-[13px] leading-relaxed text-muted">
              Backend chưa được kết nối nên yêu cầu chưa gửi đi. Đội ngũ VEA sẽ phản hồi trong 1–2 ngày làm việc.
            </p>
            <button type="button" onClick={close} className="mt-5 text-[13px] font-semibold text-brand">
              Đóng
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="px-6 py-6 sm:px-7">
              <p className="mb-4 text-sm leading-relaxed text-muted">
                Cho chúng tôi biết về bạn và nhu cầu hợp tác — đội ngũ VEA sẽ phản hồi trong vòng 1–2 ngày làm việc.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Tên / Công ty *" name="name" placeholder="Công ty ABC" autoFocus />
                <Field label="Email *" name="email" type="email" placeholder="hello@company.com" />
              </div>
              <Field
                label="Số điện thoại / Zalo *"
                name="phone"
                type="tel"
                placeholder="0901 xxx xxx"
                className="mt-3"
              />

              <label className="mt-3 flex flex-col gap-1.5">
                <span className={LABEL}>Công ty hợp tác *</span>
                <select name="type" defaultValue="" className={INPUT}>
                  <option value="">-- Chọn đơn vị VEA muốn hợp tác --</option>
                  {TOPICS.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-3 flex flex-col gap-1.5">
                <span className={LABEL}>Mô tả nhu cầu hợp tác</span>
                <textarea
                  name="desc"
                  rows={3}
                  placeholder="Mô tả ngắn về dự án hoặc nhu cầu hợp tác của bạn..."
                  className={cn(INPUT, "resize-none")}
                />
              </label>

              {error ? (
                <p className="mt-3 text-[13px] font-medium text-red-600">Vui lòng điền các trường có dấu *.</p>
              ) : null}
            </div>

            <div className="flex gap-2.5 px-6 pb-6 pt-1 sm:px-7">
              <Button type="submit" className="flex-1">
                Gửi yêu cầu hợp tác →
              </Button>
              <button
                type="button"
                onClick={close}
                className="rounded-lg border-[1.5px] border-line px-4 text-sm font-semibold text-muted transition-colors hover:border-ink hover:text-ink"
              >
                Hủy
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  className,
  autoFocus,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}) {
  return (
    <label className={cn("flex flex-col gap-1.5", className)}>
      <span className={LABEL}>{label}</span>
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <input name={name} type={type} placeholder={placeholder} autoFocus={autoFocus} className={INPUT} />
    </label>
  );
}
