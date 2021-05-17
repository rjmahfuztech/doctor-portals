import React from 'react';
import './Testimonial.css';
import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';
import testimonialImg1 from '../../../images/Ellipse 1.png';
import testimonialImg2 from '../../../images/Ellipse 2.png';
import testimonialImg3 from '../../../images/Ellipse 3.png';
import bgImg from '../../../images/quote.png';

const testimonialData = [
    {
        name: 'Winson Herry',
        img: testimonialImg1,
        position: 'California'
    },
    {
        name: 'Winson Herry',
        img: testimonialImg2,
        position: 'California'
    },
    {
        name: 'Winson Herry',
        img: testimonialImg3,
        position: 'California'
    },
]

const Testimonial = () => {
    return (
        <section className="testimonial-container">
            <div className="align row justify-content-center align-items-center">
                <div className="col-md-6 text-center">
                    <h5 className="h5-color">TESTIMONIAL</h5>
                    <h2 className="heading-color">What's Our Patients Says</h2>
                </div>
                <div className="col-md-6 text-center">
                    <img src={bgImg} className="w-50" alt=""/>
                </div>
            </div>
            <div>
                <div className="d-flex justify-content-center">
                    <div className="row w-75">
                        {
                            testimonialData.map((testimonial, index) => <TestimonialInfo key={index} testimonial={testimonial}></TestimonialInfo>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;