/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // remotePatterns: [] // thêm domain CDN/CMS khi nối backend
  },
  // Backend (Next.js 15) sẽ dùng: app/api/* (Route Handlers) + Server Actions.
  // Khi cần: async rewrites()/headers()/redirects() đặt tại đây.
};

export default nextConfig;
