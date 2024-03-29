import React from 'react';
import { Link } from 'react-router-dom';
import Chair from '../../..//assets/images/chair.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero mt-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to="/appointment"><PrimaryButton>Get Started</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;