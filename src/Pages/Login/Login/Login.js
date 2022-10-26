import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Login = () => {
    const { signIn} = useContext(AuthContext);
    const navigate=useNavigate()

    const handleSubmit =event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset()
            navigate('/')
            
        })
        .catch(error => {
            console.error(error)
            
        })

    }
  return (
    <Container>
        <h2 className="fw-bold text-center py-3">User Login</h2>
      <Row className="justify-content-center">
        <Col lg="6" className="order">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email' type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type="password" placeholder="Password" />
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
