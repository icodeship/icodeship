import React from "react";
import Services from "../Data/Service_Data";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// FontAwesome & Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ChevronRight } from "lucide-react";

function Home_service() {
  return (
    <section>
      <Container className="my_container pe-5 services_row">
        <div className="service_wrapper">
          <div className="d-flex position-relative service_gap">
            {/* Left Text Column */}
            <div className="text">
              <p className="font-size-20 font_weight_500">How we can help you</p>
              <p className="font-size-65 font_weight_600 line_height_80 m-0">Services</p>
              <p className="font-size-65 font_weight_600 line_height_80 mb-2">We offer</p>
              {/* <br /> */}
              <p className="service_text font-size-24 xl:line_height_38">
                We offer a comprehensive range of software development services tailored to meet
                the unique needs of your business. A full-service creative agency designing and
                building inventive digital experiences across all platforms and brand{" "}
                <br className="d-none d-lg-block" /> touchpoints
              </p>
              <div className="d-flex justify-content-start">
                <Link to="/capable" className="text-decoration-none">
                  <Button className="blue_gradient rounded-5 font-size-22 font_weight_500 px-4 py-2">
                    All Services{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="ps-3" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Services Cards: horizontally laid out */}
            {Services.map((service, index) => (
              <div
                key={index}
                className="d-flex flex-column justify-content-evenly border border_shadow rounded-5 mb-4 me-5 service_card"
              >
                <div className="d-flex flex-column gap-3 justify-content-between p-md-4 p-2 pt-4 ms-4">
                  <div className="ms-0">
                    <div className="d-flex flex-column">
                      <div className="icon-container pe-5">
                        <img
                          src={service.icon}
                          alt={`${service.title} Icon`}
                          className="pt-2 pb-3 service-icon"
                        />
                      </div>
                      <p className="things_head font-size-58 font_weight_500 ps-0 pt-2 mb-0 pb-2">
                        {service.title}
                      </p>
                    </div>
                  </div>
                  <p className="font-color-light-grey font-size-24 font_weight_400 pb-2 services_card_text text-start">
                    {service.description}
                  </p>
                </div>
                
                <a
                  href={`/capable#${service.id}`}
                  className="d-flex gap-0 font_color_light_blue ms-4 ps-2 ms-xl-5 ps-xl-0 text-decoration-none"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <p className="font-size-24 font_weight_500">Learn more </p>
                  <ChevronRight
                    strokeWidth={2}
                    size={34}
                    className="font-size-28 pb-1"
                  />
                </a>
              </div>
            ))}

            {/* Placeholder for spacing or future content */}
            <div className="d-none d-lg-block ps-5 text-white"> d </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Home_service;
