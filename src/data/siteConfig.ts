export interface NavDropdownItem {
  label: string;
  to: string;
}

export interface NavItem {
  label: string;
  to?: string;
  children?: NavDropdownItem[];
}

export interface GrowthMetric {
  label: string;
  locations: string;
  count: string;
  numericTarget: number;
  suffix: string;
  branchSlug?: string;
}

export interface BranchInfo {
  slug: string;
  city: string;
  title: string;
  tagline: string;
  clientCount: string;
  reachNote: string;
  intro: string;
  secondaryCopy: string;
  phone: string;
  email: string;
  keyZones: string[];
  formatsAvailable: string[];
  heroImage: string;
}

export const SITE_CONFIG = {
  // === ADWALA — CENTRAL AGENCY CONFIGURATION ===
  brandShort: "AdWala",
  brandSub: "META ADS EXPERT",
  brandFull: "AdWala",
  tagline: "More Leads. More Growth.",
  instagramHandle: "@adwala45",
  foundedYears: "8+",
  headquartersCity: "Ahmedabad",
  region: "Gujarat",
  email: "hello@adwala.in",
  phones: ["+91 XXXXXXXX99"],
  whatsappNumber: "919999999999",
  footerBlurb:
    "AdWala (Meta Ads Expert) helps businesses generate more leads and growth through Instagram & Facebook setup & monetization, Reels & post production, Meta Ads, Google Business Profile management, and 24/7 WhatsApp Auto-Bot automation.",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://www.instagram.com/adwala45/",
    youtube: "https://youtube.com",
  },
  copyright: `© ${new Date().getFullYear()} AdWala — Meta Ads Expert. All Rights Reserved.`,
};

export const IMAGES = {
  // 100% Visually Verified Hero Photos: Video/Reels Editing, Post/Creative Design (Ps/Ai/Pr/Ae), Facebook & Instagram Business Setup
  hero1:
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=85",
  hero2:
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=85",
  hero3:
    "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=85",
  about1:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85",
  about2:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=85",
  about3:
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=900&q=85",
  about4:
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=85",
  videoBg:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=85",
  concept1:
    "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1100&q=85",
  concept2:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85",
  contactCard:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=85",
  services: {
    metaAds: "/images/service-meta-ads.jpg",
    socialSetup: "/images/service-ig-fb.jpg",
    reelsVideo: "/images/service-posts-reels.jpg",
    googleBusiness: "/images/service-google-business.jpg",
    whatsappBot: "/images/service-whatsapp.jpg",
    leadFunnels:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=85",
    brandStrategy: "/images/service-brand-strategy.png",
  },
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "About Us",
    children: [
      { label: "About AdWala", to: "/about" },
      { label: "Our Journey", to: "/our-history" },
      { label: "Culture & Work Ethics", to: "/culture-and-work-ethics" },
      { label: "What Makes Us Different", to: "/what-makes-us-different" },
      { label: "Clients", to: "/clients" },
      { label: "Team", to: "/team" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "All Growth Services", to: "/services" },
      { label: "Meta Ads (Instagram & Facebook)", to: "/services/meta-ads" },
      { label: "Instagram & Facebook Setup & Monetization", to: "/services/social-setup-monetization" },
      { label: "Social Media Posts & Reels Videos", to: "/services/content-reels-production" },
      { label: "Google Business Profile Management", to: "/services/google-business-profile" },
      { label: "WhatsApp Marketing & Auto-Bot", to: "/services/whatsapp-marketing-autobot" },
      { label: "Lead Generation Funnels", to: "/services/lead-generation-funnels" },
      { label: "Brand Content Strategy", to: "/services/brand-content-strategy" },
    ],
  },
  {
    label: "Contact Us",
    children: [
      { label: "Get in Touch", to: "/contact" },
      { label: "Become a Partner", to: "/generate-revenue" },
      { label: "Jobs & Careers", to: "/careers" },
      { label: "Get Growth Quote", to: "/advertising-quote" },
    ],
  },
  {
    label: "Our Regions",
    children: [
      { label: "Surat Growth Desk", to: "/branches/surat" },
      { label: "Vadodara Growth Desk", to: "/branches/vadodara" },
      { label: "Rajkot Growth Desk", to: "/branches/rajkot" },
    ],
  },
  {
    label: "Resource Center",
    children: [
      { label: "Digital Growth Playbooks", to: "/resource-center" },
      { label: "Downloads & Rate Cards", to: "/downloads" },
      { label: "Blog & Case Insights", to: "/blog" },
    ],
  },
  {
    label: "Ad Preview",
    to: "/mockup",
  },
  {
    label: "Pay Online",
    to: "/pay-online",
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    id: "meta-setup",
    icon: "instagram",
    title: "Insta & FB Monetization",
    description:
      "Complete Instagram & Facebook business setup, profile optimization, shop catalog integration, and monetization readiness to attract real buyers.",
  },
  {
    id: "reels-posts",
    icon: "video",
    title: "Posts & Reels Production",
    description:
      "We script, design, and edit scroll-stopping posts, carousels, and short-form Reels ready to publish directly on your business social accounts.",
  },
  {
    id: "meta-ads",
    icon: "megaphone",
    title: "High-ROAS Meta Ads",
    description:
      "Laser-targeted Instagram & Facebook Ad campaigns engineered to drive store walk-ins, WhatsApp leads, DMs, and consistent customer growth.",
  },
  {
    id: "gmb-seo",
    icon: "map",
    title: "Google Business Profile",
    description:
      "End-to-end Google Business Page management — ranking your business in the Google Maps Top-3 pack, managing reviews, and boosting phone calls.",
  },
  {
    id: "whatsapp-bot",
    icon: "bot",
    title: "WhatsApp Auto-Bot",
    description:
      "Automated 24/7 WhatsApp chatbots, instant Meta-to-WhatsApp lead replies, broadcast offers, and automated customer follow-ups that never miss a lead.",
  },
  {
    id: "transparent-roi",
    icon: "chart",
    title: "Live ROI & SOP Tracking",
    description:
      "Weekly ad spend breakdowns, cost-per-lead audits, and dedicated account managers focused purely on real customer acquisition.",
  },
];

export const GROWTH_METRICS: GrowthMetric[] = [
  {
    label: "Active Clients",
    locations: "Gyms, Retail, Clinics, Salons & D2C",
    count: "350+",
    numericTarget: 350,
    suffix: "+",
  },
  {
    label: "Reels & Posts",
    locations: "Custom Creatives Delivered Monthly",
    count: "12000+",
    numericTarget: 12000,
    suffix: "+",
  },
  {
    label: "Meta Ad Leads",
    locations: "Instagram & Facebook Campaigns",
    count: "450K+",
    numericTarget: 450,
    suffix: "K+",
  },
  {
    label: "GMB Profiles",
    locations: "Ranked on Local Google Maps",
    count: "180+",
    numericTarget: 180,
    suffix: "+",
    branchSlug: "surat",
  },
  {
    label: "WhatsApp Bots",
    locations: "24/7 Automated Lead Flows",
    count: "210+",
    numericTarget: 210,
    suffix: "+",
    branchSlug: "vadodara",
  },
];

export const PARTNER_AGENCIES = [
  { name: "Meta Business", subtitle: "ADS & MONETIZATION" },
  { name: "Google Business", subtitle: "LOCAL MAPS SEO" },
  { name: "WhatsApp API", subtitle: "AUTO-BOT FLOWS" },
  { name: "Reels Studio", subtitle: "VIDEO PRODUCTION" },
  { name: "LeadFlow CRM", subtitle: "CONVERSION TRACKING" },
];

export const BRANCHES: BranchInfo[] = [
  {
    slug: "surat",
    city: "Surat",
    title: "AdWala Digital Growth Desk — Surat",
    tagline: "Textile, Jewellery & Local Retail Growth Specialists",
    clientCount: "110+ Active Brands",
    reachNote: "Meta Ads + WhatsApp Bots",
    intro:
      "Surat's fast-paced retail, textile, salon, diamond, and café businesses rely on daily Instagram visibility and instant WhatsApp enquiries. Our Surat growth desk pairs hyper-local Meta Ads with automated WhatsApp catalogs.",
    secondaryCopy:
      "From Reels strategy for Vesu and Adajan brands to Google Business Profile ranking across Ring Road showrooms, AdWala manages everything remotely and seamlessly.",
    phone: "+91 XXXXXXXX99",
    email: "hello@adwala.in",
    keyZones: [
      "Vesu & VIP Road Brands",
      "Adajan & Pal Showrooms",
      "Ring Road Textile Traders",
      "Piplod & Dumas Retail",
      "Varachha Jewellery & Clinics",
      "Citylight Cafes & Salons",
    ],
    formatsAvailable: [
      "Meta Ads (IG & FB)",
      "Reels & Post Production",
      "Google Business Management",
      "WhatsApp Auto-Bot",
      "Page Monetization",
    ],
    heroImage: IMAGES.hero1,
  },
  {
    slug: "vadodara",
    city: "Vadodara",
    title: "AdWala Digital Growth Desk — Vadodara",
    tagline: "Clinics, Education & Service Business Accelerators",
    clientCount: "85+ Active Brands",
    reachNote: "Google Maps + Lead Funnels",
    intro:
      "Vadodara's thriving healthcare clinics, coaching institutes, gyms, and real estate developers use AdWala to dominate Google Maps searches and turn Instagram Reels into booked appointments.",
    secondaryCopy:
      "Our Vadodara strategists run full-funnel Instagram/Facebook Ads linked directly to 24/7 WhatsApp booking bots so every enquiry gets answered in under 5 seconds.",
    phone: "+91 XXXXXXXX99",
    email: "hello@adwala.in",
    keyZones: [
      "Alkapuri & Race Course",
      "Fatehgunj Education Belt",
      "Akota & Gotri Clinics",
      "Manjalpur & Karelibaug",
      "Waghodia Road Enterprises",
      "Sayajigunj Commercial Hub",
    ],
    formatsAvailable: [
      "Google Business Profile SEO",
      "Meta Lead Ads",
      "WhatsApp Appointment Bots",
      "Monthly Reels & Posts",
      "Facebook Monetization",
    ],
    heroImage: IMAGES.hero2,
  },
  {
    slug: "rajkot",
    city: "Rajkot",
    title: "AdWala Digital Growth Desk — Rajkot",
    tagline: "Manufacturing, Jewellery & Regional D2C Growth",
    clientCount: "65+ Active Brands",
    reachNote: "B2B + B2C Social Growth",
    intro:
      "Rajkot's entrepreneurial manufacturers, auto dealers, jewellery houses, and local retail chains partner with AdWala to build authority on Instagram, Facebook, and Google Search.",
    secondaryCopy:
      "We deliver bilingual (English, Hindi & Gujarati) ad creatives, high-retention product Reels, Google Business review engines, and automated WhatsApp dealer-enquiry bots.",
    phone: "+91 XXXXXXXX99",
    email: "hello@adwala.in",
    keyZones: [
      "Kalavad Road Retail",
      "150ft Ring Road Showrooms",
      "Yagnik Road Clinics & Cafes",
      "Gondal Road Industrial Belt",
      "Saurashtra Regional Reach",
      "Morbi Highway Enterprises",
    ],
    formatsAvailable: [
      "Meta Ads & Retargeting",
      "WhatsApp Dealer Auto-Bot",
      "Google Business Management",
      "Product Reels & Posts",
      "Social Account Setup",
    ],
    heroImage: IMAGES.hero3,
  },
];
