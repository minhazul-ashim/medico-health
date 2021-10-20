import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Navigation.css'
import { FaUser } from 'react-icons/fa'

const Navigation = () => {

    const { user, logout } = useAuth();

    console.log(user)

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><img width='50px' src={logo} alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex justify-content-end align-items-center w-100">
                        <NavLink to='/home' className='navlink'>Home</NavLink>
                        <NavLink to='/contact' className='navlink'>Contact</NavLink>
                        {
                            !user ?
                                <>
                                    <NavLink to='/login' className='navlink'>Login</NavLink>
                                    <NavLink to='/register' className='navlink'><Button>Sign Up</Button></NavLink>
                                </> :
                                <>  <p className='navlink text-danger'>{user?.displayName}</p>
                                    <div>
                                        {
                                            !user?.photoURL ?
                                                <FaUser className='me-md-5' /> :
                                                <img style={{ width: '50px' }} src={user?.photoURL} alt='' className='rounded-circle me-md-2' />
                                        }
                                    </div>
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