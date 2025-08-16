import React from 'react'
import bgImage from '../../../public/images/gallery/bg.webp'
function GalaryHeroSection() {

  return (
    <div className='h-[356px] md:h-[272px] lg:h-[516px] w-full flex justify-center items-center -mt-[80px] lg:-mt-[95px] bg-cover bg-center bg-no-repeat'
    style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <h1 className='text-white font-[clash-display-medium] text-[64px] lg:text-[128px]'>GALLERY</h1>
    </div>
  )
}

export default GalaryHeroSection