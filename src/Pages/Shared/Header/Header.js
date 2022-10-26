import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserGraduate } from 'react-icons/fa';
import {Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  as={Link} to='/home'>
            <span className='fw-bold fs-2 pb-2 d-inline-block text-danger me-2'><FaUserGraduate /></span>
            <span className='fw-bold fs-2'>Educrat</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/courses'>Courses</Nav.Link>
            <Nav.Link as={Link} to='/faq'>Faq</Nav.Link>
            <Nav.Link  as={Link} to='/blog'>Blog</Nav.Link>
           
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <Nav.Link href="#deets">Toggle</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;