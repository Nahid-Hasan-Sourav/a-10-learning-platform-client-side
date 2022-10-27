import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { useState } from "react";
import { GoogleAuthProvider ,GithubAuthProvider} from "firebase/auth";

const Login = () => {
  const[error,setError]=useState('')
    const {signIn,providerLogin,githubslogin} = useContext(AuthContext);
    const googleProvider=new GoogleAuthProvider()
    const githubProviders=new GithubAuthProvider()
    const navigate=useNavigate()
    const location=useLocation()

    const from=location.state?.from?.pathname || '/'

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
            navigate(from,{replace:true})
            setError('')
            
            
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
            
        })

    }
    const handleGoogleSignIn=()=>{
      providerLogin(googleProvider)
      .then((result) => {
          
          const user = result.user;
          console.log(user)
          navigate(from,{replace:true});
          
        })
      .catch(error => {
        console.error(error)
      
      })
  }

  const handleGithubSignIn=()=>{
    githubslogin(githubProviders)
    .then((result) => {
          
      const user = result.user;
      console.log(user)
      navigate(from,{replace:true});
      
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
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Text className="text-danger mb-2 d-block">
               {error}
            </Form.Text>
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
          <Button variant="light" type="submit" className='bg-light d-block w-100 mb-2 fw-bold' 
          onClick={handleGoogleSignIn}
          >
            <FcGoogle className="fw-bold fs-2 me-2" />Continue With Google
        </Button>    
        <Button variant="light" type="submit" className='bg-light d-block w-100 fw-bold'
        onClick={handleGithubSignIn}
        >
            <FaGithub className="fw-bold fs-2 me-2" />Continue With Google
        </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
