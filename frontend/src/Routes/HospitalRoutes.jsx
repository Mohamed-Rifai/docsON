import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HospitalHome from '../pages/Hospital/HospitalHome';
import RegisterHospital from '../pages/Hospital/RegisterHospital';

const HospitalRoutes = () => (
  <Routes>
    <Route path="/registration" element={<RegisterHospital />} />

    <Route path="/home" element={<HospitalHome />} />
  </Routes>
);
 


export default HospitalRoutes
