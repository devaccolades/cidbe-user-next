'use client'
import React, { useRef } from 'react'
// import { useFollowPointe } from './useFollowPointer'
import Image from 'next/image'
import aboutCardImage from "../../../public/images/home/about-card-vector.svg"
import aboutCardshape from "../../../public/images/home/about-shape.svg"
import aboutCardshapeMobile from "../../../public/images/home/about-shape-mobile.svg"
import arrowIcon from "../../../public/icons/arrow-outward-green.svg"
import '../(home)/./Home.css'

import excellenceBg from '../../../public/images/about/historyImage.jpeg'
// after connect the backend

function AboutThirdSection() {

  return (
    <main className='text-[--secondary-cl] w-full flex flex-col pb-[45px]  '
    >
      {/* About Card */}
      <card className='relative containers shadow-2xl flex flex-col-reverse md:flex-row rounded-[12px]'>
        <div className='md:h-[433px] w-full bg-color rounded-b-[12px] md:rounded-e-none  md:rounded-s-[12px] flex items-center p-[20px]  lg:p-0'>
          <Image className='absolute right-[400px] lg:block hidden bottom-[81px] z-10' src={aboutCardImage} alt="Apartments in Thrissur" />
          <div className='w-full lg:w-10/12 history-card-responsive xl:w-7/12 lg:ms-[50px] xl:ms-[90px] flex flex-col gap-[10px] text-center md:text-start'>
            <h3 className='text-[20px] md:text-[24px] font-[general-sans-medium] leading-[32.4px] uppercase'>Our Excellence</h3>
            <div className='flex flex-col gap-[20px] md:gap-[10px] lg:gap-[20px] font-[general-sans-regular] paragraph text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px] z-10'>
              <p>At CIDBI, we prioritize customer satisfaction by offering flexible floor plans, personalized service, and comprehensive amenities. Our commitment to unparalleled quality and a customer-centric approach ensures that every project meets the highest standards, enhancing the living experience for our esteemed clients.</p>
              <p>Our extensive experience and in-house expertise allow us to manage all aspects of construction independently, eliminating the need for external contractors. This capability, combined with our innovative ideas and commitment to high quality, has earned us a stellar reputation for exceeding customer expectations and delivering projects on time.</p>
            </div>
            <div className='flex justify-center md:justify-end pt-[18px]'>
            </div>
          </div>
        </div>
        <Image src={aboutCardshapeMobile} alt='Apartments in Thrissur' className='min-w-full -mt-[26px] z-20 -mb-[1px] bg-transparent z-1 md:hidden block' />
        <div className='bg-cover  bg-top md:w-full lg:w-7/12 h-[300px] md:h-full rounded-t-[12px] md:rounded-e-[12px] z-[10]' style={{ backgroundImage: `url(${excellenceBg.src})` ,zIndex:'10'}}>
          <Image className='h-full -ms-[2px] hidden md:block z-[15]' alt='Apartments in Thrissur' src={aboutCardshape} />
        </div>
      </card>
      
    </main>
  )
}

export default AboutThirdSection