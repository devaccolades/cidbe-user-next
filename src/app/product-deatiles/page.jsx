import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import HeroSection from '../product-deatiles/HeroSection'
import Brochure from '../../../src/app/product-deatiles/Brochure'
import DeepDeatiles from '../../../src/app/product-deatiles/DeepDeatiles'
function page() {
  return (
  <>
<Header/>
<HeroSection/>
<Brochure/>
<DeepDeatiles/>
<Footer/>
  </>
  )
}

export default page