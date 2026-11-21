interface SectionLabelProps {
  text: string;
  light?: boolean;
  centered?: boolean;
}

/**
 * Signature overlapping double-circle editorial pill harmonized to AdWala's Gold & Obsidian logo theme.
 */
export function SectionLabel({ text, light = false, centered = false }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 mb-4 ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="relative inline-flex items-center" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-[#F5B800]" />
        <span
          className={`w-2.5 h-2.5 rounded-full -ml-1 ${
            light ? "bg-white/85" : "bg-[#111111]"
          }`}
        />
      </span>
      <span
        className={`text-[12px] font-semibold uppercase tracking-[0.22em] ${
          light ? "text-[#F5B800]" : "text-[#B88000]"
        }`}
      >
        {text}
      </span>
    </div>
  );
}
