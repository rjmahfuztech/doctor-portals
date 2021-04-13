import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
    const [patientsData, setAllPatientsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/patients')
            .then(res => res.json())
            .then(data => setAllPatientsData(data));
    }, []);

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-3 pr-5">
                <h4 className="mt-3">Patients</h4>
                <h5 className="brand-text-color pt-4 mt-5 mb-4">All Patients</h5>
                <div className="d-flex justify-content-center align-items-center">
                    {
                        patientsData.length === 0 &&
                        <div class="spinner-border mt-5 mb-5 text-center text-secondary" role="status">
                        </div>
                    }
                </div>
                {
                    patientsData.length ? <table className="table table-borderless">
                        <thead className="text-secondary">
                            <tr>
                                <th scope="col">Sr No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Age</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                patientsData.map((patient, index) =>
                                    <tr key={index + 1}>
                                        <td>{index + 1}</td>
                                        <td>{patient.name}</td>
                                        <td>{patient.gender}</td>
                                        <td>{patient.age}</td>
                                        <td>{patient.weight}</td>
                                        <td>{patient.phone}</td>
                                        <td>{patient.email}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                        :
                        <div className="text-center text-secondary">
                            <h5>Right now no patients</h5>
                        </div>
                }
            </div>
        </div>
    );
};

export default AllPatients;
