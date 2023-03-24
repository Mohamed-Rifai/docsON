import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DoctersDetails from '../pages/Hospital/DoctersDetails';
import DoctorView from '../pages/Hospital/DoctorView';
import HospitalHome from '../pages/Hospital/HospitalHome';
import LoginHospital from '../pages/Hospital/LoginHospital';
import RegisterHospital from '../pages/Hospital/RegisterHospital';
import HospitalVerification from '../verification/HospitalVerification';

const HospitalRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginHospital />} />
    <Route path="/registration" element={<RegisterHospital />} />

    <Route path="/home" element={ <HospitalVerification> <HospitalHome /> </HospitalVerification>}/>
    <Route path="/docters" element={  <HospitalVerification>  <DoctersDetails /> </HospitalVerification>  } />
    <Route path='/doctor-view/:id' element={ <HospitalVerification> <DoctorView /> </HospitalVerification> } />
  </Routes>
);
 


export default HospitalRoutes
