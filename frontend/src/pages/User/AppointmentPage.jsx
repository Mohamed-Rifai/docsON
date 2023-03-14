import React from 'react'
import Footer from '../../components/Landing/Footer'
import NavBar from '../../components/Landing/NavBar'
import AppointmentForm from '../../components/User/AppointmentForm'

const AppointmentPage = () => {
  return (
    <div>
      <NavBar/>
      <AppointmentForm/>
      <Footer/>
    </div>
  )
}

export default AppointmentPage
