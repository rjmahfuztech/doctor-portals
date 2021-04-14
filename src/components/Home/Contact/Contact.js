import React from 'react';
import './Contact.css';

const Contact = () => {

    const handleFormSubmit = () => {
        console.log('submit');
    }
    return (
        <section id="contact" className="text-center form-container pt-5 pb-5 mb-5">
            <div>
                <h5 className="h5-color">CONTACT US</h5>
                <h2 className="text-white">Always Contact with us</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 mt-5">
                    <form onClick={handleFormSubmit}>
                        <input type="email" className="form-control" placeholder="Email Address*" required/>
                        <br />
                        <input type="text" className="form-control" placeholder="Subject*" required/>
                        <br />
                        <textarea name="" id="" className="form-control" cols="30" rows="10" placeholder="Your Message*" required></textarea>
                        <br/>
                        <button className="button-gradient specific-btn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;