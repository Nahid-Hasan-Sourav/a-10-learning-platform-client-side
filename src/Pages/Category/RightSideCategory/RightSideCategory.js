import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const RightSideCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log("Courses ", categories);
  return (
    <>
      {categories.map((category, index) => {
        return (
          <Col key={index} lg="6" className="g-4 ">
            <Card className="shadow-md">
              <Card.Img style={{height:'180px'}} variant="top" src={category.url} />
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>
                  {category.description.slice(0,110)}...
                </Card.Text>
                <Button variant="danger" className="d-block w-100" as={Link} to={`/course-details/${category.id}`}>Course Details</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default RightSideCategory;
