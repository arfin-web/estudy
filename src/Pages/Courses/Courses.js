import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://secure-forest-91029.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-success">Top Rated Courses</p>
                <div className="row g-5">
                    {
                        courses.slice(0, 6).map(course => <Course
                            key={course._id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </>
    );
};

export default Courses;