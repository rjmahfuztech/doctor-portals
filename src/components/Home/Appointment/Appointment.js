import React from 'react';
import './Appointment.css';
import doctor from '../../../images/doctor.png';

const Appointment = () => {
    return (
        <section className="d-flex justify-content-center text-white appointment-container">
            <div className="row appointment-style pt-5">
                <div className="col-md-5">
                    <img src={doctor} alt="Doctor" />
                </div>
                <div className="col-md-7 after">
                    <h5 className="h5-color">APPOINTMENT</h5>
                    <h2 className="mt-4">Make an appointment <br /> Today</h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, asperiores dignissimos dicta dolorum recusandae sint.</p>
                    <button className="mt-5 button-gradient">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default Appointment;