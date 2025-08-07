// React Core
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet-async";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Data
import Things_Data from "../Data/Things_Data";
import Banner_Data from "../Data/Banner_Data";
import { projects } from "../Data/Project_Data";
import { softwareData } from "../Data/Software_Data";

// Components
import Header from "../Components/Header.jsx";
import Banner from "../Components/Banner.jsx";
import Brands from "../Components/Brands.jsx";
import Contact from "../Components/Contact.jsx";
import Testimonial from "../Components/Testimonial.jsx";
import CustomModal from "../Components/Modal.jsx";
import "../Components/Contact_page_link";
import Home_service from "../Components/Home_service";
import MetaTags from "../Components/MetaTags";

// Animation Hooks & Utils
import {
  useScrollAnimation,
  useProjectCardHover,
} from "../Animation/animation";
import Animation from "../Animation/TechStackAnimation";
import "../assets/css/Home.css";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

// React Bootstrap
import { Container, Button } from "react-bootstrap";

// FontAwesome & Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Assets
import map from "../assets/images/Home/map.webp";
import AWS from "../assets/images/Home/aws.png";
import Nodejs from "../assets/images/Home/nodejs.png";
import React_img from "../assets/images/Home/react.png";
import Angular_img from "../assets/images/Home/angularJS.png";

// Constants
const { text, image } = Banner_Data.home;

// project Modal

// Add this component above Home()
function ProjectSwiperSlide({
  project,
  index,
  activeIndex,
  handleCardClick,
  pauseAutoplay,
  resumeAutoplay,
}) {
  const cardRef = React.useRef(null);
  const overlayRef = React.useRef(null);
  const titleRef = React.useRef(null);

  useProjectCardHover(
    cardRef,
    overlayRef,
    titleRef,
    pauseAutoplay,
    resumeAutoplay
  );

  return (
    <SwiperSlide
      key={index}
      className="d-flex justify-content-center align-items-center rectangle-slide"
    >
      <div
        className={`project_card position-relative ${
          activeIndex === index ? "active-mobile" : ""
        }`}
        onClick={() => handleCardClick(project, index)}
        ref={cardRef}
      >
        <img
          src={project.image}
          alt={project.title}
          className="project_image w-100 h-auto object-fit-cover"
        />
        <div
          className="project_overlay_desktop position-absolute bottom-0 start-0 w-100 d-flex flex-column justify-content-end align-items-center pb-5 pointer-events-none"
          ref={overlayRef}
        >
          <div ref={titleRef}>
            <p className="project_title font-size-62 font_weight_600 text-white mb-2">
              {project.title}
            </p>
            <div className="d-flex gap-2 flex-wrap justify-content-center">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="badge bg-light text-dark px-3 py-2 rounded-pill"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {activeIndex === index && (
          <div className="mobile-text-pop text-white text-md-center mt-3 d-md-none">
            <p className="fs-4 mb-2">{project.title}</p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="badge bg-light text-dark px-3 mb-2 py-2 rounded-pill"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </SwiperSlide>
  );
}
const ThingsCard = ({ item, index, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      key={index}
      className={`h-100 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        padding: "6px",
        margin: "-6px",
      }}
    >
      <div
        className="card things_card border_shadow border-0 rounded-4  d-flex flex-column"
        style={{
          transition: "all 0.3s ease",
          transform: isHovered ? "rotate(-3deg)" : "rotate(0deg)",
          backgroundColor: isHovered ? "#49499d" : "transparent",
          color: isHovered ? "white" : "#49499d",
        }}
      >
        <div className="card-body d-flex flex-column  border-0 ">
          <div className="card-title ms-4">
            <div className="d-flex">
              <div className="position-relative pe-5 things_icon_container">
                <img
                  src={item.hoverIcon}
                  alt="hover icon"
                  className="things_head things_hover_icon position-absolute pt-2 "
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    zIndex: 2,
                  }}
                />
                <img
                  src={item.icon}
                  alt="icon"
                  className="things_head things_icon position-absolute pt-2 "
                  style={{
                    opacity: isHovered ? 0 : 1,
                    transition: "opacity 0.3s ease",
                    zIndex: 1,
                  }}
                />
              </div>
              <p className="font-size-24 font_weight_500 things_head ps-3 pt-2">
                {item.title}
              </p>
            </div>
          </div>
          <div
            className="d-flex justify-content-center font-size-18 font_weight_400  pb-2 px-3"
            style={{ color: isHovered ? "white" : "black" }}
          >
            {item.description}
          </div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  const navigate = useNavigate();
  // Data slices for cards
  const topCards = Things_Data.slice(0, 2);
  const bottomCards = Things_Data.slice(2, 4);

  // Refs for project card hover animations
  const cardRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);

  // Custom hooks for animation and hover effects
  useProjectCardHover(cardRef, overlayRef, titleRef);
  useScrollAnimation();

  // Software section refs and state
  const sectionRef = useRef(null);
  const iconsRef = useRef([]);
  const imageRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Projects section refs and state
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});
  const [modalData, setModalData] = useState(null);

  // Create refs for project cards at the top level
  const projectCardRefs = useRef([]);
  const projectOverlayRefs = useRef([]);
  const projectTitleRefs = useRef([]);

  // Initialize refs arrays
  useEffect(() => {
    projectCardRefs.current = projectCardRefs.current.slice(0, projects.length);
    projectOverlayRefs.current = projectOverlayRefs.current.slice(
      0,
      projects.length
    );
    projectTitleRefs.current = projectTitleRefs.current.slice(
      0,
      projects.length
    );
  }, [projects.length]);

  // Pause and resume autoplay helpers
  const pauseAutoplay = () => swiperRef.current?.autoplay?.stop();
  const resumeAutoplay = () => swiperRef.current?.autoplay?.start();

  // Handle project card click
  const handleCardClick = (project, index) => {
    if (window.innerWidth < 768) {
      if (activeIndex === index) {
        // Second tap: open iframe modal
        if (project.href) {
          setModalData({ title: project.title, link: project.href });
          setShowModal(true);
        }
      } else {
        // First tap: show tags + pause autoplay
        setActiveIndex(index);
        pauseAutoplay();
      }
    } else {
      // Desktop: open modal on click
      if (project.href) {
        setModalData({ title: project.title, link: project.href });
        setShowModal(true);
      }
    }
  };

  const handlePurchaseClick = () => {
    navigate("/purchase-contact");
  };

  // Handle opening purchase form modal
  useEffect(() => {
    // --- ScrollTrigger setup for software section ---
    const section = sectionRef.current;
    const totalItems = softwareData.length;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${window.innerHeight * totalItems}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.floor(progress * totalItems + 0.5);
        setCurrentIndex(newIndex >= totalItems ? totalItems - 1 : newIndex);
      },
    });

    return () => trigger.kill();
  }, [softwareData.length]);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth >= 768) return; // desktop: ignore

      // If clicked outside any project card
      const clickedCard = e.target.closest(".project_card");
      if (!clickedCard && activeIndex !== null) {
        setActiveIndex(null);
        resumeAutoplay();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeIndex]);

  // Prepare meta content with null checks
  const servicesOffered =
    Things_Data?.map((item) => item?.title).filter(Boolean) || [];
  const softwareOffered =
    softwareData?.map((item) => item?.title).filter(Boolean) || [];

  const metaContent = {
    title: "Codeship - Innovative Digital Solutions",
    description: `Leading digital solutions provider offering ${servicesOffered.join(
      ", "
    )}. Transform your business with Codeship's innovative technology solutions.`,
    keywords: [
      ...servicesOffered,
      ...softwareOffered,
      "digital transformation",
      "technology solutions",
      "custom software",
      "web development",
      "mobile apps",
    ],
    ogImage: image, // Using banner image from Banner_Data
    canonicalUrl: "https://codeship.in", // Add your actual domain
  };

  return (
    <div className="pb-5">
      <MetaTags {...metaContent} />
      <div className="overflow-hidden">
        <Banner text={text} image={image} />
        <Brands />
        {/* Map section */}
        <section className="d-flex justify-content-center align-items-center  my-4 pt-xl-5">
          <img
            src={map}
            alt=""
            className="img-fluid position-relative pt-0 pt-lg-5"
          />
          <div className="position-absolute d-flex justify-content-center align-items-center flex-column map_text">
            <p className="font-size-40 font_weight_400 md:text-md-center mx-3 mx-lg-5">
              Since our founding in 2021, Codeship has rapidly{" "}
              <br className="d-none d-md-block" /> grown into a dynamic and
              thriving company.
            </p>
            <p className="font-size-40 font_weight_400 md:text-md-center mx-3">
              With a shared dedication to innovation and a{" "}
              <br className="d-none d-md-block" /> customer-centric approach,
              our team brings a <br className="d-none d-md-block" /> wealth of
              experience and skills to the table.
            </p>
          </div>
        </section>

        {/* Things can do section */}
        <section className="py-xl-5">
          <Container className="my_container py-lg-5">
            <div className="row">
              <div className="col-12 col-xl-5">
                <p className="font-size-58 font_weight_600 line_height_70 ps-3">
                  Some of the things we can do for you
                </p>
                <p className="font-size-24 font_weight_400 ps-3 pb-3">
                  We offer a comprehensive range of software development
                  services tailored to meet the unique needs of your business.
                </p>
              </div>
              <div className="col-12 col-xl-7 mb-5">
                <div className="row">
                  <div className="d-none d-sm-flex flex-column gap-5 col-sm-6 ">
                    {topCards.map((item, index) => (
                      <ThingsCard key={index} item={item} index={index} />
                    ))}
                  </div>
                  <div className="d-none d-sm-flex flex-column gap-5 col-sm-6">
                    {bottomCards.map((item, index) => (
                      <ThingsCard key={index} item={item} index={index} />
                    ))}
                  </div>
                  <div className="d-flex d-sm-none justify-content-center align-items-center d-xl-none px-lg-5 px-pd-3 ">
                    <Swiper
                      modules={[Pagination]}
                      loop={Things_Data.length > 3}
                      slidesPerView={1}
                      spaceBetween={50}
                      pagination={{
                        clickable: true,
                        renderBullet: (index, className) =>
                          `<span class="${className} custom-pagination-dot"></span>`,
                      }}
                      className="custom-swiper p-0"
                    >
                      {Things_Data.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="card things_card pb-sm-0 rounded-4 border-0 mb-4 h-100">
                            <div className="card-body border_shadow m-3 border-0 rounded-4  d-flex flex-column ">
                              <div className="card-title">
                                <div className="d-flex gap-5 ">
                                  <div className="position-relative  things_icon_container">
                                    <img
                                      src={item.hoverIcon}
                                      alt=""
                                      className="things_head things_hover_icon position-absolute"
                                    />
                                    <img
                                      src={item.icon}
                                      alt=""
                                      className="things_head things_icon position-absolute "
                                    />
                                  </div>
                                  <p className="font-size-28 font_weight_500 things_head ms-3 mt-2 p-0">
                                    {item.title}
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex justify-content-center font-size-18 font_weight_400 line_height_24 pb-2">
                                {item.description.split("\n").map((line, i) => (
                                  <React.Fragment key={i}>
                                    {line}
                                    <br className="d-none d-xxl-block" />
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* Service section */}
        <Home_service />
        <div className="bg-black">
          <div className="stack-container   position-relative overflow-x-hidden">
            {/* Sofware section */}
            <div className="section1 position-relative">
              <section
                className="software-wrapper pt-5 overflow-hidden w-100 pb-5 pb-md-0  bg-black"
                ref={sectionRef}
              >
                <div className="software-pinned d-flex justify-content-center align-items-center w-100 h-100">
                  <Container className="my_container mt-5 d-flex justify-content-center align-items-center">
                    <div className="row">
                      <div className="col-lg-3 col-xl-2 col-md-4 d-flex flex-wrap flex-md-column text-white pb-5 pb-md-0">
                        <div className="mt-5 mt-md-0 pt-lg-0 pt-3">
                          {softwareData.map((item, index) => {
                            const isActive = index === currentIndex;
                            return (
                              <div
                                key={index}
                                className={`d-flex gap-5 ${
                                  isActive ? "d-flex" : "d-none"
                                } d-md-flex`} // hide non-active items on mobile
                                id="purchase-form"
                              >
                                <div
                                  className={`d-flex flex-column justify-content-center align-items-center transition-all pb-4 pb-md-0   ${
                                    isActive ? "scale-up" : ""
                                  }`}
                                >
                                  <img
                                    ref={(el) => (iconsRef.current[index] = el)}
                                    className={`icon icon_background background_color_light_blue p-2 p-sm-2 p-md-3 rounded-circle ${
                                      isActive ? "focus-ring" : ""
                                    }`}
                                    src={item.icon}
                                    alt={item.name}
                                  />
                                  <span className="icon_background_line d-none d-md-block background_color_light_blue p-1 m-0 text-nowrap"></span>
                                </div>
                                <p
                                  className={`font-size-18 text-nowrap mt-3 ${
                                    isActive
                                      ? "text-focus-ring position-relative p-0 font_weight_600"
                                      : ""
                                  }`}
                                >
                                  {item.name}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                        <div className="text-md-center d-lg-flex d-none d-xl-none flex-column gap-4 justify-content-center mt-lg-3">
                          <button className="px-4 py-3 border-0 text-white blue_gradient rounded-pill border-0 mt-3 font-size-18 me-3">
                            View Live Demo
                          </button>
                          <button
                            className="px-4 py-3  border-2 border-white  bg-transparent btn-outline-light text-white rounded-pill mt-3 font-size-18"
                            onClick={() =>
                              (window.location.href = "/purchase-contact")
                            }
                          >
                            Purchase Product
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-9 col-xl-10 col-md-8 text-white">
                        <div className="d-flex justify-content-center ms-lg-5 align-items-center flex-column text-md-center">
                          <img
                            ref={imageRef}
                            rel="preload"
                            as="image"
                            src={softwareData[currentIndex].center_image}
                            className="img-fluid software_img mb-3 mt-md-3 px-md-3 pb-3"
                            alt={softwareData[currentIndex].name}
                          />
                          <p className="font-size-28 pt-lg-4 m-0 m-md-2 md:pb-4 pb-2">
                            {softwareData[currentIndex].description}
                          </p>
                        </div>
                        <div className="text-md-center d-lg-none d-xl-flex d-flex flex-wrap gap-3 justify-content-center mt-lg-3">
                          <button className="px-4 py-3 text-white blue_gradient rounded-pill border-0 font-size-16">
                            View Live Demo
                          </button>
                          <button
                            className="px-4 py-3 border-2 border-white bg-transparent btn-outline-light text-white rounded-pill  font-size-18"
                            onClick={() =>
                              (window.location.href = "/purchase-contact")
                            }
                          >
                            Purchase Product
                          </button>
                        </div>
                      </div>
                    </div>
                  </Container>
                </div>
              </section>
            </div>
          </div>
          {/* Techstack section */}
          <section className="bg-black pt-5 pb-5 px-0 ">
            <Container className=" pt-5 pb-5  my_container px-1 ">
              {/* top layer */}
              <div className="tech_stack_container">
                <div className="d-flex flex-row justify-content-center gap-3">
                  <Animation
                    imgSrc={AWS}
                    animationDirection="topLeft"
                    altText="Image from Top Left"
                  />
                  <div className="tech_box bg-white  "></div>
                  <div className="tech_box bg-white  "></div>
                  <div className="tech_box bg-white  "></div>
                  <div className="tech_box bg-white  "></div>
                </div>
                <div className="d-flex  flex-row justify-content-center mx-5 pt-2 gap-3">
                  <div className="d-flex  flex-row justify-content-center pt-lg-3 gap-3">
                    <div className="tech_box bg-white "></div>
                    <div className="tech_box bg-white "></div>
                    <div className="tech_box bg-white "></div>
                    <div className="tech_box">
                      {" "}
                      <Animation
                        imgSrc={AWS}
                        animationDirection="topToBottom"
                        altText="Image from Top Left"
                      />
                    </div>
                    <div className="tech_box bg-white "></div>
                    <Animation
                      imgSrc={Nodejs}
                      animationDirection="topRight"
                      altText="Image from Top Left"
                    />
                    <div className="tech_box bg-white "></div>
                  </div>
                </div>
                {/* middle layer */}
                <div className="d-flex  flex-row justify-content-center  align-items-center pb-lg-3 ">
                  <div className=" d-flex tech_middle_layer   d-md-flex flex-nowrap   justify-content-evenly pt-3">
                    <div className="left">
                      <div className="d-flex py-1   gap-3 ">
                        <div className="tech_box bg-white "></div>
                        <Animation
                          imgSrc={React_img}
                          animationDirection="topLeft"
                          altText="Image from Top Left"
                        />
                      </div>
                      <div className="d-flex pt-3  gap-3">
                        <Animation
                          imgSrc={Angular_img}
                          animationDirection="bottomRight"
                          altText="Image from Top Left"
                        />
                        <div className="tech_box bg-white "></div>
                      </div>
                    </div>
                    {/* middle text */}
                    <div className="d-flex  flex-column justify-content-center align-items-center  gap-3 py-sm-1 pt-0">
                      <p className="font-size-46 text-white text-md-center font_weight_600  m-0 px-3   px-md-5 ">
                        Amazing tech stack in{" "}
                        <br className="d-none d-lg-block" /> our pocket
                      </p>
                      <p className="tech_text text-white font-size-18 font_weight_400 text-md-center d-lg-block  d-none px-3 m-0">
                        Codeship turns your vision into scalable, secure
                        software. Our team experts deliver reliable solutions
                        that meet the highest standards in performance and code
                        quality.
                      </p>
                    </div>
                    <div className="right">
                      <div className="d-flex   gap-3 ">
                        <Animation
                          imgSrc={AWS}
                          animationDirection="topRight"
                          altText="Image from Top Left"
                        />
                        <div className="tech_box bg-white "></div>
                      </div>
                      <div className="d-flex pt-3 gap-3">
                        <div className="tech_box bg-white "></div>
                        <Animation
                          imgSrc={Nodejs}
                          animationDirection="bottomLeft"
                          altText="Image from Top Left"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* bottom layer */}
                <div className="d-flex  flex-row justify-content-center pt-3 pt-xl-0 pt-lg-2 pt-md-4 pt-md-0 gap-3">
                  <div className="d-flex  flex-row justify-content-center pb-3   gap-3">
                    <Animation
                      imgSrc={Angular_img}
                      animationDirection="bottomLeft"
                      altText="Image from Top Left"
                    />
                    <div className="tech_box bg-white "></div>
                    <div className="tech_box bg-white "></div>
                    <div className="tech_box bg-white "></div>
                    <Animation
                      imgSrc={React_img}
                      animationDirection="bottomToTop"
                      altText="Image from Top Left"
                    />
                    <div className="tech_box bg-white "></div>
                    <div className="tech_box bg-white "></div>
                  </div>
                </div>
                <div className="d-flex  flex-row justify-content-center pt-2    gap-3">
                  <div className="tech_box bg-white "></div>
                  <Animation
                    imgSrc={React_img}
                    animationDirection="bottomToTop"
                    altText="Image from Top Left"
                  />
                  <div className="tech_box bg-white "></div>
                  <div className="tech_box bg-white "></div>
                  <Animation
                    imgSrc={Angular_img}
                    animationDirection="bottomRight"
                    altText="Image from Top Left"
                    className="tech_sm_img"
                  />
                </div>
              </div>
            </Container>
          </section>

          {/* Projects */}
          <section className="bg-black p-0 pb-2">
            <div className="container-fluid pt-lg-5 mb-md-5">
              <div className="d-flex align-items-center justify-content-center mb-md-5">
                <p className="font-size-65 font_weight_600 font_family text-white">
                  Our Latest Projects
                </p>
              </div>

              <Swiper
                modules={[Autoplay]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                speed={1500}
                loop={true}
                grabCursor={true}
                breakpoints={{
                  576: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  992: { slidesPerView: 2 },
                  1200: { slidesPerView: 2 },
                }}
                className="project_swiper"
              >
                {projects.map((project, index) => {
                  const cardRef = useRef(null);
                  const overlayRef = useRef(null);
                  const titleRef = useRef(null);

                  useProjectCardHover(
                    cardRef,
                    overlayRef,
                    titleRef,
                    pauseAutoplay,
                    resumeAutoplay
                  );

                  return (
                    <SwiperSlide
                      key={index}
                      className="d-flex justify-content-center align-items-center rectangle-slide"
                    >
                      <div
                        className={`project_card position-relative ${
                          activeIndex === index ? "active-mobile" : ""
                        }`}
                        onClick={() => handleCardClick(project, index)}
                        ref={cardRef}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project_image w-100 h-auto object-fit-cover"
                        />
                        <div
                          className="project_overlay_desktop position-absolute bottom-0 start-0 w-100 d-flex flex-column justify-content-end align-items-center pb-5 pointer-events-none"
                          ref={overlayRef}
                        >
                          <div ref={titleRef}>
                            <p className="project_title font-size-62 font_weight_600 text-white mb-2">
                              {project.title}
                            </p>
                            <div className="d-flex gap-2 flex-wrap justify-content-center">
                              {project.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="badge bg-light text-dark px-3 py-2 rounded-pill"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {activeIndex === index && (
                          <div className="mobile-text-pop text-white text-md-center mt-3 d-md-none">
                            <p className="fs-4 mb-2">{project.title}</p>
                            <div className="d-flex flex-wrap justify-content-center gap-2">
                              {project.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="badge bg-light text-dark px-3 mb-2 py-2 rounded-pill"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="d-flex justify-content-center pt-5 pb-5">
                <Button
                  className="font-size-22 px-4 py-2 rounded-5 font_weight_500 blue_gradient border-0"
                  onClick={() => (window.location.href = "/ourworks")}
                >
                  View All{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="ps-3" />
                </Button>
              </div>
            </div>

            {showModal && modalData && (
              <CustomModal onClose={() => setShowModal(false)}>
                <iframe
                  src={modalData.link}
                  title={modalData.title}
                  className="rounded-5"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  allowFullScreen
                />
              </CustomModal>
            )}
          </section>
        </div>

        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
