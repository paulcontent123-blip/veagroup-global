import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MapPin } from "lucide-react";
import { getJob, jobs } from "@/content/jobs";
import type { Localized } from "@/lib/types";
import { tx } from "@/lib/i18n/tx";
import { getLocale } from "@/lib/i18n/locale";
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
  const locale = await getLocale();
  return createPageMetadata(`/tuyen-dung/${job.slug}`, `${tx(job.title, locale)} · ${job.company}`, tx(job.summary, locale));
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();
  const locale = await getLocale();

  return (
    <main>
      <SubHero
        eyebrow={`${locale === "en" ? "Careers" : "Tuyển dụng"} · ${job.company}`}
        title={tx(job.title, locale)}
        highlight={job.status === "open" ? (locale === "en" ? "Open" : "Đang tuyển") : (locale === "en" ? "Opening soon" : "Sắp mở")}
        description={tx(job.summary, locale)}
        backHref="/tuyen-dung"
        backLabel={locale === "en" ? "Back to careers" : "Về danh sách tuyển dụng"}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <Card className="p-6 lg:sticky lg:top-24">
            <StatusBadge status={job.status} locale={locale} />
            <div className="mt-6 grid gap-4 border-t border-line pt-5 text-sm">
              <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-light">{locale === "en" ? "Company" : "Công ty"}</p><p className="mt-1 font-bold text-ink">{job.company}</p></div>
              <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-light">{locale === "en" ? "Location" : "Địa điểm"}</p><p className="mt-1 inline-flex items-center gap-1.5 font-bold text-ink"><MapPin className="h-4 w-4 text-brand" />{tx(job.location, locale)}</p></div>
              <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-light">{locale === "en" ? "Level" : "Cấp độ"}</p><p className="mt-1 font-bold text-ink">{tx(job.level, locale)}</p></div>
            </div>
            <Button href="/#contact" className="mt-7 w-full">{locale === "en" ? "Apply for this role" : "Ứng tuyển vị trí này"}</Button>
          </Card>
          <article className="grid gap-10">
            <section>
              <h2 className="text-2xl font-black text-ink">{locale === "en" ? "Role overview" : "Mô tả vị trí"}</h2>
              <p className="mt-5 text-sm leading-7 text-muted">{tx(job.summary, locale)}</p>
            </section>
            <JobList title={locale === "en" ? "Requirements" : "Yêu cầu"} items={job.requirements} locale={locale} />
            <JobList title={locale === "en" ? "Benefits" : "Quyền lợi"} items={job.benefits} locale={locale} />
            <Button href="/tuyen-dung" variant="secondary" className="w-fit"><ArrowLeft className="h-4 w-4" />{locale === "en" ? "Back to roles" : "Về danh sách vị trí"}</Button>
          </article>
        </div>
      </Section>
    </main>
  );
}

function JobList({ title, items, locale }: { title: string; items: Localized[]; locale: "vi" | "en" }) {
  return (
    <section>
      <h2 className="text-2xl font-black text-ink">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => <li key={tx(item, locale)} className="flex gap-3 text-sm leading-7 text-muted"><Check className="mt-1.5 h-4 w-4 shrink-0 text-brand" />{tx(item, locale)}</li>)}
      </ul>
    </section>
  );
}
