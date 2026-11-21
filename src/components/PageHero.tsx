import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { SectionLabel } from "./SectionLabel";

interface PageHeroProps {
  eyebrow: string;
  titleBold: string;
  titleLight?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
  breadcrumb?: { label: string; to?: string }[];
}

export function PageHero({
  eyebrow,
  titleBold,
  titleLight,
  subtitle,
  ctaLabel,
  ctaTo,
  breadcrumb,
}: PageHeroProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gsap-page-hero", {
        y: 26,
        opacity: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: "power3.out",
      });
    }, rootRef);
    return () => ctx.revert();
  }, [titleBold]);

  return (
    <section
      ref={rootRef}
      className="bg-editorial-grid border-b border-black/[0.06] pt-16 pb-20 lg:pt-24 lg:pb-24"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {breadcrumb && (
          <nav
            aria-label="Breadcrumb"
            className="gsap-page-hero flex flex-wrap items-center gap-2 text-[12px] tracking-[0.12em] uppercase text-[#757575] mb-6"
          >
            <Link to="/" className="hover:text-[#B88000] transition-colors">
              Home
            </Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                <span>/</span>
                {b.to ? (
                  <Link to={b.to} className="hover:text-[#B88000] transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-black font-medium">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="gsap-page-hero">
          <SectionLabel text={eyebrow} />
        </div>

        <h1 className="gsap-page-hero text-[34px] sm:text-[46px] lg:text-[56px] leading-[1.12] tracking-[-0.01em] uppercase text-black max-w-4xl">
          <span className="font-normal block">{titleBold}</span>
          {titleLight && (
            <span className="font-extralight block text-[#111111]">
              {titleLight}
            </span>
          )}
        </h1>

        {subtitle && (
          <p className="gsap-page-hero mt-6 text-[16px] leading-relaxed text-[#666666] max-w-2xl">
            {subtitle}
          </p>
        )}

        {ctaLabel && ctaTo && (
          <div className="gsap-page-hero mt-9">
            <Link to={ctaTo} className="editorial-link-btn">
              {ctaLabel}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
