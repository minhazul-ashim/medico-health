import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><img width='50px' src={logo} alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/home' className='navlink'>Home</NavLink>
                        <NavLink to='/blog' className='navlink'>Blog</NavLink>
                        <NavLink to='/services' className='navlink'>Services</NavLink>
                        <NavLink to='/contact' className='navlink'>Contact</NavLink>
                        <NavLink to='/login' className='navlink'>Log in</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;