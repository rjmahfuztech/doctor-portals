import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCog, faFileMedical, faHome, faHospitalUser, faSignOutAlt, faTh, faUserMd } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);
    const handleSignOut = () => {
        setLoggedInUser({});
    }

    // if doctor
    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, []);

    return (
        <div style={{ height: "100vh" }} className="sidebar-container">
            <h6><FontAwesomeIcon icon={faHome} /> <Link className="link" to="/home">Home</Link></h6>
            <h6><FontAwesomeIcon icon={faTh} /> <Link className="link" to="/dashboard">Dashboard</Link></h6>
            <h6><FontAwesomeIcon icon={faCalendar} /> <Link className="link" to="/appointment">Appointment</Link></h6>
            {
                isDoctor && <div>
                    <h6><FontAwesomeIcon icon={faHospitalUser} /> <Link className="link" to="/patients">Patients</Link></h6>
                    <h6><FontAwesomeIcon icon={faFileMedical} /> <Link className="link" to="/dashboard">Prescriptions</Link></h6>
                    <h6><FontAwesomeIcon icon={faUserMd} /> <Link className="link" to="/doctor">Add Doctor</Link></h6>
                    <h6><FontAwesomeIcon icon={faCog} /> <Link className="link" to="/dashboard">Setting</Link></h6>
                </div>
            }
            <div className="signOut-position">
                <h6><FontAwesomeIcon className="text-info" icon={faSignOutAlt} /> <Link className="link" onClick={handleSignOut} to="/">SignOut</Link></h6>
            </div>
        </div>
    );
};

export default Sidebar;