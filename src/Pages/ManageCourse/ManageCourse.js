import React, { useEffect, useState } from 'react';

const ManageCourse = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://secure-forest-91029.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete this course ?')
        if (proceed) {
            const url = `http://secure-forest-91029.herokuapp.com/courses/${id}`;
            console.log(url)
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingCourse = courses.filter(course => course._id !== id)
                        setCourses(remainingCourse);
                    };
                })
        }
    }

  

    return (
        <>
            <div className="container mb-5">
                <p className="fs-2 mb-5 text-success text-center">Manage Courses</p>
                <div className="row g-5">
                    {
                        courses.map(course => <div className="col-lg-4 col-md-6 col-12">
                            <div className="card border-0 rounded-3 shadow-sm">
                                <img src={course.image} className="card-img-top" alt="toy" />
                                <div className="card-body">
                                    <p className="card-title fs-4 text-success">{course.name}</p>
                                    <p className="card-text text-muted">{course.description}</p>
                                    <p className="card-title fs-4">Price: $ {course.price}</p>
                                    <button onClick={() => handleDelete(course._id)} type="button" className="btn btn-outline-success mt-4">Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default ManageCourse;