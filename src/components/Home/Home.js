import React from 'react';
import Banner from '../Banner/Banner';
import BlogsContainer from '../BlogsContainer/BlogsContainer';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <BlogsContainer></BlogsContainer>
        </div>
    );
};

export default Home;