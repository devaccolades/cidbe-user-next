
import Header from '@/layout/Headder'
import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
// import FeaturedProject from './FeaturedProject'
import Chairman from './Chairman'
// import Blogs from './Blogs'
// import CustomerReviewsAndFaq from './CustomerReviewsAndFaq'
import Footer from '@/layout/Footer'
import dynamic from 'next/dynamic'
import Skelten from '@/components/skeletoneffect/Skelten'

const FeaturedProject = dynamic(() => import('./FeaturedProject'), { ssr: false,loading:() => <Skelten/>, });
const Blogs = dynamic(() => import('./Blogs'), { ssr: false,loading:() => <Skelten/>, });
const CustomerReviewsAndFaq = dynamic(() => import('./CustomerReviewsAndFaq'), { ssr: false,loading:() => <Skelten/>, });


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
    <Footer/>
    </>
  )
}

export default Cover