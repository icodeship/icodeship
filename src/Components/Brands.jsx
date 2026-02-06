'use client';

import { useEffect, useRef } from "react";
import { getImageSrc } from "../utils/imageUtils";

import veev from "../assets/images/Home/brands/veev.png";
import virtual_auditor from "../assets/images/Home/brands/visual_auditor.png";
import oi_tetra from "../assets/images/Home/brands/oi_tetra.png";
import firstmed from "../assets/images/Home/brands/firstmed.png";
import legendary from "../assets/images/Home/brands/legendary.webp";
import fmb from "../assets/images/Home/brands/fmb.png";
import ymca from "../assets/images/Home/brands/ymca.png";
import xark from "../assets/images/Home/brands/xark.png";
import call_back from "../assets/images/Home/brands/call_back.png";
import xity from "../assets/images/Home/brands/xity.webp";
import ultimasign from "../assets/images/Home/brands/ultimasign.png";
import svi from "../assets/images/Home/brands/svi.png";
import farmbrite from "../assets/images/Home/brands/farmbrite.png";
import policy_nation from "../assets/images/Home/brands/policy_nation.png";
import meals_maven from "../assets/images/Home/brands/meals_maven.png";
import ez_worldship from "../assets/images/Home/brands/ship_ez.png";
import aayraa from "../assets/images/Home/brands/aayraa.png";
import edu_home from "../assets/images/Home/brands/edu_home.png";
import tattoo from "../assets/images/Home/brands/tattoo.webp";

function Brands() {
  const brandLogos = [
    veev,
    virtual_auditor,
    oi_tetra,
    firstmed,
    legendary,
    fmb,
    ymca,
    meals_maven,
    policy_nation,
    ultimasign,
    svi,
    farmbrite,
    ez_worldship,
    call_back,
    edu_home,
    aayraa,
    tattoo,
    xark,
    xity,
  ];

  const trackRef = useRef(null);
  const animationFrameId = useRef(null);
  const scrollPos = useRef(0);
  const isUserInteracting = useRef(false);
  const resumeTimeout = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;
    scrollPos.current = track.scrollLeft;

    const updateActiveSlide = () => {
      const slides = track.querySelectorAll(".brand-slide");
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

    const step = () => {
      if (!isUserInteracting.current) {
        scrollPos.current += speed;
        if (scrollPos.current >= track.scrollWidth / 2) {
          scrollPos.current = 0;
        }
        track.scrollLeft = scrollPos.current;
      }
      updateActiveSlide();
      animationFrameId.current = requestAnimationFrame(step);
    };

    animationFrameId.current = requestAnimationFrame(step);

    const onPointerDown = () => {
      isUserInteracting.current = true;
      if (resumeTimeout.current) {
        clearTimeout(resumeTimeout.current);
        resumeTimeout.current = null;
      }
    };

    const onPointerUp = () => {
      resumeTimeout.current = setTimeout(() => {
        isUserInteracting.current = false;
      }, 2000);
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointerleave", onPointerUp);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointerleave", onPointerUp);
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, [brandLogos.length]);

  return (
    <div className="overflow-hidden p-0 mt-md-5">
      <div className="brand-track-wrapper overflow-hidden w-100 position-relative">
        <div
          ref={trackRef}
          className="brand-track d-flex gap-5"
          style={{
            overflowX: "auto",
            scrollBehavior: "auto",
            scrollbarWidth: "none",
            cursor: "grab",
          }}
        >
          {[...Array(brandLogos.length * 2)].map((_, index) => (
            <div className="brand-slide p-4" key={index}>
              <img
                src={getImageSrc(brandLogos[index % brandLogos.length])}
                alt="Brand Logo"
                className="brand_swiper object-fit-contain"
                style={{ width: "150px", height: "auto", transition: "transform 0.3s ease" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
