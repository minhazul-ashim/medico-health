import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom'

const NoPage = () => {
    return (
        <div className='not-found d-flex justify-content-center align-items-center'>
            <div className="text-center">
                <h1 className='display-1'>Error 404</h1>
                <h2 className='display-5'>Page not found</h2>
                <p>Return to <Link to='/home'>home</Link></p>
            </div>
        </div>
    );
};

export default NoPage;