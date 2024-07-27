import React from 'react'
import Header from '../../layout/Header'
import HeroSection from '../csr/HeroSection'
import FocusAreas from '../csr/FocusAreas'
import Footer from '../../layout/Footer'
import './Csr.css'

function page() {
  return (
   <>
   <Header bgPrimary={true}/>
   <HeroSection/>
   <FocusAreas/>
   <Footer/>
   </>
  )
}

export default page