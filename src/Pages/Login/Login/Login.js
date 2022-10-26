import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link } from 'react-router-dom';

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
            
            <Button variant="primary" type="submit">
             Login
            </Button>
            <p className="d-flex flex-row my-2">
                Don't Have An Account? Please
                 <Link className="mx-1" to='/register'>
                    Register
                </Link>
            </p>
          </Form>

        </Col>
      </Row>
    </Container>
  );
};

export default Login;
