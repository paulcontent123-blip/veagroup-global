"use client";

import { FileText, Rocket, Save, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/types";
import {
  ADMIN_CATEGORIES,
  ADMIN_COLORS,
  type AdminPost,
  type AdminPostDraft,
  type AdminPostStatus,
} from "./admin-types";

const EMPTY_DRAFT: AdminPostDraft = {
  title: "",
  summary: "",
  body: "",
  cat: "VEA Tech",
  catVal: "tech",
  color: ADMIN_COLORS[0].value,
};

export function AdminEditorOverlay({
  post,
  locale,
  onClose,
  onSave,
}: {
  post: AdminPost | null;
  locale: Locale;
  onClose: () => void;
  onSave: (draft: AdminPostDraft, status: AdminPostStatus) => void;
}) {
  const [draft, setDraft] = useState<AdminPostDraft>(EMPTY_DRAFT);
  const [error, setError] = useState("");
  const isEnglish = locale === "en";

  useEffect(() => {
    if (!post) {
      setDraft(EMPTY_DRAFT);
    } else {
      setDraft({
        title: post.title,
        summary: post.summary,
        body: post.body,
        cat: post.cat,
        catVal: post.catVal,
        color: post.color,
      });
    }
    setError("");
  }, [post]);

  useEffect(() => {
    if (!post) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, post]);

  if (!post) return null;

  function update<K extends keyof AdminPostDraft>(key: K, value: AdminPostDraft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
    if (error) setError("");
  }

  function save(status: AdminPostStatus) {
    if (!draft.title.trim()) {
      setError(isEnglish ? "Please enter a title." : "Vui lòng nhập tiêu đề.");
      return;
    }
    if (!draft.summary.trim()) {
      setError(isEnglish ? "Please enter a summary." : "Vui lòng nhập tóm tắt.");
      return;
    }
    if (!draft.body.trim()) {
      setError(isEnglish ? "Please enter the article body." : "Vui lòng nhập nội dung bài viết.");
      return;
    }
    onSave(
      {
        ...draft,
        title: draft.title.trim(),
        summary: draft.summary.trim(),
        body: draft.body.trim(),
      },
      status,
    );
  }

  return (
    <section className="w-full" role="dialog" aria-modal="true" aria-labelledby="admin-editor-title">
      <div className="mx-auto w-full max-w-[860px] py-1 sm:py-2">
        <div className="mb-7 flex items-center justify-between gap-4">
          <h2 id="admin-editor-title" className="flex items-center gap-2 text-[20px] font-extrabold text-ink">
            <FileText className="h-5 w-5 text-brand" aria-hidden="true" />
            {post.id ? (isEnglish ? "Edit post" : "Chỉnh sửa bài viết") : isEnglish ? "Write new post" : "Viết bài mới"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] border-[1.5px] border-line px-4 text-[13px] font-semibold text-muted transition-colors hover:border-ink hover:text-ink"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
            {isEnglish ? "Close" : "Đóng"}
          </button>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_200px]">
          <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.5px] text-muted-light">
                {isEnglish ? "Post title *" : "Tiêu đề bài viết *"}
              </span>
              <input
                value={draft.title}
                onChange={(event) => update("title", event.target.value)}
                placeholder={isEnglish ? "Example: VEA Group launches a new platform..." : "VD: VEA Group ra mắt nền tảng mới..."}
                className="rounded-lg border-[1.5px] border-line px-3.5 py-[11px] text-[15px] font-semibold text-ink outline-none transition-colors placeholder:text-muted-lighter focus:border-brand"
              />
            </label>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.5px] text-muted-light">{isEnglish ? "Category" : "Danh mục"}</span>
                <select
                  value={draft.catVal}
                  onChange={(event) => {
                    const category = ADMIN_CATEGORIES.find((item) => item.value === event.target.value) ?? ADMIN_CATEGORIES[0];
                    setDraft((current) => ({ ...current, catVal: category.value, cat: category.label }));
                  }}
                  className="rounded-lg border-[1.5px] border-line bg-white px-3 py-2.5 text-[13.5px] text-ink outline-none focus:border-brand"
                >
                  {ADMIN_CATEGORIES.map((category) => (
                    <option key={category.value} value={category.value}>{category.label}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-[0.5px] text-muted-light">{isEnglish ? "Label color" : "Màu nhãn"}</span>
                <select
                  value={draft.color}
                  onChange={(event) => update("color", event.target.value)}
                  className="rounded-lg border-[1.5px] border-line bg-white px-3 py-2.5 text-[13.5px] text-ink outline-none focus:border-brand"
                >
                  {ADMIN_COLORS.map((color) => (
                    <option key={color.value} value={color.value}>{color.label}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.5px] text-muted-light">{isEnglish ? "Summary *" : "Tóm tắt *"}</span>
              <textarea
                value={draft.summary}
                onChange={(event) => update("summary", event.target.value)}
                rows={2}
                placeholder={isEnglish ? "Summarise the article in one or two sentences..." : "1-2 câu tóm tắt nội dung bài viết..."}
                className="resize-y rounded-lg border-[1.5px] border-line px-3 py-2.5 text-[13.5px] text-ink outline-none placeholder:text-muted-lighter focus:border-brand"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-[0.5px] text-muted-light">{isEnglish ? "Article body *" : "Nội dung bài viết *"}</span>
              <textarea
                value={draft.body}
                onChange={(event) => update("body", event.target.value)}
                rows={14}
                placeholder={isEnglish ? "Write the article here. Use a blank line between paragraphs." : "Viết nội dung bài viết ở đây. Dùng dòng trống để tách đoạn."}
                className="resize-y rounded-lg border-[1.5px] border-line px-3.5 py-3 text-sm leading-[1.75] text-ink outline-none placeholder:text-muted-lighter focus:border-brand"
              />
            </label>
          </div>

          <div className="flex flex-col gap-2.5 lg:sticky lg:top-20">
            <button
              type="button"
              onClick={() => save("pub")}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[9px] bg-brand-gradient px-3 text-sm font-bold text-white shadow-[0_3px_0_#E8612A] transition-[filter,transform] hover:brightness-105 active:translate-y-px"
            >
              <Rocket className="h-4 w-4" aria-hidden="true" />
              {isEnglish ? "Publish" : "Xuất bản"}
            </button>
            <button
              type="button"
              onClick={() => save("draft")}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[9px] border-[1.5px] border-line bg-white px-3 text-[13.5px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <Save className="h-4 w-4" aria-hidden="true" />
              {isEnglish ? "Save draft" : "Lưu nháp"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-full items-center justify-center rounded-[9px] border-[1.5px] border-line px-3 text-[13px] text-muted transition-colors hover:border-ink hover:text-ink"
            >
              {isEnglish ? "Cancel" : "Hủy"}
            </button>

            {error ? <p className="rounded-lg border border-red-200 bg-red-50 p-3 text-[12px] leading-5 text-red-700">{error}</p> : null}

            <div className="rounded-lg border border-line bg-sand-100 p-3 text-xs leading-[1.6] text-muted">
              <strong className="text-ink">{isEnglish ? "Tip:" : "Mẹo:"}</strong>{" "}
              {isEnglish ? "Published posts appear on the News page. Drafts remain internal." : "Bài xuất bản sẽ hiện trên trang Tin tức. Bản nháp chỉ lưu nội bộ."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
