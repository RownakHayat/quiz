import React from 'react';
import { Container, Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

import { NavLink } from 'react-router-dom';


import './Header.css'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
            <Container>
                <NavbarBrand href='#home'> Quiz</NavbarBrand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />

                <NavbarCollapse id='responsive-navbar-nav'>
                    <Nav className='ms-auto'>
                        <NavLink className=  {({isActive}) => isActive ? 'active' : undefined} className= 'text-decoration-none me-3 text-white' to='/topics' >Topics</NavLink>
                        <NavLink className='text-decoration-none me-3 text-white'  to='/statics'>Statics</NavLink>
                        <NavLink className='text-decoration-none text-white' to='/blog'>Blog</NavLink>
                    </Nav>
                </NavbarCollapse>
                
                
            </Container>
        </Navbar>
      
    );
};

export default Header;