import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: '+17500356341',
        icon: faPhoneAlt,
        background: 'primary'
    },
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;