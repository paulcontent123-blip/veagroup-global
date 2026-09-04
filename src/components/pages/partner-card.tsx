import type { Partner } from "@/lib/types";
import { tx } from "@/lib/i18n/tx";
import { Card } from "@/components/ui/card";

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Card as="article" interactive className="p-5">
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sand-200 text-2xl" aria-hidden="true">{partner.emoji}</span>
        <div>
          <h3 className="font-black text-ink">{partner.name}</h3>
          <p className="mt-1 text-sm leading-6 text-muted">{tx(partner.type, "vi")}</p>
        </div>
      </div>
      {partner.note ? <p className="mt-5 border-t border-line pt-4 text-xs font-semibold text-brand">Đồng hành: {tx(partner.note, "vi")}</p> : null}
    </Card>
  );
}
