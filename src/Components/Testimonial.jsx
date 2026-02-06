import { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import { getImageSrc } from "../utils/imageUtils";

import Larrow from "../assets/images/Home/left_arrow.png";
import Rarrow from "../assets/images/Home/right_arrow.png";

import "../Pages/Home.css";
import testimonials from "../Data/Testimonial_Data";

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const rightImageRef = useRef(null);

  const handleChange = (direction) => {
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % testimonials.length
        : (currentIndex - 1 + testimonials.length) % testimonials.length;

    const fromX = direction === "next" ? 100 : -100;
    const toX = direction === "next" ? -100 : 100;

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(nextIndex);

        // Animate new content in
        gsap.fromTo(
          [textRef.current, imageRef.current],
          { opacity: 0, x: toX },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        );

        // Right image drop-in
        gsap.fromTo(
          rightImageRef.current,
          { y: -150, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "bounce.out" }
        );
      },
    });

    // Animate old content out (left + right)
    tl.to([textRef.current, imageRef.current, rightImageRef.current], {
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
    });
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section>
      <Container className="my_container ">
        <div className="row d-flex flex-column-reverse flex-lg-row">
          {/* left side */}
          <div className="col-lg-7 col-12 ">
            <p className="font-size-50 font_weight_600 mt-md-5">
              Hear What Our <br /> Customers Are Saying!
            </p>
            <div className="row  ">
              <div ref={textRef}>
                <p className="font-size-20 pe-lg-5 me-lg-5 font_weight_400 font_color_light_grey text-md-justify text-lg-start line_height_30 ">
                  "{testimonial.text}"
                </p>
                <div className="row mt-4">
                  <div className="d-flex gap-4 col-12" ref={imageRef}>
                    <div className="rounded-circle">
                      <img
                        src={getImageSrc(testimonial.img)}
                        alt={testimonial.name}
                        className="img-fluid rounded-circle w-75 "
                      />
                    </div>
                    <p className="font-size-20 font_weight_600 mt-2">
                      {testimonial.name} <br />
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
              {/* Navigation Buttons */}
              <div className="d-flex gap-4 mt-3  justify-content-start">
                <button
                  className="bg-transparent border-0  p-0"
                  onClick={() => handleChange("prev")}
                >
                  <img src={getImageSrc(Larrow)} alt="previous" />
                </button>
                <button
                  className="bg-transparent border-0 p-0"
                  onClick={() => handleChange("next")}
                >
                  <img src={getImageSrc(Rarrow)} alt="next" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 d-flex align-items-center col-12 p-0 pe-1">
            <div ref={rightImageRef}>
              <img
                src={getImageSrc(testimonial.Banner)}
                alt="testimonial visual"
                className="img-fluid mt-md-4 w-100 "
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonial;
