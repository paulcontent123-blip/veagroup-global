import { BriefcaseBusiness, ClipboardList, FileText, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { AdminTab } from "./admin-types";

const groups: { label: string; items: { id: AdminTab; label: string; icon: LucideIcon }[] }[] = [
  {
    label: "Nội dung",
    items: [
      { id: "posts", label: "Bài viết & Tin tức", icon: FileText },
      { id: "jobs", label: "Tuyển dụng", icon: BriefcaseBusiness },
    ],
  },
  {
    label: "Hệ thống",
    items: [
      { id: "leads", label: "Form hợp tác", icon: ClipboardList },
      { id: "settings", label: "Cài đặt", icon: Settings },
    ],
  },
];

export function AdminSidebar({ activeTab, onChange }: { activeTab: AdminTab; onChange: (tab: AdminTab) => void }) {
  return (
    <aside className="border-b border-line bg-white px-3 py-3 lg:min-h-[calc(100vh-60px)] lg:border-b-0 lg:border-r lg:px-0 lg:py-6">
      <nav aria-label="Điều hướng quản trị" className="flex gap-1 overflow-x-auto lg:block">
        {groups.map((group) => (
          <div key={group.label} className="flex shrink-0 items-center gap-1 lg:mb-4 lg:block">
            <div className="hidden px-5 pb-2 text-[10px] font-bold uppercase tracking-[1px] text-muted-light lg:block">{group.label}</div>
            {group.items.map((item) => {
              const Icon = item.icon;
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onChange(item.id)}
                  aria-current={active ? "page" : undefined}
                  className={`flex h-10 shrink-0 items-center gap-2.5 border-l-[3px] px-3 text-left text-[13.5px] font-medium transition-colors lg:h-auto lg:w-full lg:px-5 lg:py-2.5 ${
                    active
                      ? "border-brand bg-brand/5 font-bold text-brand"
                      : "border-transparent text-muted hover:bg-sand-100 hover:text-ink"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}

