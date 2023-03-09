import React from 'react';
import treatment from '../../..//assets/images/fluoride.png';
import cavity from '../../..//assets/images/cavity.png';
import whitening from '../../..//assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: treatment,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
        }, {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
        },
    ]
    return (
        <div>
            <div className='mt-8 text-center'>
                <h3 className='text-[20px] font-bold text-primary uppercase'>Our Services</h3>
                <h1 className='text-[36px]'>Services We Provide</h1>
            </div>
            <div className='mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <ServiceCard
                        id={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;