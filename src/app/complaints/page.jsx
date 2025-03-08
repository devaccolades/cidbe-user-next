import React from 'react'
import ComplaintForm from './ComplaintForm'
import './complaints.css'
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import HeroSection from '../complaints/HeroSection';


function page() {
  return (
    <div>
      <Header />
      {/* <HeroSection/> */}
      <ComplaintForm/>
      <Footer/>
    </div>
  )
}

export default page;
