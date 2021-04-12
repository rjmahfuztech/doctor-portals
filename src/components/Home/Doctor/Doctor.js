import React from 'react';
import doctorImg from '../../../images/doctor.png';
import DoctorInfo from '../DoctorInfo/DoctorInfo';

const doctor = [
    {
        id: 1,
        name: 'Dr. Caudi',
        phone: '+51432799621',
        doctorImg: doctorImg
    },
    {
        id: 2,
        name: 'Dr. Caudi',
        phone: '+51432799621',
        doctorImg: doctorImg
    },
    {
        id: 3,
        name: 'Dr. Caudi',
        phone: '+51432799621',
        doctorImg: doctorImg
    },
]
const Doctor = () => {
    return (
        <section className="mt-5 mb-5 text-center">
            <h5 className="h5-color">Our Doctor</h5>
            <div className="d-flex justify-content-center mt-4">
                <div className="row w-75">
                    {
                        doctor.map(doctor => <DoctorInfo key={doctor.id} doctor={doctor} ></DoctorInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctor;