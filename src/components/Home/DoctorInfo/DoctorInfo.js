import React from 'react';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DoctorInfo = ({doctor}) => {
    const {name, phone, doctorImg} = doctor;
    return (
        <div className="col-md-4">
            <img src={doctorImg} className="img-fluid" alt="doctor"/>
            <h6 style={{marginBottom: '-4px'}}><b>{name}</b></h6>
            <small style={{fontSize: '10px'}} className="mt-5 text-secondary"><FontAwesomeIcon className="h5-color" icon={faPhoneAlt} /> {phone}</small>
        </div>
    );
};

export default DoctorInfo;