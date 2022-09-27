import React from 'react';
import '../css/SSmenu.css';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PreviewIcon from '@mui/icons-material/Preview';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function SmallScreenMenu({ value, closeMenu }) {
    return (
        <motion.div initial={value ? { width: "0%" } : { width: "50%" }} animate={value ? { width: "50%", transition: { duration: "0.5" } } : { width: "0%", transition: { duration: "0.5" } }} className='ssmenu-main-div shadow'>
            <div>
                <div className='p-3 text-end'>
                    <button style={{border:"none",background:"transparent",padding:"0px"}} onClick={()=>{closeMenu(false)}}><CloseIcon fontSize='large' style={{cursor:"pointer"}}/></button>
                    <hr style={{padding:"1px"}}/>
                </div>
                <div className='navlinks-smenu'>
                    <ul style={{padding:"5px"}}>
                        <li><NavLink className='d-flex justify-content-between align-items-center' to='/' onClick={()=>{closeMenu(false)}}><HomeIcon fontSize='large'/>  <span className='fs-5 fw-bold'>Home</span></NavLink></li>
                        <li><NavLink className='d-flex justify-content-between align-items-center' to='/create-cv' onClick={()=>{closeMenu(false)}}><BorderColorIcon fontSize='large'/>  <span className='fs-5 fw-bold'>Editor</span></NavLink></li>
                        <li><NavLink className='d-flex justify-content-between align-items-center' to='/cv-preview' onClick={()=>{closeMenu(false)}}><PreviewIcon fontSize='large'/>  <span className='fs-5 fw-bold'>Cv</span></NavLink></li>
                        <li><NavLink className='d-flex justify-content-between align-items-center' to='/' onClick={()=>{closeMenu(false)}}><LoginIcon fontSize='large'/>  <span className='fs-5 fw-bold'>Login</span></NavLink></li>
                        <li><NavLink className='d-flex justify-content-between align-items-center' to='/' onClick={()=>{closeMenu(false)}}><PersonAddAltIcon fontSize='large'/>  <span className='fs-5 fw-bold'>Signup</span></NavLink></li>
                    </ul>
                </div>
            </div>
        </motion.div>

    )
}

export default SmallScreenMenu;