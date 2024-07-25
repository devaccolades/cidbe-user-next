import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import HeroSection from '../product-deatiles/HeroSection'
import Brochure from '../../../src/app/product-deatiles/Brochure'
import DeepDeatiles from '../../../src/app/product-deatiles/DeepDeatiles'
import './projectDetails.css'
function page() {
  return (
  <>
<Header/>
<HeroSection/>
<Brochure className='bg-[#ffff]'/>
<DeepDeatiles className='bg-[#ffff]'/>
<Footer/>
  </>
  )
}

export default page