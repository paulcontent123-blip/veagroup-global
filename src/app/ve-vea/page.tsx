import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";

export const metadata = createPageMetadata(
  "/ve-vea",
  "Về VEA",
  "Tìm hiểu VEA Group, câu chuyện hình thành, năm công ty thành viên, mô hình vận hành và tầm nhìn dài hạn.",
);

const overviewCards = [
  {
    href: "/ve-vea/cau-chuyen",
    emoji: "🇻🇳",
    title: "Câu chuyện VEA",
    description:
      "VEA là viết tắt của Vietnam Era — Kỷ nguyên Việt Nam. Câu chuyện khởi đầu từ tình yêu và khát vọng cống hiến cho đất nước.",
    cta: "Đọc câu chuyện",
  },
  {
    href: "/ve-vea/cong-ty",
    emoji: "🏢",
    title: "5 Công ty thành viên",
    description:
      "VEA Media · VEA Tech · VEA Law · VEA Retail · VEA Academy — 5 mảng kinh doanh được thiết kế để bổ trợ lẫn nhau.",
    cta: "Xem chi tiết",
  },
  {
    href: "/ve-vea/mo-hinh",
    emoji: "📐",
    title: "Mô hình vận hành",
    description:
      "Hệ sinh thái — không phải portfolio rời rạc. Các công ty đan xen, bổ trợ chéo để tối ưu chi phí và tối đa giá trị.",
    cta: "Tìm hiểu mô hình",
  },
  {
    href: "/ve-vea/tam-nhin",
    emoji: "🔭",
    title: "Tầm nhìn & Sứ mệnh",
    description:
      "Xây dựng hạ tầng số cho người Việt — từ y tế, pháp lý, giáo dục đến giải trí. Sứ mệnh dài hạn vượt ra ngoài lợi nhuận.",
    cta: "Xem tầm nhìn",
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      <SubHero
        eyebrow="Vietnam Era Group"
        title="Về"
        highlight="VEA Group"
        description="Vietnam Era Group — Kỷ nguyên Việt Nam. Hệ sinh thái 5 công ty, 25 nền tảng số và tầm nhìn dài hạn xây dựng hạ tầng số cho người Việt."
        backLabel="Quay về trang chủ"
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {overviewCards.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block rounded-[14px] border border-line bg-white p-8 shadow-soft transition-[transform,border-color] duration-200 hover:-translate-y-[3px] hover:border-brand"
            >
              <div className="text-4xl" aria-hidden>
                {item.emoji}
              </div>
              <h3 className="mt-3.5 text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted">{item.description}</p>
              <span className="mt-4 inline-block text-[13px] font-bold text-brand">{item.cta} →</span>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
