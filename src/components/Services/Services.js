import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import useLoadService from '../../hooks/useLoadService';
import Service from '../Service/Service';
import { FaArrowRight } from 'react-icons/fa'

const Services = () => {

    const services = useLoadService('services').slice(0, 4);

    return (
        <Container className='d-flex flex-column align-items-center'>
            <h1 className='text-center my-4'>Services</h1>
            <div className="d-flex justify-content-center my-5">
                <Row xs={1} md={2} lg={4} className='g-4'>
                    {
                        services.map(service => {

                            return <Service data={service} key={service.id}></Service>
                        })
                    }
                </Row>
            </div>
            <Button variant='secondary'>View All   <FaArrowRight /></Button>
        </Container >
    );
};

export default Services;