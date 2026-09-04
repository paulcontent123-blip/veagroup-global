"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactOptions = [
  {
    emoji: "💼",
    title: "Nhà đầu tư",
    description:
      "Cơ hội đầu tư vào hệ sinh thái 14 nền tảng số tại thị trường Việt Nam và ĐNA đang tăng trưởng nhanh.",
    cta: "Xem Investment Deck",
    href: "/hop-tac",
  },
  {
    emoji: "🤝",
    title: "Đối tác chiến lược",
    description:
      "Brand, agency, nền tảng muốn tích hợp vào hệ sinh thái VEA hoặc co-develop sản phẩm phục vụ người Việt.",
    cta: "Đề xuất hợp tác",
    href: "/hop-tac",
  },
  {
    emoji: "🧑‍💻",
    title: "Tuyển dụng nhân tài",
    description:
      "Dev, designer, marketer, luật sư — join VEA và cùng xây dựng kỷ nguyên số Việt Nam từ những ngày đầu tiên.",
    cta: "Xem vị trí",
    href: "/tuyen-dung",
  },
] as const;

const FIELD =
  "w-full rounded-[7px] border border-line bg-sand-100 px-3.5 py-2.5 text-[13px] text-ink outline-none transition-colors placeholder:text-muted-lighter focus:border-brand focus:bg-white";
const LABEL = "text-[10px] font-semibold uppercase tracking-[0.3px] text-muted";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-sand-100 py-20 sm:py-24">
      <div className="container-px mx-auto max-w-[1100px]">
        {/* Tiêu đề — canh giữa */}
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">Hợp tác với VEA Group</span>
          <h2 className="mt-3 text-balance font-black leading-[1.1] tracking-tight text-ink text-[clamp(1.9rem,1.2rem+2.6vw,2.6rem)]">
            Cùng xây dựng
            <br />
            <span className="text-gradient italic">kỷ nguyên Việt Nam</span>
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            Chúng tôi tìm kiếm đối tác chiến lược, nhà đầu tư và chuyên gia muốn tham gia vào hành trình kiến tạo hệ sinh
            thái số hàng đầu Việt Nam.
          </p>
        </div>

        {/* 3 nhóm đối tượng */}
        <div className="mt-11 grid gap-3 md:grid-cols-3">
          {contactOptions.map((option) => (
            <div
              key={option.title}
              className="group flex flex-col rounded-[14px] border border-line bg-white p-[22px] shadow-soft transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lift"
            >
              <div className="text-[22px] leading-none" aria-hidden>
                {option.emoji}
              </div>
              <h3 className="mt-3 text-sm font-bold text-ink">{option.title}</h3>
              <p className="mt-1 flex-1 text-xs leading-[1.55] text-muted">{option.description}</p>
              <Link
                href={option.href}
                className="mt-4 inline-flex w-full items-center justify-center rounded-md border-[1.5px] border-line-strong px-3.5 py-2 text-xs font-semibold text-ink transition-colors group-hover:border-brand group-hover:text-brand"
              >
                {option.cta} →
              </Link>
            </div>
          ))}
        </div>

        {/* Form liên hệ trực tiếp */}
        <div className="mx-auto mt-11 max-w-[680px] rounded-2xl border border-line bg-white p-6 shadow-lift sm:p-[30px]">
          <h3 className="text-base font-bold text-ink">Liên hệ trực tiếp</h3>
          <p className="mt-1 text-[13px] text-muted">Phản hồi trong 24 giờ làm việc · hello@veagroup.global</p>

          {sent ? (
            <div className="mt-6 flex flex-col items-center gap-2 rounded-xl bg-emerald-50 px-4 py-8 text-center">
              <CheckCircle2 className="h-9 w-9 text-emerald-600" />
              <p className="text-sm font-bold text-ink">Đã ghi nhận (bản demo)</p>
              <p className="max-w-sm text-[13px] leading-relaxed text-muted">
                Backend chưa được kết nối nên dữ liệu chưa gửi đi. Đội ngũ VEA sẽ phản hồi trong 24 giờ làm việc.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-1 text-[13px] font-semibold text-brand"
              >
                Gửi thông tin khác
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-5 grid gap-2.5 sm:grid-cols-2">
              <label className="flex flex-col gap-1">
                <span className={LABEL}>Họ và tên</span>
                <input name="name" required placeholder="Nguyễn Văn A" className={FIELD} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={LABEL}>Email</span>
                <input name="email" type="email" required placeholder="contact@company.vn" className={FIELD} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={LABEL}>Công ty</span>
                <input name="company" placeholder="Tên doanh nghiệp" className={FIELD} />
              </label>
              <label className="flex flex-col gap-1">
                <span className={LABEL}>Hình thức hợp tác</span>
                <select name="type" required defaultValue="" className={cn(FIELD, "h-[38px]")}>
                  <option value="" disabled>
                    Chọn hình thức hợp tác
                  </option>
                  <option>Nhà đầu tư</option>
                  <option>Đối tác chiến lược</option>
                  <option>Brand Advertising</option>
                  <option>Tuyển dụng</option>
                  <option>Khác</option>
                </select>
              </label>
              <label className="flex flex-col gap-1 sm:col-span-2">
                <span className={LABEL}>Nội dung</span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Mô tả mục tiêu hợp tác hoặc câu hỏi của bạn..."
                  className={cn(FIELD, "min-h-[76px] resize-none")}
                />
              </label>
              <div className="sm:col-span-2">
                <Button type="submit" className="w-full">
                  Gửi thông tin → Phản hồi trong 24h
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
