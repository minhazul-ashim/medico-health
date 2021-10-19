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
                    <Nav className="ms-auto d-flex justify-content-end align-items-center w-75">
                        <NavLink to='/home' className='navlink'>Home</NavLink>
                        <NavLink to='/blog' className='navlink'>Contact</NavLink>
                        <NavLink to='/login' className='navlink'>Login</NavLink>
                        <NavLink to='/register' className='navlink'><Button>Sign Up</Button></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;