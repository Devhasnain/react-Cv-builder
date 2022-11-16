import React from 'react';
import '../css/Preview.css';
import Inputs from '../Utils/Inputs';
import {NavLink} from 'react-router-dom';
import { motion } from 'framer-motion';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function CreateCv() {
    return (
        <motion.div initial={{x:"-100vw"}} animate={{x:"0vw",transition:{type:"spring",ease:"easeIn",duration:"0.5"}}} exit={{x:"-100vw",transition:{type:"spring",ease:"easeIn",duration:"0.5"}}} className='container-lg container-md container-sm container my-5'>
            <div className='row align-items-center'>
                <div className='col'>
                    <h5 className='text-muted'>Lets start creating your cv,Fill up your details!</h5>
                </div>
                <div className='col-3 text-center' >
                    <NavLink to='/cv-preview' className='text-dark'><RemoveRedEyeIcon fontSize='large'/></NavLink>
                    </div>
                <hr /><br />
            </div>
            <div className='row'>
                <Inputs />
            </div>
            <div className=''>
                <button className='btn btn-primary'>Back</button>
            </div>
        </motion.div>
    );
};

export default CreateCv;