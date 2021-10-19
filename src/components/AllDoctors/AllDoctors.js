import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import useLoadService from '../../hooks/useLoadService';
import DoctorCard from '../DoctorCard/DoctorCard';

const Doctors = () => {

    const doctors = useLoadService('doctors');


    return (
        <Container className='my-5 d-flex align-items-center flex-column'>

            <div className="my-5">
                <Row xs={1} md={2} lg={4} className='w-100 p-md-0 p-5 me-5 g-4'>
                    {
                        doctors.map(doctor => {
                            return <DoctorCard key={doctor.id} detail={doctor}></DoctorCard>
                        })
                    }
                </Row>
            </div>
            <Button variant='outline-dark rounded-pill'>View All   <FaArrowRight /></Button>
        </Container>
    );
};

export default Doctors;