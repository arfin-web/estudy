import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Review = ({ review }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12">
                <Zoom>
                    <div className="card rounded-3 shadow bg-light border-3 border-success">
                        <div className="card-header fs-4 text-success">
                            {review.name}
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p> {review.review} </p>
                                <footer className="blockquote-footer mt-4">From <cite title="Source Title">{review.email}</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </Zoom>
            </div>
        </>
    );
};

export default Review;