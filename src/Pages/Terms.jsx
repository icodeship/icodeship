import React from 'react';
// import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";
import Link from "next/link"
import { Helmet } from 'react-helmet-async';

function Terms() {
  return (
    <div>
      <Helmet>
        <title>Terms of Service - Codeship</title>
        <meta name="description" content="Read Codeship's terms of service to understand our policies, user agreements, and service conditions." />
        <meta name="keywords" content="terms of service, user agreement, service conditions, codeship terms" />
        <meta property="og:title" content="Terms of Service - Codeship" />
        <meta property="og:description" content="Understand Codeship's terms of service, user agreements, and service conditions." />
        <meta property="og:type" content="website" />
      </Helmet>
      <header className="background_color_blue text-white py-5 mt-5 mb-0">
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Terms and Conditions</h1>
              <p className="lead mb-0">
                Codeship Private Limited - Terms That Work For You
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

      <section>
        <Container className="container pt-5">
          <div className="mx-auto text-white">
            {/* Terms and Conditions Content */}
            <section className="mb-5">
              <div
                className="mb-4 ps-3"
                style={{ borderLeft: "5px solid #504CA0" }}
              >
                <p className="font-size-30 font_weight_700 font_color_blue line_height_40 mb-2">
                  Terms and Conditions
                </p>
              </div>

              <div className="mb-5">
                <p className="font-size-24 font_weight_400 font_color_black mb-4 text-justify">
                  Welcome to Codeship Private Limited! These terms and
                  conditions outline the rules and regulations for the use of
                  Codeship Private Limited's services rendered, located at
                  https://codeship.in/.
                </p>

                <p className="font-size-24 font_weight_400 font_color_black mb-4 text-justify">
                  By accessing this website, we assume you accept these terms
                  and conditions. Do not continue to use Codeship Private
                  Limited if you do not agree to all the terms and conditions
                  stated on this page.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  1. Introduction
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  Welcome to Codeship Private Limited! These terms and
                  conditions outline the rules and regulations for the use of
                  Codeship Private Limited's services rendered, located at
                  https://codeship.in/.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  2. Definitions
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  Client, You, and Your refers to the person accessing this
                  website and complying with the Company's terms and conditions.
                  Company, Ourselves, We, Our, and Us refers to Codeship Private
                  Limited. Party, Parties, or Us refers to both the Client and
                  ourselves.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  3. Post-Handover Support & Maintenance
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  We provide one (1) month of free support for bug fixes and
                  minor modifications after the website is handed over. After
                  the free support period, additional support or maintenance
                  services must be availed through a support subscription plan
                  or an Annual Maintenance Contract (AMC). Failure to subscribe
                  to any support plan may result in delayed or unavailable
                  support services.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  4. Domain Purchase & Renewal
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  If the client purchases the domain using their credentials, it
                  is their sole responsibility to renew it on time. We do not
                  receive renewal notifications and bear no liability for domain
                  expiration. If the domain is purchased through our account, we
                  will send renewal reminders via email and message before
                  expiry.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  5. Website Ownership & Hosting
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  Upon full payment, the ownership of the website code, design,
                  and content will be transferred to the client. If hosting is
                  provided by us, we will manage all aspects of hosting,
                  including uptime monitoring, security, and server maintenance.
                  If hosting is handled by the client, they are responsible for
                  hosting charges, renewal, and ensuring the hosting environment
                  is compatible with the developed website.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  6. Third-Party Integrations
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  Any third-party services, plugins, APIs, or software
                  integrated into the website (such as payment gateways,
                  analytics, or CRM tools) are subject to the respective
                  provider's terms. We do not guarantee lifetime compatibility,
                  free updates, or continuous functioning of third-party tools.
                  Additional charges may apply for re-integration or updates due
                  to external service changes.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  7. Modifications & Enhancements
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  Any changes, modifications, or enhancements beyond the
                  initially agreed scope will be charged separately as per the
                  latest pricing structure. The timeline for new modifications
                  will be discussed and mutually agreed upon before
                  implementation.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  8. Liability & Indemnification
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  We are not liable for any business losses, data breaches,
                  cyber-attacks, financial losses, or reputational damages
                  resulting from website issues, client errors, third-party
                  services, or hosting failures. The client agrees to indemnify
                  and hold us harmless from any legal claims, liabilities, or
                  disputes arising from the website's content, operations, or
                  usage.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  9. Data Backup & Security
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  The client is responsible for regular backups of website data
                  unless an AMC with backup services is purchased. We are not
                  liable for data loss due to hacking, malware, accidental
                  deletions, or hosting failures. Security measures such as SSL,
                  firewalls, and malware protection should be arranged by the
                  client unless included in a separate service agreement.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  10. Termination of Services
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  If the client fails to make timely payments for development,
                  hosting, domain, or support services, we reserve the right to
                  suspend or terminate services. No refunds will be provided
                  once the website is delivered and approved. Any disputes must
                  be raised within 7 days of project completion; post which, it
                  will be considered closed.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  11. Confidentiality & Intellectual Property
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  All client-provided information will be kept confidential and
                  used solely for the purpose of website development. We retain
                  the right to display the website in our portfolio unless the
                  client explicitly requests otherwise.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  12. Governing Law & Dispute Resolution
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  These terms are governed by the laws of [Your Country/State].
                  Any disputes shall be resolved through mediation first,
                  failing which, legal action may be pursued in the applicable
                  jurisdiction.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  13. Cookies
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  We employ the use of cookies. By accessing Codeship Private
                  Limited, you agree to use cookies in agreement with our
                  Privacy Policy. Most interactive websites use cookies to
                  enable the functionality of certain areas and make it easier
                  for visitors.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  14. License
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  Unless otherwise stated, Codeship Private Limited and/or its
                  licensors own the intellectual property rights for all
                  material on our website. You may access our website for your
                  own personal use, subject to restrictions outlined in these
                  terms.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  15. Prohibited Activities
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  You must not: Republish material from Codeship Private
                  Limited. Sell, rent, or sub-license material from our website.
                  Reproduce, duplicate, or copy material from our website.
                  Redistribute content without our written consent.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  20. Content Liability
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  We shall not be held responsible for any content that appears
                  on third-party websites linking to our website. No link(s)
                  should appear on any website that may be interpreted as
                  libelous, obscene, or criminal, or which infringes on
                  third-party rights.
                </p>

                <h3 className="font-size-24 font_weight_600 font_color_blue mb-4 mt-5">
                  17. Changes to These Terms
                </h3>
                <p className="font-size-20 font_weight_400 font_color_black mb-4 text-justify">
                  We reserve the right to update or change these terms at any
                  time. Continued use of our website after such changes will
                  constitute acceptance of the revised terms.
                </p>
              </div>
            </section>

            {/* Why Choose Codeship Section */}
            <section style={{ marginBottom: "40px" }}>
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
          </div>
        </Container>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Terms;
