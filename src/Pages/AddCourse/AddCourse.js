import React, { useRef } from 'react';

const AddCourse = () => {
    const nameRef = useRef()
    const desRef = useRef()
    const priceRef = useRef()
    const imageRef = useRef()


    const handleAddCourse = (e) => {
        const name = nameRef.current.value;
        const description = desRef.current.value;
        const price = priceRef.current.value;
        const image = imageRef.current.value;

        const newCourse = { name, description, price, image };


        fetch('https://secure-forest-91029.herokuapp.com/courses', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCourse)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Course added');
                    e.target.reset()
                }
            })
        e.preventDefault()
    }
    return (
        <>
            <div className="container mb-5">
                <p className="fs-2">Add Course</p>
                <form onSubmit={handleAddCourse} className="row g-3">
                    <div className="col-12">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input ref={nameRef} type="text" className="form-control" id="inputName" placeholder="Enter course name" autoComplete="off" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputDescription" className="form-label">Description</label>
                        <input ref={desRef} type="text" className="form-control" id="inputDescription" placeholder="Enter description" autoComplete="off" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPrice" className="form-label">Price</label>
                        <input ref={priceRef} type="text" className="form-control" id="inputPrice" placeholder="Enter price" autoComplete="off" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputImage" className="form-label">Image URL</label>
                        <input ref={imageRef} type="text" className="form-control" id="inputImage" placeholder="Give image url" autoComplete="off" required />
                    </div>
                    <div className="col-12">
                        <input type="submit" className="btn btn-success" value="Add" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddCourse;