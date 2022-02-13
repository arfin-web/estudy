import React from 'react';
import { NavLink } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const Course = ({ course }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <Zoom>
                    <div className="card border-0 rounded-3 shadow-sm">
                        <img src={course.image} className="card-img-top" alt="toy" />
                        <div className="card-body">
                            <p className="card-title fs-4 text-success">{course.name}</p>
                            <p className="card-text text-muted">{course.description}</p>
                            <p className="card-title fs-4">Price: $ {course.price}</p>
                            <NavLink to={`/courses/${course._id}`}>
                                <button type="button" className="btn btn-outline-success mt-4">Buy Now</button>
                            </NavLink>
                        </div>
                    </div>
                </Zoom>
            </div>
        </>
    );
};

export default Course;