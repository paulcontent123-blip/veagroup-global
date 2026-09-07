import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";
import { getLocale } from "@/lib/i18n/locale";
import { tx } from "@/lib/i18n/tx";

export const metadata = createPageMetadata(
  "/ve-vea",
  "Về VEA",
  "Tìm hiểu VEA Group, câu chuyện hình thành, năm công ty thành viên, mô hình vận hành và tầm nhìn dài hạn.",
);

const overviewCards = [
  {
    href: "/ve-vea/cau-chuyen",
    emoji: "🇻🇳",
    title: { vi: "Câu chuyện VEA", en: "The VEA Story" },
    description: {
      vi: "VEA là viết tắt của Vietnam Era — Kỷ nguyên Việt Nam. Câu chuyện khởi đầu từ tình yêu và khát vọng cống hiến cho đất nước.",
      en: "VEA stands for Vietnam Era. The story starts with love for Vietnam and a desire to contribute to the country.",
    },
    cta: { vi: "Đọc câu chuyện", en: "Read the story" },
  },
  {
    href: "/ve-vea/cong-ty",
    emoji: "🏢",
    title: { vi: "5 Công ty thành viên", en: "5 Member Companies" },
    description: {
      vi: "VEA Media · VEA Tech · VEA Law · VEA Retail · VEA Academy — 5 mảng kinh doanh được thiết kế để bổ trợ lẫn nhau.",
      en: "VEA Media · VEA Tech · VEA Law · VEA Retail · VEA Academy — five business lines designed to support one another.",
    },
    cta: { vi: "Xem chi tiết", en: "View details" },
  },
  {
    href: "/ve-vea/mo-hinh",
    emoji: "📐",
    title: { vi: "Mô hình vận hành", en: "Operating Model" },
    description: {
      vi: "Hệ sinh thái — không phải portfolio rời rạc. Các công ty đan xen, bổ trợ chéo để tối ưu chi phí và tối đa giá trị.",
      en: "An ecosystem, not a disconnected portfolio. The companies overlap and support one another to optimize cost and maximize value.",
    },
    cta: { vi: "Tìm hiểu mô hình", en: "Learn about the model" },
  },
  {
    href: "/ve-vea/tam-nhin",
    emoji: "🔭",
    title: { vi: "Tầm nhìn & Sứ mệnh", en: "Vision & Mission" },
    description: {
      vi: "Xây dựng hạ tầng số cho người Việt — từ y tế, pháp lý, giáo dục đến giải trí. Sứ mệnh dài hạn vượt ra ngoài lợi nhuận.",
      en: "Build digital infrastructure for Vietnamese people — from health and legal services to education and entertainment. A mission beyond profit.",
    },
    cta: { vi: "Xem tầm nhìn", en: "View the vision" },
  },
] as const;

export default async function AboutPage() {
  const locale = await getLocale();

  return (
    <main>
      <SubHero
        eyebrow="Vietnam Era Group"
        title={locale === "en" ? "About" : "Về"}
        highlight="VEA Group"
        description={
          locale === "en"
            ? "Vietnam Era Group — a five-company, 25-platform ecosystem with a long-term vision to build digital infrastructure for Vietnamese people."
            : "Vietnam Era Group — Kỷ nguyên Việt Nam. Hệ sinh thái 5 công ty, 25 nền tảng số và tầm nhìn dài hạn xây dựng hạ tầng số cho người Việt."
        }
        backLabel={locale === "en" ? "Back to home" : "Quay về trang chủ"}
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
              <h3 className="mt-3.5 text-xl font-bold text-ink">{tx(item.title, locale)}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted">{tx(item.description, locale)}</p>
              <span className="mt-4 inline-block text-[13px] font-bold text-brand">{tx(item.cta, locale)} →</span>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
