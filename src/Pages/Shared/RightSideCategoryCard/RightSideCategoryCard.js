import React from 'react';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from 'react-router-dom';

const RightSideCategoryCard = ({category}) => {
    return (
        <>
             <Col lg="6" className="g-4 ">
            <Card className="shadow-md">
              <Card.Img style={{height:'180px'}} variant="top" src={category.url} />
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>
                  {category.description.slice(0,110)}...
                </Card.Text>
                <Button variant="danger" className="d-block w-100 fw-bold" as={Link} to={`/course-details/${category.id}`}>VIEW COURSE</Button>
              </Card.Body>
            </Card>
          </Col>
        </>
    );
};

export default RightSideCategoryCard;