'use client';

// React and React-related imports
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Container } from "react-bootstrap";
// import { Helmet } from "react-helmet-async";

// Icons
import { ChevronRight } from "lucide-react";

// GSAP and Animation
import { useImageSlideInAnimation } from "../Animation/animation";

// Components
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import WorkTogther from "../Components/WorkTogther";
import MetaTags from "../Components/MetaTags";

// Data
import Banner_Data from "../Data/Banner_Data";
import { Services_Data } from "../Data/Capable_Data";

// Utils
import { getImageSrc } from "../utils/imageUtils";

// CSS
import "../Pages/Capabilities.css";

function Capabilities() {
  const { text, image } = Banner_Data.capable;
  const router = useRouter();
  const containerRef = useRef(null);

  // Prepare meta content with null checks
  const servicesDescription =
    Services_Data?.map((service) => service?.title).filter(Boolean) || [];
  const servicePoints =
    Services_Data?.flatMap((service) =>
      service?.points?.map((point) => point?.text)
    ).filter(Boolean) || [];

  const metaContent = {
    title: "Our Capabilities",
    description: `Explore Codeship's professional services including ${servicesDescription.join(
      ", "
    )}. Expert solutions tailored for your business needs.`,
    keywords: [
      ...servicesDescription,
      ...servicePoints,
      "capabilities",
      "services",
      "solutions",
    ],
    ogImage: image,
  };

  // Run GSAP animation hook
  useImageSlideInAnimation(containerRef);

  // Smooth scroll to section based on hash
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"; // prevent browser jump
    }
    window.scrollTo(0, 0); // ensure no initial jump

    const hash = window.location.hash;
    if (hash) {
      const target = document.getElementById(hash.substring(1));

      const scrollToTarget = () => {
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      // Delay to let DOM finish mounting
      const timeout = setTimeout(scrollToTarget, 600);

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="capable_services_container">
      {/* <MetaTags {...metaContent} /> */}
      <Banner text={text} image={image} />
      <Brands />

      <section className="position-relative pt-0 mb-5">
        <Container className="my_container" ref={containerRef}>
          {Services_Data.map((service, idx) => (
            <div
              key={idx}
              id={service.id}
              className={`row mb-5 capable_service_data ${
                idx % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="col-12 col-lg-6 col-md-6">
                <div className="position-relative">
                  <p className="font-size-58 font_weight_600 mt-3">
                    {service.title}
                  </p>
                  <p className="font-size-24 line_height_30">
                    {service.description}
                  </p>
                  <div className="d-flex flex-column gap-3 mt-5">
                    {service.points.map((point, index) => (
                      <a
                        key={index}
                        href={`/capable-service/${point.href}`}
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(`/capable-service/${point.href}`);
                        }}
                        className="text-black d-flex align-items-center gap-2 text-decoration-none"
                      >
                        <ChevronRight strokeWidth={1} size={24} />
                        <p className="font-size-30 font_weight_600 m-0">
                          {point.text}
                        </p>
                      </a>
                    ))}
                  </div>

                  {idx % 2 !== 1 && (
                    <img
                      src={getImageSrc(service.imageOdd)}
                      alt=""
                      className="d-none d-xl-block img-fluid position-absolute top-25 start-50 capable_shape1"
                    />
                  )}
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-6">
                <img
                  src={getImageSrc(service.image)}
                  alt={service.title}
                  className="img-fluid mt-5 mt-lg-0 slide-img"
                />
              </div>
            </div>
          ))}
        </Container>
      </section>

      <WorkTogther />
    </div>
  );
}

export default Capabilities;
