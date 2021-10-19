import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import useLoadService from '../../hooks/useLoadService';
import Service from '../Service/Service';
import { FaArrowRight } from 'react-icons/fa'


const Services = () => {

    const services = useLoadService('services');

    return (
        <Container className='d-flex flex-column align-items-center my-5'>
            <h1 className='text-center my-4'>Services</h1>
            <p className='lead text-center'>We deliver service which is best for you and the best we can offer. We always try to provide the top grade quality of health service.</p>
            <div className="d-flex justify-content-center my-5">
                <Row xs={1} md={2} lg={4} className='g-4 p-5 p-md-5'>
                    {
                        services.slice(0, 8).map(service => {

                            return <Service data={service} key={service.id}></Service>
                        })
                    }
                </Row>
            </div>
            <Button variant='outline-dark rounded-pill'>View All   <FaArrowRight /></Button>
        </Container >
    );
};

export default Services;