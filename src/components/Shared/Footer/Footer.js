import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import FooterInfo from '../FooterInfo/FooterInfo';

const noName = [
    { name: 'Emergency Dental Care', link: '/emergency' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Treatment of Personal Diseases', link: '/personal-treatment' },
    { name: 'Tooth Extraction', link: 'tooth-extraction' },
    { name: 'Check Up', link: '/checkup' }
]

const services = [
    { name: 'Emergency Dental Care', link: '/emergency' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Treatment of Personal Diseases', link: '/personal-treatment' },
    { name: 'Tooth Extraction', link: 'tooth-extraction' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Check Up', link: '/checkup' }
]

const oralHealth = [
    { name: 'Emergency Dental Care', link: '/emergency' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Treatment of Personal Diseases', link: '/personal-treatment' },
    { name: 'Tooth Extraction', link: 'tooth-extraction' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Check Up', link: '/checkup' }
]
const ourAddress = [
    { name: 'new York - 101010 Hudson', link: '//google.com/map' },
    { name: 'Yards', link: '//google.com/map' },
]

const Footer = () => {
    return (
        <footer className="footer-section clear-both pt-5 pb-5">
            <div className="row">
                <FooterInfo key={1} title={'.'} items={noName}></FooterInfo>
                <FooterInfo key={2} title='Services' items={services}></FooterInfo>
                <FooterInfo key={3} title='Oral Health' items={oralHealth}></FooterInfo>
                <FooterInfo key={4} title='Our Address' items={ourAddress}>
                    <ul className="social-icon">
                        <li><a href="//facebook.com"><FontAwesomeIcon className="icon fb-icon" icon={faFacebookF} /></a></li>
                        <li><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                        <li><a href="//twitter.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                    </ul>
                    <div className="mt-5">
                        <h6>Call Now</h6>
                        <button className="button-gradient">+2025550295</button>
                    </div>
                </FooterInfo>
                <div className="mt-4 text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;