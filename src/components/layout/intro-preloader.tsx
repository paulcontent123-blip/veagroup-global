// Bám hiệu ứng chào lần đầu vào trang của veagroup.global: overlay trắng full-screen,
// 8 chữ cái "V E A G r o u p" trượt vào từ trái, xếp thành hàng, tô gradient cam→trắng,
// lệch nhịp delay theo thứ tự, cùng 1 gạch ngang gradient quét bên dưới. Chỉ hiện 1 lần
// mỗi phiên (sessionStorage) — vào lại/chuyển trang trong cùng phiên sẽ không lặp lại.
//
// Cố tình KHÔNG là client component điều khiển bằng useEffect: nếu vậy overlay sẽ vắng
// mặt trong HTML gốc (return null lúc SSR + lần render đầu), nghĩa là trình duyệt vẽ
// xong toàn bộ trang thật rồi effect mới chạy và overlay mới "đè" lên sau — đúng cái
// lỗi "render màn hình trước rồi hiệu ứng mới chạy". Overlay ở đây nằm ngay trong HTML
// đầu tiên gửi về (luôn hiển thị theo mặc định), và một <script> đồng bộ ngay sau nó
// chạy trong lúc trình duyệt còn đang parse HTML — tức là trước khi nội dung phía dưới
// (được parse sau, đứng sau trong DOM) có cơ hội lộ ra — để ẩn/hẹn giờ overlay. Đây là
// kỹ thuật y hệt Next.js dùng để chống nháy (FOUC) khi detect dark mode.
const LETTERS = ["V", "E", "A", "G", "r", "o", "u", "p"];

const INIT_SCRIPT = `
(function () {
  var el = document.getElementById("vea-intro");
  if (!el) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var shown = false;
  try {
    shown = sessionStorage.getItem("vea-intro-shown") === "1";
  } catch (e) {}
  if (shown || reduce) {
    el.style.display = "none";
    return;
  }
  try {
    sessionStorage.setItem("vea-intro-shown", "1");
  } catch (e) {}
  document.body.style.overflow = "hidden";
  window.setTimeout(function () {
    el.style.opacity = "0";
    window.setTimeout(function () {
      el.style.display = "none";
      document.body.style.overflow = "";
    }, 350);
  }, 1650); // + 350ms fade = tổng 2000ms hiển thị
})();
`;

export function IntroPreloader() {
  return (
    <div
      id="vea-intro"
      aria-hidden
      // Script đồng bộ ở dưới mutate style (display/opacity) của chính node này TRƯỚC
      // khi React hydrate — cố tình, để tránh nháy nội dung thật (xem comment ở trên).
      // Vì vậy React sẽ luôn thấy style attribute "lệch" so với HTML gốc lúc hydrate;
      // suppressHydrationWarning báo React bỏ qua sai lệch đó CHỈ trên node này (không
      // lan xuống children), thay vì coi là lỗi và render lại cả cây phía dưới.
      suppressHydrationWarning
      className="fixed inset-0 z-[200] flex items-center justify-center bg-white/70 backdrop-blur-md transition-opacity duration-300"
    >
      <div className="relative mx-8 w-full max-w-[520px] pb-6 text-center">
        <div className="flex justify-evenly text-[13vw] font-black leading-[1.1] tracking-[0.08em] sm:text-[64px]">
          {LETTERS.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className="intro-letter"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
        <span className="intro-line" />
      </div>
      {/* eslint-disable-next-line @next/next/no-sync-scripts, react/no-danger */}
      <script dangerouslySetInnerHTML={{ __html: INIT_SCRIPT }} />
    </div>
  );
}
