'use client'
import React, { useRef } from 'react'
// import { useFollowPointe } from './useFollowPointer'
import Image from 'next/image'
import aboutCardImage from "../../../public/images/home/about-card-vector.svg"
import aboutCardshape from "../../../public/images/home/about-shape.svg"
import aboutCardshapeMobile from "../../../public/images/home/about-shape-mobile.svg"
import arrowIcon from "../../../public/icons/arrow-outward-green.svg"
import '../(home)/./Home.css'

// after connect the backend

function AboutThirdSection() {

  return (
    <main className='text-[--secondary-cl] w-full flex flex-col pb-[45px]  '
    >
      {/* About Card */}
      <card className='relative containers shadow-2xl flex flex-col-reverse md:flex-row rounded-[12px]'>
        <div className='md:h-[433px] w-full bg-color rounded-b-[12px] md:rounded-e-none  md:rounded-s-[12px] flex items-center p-[30px] md:p-[60px] lg:p-0'>
          <Image className='absolute right-[400px] lg:block hidden bottom-[81px] ' src={aboutCardImage} alt="Description-of-the-about-card-image" />
          {/* <Image className='absolute top-[46%] block md:hidden w-full left-0 right-0' src={aboutCardshapeMobile} alt="Description-of-the-about-card-image" /> */}

          <div className='w-full lg:w-10/12 xl:w-7/12 lg:ms-[50px] xl:ms-[90px] flex flex-col gap-[10px] text-center md:text-start'>
            <h3 className='text-[20px] md:text-[24px] font-[general-sans-medium] leading-[32.4px]'>HISTORY</h3>
            <div className='flex flex-col gap-[20px] font-[general-sans-regular] text-[14px] lg:text-[16px] leading-[24px]'>
              <p>Since 2005, CIDBI has led the construction industry with ISO 9001-2015 certification and a reputation for superior homes. Under Mr. A A Abdul Lathif's leadership, our team of experts brings over 33 years of experience to every project.</p>
              <p>Specializing in residential flats, office/shopping complexes, educational institutions, and hospitals, CIDBI has developed over 110 lakhs sqft of meticulously crafted buildings across Thrissur.
              With an in-house approach, CIDBI manages every aspect from design to finishing touches, ensuring a seamless process and peace of mind for our clients.</p>
            </div>
            <div className='flex justify-center md:justify-end pt-[18px]'>
              <button className='underline flex gap-[10px] items-center text-[12px] font-[general-sans-medium]'>
                Know more
                <Image src={arrowIcon} alt='arrow-icon' />
              </button>
            </div>
          </div>
        </div>
        <Image src={aboutCardshapeMobile} alt='' className='min-w-full align-bottom -mb-[5px] -mt-[30px] md:hidden block' />
        <div className='bg-cover bg-bottom md:w-full lg:w-7/12 rounded-t-[12px] md:rounded-e-[12px] z-4' style={{ backgroundImage: `url(/images/home/about-image.jpg)` ,zIndex:'1'}}>
          <Image className='h-full -ms-[2px] md:visible invisible' alt='card-shape' src={aboutCardshape} />
        </div>
      </card>
    </main>
  )
}

export default AboutThirdSection