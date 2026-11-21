import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Editorial magnetic cursor follower (matching reference `dsn-cursor-effect`).
 * Powered by GSAP quickTo for butter-smooth 60fps trailing motion on desktop pointers.
 */
export function MagneticCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string>("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    gsap.set([ring, dot], { xPercent: -50, yPercent: -50, opacity: 0 });

    const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });
    const dotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power2" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power2" });

    let revealed = false;

    const onMove = (e: MouseEvent) => {
      if (!revealed) {
        revealed = true;
        gsap.to([ring, dot], { opacity: 1, duration: 0.3 });
      }
      ringX(e.clientX);
      ringY(e.clientY);
      dotX(e.clientX);
      dotY(e.clientY);

      const target = e.target as HTMLElement | null;
      const cursorEl = target?.closest("[data-cursor]") as HTMLElement | null;
      const interactive = target?.closest("a, button, input, select, textarea");

      if (cursorEl) {
        setLabel(cursorEl.dataset.cursor || "");
        setActive(true);
      } else if (interactive) {
        setLabel("");
        setActive(true);
      } else {
        setLabel("");
        setActive(false);
      }
    };

    const onLeave = () => {
      revealed = false;
      gsap.to([ring, dot], { opacity: 0, duration: 0.25 });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`hidden xl:flex fixed top-0 left-0 z-[120] pointer-events-none items-center justify-center rounded-full transition-[width,height,background-color,border-color] duration-250 ${
          label
            ? "w-20 h-20 bg-[#F5B800]/90 border border-[#111111]/20 text-[#111111] shadow-lg"
            : active
            ? "w-12 h-12 bg-[#F5B800]/20 border border-[#D49600]"
            : "w-9 h-9 bg-transparent border border-[#111111]/35"
        }`}
      >
        {label && (
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase">
            {label}
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`hidden xl:block fixed top-0 left-0 z-[121] pointer-events-none rounded-full transition-opacity duration-200 ${
          label ? "opacity-0" : "w-1.5 h-1.5 bg-[#D49600]"
        }`}
      />
    </>
  );
}
