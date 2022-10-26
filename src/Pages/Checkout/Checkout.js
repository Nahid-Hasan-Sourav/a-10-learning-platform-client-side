import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Checkout = () => {
  const premiumDetails = useLoaderData();
  return (
    <Container className="h-100">
      <Row style={{height:'100vh'}} className="justify-content-center align-content-center align-items-center">
        <Col lg='6' style={{height:'300px'}}>
        <Card >
          <ListGroup variant="flush">
            <ListGroup.Item><span className="fw-bold">Course Name :</span> {premiumDetails.name}</ListGroup.Item>
            <ListGroup.Item><span className="fw-bold">Course Instructor : </span>{premiumDetails.professor}</ListGroup.Item>
            <ListGroup.Item><span className="fw-bold">Course Fee : </span>{premiumDetails.price}$</ListGroup.Item>
            <ListGroup.Item><span className="fw-bold">Course Access : </span>Life Time Video Access</ListGroup.Item>
          </ListGroup>
        </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
