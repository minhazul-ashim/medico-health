import React from 'react';
import { Container, Button } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <Container>

            <div className='d-flex justify-content-center p-5'>
                <form className="">
                    <input type="text" placeholder='Enter your name' className='form-control my-2' />
                    <input type="email" placeholder='Enter your email' className='form-control my-2' />
                    <legend><label> Enter your message</label>
                    <textarea cols="30" rows="10" className='form-control'></textarea></legend>
                    <Button variant='info'>Send Message</Button>
                </form>
            </div>

        </Container>
    );
};

export default ContactForm;