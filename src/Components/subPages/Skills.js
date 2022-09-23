import React from 'react';
import { Input } from '@mui/material';

function Skills() {
    return (
        <>
            <h3>Skills</h3>
            <hr /><br /><br />
            <div className='col text-center'>
                <Input placeholder='Skill *' color='primary' style={{ width: '60%' }} /><br /><br />
            </div>
        </>
    )
}

export default Skills
