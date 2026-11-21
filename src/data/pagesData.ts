import { IMAGES } from "./siteConfig";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const HISTORY_TIMELINE: TimelineEvent[] = [
  {
    year: "2018",
    title: "AD Wala Founded",
    description:
      "Launched with a simple mission: help local businesses get real customers from Facebook & Instagram instead of confusing vanity metrics.",
  },
  {
    year: "2020",
    title: "In-House Reels & Creative Production Studio",
    description:
      "Expanded into full post, carousel, and short-form video creation so clients receive ready-to-publish content every single month.",
  },
  {
    year: "2022",
    title: "Performance Meta Ads Desk",
    description:
      "Crossed 100+ active monthly retainers with dedicated Meta Ads buyers specializing in lead generation, walk-in traffic, and page monetization.",
  },
  {
    year: "2024",
    title: "Multi-City Gujarat Expansion",
    description:
      "Established regional growth hubs serving Ahmedabad, Surat, Vadodara, and Rajkot brands across retail, clinics, jewellery, and real estate.",
  },
  {
    year: "2026",
    title: "Google Business & WhatsApp Auto-Bot Division",
    description:
      "Launched dedicated Google Business Profile (GMB) local SEO management and 24/7 WhatsApp Auto-Bot marketing automation to complete the full customer engine.",
  },
];

export const CULTURE_PILLARS = [
  {
    number: "01",
    title: "Customers First, Vanity Second",
    description:
      "Likes don't pay bills. Every Reel, Meta Ad, GMB post, and WhatsApp bot flow is built to generate real enquiries and paying customers.",
  },
  {
    number: "02",
    title: "Done-For-You Execution",
    description:
      "Business owners are busy. We handle setup, creative design, video editing, ad targeting, and bot replies end-to-end.",
  },
  {
    number: "03",
    title: "Zero Hidden Ad Spend",
    description:
      "Clients own their Meta Ad accounts, pages, and Google listings 100% — with transparent weekly reporting on every rupee spent.",
  },
  {
    number: "04",
    title: "Speed & Automation",
    description:
      "Pairing instant Click-to-WhatsApp ads with 24/7 Auto-Bots ensures no lead waits hours for a reply.",
  },
  {
    number: "05",
    title: "Hyper-Local Creative Sense",
    description:
      "We understand regional buyer psychology, festive buying cycles, and bilingual English/Hindi/Gujarati hooks that actually convert.",
  },
  {
    number: "06",
    title: "Long-Term Growth Partnerships",
    description:
      "We don't sell one-month gimmicks — we build repeatable marketing engines that compound month after month.",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Aarav Patel",
    role: "Founder & Growth Director",
    department: "Strategy & Meta Ads",
    bio: "Performance marketer who has scaled 350+ local and D2C brands through Instagram, Facebook Ads, and conversion funnels.",
    initials: "AP",
  },
  {
    name: "Riya Shah",
    role: "Head of Social Media & Monetization",
    department: "Social & Content",
    bio: "Leads Instagram & Facebook business setup, page monetization frameworks, and monthly content calendars.",
    initials: "RS",
  },
  {
    name: "Devansh Mehta",
    role: "Creative Lead — Reels & Video",
    department: "Creative Studio",
    bio: "Directs high-retention short-form Reels, product edits, and ad creatives engineered to stop the scroll.",
    initials: "DM",
  },
  {
    name: "Kunal Joshi",
    role: "WhatsApp Automation Architect",
    department: "WhatsApp Auto-Bots",
    bio: "Builds 24/7 interactive WhatsApp chatbots, API broadcast workflows, and instant Meta-to-WhatsApp lead pipelines.",
    initials: "KJ",
  },
  {
    name: "Priya Trivedi",
    role: "Local SEO & Google Business Lead",
    department: "Google Business (GMB)",
    bio: "Specializes in ranking clinics, showrooms, and local businesses in the Google Maps Top-3 local pack.",
    initials: "PT",
  },
  {
    name: "Harshil Desai",
    role: "Client Success Manager",
    department: "Account Growth",
    bio: "Ensures weekly ROI reviews, quick creative turnarounds, and smooth coordination across all regional clients.",
    initials: "HD",
  },
];

export const CLIENT_CATEGORIES = [
  "All",
  "Retail & Fashion",
  "Clinics & Healthcare",
  "Real Estate",
  "Jewellery & Salons",
  "Food, Cafes & D2C",
] as const;

export const CLIENTS_LIST = [
  { name: "Zaveri Craft Jewels", category: "Jewellery & Salons", city: "Ahmedabad" },
  { name: "Aura Dental & Skin Studio", category: "Clinics & Healthcare", city: "Ahmedabad & Vadodara" },
  { name: "UrbanNest Realty", category: "Real Estate", city: "Surat & Ahmedabad" },
  { name: "Vastra Loom Boutique", category: "Retail & Fashion", city: "Surat" },
  { name: "BrewCraft Roasters", category: "Food, Cafes & D2C", city: "Ahmedabad" },
  { name: "Velvet Touch Salon & Spa", category: "Jewellery & Salons", city: "Vadodara" },
  { name: "CarePlus Ortho Clinic", category: "Clinics & Healthcare", city: "Rajkot" },
  { name: "Skyline Spaces", category: "Real Estate", city: "Ahmedabad" },
  { name: "Kutch Spice D2C", category: "Food, Cafes & D2C", city: "Pan-India" },
  { name: "Moda Menswear Studio", category: "Retail & Fashion", city: "Rajkot & Surat" },
  { name: "Glow Aesthetics Clinic", category: "Clinics & Healthcare", city: "Surat" },
  { name: "Saffron Sweets & Hampers", category: "Food, Cafes & D2C", city: "Gujarat" },
];

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "meta-ads-plus-whatsapp-autobot-double-leads",
    title: "How Pairing Meta Ads With a WhatsApp Auto-Bot Doubles Customer Conversions",
    date: "November 02, 2026",
    readTime: "4 min read",
    category: "WhatsApp Automation",
    image: IMAGES.services.whatsappBot,
    excerpt:
      "Most businesses lose 60% of Instagram & Facebook ad leads due to slow replies. Here is how a 24/7 WhatsApp Auto-Bot fixes that instantly.",
    content: [
      "When a local customer clicks your Instagram Reel ad at 10:30 PM asking for pricing or availability, waiting until the next afternoon to reply means they have already messaged two competitors.",
      "At AD Wala, we connect Click-to-WhatsApp Meta Ads directly to a smart WhatsApp Auto-Bot. Within 2 seconds, the bot greets the customer by name, shares a clean product brochure or service menu, captures their requirement, and books a callback or store visit.",
      "The result: faster lead qualification, zero missed inquiries on weekends, and up to 2x higher conversion rates from the exact same ad budget.",
    ],
  },
  {
    slug: "rank-top-3-google-business-profile-2026",
    title: "Google Business Profile Checklist: How to Rank Top-3 on Google Maps",
    date: "October 22, 2026",
    readTime: "5 min read",
    category: "Google Business (GMB)",
    image: IMAGES.services.googleBusiness,
    excerpt:
      "Your Google Business page is often your highest-intent free lead source. Follow these 5 proven local SEO habits to dominate 'near me' searches.",
    content: [
      "People searching on Google Maps already have their wallet ready — they are looking for a nearby clinic, showroom, salon, or service provider right now.",
      "To consistently appear in the Top-3 Map Pack, your profile needs exact primary & secondary categories, weekly keyword-aligned GMB posts, fresh real-location photographs, complete service listings, and a steady flow of authentic customer reviews with timely responses.",
      "AD Wala's Google Business Profile Management service handles every weekly update and review workflow so your phone rings consistently.",
    ],
  },
  {
    slug: "instagram-facebook-monetization-and-reels-growth",
    title: "Setting Up & Monetizing Your Business Instagram and Facebook Pages",
    date: "October 10, 2026",
    readTime: "4 min read",
    category: "Social Growth",
    image: IMAGES.services.reelsVideo,
    excerpt:
      "Why consistent, high-hook Reels paired with a properly configured Business Suite unlocks both organic reach and real buyer trust.",
    content: [
      "Posting occasional festival graphics is no longer enough to grow on Instagram or Facebook. Meta's algorithm rewards native short-form Reels with strong 3-second visual hooks, clear captions, and consistent publishing cadence.",
      "Before spending on ads, we optimize your bio, CTA links, highlights, and Meta Business Suite setup — then supply ready-to-post Reels and carousels every month so your brand builds authority and monetization eligibility effortlessly.",
    ],
  },
  {
    slug: "stop-boosting-posts-run-real-meta-ads",
    title: "Stop Pressing 'Boost Post': Why Proper Meta Ads Manager Saves 40% Budget",
    date: "September 28, 2026",
    readTime: "3 min read",
    category: "Meta Ads",
    image: IMAGES.services.metaAds,
    excerpt:
      "The Boost button optimizes for cheap likes instead of buyers. Learn how structured Ads Manager campaigns drive actual store visits and leads.",
    content: [
      "Instagram's Boost Post button is designed for simplicity, not ROI. It lacks granular placement control, conversion API tracking, custom retargeting audiences, and multi-creative A/B split testing.",
      "By moving campaigns into Meta Ads Manager with lead-generation and Click-to-WhatsApp objectives, AD Wala typically lowers cost-per-lead by 30–45% while improving buyer intent.",
    ],
  },
];

export const DOWNLOAD_ITEMS = [
  {
    id: "ad-wala-agency-deck",
    title: "AD Wala Services & Growth Packages 2026",
    category: "Agency Deck",
    size: "3.4 MB · Guide",
    description:
      "Full breakdown of Instagram & Facebook setup, Reels/Post retainers, Meta Ads management, Google Business SEO, and WhatsApp Auto-Bot packages.",
  },
  {
    id: "meta-ads-checklist",
    title: "High-ROAS Meta Ads Launch Checklist",
    category: "Meta Ads",
    size: "1.8 MB · Checklist",
    description:
      "Our internal pre-launch SOP covering Business Manager setup, Pixel/CAPI, audience layering, and winning Reel hooks.",
  },
  {
    id: "gmb-ranking-blueprint",
    title: "Google Business Profile Top-3 Ranking Blueprint",
    category: "Google Business",
    size: "2.2 MB · Playbook",
    description:
      "Step-by-step local SEO template for ranking retail stores, clinics, and service offices on Google Maps.",
  },
  {
    id: "whatsapp-bot-scripts",
    title: "15 High-Converting WhatsApp Auto-Bot Scripts",
    category: "WhatsApp Marketing",
    size: "1.5 MB · Templates",
    description:
      "Ready-to-use automated greeting, price-list, appointment booking, and follow-up message flows.",
  },
];

export const OPEN_ROLES = [
  {
    title: "Meta Ads Performance Specialist",
    location: "Ahmedabad HQ",
    type: "Full-Time",
    experience: "2–5 Years",
    summary:
      "Plan, launch, and optimize high-ROAS Instagram & Facebook Lead and Click-to-WhatsApp ad campaigns.",
  },
  {
    title: "Reels Video Editor & Motion Designer",
    location: "Ahmedabad / Remote",
    type: "Full-Time",
    experience: "1–4 Years",
    summary:
      "Edit crisp short-form Instagram Reels, product promos, and social ad creatives in Premiere / After Effects.",
  },
  {
    title: "WhatsApp Automation & CRM Specialist",
    location: "Ahmedabad / Surat",
    type: "Full-Time",
    experience: "1–3 Years",
    summary:
      "Design interactive WhatsApp Business API chatbot flows, broadcasts, and automated lead pipelines.",
  },
  {
    title: "Google Business Profile & Local SEO Executive",
    location: "Ahmedabad / Vadodara",
    type: "Full-Time",
    experience: "1–3 Years",
    summary:
      "Manage client GMB listings, local citations, weekly updates, review growth, and Maps ranking audits.",
  },
];
