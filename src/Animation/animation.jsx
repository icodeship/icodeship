import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./animation.css";

gsap.registerPlugin(ScrollTrigger);

// Service card scroll animation
export const useScrollAnimation = () => {
  useGSAP(() => {
    if (typeof window !== "undefined") {
      const row = document.querySelector(".services_row");
      if (!row) return;

      const cards = gsap.utils.toArray(".service_card");
      const rowWidth = row.scrollWidth;
      const scrollAmount = rowWidth - window.innerWidth;

      const tween = gsap.to(row, {
        x: -scrollAmount,
        ease: "none",
        duration: 4,
      });

      ScrollTrigger.create({
        trigger: row,
        start: "top 20%",
        end: `+=${scrollAmount}`,
        pin: true,
        scrub: 1,
        animation: tween,
      });

      cards.forEach((card) => {
        const icon = card.querySelector(".icon-container");
        if (!icon) return;

        const calcDistance = () => {
          const cardWidth = card.offsetWidth;
          const iconWidth = icon.offsetWidth;
          const windowWidth = window.innerWidth;

          let marginRight;
          if (windowWidth <= 576) marginRight = cardWidth * -0.5;
          else if (windowWidth <= 992) marginRight = cardWidth * -0.4;
          else marginRight = cardWidth * -0.6;

          return cardWidth - iconWidth - marginRight;
        };

        let distance = calcDistance();

        window.addEventListener("resize", () => {
          distance = calcDistance();
          ScrollTrigger.refresh();
        });

        ScrollTrigger.create({
          trigger: card,
          containerAnimation: tween,
          start: "left center",
          end: "right center",
          
          onUpdate: (self) => {
            const xVal = self.progress >= 0.5 ? distance : 0;
            gsap.to(icon, {
              x: xVal,
              duration: 1.5,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
        });
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }
  }, []);
};

// Project card hover animation
export const useProjectCardHover = (
  cardRef,
  overlayRef,
  titleRef,
  onPauseAutoplay,
  onResumeAutoplay
) => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      cardRef?.current &&
      overlayRef?.current &&
      titleRef?.current
    ) {
      if (window.innerWidth < 768) return;

      const tl = gsap.timeline({ paused: true });
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      tl.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "<"
      );

      const cardEl = cardRef.current;
      const onMouseEnter = () => {
        tl.play();
        if (typeof onPauseAutoplay === "function") onPauseAutoplay();
      };
      const onMouseLeave = () => {
        tl.reverse();
        if (typeof onResumeAutoplay === "function") onResumeAutoplay();
      };

      cardEl.addEventListener("mouseenter", onMouseEnter);
      cardEl.addEventListener("mouseleave", onMouseLeave);

      return () => {
        cardEl.removeEventListener("mouseenter", onMouseEnter);
        cardEl.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, [cardRef, overlayRef, titleRef, onPauseAutoplay, onResumeAutoplay]);
};

// Highlight center logo
export const highlightCenterLogo = (trackRef) => {
  useEffect(() => {
    if (typeof window !== "undefined" && trackRef?.current) {
      const slides = trackRef.current.querySelectorAll(".brand-slide");

      const updateActiveSlide = () => {
        let centerX = window.innerWidth / 2;
        let closestSlide = null;
        let minDistance = Infinity;

        slides.forEach((slide) => {
          const rect = slide.getBoundingClientRect();
          const slideCenter = rect.left + rect.width / 2;
          const distance = Math.abs(slideCenter - centerX);

          if (distance < minDistance) {
            minDistance = distance;
            closestSlide = slide;
          }
        });

        slides.forEach((slide) => {
          const img = slide.querySelector("img");
          if (!img) return;
          if (slide === closestSlide) {
            img.classList.add("active");
          } else {
            img.classList.remove("active");
          }
        });
      };

      const intervalId = setInterval(updateActiveSlide, 1000);

      return () => clearInterval(intervalId);
    }
  }, [trackRef]);
};

// Use vertical to horizontal scroll
export const useVerticalToHorizontalScroll = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const row = document.querySelector(".mobile_services_row");
      if (!row) return;

      const cards = gsap.utils.toArray(".mobile_service_card");
      const rowWidth = row.scrollWidth;
      const scrollAmount = rowWidth - window.innerWidth;

      if (scrollAmount <= 0) return;

      const tween = gsap.to(row, {
        x: -scrollAmount,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: row.parentElement,
        start: "top top",
        end: `+=${rowWidth}`,
        pin: true,
        scrub: 1,
        animation: tween,
        anticipatePin: 1,
      });

      cards.forEach((card) => {
        const icon = card.querySelector(".mobile_icon_container");
        if (!icon) return;

        const calcDistance = () => {
          const cardWidth = card.offsetWidth;
          const iconWidth = icon.offsetWidth;
          const windowWidth = window.innerWidth;

          let marginRight;
          if (windowWidth <= 576) marginRight = cardWidth * -0.3;
          else if (windowWidth <= 992) marginRight = cardWidth * -0.4;
          else marginRight = cardWidth * -0.6;

          return cardWidth - iconWidth - marginRight;
        };

        let distance = calcDistance();

        const resizeHandler = () => {
          distance = calcDistance();
          ScrollTrigger.refresh();
        };

        window.addEventListener("resize", resizeHandler);

        ScrollTrigger.create({
          trigger: card,
          containerAnimation: tween,
          start: "left center",
          end: "right center",
          onUpdate: (self) => {
            const targetX = self.progress >= 0.5 ? distance : 0;

            gsap.to(icon, {
              x: targetX,
              duration: 1.2,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
        });
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => {
        const rowTriggers = ScrollTrigger.getAll().filter((t) => t.trigger === row || (t.vars && t.vars.trigger === row.parentElement));
        rowTriggers.forEach((t) => t.kill());
        gsap.killTweensOf(row);
        window.removeEventListener("resize", resizeHandler);
      };
    }
  }, []);
};

// Animate work card
export const animateWorkCard = (element) => {
  if (typeof window !== "undefined" && element) {
    gsap.fromTo(
      element,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }
};

// Animate count up
export const animateCountUp = (el) => {
  if (typeof window !== "undefined" && el) {
    const finalValue = parseInt(el.dataset.count, 10);
    const counter = { val: 0 };

    gsap.to(counter, {
      val: finalValue,
      duration: 2,
      ease: "power1.out",
      onUpdate: () => {
        el.innerText = `${Math.floor(counter.val).toLocaleString()} ${
          el.dataset.symbol || ""
        }`;
      },
    });
  }
};

// Use core card animations
export const useCoreCardAnimations = (cardRefs) => {
  useEffect(() => {
    if (typeof window !== "undefined" && cardRefs.current && cardRefs.current.length > 0) {
      const triggers = [];

      // Create animations for populated cards
      cardRefs.current.forEach((el) => {
        if (!el) return;

        const trigger = ScrollTrigger.create({
          trigger: el,
          start: "top 75%",
          toggleActions: "play none none none",
          onEnter: () => {
            gsap.fromTo(
              el,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
              }
            );
          },
          once: true,
        });
        
        triggers.push(trigger);
      });

      // Refresh ScrollTrigger to ensure proper calculations
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);

      return () => {
        triggers.forEach((t) => t.kill());
      };
    }
  }, [cardRefs.current?.length]);
};

// Rename countUpOnScroll to useCountUpOnScroll
export const useCountUpOnScroll = (refs) => {
  useEffect(() => {
    if (typeof window !== "undefined" && refs.current) {
      refs.current.forEach((el) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => {
            animateCountUp(el);
          },
        });

        el.addEventListener("mouseenter", () => {
          animateCountUp(el);
        });
      });
    }
  }, [refs]);
};

export const useScrollPopup = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const elements = document.querySelectorAll(".animate-from-bottom");

      if (!elements.length) return;

      elements.forEach((el) => {
        if (!(el instanceof Element)) return;

        el.style.willChange = "transform, opacity";
        el.style.backfaceVisibility = "hidden";

        if (el.tagName === "IMG" || el.querySelector("img")) {
          el.style.overflow = "hidden";
          el.style.minHeight = "200px";
        }

        gsap.set(el, {
          opacity: 0,
          y: 100,
          scale: 0.95,
          transformOrigin: "center center",
          force3D: true,
        });

        ScrollTrigger.create({
          trigger: el,
          start: "top 70%",
          onEnter: () => {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
          once: true,
        });
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    }
  }, []);
};

// Use image slide-in animation
export const useImageSlideInAnimation = (containerRef) => {
  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      // Disable animation on mobile devices
      if (window.innerWidth < 768) {
        return;
      }

      const rows = containerRef.current.querySelectorAll(".capable_service_data");

      rows.forEach((row) => {
        const img = row.querySelector("img.slide-img");
        if (!img) return;

        const fromX = row.classList.contains("flex-row-reverse") ? -100 : 100;

        gsap.fromTo(
          img,
          { x: fromX, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 50%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      return () => {
        // Kill triggers for this container only
        rows.forEach((row) => {
          const allTriggers = ScrollTrigger.getAll();
          allTriggers.forEach((t) => {
            if (t.trigger === row) {
              t.kill();
            }
          });
        });
      };
    }
  }, [containerRef]);
};

// Animate cards on scroll
export const useAnimateCardsOnScroll = (containerRef) => {
  useEffect(() => {
    const container = containerRef.current;
    if (typeof window !== "undefined" && container) {
      const cards = container.querySelectorAll(".solution_desk_radius");

      cards.forEach((card, index) => {
        card.style.zIndex = cards.length - index;

        gsap.fromTo(
          card,
          { scale: 0.5, y: 40, opacity: 0.2 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 30%",
              scrub: 0.5,
            },
          }
        );
      });
    }

    return () => {
      // Kill card-specific triggers only
      if (container) {
        const cards = container.querySelectorAll(".solution_desk_radius");
        cards.forEach((card) => {
          const allTriggers = ScrollTrigger.getAll();
          allTriggers.forEach((t) => {
            if (t.trigger === card) {
              t.kill();
            }
          });
        });
      }
    };
  }, [containerRef]);
};

// Ball Splash
const COLORS = ["#ff3f8b", "#04c2c9", "#2e55c1", "#f5a623", "#7b2ff7"];

export const BallSplash = ({ onComplete }) => {
 const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    const balls = [];
    const numBalls = 100;

    for (let i = 0; i < numBalls; i++) {
      const ball = document.createElement("div");
      ball.style.position = "absolute";
      ball.style.width = "20px";
      ball.style.height = "20px";
      ball.style.borderRadius = "50%";
      ball.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      ball.style.left = `${centerX}px`;
      ball.style.top = `${centerY}px`;
      ball.style.pointerEvents = "none";
      container.appendChild(ball);
      balls.push(ball);
    }

   const tl = gsap.timeline({
  onComplete: () => {
    balls.forEach((ball) => {
      container.removeChild(ball);
    });

    if (typeof onComplete === "function") {
      onComplete();
    }
  },
});

    balls.forEach((ball) => {
      const angle = Math.random() * Math.PI * 5;
      const distance = 100 + Math.random() * 1000;
      const splashDuration = 0.7 + Math.random() * 0.3;
      const dropDuration = 1.3 + Math.random() * 0.5;

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      // Splash outwards
      tl.to(
        ball,
        {
          x,
          y,
          ease: "power2.out",
          duration: splashDuration,
        },
        0
      );

      // Fall downward
      tl.to(
        ball,
        {
          y: `+=${300 + Math.random() * 200}`,
          x: `+=${(Math.random() - 0.5) * 80}`,
          opacity: 0,
          scale: 0.5,
          ease: "power1.in",
          duration: dropDuration,
        },
        splashDuration
      );
    });

    return () => {
      balls.forEach((ball) => {
        if (container.contains(ball)) container.removeChild(ball);
      });
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 9999,
      }}
    />
  );
};

// Animate zigzag path
export const useZigzagPathAnimation = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = document.querySelector("#zigzag-path");
      const section = document.querySelector(".software_container_section");

      if (!path || !section) return;

      const pathLength = path.getTotalLength();

      path.setAttribute("stroke", "#504CA0");
      path.setAttribute("stroke-width", "6");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke-dasharray", pathLength);
      path.style.strokeDashoffset = pathLength;

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top+=1000",
          scrub: 3,
          onLeaveBack: () => {
            gsap.set(path, { strokeDashoffset: pathLength });
          },
          invalidateOnRefresh: true,
        },
      });
    }
  }, []);
};

// Initialize image reveal animation
export const useImageRevealAnimation = (greyImgRef, colorImgRef, sectionRef) => {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !greyImgRef.current ||
      !colorImgRef.current ||
      !sectionRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const loop = gsap.timeline({ repeat: -1, yoyo: true, paused: true });

      gsap.set(colorImgRef.current, {
        clipPath: "circle(0% at 50% 50%)",
        willChange: "clip-path",
      });

      loop.to(colorImgRef.current, {
        clipPath: "circle(150% at 50% 50%)",
        duration: 3,
        ease: "power2.inOut",
      });

      loop.to(colorImgRef.current, {
        clipPath: "circle(0% at 50% 50%)",
        duration: 3,
        ease: "power2.inOut",
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 10%",
        onEnter: () => loop.play(),
        onLeave: () => loop.pause(),
        onEnterBack: () => loop.play(),
        onLeaveBack: () => loop.pause(),
      });
    }, sectionRef);

    return () => {
      ctx.revert(); // Clean up timeline + scroll trigger from context
    };
  }, [greyImgRef, colorImgRef, sectionRef]);
};

// Open modal animation
export const openModalAnimation = (modalRef) => {
  if (typeof window !== "undefined" && modalRef.current) {
    gsap.fromTo(
      modalRef.current,
      { scale: 0.8, opacity: 0, y: -60 },
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );
  }
};

// Close modal animation
export const closeModalAnimation = (modalRef, onComplete) => {
  if (typeof window !== "undefined" && modalRef.current) {
    gsap.to(modalRef.current, {
      scale: 0.8,
      opacity: 0,
      y: -60,
      duration: 0.4,
      ease: "power3.in",
      onComplete,
    });
  }
};
