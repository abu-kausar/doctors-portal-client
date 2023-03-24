import React, { useContext } from 'react';
import format from 'date-fns/format';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment , selectedDate, refetch }) => {
    const { name, slots, price } = treatment; // treatment is appointment options
    const date = format(selectedDate, "PP");
    const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.fullName.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            treatmentName: name,
            appointmentDate: date,
            patientName: patientName,
            slot: slot,
            email: email,
            phone: phone,
            price: price,
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                setTreatment(null);
                toast.success('Booking Confirmed!');
                refetch();
            }
            else{
                toast.error(data.message);
            }
        })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{name}</h3>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-6">
                        <input type="text" className='input w-full text-center' value={date} disabled />
                        <select name="slot" className="select select-bordered w-full text-center">
                            {
                                slots.map((slot, i)=> <option 
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='fullName' type="text" placeholder='Full Name' className='input w-full input-bordered text-center' defaultValue={user?.displayName}/>
                        <input name='phone' type="text" placeholder='Phone Number' className='input w-full input-bordered text-center' />
                        <input name='email' type="email" placeholder='Email' className='input w-full input-bordered text-center' defaultValue={user.email} disabled/>
                        <input type="submit" value="Submit" className='text-white btn btn-accent w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;