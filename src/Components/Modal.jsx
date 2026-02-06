'use client';

import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <div
        className="modal-content"
        style={{
          position: "relative",
          width: "87vw",
          height: "80vh",
          backgroundColor: "#fff",
          borderRadius: "30px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Content */}
        {children}

        {/* Close Button */}
        <button className="mt-2"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            transform: "translate(0%, -30%)",
            background: "#fff",
            border: "none",
            fontSize: "clamp(1rem, 2.5vw, 1.8rem)",
            cursor: "pointer",
            color: "#333",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
            zIndex: 100000,
            borderRadius: "50%",
            width: "clamp(30px, 6vw, 42px)",
            height: "clamp(30px, 6vw, 42px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            lineHeight: 1,
          }}
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
