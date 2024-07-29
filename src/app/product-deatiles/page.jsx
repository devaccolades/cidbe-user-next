import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import HeroSection from '../product-deatiles/HeroSection'
import Brochure from '../../../src/app/product-deatiles/Brochure'
import DeepDeatiles from '../../../src/app/product-deatiles/DeepDeatiles'
import Slider from './Slider'
import './projectDetails.css'
function page() {
  return (
  <>
<Header/>
<HeroSection  className='bg-[#ffff]'/>
<Brochure />
<div className='bg-[#ffff]'>


<Slider/>
<DeepDeatiles className='bg-[#ffff]'/> 
</div>

<Footer/>
  </>
  )
}

export default page