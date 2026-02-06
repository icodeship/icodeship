'use client';

import React, { useState } from "react";
import { Container } from "react-bootstrap";
// import Footer from "./Footer";
import Purchase_button from "../assets/images/purchase_arrow.png";
import { getImageSrc } from "../utils/imageUtils";
import { BallSplash } from "../Animation/animation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {PurchaseContactForms } from "../Service_Data/API"
import AsyncPhoneInput from'../Components/phoneInput'
import 'react-phone-input-2/lib/style.css';

const PurchaseContactForm = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .matches(
        /^[^\s@]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      )
      .required("Enter an email"),
    mobile: Yup.string()
      .required("Enter a mobile number")
      .matches(/^\+?[1-9]\d{7,14}$/, "Enter a valid mobile number"),
    sector: Yup.string().required("Industry/Sector is required"),
    options: Yup.array()
      .min(1, "Select at least one option")
      .required("Select at least one option"),
    message: Yup.string().required("Message is required"),
  });
  const handleSubmit = async (values, { resetForm }) => {
    if (values.options.length === 0) {
      toast.error("Please select at least one option.");
      return;
    }

    setIsSubmitted(true);
    setShowSplash(true); // trigger splash animation immediately

    try {
      await PurchaseContactForms(values); // mock API call

      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);

      toast.error("Something went wrong. Please try again.", {
        className: "custom-toast",
        autoClose: 2500,
        hideProgressBar: false,
        position: "bottom-right",
      });
    }
  };

  return (
    <>
      {showSplash && <BallSplash />}
      <div
        className=" w-100 ps-lg-5 ps-3 p-3 bg-white shadow my-5 pt-5"
        style={{ zIndex: 1000 }}
      >
        <button
          className="btn btn-outline-secondary bg-white text-black ms-lg-5 ms-0 rounded-pill px-4"
          onClick={() => window.history.back()}
        >
          ← Back
        </button>
      </div>

      <div>
        <Container className="my_container solution_desk_radius py-5 border_shadow px-5 my-5 no-scrollbar">
          <div className="row ">
            <div className="col-lg-7 col-md-6 col-12 d-flex flex-column">
              <div className="me-5 mt-md-5 mt-0">
                <p className="font-size-24 font_weight_600 font_color_light_grey">
                  WE'RE HERE TO HELP YOU
                </p>
                <p className="font-size-62 font_weight_600">
                  Discuss Your Tech <br /> Solution Needs With <br /> Us
                </p>
                <p className="font-size-24 font_weight_400 pe-5 d-none d-md-block">
                  Are you looking for top quality tech solutions tailored to
                  your needs? Reach us out!
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 col-12">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  mobile: "",
                  sector: "",
                  options: [],
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, setFieldValue }) => (
                  <Form className="d-flex flex-column gap-3" noValidate>
                    <label className="font-size-20 font_weight_400">
                      Name & Company
                    </label>
                    <Field
                      type="text"
                      name="name"
                      className="rounded-5 py-3 ps-4 border-1 no-focus"
                      placeholder="Enter your full name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger mt-1 ps-3"
                    />

                    <label className="font-size-20 font_weight_400">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="rounded-5 py-3 ps-4 border-1 no-focus"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger mt-1 ps-3"
                    />

                    <label className="font-size-20 font_weight_400">
                      Phone Number
                    </label>
                     <AsyncPhoneInput
                              value={values.mobile}
                              onChange={(phone) => setFieldValue('mobile', phone)}
                            />
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-danger mt-1 ps-3"
                    />

                    <label className="font-size-20 font_weight_400">
                      Industry/Sector
                    </label>
                    <Field
                      type="text"
                      name="sector"
                      className="rounded-5 py-3 ps-4 border-1 no-focus"
                      placeholder="E.g. Healthcare, Retail, etc."
                    />
                    <ErrorMessage
                      name="sector"
                      component="div"
                      className="text-danger mt-1 ps-3 "
                    />

                    <label className="font-size-20 font_weight_400">
                      Select Option
                    </label>
                   <div className="row mb-2">
  {["ERP", "CRM", "HRM", "LMS"].map((opt) => (
    <div key={opt} className="col-6 col-lg-3 mb-3 ">
      <button
        type="button"
        onClick={() => {
          const updatedOptions = values.options.includes(opt)
            ? values.options.filter((o) => o !== opt)
            : [...values.options, opt];
          setFieldValue("options", updatedOptions);
        }}
        className={`w-100 p-3 rounded-5 btn btn-outline-dark  ${
          values.options.includes(opt)
            ? "text-white bg_gradient_blue"
            : "text-black bg-light"
        }`}
      >
        {opt}
      </button>
    </div>
  ))}
</div>

                    <ErrorMessage
                      name="options"
                      component="div"
                      className="text-danger mt-2 ps-3"
                    />

                    <label className="font-size-20 font_weight_400">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      rows={6}
                      className="rounded-4 border-1 ps-4 pt-2 no-focus no-scrollbar "
                      placeholder="Type your message..."
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-danger mt-1 ps-3"
                    />

                    <div className="d-flex justify-content-center mt-3">
                      <button
                        type="submit"
                        className="d-flex justify-content-center gap-4 rounded-5 px-4 py-3 border-0 bg_gradient_blue text-white align-items-center submit-btn"
                        disabled={isSubmitted}
                      >
                        <img
                          src={getImageSrc(Purchase_button)}
                          alt="Submit"
                          className={`p-2 rounded-circle bg-white arrow-img ${
                            isSubmitted ? "move-right" : ""
                          }`}
                        />
                        <p
                          className={`m-0 submit-text ${
                            isSubmitted ? "text-moved" : ""
                          }`}
                        >
                          {isSubmitted ? "Submitted" : "Submit"}
                        </p>
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Container>
      </div>
      <ToastContainer />
      {/* <Footer /> */}
    </>
  );
};

export default PurchaseContactForm;
