import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";
import {
  Instagram,
  Video,
  Megaphone,
  MapPin,
  Bot,
  BarChart3,
  Play,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  SITE_CONFIG,
  IMAGES,
  WHY_CHOOSE_ITEMS,
  GROWTH_METRICS,
  PARTNER_AGENCIES,
} from "../data/siteConfig";
import { SERVICE_ASSETS } from "../data/servicesData";
import { SectionLabel } from "../components/SectionLabel";
import { HeroThreeCanvas } from "../components/HeroThreeCanvas";
import {
  HeroPlatformVisual,
  ServiceCardVisual,
} from "../components/ServiceVisual";

gsap.registerPlugin(ScrollTrigger);

function WhyIcon({ name }: { name: string }) {
  const cls = "w-9 h-9 text-[#C98C00] stroke-[1.5]";
  switch (name) {
    case "instagram":
      return <Instagram className={cls} />;
    case "video":
      return <Video className={cls} />;
    case "megaphone":
      return <Megaphone className={cls} />;
    case "map":
      return <MapPin className={cls} />;
    case "bot":
      return <Bot className={cls} />;
    default:
      return <BarChart3 className={cls} />;
  }
}

export function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const horizontalProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});

    const ctx = gsap.context(() => {
      // 1. HERO STAGGERED ENTRANCE
      gsap.from(".gsap-hero-text", {
        y: 34,
        opacity: 0,
        duration: 0.85,
        stagger: 0.09,
        ease: "power3.out",
      });

      gsap.from(".gsap-hero-photo", {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.95,
        stagger: 0.15,
        delay: 0.12,
        ease: "power3.out",
      });

      // 2. HERO CONTINUOUS SCRUB PARALLAX
      gsap.to(".gsap-hero-photo-1", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ".gsap-hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(".gsap-hero-photo-2", {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: ".gsap-hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.to(".gsap-hero-photo-3", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".gsap-hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // 3. ABOUT SECTION 4-PHOTO OPPOSING PARALLAX ORBIT
      gsap.fromTo(
        ".gsap-about-left-col",
        { y: 50 },
        {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: ".gsap-about-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
      gsap.fromTo(
        ".gsap-about-right-col",
        { y: -50 },
        {
          y: 50,
          ease: "none",
          scrollTrigger: {
            trigger: ".gsap-about-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      // 4. INNER-FRAME IMAGE PARALLAX SCRUB
      gsap.utils.toArray<HTMLElement>(".gsap-parallax-img").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -8, scale: 1.15 },
          {
            yPercent: 8,
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // 5. FULL-VIEWPORT VIDEO BANNER SCRUB ZOOM + SPLIT TEXT DRIFT
      gsap.fromTo(
        ".gsap-video-bg",
        { scale: 1.22, yPercent: -5 },
        {
          scale: 1.0,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: ".gsap-video-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        ".gsap-video-word-left",
        { x: 24 },
        {
          x: -24,
          ease: "none",
          scrollTrigger: {
            trigger: ".gsap-video-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        ".gsap-video-word-right",
        { x: -24 },
        {
          x: 24,
          ease: "none",
          scrollTrigger: {
            trigger: ".gsap-video-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      // 6. CONCEPT CURTAIN WIPE REVEAL (safe immediateRender: false so never stuck hidden!)
      gsap.fromTo(
        ".gsap-curtain-reveal",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.05,
          ease: "power3.inOut",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".gsap-curtain-reveal",
            start: "top 92%",
            once: true,
          },
        }
      );

      // 7. WHY-CHOOSE 6-CARD LIFT REVEAL (FIXED: always visible, smooth lift on scroll!)
      gsap.fromTo(
        ".gsap-why-card",
        { y: 34, opacity: 0.2 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".gsap-why-grid",
            start: "top 95%",
            once: true,
          },
        }
      );

      // 8. SIGNATURE PINNED HORIZONTAL SCROLL "OUR SERVICES"
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const pinSection = pinSectionRef.current;
        const track = horizontalTrackRef.current;
        if (!pinSection || !track) return;

        const getScrollDistance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth + 160);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinSection,
            start: "top top",
            end: () => `+=${getScrollDistance() + 260}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        tl.to(
          track,
          {
            x: () => -getScrollDistance(),
            ease: "none",
          },
          0
        );

        tl.to(".gsap-stroke-up", { y: -42, ease: "none" }, 0);
        tl.to(".gsap-stroke-down", { y: 42, ease: "none" }, 0);

        if (horizontalProgressRef.current) {
          tl.to(
            horizontalProgressRef.current,
            { scaleX: 1, ease: "none" },
            0
          );
        }
      });

      // 9. ANIMATED GROWTH COUNTERS
      gsap.utils.toArray<HTMLElement>(".gsap-counter").forEach((el) => {
        const target = Number(el.dataset.target || "0");
        const suffix = el.dataset.suffix || "";
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.round(obj.val).toLocaleString()}${suffix}`;
          },
        });
      });

      // Ensure ScrollTrigger positions recalculate cleanly after fonts/images settle
      const timer = setTimeout(() => ScrollTrigger.refresh(), 350);
      return () => clearTimeout(timer);
    }, pageRef);

    return () => {
      Fancybox.unbind("[data-fancybox]");
      Fancybox.close();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={pageRef}>
      {/* 1. SIGNATURE STAGGERED 3-CARD PLATFORM HERO (Meta Ads · Google Business & Ads · WhatsApp Auto-Bot) */}
      <section className="gsap-hero-section relative bg-editorial-grid overflow-hidden min-h-[calc(100vh-76px)] flex items-center">
        <HeroThreeCanvas />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Typography Column */}
          <div className="lg:col-span-5 px-6 sm:px-10 lg:pl-24 lg:pr-6 py-16 lg:py-24">
            <div className="gsap-hero-text">
              <SectionLabel text={`${SITE_CONFIG.brandFull} · ${SITE_CONFIG.brandSub}`} />
            </div>
            <h1 className="gsap-hero-text text-[38px] sm:text-[48px] xl:text-[56px] leading-[1.13] tracking-[0.01em] uppercase text-[#111111]">
              <span className="font-medium block">MORE LEADS.</span>
              <span className="font-medium block">
                MORE <span className="text-[#D49600]">GROWTH.</span>
              </span>
              <span className="font-extralight block">META ADS &amp;</span>
              <span className="font-extralight block">SOCIAL EXPERT</span>
            </h1>
            <p className="gsap-hero-text mt-5 text-[14.5px] leading-relaxed text-[#5c5b57] max-w-md">
              Instagram &amp; Facebook setup &amp; monetization, Reels &amp; post
              production, Meta Ads, Google Business Profile SEO, and 24/7
              WhatsApp Auto-Bots — engineered for real customer growth.
            </p>
            <div className="gsap-hero-text mt-8 flex flex-wrap items-center gap-7">
              <Link
                to="/advertising-quote"
                data-cursor="START"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#111111] hover:bg-[#F5B800] text-white hover:text-[#111111] text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300"
              >
                GET IN TOUCH <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/mockup" data-cursor="TRY" className="editorial-link-btn">
                PREVIEW YOUR AD
              </Link>
            </div>
          </div>

          {/* Right Staggered 3 Storytelling Hero Visuals (Non-clickable showcase; navigation lives in OUR SERVICES below) */}
          <div className="lg:col-span-7 relative min-h-[460px] sm:min-h-[580px] lg:min-h-[680px] w-full px-6 pb-12 lg:p-0">
            <div className="hidden lg:block relative w-full h-[680px]">
              {/* Top-Right: Reels & Video Editing Studio */}
              <div className="gsap-hero-photo gsap-hero-photo-1 absolute top-0 right-0 w-[58%] h-[290px] overflow-hidden shadow-[0_22px_55px_rgba(17,17,17,0.16)] group border-b-2 border-[#F5B800]">
                <HeroPlatformVisual variant="meta" />
              </div>

              {/* Middle-Center: Post & Creative Design (Ps/Ai/Pr/Ae) */}
              <div className="gsap-hero-photo gsap-hero-photo-2 absolute top-[215px] left-[15%] w-[58%] h-[285px] overflow-hidden shadow-[0_26px_65px_rgba(17,17,17,0.18)] z-10 group">
                <HeroPlatformVisual variant="google" />
              </div>

              {/* Bottom-Left: Instagram & Meta Business Setup & Monetization */}
              <div className="gsap-hero-photo gsap-hero-photo-3 absolute bottom-0 left-0 w-[58%] h-[275px] overflow-hidden shadow-[0_26px_65px_rgba(17,17,17,0.22)] z-20 group border-l-2 border-[#F5B800]">
                <HeroPlatformVisual variant="whatsapp" />
              </div>
            </div>

            {/* Mobile Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:hidden">
              <div className="h-[240px] shadow-md overflow-hidden">
                <HeroPlatformVisual variant="meta" />
              </div>
              <div className="h-[240px] shadow-md overflow-hidden">
                <HeroPlatformVisual variant="google" />
              </div>
              <div className="h-[240px] shadow-md overflow-hidden">
                <HeroPlatformVisual variant="whatsapp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US — 4-Photo Opposing Parallax Orbit */}
      <section className="gsap-about-section py-28 lg:py-36 bg-[#faf9f6] overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="gsap-about-left-col hidden lg:flex lg:col-span-3 flex-col gap-7">
              <div className="aspect-[4/3] overflow-hidden shadow-md">
                <img
                  src={IMAGES.about1}
                  alt="AdWala digital marketing specialists"
                  className="gsap-parallax-img w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] w-4/5 ml-auto overflow-hidden shadow-md">
                <img
                  src={IMAGES.about2}
                  alt="Client growth planning team"
                  className="gsap-parallax-img w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 bg-editorial-lines border border-black/[0.07] px-8 py-14 sm:px-14 sm:py-16 text-center relative shadow-[0_20px_50px_rgba(17,17,17,0.04)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-[#F5B800]" />
              <SectionLabel text="ABOUT ADWALA" centered />
              <h2 className="text-[30px] sm:text-[38px] font-medium leading-tight text-[#111111] mb-6">
                Built to Turn Attention Into Real Customers
              </h2>
              <p className="text-[15px] leading-[1.85] text-[#5c5b57] mb-9">
                {SITE_CONFIG.brandFull} is a full-service Meta Ads &amp; Digital
                Growth Agency. We set up and monetize your Instagram &amp;
                Facebook pages, design and edit ready-to-post graphics &amp; Reels
                videos, run high-ROAS Meta Ads, rank your Google Business Profile
                on Google Maps, and deploy 24/7 WhatsApp Auto-Bots so every
                enquiry converts smoothly.
              </p>
              <Link to="/about" data-cursor="READ" className="editorial-link-btn">
                LEARN MORE
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="gsap-about-right-col hidden lg:flex lg:col-span-3 flex-col gap-7">
              <div className="aspect-[4/5] w-4/5 overflow-hidden shadow-md">
                <img
                  src={IMAGES.about3}
                  alt="Creative content production desk"
                  className="gsap-parallax-img w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden shadow-md">
                <img
                  src={IMAGES.about4}
                  alt="Agency studio collaboration"
                  className="gsap-parallax-img w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE ADWALA — 6-Card Grid (Fixed: Always visible, crisp stagger!) */}
      <section className="py-20 lg:py-28 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <SectionLabel text="What We Do" />
            <h2 className="text-[32px] sm:text-[40px] font-medium text-[#111111] leading-tight mb-4">
              Why choose {SITE_CONFIG.brandFull} ?
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#5c5b57]">
              Everything a growing business needs online — from Instagram &amp;
              Facebook page monetization and daily Reels creation to Google
              Business Profile ranking and automated WhatsApp chatbots.
            </p>
          </div>

          <div className="gsap-why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className="gsap-why-card group bg-[#f3f0e6] hover:bg-white border border-black/[0.06] hover:border-[#F5B800] p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(17,17,17,0.07)] relative"
              >
                <span className="absolute top-6 right-7 text-[12px] font-semibold text-black/25 tracking-widest">
                  0{idx + 1}
                </span>
                {(item.id === "gmb-seo" || item.id === "whatsapp-bot") && (
                  <span className="inline-block mb-3 px-2.5 py-0.5 text-[10px] font-bold tracking-[0.18em] uppercase bg-[#F5B800] text-[#111111]">
                    NEW SERVICE
                  </span>
                )}
                <div className="mb-6 w-14 h-14 flex items-center justify-center bg-white border border-black/[0.06] group-hover:border-[#F5B800] group-hover:bg-[#fdf6e2] transition-colors">
                  <WhyIcon name={item.icon} />
                </div>
                <h3 className="text-[21px] font-medium text-[#111111] mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[1.75] text-[#5c5b57]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR RESULTS & SCALE — 5-Column Animated Counter Bar */}
      <section className="py-16 lg:py-24 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel text="Measured Impact" />
              <h2 className="text-[30px] sm:text-[36px] font-medium text-[#111111]">
                Our Growth Numbers
              </h2>
            </div>
            <p className="text-[14px] text-[#5c5b57] max-w-xl leading-relaxed">
              From gyms, salons, and clinics to local showrooms and D2C brands,
              AdWala combines creative production, Meta Ads, Google Maps SEO,
              and WhatsApp automation into measurable sales growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-black/[0.1] bg-white">
            {GROWTH_METRICS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`p-7 flex flex-col justify-between min-h-[190px] transition-colors hover:bg-[#fdf6e2]/60 ${
                  idx !== 0 ? "border-t sm:border-t-0 lg:border-l border-black/[0.1]" : ""
                } ${idx >= 2 ? "sm:border-t lg:border-t-0 border-black/[0.1]" : ""}`}
              >
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#B88000] mb-2">
                    {stat.label}
                  </div>
                  <p className="text-[13px] text-[#6d6c67] leading-relaxed">
                    {stat.locations}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/[0.06]">
                  <span
                    className="gsap-counter text-[32px] font-light text-[#111111] tracking-tight"
                    data-target={stat.numericTarget}
                    data-suffix={stat.suffix}
                  >
                    {stat.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FULL-VIEWPORT SCRUB-ZOOM PLAY BANNER */}
      <section className="gsap-video-section relative h-[74vh] min-h-[520px] flex items-center justify-center overflow-hidden my-10">
        <img
          src={IMAGES.videoBg}
          alt="AdWala agency production studio"
          className="gsap-video-bg absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/58" />

        <div className="relative z-10 flex items-center justify-center gap-7 sm:gap-12 px-6">
          <span className="gsap-video-word-left text-white text-[15px] sm:text-[18px] font-medium tracking-[0.4em] uppercase">
            PLAY
          </span>
          <a
            href={IMAGES.hero2}
            data-fancybox="showreel"
            data-cursor="PLAY"
            data-caption="AdWala — Meta Ads, Reels Production & WhatsApp Automation"
            aria-label="Open AdWala Studio Showcase"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#F5B800] bg-[#F5B800]/15 hover:bg-[#F5B800] text-white hover:text-[#111111] backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <Play className="w-8 h-8 fill-current ml-1" />
          </a>
          <span className="gsap-video-word-right text-[#F5B800] text-[15px] sm:text-[18px] font-semibold tracking-[0.4em] uppercase">
            REEL
          </span>
        </div>
      </section>

      {/* 6. CONCEPT / WHAT MAKES US DIFFERENT — REAL HAPPY CUSTOMERS PHOTOGRAPHY */}
      <section className="py-24 lg:py-36 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="gsap-curtain-reveal aspect-[4/3] overflow-hidden shadow-lg">
                <img
                  src={IMAGES.concept1}
                  alt="Happy customers engaging and buying at a local business"
                  className="gsap-parallax-img w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-10 -right-6 w-[52%] aspect-[4/3] overflow-hidden border-[8px] border-[#faf9f6] shadow-xl">
                <img
                  src={IMAGES.concept2}
                  alt="Smiling retail customers walking in with shopping bags"
                  className="gsap-parallax-img w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 lg:pl-6">
              <SectionLabel text="Concept" />
              <h2 className="text-[32px] sm:text-[42px] font-medium text-[#111111] leading-tight mb-4">
                What Makes AdWala Different?
              </h2>
              <p className="text-[18px] font-light text-[#111111] mb-5">
                We don&apos;t just post pretty designs — we bring real customers to your business.
              </p>
              <p className="text-[15px] leading-[1.85] text-[#5c5b57] mb-8">
                Most agencies stop at posting graphics. AdWala connects your
                entire customer journey: professional Instagram &amp; Facebook
                setup, high-converting Reels &amp; posts, targeted Meta Ads,
                Google Business Profile local ranking, and an automated 24/7
                WhatsApp Bot that replies to every enquiry in seconds.
              </p>
              <Link
                to="/what-makes-us-different"
                data-cursor="VIEW"
                className="editorial-link-btn"
              >
                DISCOVER OUR SYSTEM
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SIGNATURE PINNED HORIZONTAL SCROLL "OUR SERVICES" WITH BESPOKE PLATFORM CARDS */}
      <section
        ref={pinSectionRef}
        className="relative bg-[#f3f0e6] border-y border-black/[0.07] overflow-hidden py-20 lg:py-0 lg:h-screen lg:flex lg:flex-col lg:justify-center"
      >
        <div className="max-w-[1360px] w-full mx-auto px-6 lg:pl-24 lg:pr-12 mb-8 flex items-end justify-between">
          <div>
            <SectionLabel text="Scroll To Explore · Core & New Services" />
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6d6c67]">
              SCROLL PROGRESS
            </span>
            <div className="w-36 h-[2px] bg-black/15 overflow-hidden">
              <div
                ref={horizontalProgressRef}
                style={{ transform: "scaleX(0)" }}
                className="w-full h-full bg-[#D49600] origin-left"
              />
            </div>
            <Link to="/services" className="editorial-link-btn ml-4">
              VIEW ALL
            </Link>
          </div>
        </div>

        {/* Desktop Pinned Horizontal Scroll Track (Safe Left Clearance from Social Rail) */}
        <div
          ref={horizontalTrackRef}
          className="hidden lg:flex items-center gap-9 pl-24 pr-24 w-max will-change-transform"
        >
          <div className="shrink-0 w-[340px] pr-6 flex flex-col justify-center select-none">
            <div className="gsap-stroke-up text-[82px] font-bold leading-[0.95] tracking-[0.04em] uppercase letter-stroke">
              OUR
            </div>
            <div className="gsap-stroke-down text-[72px] font-bold leading-[0.95] tracking-[0.04em] uppercase text-[#111111] mt-1">
              SERVICES
            </div>
            <p className="text-[13.5px] text-[#5c5b57] mt-6 leading-relaxed max-w-[270px]">
              Scroll down smoothly to explore Meta Ads, Reels, Google Business
              Profile, and WhatsApp Auto-Bot systems.
            </p>
          </div>

          {SERVICE_ASSETS.map((asset, i) => (
            <article
              key={asset.slug}
              data-cursor="OPEN"
              className="shrink-0 w-[395px] bg-white border border-black/[0.08] hover:border-[#F5B800] group overflow-hidden relative shadow-[0_18px_45px_rgba(17,17,17,0.07)] transition-all duration-300"
            >
              <span className="absolute top-3 right-3 z-20 px-2 py-0.5 bg-white/95 text-[#111111] text-[10.5px] font-bold tracking-widest rounded shadow-sm">
                0{i + 1}
              </span>
              {asset.badge && (
                <span className="absolute top-3 left-3 z-20 px-2.5 py-0.5 bg-[#F5B800] text-[#111111] text-[10px] font-bold uppercase tracking-[0.18em] rounded shadow-sm">
                  {asset.badge}
                </span>
              )}
              <Link
                to={`/services/${asset.slug}`}
                className="block h-[255px] overflow-hidden"
              >
                <ServiceCardVisual slug={asset.slug} />
              </Link>
              <div className="p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B88000]">
                  {asset.category}
                </span>
                <h3 className="text-[20px] font-medium text-[#111111] mt-1.5 mb-2 group-hover:text-[#B88000] transition-colors">
                  <Link to={`/services/${asset.slug}`}>{asset.shortTitle}</Link>
                </h3>
                <p className="text-[13.5px] text-[#5c5b57] line-clamp-2 leading-relaxed">
                  {asset.summary}
                </p>
              </div>
            </article>
          ))}

          <div className="shrink-0 w-[340px] pl-6 flex flex-col justify-center">
            <div className="text-[54px] font-bold leading-none uppercase letter-stroke-gold">
              READY?
            </div>
            <h3 className="text-[26px] font-medium text-[#111111] mt-3 mb-5">
              Let&apos;s Scale Your Brand Together
            </h3>
            <Link
              to="/advertising-quote"
              data-cursor="START"
              className="editorial-link-btn self-start"
            >
              BUILD YOUR GROWTH PLAN <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Mobile / Tablet Swipeable Swiper Fallback */}
        <div className="lg:hidden px-6">
          <h2 className="text-[36px] font-light uppercase tracking-[0.04em] text-[#111111] mb-8">
            <span className="font-medium">OUR</span> SERVICES
          </h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.12}
            autoplay={{ delay: 3800 }}
            breakpoints={{ 640: { slidesPerView: 2.05 } }}
          >
            {SERVICE_ASSETS.map((asset) => (
              <SwiperSlide key={asset.slug}>
                <article className="bg-white border border-black/[0.08] overflow-hidden relative">
                  {asset.badge && (
                    <span className="absolute top-3 left-3 z-20 px-2.5 py-0.5 bg-[#F5B800] text-[#111111] text-[10px] font-bold uppercase tracking-[0.18em]">
                      {asset.badge}
                    </span>
                  )}
                  <Link
                    to={`/services/${asset.slug}`}
                    className="block h-[230px] overflow-hidden"
                  >
                    <ServiceCardVisual slug={asset.slug} />
                  </Link>
                  <div className="p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B88000]">
                      {asset.category}
                    </span>
                    <h3 className="text-[19px] font-medium text-[#111111] mt-1">
                      <Link to={`/services/${asset.slug}`}>{asset.shortTitle}</Link>
                    </h3>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 8. GET IN TOUCH + ONLINE GROWTH AUDIT CARD */}
      <section className="py-24 lg:py-32 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionLabel text="Contact Us" />
              <h2 className="text-[34px] sm:text-[44px] font-medium text-[#111111] leading-tight mb-5">
                Ready to Grow Your Business?
              </h2>
              <p className="text-[15px] leading-[1.85] text-[#5c5b57] mb-8 max-w-lg">
                Want more customers from Instagram, Facebook Ads, Google Maps,
                and automated WhatsApp chats? DM{" "}
                <strong className="text-[#111111]">{SITE_CONFIG.instagramHandle}</strong>{" "}
                or request a custom growth plan directly below.
              </p>

              <ul className="space-y-3 text-[15px] mb-10">
                <li>
                  <span className="font-semibold text-[#111111] mr-2">IG :</span>
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#B88000] hover:underline font-medium"
                  >
                    {SITE_CONFIG.instagramHandle}
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-[#111111] mr-2">E :</span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-[#B88000] hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                {SITE_CONFIG.phones.map((phone) => (
                  <li key={phone}>
                    <span className="font-semibold text-[#111111] mr-2">T :</span>
                    <span className="text-[#111111] font-medium">{phone}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-6">
                <Link
                  to="/advertising-quote"
                  data-cursor="QUOTE"
                  className="editorial-link-btn"
                >
                  GET A GROWTH QUOTE
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/mockup" data-cursor="TRY" className="editorial-link-btn">
                  TRY AD PREVIEW STUDIO
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative bg-[#f3f0e6] border border-black/[0.07] p-6 sm:p-8">
                <div className="aspect-[16/10] overflow-hidden mb-6">
                  <img
                    src={IMAGES.contactCard}
                    alt="AdWala Online Growth Consultation"
                    className="gsap-parallax-img w-full h-full object-cover"
                  />
                </div>
                <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#B88000] mb-2">
                  <Sparkles className="w-4 h-4" />
                  100% ONLINE &amp; PAN-INDIA SUPPORT
                </div>
                <p className="text-[15px] text-[#111111] leading-relaxed">
                  Book a quick WhatsApp or Zoom walkthrough for Meta Ads, Reels
                  content calendars, Google Business Profile ranking, and 24/7
                  WhatsApp Auto-Bot setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PLATFORMS & ECOSYSTEM STRIP */}
      <section className="py-16 bg-white border-t border-black/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h6 className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#6d6c67]">
              PLATFORMS &amp; GROWTH ECOSYSTEM WE MASTER
            </h6>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {PARTNER_AGENCIES.map((agency) => (
              <div
                key={agency.name}
                className="border border-black/[0.07] bg-[#faf9f6] hover:border-[#F5B800] hover:bg-[#fdf6e2]/40 px-5 py-7 flex flex-col items-center justify-center text-center transition-colors"
              >
                <span className="text-[18px] font-semibold tracking-[0.06em] text-[#111111]">
                  {agency.name}
                </span>
                <span className="text-[9.5px] font-medium tracking-[0.22em] text-[#B88000] mt-1">
                  {agency.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
