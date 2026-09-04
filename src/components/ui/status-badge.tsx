import type { CompanyStatus, Locale, PlatformStatus } from "@/lib/types";
import { getMessages } from "@/lib/i18n/messages";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

type AnyStatus = CompanyStatus | PlatformStatus | "open" | "soon";

const toneByStatus: Record<AnyStatus, "success" | "warning" | "neutral" | "brand" | "info"> = {
  live: "success",
  active: "success",
  "active-dev": "success",
  open: "success",
  demo: "brand",
  "coming-soon": "warning",
  soon: "warning",
  building: "neutral",
};

const dotByStatus: Record<AnyStatus, string> = {
  live: "bg-emerald-500",
  active: "bg-emerald-500",
  "active-dev": "bg-emerald-500",
  open: "bg-emerald-500",
  demo: "bg-brand",
  "coming-soon": "bg-amber-500",
  soon: "bg-amber-500",
  building: "bg-muted-light",
};

export function StatusBadge({
  status,
  locale,
  withDot = true,
  className,
}: {
  status: AnyStatus;
  locale: Locale;
  withDot?: boolean;
  className?: string;
}) {
  const label = getMessages(locale).status[status];
  return (
    <Badge tone={toneByStatus[status]} className={className}>
      {withDot ? (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            dotByStatus[status],
            (status === "live" || status === "active" || status === "active-dev") && "animate-blink",
          )}
        />
      ) : null}
      {label}
    </Badge>
  );
}
