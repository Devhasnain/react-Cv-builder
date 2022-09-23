import React from 'react';
import { Input } from '@mui/material';

function Education() {
    return (
        <>
            <h3>Education</h3>
            <hr /><br /><br />
            <div className='col text-center'>
                <Input placeholder='Name *' color='primary' style={{ width: '60%' }} /><br /><br />
                <Input placeholder='What you do *' color='primary' style={{ width: '60%' }} /><br /><br />
                <Input placeholder='Phone Number *' color='primary' style={{ width: '60%' }} /><br /><br />
            </div>
            <div className='col'>
            </div>
        </>
    )
}

export default Education;