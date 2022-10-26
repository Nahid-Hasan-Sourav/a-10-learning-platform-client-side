import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';

const Login = () => {
  return (
    <Container>
        <h2 className="fw-bold text-center py-3">User Login</h2>
      <Row className="justify-content-center">
        <Col lg="6" className="order">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit" className="d-block w-100">
             Login
            </Button>
            <p className="d-flex flex-row my-2 justify-content-center">
                Don't Have An Account? Please
                <Nav.Link className="mx-1 text-primary" as={Link} to='/register'>
                    Register
                </Nav.Link>
            </p>
          </Form>
          <Button variant="light" type="submit" className='bg-light d-block w-100 mb-2 fw-bold'>
            <FcGoogle className="fw-bold fs-2 me-2" />Continue With Google
            </Button>  
            <Button variant="light" type="submit" className='bg-light d-block w-100 fw-bold'>
            <FaGithub className="fw-bold fs-2 me-2" />Continue With Google
            </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
