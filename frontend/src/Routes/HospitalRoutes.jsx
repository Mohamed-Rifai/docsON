import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DoctersDetails from '../pages/Hospital/DoctersDetails';
import HospitalHome from '../pages/Hospital/HospitalHome';
import LoginHospital from '../pages/Hospital/LoginHospital';
import RegisterHospital from '../pages/Hospital/RegisterHospital';
import HospitalVerification from '../verification/HospitalVerification';

const HospitalRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginHospital />} />
    <Route path="/registration" element={<RegisterHospital />} />

    <Route path="/home" element={<HospitalHome />} />
    <Route 
      path="/docters"
      element={
        <HospitalVerification>
          <DoctersDetails />
        </HospitalVerification>
      }
    />
  </Routes>
);
 


export default HospitalRoutes
