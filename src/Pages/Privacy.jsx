'use client';

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "../Components/Footer";
import "../Pages/Capabilities.css";
import { Container } from "react-bootstrap";
import Link from "next/link";
// import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute("data-section");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navigationItems = [
    { id: "interpretation", title: "Interpretation & Definitions" },
    { id: "collecting", title: "Collecting Your Data" },
    { id: "usage-data", title: "Usage Data" },
    { id: "tracking", title: "Tracking Technologies" },
    { id: "use-data", title: "Use of Your Data" },
    { id: "retention", title: "Data Retention" },
    { id: "transfer", title: "Data Transfer" },
    { id: "disclosure", title: "Data Disclosure" },
    { id: "security", title: "Data Security" },
    { id: "children", title: "Children's Privacy" },
    { id: "links", title: "Third-Party Links" },
    { id: "changes", title: "Policy Changes" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* <Helmet>
        <title>Privacy Policy - Codeship</title>
        <meta name="description" content="Read Codeship's privacy policy to understand how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, personal information, codeship privacy" />
        <meta property="og:title" content="Privacy Policy - Codeship" />
        <meta property="og:description" content="Learn about how Codeship protects your privacy and handles your personal information." />
        <meta property="og:type" content="website" />
      </Helmet> */}
      {/* Header */}
      <header className="background_color_blue text-white py-5 mt-5 mb-0">
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">Privacy Policy</h1>
              <p className="lead mb-0">
                Codeship Private Limited - Your Privacy Matters
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
      {/* Main Content */}
      <Container className="">
        <h2 className="mt-5">Interpretation and Definitions</h2>

        <h3 className="mt-4">Interpretation</h3>
        <p className="font_color_light_grey">
          Words with capitalized initial letters have meanings defined under
          specific conditions. These definitions apply regardless of whether
          they appear in singular or plural form.
        </p>

        <h3>Definitions</h3>
        <p className="font_color_light_grey">
          For the purposes of this Privacy Policy:
        </p>
        <p className="font_color_light_grey">
          Account means a unique account created for you to access our Service
          or parts of it.
        </p>
        <p className="font_color_light_grey">
          Company refers to Codeship Private Limited, also referred to as "the
          Company", "We", "Us" or "Our" in this policy. Address: No 49/A, 3rd
          St, Elumalai Nagar, Annai Theresa Nagar, Madipakkam, Chennai, Tamil
          Nadu 600091.
        </p>
        <p className="font_color_light_grey">
          Cookies are small files placed on your device that store browsing data
          and preferences.
        </p>
        <p className="font_color_light_grey">
          Country refers to Tamil Nadu, India.
        </p>
        <p className="font_color_light_grey">
          Device means any tool that can access the Service, such as a computer,
          smartphone, or tablet.
        </p>
        <p className="font_color_light_grey">
          Personal Data is any information that relates to an identified or
          identifiable individual.
        </p>
        <p className="font_color_light_grey">
          Service refers to the website operated by the Company.
        </p>
        <p className="font_color_light_grey">
          Service Provider means any person or entity processing data on behalf
          of the Company to support the Service.
        </p>
        <p className="font_color_light_grey">
          Usage Data refers to data collected automatically when using the
          Service, such as IP address, device data, and interaction metrics.
        </p>
        <p className="font_color_light_grey">
          Website refers to Codeship Private Limited's platform, accessible at{" "}
          <a
            className="text-decoration-none text-black font-size-18 font_weight_600"
            href="https://codeship.in/"
          >
            https://codeship.in/
          </a>
          .
        </p>
        <p className="font_color_light_grey">
          You means the individual accessing the Service, or the entity on whose
          behalf the individual is accessing it.
        </p>

        <h2 className="mt-5">Collecting and Using Your Personal Data</h2>

        <h3 className="mt-4">Types of Data Collected</h3>

        <h4 className="mt-4">Personal Data</h4>
        <p className="font_color_light_grey">
          We may ask you to provide personal information that can be used to
          contact or identify you. This may include your email address, first
          and last name, and phone number.
        </p>

        <h4>Usage Data</h4>
        <p className="font_color_light_grey">
          Usage Data is collected automatically when using the Service. It may
          include your IP address, browser type, browser version, the pages you
          visit, the time and date of your visit, time spent on pages, device
          identifiers, and other diagnostic data.
        </p>
        <p className="font_color_light_grey">
          If you access the Service via a mobile device, we may also collect
          information such as your mobile device type, unique device ID, mobile
          IP address, mobile OS, mobile browser type, and other diagnostic data.
        </p>

        <h3 className="mt-5">Tracking Technologies and Cookies</h3>

        <p className="font_color_light_grey">
          We use Cookies and similar technologies such as beacons, tags, and
          scripts to track activity on our Service and store information. These
          technologies help us improve and analyze our Service.
        </p>

        <p className="font_color_light_grey">
          A cookie is a small file placed on your device. You can instruct your
          browser to refuse all cookies or to notify you when a cookie is being
          sent. However, some parts of the Service may not function properly
          without them.
        </p>

        <p className="font_color_light_grey">
          Flash Cookies may be used to store your preferences or activity data.
          These are not managed through standard browser settings. You can
          control Flash Cookies by visiting{" "}
          <a
            className="text-decoration-none text-black font-size-18 font_weight_600"
            href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html"
          >
            Adobe's help page
          </a>
          .
        </p>

        <p className="font_color_light_grey">
          Web Beacons (also called pixel tags or clear gifs) may be used in our
          emails or on the Service to monitor user engagement and ensure system
          performance.
        </p>

        <p className="font_color_light_grey">
          Cookies may be "Persistent" (remain on your device after you go
          offline) or "Session" (deleted once your browser is closed). We use
          both types to operate our Service effectively.
        </p>

        <h4 className="mt-4">Types of Cookies Used</h4>

        <p className="font_color_light_grey">
          <strong>Necessary Cookies</strong> are session-based and essential for
          providing access to secure areas of the website. These cookies enable
          core functionality such as security, network management, and
          accessibility.
        </p>

        <p className="font_color_light_grey">
          <strong>Cookies Policy Acceptance Cookies</strong> are persistent and
          store whether you've accepted the use of cookies on our site to avoid
          repeatedly prompting you.
        </p>

        <p className="font_color_light_grey">
          <strong>Functionality Cookies</strong> are persistent cookies that
          remember your settings and preferences (such as login credentials or
          language), enhancing your user experience.
        </p>

        <h4 className="mt-4">Other Tracking Technologies</h4>

        <p className="font_color_light_grey">
          In addition to cookies, we may use similar tracking technologies like
          Flash Cookies and Web Beacons. These tools help us better understand
          user behavior, track conversions, and improve our platform.
        </p>

        <p className="font_color_light_grey">
          For more information about how we use cookies and how you can manage
          them, please refer to our full Cookies Policy.
        </p>

        <h3 className="mt-5">Use of Your Personal Data</h3>

        <p className="font_color_light_grey">
          We use your Personal Data to provide and maintain the Service,
          including monitoring usage.
        </p>

        <p className="font_color_light_grey">
          We manage your account and registration as a user, giving you access
          to specific functionalities of the Service.
        </p>

        <p className="font_color_light_grey">
          Your data supports contract performance, including purchases or
          services you've requested.
        </p>

        <p className="font_color_light_grey">
          We may contact you via email, phone, SMS, or other digital channels to
          update you on features, products, or security issues related to the
          Service.
        </p>

        <p className="font_color_light_grey">
          With your consent, we may send marketing materials about similar
          products or services unless you opt out.
        </p>

        <p className="font_color_light_grey">
          We respond to your inquiries and provide customer support as needed.
        </p>

        <p className="font_color_light_grey">
          During corporate events like mergers, acquisitions, or asset sales,
          your data may be transferred under proper safeguards.
        </p>

        <p className="font_color_light_grey">
          We may use your data to analyze user behavior, improve functionality,
          and enhance the overall experience.
        </p>

        <h3 className="mt-5">Sharing Your Personal Data</h3>

        <p className="font_color_light_grey">
          We may share your data with trusted Service Providers to assist in
          data processing, analytics, or communication services.
        </p>

        <p className="font_color_light_grey">
          During a merger, sale, or acquisition, your personal information may
          be transferred as part of business assets.
        </p>

        <p className="font_color_light_grey">
          We may share your information with our affiliates, in which case we
          will require them to honor this Privacy Policy.
        </p>

        <p className="font_color_light_grey">
          Business partners may receive information to offer you specific
          products, services, or promotions in collaboration with us.
        </p>

        <p className="font_color_light_grey">
          Any content you post in public areas of the Service may be visible to
          other users and shared publicly.
        </p>

        <p className="font_color_light_grey">
          We may disclose your data with your explicit consent for any other
          purpose not listed above.
        </p>

        <h3 className="mt-5">Retention of Your Personal Data</h3>

        <p className="font_color_light_grey">
          We retain your Personal Data only for as long as necessary to fulfill
          the purposes described in this Privacy Policy, including legal
          obligations, dispute resolution, and policy enforcement.
        </p>

        <p className="font_color_light_grey">
          Usage Data is generally kept for a shorter duration unless used to
          enhance security or service improvements.
        </p>

        <h3 className="mt-5">Transfer of Your Personal Data</h3>

        <p className="font_color_light_grey">
          Your information may be transferred to — and maintained on — computers
          located outside your state, province, or country where data protection
          laws may differ. By submitting your data, you agree to such transfers.
        </p>

        <p className="font_color_light_grey">
          We ensure appropriate safeguards are in place for cross-border data
          transfers, such as contractual clauses and strict privacy commitments,
          to ensure your information remains protected.
        </p>
        <h3 className="mt-5">Disclosure of Your Personal Data</h3>

        <h4 className="mt-4">Business Transactions</h4>
        <p className="font_color_light_grey">
          If the Company is involved in a merger, acquisition, or asset sale,
          Your Personal Data may be transferred. We will provide notice before
          Your Personal Data is transferred and becomes subject to a different
          Privacy Policy.
        </p>

        <h4>Law Enforcement</h4>
        <p className="font_color_light_grey">
          Under certain circumstances, the Company may be required to disclose
          Your Personal Data if required to do so by law or in response to valid
          requests by public authorities (e.g., a court or a government agency).
        </p>

        <h4>Other Legal Requirements</h4>
        <p className="font_color_light_grey">
          The Company may disclose Your Personal Data in the good faith belief
          that such action is necessary to:
        </p>
        <p className="font_color_light_grey">
          - Comply with a legal obligation
          <br />
          - Protect and defend the rights or property of the Company
          <br />
          - Prevent or investigate possible wrongdoing in connection with the
          Service
          <br />
          - Protect the personal safety of Users of the Service or the public
          <br />- Protect against legal liability
        </p>

        <h3 className="mt-5">Security of Your Personal Data</h3>
        <p className="font_color_light_grey">
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </p>

        <h3 className="mt-5">Children's Privacy</h3>
        <p className="font_color_light_grey">
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13. If You are a parent or guardian and You are aware
          that Your child has provided Us with Personal Data, please contact Us.
          If We become aware that We have collected Personal Data from anyone
          under the age of 13 without verification of parental consent, We take
          steps to remove that information from Our servers.
        </p>
        <p className="font_color_light_grey">
          If We need to rely on consent as a legal basis for processing Your
          information and Your country requires consent from a parent, We may
          require Your parent's consent before We collect and use that
          information.
        </p>

        <h3 className="mt-5">Links to Other Websites</h3>
        <p className="font_color_light_grey">
          Our Service may contain links to other websites that are not operated
          by Us. If You click on a third-party link, You will be directed to
          that third party's site. We strongly advise You to review the Privacy
          Policy of every site You visit.
        </p>
        <p className="font_color_light_grey">
          We have no control over and assume no responsibility for the content,
          privacy policies, or practices of any third-party sites or services.
        </p>

        <h3 className="mt-5">Changes to This Privacy Policy</h3>
        <p className="font_color_light_grey">
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <p className="font_color_light_grey">
          We will let You know via email and/or a prominent notice on Our
          Service prior to the change becoming effective and update the "Last
          updated" date at the top of this Privacy Policy.
        </p>
        <p className="font_color_light_grey">
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>

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
              Web development is the work involved in developing a website for
              the Internet or an intranet. Web development can range from
              developing a simple single static page of plain text to complex
              web applications, electronic businesses, and social network
              services. Website development gives out the impression of a new
              start for the business and the best developers in Chennai make
              sure you stand out from the competitors.
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
            We reserve the right to change these policy terms and conditions at
            any time. Any such changes will take effect when posted on the
            website.
          </p>
        </div>
      </Container>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Privacy;
