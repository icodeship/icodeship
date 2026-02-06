'use client';

import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import logo from "../assets/images/Home/logo.png";
import { getImageSrc } from "../utils/imageUtils";
import { HiMenu } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faArrowLeft,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useLetsTalk from "../Components/Contact_page_link";
import { Services_Data } from "../Data/Capable_Data";
import { useState, useRef } from "react";

export default function Header({}) {
  const [show, setShow] = useState(false);
  const [showCapabilities, setShowCapabilities] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const currentPath = usePathname();
  const letsTalk = useLetsTalk();

  // State for capabilities dropdown in the new offcanvas
  const [openServiceIndex, setOpenServiceIndex] = useState(null);

console.log("params",currentPath.replace("/capable-service/", ""));
const currentsubpath=currentPath.replace("/capable-service/", "")
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleShowCapabilities = () => {
    // setShow(false); // Close main menu
    setShowCapabilities(true); // Open capabilities menu
  };

  const handleCloseCapabilities = () => {
    setShowCapabilities(false);
    setOpenServiceIndex(null); // Reset open dropdowns
    handleClose()
  };

  const handleBackToMain = () => {
    setShowCapabilities(false);
    setShow(true); // Go back to main menu
    
  };

  const showDropdown = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const hideDropdownWithDelay = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const uniqueServices = [];
  const seenTitles = new Set();

  for (const service of Services_Data) {
    if (!seenTitles.has(service.title)) {
      uniqueServices.push(service);
      seenTitles.add(service.title);
    }
  }

  const toggleServiceDropdown = (index) => {
    setOpenServiceIndex(openServiceIndex === index ? null : index);
  };

  return (
    <section>
    <header className=" position-fixed top-0  z-3 header-css" >
      <Navbar expand="xxl" className="p-0">
        <Container fluid className="bg-white pt-4 pb-3">
          {/* Mobile View Header */}
          <div className="d-flex flex-row d-xxl-none gap-4  justify-content-sm-between align-items-center w-100 px-0">
            <Button
              className="rounded-circle background_color_blue text-white p-2"
              onClick={handleShow}
            >
              <HiMenu size={28} color="white" />
            </Button>
            <div className="d-flex justify-content-center">
              <Nav.Link
                as={Link}
                href="/"
                onClick={() => {
                  if (window.location.pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <img src={getImageSrc(logo)} alt="Codeship Home" className="logo_img img-fluid" style={{maxWidth:"200px",width:"100%"}}/>
              </Nav.Link>
            </div>
            <Button
              className="text-nowrap font-size-20 mx-xl-2 mx-lg-2 d-flex justify-content-center align-items-center blue_gradient rounded-5"
              onClick={letsTalk}
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="font-size-9 text-success  me-2 beep-glow"
              />
              Let's Talk
            </Button>
          </div>

          {/* Desktop Nav */}
          <Nav.Link
            as={Link}
            href="/"
            onClick={() => {
              if (window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="d-none d-xxl-flex ms-xl-5 ms-lg-3"
          >
            <img src={getImageSrc(logo)} alt="Codeship Home" className="logo_img" />
          </Nav.Link>

          <Navbar.Collapse id="navbarScroll" className="d-none d-xxl-flex">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll></Nav>
            <Nav className="font-size-24 font_weight_300 gap-xl-4 gap-lg-0 flex-nowrap">
              <Nav.Link
                as={Link}
                href="/"
                className={`${currentPath === "/" ? "active" : ""}`}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/about"
                className={`px-xl-3 px-lg-3 ${
                  currentPath === "/about" ? "active" : ""
                }`}
              >
                About
              </Nav.Link>

              {/* Capabilities Dropdown */}
              <Nav.Item
                className="position-relative dropdown-parent d-inline-block p-0"
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdownWithDelay}
              >
                <Nav.Link
                  as={Link}
                  href="/capable"
                  className={currentPath.startsWith("/capable") ? "active" : ""}
                >
                  Capabilities
                </Nav.Link>

                <div
                  className={`custom-dropdown position-absolute top-100 bg-white p-4 mt-2 rounded-4 shadow-lg ${
                    isOpen ? "show-dropdown" : ""
                  }`}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdownWithDelay}
                >
                  <div className="container">
                    <div className="row">
                      {uniqueServices.map((service, idx) => (
                        <div className="col-md-4 mb-4" key={idx}>
                          <h6 className="font-size-20 font_color_light_blue font_weight_600 mb-2">
                            {service.title}
                          </h6>
                          {service.points.map((point, i) => (
                            <Nav.Link
                            as={Link}
                            href={`/capable-service/${point.href}`}
                            className={`${currentsubpath === `${point.href}` ? "font_color_light_blue font_weight_600 " : ""}font-size-18 font_weight_400 text-dark pb-3 pt-2 px-0`}
                            key={i}
                            onClick={hideDropdownWithDelay}
                          >
                            {point.text}
                          </Nav.Link>
                          
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Nav.Item>

              <Nav.Link
                as={Link}
                href="/solutions"
                className={`${currentPath === "/solutions" ? "active" : ""}`}
              >
                Solutions
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/ourworks"
                className={`${currentPath === "/ourworks" ? "active" : ""}`}
              >
                Our Works
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/contact"
                className={`${currentPath === "/contact" ? "active" : ""}`}
              >
                Contact
              </Nav.Link>
              <Button
                className="text-nowrap font-size-20 mx-xl-2 mx-lg-2 d-flex justify-content-center align-items-center blue_gradient rounded-5"
                onClick={letsTalk}
              >
                <FontAwesomeIcon
                  icon={faCircle}
                  className="font-size-9 text-success  me-2 beep-glow"
                />
                Let's Talk
              </Button>
            </Nav>
          </Navbar.Collapse>

          {/* Main Offcanvas Menu for Mobile */}
          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="start"
            className=" offcanvas-bounce"
          >
             <div className="d-flex  gap-3">
              <Offcanvas.Header closeButton={false} className="p-0 w-100" >
                <div className="d-flex justify-content-around gap-4  w-100">
                  {/* Top row with close button */}

                  <div className="d-flex flex-column align-items-center justify-content-center  mt-2">
                   
                      <img src={getImageSrc(logo)} alt="Codeship Home" className="" style={{maxWidth: "200px"}} />

                  </div>
                  <div className="mt-2 pt-3 ms-3">
                    <button
                      type="button"
                      className="btn-close font-size-37 font_weight_700 outline-none "
                      onClick={handleClose}
                      aria-label="Close"
                     
                    />

                  </div>

                  {/* Center logo and title */}
                  
                </div>
              </Offcanvas.Header>
            </div>
            <Offcanvas.Body>
            {!showCapabilities&&(

              <Nav className="flex-column gap-4 ms-4 font-size-25">
                <Nav.Link as={Link} href="/" onClick={handleClose}>
                  Home
                </Nav.Link>

                <Nav.Link as={Link} href="/about" onClick={handleClose}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} href="/capable" onClick={handleClose}>
                  Capabilities
                </Nav.Link>
                {/* Capabilities - opens new offcanvas */}
                <button
                  className="btn w-100 text-decoration-none d-flex font-size-25  border-0 p-0"
                  onClick={handleShowCapabilities}
                >
                  Capabilities Service
                </button>

                <Nav.Link as={Link} href="/solutions" onClick={handleClose}>
                  Solutions
                </Nav.Link>

                <Nav.Link as={Link} href="/ourworks" onClick={handleClose}>
                  Our Works
                </Nav.Link>

                <Nav.Link as={Link} href="/contact" onClick={handleClose}>
                  Contact
                </Nav.Link>
              </Nav>)}
              
              {showCapabilities&&(
                <>
                <button
                type="button"
                className="btn btn-link pt-5 text-dark d-flex align-items-center gap-2 text-decoration-none"
                onClick={handleBackToMain}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="font-size-28"
                />
                <span className="font-size-28 text-dec">Back</span>
              </button>
                 <div className="px-3 pt-4">
                 
                 {uniqueServices.map((service, idx) => (
                   <div key={idx} className="mb-4 border-bottom pb-4">
                     <button
                       className="btn w-100 d-flex justify-content-between align-items-center text-start p-0 border-0 bg-transparent"
                       onClick={() => toggleServiceDropdown(idx)}
                     >
                       <h5 className="mb-0 font-size-25 fw-semibold ">
                         {service.title}
                       </h5>
                       <FontAwesomeIcon
                         icon={
                           openServiceIndex === idx ? faChevronUp : faChevronDown
                         }
                         className="font-size-24 text-muted"
                       />
                     </button>
 
                     {openServiceIndex === idx && (
                       <div className="mt-3 ps-2">
                         {service.points.map((point, i) => (
                           <Nav.Link
                             key={i}
                             as={Link}
                             href={`/capable-service/${point.href}`}
                             onClick={handleCloseCapabilities}
                             className="d-block py-2 px-3 mb-2 font-size-24 text-dark bg-light rounded-3 text-decoration-none "
                             onMouseEnter={(e) => {
                               e.target.style.borderLeftColor = "#007bff";
                               e.target.style.backgroundColor = "#f8f9fa";
                             }}
                             onMouseLeave={(e) => {
                               e.target.style.borderLeftColor = "transparent";
                               e.target.style.backgroundColor = "#f8f9fa";
                             }}
                           >
                             {point.text}
                           </Nav.Link>
                         ))}
                       </div>
                     )}
                   </div>
                 ))}
                
               </div>
               </>)}
            </Offcanvas.Body>
          </Offcanvas>

          {/* Capabilities Offcanvas */}
          
        </Container>
      </Navbar>
    </header>
    </section>
  );
}
