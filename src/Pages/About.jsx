// React and React-related imports
import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Swiper-related imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// GSAP and ScrollTrigger
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//  Components

// import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import WorkTogther from "../Components/WorkTogther";
import About_core_card from "../Components/About_core_card.jsx";
// Data imports
import Banner_Data from "../Data/Banner_Data";
import cardData from "../Data/About_Core_Data";
import Why_Us_Data from "../Data/Why_Us_Data";
import Team_Data from "../Data/Team_Data";
import Office_Data from "../Data/Office_data.jsx";

// Image imports
import Why_us from "../assets/images/About/about_why_us.png";
import { getImageSrc } from "../utils/imageUtils";

// CSS imports
import "../assets/css/About.css";

// Custom Hooks and Animation Utilities
import useLetsTalk from "../Components/Contact_page_link.jsx";
import {
  useScrollPopup,
  useCoreCardAnimations,
  useCountUpOnScroll,
} from "../Animation/animation";

import MetaTags from "../Components/MetaTags";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const { text, image } = Banner_Data.about;

  // Prepare meta content with null checks
  const coreValues = cardData?.map((card) => card?.title).filter(Boolean) || [];
  const whyUsPoints =
    Why_Us_Data?.map((item) => item?.title).filter(Boolean) || [];
  const teamSize = Team_Data?.length || "experienced";

  const metaContent = {
    title: "About Us",
    description: `Learn about Codeship's core values: ${coreValues.join(
      ", "
    )}. A team of ${teamSize} professionals dedicated to delivering exceptional digital solutions.`,
    keywords: [
      ...coreValues,
      ...whyUsPoints,
      "about codeship",
      "our team",
      "company values",
    ],
    ogImage: image,
  };

  const letsTalk = useLetsTalk();
  const countRefs = useRef([]);
  const cardRefs = useRef([]);
  const [isClient, setIsClient] = React.useState(false);

  useCountUpOnScroll(countRefs);
  useScrollPopup();
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  useCoreCardAnimations(cardRefs);

  const setCardRef = (el, index) => {
    cardRefs.current[index] = el;
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <MetaTags {...metaContent} />
      <Banner text={text} image={image} />
      <Brands />
      {/* Core value section */}
      <section className="my_container d-lg-none d-block pb-5">
        <div className="row align-items-start">
          <div className="col-12 col-md-6 col-sm-12 col-lg-4 col-xl-6">
            <p className="font-size-54 font_weight_600 mx-3 mx-lg-0 mx-xl-0 mt-5">
              Codeship core values that keep us so well together.
            </p>
            <p className="font-size-24 mx-3 mx-lg-0 mx-xl-0">
              We offer a comprehensive range of{" "}
              <br className="d-none d-xl-block" />
              software development services tailored{" "}
              <br className="d-none d-xl-block" />
              to meet the unique needs of your{" "}
              <br className="d-none d-xl-block" />
              business.
            </p>
            <Button
              className="px-5 py-2 mt-3 mb-3 font-size-25 font_weight_500 blue_gradient rounded-5 mx-2 mx-lg-0 mx-xl-0"
              onClick={letsTalk}
            >
              Let's Talk
            </Button>
          </div>
          <div className="col-12 col-md-6 d-lg-none mt-4">
            {isClient && (
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) =>
                    `<span class="${className} custom-pagination-dot"></span>`,
                }}
                className="custom-swiper"
              >
                {cardData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="card core_card pb-2 rounded-4 border_shadow mx-3 "
                      ref={(el) => setCardRef(el, index + 4)}
                    >
                      <div className="d-flex justify-content-center pt-3">
                        <img
                          src={getImageSrc(item.icon)}
                          alt={item.title}
                          className="img-fluid"
                        />
                      </div>
                      <p className="pt-4 font-size-30 text-center font_weight_500 things_head font_color_light_blue">
                        {item.title}
                      </p>
                      <div className="d-flex justify-content-center mt-3">
                        <p className="font-size-20 text-md-center px-4">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </section>
      <section className="mb-5 pb-5 d-none d-lg-block">
        <About_core_card />
      </section>
      {/* Why us ? */}
      <section>
        <Container className="my_container">
          <div className="row">
            <div className="col-lg-5 col-sm-12 col-12">
              <img src={getImageSrc(Why_us)} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-7 col-sm-12 col-12">
              <p className="font-size-18 font_weight_500">Why Choose Us?</p>
              <p className="font-size-62 font_weight_600">
                Why Working with <br />
                Codeship?
              </p>
              <p>
                We offer a comprehensive range of software development services
                tailored to meet the unique needs of your business. A
                full-service creative agency designing and building inventive
                digital experiences across all platforms and brand touchpoints.
              </p>
              <div className="row g-2">
                {Why_Us_Data.map((item, index) => (
                  <div className="col-12 col-sm-6" key={item.id}>
                    <div className="card border_shadow rounded-4 ">
                      <div className="d-flex gap-3 align-items-center">
                        <img
                          src={getImageSrc(item.img)}
                          alt=""
                          className="img-fluid"
                          style={{ maxWidth: 128, height: "auto" }}
                        />
                        <div className="d-flex flex-column justify-content-center flex-grow-1">
                          <p
                            className="font-size-46 font_weight_700 pt-2 m-0 text-break"
                            data-count={item.count}
                            data-symbol={item.symbol || ""}
                            ref={(el) => {
                              if (el) countRefs.current[index] = el;
                            }}
                          >
                            0 {item.symbol}
                          </p>
                          <p className="font_weight_500 font-size-16 p-0 text-break">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Team members */}
      <section className="mt-4">
        <Container fluid>
          <p className="font-size-58 text-md-center font_weight_600 mt-5">
            Simply, a legendary team
          </p>
          <div className="d-flex justify-content-center">
            <p className="font-size-28 text-md-center">
              Fueled by passion, expertise, and collaboration, our diverse team
              at Codeship is
              <br className="d-none d-lg-block" />
              dedicated to building successful products.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            slidesPerView={5}
            spaceBetween={50}
            // centeredSlides={true}
            loop={true}
            freeMode={true}
            className="mySwiper mt-5 mb-3 px-lg-0"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {Team_Data.map((member, index) => (
              <SwiperSlide key={index}>
                <div className=" d-flex justify-content-center align-items-center rounded-4 member-card overflow-hidden position-relative">
                  <img
                    src={getImageSrc(member.img)}
                    alt={member.name}
                    className="position-relative img-fluid "
                  />
                  <div className="position-absolute bottom-0 text-center member_info z-2 rounded-4 w-100 p-2">
                    <p className="text-white font-size-18 font_weight_700 m-0">
                      {member.name}
                    </p>
                    <p className="text-white font-size-16 font_weight_500 mt-1">
                      {member.position}
                    </p>
                    <div className="d-flex gap-3 justify-content-center mt-1  mb-2">
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="lg"
                          color="white"
                        />
                      </a>
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          size="lg"
                          color="white"
                        />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="lg"
                          color="white"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

       
        </Container>
      </section>
      {/* Office */}
      <section>
        <Container className="my_container pt-3">
          <p className="font-size-62 font_weight_600 text-md-center">
            Get a feeling at our office
          </p>
          <p className="font-size-30 text-md-center">
            Dynamic energy and collaborative spirit defines our workspace and
            its remarkable people.
          </p>

          {/* Desktop View */}
          <div className="row d-none d-md-flex">
            {Office_Data.map((item, index) => (
              <div
                key={index}
                className={`col-md-6 ${index % 2 === 1 ? "About_office" : ""}`}
              >
                <div className="rounded-4 animate-from-bottom">
                  <div className="d-flex justify-content-center mt-lg-2 pt-lg-3">
                    <img
                      src={getImageSrc(item.img)}
                      alt={`img ${index + 1}`}
                      className="img-fluid rounded-5"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="d-md-none d-block">
            {isClient && (
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper office-card animate-from-bottom"
              >
                {Office_Data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="office-card annimate-from-bottom">
                      <div className="rounded-4">
                        <div className="d-flex justify-content-center mt-3 pt-3">
                          <img
                            src={getImageSrc(item.img)}
                            alt={`img ${index + 1}`}
                            className="img-fluid pt-lg-5 rounded-5"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </Container>
      </section>
      <WorkTogther />
      {/* <Footer /> */}
    </div>
  );
}

export default About;
