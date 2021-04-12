import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className="container">
            <Header></Header>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctor></Doctor>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;