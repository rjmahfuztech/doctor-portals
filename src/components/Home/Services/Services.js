import React from 'react';
import './services.css';
import fluoride from '../../../images/Fluoride.png';
import cavity from '../../../images/Cavity.png';
import teeth from '../../../images/Teeth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: teeth
    },
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 className="h5-color">OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="row w-75 mt-4">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;