import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const payment = 'https://edomainhost.com/img/payment/paysslc.png';
    return (
        <>
            <div className="container-fluid bg-dark p-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card bg-dark text-white">
                            <div className="card-header fs-3 text-success">
                                Follow Us
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item fs-5 text-muted p-3 bg-dark"> facebook.com/e-learning</li>
                                <li className="list-group-item fs-5 text-muted p-3 bg-dark"> twitter.com/e-learning</li>
                                <li className="list-group-item fs-5 text-muted p-3 bg-dark"> youtube.com/e-learning</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card bg-dark">
                            <div className="card-header fs-3 text-success">
                                Explore
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-dark">
                                    <NavLink to="/courses" className="text-muted text-decoration-none fs-5"> Courses</NavLink>
                                </li>
                                <li className="list-group-item bg-dark">
                                    <NavLink to="/about" className="text-muted text-decoration-none fs-5"> About</NavLink>
                                </li>
                                <li className="list-group-item bg-dark">
                                    <NavLink to="/contact" className="text-muted text-decoration-none fs-5"> Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="card">
                            <img src={payment} className="img-fluid" alt="payment" />
                        </div>
                    </div>
                </div>
                <p className="text-muted text-center mt-5 fs-5">&#169; Created By Arfin Priom || All Rights Resurved</p>
            </div>
        </>
    );
};

export default Footer;