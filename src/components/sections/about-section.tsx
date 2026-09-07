"use client";

import { homeAboutStats, homeStoryBlocks, operatingPillars } from "@/content/vea-demo";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/components/i18n/locale-provider";
import { tx } from "@/lib/i18n/tx";

export function AboutSection() {
  const { locale } = useLocale();

  return (
    <>
      {/* ═══ VN STORY — Tại sao VEA Group ═══ */}
      <Section id="vn-story" tone="dark" bordered>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow={locale === "en" ? "Origin story" : "Câu chuyện khởi đầu"}
              title="Vietnam Era Group —"
              highlight={locale === "en" ? "Vietnam Era" : "Kỷ nguyên Việt Nam"}
            />
            <div className="mt-7 border-l-2 border-brand-400 pl-5">
              <p className="text-lg font-semibold leading-8 text-white/86">
                {locale === "en"
                  ? '"We started this journey not only for business — but to contribute something to the country."'
                  : "\"Chúng tôi bắt đầu hành trình này không chỉ vì kinh doanh — mà vì muốn góp một phần gì đó cho đất nước.\""}
              </p>
              <p className="mt-4 text-sm font-bold text-brand-400">
                {locale === "en" ? "— VEA Group founding vision, 2024" : "— Tầm nhìn sáng lập VEA Group, 2024"}
              </p>
            </div>
            <div className="mt-7 grid gap-4 text-sm leading-7 text-white/66">
              {locale === "en" ? (
                <>
                  <p>
                    VEA stands for <em>Vietnam Era</em>. The name is intentional. Vietnam is entering a
                    <strong className="text-white/90"> breakthrough era</strong> in its digital economy, and VEA Group is
                    built to be part of it.
                  </p>
                  <p>
                    From technology platforms serving millions to free education for young people without access,{" "}
                    <strong className="text-white/90">every decision we make aims at a stronger, smarter and fairer Vietnam.</strong>
                  </p>
                </>
              ) : (
                <>
                  <p>
                    VEA là viết tắt của <em>Vietnam Era</em> — Kỷ nguyên Việt Nam. Cái tên này không phải ngẫu nhiên. Chúng tôi
                    tin rằng Việt Nam đang đứng trước một <strong className="text-white/90">kỷ nguyên bứt phá</strong> trong lịch
                    sử phát triển kinh tế số — và VEA Group được xây dựng để trở thành một phần của kỷ nguyên đó.
                  </p>
                  <p>
                    Từ việc xây dựng các nền tảng công nghệ phục vụ hàng triệu người dân, đến đào tạo miễn phí cho thế hệ trẻ
                    chưa có điều kiện — <strong className="text-white/90">mỗi quyết định của chúng tôi đều hướng đến một Việt Nam
                    mạnh hơn, thông minh hơn và công bằng hơn.</strong>
                  </p>
                </>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 border border-white/10 bg-white/5 p-4">
              <span className="text-3xl" aria-hidden="true">🇻🇳</span>
              <div>
                <div className="text-xs font-black uppercase tracking-[0.16em] text-brand-400">Vietnam Era Group</div>
                <div className="mt-1 text-sm text-white/58">
                  {locale === "en" ? "Building a new era for Vietnam" : "Kiến tạo kỷ nguyên mới cho Việt Nam"}
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              {homeStoryBlocks.map((block) => (
                <article key={tx(block.title, locale)} className="flex gap-4 border-t border-white/10 pt-4">
                  <span className="text-2xl" aria-hidden="true">{block.emoji}</span>
                  <div>
                    <h3 className="font-bold text-white">{tx(block.title, locale)}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/58">{tx(block.description, locale)}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ ABOUT — Mô hình vận hành ═══ */}
      <Section id="about" tone="subtle" bordered>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Cột trái: about-text + pillars */}
          <div>
            <span className="eyebrow">{locale === "en" ? "Operating model" : "Mô hình vận hành"}</span>
            <h2 className="mt-3 text-balance font-black leading-[1.1] tracking-[-0.5px] text-ink text-[32px] sm:text-[36px] lg:text-[40px]">
              {locale === "en" ? "Optimize cost." : "Tối ưu chi phí."}
              <br />
              <span className="text-gradient">{locale === "en" ? "Maximize value." : "Tối đa giá trị."}</span>
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-[1.85] text-muted">
              {locale === "en" ? (
                <>
                  <p>
                    VEA Group operates as an ecosystem — <strong className="font-semibold text-ink">each member company's
                    capabilities overlap and support one another</strong>, creating value for VEA partners and customers.
                  </p>
                  <p>
                    This is not a disconnected portfolio. It is an <strong className="font-semibold text-ink">integrated engine</strong>:
                    a client coming to VEA Law can also access VEA Media's communications services and VEA Tech's platforms.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    VEA Group hoạt động theo mô hình hệ sinh thái —{" "}
                    <strong className="font-semibold text-ink">
                      các ngành nghề của từng công ty thành viên đan xen, bổ trợ chéo cho nhau
                    </strong>{" "}
                    và cũng chính cho đối tác, khách hàng hợp tác với VEA.
                  </p>
                  <p>
                    Không phải portfolio rời rạc. Mà là một{" "}
                    <strong className="font-semibold text-ink">engine tổng hợp</strong>: khi một khách hàng đến với VEA Law cần
                    tư vấn pháp lý, họ cũng được tiếp cận dịch vụ truyền thông của VEA Media và nền tảng công nghệ của VEA Tech.
                  </p>
                </>
              )}
            </div>

            <div className="mt-7 flex flex-col gap-3">
              {operatingPillars.map((pillar) => (
                <div
                  key={tx(pillar.title, locale)}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-soft transition-colors hover:border-brand/30"
                >
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-brand/20 bg-brand/10 text-base"
                    aria-hidden="true"
                  >
                    {pillar.emoji}
                  </span>
                  <div>
                    <div className="text-[13.5px] font-bold text-ink">{tx(pillar.title, locale)}</div>
                    <p className="mt-0.5 text-xs leading-[1.55] text-muted">{tx(pillar.description, locale)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cột phải: sv-grid (4 ô số liệu + quote-card span 2) */}
          <div className="grid grid-cols-2 gap-3">
            {homeAboutStats.map(([value, label]) => (
              <div
                key={tx(label, locale)}
                className="relative overflow-hidden rounded-xl border border-line bg-white p-5 shadow-soft"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-[linear-gradient(90deg,#C8541A,transparent)]" />
                <div className="text-gradient text-[34px] font-black leading-none">{value}</div>
                <p className="mt-1 text-[11.5px] leading-[1.5] text-muted">{tx(label, locale)}</p>
              </div>
            ))}
            <div className="col-span-2 rounded-xl border border-brand/20 bg-brand/[0.06] p-[18px]">
              <p className="text-base font-bold text-brand">
                {locale === "en" ? '"Optimize cost · Maximize returns"' : '"Tối ưu chi phí · Tối đa lợi nhuận"'}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {locale === "en"
                  ? "VEA Group's operating philosophy — every decision is measured by the whole ecosystem's outcome"
                  : "Triết lý vận hành của VEA Group — mỗi quyết định đo bằng hiệu quả tổng thể của cả hệ sinh thái"}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
