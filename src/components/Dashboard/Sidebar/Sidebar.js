import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCog, faFileMedical, faHospitalUser, faSignOutAlt, faTh } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    return (
        <div style={{ height: "100vh" }} className="sidebar-container">
            <h6><FontAwesomeIcon icon={faTh} /> <Link className="link" to="/dashboard/appointment">Dashboard</Link></h6>
            <h6><FontAwesomeIcon icon={faCalendar} /> <Link className="link" to="/appointment">Appointment</Link></h6>
            <h6><FontAwesomeIcon icon={faHospitalUser} /> <Link className="link" to="/patients">Patients</Link></h6>
            <h6><FontAwesomeIcon icon={faFileMedical} /> <Link className="link" to="/dashboard/appointment">Prescriptions</Link></h6>
            <h6><FontAwesomeIcon icon={faCog} /> <Link className="link" to="/dashboard/appointment">Setting</Link></h6>
            <h6><FontAwesomeIcon className="text-info" icon={faSignOutAlt} /> <Link className="link" to="/dashboard/appointment">SignOut</Link></h6>
        </div>
    );
};

export default Sidebar;