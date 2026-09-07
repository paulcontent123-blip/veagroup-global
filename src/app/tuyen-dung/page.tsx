import { jobs } from "@/content/jobs";
import { createPageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";
import { CareersDirectory } from "@/components/pages/careers-directory";
import { getLocale } from "@/lib/i18n/locale";

export const metadata = createPageMetadata(
  "/tuyen-dung",
  "Tuyển dụng tại VEA",
  "Các vị trí đang tuyển tại VEA Media, VEA Tech, VEA Law và VEA Academy.",
);

const stats = [
  { value: String(jobs.length), label: { vi: "Vị trí đang mở", en: "Open roles" } },
  { value: "5", label: { vi: "Công ty thành viên", en: "Member companies" } },
  { value: "Remote", label: { vi: "Chính sách làm việc linh hoạt", en: "Flexible work policy" } },
];

export default async function CareersPage() {
  const locale = await getLocale();

  return (
    <main>
      <SubHero
        eyebrow={locale === "en" ? "Careers" : "Tuyển dụng"}
        title={locale === "en" ? "Join" : "Gia nhập"}
        highlight="VEA Group"
        description={
          locale === "en"
            ? "Want to build from scratch, create real impact and help shape Vietnam's digital era? This is the place for you."
            : "Bạn muốn build từ đầu, tạo impact thực sự và góp phần xây dựng kỷ nguyên số Việt Nam? Đây là nơi dành cho bạn."
        }
        backLabel={locale === "en" ? "Back to home" : "Quay về trang chủ"}
      />

      {/* Số liệu */}
      <Section tone="subtle" bordered>
        <div className="flex flex-wrap gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="min-w-[200px] flex-1 rounded-xl border border-line bg-white p-5 shadow-soft"
            >
              <div className="text-gradient text-[28px] font-black leading-none">{stat.value}</div>
              <div className="mt-1 text-xs text-muted">{stat.label[locale]}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Danh sách vị trí */}
      <Section id="open-roles">
        <CareersDirectory />

        <div className="mt-8 rounded-xl border border-dashed border-line-strong bg-sand-100 p-6 text-center">
          <p className="text-sm font-bold text-ink">
            {locale === "en" ? "Can't find the right role?" : "Không tìm thấy vị trí phù hợp?"}
          </p>
          <p className="mt-1.5 text-[13px] text-muted">
            {locale === "en"
              ? "Send us your CV and we will contact you when a suitable role opens."
              : "Gửi CV của bạn — chúng tôi sẽ liên hệ khi có vị trí phù hợp."}
          </p>
          <Button href="/#contact" size="sm" className="mt-3.5">
            {locale === "en" ? "Send CV now →" : "Gửi CV ngay →"}
          </Button>
        </div>
      </Section>
    </main>
  );
}
