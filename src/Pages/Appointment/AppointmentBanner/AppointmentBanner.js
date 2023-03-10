import React from 'react';
import chair from '../../..//assets/images/chair.png';
import bg from '../../..//assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header
            style={{
                background: `url(${bg})`,
                backgroundSize: 'cover',
            }}
        >
            <div className="hero my-8 py-8">
                <div className="hero-content flex-col gap-60 lg:flex-row-reverse">
                    <img src={chair} alt="dentist chair" className="max-w-md lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;