"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { jobDepartments, jobs } from "@/content/jobs";
import type { Job, Locale } from "@/lib/types";
import { tx } from "@/lib/i18n/tx";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useJobDetail } from "@/components/careers/job-detail-modal";
import { useLocale } from "@/components/i18n/locale-provider";
import { getMessages } from "@/lib/i18n/messages";

/** Emoji theo từng vị trí (bám .job-ico của demo). */
const JOB_EMOJI: Record<string, string> = {
  "fullstack-developer-nextjs": "⚙️",
  "ui-ux-designer": "🎨",
  "seo-content-strategist": "📊",
  "influencer-marketing-manager": "📡",
  "luat-su-tranh-tung": "⚖️",
  "giang-vien-tieng-anh-phap-ly": "🎓",
};

export function CareersDirectory() {
  const [department, setDepartment] = useState("all");
  const { locale } = useLocale();
  const messages = getMessages(locale);
  const visibleJobs = useMemo(
    () => (department === "all" ? jobs : jobs.filter((job) => job.department === department)),
    [department],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label={locale === "en" ? "Filter open roles" : "Lọc vị trí tuyển dụng"}>
        <Chip active={department === "all"} onClick={() => setDepartment("all")}>
          {messages.filters.all} ({jobs.length})
        </Chip>
        {jobDepartments.map((item) => (
          <Chip key={item.key} active={department === item.key} onClick={() => setDepartment(item.key)}>
            {item.label}
          </Chip>
        ))}
      </div>

      {visibleJobs.length === 0 ? (
        <p className="text-sm text-muted">
          {locale === "en"
            ? "There are no roles in this group yet. Send your CV and we will contact you when a position opens."
            : "Chưa có vị trí ở nhóm này. Gửi CV để chúng tôi liên hệ khi có nhu cầu."}
        </p>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {visibleJobs.map((job) => (
            <JobCard key={job.slug} job={job} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "whitespace-nowrap rounded-full border-[1.5px] px-3.5 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-ink bg-ink text-white"
          : "border-line-strong bg-transparent text-muted hover:border-ink hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

function JobCard({ job, locale }: { job: Job; locale: Locale }) {
  const open = job.status === "open";
  const { open: openJobDetail } = useJobDetail();
  return (
    <button type="button" onClick={() => openJobDetail(job.slug)} className="group block w-full text-left">
      <Card
        className="flex h-full items-center gap-3.5 rounded-xl p-[18px] transition-[transform,border-color,box-shadow] duration-200 group-hover:-translate-y-0.5 group-hover:border-brand/30 group-hover:shadow-lift sm:px-5"
      >
        <span
          className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[9px] border border-brand/20 bg-brand/10 text-lg"
          aria-hidden
        >
          {JOB_EMOJI[job.slug] ?? "💼"}
        </span>

        <div className="min-w-0 flex-1">
          <div className="text-[13.5px] font-bold text-ink">{tx(job.title, locale)}</div>
          <div className="mt-0.5 flex flex-wrap gap-x-2 gap-y-0.5 text-[11px] text-muted">
            <span>{job.company}</span>
            <span>{tx(job.location, locale)}</span>
            <span>{tx(job.level, locale)}</span>
          </div>
        </div>

        <span
          className={cn(
            "shrink-0 rounded border px-1.5 py-0.5 text-[9.5px] font-bold",
            open
              ? "border-brand/20 bg-brand/10 text-brand"
              : "border-amber-500/20 bg-amber-500/10 text-amber-700",
          )}
        >
          {open ? (locale === "en" ? "Open" : "Đang tuyển") : locale === "en" ? "Opening soon" : "Sắp mở"}
        </span>
        <span
          aria-hidden
          className="shrink-0 text-base text-muted-light transition-transform group-hover:translate-x-1 group-hover:text-brand"
        >
          →
        </span>
      </Card>
    </button>
  );
}
