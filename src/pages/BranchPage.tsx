import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionLabel } from "../components/SectionLabel";
import { BRANCHES } from "../data/siteConfig";

export function BranchPage() {
  const { city } = useParams<{ city: string }>();
  const branch = BRANCHES.find((b) => b.slug === city);

  if (!branch) {
    return <Navigate to="/contact" replace />;
  }

  const otherBranches = BRANCHES.filter((b) => b.slug !== branch.slug);

  return (
    <div>
      <PageHero
        eyebrow={`Regional Growth Hub · ${branch.city}`}
        titleBold={branch.title}
        titleLight={branch.tagline}
        subtitle={branch.intro}
        ctaLabel={`Launch a ${branch.city} Campaign`}
        ctaTo={`/advertising-quote?city=${encodeURIComponent(branch.city)}`}
        breadcrumb={[
          { label: "Our Branch" },
          { label: `${branch.city} Hub` },
        ]}
      />

      <section className="py-20 lg:py-28 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-[16/9] overflow-hidden border border-black/[0.08]">
              <img
                src={branch.heroImage}
                alt={branch.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white border border-black/[0.08] p-6">
                <div className="text-[28px] font-light text-[#B88000]">
                  {branch.clientCount}
                </div>
                <div className="text-[12px] uppercase tracking-[0.16em] text-black font-medium mt-1">
                  Local Client Base
                </div>
              </div>
              <div className="bg-white border border-black/[0.08] p-6">
                <div className="text-[24px] sm:text-[28px] font-light text-[#B88000]">
                  {branch.reachNote}
                </div>
                <div className="text-[12px] uppercase tracking-[0.16em] text-black font-medium mt-1">
                  Core Specialty
                </div>
              </div>
            </div>

            <p className="text-[15.5px] leading-[1.85] text-[#666666]">
              {branch.secondaryCopy}
            </p>

            <div>
              <SectionLabel text="Business Zones We Serve" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
                {branch.keyZones.map((zone) => (
                  <div
                    key={zone}
                    className="bg-white border border-black/[0.07] px-5 py-3.5 flex items-center gap-3 text-[14px] text-black"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#B88000] shrink-0" />
                    {zone}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-[#f3f0e6] border border-black/[0.08] p-8 space-y-5">
              <h3 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-black border-b border-black/10 pb-4">
                AdWala {branch.city} Growth Desk
              </h3>
              <div className="flex items-center gap-3.5 text-[14.5px]">
                <Phone className="w-5 h-5 text-[#B88000] shrink-0" />
                <span className="text-black font-medium">{branch.phone}</span>
              </div>
              <div className="flex items-center gap-3.5 text-[14.5px]">
                <Mail className="w-5 h-5 text-[#B88000] shrink-0" />
                <a
                  href={`mailto:${branch.email}`}
                  className="text-[#B88000] hover:underline"
                >
                  {branch.email}
                </a>
              </div>

              <div className="pt-4 border-t border-black/10">
                <div className="text-[12px] uppercase tracking-[0.16em] text-[#757575] mb-3">
                  Services Available in {branch.city}
                </div>
                <div className="flex flex-wrap gap-2">
                  {branch.formatsAvailable.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1.5 bg-white border border-black/[0.08] text-[12px] text-black"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={`/advertising-quote?city=${encodeURIComponent(branch.city)}`}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111111] hover:bg-[#F5B800] hover:text-[#111111] text-white text-[12px] font-medium uppercase tracking-[0.2em] transition-colors"
              >
                BOOK {branch.city.toUpperCase()} AUDIT <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white border border-black/[0.08] p-7">
              <h4 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#757575] mb-4">
                Other Regional Hubs
              </h4>
              <div className="space-y-2.5">
                {otherBranches.map((b) => (
                  <Link
                    key={b.slug}
                    to={`/branches/${b.slug}`}
                    className="flex items-center justify-between py-2.5 border-b border-black/[0.06] last:border-0 text-black hover:text-[#B88000] transition-colors"
                  >
                    <span className="font-medium">{b.city} Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
