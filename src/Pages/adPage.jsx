'use client';

import Banner from "../assets/images/Codeship_Ad/banner.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner_underline from "../assets/images/Codeship_Ad/banner_underline.png";
import { useState, useRef, useEffect } from "react";
import { serviceItems } from "../Data/ad_Service.jsx";
import Brands from "../Components/Brands.jsx";
import exclamatory from "../assets/images/Codeship_Ad/exclamatory.png";
import D_Solution_text_bg from "../assets/images/Codeship_Ad/d-solution.png";
import solution_banner from "../assets/images/Codeship_Ad/solution_banner.webp";
import { solutionSlidesData } from "../Data/ad_DigitalSolutionData.jsx";
import right_splash from "../assets/images/Codeship_Ad/right_splash.png";
import left_splash from "../assets/images/Codeship_Ad/left_splash.png";
import left_sm_splash from "../assets/images/Codeship_Ad/left_sm_splash.png";
import left_arrow from "../assets/images/Codeship_Ad/left_arrow.png";
import right_arrow from "../assets/images/Codeship_Ad/right_arrow.png";
import left_button from "../assets/images/Codeship_Ad/left_button.png";
import right_button from "../assets/images/Codeship_Ad/right_button.png";
import python_logo from "../assets/images/Codeship_Ad/python.png";
import get_started from "../assets/images/Codeship_Ad/get_started.png";
import Contact_banner from "../assets/images/Codeship_Ad/Contact_banner.webp";
import { serviceDataCard } from "../Data/ad_DigitalFutureCard.jsx";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ad_Footer from "../Components/AdFooter.jsx";
import Ad_Header from "../Components/AdHeader.jsx";
import MetaTags from "../Components/MetaTags.jsx";
import "../assets/css/ad_page.css";
import AsyncPhoneInput from "../Components/phoneInput.jsx";
import "react-phone-input-2/lib/style.css";

if (typeof window !== "undefined") {
  import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
    gsap.registerPlugin(ScrollTrigger);
  });
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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector]);
};

export default function AdPage() {
  const [groupedServices, setGroupedServices] = useState([]);

  useEffect(() => {
    const updateGroups = () => {
      const isMobile = window.innerWidth < 768; // Bootstrap's md breakpoint
      const itemsPerRow = isMobile ? 3 : 4;

      const groups = [];
      for (let i = 0; i < serviceItems.length; i += itemsPerRow) {
        groups.push(serviceItems.slice(i, i + itemsPerRow));
      }
      setGroupedServices(groups);
    };

    updateGroups(); // Initial call

    // Optional: Update on resize
    window.addEventListener("resize", updateGroups);
    return () => window.removeEventListener("resize", updateGroups);
  }, []);
  const [hoverIndex, setHoverIndex] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [centerIndex, setCenterIndex] = useState(0);
  const prevRefs = useRef(null);
  const nextRefs = useRef(null);
  useRevealOnScroll(".bg-reveal-underline");

  // form validation for Banner
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Name should contain only letters")
        .required("Name is required"),

      mobile: Yup.string()
        .required("Enter a mobile number")
        .matches(/^\+?[1-9]\d{7,14}$/, "Enter a valid mobile number"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);

      // Show toast notification
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        className: "custom-toast-container rounded-3",
        bodyClassName: "custom-toast-body",
        progressClassName: "custom-toast-progress",
      });

      // Optional: Reset form after submit
      resetForm();
    },
  });
  // Form validation for Contact section
  const formiks = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      toast.success("Message sent successfully!");
      console.log(values);
      resetForm();
    },
  });

  useEffect(() => {
    const el = document.querySelector(".banner-underline");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-underline");
          observer.unobserve(el); // Run only once
        }
      },
      { threshold: 0.5 }
    );

    if (el) {
      observer.observe(el);
    }
  }, []);

  // Meta tags for AdPage
  const metaContent = {
    title: "Transforming Ideas into Digital Solutions | Codeship",
    description:
      "Experience innovative software development services with Codeship. We specialize in web, mobile apps, UI/UX, digital marketing, and more—built to unlock your business potential.",
    keywords: [
      "software development company",
      "web development",
      "app development",
      "UI/UX design",
      "digital marketing",
      "ecommerce solutions",
      "CRM",
      "ERP",
      "HRMS",
      "hosting services",
      "Codeship Chennai",
    ],
    ogImage: "https://codeship.in/assets/og-banner-home.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    canonicalUrl: "https://codeship.in/landing", // Adjust path if needed
  };

  return (
    <div className="bg-grey-color">
      <MetaTags {...metaContent} />
      <Ad_Header />
      {/* Banner */}
      <section className="bg-grey-color">
        <Container fluid>
          <div className="row p-0 my_container mx-auto mt-lg-5">
            <div className=" col-lg-6 col-12 p-0  order-2 order-lg-1 ">
              {" "}
              <div className="d-flex justify-content-center order-2 align-items-end ">
                {" "}
                <img
                  src={Banner}
                  className="img-fluid banner_img mt-5"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 p-0 order-1 order-lg-2">
              <div className=" d-flex flex-column align-items-center align-items-lg-baseline justify-content-center text-md-center  text-lg-start mt-3 mt-lg-0">
                <div className="row">
                  <div className="col-11">
                    <div className="font-size-65 font_weight_700 m-0 tight-line-height ps-4">
                      <div className="position-relative">
                        <img
                          src={right_splash}
                          alt=""
                          className="position-absolute right_splash wave-bounce"
                        />
                        <p className="m-0 pt-5 pb-md-2 text-nowrap">
                          Transforming Ideas
                        </p>
                        <img
                          src={Banner_underline}
                          className="position-absolute  bg-reveal-underline start-0 ps-5 ps-lg-0 d-none d-md-block bottom-0"
                          alt=""
                        />
                      </div>

                      <p className="m-0 ">into Innovative</p>
                      <p className="m-0 blue_color letter-space text-nowrap ">
                        Software Solutions
                      </p>
                    </div>
                  </div>
                  <div className="col-1 d-flex justify-content-center align-items-center">
                    <img
                      src={python_logo}
                      className="arrow_icon python_img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <p className="mt-5 px-3 text-md-center text-lg-start">
                Experience a seamless blend of functionality and design that
                empowers you to achieve more. Join a community of users who are
                transforming their daily routines with our app.
              </p>

              <div className="d-flex flex-column align-items-center justify-content-center mx-3  ">
                <div className="d-flex justify-content-center align-items-center pe-5 pe-lg-0">
                  <img
                    src={right_arrow}
                    id="swirlArrow"
                    style={{ transform: "rotate(45deg)" }}
                    alt=""
                    className="d-lg-none   arrow_icon"
                  />
                  <p className="font-size-24 font_weight_700 text-md-center ps-lg-5 ps-0 ms-0  ms-lg-5 mb-4 pb-5 pb-lg-0">
                    Join the <span className="blue_color">Innovation</span>
                  </p>
                </div>
                <div className="w-100 d-flex justify-content-center">
                  <div className="me-3 d-flex align-items-end  mb-4">
                    {" "}
                    <img
                      src={right_arrow}
                      alt=""
                      className="d-none d-lg-block swirl-point-out "
                    />
                  </div>
                  <form
                    onSubmit={formik.handleSubmit}
                    className="card banner_form_width w-100 p-4 rounded-4 border-1"
                  >
                    <label className="mb-1 font-size-12 font_weight_500 text-black">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={`form-control rounded-4 mb-1 ${
                        formik.touched.name && formik.errors.name
                          ? "is-invalid"
                          : ""
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="text-danger mb-2 font-size-12">
                        {formik.errors.name}
                      </div>
                    )}

                    <label className="mb-1 font-size-12 font_weight_500 text-black">
                      Mobile Number
                    </label>
                    <AsyncPhoneInput
                      value={formik.values.mobile}
                      onChange={(phone) =>
                        formik.setFieldValue("mobile", phone)
                      }
                    />

                    {formik.touched.mobile && formik.errors.mobile && (
                      <div className="text-danger mb-3 font-size-12">
                        {formik.errors.mobile}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn orange-bg text-white w-100 rounded-4 mt-2 px-4"
                    >
                      Request a Callback
                    </button>
                  </form>

                  {/* <ToastContainer /> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Our services */}
      <section>
        <Container fluid className="bg-grey-color">
          <div className="my_container mx-auto my-5 bg-grey-color">
            <div className="d-flex justify-content-center align-items-center  ps-5">
              <p className="font-size-35 font_weight_700 text-md-center ">
                <span className="blue_color">Our</span> Services
              </p>
              <img
                src={left_arrow}
                style={{ transform: "rotate(-45deg)" }}
                alt=""
                className="d-lg-none  arrow_icon  "
              />
            </div>
            <div className="row ">
              <div className="col-3 d-none d-lg-flex justify-content-end">
                <div>
                  <img
                    src={right_arrow}
                    className="img-fluid wave-bounce"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-lg-6 ">
                <div className="d-flex justify-content-end service_icon  ">
                  <img
                    src={right_splash}
                    className="pb-2 right_splash wave-bounce arrow_icon"
                    alt=""
                  />
                </div>
                <div className="row mx-2">
                  {serviceItems.map((item, index) => (
                    <div
                      key={index}
                      className="col-4 col-md-3 col-lg-3 d-flex flex-column align-items-center gap-3 py-3 rounded-5 transition"
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                      style={{
                        transition: "background 0.3s ease",
                      }}
                    >
                      <div
                        className="position-relative"
                        style={{ height: "80px" }}
                      >
                        <img
                          src={item.icon}
                          alt={item.title}
                          className={`service_icon_img position-absolute top-0 start-50 translate-middle-x transition-opacity ${
                            hoverIndex === index ? "opacity-0" : "opacity-100"
                          }`}
                          style={{ transition: "opacity 0.3s ease" }}
                        />
                        <img
                          src={item.hover_icon}
                          alt={item.title}
                          className={`service_icon_img position-absolute top-0 start-50 translate-middle-x transition-opacity ${
                            hoverIndex === index ? "opacity-100" : "opacity-0"
                          }`}
                          style={{ transition: "opacity 0.3s ease" }}
                        />
                      </div>
                      <p className={`text-md-center pt-3 pt-md-5 m-0`}>
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-end d-none pe-3">
                <img
                  src={left_arrow}
                  className="pb-5 wave-bounce "
                  style={{ transform: "rotate(45deg)" }}
                  alt=""
                />
              </div>
              <div className="col-3 d-none d-lg-flex align-items-end">
                {" "}
                <div>
                  <img
                    src={left_arrow}
                    style={{ transform: "rotate(-30deg)" }}
                    className="pb-5 wave-bounce"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="service-slider-wrapper text-md-center d-none">
              <Swiper
                className="service-slide my-5"
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                  el: ".service-pagination",
                  renderBullet: (_, className) =>
                    `<span class="${className}"></span>`,
                }}
                modules={[Pagination]}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
              >
                {serviceItems.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="service-slide-content d-flex flex-column align-items-center gap-3 py-3">
                      <img src={item.icon} alt={item.title} className="px-4" />
                      <p className="text-md-center m-0">{item.title}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <Brands />
        </Container>
      </section>

      {/* Unlock Your Potential withOur Solutions*/}
      <section className="my_container mx-auto mt-lg-5 py-5  ">
        <div className="row p-0 mx-2     ">
          <div className="col-lg-6 col-12 pe-0  ">
            <div className="tight-line-height pb-5">
              <p className="font-size-16 font_weight_600 text-md-center text-lg-start pt-md-5 pt-0">
                Empower
              </p>
              <p className="font-size-62 font_weight_700 text-md-center text-lg-start">
                Unlock Your Potential with{" "}
              </p>
              <div className="d-flex gap-md-3 justify-content-center justify-content-lg-start ">
                <div>
                  <p className="font-size-62 font_weight_700 pe-5  ">Ours</p>
                </div>
                <div className="position-relative d-flex justify-content-center">
                  <p className="m-0 pb-2 text-white px-xl-4 font-size-46 mx-3 mx-md-0 ">
                    Solutions
                  </p>
                  <img
                    src={D_Solution_text_bg}
                    className="position-absolute our_solution_bg bg-reveal-underline   z-n1 top-0"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <p className="font-size-24 ">
              Experience unparalleled efficiency and innovation with our
              software development services. Our tailored solutions are designed
              to meet your unique business needs.
            </p>
            <div className="d-flex justify-content-between">
              <div>
                <p className="font-size-58 font_weight_700 blue_color">Boost</p>
                <p className="pe-5">
                  Increase productivity and streamline your operations.
                </p>
              </div>
              <div>
                <p className="font-size-58 font_weight_700 blue_color">
                  Enhance
                </p>
                <p>Elevate user experience with cutting-edge technology.</p>
              </div>
            </div>
            <div className="d-flex gap-5 justify-content-end pe-4 justify-content-lg-start">
              {" "}
              <a
                href="/contact"
                className="bg-blue-color px-4 mt-5 py-3 rounded-5 text-white border-0 text-decoration-none d-inline-block"
              >
                Contact
              </a>
              <img src={left_arrow} className="swirl-point-out" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12 p-0 d-flex  justify-content-center justify-content-lg-end pt-5 pt-lg-0">
            <div>
              <div className="service_icon arrow_icon">
                <img
                  src={left_splash}
                  className="arrow_icon wave-bounce"
                  alt=""
                />
              </div>
              <div className=" ps-md-5 mx-4 mx-md-0">
                <img src={solution_banner} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our service Digital future */}
      <section className="my_container mx-auto  py-lg-5 ">
        <p className="text-md-center blue_color font-size-35 font_weight_600 pt-lg-5 mt-lg-5">
          Our Services
        </p>
        <div className="d-flex justify-content-center ">
          <div className="d-none d-lg-block wave-bounce">
            <img src={left_sm_splash} alt="" />
          </div>
          <div className="d-flex">
            <p className="text-black text-md-center font-size-50 font_weight_700 mt-5">
              We Develop & Create <br />
              <span className="blue_color left_sm_splash">
                Digital Future{" "}
                <img src={exclamatory} className="pulse-pop" alt="" />
              </span>
            </p>
          </div>
        </div>
        <div className="d-flex d-lg-none justify-content-center pe-5 me-5 ">
          <img
            src={right_arrow}
            className="arrow_icon"
            style={{ transform: "rotate(45deg)" }}
            alt=""
          />
        </div>
        <div className="row g-3  g-lg-5 d-lg-flex justify-content-center d-none">
          {serviceDataCard.map((item) => (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center"
              key={item.id}
            >
              <div className="d-flex flex-column justify-content-between  align-items-center w-100">
                <img src={item.img} className="service_icon" alt={item.title} />
                <div className="card bg-white pt-5 w-100 py-5 rounded-5 banner_form_width d-flex flex-column justify-content-between text-md-center gap-3">
                  <p className="font-size-20 font_weight_700 px-3">
                    {item.title}
                  </p>
                  <p className="font-size-14 px-2">{item.desc}</p>
                  <a
                    href={item.link}
                    className="text-decoration-none blue_color font-size-16"
                  >
                    Read More <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="digital_future_swiper d-lg-none ">
          <Swiper
            className=" digital_future_swiper"
            modules={[Navigation]}
            spaceBetween={20}
            navigation={{
              prevEl: prevRefs.current,
              nextEl: nextRefs.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRefs.current;
              swiper.params.navigation.nextEl = nextRefs.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {serviceDataCard.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="d-flex flex-column justify-content-between align-items-center w-100 pt-4">
                  <img
                    src={item.img}
                    className="service_icon"
                    alt={item.title}
                  />
                  <div className="card bg-white pt-5 w-100 py-5 rounded-5 banner_form_width d-flex flex-column justify-content-between text-md-center gap-3">
                    <p className="font-size-20 font_weight_700 px-3">
                      {item.title}
                    </p>
                    <p className="font-size-14 px-3">{item.desc}</p>
                    <a
                      href={item.link}
                      className="text-decoration-none blue_color font-size-16"
                    >
                      Read More <i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="d-flex align-items-center  gap-4 ps-5 ps-lg-5 ms-lg-5 pt-md-4">
              <button ref={prevRefs} className="btn border-0 p-0">
                <img src={left_button} alt="Prev" />
              </button>
              <button ref={nextRefs} className="btn border-0 p-0">
                <img src={right_button} alt="Next" />
              </button>
            </div>
            <div className="ms-3">
              <img src={left_arrow} className="arrow_icon" alt="Arrow" />
            </div>
          </div>
        </div>
      </section>
      {/* Our service Digital solution  */}

      <section className=" mx-auto my-5 ">
        <p className="text-md-center font-size-16 font_weight_600">Services</p>

        <div className="d-flex flex-column flex-md-row justify-content-center  text-md-center gap-3 font-size-50 font_weight_700 tight-line-height mt-5 pb-3 pb-md-0">
          <div className="position-relative d-flex flex-nowrap justify-content-center">
            <p className="m-0 pb-2 text-white px-xl-4  font-size-40  pb-lg-2">
              Transforming
            </p>
            <img
              src={D_Solution_text_bg}
              className="position-absolute our_solution_bg bg-reveal-underline  z-n1 top-0"
              alt=""
            />
          </div>
          <p className="d-flex justify-content-center">
            Ideas into Digital &nbsp;
            <span className="d-md-none blue_color"> Solutions</span>
          </p>
        </div>
        <p className="blue_color font-size-50 font_weight_700 m-0 text-md-center pb-5 d-none d-md-block  ">
          Solutions
        </p>
        <p className="text-md-center font-size-20 bg-white mx-3">
          Our software development services are designed to meet your unique
          business needs. From <br className="d-none d-lg-block" /> concept to
          deployment, we ensure a seamless experience.
        </p>

        <div className="swiper-container bg-white">
          <div className="position-relative d-solution-swiper-wrapper mx-3">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              onSlideChange={(swiper) => {
                const realIndex = swiper.realIndex;
                setCenterIndex(realIndex);
              }}
              onSwiper={(swiper) => {
                const realIndex = swiper.realIndex;
                setCenterIndex(realIndex);
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              {solutionSlidesData.map((slide, index) => (
                <SwiperSlide key={slide.id}>
                  <div className="swiper-slide-inner text-md-center p-lg-4 pt-3 py-lg-5 px-3">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="img-fluid mb-3"
                    />
                    <p
                      className={`font-size-30 font_weight_700 ${
                        index === centerIndex ? "color_change_to_blue" : ""
                      }`}
                    >
                      {slide.title}
                    </p>
                    <p className="text-black m-0">{slide.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="d-flex justify-content-center ">
              <div className="d-flex justify-content-center gap-3 ps-5 ps-lg-5 ms-lg-5 pt-md-4 ">
                <button ref={prevRef} className="btn border-0">
                  <img src={left_button} alt="" />
                </button>
                <button ref={nextRef} className="btn border-0">
                  <img src={right_button} alt="" />
                </button>
              </div>
              <div>
                <img
                  src={left_arrow}
                  className="arrow_icon swirl-point-out "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started with Our Services */}
      <section
        className="get-started-section d-flex align-items-center "
        style={{
          backgroundImage: `url(${get_started})`,
        }}
      >
        <div className="my_container mx-auto px-3 ">
          <p className="text-white font-size-46 font_weight_700  pt-5">
            Get Started with Our Services
          </p>
          <p className="text-white font-size-18 ">
            Reach out today to discover how we can elevate your software
            development projects to new <br className="d-none d-lg-block" />
            heights.
          </p>
          <a
            href="/contact"
            className="bg-blue-color px-4 mt-5 py-3 rounded-5 text-white border-0 text-decoration-none d-inline-block"
          >
            Contact
          </a>
        </div>
      </section>
      {/* Contact section */}

      <section id="contact-section" className="my_container mx-auto my-5 py-5">
        <div className="row px-3 px-lg-0">
          <div className="col-lg-6 col-12">
            <p className="font-size-16 font-weight-600 m-0">Support</p>
            <div className="position-relative">
              <p className="font-size-50 font_weight_700 m-0">Get in Touch</p>
              <img
                src={Banner_underline}
                className="position-absolute reveal-underline start-0 contact_underline ps-lg-0 bg-reveal-underline  bottom-0"
                alt=""
              />
            </div>

            <p className="py-2 font-size-18">
              We're here to help with your inquiries.
            </p>
            <form
              onSubmit={formiks.handleSubmit}
              className="d-flex flex-column gap-3"
            >
              <label htmlFor="name" className="font-size-16">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`p-3 rounded-4 border-1 ${
                  formiks.touched.name && formiks.errors.name
                    ? "border-danger"
                    : ""
                }`}
                value={formiks.values.name}
                onChange={formiks.handleChange}
                onBlur={formiks.handleBlur}
              />
              {formiks.touched.name && formiks.errors.name && (
                <div className="text-danger small">{formiks.errors.name}</div>
              )}

              <label htmlFor="email" className="font-size-16">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`p-3 rounded-4 border-1 ${
                  formiks.touched.email && formiks.errors.email
                    ? "border-danger"
                    : ""
                }`}
                value={formiks.values.email}
                onChange={formiks.handleChange}
                onBlur={formiks.handleBlur}
              />
              {formiks.touched.email && formiks.errors.email && (
                <div className="text-danger small">{formiks.errors.email}</div>
              )}

              <label htmlFor="message" className="font-size-16">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`rounded-4 py-3 px-3 ${
                  formiks.touched.message && formiks.errors.message
                    ? "border-danger"
                    : ""
                }`}
                placeholder="Enter a message..."
                value={formiks.values.message}
                onChange={formiks.handleChange}
                onBlur={formiks.handleBlur}
              ></textarea>
              {formiks.touched.message && formiks.errors.message && (
                <div className="text-danger small">
                  {formiks.errors.message}
                </div>
              )}

              <div className="d-flex gap-5 justify-content-end pe-4 justify-content-lg-start">
                <button
                  type="submit"
                  className="bg-blue-color px-4 mt-5 py-3 rounded-5 font-size-18  text-white border-0"
                >
                  Send
                </button>
                <img src={left_arrow} className="swirl-point-out" alt="Arrow" />
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-12 p-0 d-flex  justify-content-center justify-content-lg-end pt-5 pt-lg-0">
            <div>
              <div className="service_icon arrow_icon">
                <img
                  src={left_splash}
                  className="arrow_icon wave-bounce"
                  alt=""
                />
              </div>
              <div className=" ps-md-5 mx-4 mx-md-0">
                <img src={Contact_banner} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Ad_Footer />
    </div>
  );
}
