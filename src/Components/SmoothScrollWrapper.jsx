'use client';

// SmoothScrollWrapper.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScrollWrapper = ({ children }) => {
  const smootherRef = useRef(null);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current && contentRef.current) {
      smootherRef.current = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 2,
        effects: true,
        normalizeScroll: true,
        ignoreMobileResize: true,
      });

      return () => {
        if (smootherRef.current) {
          smootherRef.current.kill();
        }
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef} >
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default SmoothScrollWrapper;
