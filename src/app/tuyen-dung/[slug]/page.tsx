import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MapPin } from "lucide-react";
import { getJob, jobs } from "@/content/jobs";
import type { Localized } from "@/lib/types";
import { tx } from "@/lib/i18n/tx";
import { createPageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/status-badge";
import { SubHero } from "@/components/layout/sub-hero";

type JobPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return {};
  return createPageMetadata(`/tuyen-dung/${job.slug}`, `${tx(job.title, "vi")} · ${job.company}`, tx(job.summary, "vi"));
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  return (
    <main>
      <SubHero
        eyebrow={`Tuyển dụng · ${job.company}`}
        title={tx(job.title, "vi")}
        highlight={job.status === "open" ? "Đang tuyển" : "Sắp mở"}
        description={tx(job.summary, "vi")}
        backHref="/tuyen-dung"
        backLabel="Về danh sách tuyển dụng"
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <Card className="p-6 lg:sticky lg:top-24">
            <StatusBadge status={job.status} locale="vi" />
            <div className="mt-6 grid gap-4 border-t border-line pt-5 text-sm">
              <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-light">Công ty</p><p className="mt-1 font-bold text-ink">{job.company}</p></div>
              <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-light">Địa điểm</p><p className="mt-1 inline-flex items-center gap-1.5 font-bold text-ink"><MapPin className="h-4 w-4 text-brand" />{tx(job.location, "vi")}</p></div>
              <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-light">Cấp độ</p><p className="mt-1 font-bold text-ink">{tx(job.level, "vi")}</p></div>
            </div>
            <Button href="/#contact" className="mt-7 w-full">Ứng tuyển vị trí này</Button>
          </Card>
          <article className="grid gap-10">
            <section>
              <h2 className="text-2xl font-black text-ink">Mô tả vị trí</h2>
              <p className="mt-5 text-sm leading-7 text-muted">{tx(job.summary, "vi")}</p>
            </section>
            <JobList title="Yêu cầu" items={job.requirements} />
            <JobList title="Quyền lợi" items={job.benefits} />
            <Button href="/tuyen-dung" variant="secondary" className="w-fit"><ArrowLeft className="h-4 w-4" />Về danh sách vị trí</Button>
          </article>
        </div>
      </Section>
    </main>
  );
}

function JobList({ title, items }: { title: string; items: Localized[] }) {
  return (
    <section>
      <h2 className="text-2xl font-black text-ink">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => <li key={tx(item, "vi")} className="flex gap-3 text-sm leading-7 text-muted"><Check className="mt-1.5 h-4 w-4 shrink-0 text-brand" />{tx(item, "vi")}</li>)}
      </ul>
    </section>
  );
}
