"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Ảnh gốc từ demo: wordmark "VEA GROUP", tỉ lệ ~8.5:1. Nếu ảnh lỗi (404, mạng chậm khi
// self-host…), rơi về fallback chữ y hệt demo (`.nav-logo-fallback`: "VEA <em>GROUP</em>").
export function SiteLogo({ inverted = false }: { inverted?: boolean }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link href="/#top" className="group inline-flex items-center" aria-label="VEA Group — Trang chủ">
      {!imgError ? (
        <Image
          src="/brand/vea-logo.png"
          alt="VEA Group"
          width={224}
          height={26}
          priority
          className={cn("h-[26px] w-auto object-contain", inverted && "brightness-0 invert")}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={cn("text-[17px] font-black leading-none", inverted ? "text-white" : "text-ink")}>
          VEA{" "}
          <em
            className={cn(
              "not-italic bg-clip-text text-transparent",
              inverted ? "bg-white" : "bg-brand-gradient",
            )}
          >
            GROUP
          </em>
        </span>
      )}
    </Link>
  );
}
