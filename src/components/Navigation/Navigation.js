import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Navigation.css'

const Navigation = () => {

    const { user, logout } = useAuth();

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><img width='50px' src={logo} alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex justify-content-end align-items-center w-75">
                        <NavLink to='/home' className='navlink'>Home</NavLink>
                        <NavLink to='/blog' className='navlink'>Contact</NavLink>
                        {
                            !user ?
                                <>
                                    <NavLink to='/login' className='navlink'>Login</NavLink>
                                    <NavLink to='/register' className='navlink'><Button>Sign Up</Button></NavLink>
                                </> :
                                <>  <p className='navlink text-danger'>{user?.displayName}</p>
                                    <img style={{ width: '50px' }} src={user?.photoURL} alt='' className='rounded-circle mx-2'/>
                                    <Button onClick={logout}>Log out</Button>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;