'use client';

import "./OurWorks.css";
// import "./About.css";
import Banner from "../Components/Banner";
import Banner_Data from "../Data/Banner_Data";
// import Footer from "../Components/Footer";
import Brands from "../Components/Brands";
import WorkTogther from "../Components/WorkTogther";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import WorkCard_1 from "../Components/WorkCard_1";
import WorkCard_2 from "../Components/WorkCard_2";
import "../Pages/Home.css";
import MetaTags from '../Components/MetaTags';
import { Workdata_1, Workdata_2 } from "../Data/WorkData";
// import { Helmet } from 'react-helmet-async';

function OurWorks() {
  const { text, image } = Banner_Data.works;

  // Combine work data for meta tags
  const allWorkData = [...Workdata_1, ...Workdata_2];

  // Prepare meta content with dynamic data
  const projectTypes = [...new Set(allWorkData.flatMap(work => work.tags))];
  const metaContent = {
    title: 'Our Works',
    description: 'Explore Codeship\'s diverse portfolio of successful digital projects. From web development to mobile apps, discover how we\'ve helped businesses transform their digital presence.',
    keywords: [
      ...projectTypes,
      'portfolio',
      'case studies',
      'client projects',
      'digital solutions',
      'success stories',
      'web development projects',
      'mobile app portfolio'
    ],
    ogImage: image
  };

  // Calculate indices for WorkCard_1 and WorkCard_2
  const workCard1Indices = Array.from({ length: Math.ceil(Workdata_1.length / 2) * 2 }, (_, i) => i);
  // const workCard2Indices = Array.from({ length: Workdata_2.length }, (_, i) => i);

  return (
    <div>
      {/* <Helmet>
        <title>Our Works - Codeship</title>
        <meta name="description" content="Explore the portfolio of Codeship's successful projects and digital solutions delivered to clients." />
      </Helmet> */}
      <MetaTags {...metaContent} />
      <Banner text={text} image={image} />
      <Brands />
      {/* works */}
      <section>
        <Container className="my_container">
          <div className="row justify-content-around">
            {workCard1Indices.map((_, i) => (
              
                <WorkCard_1 key={`card1-${i}`} index={i} />
              
            ))}
          </div>
        </Container>
      </section>
      <WorkTogther />
      {/* <Footer /> */}
    </div>
  );
}

export default OurWorks;
