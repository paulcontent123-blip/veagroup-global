import Link from "next/link";

export function SiteLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/#top" className="group inline-flex items-center gap-3" aria-label="VEA Group home">
      <span
        className={`grid h-10 w-10 place-items-center rounded-lg text-sm font-black shadow-soft ${
          inverted ? "bg-white text-ink" : "bg-ink text-white"
        }`}
      >
        V
      </span>
      <span className="leading-none">
        <span className={`block text-[15px] font-black tracking-normal ${inverted ? "text-white" : "text-ink"}`}>
          VEA Group
        </span>
        <span className={`mt-1 block text-[11px] font-semibold uppercase tracking-[0.16em] ${inverted ? "text-brand-400" : "text-brand"}`}>
          Vietnam Era
        </span>
      </span>
    </Link>
  );
}
