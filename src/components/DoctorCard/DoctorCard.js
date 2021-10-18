import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './DoctorCard.css'

const DoctorCard = (props) => {

    const { name, img, spec } = props.detail

    return (
        <Col>
            <div className='doc-card d-flex flex-column align-items-center py-3'>
                <div className="doc-img py-2 px-5">
                    <img className='img-fluid rounded-circle' src={img} alt="" />
                </div>
                <div className="doc-info text-center">
                    <h6>{name}</h6>
                    <p>{spec}</p>
                </div>
                <div className="action-btns d-flex flex-column align-items-center mt-3 px-2">
                    <Button variant='outline-primary' className='btn-sm rounded mb-3'>Detail</Button>
                    <Button variant='danger' className='btn-sm rounded'>Appointment</Button>
                </div>
            </div>
        </Col>
    );
};

export default DoctorCard;