import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import React from "react";

export const SmoothContext = React.createContext(null);

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 300 && window.innerWidth >= 768);
    };

    checkScroll(); // Initial check

    const handleScroll = () => checkScroll();
    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      checkScroll(); // Re-check visibility on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop} 
        style={{
          position: 'fixed',
          bottom: '60px',
          right: '60px',
          width: '48px',
          height: '48px',
          backgroundColor: '#49499D',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9999,
        }}
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTopButton;
