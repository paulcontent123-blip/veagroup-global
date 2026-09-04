import { homeAboutStats, homeStoryBlocks, operatingPillars } from "@/content/vea-demo";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <>
      {/* ═══ VN STORY — Tại sao VEA Group ═══ */}
      <Section id="vn-story" tone="dark" bordered>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Câu chuyện khởi đầu"
              title="Vietnam Era Group —"
              highlight="Kỷ nguyên Việt Nam"
            />
            <div className="mt-7 border-l-2 border-brand-400 pl-5">
              <p className="text-lg font-semibold leading-8 text-white/86">
                &quot;Chúng tôi bắt đầu hành trình này không chỉ vì kinh doanh — mà vì muốn góp một phần gì đó cho đất nước.&quot;
              </p>
              <p className="mt-4 text-sm font-bold text-brand-400">— Tầm nhìn sáng lập VEA Group, 2024</p>
            </div>
            <div className="mt-7 grid gap-4 text-sm leading-7 text-white/66">
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
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 border border-white/10 bg-white/5 p-4">
              <span className="text-3xl" aria-hidden="true">🇻🇳</span>
              <div>
                <div className="text-xs font-black uppercase tracking-[0.16em] text-brand-400">Vietnam Era Group</div>
                <div className="mt-1 text-sm text-white/58">Kiến tạo kỷ nguyên mới cho Việt Nam</div>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              {homeStoryBlocks.map((block) => (
                <article key={block.title} className="flex gap-4 border-t border-white/10 pt-4">
                  <span className="text-2xl" aria-hidden="true">{block.emoji}</span>
                  <div>
                    <h3 className="font-bold text-white">{block.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/58">{block.description}</p>
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
            <span className="eyebrow">Mô hình vận hành</span>
            <h2 className="mt-3 text-balance font-black leading-[1.1] tracking-tight text-ink text-[clamp(1.9rem,1.2rem+2.6vw,2.6rem)]">
              Tối ưu chi phí.
              <br />
              <span className="text-gradient">Tối đa giá trị.</span>
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-[1.85] text-muted">
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
            </div>

            <div className="mt-7 flex flex-col gap-3">
              {operatingPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-soft transition-colors hover:border-brand/30"
                >
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-brand/20 bg-brand/10 text-base"
                    aria-hidden="true"
                  >
                    {pillar.emoji}
                  </span>
                  <div>
                    <div className="text-[13.5px] font-bold text-ink">{pillar.title}</div>
                    <p className="mt-0.5 text-xs leading-[1.55] text-muted">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cột phải: sv-grid (4 ô số liệu + quote-card span 2) */}
          <div className="grid grid-cols-2 gap-3">
            {homeAboutStats.map(([value, label]) => (
              <div
                key={label}
                className="relative overflow-hidden rounded-xl border border-line bg-white p-5 shadow-soft"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-[linear-gradient(90deg,#C8541A,transparent)]" />
                <div className="text-gradient text-[34px] font-black leading-none">{value}</div>
                <p className="mt-1 text-[11.5px] leading-[1.5] text-muted">{label}</p>
              </div>
            ))}
            <div className="col-span-2 rounded-xl border border-brand/20 bg-brand/[0.06] p-[18px]">
              <p className="text-base font-bold text-brand">&quot;Tối ưu chi phí · Tối đa lợi nhuận&quot;</p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                Triết lý vận hành của VEA Group — mỗi quyết định đo bằng hiệu quả tổng thể của cả hệ sinh thái
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
