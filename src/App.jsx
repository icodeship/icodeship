import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import "@fontsource/poppins";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Utility.css";
import "swiper/css";


// Pages & Components
import Home from "./Pages/Home";
import About from "./Pages/About";
import OurWorks from "./Pages/OurWorks";
import Solution from "./Pages/Solution";
import Capabilities from "./Pages/Capabilities_Navigation";
import Contact_page from "./Pages/Contact_page";
import Capabilities_service from "./Components/Capability_service";
import Capable_service_layout from "./Pages/Capable_service_layout";
import PurchaseContactForm from "./Components/Purchase_form";
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import PageNotFound from "./Components/PageNotFound";
import AdPage from "./Pages/adPage.jsx";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import Refund from "./Pages/Refund";
import ScrollToTopButton from './Components/ScrollToTopButton.jsx';
import Footer from "./Components/Footer.jsx"
const isBrowser = typeof window !== "undefined";

const ClientOnlyHeader = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? (
    <div id="header-root" >
      <Header />
    </div>
  ) : null;
};

const PageWrapper = ({ children,triggerReload }) => {
  const location = useLocation();
  const isSSR = typeof window === "undefined";
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!isSSR) {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);

        if (location.state?.scrollToForm) {
          const form = document.querySelector("#contactForm");
          if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (typeof window !== 'undefined' && window.ScrollTrigger) {
          window.ScrollTrigger.refresh();
        }
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [location, mounted, isSSR]);

  useEffect(() => {
    if (!mounted) return;

    let gsap, ScrollTrigger;
    let killed = false;

    import("gsap").then((mod) => {
      gsap = mod.gsap;
      return import("gsap/ScrollTrigger");
    }).then((st) => {
      if (killed) return;

      ScrollTrigger = st.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Refresh ScrollTrigger on resize/layout shift
      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      const bodyEl = document.body;
      if (bodyEl) resizeObserver.observe(bodyEl);

      return () => {
        killed = true;
        resizeObserver.disconnect();

        if (typeof window !== "undefined") {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
        }
      };
    });
  }, [mounted]);

  return (
    <>
      {(loading || triggerReload) ? <Loader /> : children}
      <ScrollToTopButton />
    </>
  );
};


function App() {
  const location = useLocation();
  const isFirstLoad = useRef(true);
  const isLanding = location.pathname === "/landing";

  // const [triggerReload, setTriggerReload] = useState(false);

  // useEffect(() => {
  //   if (isFirstLoad.current) {
  //     isFirstLoad.current = false;
  //   } else {
  //     const reloadPaths = ["/solutions", "/"];
  //     if (reloadPaths.includes(location.pathname)) {
  //       setTriggerReload(true);
  //       setTimeout(() => {
  //         document.body.innerHTML = ""; // optional: wipe DOM
  //         window.location.reload();
  //       }, 300); // Give loader 300ms to render
  //     }
  //   }
  // }, [location.pathname]);
  
  

  return (
    <>
      {!isLanding && <ClientOnlyHeader />}
      <PageWrapper >
        <Routes key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourworks" element={<OurWorks />} />
          <Route path="/solutions" element={<Solution />} />
          <Route element={<Capable_service_layout />}>
            <Route path="/capable" element={<Capabilities />} />
            <Route path="/capable-service/:href" element={<Capabilities_service />} />
          </Route>
          <Route path="/contact" element={<Contact_page />} />
          <Route path="/purchase-contact" element={<PurchaseContactForm />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/landing" element={<AdPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {!isLanding && <Footer />}
      </PageWrapper>
    </>
  );
}

export default App;
