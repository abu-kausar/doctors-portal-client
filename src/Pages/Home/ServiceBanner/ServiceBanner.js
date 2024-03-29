import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../..//assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ServiceBanner = () => {
    return (
        <div className="hero mt-8 lg:px-[150px]">
            <div className="hero-content flex-col gap-12 lg:flex-row lg:justify-center">
                <img src={treatment} className="rounded-lg lg:h-[476px] md:h-[376px] shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Termse</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <Link to="/appointment"><PrimaryButton>Get Started</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;