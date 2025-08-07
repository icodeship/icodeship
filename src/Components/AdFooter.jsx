import React from "react";
import Logo from "../assets/images/Codeship_Ad/Footer_logo.png";
import insta_icon from "../assets/images/Codeship_Ad/insta_icon.png";
import linkdin_icon from "../assets/images/Codeship_Ad/linkdin_icon.png";
import X from "../assets/images/Codeship_Ad/X.png";
import facebook from "../assets/images/Codeship_Ad/facebook.png";

function Footer() {
  return (
    <>
      <div
        style={{
          borderTop: "1px solid #ccc",
        }}
      ></div>
      <section className="my_container mx-auto mt-5 pb-md-5 ">
        <div className="row mb-5 px-3">
          <div className="col-md-6 col-12">
            <img src={Logo} alt="" />
            <p className="font-size-30 font_weight_700 py-2">www.codeship.in</p>
            <div className="d-flex gap-4">
              <a href="https://www.facebook.com/icodeship" target="_blank">
                <img src={facebook} className="img-fluid arrow_icon" alt="" />
              </a>
              <a
                href="https://www.instagram.com/icodeship?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                {" "}
                <img src={insta_icon} className="img-fluid arrow_icon" alt="" />
              </a>
              <a
                href="https://www.linkedin.com/company/icodeship/posts/?feedView=all"
                target="_blank"
              >
                {" "}
                <img src={linkdin_icon} className="img-fluid arrow_icon" alt="" />
              </a>
              <a href="https://x.com/ship_code20427?t=eCBOb7HeomgEwx2GqcJBoQ&s=09" target="_blank">
                {" "}
                <img src={X} className="img-fluid arrow_icon" alt="" />
              </a>
            </div>
          </div>
          <div className="col-md-2 col-12   d-flex flex-column gap-3">
            <p className="font-size-24 blue_color font_weight_600 m-0 pt-3 pt-md-0">
              Know More
            </p>
            <a
              href="/contact"
              className="text-decoration-none text-black font-size-20"
            >
              Help & Contact
            </a>

            <a
              href="/about"
              className="text-decoration-none text-black font-size-20 "
            >
              About Us
            </a>
          </div>
          <div className="col-md-2 col-12  d-flex flex-column gap-3">
            <p className="font-size-24 blue_color font_weight_600 m-0 pt-3 pt-md-0">
              Stay in Touch
            </p>
            <a
              target="_blank"
              href="https://www.instagram.com/icodeship?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-decoration-none text-black font-size-20 "
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/icodeship"
              target="_blank"
              className="text-decoration-none text-black font-size-20 "
            >
              FaceBook
            </a>
            <a
              href="https://www.linkedin.com/company/icodeship/posts/?feedView=all"
              target="_blank"
              className="text-decoration-none text-black font-size-20 "
            >
              Linked In
            </a>
            <a
              href="https://x.com/ship_code20427?t=eCBOb7HeomgEwx2GqcJBoQ&s=09"
              target="_blank"
              className="text-decoration-none text-black font-size-20 "
            >
              Twitter
            </a>
          </div>
          <div className="col-md-2  col-12  d-flex flex-column gap-3">
            <p className="font-size-24 blue_color font_weight_600 m-0 pt-3 pt-md-0">
              Policy
            </p>
            <a
              href="/terms"
              className="text-decoration-none text-black font-size-20 "
            >
              Terms & Condition
            </a>
            <a
              href="/privacy"
              className="text-decoration-none text-black font-size-20"
            >
              Privacy Policy
            </a>

            <a
              href=""
              className="text-decoration-none text-black font-size-20 "
            ></a>
          </div>
        </div>
      </section>
      <div
        className="d-flex justify-content-center text-md-center  py-3 mt-4"
        style={{
          borderTop: "1px solid #ccc",
        }}
      >
        © 2025 Codeship Pvt Ltd All Rights Reserved
      </div>
    </>
  );
}

export default Footer;
