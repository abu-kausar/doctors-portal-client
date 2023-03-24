import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Checkoutform from './Checkoutform';
import Loading from '../..//Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// const stripePromise = loadStripe('pk_test_51Mp32KF736gWLfNf6hzVFYsuoFwsrQRfVJolkCUhxas2zeKqVuZWfrwroaZn2ZuY8nfPkGK9bFtGpCbej4fidCbU006rWy8ZHt');

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();

    const { treatmentName, price, appointmentDate } = booking;
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    
    return (
        <div className='mt-5'>
            <h1 className='text-center text-3xl font-bold'>Payment for {treatmentName}</h1>
            <h1 className='mt-5 text-3xl'>Please pay ${price} for your appointment on {appointmentDate}</h1>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <Checkoutform 
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;