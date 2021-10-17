import React from 'react';
import './Banner.css'
import { Button } from 'react-bootstrap';

const Banner = () => {

    return (
        <>
            <div className="banner-img">
                <div className="banner-overlay p-5">
                    <div className="banner-text text-center d-flex flex-column justify-content-center align-items-center my-5 py-5">
                        <p>The hospital of the future. We deliver services that you want for your loved ones.</p>
                        <Button variant='outline-info' className='mt-4'>Book Appointment</Button>
                    </div>
                </div>

            </div>
        </>

    );
};

export default Banner;