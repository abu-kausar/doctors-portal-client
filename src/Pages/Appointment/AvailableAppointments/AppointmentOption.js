import React from 'react';

const AppointmentOption = ({ appointment, setTreatment }) => {
    const { name, price, slots } = appointment;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-primary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length>1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label 
                        disabled = {slots.length === 0}
                        htmlFor="booking-modal" 
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(appointment)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;