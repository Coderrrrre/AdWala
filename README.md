# AdWala — Meta Ads Expert | Digital Marketing & Automation Agency

**More Leads. More Growth.**  
Full-stack digital marketing agency website for **AdWala** (`@adwala45`), featuring:

- **Frontend:** React 19, Vite 6, Tailwind CSS v4, TypeScript
- **Motion & Interactive UI:** GSAP + ScrollTrigger (pinned horizontal scroll, opposing parallax, curtain reveals, animated counters, magnetic cursor), Lenis smooth scroll, Three.js interactive 3D hero canvas, Swiper carousels, and Fancybox lightboxes
- **Backend:** NestJS 11 REST API (`server/`) with persistent JSON lead & quote storage
- **Core Services:** Meta Ads (Instagram & Facebook), Instagram & Facebook Setup & Monetization, Posts & Reels Video Production, Google Business Profile (GMB) Management, WhatsApp Marketing & 24/7 Auto-Bot, Lead Generation Funnels, and Brand Content Strategy
- **Interactive Tool:** Live Ad & Auto-Bot Preview Studio (`/mockup`)

## Quick Start

### 1. Frontend (React + Vite)
```bash
npm install
npm run dev
```
Runs on `http://127.0.0.1:5173` (proxies `/api/*` to the NestJS backend on port `4000`).

### 2. Production Build (`dist/`)
```bash
npm run build
```

### 3. Backend (NestJS API)
```bash
cd server
npm install
npm run build
npm run start
```
Runs on `http://127.0.0.1:4000` (`GET /api/health`, `POST /api/leads/contact`, `POST /api/leads/quote`, `POST /api/leads/partner`, `POST /api/leads/career`, `POST /api/payments/initiate`, `GET /api/dashboard/stats`).
