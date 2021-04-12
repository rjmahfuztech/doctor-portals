import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css';

const BookingCard = ({ booking, date }) => {
    const { subject, visitingHour, totalSpace } = booking;
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
        function openModal() {
            setModalIsOpen(true);
        }
      
        function closeModal(){
            setModalIsOpen(false);
        }
    return (
        <div className="col-md-4 text-center ">
            <div className="card-style mt-5 m-2 mb-3">
                <div className="card-body">
                    <h4 className="card-title brand-text-color">{subject}</h4>
                    <h5 className="card-title heading-color mt-3">{visitingHour}</h5>
                    <small className="text-secondary">{totalSpace}</small>
                    <div>
                        <button onClick={openModal} className="button-gradient mt-3">BOOK APPOINTMENT</button>
                    </div>
                    <AppointmentForm date={date} modalIsOpen={modalIsOpen} appointmentOn={subject} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;