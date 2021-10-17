import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Service = (props) => {

    const { name, desc, img } = props.data

    return (
        <Col>
            <Card className='h-100 shadow'>
                <Card.Img variant="top" src={img} className='h-100' style={{ objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc.slice(0, 100)}......
                    </Card.Text>
                    <Button>Learn More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;