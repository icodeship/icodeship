import React from 'react';
import { Container } from "react-bootstrap";
import MetaTags from '../../Components/MetaTags';
import Banner from "../../Components/Banner";
import Brands from "../../Components/Brands";
import WorkTogther from "../../Components/WorkTogther";
// import Footer from "../../Components/Footer";
import Service_Page_Data from "../../Service_Data/Service_Page_Data";

function WordPressService() {
  const serviceData = Service_Page_Data["wordpress-dev"];
  
  // Prepare meta content
  const metaContent = {
    title: 'WordPress Development Services',
    description: 'Get scalable, secure, and SEO-friendly WordPress websites tailored to your brand. Our expert WordPress development services include custom theme development, plugin integration, and ongoing maintenance.',
    keywords: [
      'wordpress development',
      'custom wordpress themes',
      'wordpress plugins',
      'wordpress maintenance',
      'wordpress security',
      'responsive wordpress',
      'SEO-friendly wordpress',
      'wordpress optimization',
      'wordpress integration',
      'wordpress experts'
    ],
    ogImage: serviceData.banner.icon
  };

  return (
    <div className="wordpress-service-page">
      <MetaTags {...metaContent} />
      
      {/* Banner Section */}
      <section className="service-banner">
        <Container>
          <div className="banner-content">
            <h1>{serviceData.banner.title}</h1>
            <img src={serviceData.banner.icon} alt="WordPress Development" className="banner-icon" />
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <Container>
          <h2>{serviceData.sub_banner.title}</h2>
          <p>{serviceData.sub_banner.description}</p>
          <img src={serviceData.sub_banner.icon} alt="Why Choose Us" className="section-icon" />
        </Container>
      </section>

      {/* Service Process */}
      <section className="service-process">
        <Container>
          <h2>Our WordPress Development Process</h2>
          <div className="process-cards">
            {serviceData.cardData.map((card) => (
              <div key={card.id} className={`process-card ${card.className}`}>
                <img src={card.icon} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WorkTogther />
      {/* <Footer /> */}
    </div>
  );
}

export default WordPressService; 