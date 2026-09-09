import { NextResponse } from "next/server";

// URL "Web app" của Google Apps Script gắn vào Google Sheet đích — chạy server-side nên
// KHÔNG cần tiền tố NEXT_PUBLIC_ (không lộ ra client). Chưa cấu hình thì API vẫn trả về
// ok để form không vỡ UX, chỉ là chưa có gì được ghi vào Sheet (xem log server).
const SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

interface LeadPayload {
  source: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  type: string;
  message: string;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const payload: LeadPayload = {
    source: String(body.source ?? "website"),
    name,
    email,
    phone: String(body.phone ?? "").trim(),
    company: String(body.company ?? "").trim(),
    type: String(body.type ?? "").trim(),
    message: String(body.message ?? body.desc ?? "").trim(),
  };

  if (!SHEETS_WEBHOOK_URL) {
    console.warn("[api/leads] GOOGLE_SHEETS_WEBHOOK_URL chưa cấu hình — bỏ qua ghi Google Sheet:", payload);
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    const res = await fetch(SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Sheets webhook trả về ${res.status}`);
    return NextResponse.json({ ok: true, stored: true });
  } catch (error) {
    console.error("[api/leads] Gửi vào Google Sheet thất bại:", error);
    return NextResponse.json({ ok: false, error: "webhook_failed" }, { status: 502 });
  }
}
