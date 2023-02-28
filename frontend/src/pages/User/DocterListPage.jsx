import React from 'react'
import Footer from '../../components/Landing/Footer'
import NavBar from '../../components/Landing/NavBar'
import DoctorList from '../../components/User/DocterList'

const DocterListPage = () => {
  return (
    <div>
        <NavBar/>
      <DoctorList/>
      <Footer/>
    </div>
  )
}

export default DocterListPage
