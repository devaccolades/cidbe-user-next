import React from 'react'
import HeroSection from './HeroSection'
import Brochure from './Brochure'
import DeepDeatiles from './DeepDeatiles'
import Slider from './Slider'
import './projectDetails.css'
function Cover({ data }) {
  return (
    <>
      <HeroSection data={data} className='bg-[#ffff]' />
      <Brochure data={data} />
      <div className='bg-[#ffff]'>
        <DeepDeatiles className='bg-[#ffff]' />
      </div>
    </>
  )
}

export default Cover