import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-md custom-navbar">
                <h1 className='mx-4'>Cv Builder</h1>
                    <div className="collapse navbar-collapse " id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'><b>Home</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/create-cv'><b>Create Cv</b></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/cv-preview'><b>Preview</b></NavLink>
                            </li>
                        </ul>
                    </div>
            </nav>
        </>
    )
}

export default Navbar
