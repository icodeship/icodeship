'use client';

import Testimonial from "../Components/Testimonial";
import WorkTogther from "./WorkTogther";
import Brands from "./Brands";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import { getImageSrc } from "../utils/imageUtils";
import Service_with_us from "../assets/images/Capable_service/capable_service_with_us.png";
import "../assets/css/capabilitie_service.css";
import { Swiper, SwiperSlide } from "swiper/react";
import serviceData from "../Service_Data/Service_Page_Data";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  useVerticalToHorizontalScroll,
  useZigzagPathAnimation,
} from "../Animation/animation";
import { Pagination } from "swiper/modules";
// import { Helmet } from "react-helmet-async";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";

const Capable_service = () => {
  const { href } = useParams();
  const service = serviceData[href];
  const serviceName = "Our Services";
  const serviceDescription =
    service?.description ||
    "Professional digital services tailored to your business needs";
  useVerticalToHorizontalScroll();
  useZigzagPathAnimation();
  //  Accordion
  const { left, right } = serviceData[href].accordionData;

  const [activeLeft, setActiveLeft] = useState(null);
  const [activeRight, setActiveRight] = useState(null);

  const handleLeftToggle = (key) => {
    setActiveLeft(activeLeft === key ? null : key);
  };

  const handleRightToggle = (key) => {
    setActiveRight(activeRight === key ? null : key);
  };

  if (!service) {
    return <div className="text-danger">Service not found!</div>;
  }

  return (
    <div className="capable_services_container overflow-hidden">
      {/* <Helmet>
        <title>{serviceName} - Codeship</title>
        <meta
          name="description"
          content={`Learn more about our ${serviceName} services at Codeship. ${serviceDescription}`}
        />
        <meta
          name="keywords"
          content={`${serviceName.toLowerCase()}, digital services, professional solutions, codeship services, business solutions`}
        />
        <meta property="og:title" content={`${serviceName} - Codeship`} />
        <meta
          property="og:description"
          content={`Discover our professional ${serviceName} services at Codeship. Expert solutions designed for your success.`}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${serviceName} - Codeship`} />
        <meta
          name="twitter:description"
          content={`Expert ${serviceName} services at Codeship. Professional solutions for your business needs.`}
        />
      </Helmet> */}
      {/* Banner */}
      <section className=" d-flex justify-content-center mt-5 mb-md-5 overflow-hidden ">
        <Container className="my_container mt-5">
          <div className="row flex-column-reverse flex-lg-row mt-md-5">
            <div className="col-12 col-lg-7 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
              <div>
                <p className="font-size-48 text-md-center text-lg-start text-md-center font_weight_500 pt-3 pt-md-0 p-md-3 m-0">
                  {service.banner.title}
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start justify-content-md-center">
                  <Button className="px-5 py-2 font-size-25 font_weight_500 blue_gradient rounded-5 mt-3">
                    Let's Talk
                  </Button>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5  col-md-12 col-sm-12">
              <div className="d-flex justify-content-center">
                {" "}
                <img
                  src={getImageSrc(service.banner.icon)}
                  alt="Banner Visual "
                  className="img-fluid banner_height Banner_img w-100 h-100"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Brands />
      {/* Why choose us */}
      <section className="">
        <Container className="my_container ">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-12 col-12">
              <p className="font-size-25  font_weight_300 mt-lg-5">
                Why Choose Us ?
              </p>
              <p className="font-size-48 font_weight_600">
                {service.sub_banner.title}
              </p>
              <p className="font-size-20 font_weight_300 why_choose_us_text ">
                {service.sub_banner.description}
              </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center col-md-12 col-12">
              <div className="">
                {" "}
                <img
                  src={getImageSrc(service.sub_banner.icon)}
                  alt=""
                  className="img-fluid Banner_img w-100 h-100"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Software developement need */}
      <section className="software_container_section d-none d-md-block d-lg-block d-xl-block pb-5">
        <Container className="my_container position-relative software_container">
          <p className="font-size-48 text-md-center font_weight_600">
            {service.software_need}
          </p>
          <div className="d-flex justify-content-center mt-5 position-relative">
            <svg
              id="zigzag-svg"
              width="845"
              height="1156"
              viewBox="0 0 845 1156"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="img-fluid margin_top_20"
            >
              <path
                id="zigzag-path"
                d="M219 39L728.202 1.59073C812.201 -4.58039 870.54 83.6094 832 158.5V158.5L721.771 315.275C636.186 436.999 472.832 475.026 342.288 403.616L318.415 390.557C275.741 367.213 226.404 359.057 178.488 367.424V367.424C25.8308 394.082 -49.1302 568.783 36.7362 697.786L163.95 888.908C168.642 895.958 173.897 902.616 179.664 908.819V908.819C225.817 958.46 298.615 972.88 360.206 944.581L466.068 895.942C526.367 868.237 597.861 889.596 633.08 945.837V945.837C670.728 1005.96 654.139 1085.08 595.514 1125.02L551.5 1155"
              />
            </svg>
            {service.cardData.map((item, index) => (
              <div
                key={index}
                className={`position-absolute ${item.className}`}
              >
                <div className="card d-flex flex-column  rounded-4">
                  <div className="ms-4 pt-4 pb-4 pe-2">
                    <img src={getImageSrc(item.icon)} alt="" className="img-fluid" />
                    <p className="font-size-30 font_weight_700 font_color_light_blue pt-3">
                      {item.title}
                    </p>
                    <p className="capable_service_dev_card_text font-size-20 line_height_30 font_weight_300 pe-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="d-lg-none d-md-none d-block">
        <Container>
          <p className="font-size-62 text-md-center font_weight_600">
            {service.software_need}
          </p>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className} custom-pagination-dot"></span>`,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            className="custom-swiper "
          >
            {service.cardData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={`mb-5 ${item.className}`}>
                  <div className="card capable_card d-flex flex-column justify-content-center align-items-center  rounded-4 ">
                    <div className="">
                      <div className="mobile_icon_container">
                        <img
                          src={getImageSrc(item.icon)}
                          alt=""
                          className="m-0 p-0 img-fluid Capable_service_icon1"
                        />
                      </div>
                      <p className="m-0 p-0 font-size-40 font_weight_700 font_color_light_blue ">
                        {item.title}
                      </p>
                      <p className="m-0 p-0 capable_service_card_text text-wrap font-size-20 line_height_30 font_weight_300 p-0">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>

      <section>
        <Container className="my_container why_choose_us pt-0">
          <div className="row mt-2 mb-2 mt-lg-0 justify-content-between">
            <div className="col-lg-5  col-12">
              <p className="font-size-25 font_weight_300 mt-md-5 mt-lg-5 mt-xl-0 m-0">
                Benefits of
              </p>
              <p className="font-size-48 font_weight_600">
                Working
                <br className="d-none d-lg-block" /> With Us
              </p>
              <p className="font-size-20 font_weight_300 why_choose_us_text  m-0">
                {service.work_with_us}
              </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center col-12">
              <div className="d-flex justify-content-center ">
                <img
                  src={getImageSrc(service.Img)}
                  alt=""
                  className=" img-fluid"
                />
              </div>
            </div>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            className="p-3"
            slidesPerView="auto"
            spaceBetween={30}
            grabCursor={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className} custom-pagination-dot"></span>`,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              560: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {service.work_with_us_detail &&
              Object.values(service.work_with_us_detail).map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="py-3 mb-3 rounded-5 work_with_us_card d-flex flex-column justify-content-center  border_shadow">
                    <div className="d-flex justify-content-between align-items-center px-4">
                      <p className="font-size-24 font_color_light_blue font_weight_600 p-0 m-0">
                        {item.title}
                      </p>
                      <p className="font-size-62 font_color_light_blue font_weight_700 p-0 m-0">
                        {item.series}
                      </p>
                    </div>
                    <p className="text-md-justify px-4 px-md-4 font-size-20 font_weight_300">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </Container>
      </section>

      <Testimonial />

      <section>
        <Container className="my_container">
          <p className="font-size-40 font_weight_600 text-md-center mt-5">
            Frequently Asked Questions
          </p>
          <div className="row mt-5">
            <div className="col-md-6">
              <Accordion activeKey={activeLeft}>
                {left.map((item, index) => (
                  <Accordion.Item
                    key={index}
                    eventKey={index.toString()}
                    className="border_shadow rounded-4  mb-lg-4 mb-3 "
                    onClick={() => handleLeftToggle(index.toString())}
                  >
                    <Accordion.Header>
                      <p className="font-size-21 font_weight_500  Frequent_ask_height p-0 m-0 flex">
                        {item.title}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className="font-size-16 pt-0 font_weight_500">
                      {item.content}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <div className="col-md-6">
              <Accordion activeKey={activeRight}>
                {right.map((item, index) => (
                  <Accordion.Item
                    key={index}
                    eventKey={index.toString()}
                    className="border_shadow rounded-4 mb-lg-4 mb-3"
                    onClick={() => handleRightToggle(index.toString())}
                  >
                    <Accordion.Header>
                      <p className="font-size-21 font_weight_500  Frequent_ask_height p-0 m-0 flex">
                        {item.title}
                      </p>
                    </Accordion.Header>
                    <Accordion.Body className="font-size-16 pt-0 font_weight_500">
                      {item.content}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>
      <WorkTogther />
    </div>
  );
};

export default Capable_service;
