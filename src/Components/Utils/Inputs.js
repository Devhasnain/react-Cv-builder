import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

function Inputs() {
    let titles = ['Profile', 'Education', 'Work Experience', 'Skills', 'Projects', 'Languages', 'Interests']
    const handleClick = (a) => {
        console.log(a)
    }
    return (
        <>
            {titles.map((item, index) => {
                return (
                    <motion.div whileHover={{ scale: 1.05, backgroundColor: "#eae8e8" }} key={index} className='d-flex justify-content-between p-3 my-2 align-items-center rounded' style={{ background: "#f6f6f6" }}>
                        <h5>{item}</h5>
                            <Button >
                                <AddCircleOutlineIcon color='primary' />
                            </Button>
                    </motion.div>
                );
            })}
        </>
    );
};

export default Inputs;