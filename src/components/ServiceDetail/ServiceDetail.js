import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useFindDetail from '../../utilities/useFindDetail'

const ServiceDetail = () => {

    const { id } = useParams();

    const service = useFindDetail(id);

    return (
        <Container>
            <Row>
                <Col xs={10} md={8} lg={6} className='mx-auto'>
                    <Card>
                        <Card.Img variant="top" src={service?.img} className='img-fluid' />
                        <Card.Body>
                            <Card.Title>{service?.name}</Card.Title>
                            <Card.Text>
                                {service?.desc}
                            </Card.Text>
                            <Button variant="danger">Appointment</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetail;