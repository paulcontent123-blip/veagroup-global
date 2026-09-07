import { FilePlus2, Pencil, Trash2 } from "lucide-react";
import type { Locale } from "@/lib/types";
import type { AdminPost } from "./admin-types";

export function AdminPostsTab({
  posts,
  locale,
  onCreate,
  onEdit,
  onDelete,
}: {
  posts: AdminPost[];
  locale: Locale;
  onCreate: () => void;
  onEdit: (post: AdminPost) => void;
  onDelete: (post: AdminPost) => void;
}) {
  const isEnglish = locale === "en";

  return (
    <section aria-labelledby="posts-title">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 id="posts-title" className="text-[20px] font-extrabold text-ink">
            {isEnglish ? "Posts & News" : "Bài viết & Tin tức"}
          </h1>
          <p className="mt-1 text-[13px] text-muted">
            {posts.length} {isEnglish ? "posts" : "bài viết"}
          </p>
        </div>
        <button
          type="button"
          onClick={onCreate}
          className="inline-flex h-10 items-center justify-center gap-2 self-start rounded-lg bg-brand-gradient px-5 text-[13.5px] font-bold text-white shadow-brand transition-[filter,transform] hover:-translate-y-0.5 hover:brightness-105"
        >
          <FilePlus2 className="h-4 w-4" aria-hidden="true" />
          {isEnglish ? "Write new post" : "Viết bài mới"}
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-[14px] border border-line bg-white px-6 py-12 text-center text-muted shadow-soft">
          <FilePlus2 className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
          <p className="mt-3 text-sm">{isEnglish ? "No posts yet. Write the first one." : "Chưa có bài viết nào. Hãy viết bài đầu tiên!"}</p>
          <button type="button" onClick={onCreate} className="mt-4 text-[13px] font-bold text-brand hover:underline">
            {isEnglish ? "Create a post" : "Tạo bài viết"}
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col gap-4 rounded-xl border border-line bg-white p-4 shadow-soft transition-[border-color,box-shadow] hover:border-brand/35 hover:shadow-brand sm:flex-row sm:items-center sm:px-5"
            >
              <div className="h-12 w-12 shrink-0 rounded-lg" style={{ background: post.color }} aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <h2 className="truncate text-[14.5px] font-bold text-ink">{post.title}</h2>
                <p className="mt-1 truncate text-xs text-muted">
                  {post.cat} · {post.date}
                </p>
              </div>
              <span
                className={`inline-flex w-fit rounded-[5px] px-2.5 py-0.5 text-[9.5px] font-bold ${
                  post.status === "pub" ? "bg-emerald-100 text-emerald-700" : "bg-sand-200 text-muted"
                }`}
              >
                {post.status === "pub" ? (isEnglish ? "Published" : "Đã xuất bản") : isEnglish ? "Draft" : "Nháp"}
              </span>
              <div className="flex gap-1.5 sm:shrink-0">
                <button
                  type="button"
                  onClick={() => onEdit(post)}
                  className="inline-flex h-8 items-center gap-1.5 rounded-md border-[1.5px] border-line px-3 text-xs font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                  {isEnglish ? "Edit" : "Sửa"}
                </button>
                <button
                  type="button"
                  onClick={() => onDelete(post)}
                  title={isEnglish ? "Delete post" : "Xóa bài viết"}
                  aria-label={isEnglish ? `Delete ${post.title}` : `Xóa ${post.title}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border-[1.5px] border-red-200 text-red-600 transition-colors hover:bg-red-50"
                >
                  <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

