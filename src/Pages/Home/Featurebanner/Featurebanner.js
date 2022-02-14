import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Featurebanner = () => {
    return (
        <>
            <div className="container-fluid bg-success mb-5 p-5">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-12">
                        <Zoom>
                            <div className="card p-5 rounded-3 shadow-lg">
                                <div className="card-body">
                                    <p className="card-title fs-3"><span className='text-success fw-bold'>20+</span> Online Courses</p>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <Zoom>
                            <div className="card p-5 rounded-3 shadow-lg">
                                <div className="card-body">
                                    <p className="card-title fs-3"><span className='text-success fw-bold'>5+</span> Awards Winning</p>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <Zoom>
                            <div className="card p-5 rounded-3 shadow-lg">
                                <div className="card-body">
                                    <p className="card-title fs-3"><span className='text-success fw-bold'>100+</span> Certifications</p>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featurebanner;