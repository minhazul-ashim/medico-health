import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import useLoadService from '../../hooks/useLoadService';
import BlogNav from '../BlogNav/BlogNav';
import BlogPost from '../BlogPost/BlogPost';
import './BlogsContainer.css'

const BlogsContainer = () => {

    const blogs = useLoadService('blogs');

    return (
        <Container className='my-5'>
            <h1 className='text-center my-4'>Blogs</h1>
            <p className="lead text-center mb-5">
                Keep yourself and your loved ones updated with our medical and health related blogs. Learn more, gain health more
            </p>
            <Row xs={1} md={2} className="blog-box">
                <Col className='blogs-nav col-4'>
                    <BlogNav data={blogs}></BlogNav>
                </Col>

                <Col className='blog-post col-8'>
                    <Switch>
                        <Route path='/blogpost/:title'>
                            <BlogPost data={blogs}></BlogPost>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogsContainer;