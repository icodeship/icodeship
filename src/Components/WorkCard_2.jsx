import React, { useEffect, useRef, useState } from "react";
import { Workdata_2 } from "../Data/WorkData";
import { animateWorkCard } from "../Animation/animation";
import { getImageSrc } from "../utils/imageUtils";
import "../Pages/Home.css";
import { ChevronRight } from "lucide-react";
import Modal from "./Modal";
// Reusable Modal Component


// WorkCard_2 Component
const WorkCard_2 = ({ index }) => {
  const data = Array.isArray(Workdata_2) ? Workdata_2[index] : Workdata_2;
  const imgRef = useRef(null);
  const cardRef = useRef(null);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (imgRef.current) animateWorkCard(imgRef.current);
    if (cardRef.current) animateWorkCard(cardRef.current);
  }, []);

  // Set a fixed chevron size
  const chevronSize = 30;

  if (!data) return null;

  return (
    <>
      <div className="col-md-6" ref={cardRef}>
        <img
          ref={imgRef}
          src={getImageSrc(data.img)}
          alt={data.title}
          className="img-fluid mt-lg-5 mt-5 cursor-pointer"
          style={{ opacity: 0 ,  cursor: "pointer" }}
          onClick={() => setShowModal(true)}
        />
        <div className="ms-4">
          <p
            className="font-size-30 font_weight_600 d-inline-flex align-items-center gap-2 cursor-pointer"
            onClick={() => setShowModal(true)}              style={{ cursor: "pointer" }}
          >
            {data.title}
            <ChevronRight size={chevronSize} />
          </p>
          <p className="font-size-20 w-75">{data.description}</p>
          <div className="d-flex flex-wrap gap-4 font-size-18 font_color_light_grey">
            {data.tags.map((tag, i) => (
              <p key={i} className="text-md-center m-0">
                {tag}
              </p>
            ))}
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

export default WorkCard_2;
