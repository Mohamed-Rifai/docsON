import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppointmentPage from '../pages/User/AppointmentPage';
import DocterListPage from '../pages/User/DocterListPage';
import DocterProfilePage from '../pages/User/DocterProfilePage';
import HospitalViewPage from '../pages/User/HospitalViewPage';
import LoginUser from '../pages/User/LoginUser'
import SignupUser from '../pages/User/SignupUser';
import UserVerification from '../verification/UserVerification';

const UserRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginUser />} />
    <Route path="/signup" element={<SignupUser />} />
    <Route path="/hospitalview/:id" element={<HospitalViewPage />} />
    <Route path="/docterslist" element={<DocterListPage />} />
    <Route path="/docterview/:id" element={<DocterProfilePage />} />
    <Route path="/appointment-page" element={<UserVerification> <AppointmentPage /> </UserVerification>
      }
    />
  </Routes>
);

export default UserRoutes
