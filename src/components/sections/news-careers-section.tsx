import { ArrowRight, BriefcaseBusiness, CalendarDays } from "lucide-react";
import { jobs, news } from "@/content/vea-demo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function NewsCareersSection() {
  return (
    <>
      {/* ═══ NEWS PREVIEW ═══ */}
      <section id="news" className="border-t border-line bg-white py-[72px]">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Tin tức &amp; Cập nhật</span>
              <h2 className="mt-3 font-black leading-[1.15] tracking-tight text-ink text-[clamp(1.5rem,1.1rem+1.6vw,2rem)]">
                Mới nhất từ <span className="text-gradient italic">VEA Group</span>
              </h2>
            </div>
            <Button href="/tin-tuc" variant="outline" size="sm">
              Xem tất cả tin tức <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <Card key={item.title} as="article" interactive className="overflow-hidden">
                <div className={`h-40 bg-gradient-to-br ${item.gradient}`} />
                <div className="p-[18px]">
                  <div className="flex items-center justify-between gap-3">
                    <Badge tone="brand">{item.tag}</Badge>
                    <span className="inline-flex items-center gap-1 text-[11px] text-muted">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[15px] font-bold leading-[1.3] text-ink">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{item.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                    Đọc thêm <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <Section id="careers" tone="subtle" bordered>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Tuyển dụng"
            title="VEA Group tìm kiếm"
            highlight="nhân tài đồng hành"
          >
            <div className="mt-4">
              <Button href="/tuyen-dung">
                Xem tất cả vị trí <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </SectionHeading>
          <div className="grid gap-3">
            {jobs.map((job) => (
              <Card key={job.title} interactive className="p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-white text-brand shadow-soft">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-black text-ink">{job.title}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {job.team} · {job.location} · {job.level}
                      </p>
                    </div>
                  </div>
                  <Badge tone={job.status === "open" ? "success" : "warning"}>
                    {job.status === "open" ? "Đang tuyển" : "Sắp mở"}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
