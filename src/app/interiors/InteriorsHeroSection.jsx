import React from 'react'
import Image from 'next/image'
import banner from '../../../public/images/interiors/testedSv.svg'
import leftSide from '../../../public/images/interiors/landing.svg'
import smmdBanner from '../../../public/images/interiors/designBackground.svg'

function InteriorsHeroSection() {
  return (
    <section
      className="h-[600px] sm:h-[700px] md:h-[525px] lg:h-[870px] bg-[#BFD8BD] bg-center -mt-[80px] lg:-mt-[115px] relative"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden pb-[100px]"  
        style={{
          backgroundImage: `url(${smmdBanner.src})`,
        }}
      />
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat hidden lg:block"
        style={{
          backgroundImage: `url(${banner.src})`,
        }}
      />
      <div className="containers res h-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-[16px] md:gap-[24px] lg:gap-[40px] relative z-10 pt-[60px] md:pt-[65px] lg:pt-[115px] pb-[20px] sm:pb-[30px] md:pb-0">
        <div className="relative w-full md:w-1/2 flex items-center justify-center md:justify-start mt-0 min-[550px]:mt-[30px] min-[640px]:mt-[30px] min-[760px]:mt-0">
          <div className="relative">
            <Image
              src={leftSide}
              alt="Interior Landing"
              layout="intrinsic" 
              objectFit="contain" 
              className="w-[70%] sm:w-[75%] md:w-[70%] lg:w-[80%] mx-auto md:mx-0"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-left md:mb-[30px] px-4 sm:px-6 md:px-0">
          <h1 className="text-[24px] capitalize sm:text-[28px] md:text-[28px] lg:text-[55px] font-[general-sans-medium] leading-[28px] sm:leading-[34px] md:leading-[34px] lg:leading-[66px] text-[#052D23]">
            Expert service in interior design
          </h1>
          <p className="mt-[8px] sm:mt-[10px] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[24px] font-[general-sans-regular] leading-[18px] sm:leading-[22px] md:leading-[22px] lg:leading-[32px] text-[#052D23]">
            Our aim is to create a comfortable and cosy home for our clients,
            providing interior design solutions which are practical and
            beautiful.
          </p>
        </div>
      </div>
    </section>
  )
}

export default InteriorsHeroSection
