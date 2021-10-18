import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import useLoadService from '../../hooks/useLoadService';
import DoctorCard from '../DoctorCard/DoctorCard';

const Doctors = ({ name, img, spec }) => {

    const doctors = useLoadService('doctors');


    return (
        <Container className='my-5 d-flex flex-column align-items-center'>
            <h1 className='text-center'>Doctors</h1>
            <p className='text-center'>Meet the backbones of our organization. The doctors who cares and delivers the best effort for you like your own family. They are the best at their own expertise.</p>
            <Row xs={1} md={2} lg={4} className='h-100 p-md-0 p-5 mx-5 g-4'>
                {
                    doctors.slice(0, 4).map(doctor => {
                        return <DoctorCard key={doctor.id} detail={doctor}></DoctorCard>
                    })
                }
            </Row>
            <Button variant='dark rounded-pill'>View All   <FaArrowRight /></Button>
        </Container>
    );
};

export default Doctors;