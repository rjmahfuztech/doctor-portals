import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './BookAppointment.css';

const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:05 AM - 11:30 AM',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:30 PM',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10 SPACES AVAILABLE'
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10 SPACES AVAILABLE'
    },
]

const BookAppointment = ({ date }) => {
    return (
        <section style={{marginTop: '90px'}}>
            <h2 className="text-center brand-text-color">Available Appointments on {date.toDateString()}</h2>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-4 mb-5">
                    {
                        bookingData.map(booking => <BookingCard key={booking.id} date={date} booking={booking}></BookingCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;