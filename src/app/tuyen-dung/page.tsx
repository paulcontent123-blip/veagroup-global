import { jobs } from "@/content/jobs";
import { createPageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";
import { CareersDirectory } from "@/components/pages/careers-directory";

export const metadata = createPageMetadata(
  "/tuyen-dung",
  "Tuyển dụng tại VEA",
  "Các vị trí đang tuyển tại VEA Media, VEA Tech, VEA Law và VEA Academy.",
);

const stats = [
  { value: String(jobs.length), label: "Vị trí đang mở" },
  { value: "5", label: "Công ty thành viên" },
  { value: "Remote", label: "Chính sách làm việc linh hoạt" },
];

export default function CareersPage() {
  return (
    <main>
      <SubHero
        eyebrow="Tuyển dụng"
        title="Gia nhập"
        highlight="VEA Group"
        description="Bạn muốn build từ đầu, tạo impact thực sự và góp phần xây dựng kỷ nguyên số Việt Nam? Đây là nơi dành cho bạn."
        backLabel="Quay về trang chủ"
      />

      {/* Số liệu */}
      <Section tone="subtle" bordered>
        <div className="flex flex-wrap gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-[200px] flex-1 rounded-xl border border-line bg-white p-5 shadow-soft"
            >
              <div className="text-gradient text-[28px] font-black leading-none">{stat.value}</div>
              <div className="mt-1 text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Danh sách vị trí */}
      <Section id="open-roles">
        <CareersDirectory />

        <div className="mt-8 rounded-xl border border-dashed border-line-strong bg-sand-100 p-6 text-center">
          <p className="text-sm font-bold text-ink">Không tìm thấy vị trí phù hợp?</p>
          <p className="mt-1.5 text-[13px] text-muted">
            Gửi CV của bạn — chúng tôi sẽ liên hệ khi có vị trí phù hợp.
          </p>
          <Button href="/#contact" size="sm" className="mt-3.5">
            Gửi CV ngay →
          </Button>
        </div>
      </Section>
    </main>
  );
}
