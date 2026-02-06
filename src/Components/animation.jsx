'use client';

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const useRevealOnScroll = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
      gsap.set(el, {
        clipPath: "inset(0 100% 0 0)", // Fully hidden from right
        opacity: 0,
      });

      gsap.to(el, {
        clipPath: "inset(0 0% 0 0)", // Reveal
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 60%",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector]);
};

export default useRevealOnScroll;