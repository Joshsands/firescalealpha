import React from 'react';
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import fslogo from '../assets/fslogo.png'

function Navigation() {
  return (
    <Container>
    <Navbar bg="light" expand="lg" sticky='top' className='mx-4 mb-2'>
        <Navbar.Brand as={Link} to="/"><img style={{ maxHeight: '150px' }} src={fslogo} /></Navbar.Brand>


        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="mx-auto"
            style={{ maxHeight: '300px', textAlign: 'center' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/"><Badge bg='danger'><h3>Home</h3></Badge></Nav.Link>
            <Nav.Link as={Link} to="/about"><Badge bg='danger'><h3>About</h3></Badge></Nav.Link>
            <Nav.Link as={Link} to="/portfolio"><Badge bg='danger'><h3>Portfolio</h3></Badge></Nav.Link>
            {/* <Nav.Link as={Link} to="/datasheets"><Badge bg='danger'><h3>Datasheets</h3></Badge></Nav.Link> */}
            {/* <Nav.Link as={Link} to="/publications"><Badge bg='danger'><h3>Publications</h3></Badge></Nav.Link> */}

            {/* <NavDropdown title="Quote" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#design">
                Design
              </NavDropdown.Item>
              <NavDropdown.Item href="#estimating">
                Estimating
              </NavDropdown.Item>
              <NavDropdown.Item href="#pm">
                Project Management
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}

            {/* <Nav.Link href="#" disabled>
              Profile
            </Nav.Link>

            <Nav.Link href="#login">
              Login
            </Nav.Link> */}

          </Nav>

          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary">Search</Button>
          </Form> */}


        </Navbar.Collapse>
    </Navbar>
    </Container>
  );
}

export default Navigation;