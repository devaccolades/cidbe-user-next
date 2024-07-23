'use client'
import Image from 'next/image'
import React from 'react'
// Icons
import arrowIcon from '../../../public/icons/arrow-outward-green.svg'
import { useRouter } from 'next/navigation'


function GalaryListing() {
  const router = useRouter()
  return (
    <main className="md:bg-[url('/images/achievements/achievements-bg.svg')] bg-cover">
      <div className='containers responsewidth py-[42px] md:py-[82px] flex flex-col gap-[100px]'>
        <section className=' w-full flex flex-col md:flex-row gap-[20px] md:h-[750px]'>
          <div className='md:w-[40%] flex flex-col gap-[20px]'>
            <div className="rounded-[8px]  h-[359px] bg-cover bg-center bg-[url('/images/gallery/image1.jpeg')]" />
            <div className='flex flex-col gap-[10px]'>
              <p className='w-10/12 font-[general-sans-medium] text-[#483C32] text-[16px] lg:text-[24px] leading-[21px] lg:leading-[32px] p'>Clarion / Cocoon Document Handing Over Ceremony</p>
              <p className='text-[--secondary-cl] text-[10px] bg-[#EBEBEB] flex justify-center items-center rounded-[6px] w-[73px] h-[24px]'>28/03/2024</p>
            </div>
            <div className='flex flex-col gap-[50px]'>
              <p className='font-[general-sans-regular] text-[14px] lg:text-[18px] leading-[21px] lg:leading-[30px]'>Small description about the  event.Small description about the  event.Small description
                about the  event.Small description about the  event.Small description about the  event.Small description about the  event.Small description about the  event...</p>
              <div className='hidden md:block'>
                <div className='flex justify-end items-center'>
                  <p className='flex flex-row font-[general-sans-medium] text-[12px] gap-[6px] cursor-pointer'onClick={()=>router.push('/gallery/clarion-cocoon')}><span>View Full  Gallery</span> <Image src={arrowIcon} className='' alt="" /></p>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-[60%] flex flex-col gap-[10px] md:gap-[20px] h-[480px] md:h-full'>
            <div className='w-full flex flex-row gap-[10px] md:gap-[20px] h-[75%] '>
              <div className='w-full lg:w-[75%] flex flex-col gap-[10px] md:gap-[20px] '>
                <div className='w-full h-[35%] flex flex-row gap-[10px] md:gap-[20px]'>
                  <div className="w-[70%] rounded-[8px] h-full bg-cover bg-center bg-[url('/images/gallery/image2.jpeg')]" />
                  <div className="w-[30%] rounded-[8px] h-full bg-cover bg-center bg-[url('/images/gallery/image3.jpeg')]" />
                </div>
                <div className="h-[65%] rounded-[8px] bg-center bg-cover bg-[url('/images/gallery/image4.jpeg')]" />
              </div>
              <div className='hidden lg:block w-[25%] h-full'>
                <div className='w-full h-full flex flex-col gap-[10px] md:gap-[20px]'>
                  <div className="h-[70%] w-full rounded-[8px] bg-center bg-cover bg-[url('/images/gallery/image5.jpeg')]" >df</div>
                  <div className="h-[30%] rounded-[8px] bg-center bg-cover bg-[url('/images/gallery/image6.jpeg')]" />
                </div>
              </div>
            </div>
            <div className='w-full flex flex-row gap-[10px] md:gap-[20px] h-[25%]'>
              <div className="w-[60%] rounded-[8px] bg-center bg-cover bg-[url('/images/gallery/image7.jpeg')]" />
              <div className="w-[40%] rounded-[8px] bg-center bg-cover bg-[url('/images/gallery/image9.jpeg')]" />
            </div>
          </div>
          <div className='md:hidden block'>
                <div className='flex justify-center items-center'>
                  <p className='flex flex-row font-[general-sans-medium] text-[12px] gap-[6px] cursor-pointer' onClick={()=>router.push('/gallery/clarion-cocoon')}><span>View Full  Gallery</span> <Image src={arrowIcon} className='' alt="" /></p>
                </div>
              </div>
        </section>

        

      </div>
    </main>
  )
}

export default GalaryListing