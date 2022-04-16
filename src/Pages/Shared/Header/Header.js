import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/logo.png'
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <header>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={logo}
                  width="80"
                  height="80"
                  className="d-inline-block "
                />{' '}
              Single Fitness Trainer
              </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className=" ">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='about' >About</Nav.Link>
              <Nav.Link as={Link} to='blog' >Blog</Nav.Link>
              <Nav.Link as={Link} to='login' >Login</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
                </header>
    );
};

export default Header;