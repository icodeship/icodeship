'use client';

// import { HelmetProvider } from 'react-helmet-async';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import ScrollToTopButton from '@/Components/ScrollToTopButton';
import Loader from '@/Components/Loader';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function RootProvider({ children }) {
  const pathname = usePathname();
  const isLanding = pathname === '/landing';
  const helmetContext = {};
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (typeof window !== 'undefined' && window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [pathname, mounted]);

  // Initialize GSAP and ScrollTrigger
  useEffect(() => {
    if (!mounted) return;

    let gsap, ScrollTrigger;
    let killed = false;

    import('gsap').then((mod) => {
      gsap = mod.gsap;
      return import('gsap/ScrollTrigger');
    }).then((st) => {
      if (killed) return;

      ScrollTrigger = st.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      const bodyEl = document.body;
      if (bodyEl) resizeObserver.observe(bodyEl);

      return () => {
        killed = true;
        resizeObserver.disconnect();

        if (typeof window !== 'undefined') {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
        }
      };
    });

    return () => {
      killed = true;
    };
  }, [mounted]);

  return (
    // <HelmetProvider context={helmetContext}>
    <>
      {!isLanding && <Header />}
      <div>
        {loading && <Loader />}
        {children}
        <ScrollToTopButton />
      </div>
      {!isLanding && <Footer />}
      </>
    // </HelmetProvider>
  );
}
