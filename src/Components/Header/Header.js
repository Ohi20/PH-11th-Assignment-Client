import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
           <h2 className='text-info'>Speedo</h2>
       <div className='container-fluid d-flex justify-content-between'>
       <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="me-auto navbar">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      
    </Nav>
    </Container>
  </Navbar>
        </div>
        <div>
            <h2 className='text-info'>Hi</h2>
        </div>
       </div>
  
        </div>

    );
};

export default Header;