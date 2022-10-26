import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import Lottie from "lottie-react";
import Exam from "../../Assets/student.json";
import {Link } from 'react-router-dom';
const Home = () => {
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
            <button as={Link} className="btn btn-primary fw-bold">COURSES</button>
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
        </Container>
    );
};

export default Home;