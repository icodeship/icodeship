// React and React-related imports
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// React Bootstrap components
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

// Formik and Yup for form handling
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Toast notifications
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// GSAP and ScrollSmoother for animations
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";

// components
// import Footer from "../Components/Footer.jsx";
import Brands from "../Components/Brands.jsx";
import Banner from "../Components/Banner.jsx";
import Frequent_Ask from "../Components/Frequent_Ask.jsx";
import MetaTags from "../Components/MetaTags";

// Custom animations and utilities
import { BallSplash } from "../Animation/animation";
import { submitContactForm } from "../Service_Data/API.jsx";

// Data
import Banner_Data from "../Data/Banner_Data.jsx";

// Images
import Location_icon from "../assets/images/Contact/contact_loc_icon.png";
import Msg_icon from "../assets/images/Contact/contact_msg_icon.png";
import Call_icon from "../assets/images/Contact/contact_call_icon.png";
import Contact_icon1 from "../assets/images/Home/facebook.png";
import Contact_icon2 from "../assets/images/Home/insta_icon.png";
import Contact_icon3 from "../assets/images/Home/linkdin_icon.png";
import Contact_icon4 from "../assets/images/Home/twitter_icon.png";

// CSS
import "../Pages/Contact_page.css";
import AsyncPhoneInput from'../Components/phoneInput.jsx'
import 'react-phone-input-2/lib/style.css';

// Register GSAP plugin
gsap.registerPlugin(ScrollSmoother);

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Enter a company name"),
  email: Yup.string()
    .matches(
      /^[^\s@]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Enter an email"),
  mobile: Yup.string()
        .required("Enter a mobile number")
        .matches(/^\+?[1-9]\d{7,14}$/, "Enter a valid mobile number"),
  subject: Yup.string().required("Required"),
  interests: Yup.array().min(1, "Select at least one interest"),
  about: Yup.string().required("Required"),
});

function Contact_page() {
  const location = useLocation();

  const services = [
    "Web Development",
    "App Development",
    "CRM & Tools",
    "Digital Marketing",
    "UI / UX Design",
    "AMC",
    "Servers & Hosting",
    "Other Services",
  ];

  // Prepare meta content
  const servicesOffered = services.slice(0, -1); // Exclude "Other Services"
  const metaContent = {
    title: "Contact Us",
    description: `Get in touch with Codeship for ${servicesOffered.join(
      ", "
    )} and more. Let's discuss your next digital project and create innovative solutions together.`,
    keywords: [
      ...services,
      "contact us",
      "project inquiry",
      "consultation",
      "get in touch",
    ],
    ogImage: Banner_Data.contact.image,
  };

  useEffect(() => {
    if (location.hash) {
      const scrollToElement = () => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "auto" });
        }
      };

      // If page fully loaded, scroll immediately
      if (document.readyState === "complete") {
        scrollToElement();
      } else {
        // Wait for full load (images/fonts)
        window.addEventListener("load", scrollToElement);
        // Cleanup listener
        return () => window.removeEventListener("load", scrollToElement);
      }
    }

    const scrollToTarget = (selector) => {
      const target = document.querySelector(selector);
      const smoother = ScrollSmoother.get();

      if (target && smoother) {
        smoother.scrollTo(target, true); // smooth scroll with GSAP
      } else if (target) {
        target.scrollIntoView({ behavior: "smooth" }); // fallback
      }
    };

    const timeout = setTimeout(() => {
      if (location.hash) {
        scrollToTarget(location.hash); // handles #contactForm
      } else if (location.state?.scrollToForm) {
        scrollToTarget("#contactForm"); // handles state-based scroll
      }
    }, 100); // slight delay to ensure content is ready

    return () => clearTimeout(timeout);
  }, [location]);

  const containerRef = useRef(null);
  const [showSplash, setShowSplash] = useState(false);

  const { text, image } = Banner_Data.contact;

  // API call
  const handleSubmit = async (values, { resetForm }) => {
    setShowSplash(true); // trigger splash immediately

    try {
      await submitContactForm(values); // send data to your API

      toast.success("Form submitted successfully!", {
        className: "custom-toast",
        hideProgressBar: false,
        autoClose: 3000,
        position: "top-right",
        progressClassName: "Toastify__progress-bar",
      });

      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);

      toast.error("Something went wrong. Please try again.", {
        className: "custom-toast",
        autoClose: 2500,
        hideProgressBar: false,
        position: "bottom-right",
      });
    } finally {
      // optionally hide splash after some delay
      setTimeout(() => setShowSplash(false), 2000);
    }
  };

  return (
    <div className="pb-5">
      <MetaTags {...metaContent} />
      <Banner text={text} image={image} />
      <Brands />
      <section className="position-relative overflow-hidden" ref={containerRef}>
        <Container className="my_container ">
          <p className="font-size-62 m-0 p-0 font_weight_600">
            Have an innovative thought?
          </p>
          <p className="p-0 m-0 font-size-46 font_weight_500" id="contactForm">
            Tell us about it.
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              mobile: "",
              subject: "",
              interests: [],
              about: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="row d-flex flex-column-reverse flex-lg-row align-items-end">
                  <div className="col-lg-4">
                    <div className="social-media-links  mt-lg-0">
                      <p className="font-size-37 font_weight_600 py-4">
                        Follow us on :
                      </p>
                      <div className="d-flex gap-3 w-50">
                        <a
                          href="https://www.facebook.com/icodeship"
                          aria-label="Facebook"
                        >
                          <img
                            src={Contact_icon1}
                            alt="Facebook"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="https://www.instagram.com/icodeship?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                          aria-label="Instagram"
                        >
                          <img
                            src={Contact_icon2}
                            alt="Instagram"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/icodeship/posts/?feedView=all"
                          aria-label="LinkedIn"
                        >
                          <img
                            src={Contact_icon3}
                            alt="LinkedIn"
                            className="img-fluid"
                          />
                        </a>
                        <a href="https://x.com/ship_code20427?t=eCBOb7HeomgEwx2GqcJBoQ&s=09" aria-label="Other social link">
                          <img
                            src={Contact_icon4}
                            alt="Other social link"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12 col-12 ">
                    <div className="row">
                      <div className="col-md-6 col-12 mt-2 pe-lg-5 mt-lg-5">
                        <div className="d-flex flex-column px-0 px-sm-4 px-md-0">
                          <label
                            className="font-size-20 font_weight_400"
                            htmlFor="name"
                          >
                            Name & Company
                          </label>
                          <Field
                            id="name"
                            type="text"
                            name="name"
                            className="contact_input border-none mt-2"
                            placeholder="Enter your full name"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-danger mt-3"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12 mt-2 ps-lg-5 mt-lg-5">
                        <div className="d-flex flex-column px-0 px-sm-4 px-md-0">
                          <label
                            className="font-size-20 font_weight_400 pt-4 pt-md-0"
                            htmlFor="email"
                          >
                            Email id
                          </label>
                          <Field
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="contact_input mt-2"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger mt-3"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-12 pe-lg-5 mt-4">
  <div className="d-flex flex-column px-0 px-sm-4 px-md-0">
    <label className="font-size-20 font_weight_400">Mobile Number</label>
    <div className="mt-4">
      <AsyncPhoneInput
                              value={values.mobile}
                              onChange={(phone) => setFieldValue('mobile', phone)}
                            />
    </div>
    <ErrorMessage
      name="mobile"
      component="div"
      className="text-danger mt-3"
    />
  </div>
</div>
                      <div className="col-md-6 col-12 ps-lg-5 mt-4">
                        <div className="d-flex flex-column px-0 px-sm-4 px-md-0">
                          <label
                            className="font-size-20 font_weight_400"
                            htmlFor="subject"
                          >
                            Subject
                          </label>
                          <Field
                            id="subject"
                            type="text"
                            placeholder="Enter subject"
                            name="subject"
                            className="contact_input mt-2"
                          />
                          <ErrorMessage
                            name="subject"
                            component="div"
                            className="text-danger mt-3"
                          />
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 font-size-20 font_weight_400 px-lg-0">
                      I'm Interested in
                    </p>
                    <div className="row g-3">
                      {services.map((interest, index) => (
                        <div
                          key={index}
                          className="col-6 col-xl-3 mt-md-4 d-flex justify-content-center"
                        >
                          <button
                            type="button"
                            className={`btn btn-outline-dark w-100 text-nowrap py-3 font-size-12 font_weight_400 rounded-pill border-black ${
                              values.interests.includes(interest)
                                ? "active"
                                : ""
                            }`}
                            onClick={() => {
                              const selected = values.interests.includes(
                                interest
                              )
                                ? values.interests.filter((i) => i !== interest)
                                : [...values.interests, interest];
                              setFieldValue("interests", selected);
                            }}
                          >
                            {interest}
                          </button>
                        </div>
                      ))}
                    </div>
                    <ErrorMessage
                      name="interests"
                      component="div"
                      className="text-danger px-4 pt-3"
                    />

                    <p
                      className="mt-5 font-size-20 font_weight_400"
                      htmlFor="about"
                    >
                      Tell us more about your project
                    </p>
                    <div className="">
                      <Field
                        id="about"
                        type="text"
                        name="about"
                        placeholder="About your project"
                        className="contact_about_more w-100 bg-transparent shadow-none"
                      />
                      <ErrorMessage
                        name="about"
                        component="div"
                        className="text-danger mt-3"
                      />
                    </div>
                    <div className="mt-5 d-flex justify-content-start">
                      <Button
                        type="submit"
                        className="px-5 py-2 font-size-25 font_weight_500 blue_gradient rounded-5"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          {showSplash && (
            <BallSplash
              onComplete={() => {
                setShowSplash(false);
              }}
            />
          )}
          <ToastContainer className="mt-5 pt-5" />
        </Container>
      </section>
      {/* Locate us */}
      <section className="pt-5">
        <Container className="my_container">
          <p className="font-size-37 font_weight_600">Locate Us :</p>
          <div className="d-flex flex-sm-wrap flex-md-nowrap gap-3 Contact_card_container justify-content-center">
            <div className="card border_shadow p-3 Contact_card rounded-5">
              <div className="ms-2 mt-2">
                <div className="mb-5">
                  <img src={Location_icon} alt="" className="about_core_icon" />
                </div>
                <p className="font-size-24 font_weight_700 font_color_light_blue">
                  Visit Us
                </p>
                <p className="font-size-24 font_weight_700">
                  Codeship Private Limited
                </p>
                <p className="About_core_card_size font-size-18 font_weight_300">
                  No 1, 1st Floor, Narasimhan St, near TNSC{" "}
                  <br className="d-xl-block d-none" /> Bank, West Mambalam,
                  Chennai, Tamil <br className="d-xl-block d-none" /> Nadu
                  600033
                </p>
              </div>
            </div>

            <div className="card border_shadow p-3 Contact_card rounded-5">
              <div className="ms-2 mt-2">
                <div className="mb-5">
                  <img src={Msg_icon} alt="" className="about_core_icon" />
                </div>
                <p className="font-size-24 font_weight_700 font_color_light_blue">
                  Chat Support
                </p>
                <p className="font-size-24 font_weight_700">
                  We are here to help
                </p>
                <p className="font-size-18 font_weight_300">
                  techsupport@codeship.in
                </p>
                <p className="font-size-18 font_weight_300">
                  support@codeship.in
                </p>
              </div>
            </div>

            <div className="card border_shadow p-3 Contact_card rounded-5">
              <div className="ms-2 mt-2">
                <div className="mb-5">
                  <img src={Call_icon} alt="" className="about_core_icon" />
                </div>
                <p className="font-size-24 font_weight_700 font_color_light_blue">
                  Speak with our friendly team
                </p>
                <p className="font-size-24 font_weight_700">
                  Mon to Fri from 10 AM to 7 PM{" "}
                </p>
                <p className="About_core_card_size font-size-18 font_weight_300">
                  +91 93424 88917
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Map */}
      <section>
        <Container className="my_container">
          <div className=" d-flex justify-content-center  m-auto mt-5 m-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7773.890565645889!2d80.2255752!3d13.0391549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d3b70a90f51%3A0xb6155325437cc516!2sCodeShip%20Private%20Limited!5e0!3m2!1sen!2sin!4v1745490585479!5m2!1sen!2sin"
              width="1600"
              height="467"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer"
              className="rounded-5 px-1"
            ></iframe>
          </div>
        </Container>
      </section>
      <Frequent_Ask />
      {/* <Footer /> */}
    </div>
  );
}

export default Contact_page;
