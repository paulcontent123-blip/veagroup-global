import { ArrowRight, BriefcaseBusiness, Mail, Users } from "lucide-react";
import { jobs } from "@/content/jobs";
import { createPageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { SubHero } from "@/components/layout/sub-hero";
import { CareersDirectory } from "@/components/pages/careers-directory";

export const metadata = createPageMetadata(
  "/tuyen-dung",
  "Tuyển dụng tại VEA",
  "Các vị trí đang tuyển tại VEA Media, VEA Tech, VEA Law và VEA Academy.",
);

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
      <Section tone="subtle" bordered>
        <div className="grid gap-4 sm:grid-cols-3">
          <Metric icon={BriefcaseBusiness} value={String(jobs.length)} label="Vị trí đang mở" />
          <Metric icon={Users} value="5" label="Công ty thành viên" />
          <Metric icon={Mail} value="Remote" label="Chính sách làm việc linh hoạt" />
        </div>
      </Section>
      <Section id="open-roles">
        <CareersDirectory />
        <Card className="mt-10 flex flex-col gap-5 bg-ink p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
          <h2 className="text-xl font-black">Không tìm thấy vị trí phù hợp?</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/62">Gửi CV của bạn — chúng tôi sẽ liên hệ khi có vị trí phù hợp.</p>
          </div>
          <Button href="/#contact" variant="outline" className="shrink-0 border-brand/40 bg-transparent text-brand-400 hover:bg-brand hover:text-white">Gửi CV ngay <ArrowRight className="h-4 w-4" /></Button>
        </Card>
      </Section>
    </main>
  );
}

function Metric({ icon: Icon, value, label }: { icon: typeof BriefcaseBusiness; value: string; label: string }) {
  return (
    <div className="flex items-center gap-4 border-l-2 border-brand pl-5">
      <Icon className="h-5 w-5 text-brand" />
      <div><div className="text-3xl font-black text-ink">{value}</div><p className="mt-1 text-sm font-semibold text-muted">{label}</p></div>
    </div>
  );
}
