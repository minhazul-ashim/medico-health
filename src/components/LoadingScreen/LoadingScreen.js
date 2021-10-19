import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingScreen = () => {
    return (
        <div style={{ height: '80vh', width: '100%' }} className='d-flex justify-content-center align-items-center'>
            <div className="">
                <Spinner animation="border" />
            </div>
        </div>
    );
};

export default LoadingScreen;