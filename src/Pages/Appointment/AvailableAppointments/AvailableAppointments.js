import React, { useState } from 'react';
import {format} from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOptions, setAppoitmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, "PP");

    const {data: appointmentOptions = [], isLoading, refetch} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(() =>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res=>res.json())
    //     .then(data => setAppoitmentOptions(data))
    // })

    return (
        <section className='my-6'>
            <h1 className='text-center text-primary font-bold text-[20px]'>Available Appointments on {format(selectedDate, "PP")}</h1>
            <div className='my-6 grid gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    appointmentOptions.map(appointment => <AppointmentOption
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {   
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch = {refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;