import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HospitalHome from '../pages/Hospital/HospitalHome';
import LoginHospital from '../pages/Hospital/LoginHospital';
import RegisterHospital from '../pages/Hospital/RegisterHospital';

const HospitalRoutes = () => (
  <Routes>
    <Route path='/login' element={<LoginHospital/>} />
    <Route path="/registration" element={<RegisterHospital />} />
    
    <Route path="/home" element={<HospitalHome />} />
  </Routes>
);
 


export default HospitalRoutes
