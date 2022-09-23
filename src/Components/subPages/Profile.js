import React from 'react';
import { Input } from '@mui/material';

function Profile() {
    return (
        <>
            <h3>Profile</h3>
            <hr /><br /><br />
            <div className='col text-center'>
                <Input placeholder='Name *' color='primary' style={{ width: '60%' }} /><br /><br />
                <Input placeholder='What you do *' color='primary' style={{ width: '60%' }} /><br /><br />
                <Input placeholder='Phone Number *' color='primary' style={{ width: '60%' }} /><br /><br />
            </div>
            <div className='col'>
                <Input placeholder='Email *' color='primary' style={{ width: '60%' }} /><br /><br />
                <Input placeholder='Address *' color='primary' style={{ width: '70%' }} /><br /><br />
            </div>
        </>
    )
}

export default Profile
