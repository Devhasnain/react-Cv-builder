import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './Context/Context';
import Home from './Pages/Home';
import Navbar from './Utils/Navbar';
import './css/Main.css';
import CreateCv from './Pages/CreateCv';

function RoutePges() {
    return (
        <DataProvider>
            <div className='container-fluid main-div-body'>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create-cv' element={<CreateCv/>}/>
                </Routes>
            </div>
        </DataProvider>
    );
};
export default RoutePges;