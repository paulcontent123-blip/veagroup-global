import { ArrowRight, Link2 } from "lucide-react";
import { operatingPillars } from "@/content/about";
import { tx } from "@/lib/i18n/tx";
import { createPageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SubHero } from "@/components/layout/sub-hero";

export const metadata = createPageMetadata(
  "/ve-vea/mo-hinh",
  "Mô hình vận hành VEA",
  "Mô hình hệ sinh thái giúp VEA Group tối ưu chi phí và tối đa giá trị cho khách hàng, đối tác và các công ty thành viên.",
);

const operatingFlows = [
  ["⚖️", "ViecLamCongNhan → công nhân cần tư vấn pháp lý → VEA Law cung cấp dịch vụ"],
  ["🩺", "SuaEmbe → mẹ bỉm tìm bác sĩ → DanhBaBacSi (VEA Tech) cung cấp dữ liệu"],
  ["🌟", "Nightlife → venue cần influencer marketing → BookingKOLs/VEA Media"],
  ["🙏", "ThienNguyen → tổ chức cần PR → VEA Media quảng bá chiến dịch"],
  ["📜", "TranhChap.com.vn → thu hút người dùng SEO → convert thành khách hàng VEA Law"],
] as const;

export default function OperatingModelPage() {
  return (
    <main>
      <SubHero
        eyebrow="Mô hình vận hành"
        title="Tối ưu chi phí —"
        highlight="Tối đa giá trị"
        description="VEA Group hoạt động theo mô hình hệ sinh thái — các ngành nghề của từng công ty thành viên đan xen, bổ trợ chéo cho nhau và cho đối tác, khách hàng hợp tác với VEA."
        backHref="/ve-vea"
        backLabel="Về VEA Group"
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {operatingPillars.map((pillar) => (
            <Card key={tx(pillar.title, "vi")} className="p-6">
              <span className="text-3xl" aria-hidden="true">{pillar.emoji}</span>
              <h2 className="mt-5 text-xl font-black text-ink">{tx(pillar.title, "vi")}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{tx(pillar.description, "vi")}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section id="flows" tone="subtle" bordered>
        <SectionHeading eyebrow="Luồng synergy thực tế" title="Luồng synergy thực tế" />
        <div className="mt-8 grid gap-3">
          {operatingFlows.map(([emoji, text]) => (
            <Card key={text} className="flex items-start gap-4 p-4 sm:items-center">
              <span className="text-xl" aria-hidden="true">{emoji}</span>
              <p className="text-sm leading-7 text-muted">{text}</p>
              <Link2 className="ml-auto hidden h-4 w-4 shrink-0 text-brand sm:block" />
            </Card>
          ))}
        </div>
        <a href="/he-sinh-thai#synergy" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-700">
          Xem toàn bộ hệ sinh thái <ArrowRight className="h-4 w-4" />
        </a>
      </Section>
    </main>
  );
}
