import { ClipboardList, Mail, Phone, Trash2 } from "lucide-react";
import type { Locale } from "@/lib/types";
import type { AdminLead } from "./admin-types";

export function AdminLeadsTab({
  leads,
  locale,
  onClear,
}: {
  leads: AdminLead[];
  locale: Locale;
  onClear: () => void;
}) {
  const isEnglish = locale === "en";

  return (
    <section aria-labelledby="leads-title">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 id="leads-title" className="text-[20px] font-extrabold text-ink">
            {isEnglish ? "Partnership forms received" : "Form hợp tác đã nhận"}
          </h1>
          <p className="mt-1 text-[13px] text-muted">
            {leads.length} {isEnglish ? "forms received" : "form đã nhận"}
          </p>
        </div>
        <button
          type="button"
          onClick={onClear}
          disabled={leads.length === 0}
          className="inline-flex h-9 items-center gap-2 self-start rounded-[7px] border-[1.5px] border-red-300 px-4 text-[12.5px] font-semibold text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
          {isEnglish ? "Clear all" : "Xóa tất cả"}
        </button>
      </div>

      {leads.length === 0 ? (
        <div className="rounded-[14px] border border-line bg-white px-6 py-10 text-center text-muted shadow-soft">
          <ClipboardList className="mx-auto h-7 w-7 text-brand" aria-hidden="true" />
          <p className="mt-3 text-sm">{isEnglish ? "No partnership forms have been submitted." : "Chưa có form hợp tác nào được gửi."}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2.5">
          {leads
            .slice()
            .reverse()
            .map((lead) => (
              <article key={lead.id} className="rounded-[10px] border border-line bg-white p-4 shadow-soft sm:px-[18px]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h2 className="text-sm font-bold text-ink">{lead.name}</h2>
                  <span className="w-fit rounded-[5px] border border-line bg-sand-100 px-2 py-0.5 text-[11px] text-muted">{lead.company}</span>
                </div>
                <div className="mt-2 flex flex-col gap-1.5 text-[12.5px] text-muted sm:flex-row sm:gap-4">
                  <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" aria-hidden="true" />{lead.email}</span>
                  <span className="inline-flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" aria-hidden="true" />{lead.phone}</span>
                </div>
                {lead.desc ? <p className="mt-2 rounded-md bg-sand-100 px-2.5 py-2 text-[13px] text-muted-light">{lead.desc}</p> : null}
                {lead.time ? <p className="mt-1.5 text-[11px] text-muted-light">{lead.time}</p> : null}
              </article>
            ))}
        </div>
      )}
    </section>
  );
}

