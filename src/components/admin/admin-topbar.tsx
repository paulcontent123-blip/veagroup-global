import { ArrowLeft, LogOut, Settings2 } from "lucide-react";
import Link from "next/link";

export function AdminTopbar({ onLogout }: { onLogout: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex min-h-[60px] items-center justify-between gap-4 border-b border-line bg-white px-5 shadow-[0_2px_8px_rgba(15,15,15,0.06)] lg:px-10">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex items-center gap-2 text-[18px] font-extrabold text-ink">
          <Settings2 className="h-[18px] w-[18px] text-brand" aria-hidden="true" />
          <span>
            VEA <span className="text-brand">Admin</span>
          </span>
        </div>
        <span className="hidden rounded-full border border-line bg-sand-100 px-2.5 py-0.5 text-[11px] text-muted sm:inline-flex">
          Quản trị nội bộ
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <Link
          href="/"
          className="inline-flex h-8 items-center gap-1.5 rounded-[7px] border-[1.5px] border-line px-3.5 text-[12.5px] font-semibold text-muted transition-colors hover:border-ink hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">Về trang chủ</span>
        </Link>
        <button
          type="button"
          onClick={onLogout}
          className="inline-flex h-8 items-center gap-1.5 rounded-[7px] border-[1.5px] border-line px-3.5 text-[12.5px] font-semibold text-muted transition-colors hover:border-ink hover:text-ink"
        >
          <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">Đăng xuất</span>
        </button>
      </div>
    </header>
  );
}

