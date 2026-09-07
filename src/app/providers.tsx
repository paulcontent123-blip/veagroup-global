"use client";

import type { ReactNode } from "react";
import { PartnershipProvider } from "@/components/partnership/partnership-modal";
import { JobDetailProvider } from "@/components/careers/job-detail-modal";
import { LocaleProvider } from "@/components/i18n/locale-provider";
import type { Locale } from "@/lib/types";

/** Bọc các provider client-side dùng chung toàn app (modal hợp tác, chi tiết tuyển dụng, sau này: toast, i18n…). */
export function Providers({ children, initialLocale }: { children: ReactNode; initialLocale: Locale }) {
  return (
    <LocaleProvider initialLocale={initialLocale}>
      <PartnershipProvider>
        <JobDetailProvider>{children}</JobDetailProvider>
      </PartnershipProvider>
    </LocaleProvider>
  );
}
