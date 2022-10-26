// import ReNav.Linkct from 'reNav.Linkct';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from 'react-router-dom';
import { FaFacebook,FaTwitter,FaGoogle,FaGithub} from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
     


<div className="bg-dark text-center text-white">
   
   <Container>
   
     <section className="mt-5">
    
       <Row className="text-center d-flex justify-content-center pt-5">
         
         <div className="col-md-2">
           <h6 className="text-uppercase font-weight-bold">
             <Nav.Link as={Link} to='/courses' className="text-white">Courses</Nav.Link>
           </h6>
         </div>
        
         <div className="col-md-2">
           <h6 className="text-uppercase font-weight-bold">
             <Nav.Link as={Link} to='/Faq' className="text-white">Faq</Nav.Link>
           </h6>
         </div>
         
         <div className="col-md-2">
           <h6 className="text-uppercase font-weight-bold">
             <Nav.Link as={Link} to='/blog' className="text-white">Blog</Nav.Link>
           </h6>
         </div>
        
         <div className="col-md-2">
           <h6 className="text-uppercase font-weight-bold">
             <Nav.Link as={Link} to='/Faq' className="text-white">Help</Nav.Link>
           </h6>
         </div>
       
         <div className="col-md-2">
           <h6 className="text-uppercase font-weight-bold">
             <Nav.Link as={Link} to='/home' className="text-white">Home</Nav.Link>
           </h6>
         </div>
    
       </Row>
     
     </section>
 

     <hr className="my-5" />

    
     {/* <section className="mb-5">
       <Row className="d-flex justify-content-center">
         <Col className="col-lg-8">
           <p>
             Lorem ipsum dolor sit Nav.Linkmet consectetur Nav.Linkdipisicing elit. Sunt
             distinctio eNav.Linkrum repellNav.Linkt quNav.LinkerNav.Linkt voluptNav.Linktibus plNav.LinkceNav.Linkt nNav.Linkm,
             commodi optio pNav.LinkriNav.Linktur est quiNav.Link mNav.LinkgnNav.Linkm eum hNav.Linkrum corrupti
             dictNav.Link, Nav.LinkliquNav.Linkm sequi voluptNav.Linkte quNav.Links.
           </p>
         </Col>
       </Row>
     </section> */}
    

 
     <section className="text-center mb-2 d-flex justify-content-center">
       <Nav.Link  className="text-white me-4 fw-bold fs-2">
         <FaFacebook></FaFacebook>
       </Nav.Link>
       <Nav.Link  className="text-white me-4 fw-bold fs-2">
         <FaTwitter></FaTwitter>
       </Nav.Link>
       <Nav.Link  className="text-white me-4 fw-bold fs-2">
         <FaGoogle></FaGoogle>
       </Nav.Link>
       <Nav.Link  className="text-white me-4 fw-bold fs-2">
         <FaGithub></FaGithub>
       </Nav.Link>
      
     </section>
    
   </Container>


   
   <div className="text-white py-3 d-flex justify-content-center">
     <span className=' text-white'>© 2020 Copyright : </span><span className='text-white ms-1'> Educrat</span>
     
   </div>
  
 </div>

       
  
   

    );
};

export default Footer;