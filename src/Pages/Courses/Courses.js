import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSideCategory from '../Category/LeftSideCategory/LeftSideCategory';
import RightSideCategory from '../Category/RightSideCategory/RightSideCategory';

const Courses = () => {
    return (
        <Container className='my-3'>
            <Row className="gy-3">
                    <Col lg="3" className=''>
                      <LeftSideCategory></LeftSideCategory>
                    </Col>
                    <Col lg="9" >
                      <Row  className=' g-3'>
                      <RightSideCategory></RightSideCategory>
                      </Row>
                    </Col>
            </Row>

        </Container>
    );
};

export default Courses;