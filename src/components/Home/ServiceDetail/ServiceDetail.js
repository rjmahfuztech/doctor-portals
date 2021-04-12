import React from 'react';

const ServiceDetail = ({service}) => {
    const {name, img} = service;
    return (
        <div className="col-md-4 text-center">
            <img style={{width: '50px'}} src={img} alt=""/>
            <h5 className="mt-4 mb-4">{name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A commodi facere sit asperiores maiores officiis?</p>
        </div>
    );
};

export default ServiceDetail;