import React, { createRef } from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../css/cvPreview.css';
import ReactToPrint from 'react-to-print';
import CV from './CV';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function CvPreview() {
    let componentRef = createRef();
    return (
        <>
            <motion.div initial={{x:"-100vw"}} animate={{x:"0vw",transition:{type:"spring",ease:"easeIn",duration:"0.5"}}} exit={{x:"-100vw",transition:{type:"spring",ease:"easeIn",duration:"0.5"}}}>
                <div className='container'>
                    <div className='row my-5'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <NavLink to='/create-cv' className='text-dark'>
                                <ArrowBackIcon fontSize='large'/>
                            </NavLink>
                            <ReactToPrint
                                trigger={() => {
                                    return (
                                        <Button variant='contained'>Download</Button>
                                    )
                                }}
                                content={() => componentRef.current}
                                onAfterPrint={() => { alert('Your Cv has printed to your machine.') }}
                            />
                        </div>
                    </div>
                </div>
                <CV ref={componentRef} />
            </motion.div>
        </>
    )
}

export default CvPreview;