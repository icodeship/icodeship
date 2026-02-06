// React and React-related imports
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Helmet } from "react-helmet-async";
import { getImageSrc } from "../utils/imageUtils";

// React Bootstrap components
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

// GSAP and Animation
import { ScrollTrigger } from "gsap/ScrollTrigger";

//  Components
// import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import WorkTogther from "../Components/WorkTogther";
import Brands from "../Components/Brands";
import MetaTags from "../Components/MetaTags";

// Data
import Banner_Data from "../Data/Banner_Data";
import Solution_Data from "../Data/Solution_Data";

// Images
import what_we_do from "../assets/images/Solutions/solution_whatwedo.png";
import Map from "../assets/images/Solutions/solution_map.png";
import Solution_workflow1 from "../assets/images/Solutions/solution_workflow1.png";
import Solution_workflow2 from "../assets/images/Solutions/solution_workflow2.png";
import Solution_workflow3 from "../assets/images/Solutions/solution_workflow3.png";
import Solution_workflow4 from "../assets/images/Solutions/solution_workflow4.png";
import Solution_workflow5 from "../assets/images/Solutions/solution_workflow5.png";
import Solution_workflow6 from "../assets/images/Solutions/solution_workflow6.png";
import Solution_workflow7 from "../assets/images/Solutions/solution_workflow7.png";
import ScrollStackCards from "../Components/ScrollStackCards";

// CSS
import "../assets/css/Solution.css";
import "../assets/css/Home.css";

// Custom Animation Utilities
import {
  animateWorkCard,
  useAnimateCardsOnScroll,
  useImageRevealAnimation,
} from "../Animation/animation";

function Solution() {
  const router = useRouter();
  const { text, image } = Banner_Data.solutions;
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const greyRef = useRef(null);
  const colorRef = useRef(null);
  const sectionRef = useRef(null);

  // Prepare meta content with dynamic data
  const solutionKeywords =
    Solution_Data?.map((item) => item?.title).filter(Boolean) || [];
  const metaContent = {
    title: "Solutions",
    description:
      "Discover Codeship's innovative digital solutions designed to transform your business. From custom software development to enterprise solutions, we deliver technology that drives growth and success.",
    keywords: [
      ...solutionKeywords,
      "digital solutions",
      "enterprise solutions",
      "custom software",
      "business transformation",
      "technology solutions",
      "digital transformation",
      "IT consulting",
    ],
    ogImage: image,
  };

  useImageRevealAnimation(greyRef, colorRef, sectionRef);

  useEffect(() => {
    if (imgRef.current) {
      animateWorkCard(imgRef.current);
    }

    if (!containerRef.current) return;

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useAnimateCardsOnScroll(containerRef);

  // --- SSR-safe dynamic spacer height ---
  const [spacerHeight, setSpacerHeight] = useState('100vh'); // fallback for SSR
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      setSpacerHeight(
        width < 768
          ? `${Solution_Data.length * 15}vh`
          : `${Solution_Data.length * 16}vh`
      );
    }
  }, []);
  // --- END SSR-safe dynamic spacer height ---

  return (
    <div>
      <MetaTags {...metaContent} />
      <Helmet>
        <title>Solutions - Codeship</title>
        <meta
          name="description"
          content="Discover Codeship's range of digital solutions designed to solve business challenges and drive growth."
        />
      </Helmet>
      <Banner text={text} image={image} />
      <Brands />

      {/* What we do section with margin-top to prevent visual overlap */}
      <section
        className="d-flex justify-content-center align-items-center w-100 h-auto what_we_do_container rounded-5 mt-5 py-4"
        ref={imgRef}
        // Reserve viewport height so no overlap
      >
        <Container className="my_container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="d-flex flex-column gap-3 gap-lg-5">
                <div>
                  <p className="font-size-25 font_weight_300 mt-md-5 m-0">
                    What We Do?
                  </p>
                  <p className="font-size-58 font_weight_600 pt-3">
                    Accelerating <br className="d-none d-lg-block" />
                    Performance. <br className="d-none d-lg-block" />
                    Improving Efficiency.
                  </p>
                </div>
                <p className="font-size-30 font_weight_300 why_choose_us_text text-justify m-0 pb-5">
                  Codeship offers tailored software solutions designed to meet
                  your unique business needs. We create custom applications that
                  streamline operations, enhance efficiency, and support your
                  growth, ensuring your technology is as dynamic and adaptable
                  as your business.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="d-flex justify-content-center mt-md-5 mt-lg-5 mt-xl-0">
                <img src={getImageSrc(what_we_do)} alt="What we do" className="img-fluid" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="d-block overflow-hidden">
        <ScrollStackCards />

        {/* Dynamic Spacer for Scroll Unlocking */}
        <section
          style={{
            height: spacerHeight,
          }}
        ></section>
      </section>

      {/* Smart solution */}
      {/* <div id="smooth-wrapper ">
        <div id="smooth-content">
          <section className="d-block d-md-none">
            <Container ref={containerRef} className="my_container mt-5">
              <p className="text-md-center font-size-50 font_weight_500  mt-5 pt-md-5">
                Smart Solutions For Your Business
                <br className="d-none d-lg-block" /> By Codeship.
              </p>

              {Solution_Data.map((item, index) => (
                <div
                  key={index}
                  className="row solution_desk_radius pt-lg-5 pb-lg-5 px-lg-5 px-3 mx-2 mx-lg-0 mt-5"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <div className="col-lg-5 d-flex flex-column justify-content-around pb-lg-5 pb-5">
                    <div className="d-flex flex-column gap-2 pb-5 mt-3 mt-md-5">
                      <p className="font-size-24 font_weight_300 pt-4 pt-lg-0">
                        {item.heading}
                      </p>
                      <p className="font-size-40 font_weight_600">
                        {item.title}
                      </p>
                    </div>
                    <div>
                      <p className="font-size-20 font_weight_300 line_height_30 text-justify solution_desk_text">
                        {item.description}
                      </p>
                      <div className="d-flex gap-2 gap-lg-5 pt-3">
                        <Button className="px-lg-4 py-2 font-size-18 font_weight_600 blue_gradient rounded-pill">
                          View Live Demo
                        </Button>
                        <Button
                          variant="outline-dark"
                          className="px-lg-4 py-2 font-size-18 font_weight_600 rounded-pill"
                          onClick={() => router.push("/purchase-contact")}
                        >
                          Purchase Product
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pb-5 pt-lg-5 pb-lg-5">
                    <div className="d-flex justify-content-lg-start justify-content-center mt-md-5">
                      <img
                        src={getImageSrc(item.image)}
                        alt={item.alt}
                        className="img-fluid ms-xl-5 mx-md-5 px-3"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Container>
          </section>
        </div>
      </div> */}
      {/* Map */}
      <section ref={sectionRef} className="py-lg-5">
        <Container className="my_container py-lg-5 pb-5 pb-md-0">
          <p className="text-md-center font-size-18">Global Scale</p>
          <p className="text-md-center font-size-46 font_weight_600">
            Trusted by companies around <br className="d-none d-lg-block" />
            the world
          </p>

          <div className="map-wrapper">
            <img src={getImageSrc(Map)} alt="layout placeholder" className="placeholder" />
            <img
              ref={greyRef}
              src={getImageSrc(Map)}
              alt="Map Grey"
              className="map-img grayscale"
            />
            <img
              ref={colorRef}
              src={getImageSrc(Map)}
              alt="Map Color"
              className="map-img colored"
            />
          </div>
        </Container>
      </section>
      {/* Work */}
      <section>
        <Container fluid className="my_container mt-lg-5">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-12">
              <p className="text-md-center text-lg-start font-size-58 font_weight_600">
                Works well with your
                <br className="d-none d-lg-block" />
                existing workflow
              </p>
              <p className="text-md-center text-lg-start font-size-24">
                Codeship integrates with tools you already use for{" "}
                <br className="d-none d-lg-block" /> customer service, project
                management, and more.
              </p>
              {/* <div className="d-flex justify-content-center justify-content-lg-start">
                <Button className="px-lg-4 py-2 mt-lg-5 mt-md-4 font-size-18 font_weight_600 blue_gradient rounded-pill">
                  See all integrations
                </Button>
              </div> */}
            </div>
            <div className="col-xl-7 col-lg-6 col-12 mt-5 mt-lg-0">
              <div className="d-flex flex-wrap justify-content-evenly mb-5">
                <img
                  src={getImageSrc(Solution_workflow1)}
                  alt=""
                  className="img-fluid workflow_icon"
                />
                <img
                  src={getImageSrc(Solution_workflow2)}
                  alt=""
                  className="img-fluid workflow_icon"
                />
                <img
                  src={getImageSrc(Solution_workflow3)}
                  alt=""
                  className="img-fluid workflow_icon"
                />
                <img
                  src={getImageSrc(Solution_workflow4)}
                  alt=""
                  className="img-fluid workflow_icon"
                />
              </div>
              <div className="d-flex flex-wrap justify-content-evenly">
                <img
                  src={getImageSrc(Solution_workflow5)}
                  alt=""
                  className="img-fluid workflow_icon"
                />
                <img
                  src={getImageSrc(Solution_workflow6)}
                  alt=""
                  className="img-fluid workflow_icon"
                />
                <img
                  src={getImageSrc(Solution_workflow7)}
                  alt=""
                  className="img-fluid workflow_icon"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <WorkTogther />
      {/* <Footer /> */}
    </div>
  );
}

export default Solution;
