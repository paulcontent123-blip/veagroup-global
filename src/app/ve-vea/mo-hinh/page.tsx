import type { ReactNode } from "react";
import { operatingPillars } from "@/content/about";
import { tx } from "@/lib/i18n/tx";
import { getLocale } from "@/lib/i18n/locale";
import { createPageMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";

export const metadata = createPageMetadata(
  "/ve-vea/mo-hinh",
  "Mô hình vận hành VEA",
  "Mô hình hệ sinh thái giúp VEA Group tối ưu chi phí và tối đa giá trị cho khách hàng, đối tác và các công ty thành viên.",
);

function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

/** Luồng synergy thực tế — bám đúng 5 dòng trong demo (page-mo-hinh). */
const operatingFlows: { emoji: string; vi: ReactNode; en: ReactNode }[] = [
  {
    emoji: "⚖️",
    vi: (
      <>
        <B>ViecLamCongNhan</B> → công nhân cần tư vấn pháp lý → <B>VEA Law</B> cung cấp dịch vụ
      </>
    ),
    en: (
      <>
        <B>ViecLamCongNhan</B> → workers need legal advice → <B>VEA Law</B> provides the service
      </>
    ),
  },
  {
    emoji: "🩺",
    vi: (
      <>
        <B>SuaEmbe</B> → mẹ bỉm tìm bác sĩ → <B>DanhBaBacSi</B> (VEA Tech) cung cấp dữ liệu
      </>
    ),
    en: (
      <>
        <B>SuaEmbe</B> → a mother looks for a doctor → <B>DanhBaBacSi</B> (VEA Tech) provides the data
      </>
    ),
  },
  {
    emoji: "🌟",
    vi: (
      <>
        <B>Nightlife</B> → venue cần influencer marketing → <B>BookingKOLs/VEA Media</B>
      </>
    ),
    en: (
      <>
        <B>Nightlife</B> → a venue needs influencer marketing → <B>BookingKOLs/VEA Media</B>
      </>
    ),
  },
  {
    emoji: "🙏",
    vi: (
      <>
        <B>ThienNguyen</B> → tổ chức cần PR → <B>VEA Media</B> quảng bá chiến dịch
      </>
    ),
    en: (
      <>
        <B>ThienNguyen</B> → an organization needs PR → <B>VEA Media</B> promotes the campaign
      </>
    ),
  },
  {
    emoji: "📜",
    vi: (
      <>
        <B>TranhChap.com.vn</B> → thu hút người dùng SEO → convert thành khách hàng <B>VEA Law</B>
      </>
    ),
    en: (
      <>
        <B>TranhChap.com.vn</B> → attract users through SEO → convert them into <B>VEA Law</B> clients
      </>
    ),
  },
];

export default async function OperatingModelPage() {
  const locale = await getLocale();

  return (
    <main>
      <SubHero
        eyebrow={locale === "en" ? "Operating model" : "Mô hình vận hành"}
        title={
          <>
            Tối ưu chi phí —<br />
          </>
        }
        highlight={locale === "en" ? "maximize value" : "Tối đa giá trị"}
        description={
          locale === "en"
            ? "VEA Group operates as an ecosystem — the capabilities of each member company overlap and support one another, partners and customers."
            : "VEA Group hoạt động theo mô hình hệ sinh thái — các ngành nghề của từng công ty thành viên đan xen, bổ trợ chéo cho nhau và cho đối tác, khách hàng hợp tác với VEA."
        }
        backHref="/ve-vea"
        backLabel={locale === "en" ? "About VEA Group" : "Về VEA Group"}
      />

      <Section>
        {/* 3 trụ cột */}
        <div className="grid gap-5 lg:grid-cols-3">
          {operatingPillars.map((pillar) => (
            <Card key={tx(pillar.title, locale)} className="rounded-[14px] p-7">
              <div className="text-[32px] leading-none" aria-hidden>
                {pillar.emoji}
              </div>
              <h3 className="mt-3.5 text-[17px] font-bold text-ink">{tx(pillar.title, locale)}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.75] text-muted">{tx(pillar.description, locale)}</p>
            </Card>
          ))}
        </div>

        {/* Luồng synergy thực tế */}
        <h2 className="mb-5 mt-12 text-xl font-bold text-ink">
          {locale === "en" ? "Real synergy flows" : "Luồng synergy thực tế"}
        </h2>
        <div className="flex flex-col gap-3 rounded-[14px] border border-brand/20 bg-brand/[0.06] p-4 sm:p-6">
          {operatingFlows.map((flow) => (
            <div
              key={flow.emoji}
              className="flex items-center gap-3.5 rounded-[10px] border border-line bg-white p-3"
            >
              <span className="shrink-0 text-base" aria-hidden>
                {flow.emoji}
              </span>
              <p className="text-[13.5px] leading-relaxed text-muted">{flow[locale]}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
