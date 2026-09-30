# Thinkerfint Website

เว็บไซต์ของ Thinkerfint (LogicTrust) โซลูชัน Digital Lending สำหรับธนาคาร บริษัทลีสซิ่ง และผู้ให้สินเชื่อที่ไม่ใช่ธนาคาร

ออกแบบตาม Figma: [Thinker website SEO](https://www.figma.com/design/u9EEYRjZwHDkMf3S4ksbuY/Thinker-website-SEO?node-id=26-3478)

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (style `base-nova` บน [Base UI](https://base-ui.com/))
- [lucide-react](https://lucide.dev/) สำหรับไอคอน
- ฟอนต์ IBM Plex Sans Thai ผ่าน `next/font`

## เริ่มต้นใช้งาน

ต้องมี Node.js 20 ขึ้นไป

```bash
cd web
npm install
npm run dev
```

เปิด http://localhost:3000

| คำสั่ง | ใช้ทำอะไร |
| --- | --- |
| `npm run dev` | รัน dev server |
| `npm run build` | build สำหรับ production |
| `npm run start` | รัน production build |
| `npm run lint` | ตรวจโค้ดด้วย ESLint |

## โครงสร้างโปรเจกต์

```
web/
├── public/
│   ├── images/            # รูปข่าวใน Newsroom
│   └── logos/             # โลโก้ LogicTrust, โลโก้ลูกค้า, ไอคอนโซเชียล
└── src/
    ├── app/
    │   ├── layout.tsx     # ฟอนต์ และ metadata (SEO)
    │   ├── page.tsx       # หน้า Home ประกอบจาก sections
    │   └── globals.css    # ธีมสี / design tokens
    ├── components/
    │   ├── sections/      # แต่ละส่วนของหน้า Home
    │   ├── site/          # Header, Footer, Logo, Container, SectionHeading
    │   └── ui/            # คอมโพเนนต์จาก shadcn/ui
    └── lib/utils.ts
```

### Sections ในหน้า Home

| ไฟล์ | เนื้อหา |
| --- | --- |
| `hero.tsx` | Hero, การ์ด Lending workflow และตัวเลขสถิติ |
| `client-logos.tsx` | โลโก้ลูกค้า |
| `capabilities.tsx` | Product solutions (6 การ์ด) |
| `audience.tsx` | Built for every lender |
| `lifecycle.tsx` | ขั้นตอน 01–05 |
| `newsroom.tsx` | ข่าว / case study |
| `faq.tsx` | คำถามที่พบบ่อย (Accordion) |
| `cta.tsx` | Book a demo |

เนื้อหาของแต่ละส่วน (ข้อความ ข่าว FAQ) เป็น array อยู่ด้านบนของไฟล์นั้นๆ แก้ข้อความได้ที่นั่นโดยตรง

## ธีมและสี

สีจาก Figma ถูกผูกกับตัวแปรของ shadcn ใน `src/app/globals.css` คอมโพเนนต์จึงใช้ class อย่าง `bg-primary` หรือ `text-muted-foreground` ได้เลย

| Token | สี | ใช้ที่ |
| --- | --- | --- |
| `primary` | `#6c2aff` | ปุ่มหลัก ลิงก์ eyebrow |
| `foreground` / `ink` | `#12151c` | ตัวอักษรหลัก พื้น Hero และ Footer |
| `muted-foreground` | `#586a8a` | ข้อความรอง |
| `muted` | `#f3f4f7` | พื้น section สลับสี |
| `background` | `#f9fafb` | พื้นหลังหลัก |
| `border` | `#e4e7ec` | เส้นขอบการ์ด |
| `cyan` | `#69e9fc` | accent บน Hero |

## เพิ่มคอมโพเนนต์ shadcn/ui

```bash
cd web
npx shadcn@latest add <component>
```

ดูรายการคอมโพเนนต์ได้ที่ https://ui.shadcn.com/docs/components

## สิ่งที่ยังต้องทำ

- [ ] ใส่ลิงก์จริงให้ Learn More, Read story, Privacy, Terms และเมนูใน Footer (ตอนนี้ชี้ไปที่ `#`)
- [ ] ตรวจคำตอบ FAQ ข้อ 2–4 (ใน Figma ยังไม่มีเนื้อหา)
- [ ] เปลี่ยนโลโก้ลูกค้าที่ซ้ำกัน (KKP ใช้ 3 ช่อง)
- [ ] ทำหน้าอื่นๆ: Products, Services, Newsroom, About
