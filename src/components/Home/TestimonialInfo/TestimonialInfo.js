import React from 'react';
import './TestimonialInfo.css';

const TestimonialInfo = ({ testimonial }) => {
    const { name, img, position } = testimonial;
    return (
        <div className="col-md-4 mb-5">
            <div className="testimonial-info">
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure excepturi maxime iste! Earum autem deserunt asperiores rerum animi voluptatibus dolor blanditiis nemo molestias iure, dolorum fugit, hic exercitationem facere natus.</p>
                <div className="d-flex align-items-center mt-5">
                    <div>
                        <img className="w-75" src={img} alt="" />
                    </div>
                    <div>
                        <h5 className="h5-color">{name}</h5>
                        <small className="text-secondary">{position}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialInfo;