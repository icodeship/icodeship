'use client';

import React from 'react';
// import Footer from "../Components/Footer"
import { Container } from "react-bootstrap";
import Link from "next/link"
// import { Helmet } from 'react-helmet-async';

function Refund() {
  return (
    <div>
      {/* <Helmet>
        <title>Refund Policy - Codeship</title>
        <meta name="description" content="Learn about Codeship's refund policy, terms, and conditions for service cancellations and refunds." />
        <meta name="keywords" content="refund policy, cancellation policy, service refunds, codeship refunds" />
        <meta property="og:title" content="Refund Policy - Codeship" />
        <meta property="og:description" content="Understand Codeship's refund and cancellation policies for our services." />
        <meta property="og:type" content="website" />
      </Helmet> */}
      <header className="background_color_blue text-white py-5 mt-5 mb-0">
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Refund & Payment policy</h1>
              <p className="lead mb-0">
                Codeship Private Limited -  Your Rights, Our Responsibility.
              </p>
            </div>
            <div className="col-lg-4 ">
              <div className="bg-white bg-opacity-10 rounded-3 p-3">
                <p className="mb-1 small">Last Updated</p>
                <p className="mb-0 fw-semibold">June 2025</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Container className="container mt-5">
        <p className="font-size-24 font_weight_600">Payment policy</p>
         <p>Only valid payment methods acceptable to Codeship Private Limited may be used, for orders and all refunds will be credited back through the same manner.</p>
  <p>Concerning any payments by credit card or electronic funds transfer, by submitting your order for processing, you authorise us to charge your order (including taxes, shipping, handling and any amounts agreed upon before order submission) to your credit card or account.</p>
  <p>If your credit card or account cannot be verified, or is invalid, or is not otherwise acceptable, your order may be suspended or cancelled automatically.</p>
  <p>All prices and availability of products are subject to change without notice.</p>
  <p>Taxes will be adjusted from the amount shown on the billing screens, which may be caused by several factors, including variances between processor programs and changes in tax rates.</p>
  <p>The annual maintenance and annual mapping data licenses – charges shall become due and payable in advance on the anniversary date of the End User License Agreement (EULA) or (subject to prior termination under these terms) on any subsequent anniversary of the completion date (the renewal date).</p>
  <p>An invoice will be sent around 30 days before amounts are due, this invoice will be the notification of increases.</p>
  <p>In the event, this agreement is automatically renewed, per the provisions of the End User License Agreement (EULA, Exhibit or Schedules).</p>
  <p>This agreement shall continue in full force and effect on the same terms save that any rise in the annual maintenance charges shall be limited to no more than the percentage increase in the Retail Prices Index (RPI) over the preceding 12 month period plus 1% during the first three (3) years of maintenance and support services, but no less than two percent (2%), unless stated in the agreement including schedules or exhibits.</p>
  <p>After that, no such increase shall exceed five per cent (5%).</p>
  <p>Any increase of the annual maintenance fee shall not occur more often than once in any twelve (12) consecutive month period.</p>
  <p>For more detailed information, please reference the Maintenance, Support Services, Fees section of your EULA/SLA and Exhibit(s).</p>
  <p>Our standard notice of cancelation period is 60 days before the renewal date of the End User Licnese Agreement (EULA) unless stated in the Agreement or Exhibits.</p>
  <p>Any amount remaining unpaid after 30 days from the due date shall accrue interest at a rate equal to the Bank of England base rate plus eight per cent (8%) per month.</p>
      <p className="font-size-24 font_weight_600 mt-5">Refund policy</p>
       <h5 className="mb-3">Professional Services</h5>
  <p>Codeship Private Limited warrants that for thirty (30) days after the performance of Professional Services for customers provided under a statement of work, such Professional Services were performed in a proper and professional manner consistent with industry standards.</p>
  <p>Otherwise, such Professional Services are provided by Codeship Private Limited "as is".</p>
  <p>Once requested by you, Codeship Private Limited will charge your account or credit card the amount agreed upon under the executed contract, or as otherwise agreed upon by the parties.</p>
  <p>If a project is delayed at the request of the client, due to the client's internal processes, Codeship Private Limited will not be responsible for any costs incurred by this delay, any fees or damages will stand with the client unless agreed in writing at the time or delay by the client.</p>
  <p>For more detailed information, please reference the "Warranties and Disclaimers" of your EULA/SLA.</p>

  <h5 className="mt-4 mb-3">Hardware, Software and Software Maintenance & Support Services</h5>
  <p>Codeship Private Limited does not offer any refund for hardware, software, maintenance and support services once agreed by the customer, annual fees which are passed an anniversary date of the EULA, Codeship Private Limited will charge your account or credit card the amount agreed upon under the executed agreement, or as otherwise agreed upon by the parties.</p>
  <p>For more detailed information, please reference the Warranties and Disclaimer of Warranties section of your EULA/SLA.</p>

  <h5 className="mt-4 mb-3">Training and Services</h5>
  <p>Customer reservations which are canceled twenty eight (28) or more days before the start of the workshop will be refunded, in their entirety.</p>
  <p>Customer reservations which are canceled fourteen to thirty (14-30) days from the beginning of the workshop, consultancy or training will be refunded, by fifty percent (50%) of the registration fee.</p>
  <p>No refund is offered for any cancellations within two (2) weeks of the start of the workshop.</p>

  <h5 className="mt-4 mb-3">Changes to Payment and Refund Policy</h5>
  <p>We reserve the right to change this payment, refunds policy terms and conditions at any time. Any such changes will take effect when posted on the website.</p>
   {/* Why Choose Codeship Section */}
            <section className="mt-5" style={{ marginBottom: "40px" }}>
              <div
                style={{
                  borderLeft: "5px solid #7c3aed",
                  paddingLeft: "20px",
                  marginBottom: "30px",
                }}
              >
                <p
                  className="font-size-37 font_weight_700 line_height_40 font_color_blue"
                  style={{ marginBottom: "10px" }}
                >
                  Why Choose Codeship?
                </p>
              </div>
              <div
                style={{
                  padding: "30px",
                  borderRadius: "20px",
                  boxShadow: "-3px 2px 20.4px 0px #0000001a",
                }}
                className="border_shadow"
              >
                <p
                  className="font-size-20  text-black"
                  style={{ textAlign: "justify", margin: "0" }}
                >
                  Web development is the work involved in developing a website
                  for the Internet or an intranet. Web development can range
                  from developing a simple single static page of plain text to
                  complex web applications, electronic businesses, and social
                  network services. Website development gives out the impression
                  of a new start for the business and the best developers in
                  Chennai make sure you stand out from the competitors.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section
          className="border_shadow background_color_testimonial_light_blue border_radius_25"
          style={{ padding: "30px", marginBottom: "40px" }}
        >
          <p
            className="font-size-25 font_weight_700 font_color_dark_blue mb-4"
            style={{ marginBottom: "25px", textAlign: "center" }}
          >
            Contact Us
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginBottom: "25px",
            }}
          >
            <a
              href="mailto:techsupport@codeship.in"
              className="text-decoration-none"
            >
              <div className="bg-white p-4 rounded shadow-sm">
                <span className="fs-5 fw-bold text-black">Email:</span>
                <br />
                <span className="fs-6 fw-normal text-black d-block mt-2 lh-sm">
                  techsupport@codeship.in
                </span>
              </div>
            </a>

            <Link href="/contact" className="text-decoration-none">
              <div className="bg-white p-4 rounded shadow-sm">
                <span className="fs-5 fw-bold text-black">Website:</span>
                <br />
                <span className="fs-6 fw-normal text-black d-block mt-2 lh-sm">
                  codeship.in/contact
                </span>
              </div>
            </Link>
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <span className="font-size-20 font_weight_700 font_color_dark_blue">
                Phone:
              </span>
              <br />
              <span
                className="font-size-14 font_weight_400 font_color_black line_height_18"
                style={{ display: "block", marginTop: "8px" }}
              >
                +91 93424 88917
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=Codeship+Private+Limited,+No+1,+1st+Floor,+Narasimhan+St,+near+TNSC+Bank,+West+Mambalam,+Chennai,+Tamil+Nadu+600033"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <p
                className="font-size-12 font_weight_400 font_color_light_grey line_height_20"
                style={{ margin: "0" }}
              >
                <span className="font_weight_600">Address:</span> Codeship
                Private Limited, No 1, 1st Floor, Narasimhan St, near TNSC Bank,
                West Mambalam, Chennai, Tamil Nadu 600033
              </p>
            </a>
          </div>
        </section>

            {/* Footer */}
            <div
              style={{
                borderTop: "2px solid #e5e7eb",
                paddingTop: "20px",
                textAlign: "center",
              }}
            >
              <p className="font-size-20 font_weight_400 font_color_light_grey m-0">
                We reserve the right to change these policy terms and conditions
                at any time. Any such changes will take effect when posted on
                the website.
              </p>
            </div>
      </Container>
    {/* <Footer /> */}
    </div>
  )
}

export default Refund