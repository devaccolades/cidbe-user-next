import Header from '@/layout/Headder'
import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import FeaturedProject from './FeaturedProject'
import Chairman from './Chairman'
import Blogs from './Blogs'
import Footer from '@/layout/Footer'
import CustomerReviewsAndFaq from './CustomerReviewsAndFaq'

function Cover() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutSection/>
    <FeaturedProject/>
    <Chairman/>
    <Blogs/>
    <CustomerReviewsAndFaq/>
    {/* <div className='h-[311px] bg-white'>

    </div>
    <Footer/> */}
    </>
  )
}

export default Cover