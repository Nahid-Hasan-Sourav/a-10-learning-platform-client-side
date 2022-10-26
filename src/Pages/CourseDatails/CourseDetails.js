import React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import {Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const CourseDetails = () => {
  const CourseDatails = useLoaderData();
  console.log("Details ", CourseDatails);
  return (
    <Container>
      <Row className='justify-content-center py-3'>
        <Col lg="8">
        <Card >
        <Card.Header style={{height:'60px'}}>
        <Card.Title className="h-100">
            <div className="d-flex flex-row justify-content-between align-items-center h-100">
            <h3>{CourseDatails.name}</h3>
            <p style={{cursor:'pointer'}}> <FaDownload /></p>
            </div>
        </Card.Title>
        </Card.Header>
          <Card.Img style={{height:'300px'}} src={CourseDatails.url} />
          <Card.Body>
          
            <Card.Text>
              {CourseDatails.description}
            </Card.Text>
            <div>      
            <ListGroup className="d-lg-flex flex-lg-row justify-content-between">
                <ListGroup.Item className="my-3 fw-bold border bg-primary text-white">Professior : {CourseDatails.professor} </ListGroup.Item>
                <ListGroup.Item className="my-3 fw-bold border">Duration : {CourseDatails.duration}</ListGroup.Item>
                <ListGroup.Item className="my-3 fw-bold border">Student : {CourseDatails.student}</ListGroup.Item>
              
            </ListGroup>
            <Button className="my-3 fw-bold border fs-2">${CourseDatails.price}</Button>
            </div>
            <Button variant="primary" as={Link} to={`/premium-access/${CourseDatails.id}`} className="d-block w-100">GET PREMIUM ACCESS</Button>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;
