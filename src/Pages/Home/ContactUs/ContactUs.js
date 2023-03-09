import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appointment from '../../..//assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }}
            className='mt-8 flex justify-center'>

            <div className="w-[450px] mt-8 mb-5">
                <div className='text-center'>
                    <h3 className='text-[20px] font-bold text-primary'>Contact Us</h3>
                    <h1 className='text-[36px] text-white'>Stay connected with us</h1>
                </div>

                <div className="mt-8 form-control">
                <input type="email" placeholder="Email Address" className="input input-bordered w-full mb-2"/>
                    <input type="text" placeholder="Subject" className="input input-bordered w-full mb-2"/>
                    <textarea className="textarea textarea-bordered h-24 mb-5" placeholder="Your Message"></textarea>
                </div>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactUs;