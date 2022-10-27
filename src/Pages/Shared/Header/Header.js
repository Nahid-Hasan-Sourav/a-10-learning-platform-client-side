import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserGraduate } from 'react-icons/fa';
import {Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Image from 'react-bootstrap/Image'
import { FaUserAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

function Header() {

  const [show, setShow] = useState(false);
  const target = useRef(null);

    const {user,logOut}=useContext(AuthContext);
    const handleLogout=()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.error())
    }
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
          <Nav className='align-items-center'>
           
            <Nav.Link>
            {
                user?.uid ? 
                <>
                 
                 <Button className='mx-2'
                 onClick={handleLogout}
                 >Logout
                 </Button>
                </>
                :
                <>
                     <Button variant='danger'  className='mx-2' as={Link} to='/register'>Register</Button>
                     <Button variant='danger'  className='mx-2' as={Link} to='/login'>Login</Button>
                </>
             }
            </Nav.Link>
                    
            <Nav.Link>
                {
                    <>
                    
                   
                    <div className=''>
                    <Image
                    style={{height:'30px'}}
                    roundedCircle
                    src={user?.photoURL}
                    ref={target} onMouseOver={() => setShow(!show)}
                    className=''
                    >

                    </Image> 
                    </div>

                    <Overlay target={target.current} show={show} placement="bottom">
                          {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                              <span>{user?.displayName}</span>
                            </Tooltip>
                          )}
                    </Overlay>
                    </>
                }
            </Nav.Link>
            <Nav.Link href="#deets">Toggle</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;