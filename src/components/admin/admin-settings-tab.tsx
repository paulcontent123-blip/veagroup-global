"use client";

import { Check, KeyRound } from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/lib/types";

export function AdminSettingsTab({ locale, onChangePassword }: { locale: Locale; onChangePassword: (password: string) => void }) {
  const [password, setPassword] = useState("");
  const isEnglish = locale === "en";

  function submit() {
    if (password.trim().length < 6) return;
    onChangePassword(password.trim());
    setPassword("");
  }

  return (
    <section aria-labelledby="settings-title">
      <h1 id="settings-title" className="mb-5 text-[20px] font-extrabold text-ink">
        {isEnglish ? "Settings" : "Cài đặt"}
      </h1>
      <div className="max-w-[560px] rounded-[14px] border border-line bg-white p-6 shadow-soft sm:p-7">
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="new-admin-password" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.5px] text-muted-light">
              {isEnglish ? "Change admin password" : "Đổi mật khẩu admin"}
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-light" aria-hidden="true" />
                <input
                  id="new-admin-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder={isEnglish ? "New password" : "Mật khẩu mới"}
                  className="w-full rounded-[7px] border-[1.5px] border-line py-[9px] pl-9 pr-3 text-[13.5px] text-ink outline-none focus:border-brand"
                />
              </div>
              <button
                type="button"
                onClick={submit}
                disabled={password.trim().length < 6}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-[7px] bg-ink px-4 text-[13px] font-bold text-white transition-colors hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                {isEnglish ? "Save" : "Lưu"}
              </button>
            </div>
            <p className="mt-2 text-xs text-muted">{isEnglish ? "Demo only. Password is stored in localStorage." : "Bản demo: mật khẩu chỉ được lưu trong localStorage."}</p>
          </div>
          <div className="border-t border-line pt-3 text-[12.5px] text-muted">
            {isEnglish ? "Version: VEA Group v5 · " : "Phiên bản: VEA Group v5 · "}
            <span className="text-brand">veagroup.global</span>
          </div>
        </div>
      </div>
    </section>
  );
}
