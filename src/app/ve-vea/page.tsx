import Link from "next/link";
import { ArrowRight, BookOpen, Building2, Compass, Workflow } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
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
    icon: BookOpen,
    title: "Câu chuyện VEA",
    description: "VEA là viết tắt của Vietnam Era — Kỷ nguyên Việt Nam. Câu chuyện khởi đầu từ tình yêu và khát vọng cống hiến cho đất nước.",
    cta: "Đọc câu chuyện",
  },
  {
    href: "/ve-vea/cong-ty",
    icon: Building2,
    title: "5 Công ty thành viên",
    description: "VEA Media · VEA Tech · VEA Law · VEA Retail · VEA Academy — 5 mảng kinh doanh được thiết kế để bổ trợ lẫn nhau.",
    cta: "Xem chi tiết",
  },
  {
    href: "/ve-vea/mo-hinh",
    icon: Workflow,
    title: "Mô hình vận hành",
    description: "Hệ sinh thái — không phải portfolio rời rạc. Các công ty đan xen, bổ trợ chéo để tối ưu chi phí và tối đa giá trị.",
    cta: "Tìm hiểu mô hình",
  },
  {
    href: "/ve-vea/tam-nhin",
    icon: Compass,
    title: "Tầm nhìn & Sứ mệnh",
    description: "Xây dựng hạ tầng số cho người Việt — từ y tế, pháp lý, giáo dục đến giải trí. Sứ mệnh dài hạn vượt ra ngoài lợi nhuận.",
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
          {overviewCards.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="group">
                <Card interactive className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand"><Icon className="h-5 w-5" /></span>
                    <ArrowRight className="h-5 w-5 text-muted-light transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-ink">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">{item.description}</p>
                  <span className="mt-4 text-sm font-bold text-brand">{item.cta} →</span>
                </Card>
              </Link>
            );
          })}
        </div>
      </Section>

    </main>
  );
}
