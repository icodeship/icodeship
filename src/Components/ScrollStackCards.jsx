'use client';

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Solution_Data from "../Data/Solution_Data";
import { getImageSrc } from "../utils/imageUtils";
import { Container } from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

const ScrollLockedCardStack = () => {
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(
      ".solution_desk_radius"
    );

    gsap.set(cards, {
      position: "absolute",
      width: "100%",
      top: "50%",
      left: 0,
      yPercent: 100,
      scale: 0,
      transformOrigin: "bottom",
      zIndex: (i) => cards.length - i + 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: `+=${cards.length * 100}%`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    cards.forEach((card, i) => {
      tl.to(
        card,
        {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        i
      ).set(card, { zIndex: cards.length + i }, i);
    });

    // Ensure layout is fully painted before showing
    requestAnimationFrame(() => {
      setIsReady(true);
      ScrollTrigger.refresh();
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="m-3 bottom_height dynamic_section_height"
      style={{
        position: "relative",
        ['--section-height']: `${Solution_Data.length * 100}vh`,
        ['--section-height-large']: `${Solution_Data.length * 90}vh`,
      }}
    >
      <p className="text-md-center font-size-50 font_weight_500 pb-3 mt-5 pt-md-5 px-2">
        Smart Solutions For Your Business
        <br className="d-none d-lg-block" /> By Codeship.
      </p>
      <Container
        ref={containerRef}
        className="my_container custom_height"
        style={{
          position: "relative",
          visibility: isReady ? "visible" : "hidden",
          opacity: isReady ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div>
          {Solution_Data.map((item, index) => (
            <div
              key={index}
              className="row solution_desk_radius rounded-5 p-lg-3 px-2 ms-0 mb-5  mx-lg-0 mt-5"
              style={{
                backgroundColor: item.bgColor,
                position: "absolute",
                width: "100%",
                top: "0%",
                left: 0,
                transform: "translateY(-115%)",
              }}
            >
              <div className="col-12 col-lg-7 d-flex flex-column justify-content-center  pb-lg-5 ">
                <div className="d-flex flex-column gap-2 pb-md-4 mt-3 mt-md-5">
                  <p className="font-size-24 font_weight_300 p-0 m-0 ">
                    {item.heading}
                  </p>
                  <p className="font-size-30 font_weight_600 p-0 m-0">
                    {item.title}
                  </p>
                </div>
                <div>
                  <p className="font-size-20 font_weight_300 line_height_30 text-justify solution_desk_text p-0 m-0">
                    {item.description}
                  </p>
                  <div className="d-none d-xl-flex gap-4 pt-3">
                    <a
                      href="/live-demo"
                      className="btn px-lg-4 py-2  text-white border-0 font-size-18 font_weight_600 blue_gradient rounded-pill"
                    >
                      View Live Demo
                    </a>
                    <a
                      href="/purchase-contact"
                      className="btn btn-outline-dark px-lg-4 py-2 font-size-18 font_weight_600 rounded-pill"
                    >
                      Purchase Product
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 pb-md-0   d-flex flex-wrap  flex-row flex-md-column   gap-md-4 gap-0 justify-content-center align-items-lg-center">
                <div className="d-flex justify-content-center d-lg-none">
                  <img
                    src={getImageSrc(item.image)}
                    alt={item.heading}
                    className="img-fluid solution_system_img  "
                  />
                </div>
                <img
                  src={getImageSrc(item.image)}
                  alt={item.heading}
                  className="img-fluid solution_system_img  d-none d-lg-block  "
                />

                <div className="d-flex  flex-column mt-2 flex-md-row justify-content-md-center  align-items-center d-xl-none gap-md-4 gap-2  w-100">
                  <div className="">
                    <a
                      href="/live-demo"
                      className="btn w-100 solution-button py-2 px-4 text-white border-0 font-size-16 font_weight_600 blue_gradient rounded-pill"
                    >
                      View Live Demo
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="/purchase-contact"
                      className="btn w-100 btn-outline-dark px-lg-4 px-3 py-2 font-size-16 font_weight_600 rounded-pill"
                    >
                      Purchase Product
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ScrollLockedCardStack;
