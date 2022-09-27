import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { DataProvider } from './Context/Context';
import Home from './Pages/Home';
import Navbar from './Utils/Navbar';
import './css/Main.css';
import CreateCv from './Pages/CreateCv';
import CvPreview from './Utils/CvPreview';
import SmallScreenMenu from './Utils/SmallScreenMenu';
import './css/SSmenu.css';
import { AnimatePresence } from 'framer-motion';
function RoutePges() {
    const [SSmenu, setSSmenu] = useState(false);
    const location = useLocation();
    const HandleSSMenu = () => {
        setSSmenu(!SSmenu);
    }
    const CloseMenu = async () => {
        setSSmenu(!SSmenu);
    }
    return (
        <DataProvider>
            <div className='container-fluid' style={{ overflow: 'hidden' }}>
                <Navbar handleMenu={HandleSSMenu} />
                <SmallScreenMenu value={SSmenu} closeMenu={CloseMenu} />
                <AnimatePresence key={location.key} mode='wait'>
                    <Routes location={location.pathname} key={location.key}>
                        <Route path='/' element={<Home />} />
                        <Route path='/create-cv' element={<CreateCv />} />
                        <Route path='/cv-preview' element={<CvPreview />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </DataProvider>
    );
};
export default RoutePges;