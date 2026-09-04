"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, MapPin } from "lucide-react";
import { jobDepartments, jobs } from "@/content/jobs";
import type { Job } from "@/lib/types";
import { tx } from "@/lib/i18n/tx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { cn } from "@/lib/utils";

export function CareersDirectory() {
  const [department, setDepartment] = useState("all");
  const visibleJobs = useMemo(
    () => (department === "all" ? jobs : jobs.filter((job) => job.department === department)),
    [department],
  );

  return (
    <div>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Lọc vị trí tuyển dụng">
        <FilterButton active={department === "all"} onClick={() => setDepartment("all")}>
          Tất cả ({jobs.length})
        </FilterButton>
        {jobDepartments.map((item) => (
          <FilterButton key={item.key} active={department === item.key} onClick={() => setDepartment(item.key)}>
            {item.label}
          </FilterButton>
        ))}
      </div>
      <div className="mt-6 grid gap-3">
        {visibleJobs.map((job) => (
          <JobCard key={job.slug} job={job} />
        ))}
      </div>
      {visibleJobs.length === 0 ? (
        <Card className="mt-6 p-8 text-center">
          <p className="font-bold text-ink">Không tìm thấy vị trí phù hợp?</p>
          <p className="mt-2 text-sm text-muted">Gửi CV của bạn — chúng tôi sẽ liên hệ khi có vị trí phù hợp.</p>
        </Card>
      ) : null}
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <Card as="article" interactive className="p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
            <BriefcaseBusiness className="h-5 w-5" />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="neutral">{job.company}</Badge>
              <StatusBadge status={job.status} locale="vi" />
            </div>
            <h3 className="mt-3 text-lg font-black text-ink">{tx(job.title, "vi")}</h3>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{tx(job.location, "vi")}</span>
              <span>{tx(job.level, "vi")}</span>
            </div>
          </div>
        </div>
        <Button href={`/tuyen-dung/${job.slug}`} variant="secondary" size="sm" className="shrink-0 self-start lg:self-center">
          Xem vị trí <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-md border px-3.5 py-2 text-sm font-bold transition-colors",
        active ? "border-brand bg-brand text-white" : "border-line bg-white text-muted hover:border-brand/40 hover:text-brand",
      )}
    >
      {children}
    </button>
  );
}
