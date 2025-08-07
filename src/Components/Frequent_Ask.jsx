import  { useState } from 'react';
import { leftAccordionData, rightAccordionData } from "../Data/Contact_Accordion";
import { Container, Accordion } from "react-bootstrap";

function Frequent_Ask() {
  const [activeLeft, setActiveLeft] = useState(null);
  const [activeRight, setActiveRight] = useState(null);

  const handleLeftToggle = (key) => {
    setActiveLeft(activeLeft === key ? null : key);
  };

  const handleRightToggle = (key) => {
    setActiveRight(activeRight === key ? null : key);
  };

  return (
    <section>
      <Container className='my_container'>
        <p className='font-size-40 font_weight_600 text-md-center mt-5'>Frequently Asked Questions</p>
        <div className="row mt-5">

          {/* Left Column */}
          <div className="col-md-6">
            <Accordion activeKey={activeLeft} className=''>
              {leftAccordionData.map((item, index) => (
                <Accordion.Item
                  key={index}
                  eventKey={index.toString()}
                  className=' border_shadow rounded-4  mb-lg-4 mb-3  '
                  onClick={() => handleLeftToggle(index.toString())}
                >
                 <Accordion.Header className="no-padding-header" ><p className='font-size-21  font_weight_500  Frequent_ask_height w-75 p-0 m-0 flex'>{item.title}</p></Accordion.Header>
                  <Accordion.Body className='font-size-16 font_weight_500 pt-0'>{item.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <Accordion activeKey={activeRight}>
              {rightAccordionData.map((item, index) => (
                <Accordion.Item
                  key={index}
                  eventKey={index.toString()}
                  className=' border_shadow  rounded-4 mb-lg-4 mb-3   '
                  onClick={() => handleRightToggle(index.toString())}
                >
                  <Accordion.Header ><p className='font-size-21  font_weight_500  Frequent_ask_height w-75 p-0 m-0 flex'>{item.title} </p></Accordion.Header>
                  <Accordion.Body className='font-size-16 font_weight_500 pt-0'>{item.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Frequent_Ask;
