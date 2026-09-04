import Link from "next/link";
import { featuredPlatforms } from "@/content/vea-demo";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const CARD =
  "rounded-[10px] border border-line bg-white p-4 text-left shadow-soft transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lift";

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="border-y border-line bg-sand-100 py-16">
      <Container>
        {/* Header: tiêu đề + nút "Xem tất cả" */}
        <div className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Hệ sinh thái số</span>
            <h2 className="mt-3 text-balance font-black leading-[1.15] tracking-tight text-ink text-[clamp(1.75rem,1.1rem+2.4vw,2.5rem)]">
              25 nền tảng — <span className="text-gradient italic">mỗi nhu cầu một giải pháp</span>
            </h2>
            <p className="mt-2 max-w-[540px] text-sm leading-relaxed text-muted">
              Từ tuyển dụng, pháp lý, thiện nguyện đến giải trí đêm và chăm sóc mẹ bé — 5 công ty thành viên vận hành 25 nền tảng.
            </p>
          </div>
          <Link
            href="/he-sinh-thai"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-line-strong px-5 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand md:self-auto"
          >
            Xem tất cả 25 nền tảng <span aria-hidden>→</span>
          </Link>
        </div>

        {/* 6 nền tảng nổi bật */}
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPlatforms.map((platform) => {
            const inner = (
              <>
                <div className="flex items-center gap-2.5">
                  <span className="text-[22px] leading-none" aria-hidden>
                    {platform.emoji}
                  </span>
                  <div className="min-w-0">
                    <div className="text-[13.5px] font-bold leading-tight text-ink">{platform.name}</div>
                    <div className="mt-0.5 break-all font-mono text-[9.5px] text-muted-light">{platform.domain}</div>
                  </div>
                  <span
                    className={cn(
                      "ml-auto shrink-0 rounded-md px-2 py-0.5 text-[9.5px] font-bold",
                      platform.status === "Live ✓" ? "bg-emerald-100 text-emerald-700" : "bg-brand/10 text-brand",
                    )}
                  >
                    {platform.status}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted">{platform.description}</p>
              </>
            );

            return platform.url ? (
              <a
                key={platform.domain}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(CARD, "block")}
                style={{ borderLeft: "3px solid #C8541A" }}
              >
                {inner}
              </a>
            ) : (
              <div key={platform.domain} className={cn(CARD, "cursor-default")}>
                {inner}
              </div>
            );
          })}
        </div>

        {/* Banner "+19 nền tảng khác" */}
        <Link
          href="/he-sinh-thai"
          className="mt-3.5 block rounded-[10px] border border-dashed border-brand/30 bg-brand/[0.04] p-4 text-center text-[13.5px] font-semibold text-brand transition-colors hover:bg-brand/[0.08]"
        >
          +19 nền tảng khác — DanhBaBacSi, NợThuế, DanhBaLuatSu.asia, BookingModel, TruyenMa, SanCrypto... → Xem toàn bộ hệ sinh thái
        </Link>
      </Container>
    </section>
  );
}
