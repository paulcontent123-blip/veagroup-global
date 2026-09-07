"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { news } from "@/content/news";
import { formatDate } from "@/lib/format";
import { useLocale } from "@/components/i18n/locale-provider";
import type { Locale } from "@/lib/types";
import { tx } from "@/lib/i18n/tx";
import { AdminEditorOverlay } from "./admin-editor-overlay";
import { AdminJobsTab } from "./admin-jobs-tab";
import { AdminLeadsTab } from "./admin-leads-tab";
import { AdminLogin } from "./admin-login";
import { AdminPostsTab } from "./admin-posts-tab";
import { AdminSettingsTab } from "./admin-settings-tab";
import { AdminSidebar } from "./admin-sidebar";
import { AdminTopbar } from "./admin-topbar";
import type { AdminLead, AdminPost, AdminPostDraft, AdminPostStatus, AdminTab } from "./admin-types";

const SESSION_KEY = "vea_adm_sess";
const PASSWORD_KEY = "vea_adm_pw";
const POSTS_KEY = "vea_posts_next";
const LEADS_KEY = "vea_leads";
const DEFAULT_PASSWORD = "VEA@Admin2026";

function buildSeedPosts(locale: Locale): AdminPost[] {
  return news.map((article, index) => ({
    id: index + 1,
    title: tx(article.title, locale),
    summary: tx(article.excerpt, locale),
    body: article.body.map((paragraph) => tx(paragraph, locale)).join("\n\n"),
    cat: article.categoryLabel,
    catVal: article.category,
    color: article.gradient,
    status: index < 5 ? "pub" : "draft",
    date: formatDate(article.date, locale),
  }));
}

function readJson<T>(key: string, fallback: T): T {
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function AdminWorkspace() {
  const { locale } = useLocale();
  const [authState, setAuthState] = useState<"login" | "authenticated">("login");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<AdminTab>("posts");
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [leads, setLeads] = useState<AdminLead[]>([]);
  const [editorPost, setEditorPost] = useState<AdminPost | null>(null);
  const [toast, setToast] = useState("");

  const showToast = useCallback((message: string) => setToast(message), []);

  useEffect(() => {
    const authenticated = window.sessionStorage.getItem(SESSION_KEY) === "1";
    setAuthState(authenticated ? "authenticated" : "login");

    const savedPosts = readJson<AdminPost[] | null>(POSTS_KEY, null);
    setPosts(savedPosts ?? buildSeedPosts(locale));
    setLeads(readJson<AdminLead[]>(LEADS_KEY, []));
  }, [locale]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (authState !== "authenticated") return;
    window.localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  }, [authState, posts]);

  function onLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const storedPassword = window.localStorage.getItem(PASSWORD_KEY) || DEFAULT_PASSWORD;
    if (password.trim() !== storedPassword) {
      setLoginError(locale === "en" ? "Incorrect password" : "Sai mật khẩu");
      return;
    }
    window.sessionStorage.setItem(SESSION_KEY, "1");
    setPassword("");
    setLoginError("");
    setAuthState("authenticated");
    setActiveTab("posts");
  }

  function logout() {
    window.sessionStorage.removeItem(SESSION_KEY);
    setAuthState("login");
    setPassword("");
    setActiveTab("posts");
    setEditorPost(null);
  }

  function savePost(draft: AdminPostDraft, status: AdminPostStatus) {
    const existing = editorPost;
    const nextPost: AdminPost = {
      ...draft,
      id: existing?.id ?? Date.now(),
      status,
      date: existing?.date || formatDate(new Date().toISOString().slice(0, 10), locale),
    };
    setPosts((current) => (existing ? current.map((post) => (post.id === existing.id ? nextPost : post)) : [...current, nextPost]));
    setEditorPost(null);
    setActiveTab("posts");
    showToast(status === "pub" ? `${locale === "en" ? "Published" : "Đã xuất bản"}: ${nextPost.title}` : `${locale === "en" ? "Draft saved" : "Đã lưu nháp"}: ${nextPost.title}`);
  }

  function deletePost(post: AdminPost) {
    setPosts((current) => current.filter((item) => item.id !== post.id));
    showToast(`${locale === "en" ? "Deleted" : "Đã xóa"}: ${post.title}`);
  }

  function clearLeads() {
    window.localStorage.removeItem(LEADS_KEY);
    setLeads([]);
    showToast(locale === "en" ? "All partnership forms cleared" : "Đã xóa tất cả form hợp tác");
  }

  function changePassword(nextPassword: string) {
    window.localStorage.setItem(PASSWORD_KEY, nextPassword);
    showToast(locale === "en" ? "Password changed" : "Đã đổi mật khẩu thành công");
  }

  if (authState === "login") {
    return <AdminLogin password={password} error={loginError} onPasswordChange={(value) => { setPassword(value); setLoginError(""); }} onSubmit={onLogin} />;
  }

  return (
    <main className="min-h-screen bg-sand-100">
      <AdminTopbar onLogout={logout} />
      <div className="grid min-h-[calc(100vh-60px)] lg:grid-cols-[220px_minmax(0,1fr)]">
        <AdminSidebar
          activeTab={activeTab}
          onChange={(tab) => {
            setActiveTab(tab);
            setEditorPost(null);
          }}
        />
        <div className="min-w-0 p-5 lg:px-10 lg:py-8">
          {editorPost ? (
            <AdminEditorOverlay post={editorPost} locale={locale} onClose={() => setEditorPost(null)} onSave={savePost} />
          ) : null}
          {!editorPost && activeTab === "posts" ? (
            <AdminPostsTab
              posts={posts}
              locale={locale}
              onCreate={() => setEditorPost(buildEmptyPost())}
              onEdit={setEditorPost}
              onDelete={deletePost}
            />
          ) : null}
          {!editorPost && activeTab === "jobs" ? <AdminJobsTab locale={locale} onToast={showToast} /> : null}
          {!editorPost && activeTab === "leads" ? <AdminLeadsTab leads={leads} locale={locale} onClear={clearLeads} /> : null}
          {!editorPost && activeTab === "settings" ? <AdminSettingsTab locale={locale} onChangePassword={changePassword} /> : null}
        </div>
      </div>
      {toast ? (
        <div className="fixed bottom-6 left-1/2 z-[80] flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center rounded-lg border-b-[2.5px] border-brand bg-ink px-5 py-3 text-center text-[13.5px] font-semibold text-white shadow-lift" role="status">
          {toast}
        </div>
      ) : null}
    </main>
  );
}

function buildEmptyPost(): AdminPost {
  return {
    id: 0,
    title: "",
    summary: "",
    body: "",
    cat: "VEA Tech",
    catVal: "tech",
    color: "linear-gradient(135deg,#0c4a6e,#0369a1,#38BDF8)",
    status: "draft",
    date: "",
  };
}
