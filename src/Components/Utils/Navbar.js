import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button} from '@mui/material';
import  {BsList}  from 'react-icons/bs';
import '../css/Navbar.css';

function Navbar({handleMenu}) {
    return (
        <>
            <div className='row align-items-center main-div'>
                <div className='col-lg-3 col-md-3 col-sm-4 col-5 text-center border-end pt-3'>
                    {/* <h1 className='main-logo'>CV builder</h1> */}
                    <NavLink to='/' className='text-decoration-none text-dark'>
                    <h1>CV builder</h1>
                    </NavLink>
                </div>
                <div className='col-lg col-md col-sm large-screen-items'>
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
                <div className='col-lg-3 col-md-3 col-sm-2 large-screen-items'>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" to="/">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <Button variant="contained"><NavLink className="text-light text-decoration-none" to="/">Signup</NavLink></Button>
                        </li>
                    </ul>
                </div>
                <div className='col small-screen-items'>
                    <div className='text-end mx-1'>
                        <button className='rounded' onClick={handleMenu} style={{background:"#f0efef",zIndex:1,border:"none"}}><BsList size={41}/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
