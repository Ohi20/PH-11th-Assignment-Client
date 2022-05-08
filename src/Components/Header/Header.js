import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
           
       <div className='container-fluid d-flex justify-content-between'>
       <div>
        <Navbar>
    <Container>
    <Navbar.Brand className='Nav-title' href="/">Speedo</Navbar.Brand>
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
        <div className='mt-3'>
        <input className='input' type="search"  placeholder='search here' />
        <button className='btn-info ms-2 rounded text-white'>Search here</button>
        </div>
       </div>
  
        </div>

    );
};

export default Header;