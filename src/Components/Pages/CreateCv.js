import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Preview.css';
import Inputs from '../Utils/Inputs';
function CreateCv() {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='d-flex justify-content-between'>
                    <small className='text-muted'>Lets start creating your cv,Fill up your details!</small>
                    <NavLink to='/' className='text-decoration-none text-dark'>
                    <Button variant='contained'>Preview</Button>
                    </NavLink>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Inputs/>
                </div>
                <div className='col'>

                </div>
            </div>
        </div>
    )
}

export default CreateCv;