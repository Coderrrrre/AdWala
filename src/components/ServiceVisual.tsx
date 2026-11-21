import { Users, ArrowDown } from "lucide-react";
import { IMAGES } from "../data/siteConfig";

/* =========================================================================
 * 1. HERO STAGGERED 3 STORYTELLING VISUALS — WHO WE ARE & WHAT WE CREATE
 *    1) Reels & Video Production
 *    2) Social Media Post Design & Creative Studio
 *    3) Instagram & Meta Setup, Ads & Monetization
 * ========================================================================= */
export function HeroPlatformVisual({
  variant,
}: {
  variant: "meta" | "google" | "whatsapp";
}) {
  if (variant === "meta") {
    return (
      <div className="relative w-full h-full bg-[#111111] overflow-hidden">
        <img
          src={IMAGES.hero1}
          alt="AdWala Reels and Video Content Production Studio"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-2">
          <div>
            <span className="inline-block px-2 py-0.5 bg-[#F5B800] text-[#111111] text-[9.5px] font-bold uppercase tracking-[0.16em] mb-1">
              VIDEO &amp; REELS STUDIO
            </span>
            <p className="text-[12.5px] font-medium text-white leading-tight">
              Scroll-Stopping Reels &amp; Promo Videos
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "google") {
    return (
      <div className="relative w-full h-full bg-[#111111] overflow-hidden">
        <img
          src={IMAGES.hero2}
          alt="AdWala Social Media Post Creation and Graphic Design"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-2">
          <div>
            <span className="inline-block px-2 py-0.5 bg-[#F5B800] text-[#111111] text-[9.5px] font-bold uppercase tracking-[0.16em] mb-1">
              POST &amp; CREATIVE DESIGN
            </span>
            <p className="text-[12.5px] font-medium text-white leading-tight">
              Daily Branded Posts &amp; Ad Creatives
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-[#111111] overflow-hidden">
      <img
        src={IMAGES.hero3}
        alt="AdWala Instagram and Meta Business Setup, Ads and Monetization"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-2">
        <div>
          <span className="inline-block px-2 py-0.5 bg-[#F5B800] text-[#111111] text-[9.5px] font-bold uppercase tracking-[0.16em] mb-1">
            INSTA &amp; META MONETIZATION
          </span>
          <p className="text-[12.5px] font-medium text-white leading-tight">
            Account Setup, Meta Ads &amp; Customer Growth
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
 * 2. SERVICE CARDS — USER-SELECTED PLATFORM IMAGES FOR ALL SERVICES
 * ========================================================================= */
export function ServiceCardVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "meta-ads":
      return (
        <div className="relative w-full h-full bg-white flex items-center justify-center overflow-hidden">
          <img
            src="/images/service-meta-ads.jpg"
            alt="Meta Ads Manager"
            className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      );

    case "social-setup-monetization":
      return (
        <div className="relative w-full h-full bg-[#1078f0] overflow-hidden">
          <img
            src="/images/service-ig-fb.jpg"
            alt="Instagram and Facebook Setup & Monetization"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      );

    case "content-reels-production":
      return (
        <div className="relative w-full h-full bg-[#fcebd5] overflow-hidden">
          <img
            src="/images/service-posts-reels.jpg"
            alt="Social Media Posts and Reels Videos"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      );

    case "google-business-profile":
      return (
        <div className="relative w-full h-full bg-[#3665e8] overflow-hidden">
          <img
            src="/images/service-google-business.jpg"
            alt="Google Business Profile Management"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      );

    case "whatsapp-marketing-autobot":
      return (
        <div className="relative w-full h-full bg-[#a8ddb5] overflow-hidden">
          <img
            src="/images/service-whatsapp.jpg"
            alt="WhatsApp Marketing & Auto-Bot"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      );

    case "lead-generation-funnels":
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#111111] via-[#1b1914] to-[#2a220d] p-5 flex flex-col justify-between overflow-hidden text-white">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5B800]">
              CONVERSION FUNNEL
            </span>
            <Users className="w-5 h-5 text-[#F5B800]" />
          </div>

          <div className="space-y-1.5 my-1">
            <div className="bg-white/10 border border-white/15 rounded px-3.5 py-2 flex justify-between items-center text-[11.5px]">
              <span>1. Meta &amp; Google Ads Reach</span>
              <strong className="text-white">50,000+</strong>
            </div>
            <div className="flex justify-center">
              <ArrowDown className="w-3.5 h-3.5 text-[#F5B800]" />
            </div>
            <div className="mx-3 bg-[#F5B800]/20 border border-[#F5B800]/50 rounded px-3.5 py-2 flex justify-between items-center text-[11.5px]">
              <span>2. WhatsApp Auto-Bot Leads</span>
              <strong className="text-[#F5B800]">1,200+</strong>
            </div>
            <div className="flex justify-center">
              <ArrowDown className="w-3.5 h-3.5 text-[#34d399]" />
            </div>
            <div className="mx-6 bg-[#34d399]/20 border border-[#34d399]/50 rounded px-3.5 py-2 flex justify-between items-center text-[11.5px]">
              <span>3. Paying Customers</span>
              <strong className="text-[#34d399]">280+ Sales</strong>
            </div>
          </div>
        </div>
      );

    default:
      // brand-content-strategy
      return (
        <div className="relative w-full h-full bg-[#00b0ff] overflow-hidden">
          <img
            src="/images/service-brand-strategy.png"
            alt="Brand Content Strategy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      );
  }
}
