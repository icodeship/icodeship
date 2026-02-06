import { Container } from "react-bootstrap";
import { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { getImageSrc } from "../utils/imageUtils";
import Contact_icon1 from "../assets/images/Home/facebook.png";
import Contact_icon2 from "../assets/images/Home/insta_icon.png";
import Contact_icon3 from "../assets/images/Home/linkdin_icon.png";
import Contact_icon4 from "../assets/images/Home/twitter_icon.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { submitContactForm } from "../Service_Data/API.jsx";
import { BallSplash } from "../Animation/animation";
// import Footer from "./Footer.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import 'react-phone-input-2/lib/style.css';
import AsyncPhoneInput from'./phoneInput.jsx'
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

function Contact() {
  const containerRef = useRef(null);
  const [showSplash, setShowSplash] = useState(false);

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

  const handleSubmit = async (values, { resetForm }) => {
    setShowSplash(true);

    try {
      await submitContactForm(values);
      toast.success("Form submitted successfully! 🚀", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      resetForm();
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
      console.error("Form submission error:", error);
    } finally {
      setTimeout(() => setShowSplash(false), 2000);
    }
  };

  return (
    <>
      <section
        className="position-relative overflow-hidden pb-3"
        ref={containerRef}
      >
        <Container className="my_container pt-5">
          <p className="font-size-62 font_weight_600">
            Have an innovative thought?
          </p>
          <p className="p-0 font-size-46 font_weight_500" id="contactForm">
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
                    <div className=" mt-5 mt-lg-0">
                      <p className="font-size-37 font_weight_600">
                        Follow us on :
                      </p>
                      <div className="d-flex gap-3 w-50">
                        <a href="https://www.facebook.com/icodeship">
                          <img
                            src={getImageSrc(Contact_icon1)}
                            alt=""
                            className="img-fluid "
                          />
                        </a>
                        <a href="https://www.instagram.com/icodeship?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                          <img
                            src={getImageSrc(Contact_icon2)}
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                        <a href="https://www.linkedin.com/company/icodeship/posts/?feedView=all">
                          <img
                            src={getImageSrc(Contact_icon3)}
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                        <a href="https://x.com/ship_code20427?t=eCBOb7HeomgEwx2GqcJBoQ&s=09">
                          <img
                            src={getImageSrc(Contact_icon4)}
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt-5">
                    <div className="row">
                      <div className="col-md-6 col-12 mt-2 pe-lg-5 mt-lg-5">
                        <div className="d-flex flex-column px-0 px-sm-4 px-md-0">
                          <label className="font-size-20 font_weight_400">
                            Name & Company
                          </label>
                          <Field
                            type="text"
                            name="name"
                            className="contact_input border-none mt-4"
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
                          <label className="font-size-20 font_weight_400 pt-4 pt-md-0">
                            Email id
                          </label>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="contact_input mt-4"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger mt-3"
                          />
                        </div>
                      </div>
                     <div className="col-md-6 col-12 pe-lg-5 mt-5">
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

                      <div className="col-md-6 col-12 ps-lg-5 mt-5">
                        <div className="d-flex flex-column px-0 px-sm-4 px-md-0">
                          <label className="font-size-20 font_weight_400">
                            Subject
                          </label>
                          <Field
                            type="text"
                            name="subject"
                            className="contact_input mt-4"
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
                            className={`btn btn-outline-dark w-100 text-nowrap  py-3 font-size-12 font_weight_400 rounded-pill border-black ${
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
                      className="text-danger  mt-3"
                    />

                    <p className="mt-5 font-size-20 font_weight_400">
                      Tell us more about your project
                    </p>
                    <div className="">
                      <Field
                        type="text"
                        name="about"
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
                        className="px-5 py-2 font-size-25 font_weight_500 blue_gradient  rounded-5"
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
          <ToastContainer />
        </Container>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Contact;
