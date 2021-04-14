import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = () => {
        setLoggedInUser({});
    }
    return (
        <nav className="position-sticky top-0 navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link ms-4 active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-4 active" href="#service">Services</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-4 active" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-4 active" href="#doctor">Doctor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-4 active" href="#blog">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-4 active" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            {
                                loggedInUser.email ? <Link style={{marginRight: '90px'}} onClick={handleSignOut} className="nav-link ms-4 active" to="/">SignOut</Link>
                                : <Link style={{marginRight: '90px'}} className="nav-link ms-4 active" to="/login">Login</Link>
                            }
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;