import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import RightSideCategoryCard from "../../Shared/RightSideCategoryCard/RightSideCategoryCard";

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
         <RightSideCategoryCard key={index} category={category}>

         </RightSideCategoryCard>
        );
      })}
    </>
  );
};

export default RightSideCategory;
