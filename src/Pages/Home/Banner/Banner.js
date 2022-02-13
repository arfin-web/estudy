import React from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css';
import 'animate.css';
import bannerImage from '../../images/banner.svg';

const Banner = () => {
    const history = useHistory()
    const courses = () => {
        history.push('/courses')
    }
    return (
        <>
            <div className="container-fluid">
                <div className="container banner">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <img src={bannerImage} className="img-fluid mt-5 animate__animated animate__bounceInLeft" alt="bannerImage" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="p-5 bg-white mt-5 animate__animated animate__backInRight">
                                <p className="fs-1">Pick the <span className='text-success'>World's</span> Best Courses</p>
                                <p className="text-muted">Enrich Your Skill and Gain Knowledge</p>
                                <button onClick={courses} type="button" className="btn btn-success btn-lg">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;