import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { DataProvider } from './Context/Context';
import Home from './Pages/Home';
import './css/Main.css';
import CreateCv from './Pages/CreateCv';
import CvPreview from './Utils/CvPreview';
import './css/SSmenu.css';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Utils/Navbar';
function RoutePges() {
    const location = useLocation();
    return (
        <DataProvider>
            <Navbar/>
                <AnimatePresence key={location.key} mode='wait'>
                    <Routes location={location.pathname} key={location.key}>
                        <Route path='/' element={<Home />} />
                        <Route path='/create-cv' element={<CreateCv />} />
                        <Route path='/cv-preview' element={<CvPreview />} />
                    </Routes>
                </AnimatePresence>
        </DataProvider>
    );
};
export default RoutePges;