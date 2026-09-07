import { AlertTriangle, BriefcaseBusiness } from "lucide-react";
import type { Locale } from "@/lib/types";

export function AdminJobsTab({ locale, onToast }: { locale: Locale; onToast: (message: string) => void }) {
  const isEnglish = locale === "en";

  return (
    <section aria-labelledby="jobs-title">
      <h1 id="jobs-title" className="mb-5 text-[20px] font-extrabold text-ink">
        {isEnglish ? "Recruitment" : "Tuyển dụng"}
      </h1>
      <div className="rounded-[14px] border border-line bg-white px-6 py-8 text-center text-muted shadow-soft">
        <BriefcaseBusiness className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
        <p className="mx-auto mt-3 max-w-lg text-sm">
          {isEnglish
            ? "Job management will be available in the production version."
            : "Quản lý tin tuyển dụng sẽ được bổ sung trong phiên bản production."}
        </p>
        <button
          type="button"
          onClick={() => onToast(isEnglish ? "This feature is still in development." : "Tính năng đang phát triển")}
          className="mt-4 inline-flex h-9 items-center gap-2 rounded-[7px] bg-brand px-5 text-[13px] font-bold text-white transition-colors hover:bg-brand-700"
        >
          <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
          {isEnglish ? "Add job posting" : "Thêm tin tuyển dụng"}
        </button>
      </div>
    </section>
  );
}

