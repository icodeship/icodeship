import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { getImageSrc } from "../utils/imageUtils";

// Helper: Initial position based on animationDirection
const getInitialPosition = (direction) => {
  switch (direction) {
    case "topLeft":
      return { x: -50, y: -50, opacity: 0 };
    case "topRight":
      return { x: 50, y: -50, opacity: 0 };
    case "bottomLeft":
      return { x: -20, y: 50, opacity: 0 };
    case "bottomRight":
      return { x: 50, y: 50, opacity: 0 };
    case "topToBottom":
      return { x: 0, y: -50, opacity: 0 };
    case "bottomToTop":
      return { x: 0, y: 50, opacity: 0 };
    case "leftToRight":
      return { x: -50, y: 0, opacity: 0 };
    case "rightToLeft":
      return { x: 50, y: 0, opacity: 0 };
    default:
      return { x: 0, y: 0, opacity: 0 };
  }
};

const Animation = ({
  imgSrc,
  altText = "Tech Logo",
  animationDirection = "topLeft",
  className = "",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 1.3, ease: "easeOut" },
      });
    } else {
      controls.start({
        ...getInitialPosition(animationDirection),
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    }
  }, [inView, controls, animationDirection]);

  return (
    <motion.div
      ref={ref}
      className={`bg-white tech_box d-flex justify-content-center align-items-center ${className}`}
      initial={getInitialPosition(animationDirection)}
      animate={controls}
      style={{ willChange: "transform, opacity" }}
    >
      <img
        src={getImageSrc(imgSrc)}
        alt={altText}
        className="img-fluid p-1"
        style={{ pointerEvents: "none" }}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    </motion.div>
  );
};

export default Animation;
