import { useState, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Send,
  Briefcase,
  Handshake,
  AlertCircle,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionLabel } from "../components/SectionLabel";
import { SITE_CONFIG, BRANCHES } from "../data/siteConfig";
import { SERVICE_ASSETS } from "../data/servicesData";
import { OPEN_ROLES } from "../data/pagesData";
import { api } from "../lib/api";

const inputCls =
  "w-full bg-white border border-black/15 focus:border-[#F5B800] focus:outline-none px-4 py-3 text-[14px] text-black transition-colors";
const labelCls =
  "block text-[12px] font-medium uppercase tracking-[0.14em] text-[#333333] mb-2";

export function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refId, setRefId] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.submitContact({
        name,
        company,
        email,
        phone,
        message,
      });
      setRefId(res.referenceId);
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Get In Touch"
        titleBold="Let's Grow Your"
        titleLight="Business Together"
        subtitle="Talk to AD Wala about Instagram & Facebook setup, Reels production, Meta Ads, Google Business Profile management, or WhatsApp Auto-Bots."
        breadcrumb={[{ label: "Contact Us" }]}
      />

      <section className="py-20 lg:py-28 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#f3f0e6] border border-black/[0.08] p-8 space-y-4">
              <h3 className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#B88000]">
                Direct Growth Desk
              </h3>
              <p className="text-[15px] font-medium text-black">
                {SITE_CONFIG.brandFull} — {SITE_CONFIG.brandSub}
              </p>
              <div className="flex items-center gap-3 text-[14px]">
                <Mail className="w-4 h-4 text-[#B88000] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-[#B88000] hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              {SITE_CONFIG.phones.map((p) => (
                <div key={p} className="flex items-center gap-3 text-[14px]">
                  <Phone className="w-4 h-4 text-[#B88000] shrink-0" />
                  <span className="text-black font-medium">{p}</span>
                </div>
              ))}
              <div className="pt-2 text-[13.5px] text-[#5c5b57]">
                Instagram:{" "}
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#B88000] font-medium hover:underline"
                >
                  {SITE_CONFIG.instagramHandle}
                </a>
              </div>
            </div>

            <div className="space-y-3">
              {BRANCHES.map((b) => (
                <div
                  key={b.slug}
                  className="bg-white border border-black/[0.08] p-5"
                >
                  <div className="text-[13px] font-semibold uppercase tracking-[0.16em] text-black">
                    {b.city} Growth Desk
                  </div>
                  <p className="text-[13px] text-[#666666] mt-1">{b.tagline}</p>
                  <p className="text-[13px] text-[#B88000] mt-1 font-medium">{b.phone}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-black/[0.08] p-8 sm:p-10">
            <SectionLabel text="Direct Inquiry (NestJS API)" />
            <h2 className="text-[28px] font-medium text-black mb-6">
              Write to Our Growth Desk
            </h2>

            {refId ? (
              <div className="bg-[#fdf6e2] border border-[#F5B800]/30 p-8 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#B88000] mx-auto mb-3" />
                <h3 className="text-[20px] font-medium text-black mb-2">
                  Thank You — Inquiry Saved
                </h3>
                <p className="text-[13px] font-mono text-[#B88000] mb-2">
                  Reference ID: {refId}
                </p>
                <p className="text-[14px] text-[#666666] mb-5">
                  Our AD Wala strategist will reach out via call/WhatsApp shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setRefId(null)}
                  className="editorial-link-btn cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="flex items-center gap-2 p-3.5 bg-red-50 border border-red-200 text-red-700 text-[13px]">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Business / Brand</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Shop or brand name"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@business.com"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98XXX XXXXX"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>What do you need help with? *</label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Instagram/Facebook setup, Reels & Posts, Meta Ads, Google Business Profile, or WhatsApp Auto-Bot..."
                    className={inputCls}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#111111] hover:bg-[#F5B800] hover:text-[#111111] disabled:opacity-60 text-white text-[12px] font-medium uppercase tracking-[0.2em] transition-colors cursor-pointer"
                >
                  {loading ? "SUBMITTING..." : "SEND MESSAGE"}{" "}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export function GenerateRevenuePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Ahmedabad");
  const [partnerType, setPartnerType] = useState("Agency White-Label Partner");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refId, setRefId] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.submitPartner({
        name,
        phone,
        city,
        partnerType,
        details,
      });
      setRefId(res.referenceId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Partner & Earn"
        titleBold="Become an AD Wala"
        titleLight="Referral & Agency Partner"
        subtitle="Refer local business owners for Meta Ads, Reels creation, Google Business Profile management, or WhatsApp Auto-Bots and earn recurring commissions."
        breadcrumb={[
          { label: "Contact Us", to: "/contact" },
          { label: "Become a Partner" },
        ]}
      />

      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Recurring Monthly Payouts",
                desc: "Earn reliable partner commission for every active retainer client you bring.",
              },
              {
                title: "Done-For-You Fulfillment",
                desc: "Our Reels, Meta Ads, GMB, and WhatsApp Bot teams handle 100% of delivery.",
              },
              {
                title: "Creator & Freelancer Friendly",
                desc: "Ideal for web developers, videographers, print agencies, and business consultants.",
              },
            ].map((b) => (
              <div key={b.title} className="bg-white border border-black/[0.08] p-7">
                <Handshake className="w-6 h-6 text-[#B88000] mb-4" />
                <h3 className="text-[17px] font-medium text-black mb-2">{b.title}</h3>
                <p className="text-[13.5px] text-[#666666] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-black/[0.08] p-8 sm:p-10">
            <SectionLabel text="Partner Application" />
            <h2 className="text-[28px] font-medium text-black mb-6">
              Join the AD Wala Partner Network
            </h2>

            {refId ? (
              <div className="bg-[#fdf6e2] border border-[#F5B800]/30 p-8 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#B88000] mx-auto mb-3" />
                <h3 className="text-[20px] font-medium text-black mb-1">
                  Partner Request Logged
                </h3>
                <p className="text-[13px] font-mono text-[#B88000] mb-2">
                  Reference ID: {refId}
                </p>
                <p className="text-[14px] text-[#666666]">
                  Our partnerships lead will connect with onboarding terms shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-[13px]">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputCls}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>City *</label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={inputCls}
                    >
                      <option>Ahmedabad</option>
                      <option>Surat</option>
                      <option>Vadodara</option>
                      <option>Rajkot</option>
                      <option>Other City (Pan-India)</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Partnership Type *</label>
                    <select
                      value={partnerType}
                      onChange={(e) => setPartnerType(e.target.value)}
                      className={inputCls}
                    >
                      <option>Agency White-Label Partner</option>
                      <option>Business Referral Partner</option>
                      <option>Videographer / Creator Affiliate</option>
                      <option>Regional Franchise Interest</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Tell Us About Your Network *</label>
                  <textarea
                    rows={4}
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className={inputCls}
                    placeholder="Industries you work with, approximate monthly referrals..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 bg-[#111111] hover:bg-[#F5B800] hover:text-[#111111] text-white text-[12px] font-medium uppercase tracking-[0.2em] transition-colors cursor-pointer"
                >
                  {loading ? "SUBMITTING..." : "APPLY AS PARTNER"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export function CareersPage() {
  const [position, setPosition] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refId, setRefId] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.submitCareer({
        position,
        name,
        email,
        phone,
        portfolioUrl,
      });
      setRefId(res.referenceId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Join AD Wala"
        titleBold="Jobs &"
        titleLight="Careers"
        subtitle="Work with performance marketers, Reels video editors, Google Business specialists, and WhatsApp chatbot builders."
        breadcrumb={[
          { label: "Contact Us", to: "/contact" },
          { label: "Jobs & Careers" },
        ]}
      />

      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-5">
            <SectionLabel text="Open Positions" />
            {OPEN_ROLES.map((role) => (
              <div
                key={role.title}
                className="bg-white border border-black/[0.08] p-7 hover:border-[#F5B800]/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#B88000] font-medium">
                    <Briefcase className="w-3.5 h-3.5" /> {role.location} · {role.type}
                  </span>
                  <span className="text-[12px] text-[#757575]">{role.experience}</span>
                </div>
                <h3 className="text-[20px] font-medium text-black mb-2">{role.title}</h3>
                <p className="text-[14px] text-[#666666] leading-relaxed mb-4">
                  {role.summary}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setPosition(role.title);
                    setRefId(null);
                  }}
                  className="editorial-link-btn cursor-pointer"
                >
                  APPLY FOR THIS ROLE
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-black/[0.08] p-8 sticky top-24">
              <SectionLabel text="Apply Now" />
              <h3 className="text-[24px] font-medium text-black mb-5">
                Submit Application
              </h3>

              {refId ? (
                <div className="bg-[#fdf6e2] border border-[#F5B800]/30 p-6 text-center">
                  <CheckCircle2 className="w-9 h-9 text-[#B88000] mx-auto mb-2" />
                  <p className="text-[15px] font-medium text-black">
                    Application Saved
                  </p>
                  <p className="text-[12.5px] font-mono text-[#B88000] mt-1">
                    Ref: {refId}
                  </p>
                  <p className="text-[13px] text-[#666666] mt-1">
                    Our HR desk will review your portfolio and reach out.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-[13px]">
                      {error}
                    </div>
                  )}
                  <div>
                    <label className={labelCls}>Position *</label>
                    <input
                      type="text"
                      required
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      placeholder="e.g., Meta Ads Performance Specialist"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Phone *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Portfolio / Reels Drive Link</label>
                    <input
                      type="url"
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                      placeholder="https://..."
                      className={inputCls}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-[#111111] hover:bg-[#F5B800] hover:text-[#111111] text-white text-[12px] font-medium uppercase tracking-[0.2em] transition-colors cursor-pointer"
                  >
                    {loading ? "SUBMITTING..." : "SUBMIT APPLICATION"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function AdvertisingQuotePage() {
  const [params] = useSearchParams();
  const initialService = params.get("format") || SERVICE_ASSETS[0].shortTitle;

  const [selectedServices, setSelectedServices] = useState<string[]>([
    initialService,
  ]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([
    "Instagram",
    "Facebook",
  ]);
  const [duration, setDuration] = useState("Monthly Growth Retainer");
  const [budget, setBudget] = useState("₹15,000 – ₹35,000 / mo");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refId, setRefId] = useState<string | null>(null);

  const toggleItem = (
    list: string[],
    setList: (v: string[]) => void,
    value: string
  ) => {
    setList(
      list.includes(value) ? list.filter((x) => x !== value) : [...list, value]
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.submitQuote({
        name,
        brand,
        email,
        phone,
        services: selectedServices,
        platforms: selectedPlatforms,
        duration,
        budget,
      });
      setRefId(res.referenceId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not submit quote.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Growth Plan Builder"
        titleBold="Request a Custom"
        titleLight="AD Wala Growth Quote"
        subtitle="Pick the exact services you want — Instagram & Facebook Setup, Reels & Posts, Meta Ads, Google Business Profile, and WhatsApp Auto-Bot."
        breadcrumb={[
          { label: "Contact Us", to: "/contact" },
          { label: "Growth Quote" },
        ]}
      />

      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[960px] mx-auto px-6 bg-white border border-black/[0.08] p-8 sm:p-12">
          {refId ? (
            <div className="text-center py-10">
              <CheckCircle2 className="w-12 h-12 text-[#B88000] mx-auto mb-4" />
              <h2 className="text-[28px] font-medium text-black mb-2">
                Growth Quote Logged Successfully
              </h2>
              <p className="text-[13px] font-mono text-[#B88000] mb-3">
                NestJS Reference ID: {refId}
              </p>
              <p className="text-[15px] text-[#666666] max-w-lg mx-auto mb-6">
                We&apos;ve received your plan for{" "}
                <strong className="text-black">{selectedServices.join(", ")}</strong>{" "}
                across{" "}
                <strong className="text-black">{selectedPlatforms.join(", ")}</strong>.
                Our AD Wala strategist will send your custom proposal on WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => setRefId(null)}
                className="editorial-link-btn cursor-pointer"
              >
                BUILD ANOTHER QUOTE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {error && (
                <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-[13px]">
                  {error}
                </div>
              )}

              <div>
                <label className={labelCls}>1. Select Services Needed</label>
                <div className="flex flex-wrap gap-2.5">
                  {SERVICE_ASSETS.map((asset) => {
                    const active = selectedServices.includes(asset.shortTitle);
                    return (
                      <button
                        key={asset.slug}
                        type="button"
                        onClick={() =>
                          toggleItem(
                            selectedServices,
                            setSelectedServices,
                            asset.shortTitle
                          )
                        }
                        className={`px-4 py-2 text-[13px] border transition-colors cursor-pointer ${
                          active
                            ? "bg-[#F5B800] text-[#111111] border-[#F5B800]"
                            : "bg-[#faf9f6] text-black border-black/15 hover:border-[#F5B800]"
                        }`}
                      >
                        {asset.shortTitle}
                        {asset.badge ? " ★" : ""}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className={labelCls}>2. Priority Channels</label>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Instagram",
                    "Facebook",
                    "Meta Ads Manager",
                    "Google Business (GMB)",
                    "WhatsApp Auto-Bot",
                  ].map((ch) => {
                    const active = selectedPlatforms.includes(ch);
                    return (
                      <button
                        key={ch}
                        type="button"
                        onClick={() =>
                          toggleItem(selectedPlatforms, setSelectedPlatforms, ch)
                        }
                        className={`px-4 py-2 text-[13px] border transition-colors cursor-pointer ${
                          active
                            ? "bg-black text-white border-black"
                            : "bg-[#faf9f6] text-black border-black/15 hover:border-black"
                        }`}
                      >
                        {ch}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Engagement Type</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className={inputCls}
                  >
                    <option>One-Time Setup + Auto-Bot</option>
                    <option>Monthly Growth Retainer</option>
                    <option>3-Month Scale Sprint</option>
                    <option>6–12 Month Full Partner</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Monthly Marketing Budget</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={inputCls}
                  >
                    <option>₹15,000 – ₹35,000 / mo</option>
                    <option>₹35,000 – ₹75,000 / mo</option>
                    <option>₹75,000 – ₹1.5L / mo</option>
                    <option>₹1.5L+ / mo (Aggressive Scale)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Business / Brand Name *</label>
                  <input
                    type="text"
                    required
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Work Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-9 py-4 bg-[#F5B800] hover:bg-[#111111] disabled:opacity-60 text-[#111111] hover:text-white text-[12px] font-medium uppercase tracking-[0.22em] transition-colors cursor-pointer"
              >
                {loading ? "SAVING QUOTE..." : "GET MY CUSTOM GROWTH PLAN"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
