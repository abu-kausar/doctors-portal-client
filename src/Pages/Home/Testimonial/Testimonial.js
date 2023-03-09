import React from 'react';
import quote from '../../..//assets/icons/quote.svg';
import image01 from '../../..//assets/images/people1.png'
import image02 from '../../..//assets/images/people2.png'
import image03 from '../../..//assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviewData = [
        {
            _id: 1,
            name: 'Winston Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            image: image01
        },
        {
            _id: 2,
            name: 'Winston Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'New York',
            image: image02
        },
        {
            _id: 1,
            name: 'Winston Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Florida',
            image: image03
        },
    ]
    return (
        <section className='mt-8'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-[20px] font-bold text-primary'>Testimonial</h3>
                    <h1 className='text-[36px]'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviewData.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;