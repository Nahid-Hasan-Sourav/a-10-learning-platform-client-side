import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Lottie from "lottie-react";
import Exam from "../../Assets/student.json";
import {Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import RightSideCategoryCard from '../Shared/RightSideCategoryCard/RightSideCategoryCard';
const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      fetch("https://assignment-10-learning-platform-server-side.vercel.app/course-categories")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }, []);
  
    return (
        <Container>
        <Row className='p-4'>
        <Col lg="6">
          <div className="header-text h-100 d-flex flex-column align-items-center justify-content-center">
            <h3 className="fw-bold text-primary text-center">
              Organize Live Quiz For Your Skill Test
            </h3>
            <p className="text-center">
              myQuiz is a web-based Audience Engagement Cloud Platform for
              hosting interactive trivia quizzes at in-person, virtual, and
              hybrid events. No app install is required
            </p>
            <Button as={Link} to='/courses' varient='primary' className="fw-bold">COURSES</Button>
          </div>
        </Col>
        <Col lg="6">
          <div>
            <Lottie
              animationData={Exam}
              loop={true}
              style={{height:"350px"}}
            ></Lottie>
          </div>
        </Col>
      </Row>
     
     <Row>
        <h2 className='fw-bold text-decoration-underline py-3'>AVALABLE COURSES</h2>
     {categories.map((category, index) => {
        return (
         <RightSideCategoryCard key={index} category={category}>

         </RightSideCategoryCard>
        );
      })}
    </Row>
    </Container>
    );
};

export default Home;