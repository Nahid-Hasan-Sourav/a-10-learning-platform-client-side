import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const Checkout = () => {
  const premiumDetails = useLoaderData();
  const {user}=useContext(AuthContext);
  console.log("Got it",user)
  return (
    <Container className="h-100">
      <Row  className="justify-content-center align-content-center align-items-center">
        <Col lg='6' className="g-3">
        <Card >
          <ListGroup variant="flush">
            <ListGroup.Item className="fw-bold text-center">User Info</ListGroup.Item>
            <ListGroup.Item><span className="fw-bold">User Name :</span> {user?.displayName}</ListGroup.Item>
            <ListGroup.Item><span className="fw-bold">User Id : </span>{user?.uid}</ListGroup.Item>
           
          </ListGroup>
          
        </Card>
        </Col>
       
      </Row>
      <Row className="justify-content-center align-content-center align-items-center">
        <Col lg='6' className='g-3'>
        <Card >
          <ListGroup variant="flush">
            <ListGroup.Item className="fw-bold text-center fs-2">Course Details Info</ListGroup.Item>
            <ListGroup.Item><span className="fw-bold">Course Name :</span> {premiumDetails.name}</ListGroup.Item>
            <ListGroup.Item><span className="fw-bold">Course Instructor : </span>{premiumDetails.professor}</ListGroup.Item>
            <ListGroup.Item><span className="fw-bold">Course Fee : </span>{premiumDetails.price}$</ListGroup.Item>
            <ListGroup.Item><span className="fw-bold">Course Access : </span>Life Time Video Access</ListGroup.Item>
          </ListGroup>

          
          
        </Card>
        <Button className='my-2 w-100'>Payment</Button>
        </Col>
       
      </Row>
      {/* <Row style={{height:'100vh'}} className="justify-content-center align-content-center align-items-center">
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
       
      </Row> */}
    </Container>
  );
};

export default Checkout;
