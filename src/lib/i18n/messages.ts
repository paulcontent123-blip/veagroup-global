import type { Locale } from "@/lib/types";

/**
 * Chuỗi giao diện dùng chung (không thuộc "nội dung" -> để tách khỏi src/content).
 * Có type -> gõ nhầm key sẽ báo lỗi build.
 */
const dictionaries = {
  vi: {
    common: {
      readMore: "Đọc thêm",
      viewAll: "Xem tất cả",
      backHome: "Quay về trang chủ",
      learnMore: "Tìm hiểu thêm",
      explore: "Khám phá",
      contact: "Liên hệ",
      partner: "Hợp tác",
      apply: "Ứng tuyển",
      details: "Chi tiết",
      close: "Đóng",
    },
    nav: {
      toggleLangTo: "Chuyển sang Tiếng Anh",
      openMenu: "Mở menu",
      closeMenu: "Đóng menu",
      cta: "Hợp tác",
    },
    carousel: {
      label: "Trình chiếu giới thiệu",
      prev: "Slide trước",
      next: "Slide sau",
      goTo: "Tới slide",
      pause: "Tạm dừng",
      play: "Phát",
    },
    status: {
      live: "Đang hoạt động",
      demo: "Bản demo",
      building: "Đang phát triển",
      active: "Đang hoạt động",
      "active-dev": "Phát triển tích cực",
      "coming-soon": "Sắp ra mắt",
      open: "Đang tuyển",
      soon: "Sắp mở",
    },
    form: {
      name: "Họ và tên",
      email: "Email",
      phone: "Số điện thoại / Zalo",
      company: "Công ty",
      partnerWith: "Đơn vị muốn hợp tác",
      topic: "Hình thức hợp tác",
      message: "Nội dung",
      optional: "không bắt buộc",
      submit: "Gửi thông tin",
      submitting: "Đang gửi…",
      selectPlaceholder: "-- Vui lòng chọn --",
      requiredHint: "Vui lòng điền các trường bắt buộc.",
      demoTitle: "Đã ghi nhận (bản demo)",
      demoBody:
        "Đây là bản demo giao diện — backend chưa được kết nối nên dữ liệu chưa được gửi đi.",
    },
    filters: {
      all: "Tất cả",
    },
  },
  en: {
    common: {
      readMore: "Read more",
      viewAll: "View all",
      backHome: "Back to home",
      learnMore: "Learn more",
      explore: "Explore",
      contact: "Contact",
      partner: "Partner",
      apply: "Apply",
      details: "Details",
      close: "Close",
    },
    nav: {
      toggleLangTo: "Switch to Vietnamese",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      cta: "Partner",
    },
    carousel: {
      label: "Intro carousel",
      prev: "Previous slide",
      next: "Next slide",
      goTo: "Go to slide",
      pause: "Pause",
      play: "Play",
    },
    status: {
      live: "Live",
      demo: "Demo",
      building: "Building",
      active: "Active",
      "active-dev": "Active development",
      "coming-soon": "Coming soon",
      open: "Open",
      soon: "Opening soon",
    },
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone / Zalo",
      company: "Company",
      partnerWith: "Partner with",
      topic: "Type of partnership",
      message: "Message",
      optional: "optional",
      submit: "Send",
      submitting: "Sending…",
      selectPlaceholder: "-- Please select --",
      requiredHint: "Please fill in the required fields.",
      demoTitle: "Received (demo)",
      demoBody:
        "This is a UI demo — the backend is not connected yet, so nothing was actually sent.",
    },
    filters: {
      all: "All",
    },
  },
} as const;

export type Messages = (typeof dictionaries)[keyof typeof dictionaries];

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}
