import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { MdReadMore } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Service = (props) => {

    const { id, name, desc, img } = props.data

    return (
        <Col>
            <Card className='h-100 shadow'>
                <Card.Img variant="top" src={img} className='h-100 img-thumbnail' style={{ objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc.slice(0, 100)}......
                    </Card.Text>
                    <Link to={`/service/${id}`}>
                        <Button variant='outline-primary btn-sm '><MdReadMore /> Learn More</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;