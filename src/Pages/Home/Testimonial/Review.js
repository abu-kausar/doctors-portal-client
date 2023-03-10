import React from 'react';

const Review = ({ review }) => {
    const { name, image, location, review: userReview } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{userReview}</p>
                <div className="flex items-center">
                    <div className="avatar p-2">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt=""/>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg font-bold">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;