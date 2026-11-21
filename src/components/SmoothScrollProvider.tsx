import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global Lenis smooth inertia scroll synced with GSAP ScrollTrigger.
 */
export function SmoothScrollProvider() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Expose reset on route change
    lenis.scrollTo(0, { immediate: true });

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}
