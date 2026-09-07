"use client";

import type { ReactNode } from "react";
import { PartnershipProvider } from "@/components/partnership/partnership-modal";
import { JobDetailProvider } from "@/components/careers/job-detail-modal";

/** Bọc các provider client-side dùng chung toàn app (modal hợp tác, chi tiết tuyển dụng, sau này: toast, i18n…). */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <PartnershipProvider>
      <JobDetailProvider>{children}</JobDetailProvider>
    </PartnershipProvider>
  );
}
