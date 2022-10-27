import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from 'react-bootstrap/Nav';
import {Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
const Register = () => {

  const navigate=useNavigate()
  const location = useLocation()

  const from=location.state?.from?.pathname || '/'

    const {providerLogin,createUser,updateUserProfile,githubslogin,logOut}=useContext(AuthContext)
    const googleProvider=new GoogleAuthProvider()
    const githubProviders=new GithubAuthProvider()
    
    const[error,setError]=useState('')

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
    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);  
            setError('')        
            form.reset();
            handleUpdateUserProfile(name,photoURL)
            // after registration it will automatic logout start
            logOut()
            .then({})
            .catch(e => {
              console.error(e);
              setError(e.message)
             
          });
           // after registration it will automatic logout end
           
        })
        .catch(e => {
            console.error(e);
            setError(e.message)
           
        });
        navigate('/login')
    }

    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
          displayName: name,
          photoURL: photoURL
      }
      console.log("This is profile",profile);

      updateUserProfile(profile)
          .then(() => { })
          .catch(error => {
            console.error(error)
            setError(error.message);
          });
  }
  return (
    <Container>
        <h2 className="fw-bold text-center py-3">User Registration Form</h2>
      <Row className="justify-content-center">
        <Col lg="6" className="order">
          <Form onSubmit={handleSubmit}  >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="Enter Your full name" required/>            
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo url</Form.Label>
              <Form.Control name="photoURL" type="text" placeholder="Enter Your photo url" />            
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" required />            
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox" required>
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Text className="text-danger mb-2 d-block">
               {error}
            </Form.Text>
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

export default Register;
