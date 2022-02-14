import React from 'react';
import './About.css';

const About = () => {
    const aboutimg = 'https://elearningindustry.com/wp-content/uploads/2020/12/the-importance-of-elearning-advantages-and-benefits.png';
    return (
        <>
            <div className="container-fluid about-container mb-5">
                <p className="about-title text-dark">About Us</p>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <img src={aboutimg} className="img-fluid shadow-lg" alt="about" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-4">
                        <p className="fs-1 text-success mb-5">About Our Institution</p>
                        <p className="text-muted">Welcome to the best and most popular e-learning platform. Here you can find world class courses and gain your knowledge.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;