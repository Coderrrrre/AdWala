import { useState, useRef, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import {
  Upload,
  RotateCcw,
  ArrowLeft,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Star,
  MapPin,
  Phone,
  CheckCheck,
  Bot,
} from "lucide-react";
import { BrandLogo } from "../components/BrandLogo";

type PreviewFormat = "ig-feed" | "ig-reel" | "fb-ad" | "gmb-card" | "whatsapp-bot";

const FORMATS: { id: PreviewFormat; label: string; spec: string }[] = [
  { id: "ig-feed", label: "Instagram Sponsored Feed Ad", spec: "1080 × 1080 px · Meta Ads" },
  { id: "ig-reel", label: "Instagram Reel / Story Ad", spec: "1080 × 1920 px · 9:16 Vertical" },
  { id: "fb-ad", label: "Facebook Business Sponsored Post", spec: "1200 × 628 px · Lead Ad" },
  { id: "gmb-card", label: "Google Business Profile (GMB) Card", spec: "Local Maps Top-3 Preview" },
  { id: "whatsapp-bot", label: "WhatsApp Marketing Auto-Bot", spec: "24/7 Automated Chat Flow" },
];

export function MockupPage() {
  const [format, setFormat] = useState<PreviewFormat>("ig-feed");
  const [brandName, setBrandName] = useState("Your Business Name");
  const [headline, setHeadline] = useState("More Leads. More Growth. Book Your Free Consultation Today!");
  const [ctaText, setCtaText] = useState("Send WhatsApp Message");
  const [uploadedSrc, setUploadedSrc] = useState<string | null>(
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85"
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeFormat = FORMATS.find((f) => f.id === format) ?? FORMATS[0];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") setUploadedSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f3] flex flex-col">
      <header className="bg-white border-b border-black/[0.08] px-6 py-3.5">
        <div className="max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <Link to="/">
              <BrandLogo compact />
            </Link>
            <span className="hidden sm:inline-block h-6 w-px bg-black/15" />
            <span className="hidden sm:inline-block text-[12px] uppercase tracking-[0.2em] text-[#757575]">
              AD Wala Live Ad &amp; Bot Preview Studio
            </span>
          </div>
          <Link to="/" className="editorial-link-btn">
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO WEBSITE
          </Link>
        </div>
      </header>

      <div className="flex-1 max-w-[1360px] w-full mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls */}
        <aside className="lg:col-span-4 bg-white border border-black/[0.08] p-6 space-y-5">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B88000] mb-2">
              1. Select Ad / Channel Preview
            </label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value as PreviewFormat)}
              className="w-full bg-[#faf9f6] border border-black/15 px-4 py-3 text-[14px] text-black focus:border-[#F5B800] focus:outline-none"
            >
              {FORMATS.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label}
                </option>
              ))}
            </select>
            <p className="text-[12px] text-[#757575] mt-1.5">{activeFormat.spec}</p>
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B88000] mb-2">
              2. Upload Your Post / Banner Image
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#F5B800] hover:bg-[#111111] text-[#111111] hover:text-white text-[12px] font-medium uppercase tracking-[0.18em] transition-colors cursor-pointer"
            >
              <Upload className="w-4 h-4" /> CHOOSE CREATIVE IMAGE
            </button>
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#555] mb-1.5">
              Business Name
            </label>
            <input
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full border border-black/15 px-3.5 py-2.5 text-[14px] text-black focus:border-[#F5B800] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#555] mb-1.5">
              Ad Caption / Offer Headline
            </label>
            <textarea
              rows={2}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full border border-black/15 px-3.5 py-2.5 text-[14px] text-black focus:border-[#F5B800] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#555] mb-1.5">
              Call-To-Action Button
            </label>
            <input
              type="text"
              value={ctaText}
              onChange={(e) => setCtaText(e.target.value)}
              className="w-full border border-black/15 px-3.5 py-2.5 text-[14px] text-black focus:border-[#F5B800] focus:outline-none"
            />
          </div>

          <div className="pt-2 flex gap-2.5">
            <Link
              to={`/advertising-quote?format=${encodeURIComponent(activeFormat.label)}`}
              className="flex-1 text-center py-3 bg-[#111111] hover:bg-[#F5B800] hover:text-[#111111] text-white text-[11px] font-medium uppercase tracking-[0.18em] transition-colors"
            >
              LAUNCH THIS CAMPAIGN
            </Link>
            <button
              type="button"
              onClick={() => {
                setUploadedSrc(null);
                setBrandName("Your Business Name");
                setHeadline("Flat 30% Off This Weekend — Book Now!");
                setCtaText("Send WhatsApp Message");
              }}
              aria-label="Reset preview"
              className="px-3.5 py-3 border border-black/15 hover:border-black text-black cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </aside>

        {/* Live Preview Stage */}
        <div className="lg:col-span-8 bg-white border border-black/[0.08] p-6 sm:p-10 flex items-center justify-center min-h-[560px]">
          {format === "ig-feed" && (
            <div className="w-full max-w-[390px] border border-black/15 rounded-xl overflow-hidden bg-white shadow-lg">
              <div className="px-4 py-3 flex items-center justify-between border-b border-black/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#F5B800] text-[#111111] flex items-center justify-center text-xs font-bold">
                    {brandName.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="leading-tight">
                    <div className="text-[13px] font-semibold text-black">{brandName}</div>
                    <div className="text-[11px] text-[#757575]">Sponsored · AD Wala</div>
                  </div>
                </div>
                <span className="text-[#757575] text-sm">•••</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[#0f172a] via-[#1d4e78] to-[#3982c3] flex items-center justify-center overflow-hidden">
                {uploadedSrc ? (
                  <img src={uploadedSrc} alt="Ad creative" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-8 text-white">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-white/75">
                      {brandName}
                    </span>
                    <h3 className="text-[24px] font-semibold text-white mt-2 leading-snug">
                      {headline}
                    </h3>
                  </div>
                )}
              </div>
              <div className="bg-[#fdf6e2] px-4 py-2.5 flex items-center justify-between border-b border-black/[0.06]">
                <span className="text-[13px] font-semibold text-[#B88000]">{ctaText}</span>
                <span className="text-[#B88000] text-sm">→</span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between text-black mb-2.5">
                  <div className="flex items-center gap-3.5">
                    <Heart className="w-5 h-5" />
                    <MessageCircle className="w-5 h-5" />
                    <Send className="w-5 h-5" />
                  </div>
                  <Bookmark className="w-5 h-5" />
                </div>
                <p className="text-[13px] text-[#222]">
                  <strong className="mr-1.5">{brandName}</strong>
                  {headline}
                </p>
              </div>
            </div>
          )}

          {format === "ig-reel" && (
            <div className="w-[310px] aspect-[9/16] rounded-[28px] border-[6px] border-[#111] overflow-hidden relative bg-gradient-to-b from-[#0b132b] via-[#1e3a5f] to-[#0f172a] shadow-2xl flex flex-col justify-between p-5 text-white">
              {uploadedSrc && (
                <img
                  src={uploadedSrc}
                  alt="Reel background"
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35" />
              <div className="relative z-10 flex items-center justify-between text-xs">
                <span className="font-semibold">Reels</span>
                <span className="px-2 py-0.5 bg-white/20 rounded text-[10px]">Sponsored</span>
              </div>
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#F5B800] flex items-center justify-center text-xs font-bold">
                    {brandName.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[13px] font-semibold">{brandName}</span>
                </div>
                <p className="text-[13px] leading-snug text-white/95">{headline}</p>
                <div className="w-full py-2.5 bg-[#F5B800] text-center rounded text-[12px] font-semibold">
                  {ctaText}
                </div>
              </div>
            </div>
          )}

          {format === "fb-ad" && (
            <div className="w-full max-w-[460px] border border-black/15 rounded-xl overflow-hidden bg-white shadow-lg">
              <div className="p-4 pb-3">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#1877f2] text-white flex items-center justify-center text-xs font-bold">
                    {brandName.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-black">{brandName}</div>
                    <div className="text-[11px] text-[#757575]">Sponsored · Managed by AD Wala</div>
                  </div>
                </div>
                <p className="text-[13.5px] text-[#222]">{headline}</p>
              </div>
              <div className="aspect-[16/9] bg-gradient-to-r from-[#111827] to-[#3982c3] flex items-center justify-center overflow-hidden">
                {uploadedSrc ? (
                  <img src={uploadedSrc} alt="Facebook ad" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white text-xl font-semibold px-6 text-center">{brandName}</span>
                )}
              </div>
              <div className="p-4 bg-[#f5f6f7] flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] uppercase text-[#757575]">WhatsApp / Lead Form</div>
                  <div className="text-[14px] font-semibold text-black">{brandName}</div>
                </div>
                <span className="px-4 py-2 bg-[#F5B800] text-[#111111] text-[12px] font-medium rounded">
                  {ctaText}
                </span>
              </div>
            </div>
          )}

          {format === "gmb-card" && (
            <div className="w-full max-w-[440px] border border-black/15 rounded-xl overflow-hidden bg-white shadow-lg">
              <div className="aspect-[16/8] bg-gradient-to-r from-[#1a73e8] to-[#3982c3] flex items-center justify-center overflow-hidden">
                {uploadedSrc ? (
                  <img src={uploadedSrc} alt="Google Business cover" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-white text-center px-6">
                    <div className="text-xs uppercase tracking-[0.2em] opacity-80">Google Business Profile</div>
                    <div className="text-2xl font-semibold mt-1">{brandName}</div>
                  </div>
                )}
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-[20px] font-medium text-black">{brandName}</h3>
                    <div className="flex items-center gap-1.5 text-[13px] mt-0.5">
                      <span className="font-semibold text-black">4.9</span>
                      <div className="flex text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[#757575]">(248 Google reviews)</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-green-50 text-green-700 text-[11px] font-medium rounded">
                    Open Now
                  </span>
                </div>
                <p className="text-[13px] text-[#555]">{headline}</p>
                <div className="flex gap-2.5 pt-2">
                  <span className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 bg-[#1a73e8] text-white rounded-full text-[12px] font-medium">
                    <Phone className="w-3.5 h-3.5" /> Call Now
                  </span>
                  <span className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 border border-[#1a73e8] text-[#1a73e8] rounded-full text-[12px] font-medium">
                    <MapPin className="w-3.5 h-3.5" /> Directions
                  </span>
                </div>
              </div>
            </div>
          )}

          {format === "whatsapp-bot" && (
            <div className="w-full max-w-[380px] border border-black/15 rounded-2xl overflow-hidden bg-[#efeae2] shadow-xl">
              <div className="bg-[#075e54] text-white px-4 py-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[14px] font-semibold">{brandName} · Auto-Bot</div>
                  <div className="text-[11px] text-white/80">Official Business Account · Online 24/7</div>
                </div>
              </div>
              <div className="p-4 space-y-3 text-[13px]">
                <div className="ml-auto max-w-[82%] bg-[#d9fdd3] text-black p-3 rounded-lg shadow-sm">
                  Hi! I saw your Instagram ad. Please share details &amp; pricing.
                  <div className="text-[10px] text-right text-black/50 mt-1 inline-flex items-center gap-1 float-right">
                    10:32 PM <CheckCheck className="w-3.5 h-3.5 text-[#B88000]" />
                  </div>
                </div>
                <div className="max-w-[88%] bg-white text-black rounded-lg overflow-hidden shadow-sm">
                  {uploadedSrc && (
                    <img src={uploadedSrc} alt="WhatsApp banner" className="w-full h-36 object-cover" />
                  )}
                  <div className="p-3 space-y-2">
                    <p className="font-medium">
                      Welcome to {brandName}! 👋
                    </p>
                    <p className="text-[#444] leading-relaxed">{headline}</p>
                    <div className="pt-1 border-t border-black/10 space-y-1.5 text-center text-[#027eb5] font-medium text-[12.5px]">
                      <div className="py-1 border-b border-black/[0.06]">{ctaText}</div>
                      <div className="py-1 border-b border-black/[0.06]">View Services &amp; Pricing</div>
                      <div className="py-1">Book Free Consultation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
