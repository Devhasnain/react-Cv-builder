import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button} from '@mui/material';
import '../css/Navbar.css';

function Navbar() {
    return (
        <>
            <div className='row align-items-center main-div'>
                <div className='col-lg-3 text-center border-end pt-3'>
                    {/* <h1 className='main-logo'>CV builder</h1> */}
                    <h1>CV builder</h1>
                </div>
                <div className='col-lg'>
                    <ul className="nav justify-content-start">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <Button variant="contained"><NavLink className="text-light text-decoration-none" to="/">Signup</NavLink></Button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
