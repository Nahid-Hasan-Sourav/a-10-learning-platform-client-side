import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const LeftSideCategory = () => {
    const [categories, setCategories] = useState([]);

   useEffect( () =>{
        fetch('http://localhost:5000/course-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <>
            
            <div>
                {
                    categories.map(category => <p className='btn btn-danger fw-bold d-block' key={category.id}>
                        <Nav.Link as={Link} to={`/course-details/${category.id}`}>{category.name}</Nav.Link>
                    </p>)
                }
            </div>
        </>
    );
};

export default LeftSideCategory;