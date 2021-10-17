import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><img width='50px' src={logo} alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex justify-content-around align-items-center">
                        <NavLink to='/home' className='navlink'>Home</NavLink>
                        <NavLink to='/blog' className='navlink'>Blog</NavLink>
                        <NavLink to='/services' className='navlink'>Services</NavLink>
                        <NavLink to='/contact' className='navlink'>Contact</NavLink>
                        <Button>Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;