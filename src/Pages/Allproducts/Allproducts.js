import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Allproducts = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://secure-forest-91029.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-success text-center">All Courses</p>
                <div className="row g-5">
                    {
                        courses.map(course => <Course
                            key={course._id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </>
    );
};

export default Allproducts;