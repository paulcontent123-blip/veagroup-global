import type { Config } from "tailwindcss";

/**
 * Design tokens của VEA Group.
 * Palette để dạng hex tĩnh -> dùng được opacity modifier (bg-brand/10, text-ink/60...).
 * Một số token cũng được mirror sang CSS variable trong globals.css để có thể
 * đổi theme từ backend sau này (ví dụ white-label theo công ty thành viên).
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#C8541A",
          50: "#FBF1EB",
          100: "#F6DECF",
          200: "#EBB99B",
          400: "#F07848",
          500: "#E8612A",
          600: "#C8541A",
          700: "#A5410F",
          800: "#7E320C",
        },
        ink: {
          DEFAULT: "#0F0F0F",
          800: "#1A1A1A",
          700: "#2A2A2A",
        },
        muted: {
          DEFAULT: "#6B6B6B",
          light: "#999999",
          lighter: "#BBBBBB",
        },
        sand: {
          DEFAULT: "#FAF8F5",
          100: "#FAF8F5",
          200: "#F5F1EB",
          300: "#EEE8DE",
        },
        line: {
          DEFAULT: "#E8E2DA",
          strong: "#D8D0C4",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(15,15,15,0.06)",
        lift: "0 12px 44px rgba(15,15,15,0.10)",
        brand: "0 12px 36px rgba(200,84,26,0.20)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg,#C8541A 0%,#E8612A 50%,#F07848 100%)",
        "flag-strip":
          "linear-gradient(90deg,#C8541A,#E8612A,#F07848,#E8612A,#C8541A)",
      },
      maxWidth: {
        container: "1200px",
        prose: "68ch",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "orb-pulse": {
          "0%,100%": { opacity: "0.5", transform: "translate(-50%,-50%) scale(1)" },
          "50%": { opacity: "1", transform: "translate(-50%,-50%) scale(1.08)" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 2.2s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out both",
        "orb-pulse": "orb-pulse 8s ease-in-out infinite",
        "slide-down": "slide-down 0.16s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
