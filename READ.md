# VEA Group Frontend

Frontend demo cho website Vietnam Era Group, duoc xay dung bang Next.js 15 va React 19. Noi dung hien tai duoc dong bo theo file HTML tham chieu:

`demo/veagroup_global_v5_1.html`

Day la lop giao dien demo, chua ket noi database, CMS, authentication hay API that.

## Yeu cau moi truong

- Node.js >= 18.18
- npm

## Cai dat va chay local

```bash
npm install
npm run dev
```

Mo `http://localhost:3000` de xem website.

Lenh kiem tra:

```bash
npm run typecheck
npm run build
npm run start
```

## Cau truc chinh

```text
src/
  app/                    # App Router va cac public route
  components/
    layout/               # Header, footer, SubHero, logo
    pages/                # Component cho trang listing/detail
    sections/             # Section trang chu
    ui/                   # Button, Card, Badge, Section...
  content/                # Du lieu tinh, se thay bang service/CMS sau nay
  lib/
    i18n/                 # Xu ly noi dung vi/en
    seo.ts                # Metadata, canonical, Open Graph
public/                   # Hinh anh va tai nguyen tinh
demo/                     # HTML demo goc
```

## Public routes

- `/` - Trang chu
- `/ve-vea` - Tong quan VEA Group
- `/ve-vea/cau-chuyen` - Cau chuyen VEA
- `/ve-vea/cong-ty` - 5 cong ty thanh vien
- `/ve-vea/mo-hinh` - Mo hinh van hanh
- `/ve-vea/tam-nhin` - Tam nhin va Su menh
- `/he-sinh-thai` - He sinh thai va cac nen tang
- `/tin-tuc` - Danh sach tin tuc
- `/tin-tuc/[slug]` - Chi tiet bai viet
- `/thanh-tuu` - Thanh tuu va cot moc
- `/tuyen-dung` - Danh sach vi tri tuyen dung
- `/tuyen-dung/[slug]` - Chi tiet vi tri
- `/hop-tac` - Hinh thuc hop tac
- `/doi-tac` - Mang luoi doi tac
- `/lien-he` - Form lien he

`/admin` chi la dashboard demo noi bo va da dat `noindex, nofollow`.

## Noi dung va component dung chung

- `src/components/layout/sub-hero.tsx`: khung hero dung chung cho cac trang cap hai.
- `src/content/vea-demo.ts`: noi dung trang chu.
- `src/content/about.ts`: cau chuyen, mo hinh va tam nhin.
- `src/content/companies.ts`: du lieu 5 cong ty thanh vien.
- `src/content/platforms.ts`: danh sach nen tang va nhom he sinh thai.
- `src/content/news.ts`: 8 bai viet demo.
- `src/content/jobs.ts`: 6 vi tri tuyen dung demo.
- `src/content/partners.ts`: doi tac, nhan hang va cac track hop tac.

Khi them backend, UI nen tiep tuc doc du lieu qua cac module content/service thay vi hardcode trong component.

## SEO hien tai

- Metadata va canonical theo tung route.
- Open Graph metadata cho site.
- `robots.txt` va `sitemap.xml` duoc sinh boi App Router.
- Bai viet va vi tri tuyen dung co route detail de co URL crawl duoc.

## Bien moi truong

Tao `.env.local` tu `.env.example` khi can chay local:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Khong commit `.env.local`, API key, database credential hoac session secret.

## Huong tich hop backend

Khi duoc phe duyet giao dien, co the bo sung:

- Route Handlers trong `src/app/api` cho contact, news, jobs va partners.
- Server Actions cho form lien he va ung tuyen.
- Database/CMS service thay cho du lieu trong `src/content`.
- Authentication va RBAC cho `/admin`.
- Validation, rate limit, audit log va email/CRM integration.
