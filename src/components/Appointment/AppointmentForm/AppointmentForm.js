import React from 'react';
import './AppointmentForm.css';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();

        fetch('https://vast-gorge-08839.herokuapp.com/addAppointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment created successfully');
            }
        })

    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div className="text-center mb-3">
                    <h2 className="brand-text-color">{appointmentOn}</h2>
                    <small className="text-secondary">ON {date.toDateString()}</small>
                </div>
                <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="name" className="form-control" placeholder="Enter your name" ref={register({ required: true })} />
                    {errors.name && <span className="text-warning">This field is required</span>}
                    <br />
                    <input type="number" name="phone" className="form-control" placeholder="Enter phone number" ref={register({ required: true })} />
                    {errors.phone && <span className="text-warning">This field is required</span>}
                    <br />
                    <input type="email" name="email" className="form-control" placeholder="Enter your email" ref={register({ required: true })} />
                    {errors.email && <span className="text-warning">This field is required</span>}
                    <br />
                    <div className="row justify-content-between">
                        <div className="col col-md-4">
                            <select name="gender" className="form-select form-control" ref={register({ required: true })}>
                                <option selected value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.gender && <span className="text-warning">This field is required</span>}
                        </div>
                        <div className="col col-md-4">
                            <input type="number" name="age" className="form-control" placeholder="Age" ref={register({ required: true })} />
                            {errors.age && <span className="text-warning">This field is required</span>}
                        </div>
                        <div className="col col-md-4">
                            <input type="number" name="weight" className="form-control" placeholder="Weight" ref={register({ required: true })} />
                            {errors.weight && <span className="text-warning">This field is required</span>}
                        </div>
                    </div>
                    <br />
                    <div className="text-end">
                        <input className="button-gradient" type="submit" />
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;