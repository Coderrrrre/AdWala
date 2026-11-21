interface BrandLogoProps {
  compact?: boolean;
  inverted?: boolean;
}

/**
 * Official AdWala Brand Logo matching the user's uploaded brand artwork:
 * Stylized bold "A" with golden-yellow upward growth arrow swoosh,
 * dual-tone "AdWala" wordmark, and "— META ADS EXPERT —" tagline.
 */
export function BrandLogo({ compact = false, inverted = false }: BrandLogoProps) {
  return (
    <div className="inline-flex items-center gap-2.5 select-none group">
      {/* Signature AdWala "A" + Golden Growth Arrow Swoosh */}
      <svg
        width={compact ? 38 : 46}
        height={compact ? 34 : 40}
        viewBox="0 0 68 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        {/* Bold stylized A */}
        <path
          d="M10 51L27 9H36L53 51H43.5L39.6 40.5H23.2L19.4 51H10ZM26.2 33H36.6L31.4 19.2L26.2 33Z"
          fill={inverted ? "#ffffff" : "#111111"}
        />
        {/* Sweeping Golden Upward Growth Arrow */}
        <defs>
          <linearGradient id="adwalaGold" x1="6" y1="46" x2="62" y2="8" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E59E00" />
            <stop offset="55%" stopColor="#F5B800" />
            <stop offset="100%" stopColor="#FFE066" />
          </linearGradient>
        </defs>
        <path
          d="M5 47.5C18.5 41.2 35.5 31.2 53.5 15.8L46.8 14.8L63 7L58.8 23.6L55.3 18.8C37.5 34.4 20.5 43.8 5 47.5Z"
          fill="url(#adwalaGold)"
        />
      </svg>

      {/* Dual-tone Wordmark + Subtitle */}
      <div className="leading-none">
        <div
          className={`font-extrabold tracking-[-0.02em] flex items-baseline ${
            compact ? "text-[21px]" : "text-[25px]"
          }`}
        >
          <span className={inverted ? "text-white" : "text-[#111111]"}>Ad</span>
          <span className="text-[#E5A400]">Wala</span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`h-px w-2.5 ${
              inverted ? "bg-white/45" : "bg-black/30"
            }`}
          />
          <span
            className={`text-[7.5px] font-bold tracking-[0.2em] uppercase ${
              inverted ? "text-white/85" : "text-[#222222]"
            }`}
          >
            META ADS EXPERT
          </span>
          <span
            className={`h-px w-2.5 ${
              inverted ? "bg-white/45" : "bg-black/30"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
