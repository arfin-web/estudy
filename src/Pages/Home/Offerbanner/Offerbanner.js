import React from 'react';
import Zoom from 'react-reveal/Zoom';
import banner2 from '../../images/banner2.svg';
import 'animate.css';

const Offerbanner = () => {
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="w-75 m-auto mt-5">
                            <p className="text-success fs-2 fw-bolder mb-4 animate__animated animate__backInLeft">Online Learning Is a Superior Form of Education!</p>
                            <p>The most effective, successful professionals are constantly learning, they take the time to apply what they have learned, and they continually work to improve themselves.</p>
                            <div className="row g-3">
                                <div className="col-6">
                                    <Zoom>
                                        <div className="card border-0 rounded-3 shadow animate__animated animate__bounce">
                                            <div className="card-body">
                                                <p className="card-text text-center fs-5 fw-bold text-success">World Class Tutors</p>
                                            </div>
                                        </div>
                                    </Zoom>
                                </div>
                                <div className="col-6">
                                    <Zoom>
                                        <div className="card border-0 rounded-3 shadow animate__animated animate__bounce">
                                            <div className="card-body">
                                                <p className="card-text text-center fs-5 fw-bold text-success">Richfull Contents</p>
                                            </div>
                                        </div>
                                    </Zoom>
                                </div>
                                <div className="col-6">
                                    <Zoom>
                                        <div className="card border-0 rounded-3 shadow animate__animated animate__bounce">
                                            <div className="card-body">
                                                <p className="card-text text-center fs-5 fw-bold text-success">24/7 Hour Support</p>
                                            </div>
                                        </div>
                                    </Zoom>
                                </div>
                                <div className="col-6">
                                    <Zoom>
                                        <div className="card border-0 rounded-3 shadow animate__animated animate__bounce">
                                            <div className="card-body">
                                                <p className="card-text text-center fs-5 fw-bold text-success">100% Satisfaction</p>
                                            </div>
                                        </div>
                                    </Zoom>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="m-auto mt-5">
                            <img src={banner2} className="img-fluid mt-5 animate__animated animate__backInRight" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Offerbanner;