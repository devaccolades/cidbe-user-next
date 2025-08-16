import React from 'react';
import Image from 'next/image';
import Group from '../../../public/images/csr/OBJECTS.webp';
import backgroundCsr from '../../../public/images/csr/csrbackground.svg'

function HeroSection() {
   return (
      <>
         <section>
            <div className='h-[100px] -mt-[80px] lg:-mt-[95px] bg-[--primary-cl]' />
            <div className='bg-[--primary-cl]'>
               <div className='containers flex flex-col md:flex-row items-center px-[20px]'>
                  <div className='w-full md:w-1/2 order-1 md:order-2 mb-4 md:mb-0'>
                     <div className='md:h-[510px] flex sm:justify-center	 md:justify-end items-center'>
                        <Image src={Group} alt='flat for sale in Thrissur' className='w-[500px] md:h-[500px]' objectFit='contain' />
                     </div>
                  </div>
                  <div className='w-full pb-[50px] md:pb-0 md:w-1/2 order-2 md:order-1'>
                     <div className='md:h-[510px] flex flex-col justify-center text-[--secondary-cl]'>
                        <h1 className='capitalize font-[clash-display-medium] text-[30px] md:text-[48px] mb-4 md:mb-6 leading-[40px] md:leading-[59px]'>
                           Corporate social responsibility
                        </h1>
                        <p className='font-[general-sans-medium] text-[20px]'>Helping Hand of CIDBI
                        </p>
                        <p className='font-[general-sans-regular] text-[15px] md:text-[16px]  leading-[21.6px] mt-2 md:leading-[21.16px]'>
                           CIDBI has a commitment beyond business to the development and wellbeing of society. As a cornerstone of our CSR policy, we pledge to build a home for a deserving family upon the completion of each project.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default HeroSection


