import React from 'react';
import Image from 'next/image';
import Group from '../../../public/images/csr/OBJECTS.svg';
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
                  <Image src={Group} alt='group-image' className='w-[500px] md:h-[500px]' objectFit='contain' />
                    </div>
                       </div>
                          <div className='w-full pb-[50px] md:pb-0 md:w-1/2 order-2 md:order-1'>
                             <div className='md:h-[510px] flex flex-col justify-center text-[--secondary-cl]'>
                             <h1 className='font-[clash-display-medium] text-[30px] md:text-[48px] mb-4 md:mb-6 leading-[40px] md:leading-[59px]'>
  Corporate social responsibility
</h1>
                                  <p className='font-[general-sans-medium] text-[20px]'>Mission Statement</p>
                                    <p className='font-[general-sans-regular] text-[15px] md:text-[16px]  leading-[21.6px] mt-2 md:leading-[21.16px]'>
                                       Start by outlining your company's overall CSR mission and values. Explain why CSR is important to your organization and how it aligns with your business objectives and values..</p>
                                        </div>
                                          </div>
                                             </div>
                                                </div>
                                                   </section>
                                                      </>
                                                         )
                                             }

export default HeroSection


