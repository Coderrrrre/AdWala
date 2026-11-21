import { useState, useEffect, useRef, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
} from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "../data/siteConfig";
import { BrandLogo } from "./BrandLogo";
import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { MagneticCursor } from "./MagneticCursor";

gsap.registerPlugin(ScrollTrigger);

interface LayoutProps {
  children: ReactNode;
  hideChrome?: boolean;
}

export function Layout({ children, hideChrome = false }: LayoutProps) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!progressBarRef.current) return;
    const tween = gsap.to(progressBarRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [pathname]);

  if (hideChrome) {
    return (
      <>
        <SmoothScrollProvider />
        <MagneticCursor />
        {children}
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-[#5c5b57] relative">
      <SmoothScrollProvider />
      <MagneticCursor />

      {/* Top Gold GSAP Scroll Progress Bar */}
      <div
        ref={progressBarRef}
        style={{ transform: "scaleX(0)" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D49600] via-[#F5B800] to-[#111111] origin-left z-[60] pointer-events-none"
      />

      {/* Top Sticky Editorial Navbar */}
      <header
        className={`w-full z-50 transition-all duration-300 ${
          scrolled
            ? "fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-[0_6px_24px_rgba(17,17,17,0.06)] py-2.5"
            : "relative bg-white py-3.5 border-b border-black/[0.06]"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 lg:px-8 flex items-center justify-between gap-4">
          <Link to="/" aria-label={SITE_CONFIG.brandFull}>
            <BrandLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#111111] hover:text-[#C98C00] py-2 transition-colors cursor-pointer"
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180 text-[#C98C00]" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute left-0 top-full pt-2 w-64 transition-all duration-200 ${
                      openDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white border border-black/[0.08] border-t-2 border-t-[#F5B800] shadow-[0_14px_35px_rgba(17,17,17,0.08)] py-2">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.to}
                          to={sub.to}
                          className={`block px-5 py-2.5 text-[13px] transition-colors ${
                            pathname === sub.to
                              ? "text-[#B88000] bg-[#fdf6e2] font-medium"
                              : "text-[#222222] hover:text-[#B88000] hover:bg-[#faf9f6]"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  className={`text-[14px] font-medium py-2 transition-colors ${
                    pathname === item.to
                      ? "text-[#C98C00]"
                      : "text-[#111111] hover:text-[#C98C00]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right WhatsApp Quick Circle */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              title="Quick WhatsApp Inquiry"
              data-cursor="CHAT"
              className="w-11 h-11 rounded-full bg-[#fdf6e2] border border-[#F5B800]/50 hover:bg-[#F5B800] text-[#B88000] hover:text-[#111111] flex items-center justify-center transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center border border-black/10 text-black"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-black/10 px-5 py-4 max-h-[80vh] overflow-y-auto shadow-lg">
            <div className="flex flex-col divide-y divide-black/[0.06]">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div key={item.label} className="py-2">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileAccordion(
                          mobileAccordion === item.label ? null : item.label
                        )
                      }
                      className="w-full flex items-center justify-between py-2 text-[14px] font-medium text-black"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileAccordion === item.label ? "rotate-180 text-[#C98C00]" : ""
                        }`}
                      />
                    </button>
                    {mobileAccordion === item.label && (
                      <div className="pl-4 pb-2 flex flex-col gap-1">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            className="py-1.5 text-[13px] text-[#555555] hover:text-[#C98C00]"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to!}
                    className="py-3 text-[14px] font-medium text-black hover:text-[#C98C00]"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </header>

      {scrolled && <div className="h-[68px]" />}

      {/* Fixed Left Vertical Social Rail */}
      <aside
        aria-label="Social Links"
        className="hidden xl:flex fixed left-5 bottom-10 z-30 flex-col items-center gap-4 text-[#111111]"
      >
        <a
          href={SITE_CONFIG.social.youtube}
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube"
          className="hover:text-[#D49600] transition-colors"
        >
          <Youtube className="w-4 h-4" />
        </a>
        <a
          href={SITE_CONFIG.social.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="hover:text-[#D49600] transition-colors"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href={SITE_CONFIG.social.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="hover:text-[#D49600] transition-colors"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <span className="w-px h-12 bg-[#D49600]/60 my-1" />
        <span className="writing-vertical text-[10px] font-semibold tracking-[0.22em] uppercase text-[#111111]">
          FOLLOW US
        </span>
      </aside>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Clean 3-Column Editorial Footer (No Address Section) */}
      <footer className="bg-[#f3f0e6] border-t border-black/[0.08] text-[#5c5b57] pt-20 pb-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-black/[0.08]">
            <div>
              <Link to="/" className="inline-block mb-5">
                <BrandLogo />
              </Link>
              <p className="text-[14px] leading-relaxed text-[#5c5b57] max-w-sm">
                {SITE_CONFIG.footerBlurb}
              </p>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#111111] mb-5">
                FOLLOW US
              </h4>
              <ul className="space-y-2.5 text-[14px]">
                <li>
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#B88000] transition-colors"
                  >
                    Instagram ({SITE_CONFIG.instagramHandle}).
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#B88000] transition-colors"
                  >
                    Facebook.
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#B88000] transition-colors"
                  >
                    Youtube.
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#111111] mb-5">
                DIRECT CONTACT
              </h4>
              <div className="space-y-2.5 text-[14px]">
                {SITE_CONFIG.phones.map((phone) => (
                  <p key={phone}>
                    <strong className="text-[#111111] font-medium">T :</strong>{" "}
                    <span>{phone}</span>
                  </p>
                ))}
                <p>
                  <strong className="text-[#111111] font-medium">E :</strong>{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="hover:text-[#B88000] transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </p>
                <p>
                  <strong className="text-[#111111] font-medium">IG :</strong>{" "}
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#B88000] transition-colors"
                  >
                    {SITE_CONFIG.instagramHandle}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-[#111111]">
              <li>
                <Link to="/about" className="hover:text-[#B88000] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#B88000] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-[#B88000] transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#B88000] transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#B88000] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B88000] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/resource-center"
                  className="hover:text-[#B88000] transition-colors"
                >
                  Resource Center
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-4 text-[13px] text-[#6d6c67]">
              <span>{SITE_CONFIG.copyright}</span>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Scroll to top"
                className="w-9 h-9 rounded-full border border-black/15 hover:border-[#F5B800] hover:bg-[#F5B800] hover:text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
