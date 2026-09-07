import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import Link from "next/link";
import type { FormEvent } from "react";

export function AdminLogin({
  password,
  error,
  onPasswordChange,
  onSubmit,
}: {
  password: string;
  error: string;
  onPasswordChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sand-100 px-5 py-10">
      <div className="w-full max-w-[400px] rounded-[20px] border border-line bg-white px-8 py-10 shadow-[0_8px_40px_rgba(15,15,15,0.1)] sm:px-10 sm:py-12">
        <div className="mb-8 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white shadow-soft">
            <LockKeyhole className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="mt-4 text-[22px] font-extrabold text-ink">Quản trị nội bộ</h1>
          <p className="mt-1.5 text-[13.5px] text-muted">VEA Group · Internal CMS</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <label className="flex flex-col gap-1">
            <span className="text-[10.5px] font-bold uppercase tracking-[0.5px] text-muted-light">Mật khẩu</span>
            <input
              type="password"
              value={password}
              onChange={(event) => onPasswordChange(event.target.value)}
              placeholder="Nhập mật khẩu..."
              autoFocus
              className="rounded-lg border-[1.5px] border-line px-3.5 py-[11px] text-[14.5px] text-ink outline-none transition-colors placeholder:text-muted-lighter focus:border-brand"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "admin-login-error" : undefined}
            />
          </label>

          {error ? (
            <p id="admin-login-error" className="text-center text-[12.5px] font-medium text-red-600">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[9px] bg-brand-gradient px-4 text-[15px] font-bold text-white shadow-[0_3px_0_#E8612A] transition-[filter,transform] hover:brightness-105 active:translate-y-px"
          >
            Đăng nhập
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>

        <div className="mt-5 text-center">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Quay về trang chủ
          </Link>
        </div>
      </div>
    </main>
  );
}

