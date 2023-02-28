import React from 'react'
import Banner from '../../components/Landing/Banner'
import Cards from '../../components/Landing/Cards'
import Footer from '../../components/Landing/Footer'

import NavBar from '../../components/Landing/NavBar'
import SearchSec from '../../components/Landing/SearchSec'
import Section1 from '../../components/Landing/Section1'



const Landing = () => {
  return (
    <div>
     <NavBar/>
     <Banner/>
     <Section1/>
     <SearchSec/>
     <Cards/>
     <Footer/>
    </div>
  )
}

export default Landing
