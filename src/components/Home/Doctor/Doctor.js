import React, { useEffect, useState } from 'react';
// import doctorImg from '../../../images/doctor.png';
import DoctorInfo from '../DoctorInfo/DoctorInfo';

// const doctor = [
//     {
//         id: 1,
//         name: 'Dr. Caudi',
//         phone: '+51432799621',
//         doctorImg: doctorImg
//     },
//     {
//         id: 2,
//         name: 'Dr. Caudi',
//         phone: '+51432799621',
//         doctorImg: doctorImg
//     },
//     {
//         id: 3,
//         name: 'Dr. Caudi',
//         phone: '+51432799621',
//         doctorImg: doctorImg
//     },
// ]

const Doctor = () => {
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctor(data));
    })
    return (
        <section id="doctor" className="mt-5 mb-5 text-center">
            <h5 className="h5-color">Our Doctor</h5>
            <div className="d-flex justify-content-center mt-4">
                <div className="row w-75">
                    {
                        doctor.map(doctor => <DoctorInfo key={doctor._id} doctor={doctor} ></DoctorInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctor;