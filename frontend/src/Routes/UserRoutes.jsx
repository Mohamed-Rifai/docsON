import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DocterListPage from '../pages/User/DocterListPage';
import DocterProfilePage from '../pages/User/DocterProfilePage';
import HospitalViewPage from '../pages/User/HospitalViewPage';
import LoginUser from '../pages/User/LoginUser'
import SignupUser from '../pages/User/SignupUser';

const UserRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginUser />} />
    <Route path="/signup" element={<SignupUser />} />
    <Route path="/hospitalview/:id" element={<HospitalViewPage />} />
    <Route path="/docterslist" element={<DocterListPage />} />
    <Route path="/docterview" element={<DocterProfilePage />} />
  </Routes>
);

export default UserRoutes
