import React from 'react';
import {Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
function Home() {
    return (
        <motion.div className='container' initial={{x:"-100vw"}} animate={{x:"0vw",transition:{type:"spring",ease:"easeIn",duration:"0.5"}}} exit={{x:"-100vw",transition:{type:"spring",ease:"easeIn",duration:"0.5"}}}>
            <div className='row'>
                <div className='col-lg-8 my-5 text-center m-auto'>
                        <h1 className='fs-1'>CV builder</h1>
                        <p className=''>Make a great first impression and land the interview with our collection of attractive and functional CV templates that can be modified to suit any position.</p>
                        <NavLink to='/create-cv' className='text-decoration-none text-light '><Button variant='contained' >create My CV</Button></NavLink>
                </div>
            </div>
        </motion.div>
    )
}

export default Home;
