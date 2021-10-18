import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { MdReadMore } from 'react-icons/md'

const Service = (props) => {

    const { name, desc, img } = props.data

    return (
        <Col>
            <Card className='h-100 shadow'>
                <Card.Img variant="top" src={img} className='h-100 img-thumbnail' style={{ objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc.slice(0, 100)}......
                    </Card.Text>
                    <Button variant='outline-primary btn-sm '><MdReadMore /> Learn More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;