import React from 'react';
import {Routes,Route} from 'react-router-dom';
import { DataProvider } from './Context/Context';
import Home from './Pages/Home';

function RoutePges() {
  return (
    <DataProvider>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </DataProvider>
  )
}

export default RoutePges
