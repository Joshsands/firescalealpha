import React from 'react';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Image from 'react-bootstrap/Image'
import fslogo from '../assets/fslogo.png'

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" sticky='top' className='align-items-center'>
        <Navbar.Brand href="#"><img style={{ maxHeight: '150px' }} src={fslogo} /></Navbar.Brand>


        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="my-lg-2 m-5 mx-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <h2><Nav.Link href="#home">Home</Nav.Link></h2>
            <h2><Nav.Link href="#publications">Publications</Nav.Link></h2>
            <h2><Nav.Link href="#datasheets">Datasheets</Nav.Link></h2>
            <h2><Nav.Link href="#portfolio">Portfolio</Nav.Link></h2>

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

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary">Search</Button>
          </Form>


        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;