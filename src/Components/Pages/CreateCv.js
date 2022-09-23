import React from 'react';
import '../css/Preview.css';
import Education from '../subPages/Education';
import Profile from '../subPages/Profile';
import Skills from '../subPages/Skills';
import Work from '../subPages/Work';

function CreateCv() {
    return (
        <div className='container my-5'>
            <div className='row '>
                <Profile />
            </div><br />
            <div className='row'>
                <Work />
            </div><br />
            <div className='row'>
                <Education />
            </div>
            <div className='row'>
                <Skills />
            </div>
        </div>
    )
}

export default CreateCv;