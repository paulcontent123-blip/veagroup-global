import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-[transform,filter,color,background,border-color] duration-200 disabled:pointer-events-none disabled:opacity-50";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-brand hover:-translate-y-0.5 hover:brightness-[1.06]",
  secondary:
    "border border-line-strong bg-white text-ink shadow-soft hover:border-brand hover:text-brand hover:shadow-lift",
  outline:
    "border border-brand/30 bg-brand/5 text-brand shadow-soft hover:bg-brand hover:text-white hover:shadow-brand",
  // Ghost cố tình phẳng — dùng cho link phụ trong nav/toolbar, có bóng sẽ lệch với chữ xung quanh.
  ghost: "text-muted hover:bg-sand-200 hover:text-ink",
};

const sizeClass: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variantClass[variant], sizeClass[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, target, rel } = props;
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          aria-label={props["aria-label"]}
          className={classes}
          onClick={props.onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={props["aria-label"]} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  // Only forward genuine passthrough HTML attributes (onClick, disabled, name…).
  // `variant`/`size`/`className`/`children` are already handled above — leaving
  // them in `rest` would spread the raw `className` back onto the element and
  // silently wipe out the computed `classes` (incl. the color/variant styles).
  const { type = "button", variant: _variant, size: _size, className: _className, children: _children, ...rest } =
    props as ButtonAsButton;
  return (
    <button type={type} {...rest} className={classes}>
      {children}
    </button>
  );
}
