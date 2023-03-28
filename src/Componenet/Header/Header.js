import React from 'react';
import { Container, Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

import { NavLink } from 'react-router-dom';


import './Header.css'
const Header = () => {
    return (
        <Navbar>
            <Container>
                <NavbarBrand href='#home'> Quiz</NavbarBrand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />

                <NavbarCollapse>
                    <Nav className='ms-auto'>
                        <NavLink className=  {({isActive}) => isActive ? 'active' : undefined} className= 'text-decoration-none me-3' to='/topics' >Topics</NavLink>
                        <NavLink className='text-decoration-none me-3 '  to='/statics'>Statics</NavLink>
                        <NavLink className='text-decoration-none ' to='/blog'>Blog</NavLink>
                    </Nav>
                </NavbarCollapse>
                
                
            </Container>
        </Navbar>
      
    );
};

export default Header;