import React from 'react';
import './HeaderMain.css';
import chair from '../../../images/chair.png';
import { useHistory } from 'react-router';

const HeaderMain = () => {
    const history = useHistory();
    const handleAppointment = () => {
        history.push('/appointment');
    };

    return (
        <main className="row header-main-container d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 className="heading-color">Your New Smile <br/> Smile Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas delectus laborum facere, tempora odit!</p>
                <button onClick={handleAppointment} className="button-gradient">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6 col-12">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;