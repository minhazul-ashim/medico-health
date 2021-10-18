import React from 'react';
import { Button, Col } from 'react-bootstrap';
import './DoctorCard.css'
import { BsFillPenFill } from 'react-icons/bs'
import { CgDetailsLess } from 'react-icons/cg'

const DoctorCard = (props) => {

    const { name, img, spec } = props.detail

    return (
        <Col>
            <div className='doc-card d-flex flex-column align-items-center py-3'>
                <div className="doc-img p-5">
                    <img className='img-fluid rounded-circle' src={img} alt="" />
                </div>
                <div className="doc-info">
                    <h5>{name}</h5>
                    <h6>{spec}</h6>
                </div>
                <div className="action-btns d-flex w-100 justify-content-around mt-3 px-2">
                    <Button variant='info' className='btn-sm rounded-pill me-2'>Detail</Button>
                    <Button variant='danger' className='btn-sm rounded-pill'>Appointment</Button>
                </div>
            </div>
        </Col>
    );
};

export default DoctorCard;