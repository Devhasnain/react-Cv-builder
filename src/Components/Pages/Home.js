import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import {Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
import Model from '../Utils/Model';
function Home() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 my-5 text-center m-auto'>
                        <h1 className='fs-1'>CV builder</h1>
                        <p className=''>Make a great first impression and land the interview with our collection of attractive and functional CV templates that can be modified to suit any position.</p>
                        <NavLink to='/create-cv' className='text-decoration-none text-light '><Button variant='contained' >create My CV</Button></NavLink>
                </div>
            </div>
            {/* <Model/> */}
        </div>
    )
}

export default Home;
