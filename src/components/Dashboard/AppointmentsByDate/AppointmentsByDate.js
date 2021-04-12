import React from 'react';

const alignment = {
    marginTop: "70px",
    marginBottom: "50px"
}

const AppointmentsByDate = ({ appointments }) => {

    return (
        <div>
            <div>
                <h5 className="brand-text-color ps-3 pt-4 mt-5">Appointments</h5>
            </div>
            <div style={alignment} className="text-center">
                {
                    appointments.length ?
                        <table className="table table-borderless">
                            <thead className="text-secondary">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointments.map((appointment, index) =>
                                        <tr key={index + 1}>
                                            <td>{appointment.name}</td>
                                            <td>{appointment.gender}</td>
                                            <td>{appointment.email}</td>
                                        </tr>
                                    )

                                }
                            </tbody>
                        </table>
                        :
                        <div className="mt-5 text-center text-secondary">
                            <h5>No appointment in this date</h5>
                        </div>

                }
            </div>
        </div>
    );
};

export default AppointmentsByDate;