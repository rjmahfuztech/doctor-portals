import React from 'react';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const InfoCard = ({ info }) => {
    const { title, description, icon, background } = info;
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex justify-content-center info-container info-${background}`}>
                <div className="icon-align">
                    <FontAwesomeIcon className="info-icon" icon={icon} />
                </div>
                <div>
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;