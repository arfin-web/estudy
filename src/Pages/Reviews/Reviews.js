import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://secure-forest-91029.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <div className="container mb-5">
                <p className="text-success text-center fs-3">Testimonials</p>
                <p className="text-muted text-center">What our students say about us</p>
                <div className="row row-cols-1 row-cols-md-3 g-5 mt-3">
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </>
    );
};

export default Reviews;