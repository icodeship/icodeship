'use client';

import { Container } from "react-bootstrap";
import { getImageSrc } from "../utils/imageUtils";
import useLetsTalk from "./Contact_page_link";

const Banner = ({ text, image }) => {
  const letsTalk = useLetsTalk();
  return (
    <div className=" d-flex justify-content-center  mt-5 ">
      <Container className="my_container mt-md-5">
        <div className="row flex-column-reverse flex-lg-row mt-5">
          <div className="col-12 col-lg-7 col-md-12 col-sm-12 d-flex justify-content-center  align-items-center">
            <div>
              <p className="font-size-46 text-md-center text-lg-start text-md-center font_weight_600 pb-3 pt-3 ">
                {text}
              </p>
              <div className=" d-flex justify-content-center justify-content-lg-start">
                <button
                  className="px-5 py-2 border-0 text-white  font-size-25 font_weight_500 blue_gradient rounded-5"
                  onClick={letsTalk}
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5 col-md-12 col-sm-12">
            <div className="d-flex banner_height  ">
              {" "}
              <img src={getImageSrc(image)} alt="Banner Visual" rel="preload" as="image"  className="banner_height h-100 w-100 img-fluid"/>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;