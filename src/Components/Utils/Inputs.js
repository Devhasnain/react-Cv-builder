import React, { useContext } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { BasicModal } from './Model';
import { Context } from '../Context/Context';

function Inputs() {
    const { open, setOpen } = useContext(Context);
    let titles = ['Profile', 'Work Experience', 'Education', 'Skills', 'Projects', 'Languages', 'Interests', 'Summary','Others']
    return (
        <>
            {titles.map((item, index) => {
                return (
                    <div className='col-lg-4 col-md-4 col-sm-6' key={index}>
                        <motion.div whileHover={{ scale: 1.01, backgroundColor: "#eae8e8" }} className='d-flex justify-content-between p-3 my-2 align-items-center rounded' style={{ background: "#f6f6f6" }}>
                            <h5>{item}</h5>
                            <Button onClick={() => { setOpen({ value: true, InputType: `${item}` }) }}>
                                <AddCircleOutlineIcon color='primary' />
                            </Button>
                        </motion.div>
                    </div>
                );
            })}
            {open ? <div><BasicModal /></div> : ""}
        </>
    );
};

export default Inputs;