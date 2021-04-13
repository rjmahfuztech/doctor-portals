import React, { useState } from 'react';
import './AddDoctor.css';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleSubmit = e => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault();
    }

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleImgChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4">
                <h5 className="brand-text-color">Add Doctor</h5>
                <form onSubmit={handleSubmit} className="style-doctor-form">
                    <div className="row">
                        <div className="mb-3 col-md-6">
                            <label className="form-label">Your Name</label>
                            <input type="text" name="name" onBlur={handleBlur} className="form-control" placeholder="Your name" />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label className="form-label">Your Email</label>
                            <input type="email" name="email" onBlur={handleBlur} className="form-control" placeholder="Your email" />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="mb-3 col-md-6">
                            <label className="form-label">Upload Image</label>
                            <input type="file" onChange={handleImgChange} className="form-control" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <button type="submit" className="button-gradient">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;