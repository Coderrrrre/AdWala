import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, PackageCheck, Share2, Target } from "lucide-react";
import { Fancybox } from "@fancyapps/ui";
import { PageHero } from "../components/PageHero";
import { SectionLabel } from "../components/SectionLabel";
import { ServiceCardVisual } from "../components/ServiceVisual";
import { SERVICE_ASSETS, getServiceBySlug } from "../data/servicesData";

export function ServicesOverviewPage() {
  return (
    <div>
      <PageHero
        eyebrow="AD Wala Services"
        titleBold="Digital Marketing &"
        titleLight="Automation Services"
        subtitle="Instagram & Facebook setup and monetization, Reels & post production, Meta Ads, Google Business Profile SEO, and 24/7 WhatsApp Auto-Bot marketing."
        ctaLabel="Get a Custom Growth Quote"
        ctaTo="/advertising-quote"
        breadcrumb={[{ label: "Services" }]}
      />

      <section className="py-20 lg:py-28 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_ASSETS.map((asset) => (
            <article
              key={asset.slug}
              className="bg-white border border-black/[0.08] group overflow-hidden flex flex-col relative"
            >
              {asset.badge && (
                <span className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-[#F5B800] text-[#111111] text-[10px] font-semibold uppercase tracking-[0.18em]">
                  {asset.badge}
                </span>
              )}
              <Link
                to={`/services/${asset.slug}`}
                className="h-[245px] overflow-hidden block"
              >
                <ServiceCardVisual slug={asset.slug} />
              </Link>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#B88000] font-medium">
                    {asset.category}
                  </span>
                  <h2 className="text-[22px] font-medium text-black mt-1.5 mb-3">
                    <Link
                      to={`/services/${asset.slug}`}
                      className="hover:text-[#B88000] transition-colors"
                    >
                      {asset.shortTitle}
                    </Link>
                  </h2>
                  <p className="text-[14px] leading-[1.75] text-[#666666] mb-6">
                    {asset.summary}
                  </p>
                </div>
                <Link
                  to={`/services/${asset.slug}`}
                  className="editorial-link-btn self-start"
                >
                  EXPLORE SERVICE <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    Fancybox.bind("[data-fancybox='service-gallery']", {});
    return () => {
      Fancybox.unbind("[data-fancybox='service-gallery']");
    };
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = SERVICE_ASSETS.filter((s) => s.slug !== service.slug).slice(
    0,
    3
  );

  return (
    <div>
      <section className="relative min-h-[460px] lg:min-h-[540px] flex items-end overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/25" />
        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 py-16 lg:py-20 text-white">
          <SectionLabel text={service.badge ? `${service.category} · NEW` : service.category} light />
          <h1 className="text-[34px] sm:text-[48px] font-medium uppercase leading-tight text-white max-w-3xl">
            {service.title}
          </h1>
          <p className="text-[17px] font-light text-white/85 mt-3 max-w-2xl">
            {service.heroHook}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              to={`/advertising-quote?format=${encodeURIComponent(service.shortTitle)}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#F5B800] hover:bg-[#111111] text-[#111111] hover:text-white text-[12px] font-medium uppercase tracking-[0.2em] transition-colors"
            >
              GET A QUOTE <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/mockup"
              className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.2em] text-white/90 hover:text-white border-b border-white/40 pb-1"
            >
              PREVIEW IN AD STUDIO
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <SectionLabel text="How It Grows Your Business" />
            <h2 className="text-[30px] sm:text-[36px] font-medium text-black leading-tight">
              What&apos;s Included in {service.shortTitle}
            </h2>
            {service.description.map((para, i) => (
              <p key={i} className="text-[15.5px] leading-[1.85] text-[#666666]">
                {para}
              </p>
            ))}

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {service.benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-white border border-black/[0.08] p-6"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#B88000] mb-3" />
                  <h3 className="text-[17px] font-medium text-black mb-1.5">
                    {b.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-[#666666]">
                    {b.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-[#f3f0e6] border border-black/[0.08] p-8 space-y-6">
              <h3 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-black border-b border-black/10 pb-4">
                Service Scope &amp; Deliverables
              </h3>
              <div className="flex items-start gap-4">
                <PackageCheck className="w-5 h-5 text-[#B88000] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[12px] uppercase tracking-[0.14em] text-[#757575]">
                    Monthly Deliverables
                  </div>
                  <div className="text-[14.5px] font-medium text-black mt-0.5">
                    {service.deliverables}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Share2 className="w-5 h-5 text-[#B88000] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[12px] uppercase tracking-[0.14em] text-[#757575]">
                    Platforms Covered
                  </div>
                  <div className="text-[14.5px] font-medium text-black mt-0.5">
                    {service.platforms}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Target className="w-5 h-5 text-[#B88000] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[12px] uppercase tracking-[0.14em] text-[#757575]">
                    Best Suited For
                  </div>
                  <div className="text-[14.5px] font-medium text-black mt-0.5">
                    {service.idealFor}
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to={`/advertising-quote?format=${encodeURIComponent(service.shortTitle)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111111] hover:bg-[#F5B800] hover:text-[#111111] text-white text-[12px] font-medium uppercase tracking-[0.2em] transition-colors"
                >
                  START THIS SERVICE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {service.gallery.map((img, i) => (
                <a
                  key={i}
                  href={img}
                  data-fancybox="service-gallery"
                  data-caption={`${service.shortTitle} — Sample ${i + 1}`}
                  className="aspect-square overflow-hidden border border-black/[0.08] block group"
                >
                  <img
                    src={img}
                    alt={`${service.shortTitle} visual ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 bg-[#f3f0e6] border-t border-black/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h3 className="text-[22px] font-medium text-black mb-8">
            Explore More AD Wala Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="bg-white border border-black/[0.07] p-6 hover:border-[#F5B800] transition-colors flex items-center justify-between"
              >
                <span className="font-medium text-black">{s.shortTitle}</span>
                <ArrowRight className="w-4 h-4 text-[#B88000]" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
