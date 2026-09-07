import type { CompanyAccent } from "@/lib/types";

/**
 * Màu tint theo từng công ty thành viên (bám các rgba trong demo HTML).
 * Dùng chung cho section "5 công ty" ở trang chủ và trang /ve-vea/cong-ty.
 * - `wash`: stop đầu của gradient nền header (`bg-gradient-to-br ... to-transparent`)
 * - `icon`: viền + nền + chữ cho ô icon
 * - `chip`: viền + nền + chữ cho service chip
 */
export const companyAccent: Record<CompanyAccent, { wash: string; icon: string; chip: string }> = {
  media: {
    wash: "from-[#E8612A]/[0.06]",
    icon: "border-[#E8612A]/25 bg-[#E8612A]/10 text-[#E8612A]",
    chip: "border-[#E8612A]/20 bg-[#E8612A]/10 text-[#E8612A]",
  },
  tech: {
    wash: "from-[#C8541A]/[0.06]",
    icon: "border-[#C8541A]/25 bg-[#C8541A]/10 text-[#C8541A]",
    chip: "border-[#C8541A]/20 bg-[#C8541A]/10 text-[#C8541A]",
  },
  law: {
    wash: "from-[#B84010]/[0.06]",
    icon: "border-[#B84010]/25 bg-[#B84010]/10 text-[#B84010]",
    chip: "border-[#B84010]/20 bg-[#B84010]/10 text-[#B84010]",
  },
  retail: {
    wash: "from-[#A03010]/[0.06]",
    icon: "border-[#A03010]/25 bg-[#A03010]/10 text-[#A03010]",
    chip: "border-[#A03010]/20 bg-[#A03010]/10 text-[#A03010]",
  },
  academy: {
    wash: "from-[#C8541A]/[0.04]",
    icon: "border-[#C8541A]/15 bg-[#C8541A]/[0.08] text-[#C8541A]",
    chip: "border-[#C8541A]/15 bg-[#C8541A]/[0.08] text-[#C8541A]",
  },
};
