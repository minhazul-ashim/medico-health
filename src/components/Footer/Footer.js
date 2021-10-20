import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
import { BsFacebook, BsTwitter, BsLinkedin, BsEnvelope, BsPhone } from 'react-icons/bs'
import { AiOutlineGooglePlus } from 'react-icons/ai'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer mt-5">
            <Container>
                <Row className='pt-5'>
                    <Col xs={12} md={6}>
                        <h5>About Medico</h5>
                        <p>Medico was at the forefront of modern medicine when its founders opened it as a multi-specialty group practice in 1921. In its first century, Medico has introduced many medical firsts, opened facilities around the world and is proud to be ranked among the top hospitals in the country. Now, 100 years later, the vision of the founders remains Cleveland Clinic’s mission: caring for life, researching for health, and educating those who serve.</p>
                    </Col>
                    <Col xs={8} md={4}>
                        <h5>
                            <FaLocationArrow />  Address
                        </h5>
                        <p>Medico Hospital, Johnson St., Rd-2, New Jersey, USA</p>
                        <h5><BsEnvelope />  Email</h5>
                        <p>information@medico.com</p>
                        <h5><BsPhone /> Phone</h5>
                        <p>+11256486</p>
                    </Col>
                    <Col xs={4} md={2}>
                        <h5>Navigate to</h5>
                        <ul className='list-unstyled'>
                            <li><Link to='/home' className='navlink'>Home</Link></li>
                            <li><Link to='/services' className='navlink'>Services</Link></li>
                            <li><Link to='blogpost/:title' className='navlink'>Blogs</Link></li>
                            <li><Link to='/doctors' className='navlink'>Doctors</Link></li>
                            <li><Link to='/contact' className='navlink'>Contact</Link></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='d-flex flex-column align-items-center  align-items-md-start'>
                        <h6>Important Links</h6>
                        <div className="social-links d-flex justify-content-around w-25 my-3">
                            <BsFacebook />
                            <BsTwitter />
                            <BsLinkedin />
                            <AiOutlineGooglePlus />
                        </div>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col xs={4}>
                        <p>&copy; Medico | 2021</p>
                    </Col>
                    <Col xs={8}>
                        <ul className="list-unstyled d-flex justify-content-around">
                            <li>Terms of Condition</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            <li>Copyrights</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;