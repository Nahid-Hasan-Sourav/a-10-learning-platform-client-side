import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from 'react-bootstrap/Nav';
import {Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
const Register = () => {

    const {providerLogin}=useContext(AuthContext)
    const googleProvider=new GoogleAuthProvider()
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then((result) => {
            
            const user = result.user;
            console.log(user)
            
          })
        .catch(error => console.error(error))
    }
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
            <Button variant="primary" type="submit" className='d-block w-100'>
              Register
            </Button>
            <p className="d-flex flex-row my-2 justify-content-center">
                Already Have an accout? 
                 <Nav.Link className="mx-1 text-primary" as={Link} to='/login'>
                    Login
                </Nav.Link>
           
            </p>   
            <p className="text-center">
                Or
            </p>   
              
            
          </Form>
          <Button variant="light" type="submit" className='bg-light d-block w-100 mb-2 fw-bold' 
          onClick={handleGoogleSignIn}
          >
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

export default Register;
