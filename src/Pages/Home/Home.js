import React from 'react';
import Courses from '../Courses/Courses'
import Reviews from '../Reviews/Reviews';
import Banner from './Banner/Banner';
import Featurebanner from './Featurebanner/Featurebanner';
import Offerbanner from './Offerbanner/Offerbanner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Offerbanner></Offerbanner>
            <Courses></Courses>
            <Featurebanner></Featurebanner>
            <Reviews></Reviews>
        </>
    );
};

export default Home;