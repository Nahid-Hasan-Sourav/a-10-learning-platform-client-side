import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
    return (
        <Container>
           <Row className="justify-content-center py-4">
        <Col lg="8">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header> What is online learning like?</Accordion.Header>
              <Accordion.Body>
              Online learning is education that takes place over the Internet. It is often referred to as “e- learning” among other terms. However, online learning is just one type of “distance learning” - the umbrella term for any learning that takes place across distance and not in a traditional classroom.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>  Does  this online learning really work?</Accordion.Header>
              <Accordion.Body>
              Online learning is not only more effective for students, but it is also better for the environment. Online courses consume 90% less energy and release 85% less CO2 per student than traditional in-person courses, according to the Open University in the United Kingdom.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header> What types of assignments do you give?</Accordion.Header>
              <Accordion.Body>
              We will give you assignment based on our module and you have to study properly and give some efforts to complete this properly.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How long does each course take?
            </Accordion.Header>
              <Accordion.Body>
              Only 4 months these will last and it depends mainly on your course topics.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>How much do courses cost?
            </Accordion.Header>
              <Accordion.Body>
              100-300$ 
              </Accordion.Body>
            </Accordion.Item>
            
          </Accordion>
        </Col>
      </Row>
        </Container>
    );
};

export default Faq;