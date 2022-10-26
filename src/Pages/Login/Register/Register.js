import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from 'react-bootstrap/Nav';
import {Link } from 'react-router-dom';
const Register = () => {
  return (
    <Container>
        <h2 className="fw-bold text-center py-3">User Registration Form</h2>
      <Row className="justify-content-center">
        <Col lg="6" className="order">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control name="Fname" type="text" placeholder="Enter Your full name" />            
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo url</Form.Label>
              <Form.Control name="Fname" type="text" placeholder="Enter Your photo url" />            
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" />            
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
            <p className="d-flex flex-row my-2">
                Already Have an accout? Please
                 <Link className="mx-1" to='/login'>
                    Login
                </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
