import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = date => {
        setSelectedDate(date)
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [selectedDate]);

    return (
        <section>
            <div style={containerStyle} className=" row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 mt-3">
                    <h4 className="ps-3">Appointments</h4>
                    <div className="mt-5 d-flex justify-content-center">
                        <Calendar
                            className="calendar specific-calendar"
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                </div>
                <div className="col-md-5 mt-3">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;