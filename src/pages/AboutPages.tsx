import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionLabel } from "../components/SectionLabel";
import { SITE_CONFIG, IMAGES, WHY_CHOOSE_ITEMS } from "../data/siteConfig";
import {
  HISTORY_TIMELINE,
  CULTURE_PILLARS,
  TEAM_MEMBERS,
  CLIENT_CATEGORIES,
  CLIENTS_LIST,
} from "../data/pagesData";

export function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About AD Wala"
        titleBold={`About ${SITE_CONFIG.brandFull}`}
        titleLight="Performance Social, GMB & WhatsApp Growth"
        subtitle="We help businesses scale real customers through Instagram & Facebook setup and monetization, Reels/post creation, Meta Ads, Google Business Profile SEO, and 24/7 WhatsApp Auto-Bots."
        ctaLabel="Get a Custom Growth Plan"
        ctaTo="/advertising-quote"
        breadcrumb={[{ label: "About Us" }]}
      />

      <section className="py-20 lg:py-28 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <SectionLabel text="Our Mission" />
            <h2 className="text-[30px] sm:text-[38px] font-medium text-black leading-tight">
              Full-Stack Digital Growth Built for Real Business Owners
            </h2>
            <p className="leading-[1.85] text-[#666666]">
              At {SITE_CONFIG.brandFull}, we take the headache out of digital
              marketing. We build your Instagram &amp; Facebook presence from
              ground up, monetize your audience, produce crisp posts and Reels
              videos ready for publishing, and run targeted Meta Ads that bring
              consistent enquiries.
            </p>
            <p className="leading-[1.85] text-[#666666]">
              With our dedicated Google Business Profile management and
              automated 24/7 WhatsApp Auto-Bot services, we make sure customers
              find you on Google Maps and receive instant replies the moment
              they reach out.
            </p>
            <div className="pt-4 flex flex-wrap gap-6">
              <Link to="/our-history" className="editorial-link-btn">
                OUR JOURNEY <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/team" className="editorial-link-btn">
                MEET THE TEAM
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-5">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={IMAGES.about1} alt="AD Wala team" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] overflow-hidden mt-8">
              <img src={IMAGES.about3} alt="Creative studio" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f3f0e6] border-t border-black/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "350+", label: "Businesses Scaled" },
              { value: "12K+", label: "Posts & Reels Produced" },
              { value: "180+", label: "Google Business Pages" },
              { value: "210+", label: "WhatsApp Auto-Bots Live" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-black/[0.07] p-8">
                <div className="text-[36px] font-light text-[#B88000] leading-none mb-2">
                  {s.value}
                </div>
                <div className="text-[13px] uppercase tracking-[0.14em] text-black font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function HistoryPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Journey"
        titleBold="The AD Wala"
        titleLight="Growth Story"
        subtitle="From local social page management to a complete Meta Ads, Google Business, and WhatsApp Auto-Bot agency."
        breadcrumb={[{ label: "About Us", to: "/about" }, { label: "Our Journey" }]}
      />

      <section className="py-20 lg:py-28 bg-[#faf9f6]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="relative border-l border-black/15 pl-8 sm:pl-12 space-y-12">
            {HISTORY_TIMELINE.map((event) => (
              <div key={event.year} className="relative">
                <span className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-[#F5B800] ring-4 ring-[#f9f9f9]" />
                <span className="text-[13px] font-semibold tracking-[0.22em] text-[#B88000] uppercase">
                  {event.year}
                </span>
                <h3 className="text-[24px] font-medium text-black mt-1 mb-2.5">
                  {event.title}
                </h3>
                <p className="text-[15px] leading-[1.8] text-[#666666]">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function CulturePage() {
  return (
    <div>
      <PageHero
        eyebrow="How We Work"
        titleBold="Culture &"
        titleLight="Work Ethics"
        subtitle="Accountable performance marketing, transparent ad accounts, and fast creative execution."
        breadcrumb={[
          { label: "About Us", to: "/about" },
          { label: "Culture & Work Ethics" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CULTURE_PILLARS.map((p) => (
            <div
              key={p.number}
              className="bg-white border border-black/[0.08] p-9 hover:border-[#F5B800]/40 transition-colors"
            >
              <span className="text-[13px] font-semibold tracking-[0.22em] text-[#B88000]">
                {p.number}
              </span>
              <h3 className="text-[20px] font-medium text-black mt-3 mb-3">
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.8] text-[#666666]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function DifferencePage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Edge"
        titleBold="What Makes"
        titleLight="AD Wala Different?"
        subtitle="Creative Reels + Targeted Meta Ads + Google Maps Top-3 + 24/7 WhatsApp Auto-Bot working together as one growth engine."
        ctaLabel="Book a Strategy Audit"
        ctaTo="/contact"
        breadcrumb={[
          { label: "About Us", to: "/about" },
          { label: "What Makes Us Different" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <img
              src={IMAGES.concept1}
              alt="Strategy session"
              className="w-full aspect-[4/3] object-cover mb-6"
            />
            <div className="bg-[#f3f0e6] border border-black/[0.07] p-8">
              <h4 className="text-[18px] font-medium text-black mb-3">
                One Agency for Content, Ads &amp; Automation
              </h4>
              <p className="text-[14px] leading-[1.8] text-[#666666]">
                Instead of juggling separate freelancers for video editing, Meta
                Ads, Google Business listings, and WhatsApp chatbots, AD Wala
                delivers one unified growth team accountable for real leads.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-black/[0.07] p-7 flex items-start gap-4"
              >
                <CheckCircle2 className="w-5 h-5 text-[#B88000] shrink-0 mt-1" />
                <div>
                  <h3 className="text-[18px] font-medium text-black mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[1.75] text-[#666666]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function ClientsPage() {
  const [selected, setSelected] = useState<string>("All");
  const filtered =
    selected === "All"
      ? CLIENTS_LIST
      : CLIENTS_LIST.filter((c) => c.category === selected);

  return (
    <div>
      <PageHero
        eyebrow="Client Portfolio"
        titleBold="Brands Growing"
        titleLight="With AD Wala"
        subtitle="Helping retail showrooms, clinics, salons, jewellery brands, cafes, and real estate developers scale daily leads."
        breadcrumb={[{ label: "About Us", to: "/about" }, { label: "Clients" }]}
      />

      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap gap-2.5 mb-12">
            {CLIENT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelected(cat)}
                className={`px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.14em] border transition-colors cursor-pointer ${
                  selected === cat
                    ? "bg-[#F5B800] text-[#111111] border-[#F5B800]"
                    : "bg-white text-black border-black/10 hover:border-[#F5B800]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((client) => (
              <div
                key={client.name}
                className="bg-white border border-black/[0.08] p-7 hover:border-[#F5B800]/40 transition-all"
              >
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#B88000] font-medium">
                  {client.category}
                </span>
                <h3 className="text-[20px] font-medium text-black mt-2 mb-3">
                  {client.name}
                </h3>
                <div className="inline-flex items-center gap-1.5 text-[13px] text-[#757575]">
                  <MapPin className="w-3.5 h-3.5 text-[#B88000]" />
                  {client.city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function TeamPage() {
  return (
    <div>
      <PageHero
        eyebrow="The Growth Team"
        titleBold="Meet the Specialists"
        titleLight="Behind AD Wala"
        subtitle="Media buyers, Reels video editors, local SEO experts, and WhatsApp automation engineers working together for your ROI."
        ctaLabel="Join Our Team"
        ctaTo="/careers"
        breadcrumb={[{ label: "About Us", to: "/about" }, { label: "Team" }]}
      />

      <section className="py-20 lg:py-28 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-black/[0.08] p-8 hover:shadow-[0_14px_35px_rgba(0,0,0,0.06)] transition-all"
            >
              <div className="w-16 h-16 bg-[#f3f0e6] border border-black/[0.08] flex items-center justify-center text-[20px] font-medium text-[#B88000] mb-6">
                {member.initials}
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#B88000] font-medium">
                {member.department}
              </span>
              <h3 className="text-[22px] font-medium text-black mt-1">
                {member.name}
              </h3>
              <p className="text-[13.5px] font-medium text-[#444444] mb-4">
                {member.role}
              </p>
              <p className="text-[14px] leading-[1.75] text-[#666666]">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
