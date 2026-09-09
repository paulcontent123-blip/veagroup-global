"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/i18n/locale-provider";
import { tx } from "@/lib/i18n/tx";

const contactOptions = [
  {
    emoji: "💼",
    title: { vi: "Nhà đầu tư", en: "Investors" },
    description: {
      vi: "Cơ hội đầu tư vào hệ sinh thái 14 nền tảng số tại thị trường Việt Nam và ĐNA đang tăng trưởng nhanh.",
      en: "Explore investment opportunities in a fast-growing 14-platform ecosystem across Vietnam and Southeast Asia.",
    },
    cta: { vi: "Xem Investment Deck", en: "View investment deck" },
    href: "/hop-tac",
  },
  {
    emoji: "🤝",
    title: { vi: "Đối tác chiến lược", en: "Strategic partners" },
    description: {
      vi: "Brand, agency, nền tảng muốn tích hợp vào hệ sinh thái VEA hoặc co-build sản phẩm phục vụ người Việt.",
      en: "Brands, agencies and platforms that want to integrate with or co-build products inside the VEA ecosystem.",
    },
    cta: { vi: "Đề xuất hợp tác", en: "Propose a partnership" },
    href: "/hop-tac",
  },
  {
    emoji: "🧑‍💻",
    title: { vi: "Tuyển dụng nhân tài", en: "Talent" },
    description: {
      vi: "Dev, designer, marketer, luật sư — join VEA và cùng xây dựng kỷ nguyên số Việt Nam từ những ngày đầu tiên.",
      en: "Developers, designers, marketers and lawyers — join VEA and build Vietnam's digital era from day one.",
    },
    cta: { vi: "Xem vị trí", en: "View roles" },
    href: "/tuyen-dung",
  },
] as const;

const FIELD =
  "w-full rounded-[7px] border border-line bg-sand-100 px-3.5 py-2.5 text-[13px] text-ink outline-none transition-colors placeholder:text-muted-lighter focus:border-brand focus:bg-white";
const LABEL = "text-[10px] font-semibold uppercase tracking-[0.3px] text-muted";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { locale } = useLocale();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSubmitError(false);
    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact-section",
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          type: data.get("type"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSent(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-sand-100 py-20 sm:py-24">
      <div className="container-px mx-auto max-w-[1100px]">
        {/* Tiêu đề — canh giữa */}
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">{locale === "en" ? "Partner with VEA Group" : "Hợp tác với VEA Group"}</span>
          <h2 className="mt-3 text-balance font-black leading-[1.1] tracking-[-0.5px] text-ink text-[32px] sm:text-[36px] lg:text-[40px]">
            {locale === "en" ? "Build the" : "Cùng xây dựng"}
            <br />
            <span className="text-gradient italic">{locale === "en" ? "Vietnam Era" : "kỷ nguyên Việt Nam"}</span>
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            {locale === "en"
              ? "We are looking for strategic partners, investors and specialists who want to help build Vietnam's leading digital ecosystem."
              : "Chúng tôi tìm kiếm đối tác chiến lược, nhà đầu tư và chuyên gia muốn tham gia vào hành trình kiến tạo hệ sinh thái số hàng đầu Việt Nam."}
          </p>
        </div>

        {/* 3 nhóm đối tượng */}
        <div className="mt-11 grid gap-3 md:grid-cols-3">
          {contactOptions.map((option) => (
            <div
              key={tx(option.title, locale)}
              className="group flex flex-col rounded-[14px] border border-line bg-white p-[22px] shadow-soft transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lift"
            >
              <div className="text-[22px] leading-none" aria-hidden>
                {option.emoji}
              </div>
              <h3 className="mt-3 text-sm font-bold text-ink">{tx(option.title, locale)}</h3>
              <p className="mt-1 flex-1 text-xs leading-[1.55] text-muted">{tx(option.description, locale)}</p>
              <Link
                href={option.href}
                className="mt-4 inline-flex w-full items-center justify-center rounded-md border-[1.5px] border-line-strong bg-white px-3.5 py-2 text-xs font-semibold text-ink shadow-soft transition-[color,border-color,box-shadow] group-hover:border-brand group-hover:text-brand group-hover:shadow-lift"
              >
                {tx(option.cta, locale)} →
              </Link>
            </div>
          ))}
        </div>

        {/* Form liên hệ trực tiếp */}
        <div className="mx-auto mt-11 max-w-[680px] rounded-2xl border border-line bg-white p-6 shadow-lift sm:p-[30px]">
          <h3 className="text-base font-bold text-ink">{locale === "en" ? "Contact directly" : "Liên hệ trực tiếp"}</h3>
          <p className="mt-1 text-[13px] text-muted">
            {locale === "en" ? "We reply within 1 business day" : "Phản hồi trong 24 giờ làm việc"} · hello@veagroup.global
          </p>

          {sent ? (
            <div className="mt-6 flex flex-col items-center gap-2 rounded-xl bg-emerald-50 px-4 py-8 text-center">
              <CheckCircle2 className="h-9 w-9 text-emerald-600" />
              <p className="text-sm font-bold text-ink">{locale === "en" ? "Received (demo)" : "Đã ghi nhận (bản demo)"}</p>
              <p className="max-w-sm text-[13px] leading-relaxed text-muted">
                {locale === "en"
                  ? "The backend is not connected yet, so nothing was sent. The VEA team will reply within 1 business day."
                  : "Backend chưa được kết nối nên dữ liệu chưa gửi đi. Đội ngũ VEA sẽ phản hồi trong 24 giờ làm việc."}
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-1 text-[13px] font-semibold text-brand"
              >
                {locale === "en" ? "Send another message" : "Gửi thông tin khác"}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-5 grid gap-2.5 sm:grid-cols-2">
              <label className="flex flex-col gap-1">
                <span className={LABEL}>{locale === "en" ? "Full name" : "Họ và tên"}</span>
                <input name="name" required placeholder={locale === "en" ? "Jane Doe" : "Nguyễn Văn A"} className={FIELD} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={LABEL}>Email</span>
                <input name="email" type="email" required placeholder="contact@company.vn" className={FIELD} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={LABEL}>{locale === "en" ? "Company" : "Công ty"}</span>
                <input name="company" placeholder={locale === "en" ? "Company name" : "Tên doanh nghiệp"} className={FIELD} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={LABEL}>{locale === "en" ? "Partnership type" : "Hình thức hợp tác"}</span>
                <select name="type" required defaultValue="" className={cn(FIELD, "h-[38px]")}>
                  <option value="" disabled>
                    {locale === "en" ? "Select a partnership type" : "Chọn hình thức hợp tác"}
                  </option>
                  <option>{locale === "en" ? "Investor" : "Nhà đầu tư"}</option>
                  <option>{locale === "en" ? "Strategic partner" : "Đối tác chiến lược"}</option>
                  <option>Brand Advertising</option>
                  <option>{locale === "en" ? "Careers" : "Tuyển dụng"}</option>
                  <option>{locale === "en" ? "Other" : "Khác"}</option>
                </select>
              </label>
              <label className="flex flex-col gap-1 sm:col-span-2">
                <span className={LABEL}>{locale === "en" ? "Message" : "Nội dung"}</span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder={locale === "en" ? "Describe your partnership goals or question..." : "Mô tả mục tiêu hợp tác hoặc câu hỏi của bạn..."}
                  className={cn(FIELD, "min-h-[76px] resize-none")}
                />
              </label>
              {submitError ? (
                <p className="text-[13px] font-medium text-red-600 sm:col-span-2">
                  {locale === "en"
                    ? "Couldn't send right now — please try again in a moment."
                    : "Gửi không thành công — vui lòng thử lại sau ít phút."}
                </p>
              ) : null}
              <div className="sm:col-span-2">
                <Button type="submit" disabled={submitting} className="w-full">
                  {submitting
                    ? locale === "en"
                      ? "Sending…"
                      : "Đang gửi…"
                    : locale === "en"
                      ? "Send message → Reply within 24h"
                      : "Gửi thông tin → Phản hồi trong 24h"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
