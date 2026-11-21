import { IMAGES } from "./siteConfig";

export interface ServiceAsset {
  slug: string;
  shortTitle: string;
  title: string;
  heroHook: string;
  category: string;
  badge?: string;
  image: string;
  summary: string;
  description: string[];
  deliverables: string;
  platforms: string;
  idealFor: string;
  benefits: { title: string; detail: string }[];
  gallery: string[];
}

export const SERVICE_ASSETS: ServiceAsset[] = [
  {
    slug: "meta-ads",
    shortTitle: "Meta Ads (IG & FB)",
    title: "Meta Ads — Instagram & Facebook Advertising",
    heroHook: "Turn Daily Instagram & Facebook Scroll Time Into Paying Customers",
    category: "Performance Ads",
    image: IMAGES.services.metaAds,
    summary:
      "ROI-focused Instagram & Facebook ad campaigns engineered for local store footfall, instant lead forms, WhatsApp clicks, and D2C sales.",
    description: [
      "Running boosted posts wastes ad budget. At AD Wala, we architect full-funnel Meta Ads inside Business Manager — combining hyper-local radius targeting, lookalike audiences, pixel/CAPI tracking, and continuous A/B creative testing.",
      "Whether your goal is walk-in retail customers, clinic bookings, real estate site visits, or WhatsApp sales conversations, our media buyers optimize every rupee for lowest cost-per-lead and highest ROAS.",
    ],
    deliverables: "Campaign setup, audience research, 8–12 ad creatives/mo, pixel tracking & weekly ROAS reports",
    platforms: "Instagram Feed, Instagram Reels, Stories, Facebook Feed & Click-to-WhatsApp Ads",
    idealFor: "Local businesses, retail stores, clinics, real estate, jewellery, salons & D2C brands",
    benefits: [
      {
        title: "Hyper-Local Pin-Code Targeting",
        detail: "Reach real buyers within 3–25 km of your shop or across entire target cities.",
      },
      {
        title: "Click-to-WhatsApp & Lead Forms",
        detail: "Send hot prospects directly into your WhatsApp Auto-Bot or instant CRM lead sheet.",
      },
      {
        title: "Winning Creative Testing",
        detail: "We test multiple Reel hooks, carousels, and offers so ad fatigue never kills performance.",
      },
      {
        title: "Transparent Live Reporting",
        detail: "Crystal-clear weekly reports on reach, leads, cost-per-lead, and revenue impact.",
      },
    ],
    gallery: [IMAGES.services.metaAds, IMAGES.services.reelsVideo, IMAGES.services.whatsappBot],
  },
  {
    slug: "social-setup-monetization",
    shortTitle: "IG & FB Setup & Monetization",
    title: "Instagram & Facebook Setup & Monetization",
    heroHook: "Professional Social Storefronts Built to Convert & Monetize",
    category: "Core Service",
    image: IMAGES.services.socialSetup,
    summary:
      "Complete Instagram & Facebook Business page setup, branding, catalog integration, and monetization growth strategies that attract customers.",
    description: [
      "First impressions happen on your Instagram bio and Facebook page before a customer ever calls you. We build conversion-ready business accounts from scratch — configuring Meta Business Suite, keyword-rich bios, branded highlight covers, CTA buttons, and product catalogs.",
      "Beyond setup, we structure your content and eligibility roadmap for Meta monetization features, brand partnerships, and organic discovery so your pages actively generate revenue and recurring customers.",
    ],
    deliverables: "Complete IG & FB business architecture, Business Manager verification, highlights, catalog & monetization audit",
    platforms: "Instagram Professional, Facebook Business Page & Meta Business Suite",
    idealFor: "New businesses, local showrooms, creators, service founders & growing brands",
    benefits: [
      {
        title: "Conversion-Ready Profile Makeover",
        detail: "Clear positioning, action buttons, WhatsApp links, and cohesive brand grid aesthetic.",
      },
      {
        title: "Monetization & Growth Readiness",
        detail: "Structured compliance, consistent reach mechanics, and audience-building sprints.",
      },
      {
        title: "Meta Commerce & Catalog Setup",
        detail: "Showcase products & services neatly inside Instagram & Facebook shops.",
      },
      {
        title: "Account Security & Ownership",
        detail: "Proper Business Manager roles, 2FA protection, and clean ad-account linking.",
      },
    ],
    gallery: [IMAGES.services.socialSetup, IMAGES.hero1, IMAGES.services.brandStrategy],
  },
  {
    slug: "content-reels-production",
    shortTitle: "Posts & Reels Videos",
    title: "Social Media Posts & Reels Video Creation",
    heroHook: "Ready-to-Post Graphics & Viral-Style Reels Made for Your Brand",
    category: "Creative Studio",
    image: IMAGES.services.reelsVideo,
    summary:
      "Custom static posts, educational carousels, festive creatives, and high-retention Reels videos delivered ready for your social channels.",
    description: [
      "Consistent, high-quality visuals separate trusted brands from ignored pages. Our in-house designers and video editors produce scroll-stopping static posts, offer banners, carousels, and crisp short-form Reels tailored to your brand voice.",
      "Every creative is delivered on a monthly content calendar — complete with hooks, captions, trending audio direction, and hashtags — so you can publish effortlessly or let AD Wala handle scheduled posting.",
    ],
    deliverables: "12–30 custom posts/carousels + 8–16 edited Reels/videos per month + captions & calendar",
    platforms: "Instagram Reels, Posts, Stories, Facebook Video & YouTube Shorts",
    idealFor: "Businesses wanting a premium, active daily social presence without hiring an in-house team",
    benefits: [
      {
        title: "Scroll-Stopping Reels Editing",
        detail: "Fast-paced cuts, dynamic captions, color grading, and strong 3-second visual hooks.",
      },
      {
        title: "Cohesive Brand Design System",
        detail: "Consistent typography, colors, and layouts that make your brand instantly recognizable.",
      },
      {
        title: "Festive & Offer Campaigns Included",
        detail: "Timely promotional banners for Diwali, Navratri, seasonal sales, and launches.",
      },
      {
        title: "Ready-to-Upload Delivery",
        detail: "Organized monthly folders or automated publishing straight to your accounts.",
      },
    ],
    gallery: [IMAGES.services.reelsVideo, IMAGES.hero2, IMAGES.services.socialSetup],
  },
  {
    slug: "google-business-profile",
    shortTitle: "Google Business Profile",
    title: "Google Business Profile (GMB) Management",
    heroHook: "Rank Top-3 on Google Maps & Capture High-Intent Local Calls",
    category: "New Service",
    badge: "NEW",
    image: IMAGES.services.googleBusiness,
    summary:
      "Complete Google Business Profile optimization, local SEO ranking, weekly posts, review management, and call/direction growth.",
    description: [
      "When customers search 'best [your service] near me', they call the top 3 businesses on Google Maps. Our new Google Business Profile Management service optimizes every ranking signal — categories, local keywords, geo-tagged photos, Q&As, and weekly updates.",
      "We also set up systematic review-generation links and professional responses so your 5-star reputation converts searchers into instant phone calls and store visits.",
    ],
    deliverables: "Profile audit & verification, keyword optimization, weekly GMB posts, photo updates & review replies",
    platforms: "Google Business Profile, Google Maps Local Pack & Local Search",
    idealFor: "Clinics, showrooms, restaurants, real estate offices, coaching centers & local services",
    benefits: [
      {
        title: "Google Maps Top-3 Ranking Focus",
        detail: "Structured local SEO signals to outrank nearby competitors for buyer-intent searches.",
      },
      {
        title: "5-Star Review Growth System",
        detail: "Easy QR/WhatsApp review links plus timely, keyword-smart replies to every review.",
      },
      {
        title: "Suspension Recovery & Protection",
        detail: "Strict policy compliance so your listing stays verified and safe from competitor spam.",
      },
      {
        title: "Monthly Calls & Direction Insights",
        detail: "Track exact phone calls, website clicks, and Google Maps direction requests every month.",
      },
    ],
    gallery: [IMAGES.services.googleBusiness, IMAGES.about2, IMAGES.services.metaAds],
  },
  {
    slug: "whatsapp-marketing-autobot",
    shortTitle: "WhatsApp Marketing & Auto-Bot",
    title: "WhatsApp Marketing & 24/7 Auto-Bot Automation",
    heroHook: "Automate Replies, Broadcast Offers & Close Leads on WhatsApp 24/7",
    category: "New Service",
    badge: "NEW",
    image: IMAGES.services.whatsappBot,
    summary:
      "Official WhatsApp Business automation, custom 24/7 interactive chatbots, promotional broadcasts, and Meta-Ad-to-WhatsApp lead flows.",
    description: [
      "In India, customers prefer messaging on WhatsApp over filling long forms. Our new WhatsApp Marketing & Auto-Bot service builds smart, interactive WhatsApp chatbots that greet leads instantly, share brochures/price lists, qualify buyer requirements, and book appointments even at 2 AM.",
      "Pair your Auto-Bot with Click-to-WhatsApp Meta Ads and targeted festival/offer broadcasts to turn past enquiries into repeat buyers automatically.",
    ],
    deliverables: "Custom WhatsApp Auto-Bot flow, catalog/brochure triggers, broadcast campaigns & CRM sync",
    platforms: "WhatsApp Business API, Automated Chatbots & Click-to-WhatsApp Meta Ads",
    idealFor: "High-enquiry businesses, e-commerce, clinics, coaching, real estate & local retailers",
    benefits: [
      {
        title: "Zero Missed Leads (24/7 Auto-Reply)",
        detail: "Respond to every Instagram, Facebook, and website lead in under 3 seconds.",
      },
      {
        title: "Interactive Menu & Brochure Bot",
        detail: "Let customers tap buttons to see services, pricing, location pins, or book a call.",
      },
      {
        title: "High-Open-Rate Broadcasts",
        detail: "98% open rates on seasonal offers, new arrivals, and reminder campaigns.",
      },
      {
        title: "Automated Follow-Up Drips",
        detail: "Nurture undecided prospects automatically over 3, 7, and 15 days until they convert.",
      },
    ],
    gallery: [IMAGES.services.whatsappBot, IMAGES.hero3, IMAGES.services.leadFunnels],
  },
  {
    slug: "lead-generation-funnels",
    shortTitle: "Lead Generation Funnels",
    title: "End-to-End Lead Generation Funnels",
    heroHook: "Connect Meta Ads, Landing Pages & WhatsApp Bots Into One Sales Engine",
    category: "Growth Systems",
    image: IMAGES.services.leadFunnels,
    summary:
      "High-converting landing pages, automated lead capture pipelines, and retargeting systems built to multiply customer conversions.",
    description: [
      "Great ads need an equally strong conversion journey. We connect your Instagram & Facebook Ads to fast, persuasive landing pages, instant lead sheets, and WhatsApp Auto-Bot follow-ups.",
      "Every lead is tracked from first impression to closed sale so you always know exactly which ad creative brought your best customers.",
    ],
    deliverables: "Conversion landing page, lead form automation, retargeting sequences & lead tracker",
    platforms: "Meta Ads + Web Landing Pages + WhatsApp Auto-Bot + Google Sheets/CRM",
    idealFor: "High-ticket services, real estate projects, B2B suppliers & aesthetic clinics",
    benefits: [
      {
        title: "Higher Lead Quality",
        detail: "Smart qualifying questions filter out window shoppers before they reach your sales team.",
      },
      {
        title: "Instant Team Notifications",
        detail: "Real-time WhatsApp and email alerts the moment a new hot enquiry arrives.",
      },
      {
        title: "Multi-Touch Retargeting",
        detail: "Re-engage page visitors and video viewers with testimonials and limited-time offers.",
      },
      {
        title: "Predictable Monthly Pipeline",
        detail: "Scalable cost-per-lead models you can dial up whenever you want more business.",
      },
    ],
    gallery: [IMAGES.services.leadFunnels, IMAGES.services.metaAds, IMAGES.concept1],
  },
  {
    slug: "brand-content-strategy",
    shortTitle: "Brand Content Strategy",
    title: "Brand Positioning & Monthly Content Strategy",
    heroHook: "Stand Out From Local Competitors With a Clear Digital Voice",
    category: "Strategy",
    image: IMAGES.services.brandStrategy,
    summary:
      "Competitor research, monthly content calendars, Reels scripting, and brand identity systems tailored to win attention online.",
    description: [
      "Random posting doesn't build a memorable brand. AD Wala audits your competitors, defines your strongest customer hooks, and creates a structured 30-day content blueprint balancing education, social proof, behind-the-scenes Reels, and direct sales offers.",
      "Your business shows up with agency-grade consistency across Instagram, Facebook, Google Business, and WhatsApp.",
    ],
    deliverables: "30-day content roadmap, Reels script bank, visual guidelines & competitor audit",
    platforms: "Omnichannel — Instagram, Facebook, Google Business & WhatsApp",
    idealFor: "Ambitious founders scaling from word-of-mouth to market-leading digital brand",
    benefits: [
      {
        title: "Competitor Gap Analysis",
        detail: "Identify exactly what top players in your niche are missing and own that angle.",
      },
      {
        title: "Hook & Script Playbooks",
        detail: "Done-for-you Reels talking points that make shooting videos quick and effortless.",
      },
      {
        title: "Consistent Visual Authority",
        detail: "Cohesive templates and messaging that command premium customer trust.",
      },
      {
        title: "Quarterly Growth Reviews",
        detail: "Data-backed adjustments every month based on top-performing posts and ads.",
      },
    ],
    gallery: [IMAGES.services.brandStrategy, IMAGES.about1, IMAGES.concept2],
  },
];

export function getServiceBySlug(slug: string): ServiceAsset | undefined {
  return SERVICE_ASSETS.find((s) => s.slug === slug);
}
