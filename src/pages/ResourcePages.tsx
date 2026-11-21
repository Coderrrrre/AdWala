import { useState, FormEvent } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Download,
  FileText,
  BookOpen,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SectionLabel } from "../components/SectionLabel";
import { BLOG_POSTS, DOWNLOAD_ITEMS } from "../data/pagesData";
import { SITE_CONFIG } from "../data/siteConfig";
import { api } from "../lib/api";

export function ResourceCenterPage() {
  const guides = [
    {
      title: "Instagram & Facebook Monetization Checklist",
      points: [
        "Switch to Professional Business Account linked to Meta Business Suite.",
        "Publish 3+ high-retention Reels weekly with strong 3-second visual hooks.",
        "Connect WhatsApp Business & Product Catalog for direct social commerce.",
      ],
    },
    {
      title: "Google Business Profile Top-3 Ranking SOP",
      points: [
        "Set accurate primary & secondary categories plus service area coverage.",
        "Upload fresh real-store photos and keyword-rich GMB updates every week.",
        "Automate 5-star Google review requests via WhatsApp after every sale.",
      ],
    },
    {
      title: "WhatsApp Auto-Bot Conversion Blueprint",
      points: [
        "Connect Click-to-WhatsApp Meta Ads directly to an instant 2-second bot greeting.",
        "Provide tap buttons for Pricing, Brochure PDF, Location Map, and Book Call.",
        "Trigger automated 24-hour and 72-hour follow-up reminders for warm leads.",
      ],
    },
  ];

  return (
    <div>
      <PageHero
        eyebrow="Resource Center"
        titleBold="AD Wala Digital"
        titleLight="Growth Playbooks"
        subtitle="Actionable SOPs for Meta Ads, Reels creation, Google Business local SEO, and 24/7 WhatsApp Auto-Bot funnels."
        ctaLabel="Open Ad Preview Studio"
        ctaTo="/mockup"
        breadcrumb={[{ label: "Resource Center" }]}
      />

      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-16">
            {guides.map((g) => (
              <div key={g.title} className="bg-white border border-black/[0.08] p-8">
                <BookOpen className="w-6 h-6 text-[#B88000] mb-4" />
                <h3 className="text-[20px] font-medium text-black mb-4">{g.title}</h3>
                <ul className="space-y-3 text-[14px] text-[#666666] leading-relaxed">
                  {g.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B88000] shrink-0 mt-1" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-[#f3f0e6] border border-black/[0.08] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <SectionLabel text="Quick Access" />
              <h3 className="text-[26px] font-medium text-black">
                Download Checklists, Rate Cards &amp; WhatsApp Scripts
              </h3>
            </div>
            <div className="flex flex-wrap gap-5">
              <Link to="/downloads" className="editorial-link-btn">
                GO TO DOWNLOADS <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/blog" className="editorial-link-btn">
                READ OUR BLOG
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function DownloadsPage() {
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const handleDownload = (item: (typeof DOWNLOAD_ITEMS)[number]) => {
    const content = [
      `${SITE_CONFIG.brandFull} — ${item.title}`,
      `Category: ${item.category}`,
      `============================================`,
      item.description,
      ``,
      `Instagram: ${SITE_CONFIG.instagramHandle}`,
      `Email: ${SITE_CONFIG.email}`,
      `Phone: ${SITE_CONFIG.phones.join(" / ")}`,
    ].join("\n");
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${item.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setDownloadedId(item.id);
  };

  return (
    <div>
      <PageHero
        eyebrow="Playbooks & Rate Cards"
        titleBold="Downloads &"
        titleLight="Growth Templates"
        subtitle="Download AD Wala's agency package deck, Meta Ads checklist, GMB ranking blueprint, and WhatsApp Auto-Bot scripts."
        breadcrumb={[
          { label: "Resource Center", to: "/resource-center" },
          { label: "Downloads" },
        ]}
      />

      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[1000px] mx-auto px-6 space-y-4">
          {DOWNLOAD_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-black/[0.08] p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-[#F5B800]/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f3f0e6] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[#B88000]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#B88000] font-medium">
                    {item.category} · {item.size}
                  </span>
                  <h3 className="text-[19px] font-medium text-black mt-1">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-[#666666] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleDownload(item)}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-[#111111] hover:bg-[#F5B800] hover:text-[#111111] text-white text-[11px] font-medium uppercase tracking-[0.18em] transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                {downloadedId === item.id ? "DOWNLOADED" : "DOWNLOAD"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function BlogListPage() {
  return (
    <div>
      <PageHero
        eyebrow="Insights & Case Guides"
        titleBold="AD Wala"
        titleLight="Marketing Blog"
        subtitle="Practical guides on Meta Ads, Instagram monetization, Google Business Profile ranking, and WhatsApp Auto-Bot automation."
        breadcrumb={[{ label: "Blog" }]}
      />

      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-black/[0.08] group overflow-hidden flex flex-col"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="aspect-[16/9] overflow-hidden block"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#B88000] font-medium mb-2.5">
                    <span>{post.category}</span>
                    <span className="text-black/25">·</span>
                    <span className="text-[#757575] inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-[22px] font-medium text-black leading-snug mb-3">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-[#B88000] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-[14px] text-[#666666] leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
                  <span className="text-[12px] text-[#888888]">{post.date}</span>
                  <Link to={`/blog/${post.slug}`} className="editorial-link-btn">
                    READ ARTICLE <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div>
      <PageHero
        eyebrow={`${post.category} · ${post.date}`}
        titleBold={post.title}
        subtitle={post.excerpt}
        breadcrumb={[
          { label: "Blog", to: "/blog" },
          { label: post.category },
        ]}
      />

      <article className="py-16 lg:py-24 bg-[#faf9f6]">
        <div className="max-w-[820px] mx-auto px-6">
          <div className="aspect-[16/9] overflow-hidden mb-10 border border-black/[0.08]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 text-[16px] leading-[1.9] text-[#444444]">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
            <Link to="/blog" className="editorial-link-btn">
              <ArrowLeft className="w-3.5 h-3.5" /> BACK TO ALL ARTICLES
            </Link>
            <Link to="/advertising-quote" className="editorial-link-btn">
              START WITH AD WALA <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export function PayOnlinePage() {
  const [invoiceNo, setInvoiceNo] = useState("");
  const [amount, setAmount] = useState("");
  const [payerName, setPayerName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refId, setRefId] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.initiatePayment({
        invoiceNo,
        amount: Number(amount),
        payerName,
      });
      setRefId(res.referenceId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Payment initiation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Client Billing Portal"
        titleBold="Pay Online"
        titleLight="Retainers & Meta Ad Wallet"
        subtitle="Generate an instant payment reference tracked in our NestJS billing API, ready to connect with Razorpay, UPI, or NEFT."
        breadcrumb={[{ label: "Pay Online" }]}
      />

      <section className="py-20 bg-[#faf9f6]">
        <div className="max-w-[960px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 bg-white border border-black/[0.08] p-8 sm:p-10">
            <SectionLabel text="Invoice Settlement" />
            <h2 className="text-[26px] font-medium text-black mb-6">
              Initiate Payment Reference
            </h2>

            {refId ? (
              <div className="bg-[#fdf6e2] border border-[#F5B800]/30 p-7 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#B88000] mx-auto mb-3" />
                <h3 className="text-[19px] font-medium text-black mb-1">
                  Payment Reference Created
                </h3>
                <p className="text-[13px] font-mono text-[#B88000] mb-2">
                  Ref: {refId}
                </p>
                <p className="text-[14px] text-[#666666] mb-4">
                  Invoice <strong>{invoiceNo}</strong> for{" "}
                  <strong>₹{amount}</strong> ({payerName}) is logged on the
                  AD Wala NestJS server.
                </p>
                <button
                  type="button"
                  onClick={() => setRefId(null)}
                  className="editorial-link-btn cursor-pointer"
                >
                  ENTER ANOTHER INVOICE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-[13px]">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-[12px] font-medium uppercase tracking-[0.14em] text-[#333] mb-2">
                    Invoice / Retainer Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={invoiceNo}
                    onChange={(e) => setInvoiceNo(e.target.value)}
                    placeholder="e.g., ADW-INV-2026-089"
                    className="w-full bg-white border border-black/15 focus:border-[#F5B800] focus:outline-none px-4 py-3 text-[14px] text-black"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium uppercase tracking-[0.14em] text-[#333] mb-2">
                    Amount (INR ₹) *
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="25000"
                    className="w-full bg-white border border-black/15 focus:border-[#F5B800] focus:outline-none px-4 py-3 text-[14px] text-black"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-medium uppercase tracking-[0.14em] text-[#333] mb-2">
                    Business / Payer Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={payerName}
                    onChange={(e) => setPayerName(e.target.value)}
                    placeholder="Your business name"
                    className="w-full bg-white border border-black/15 focus:border-[#F5B800] focus:outline-none px-4 py-3 text-[14px] text-black"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#F5B800] hover:bg-[#111111] text-[#111111] hover:text-white text-[12px] font-medium uppercase tracking-[0.2em] transition-colors cursor-pointer"
                >
                  <CreditCard className="w-4 h-4" />{" "}
                  {loading ? "CREATING REFERENCE..." : "PROCEED TO PAYMENT"}
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5 space-y-5">
            <div className="bg-[#f3f0e6] border border-black/[0.08] p-7">
              <ShieldCheck className="w-7 h-7 text-[#B88000] mb-3" />
              <h3 className="text-[18px] font-medium text-black mb-2">
                UPI / NEFT / Razorpay Ready
              </h3>
              <p className="text-[13.5px] text-[#666666] leading-relaxed mb-4">
                Every billing reference is recorded in the NestJS backend
                (`POST /api/payments/initiate`). Plug in your live Razorpay or
                UPI checkout link when you go live.
              </p>
              <dl className="text-[13px] space-y-2 border-t border-black/10 pt-4">
                <div className="flex justify-between">
                  <dt className="text-[#757575]">Beneficiary</dt>
                  <dd className="text-black font-medium">{SITE_CONFIG.brandFull}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#757575]">Billing Desk</dt>
                  <dd className="text-[#B88000]">{SITE_CONFIG.email}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
