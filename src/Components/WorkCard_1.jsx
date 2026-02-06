import React, { useEffect, useRef, useState } from "react";
import { Workdata_1 } from "../Data/WorkData";
import { animateWorkCard } from "../Animation/animation";
import { getImageSrc } from "../utils/imageUtils";
import "../Pages/Home.css";
import Modal from "./Modal";

const WorkCard_1 = ({ index }) => {
  const data = Workdata_1[index];
  const cardRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  // Run animation only on client
  useEffect(() => {
    if (cardRef.current) {
      animateWorkCard(cardRef.current);
    }
  }, []);

  // Set a fixed chevron size
  // const chevronSize = 30;

  if (!data) return null;

  return (
    <>
      <div ref={cardRef} className="col-md-6 mt-lg-5 mt-5">
        <div className={`rounded-4 ${index % 2 !== 0 ? "Work_Card" : ""}`}>
          <div
            className="d-flex mt-lg-2 pt-lg-3"
            onClick={() => setShowModal(true)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={getImageSrc(data.img)}
              alt={data.title}
              className="img-fluid w-100 pt-lg-5"
            />
          </div>
          <div className="ms-4">
            <p
              className="font-size-30 font_weight_600"
              onClick={() => setShowModal(true)}
              style={{ cursor: "pointer" }}
            >
              {data.title}
              {/* <ChevronRight size={chevronSize} /> */}
            </p>
            <p className="font-size-20 ">{data.description}</p>
            <div className="d-flex gap-lg-4 gap-3  font-size-18 flex-wrap text-nowrap font_color_light_grey">
              {data.tags.map((tag, i) => (
                <p className="m-0" key={i}>{tag}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <iframe
            className="rounded-5"
            src={data.link}
            title={data.title}
            style={{ width: "100%", height: "100%", border: "none" }}
            allowFullScreen
          />
        </Modal>
      )}
    </>
  );
};

export default WorkCard_1;
