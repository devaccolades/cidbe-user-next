import React from 'react'
import Header from '../../../layout/Header'
import Footer from '../../../layout/Footer'
import GalaryHeroSection from '../GalaryHeroSection'
import GalaryDetails from './GalaryDetails'
function page({params}) {
    const slug = params.slug
  return (
      <>
      <Header/>
        <GalaryHeroSection/>
        <GalaryDetails/>
        <Footer backGround=''/>
      </>
  )
}

export default page