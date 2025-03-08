import React from 'react';
import Group from '../../../public/images/careers/Group.svg';
import Image from 'next/image';

function HeroSection() {
  return (
    <section>
      {/* Background and spacing adjustments */}
      <div className='h-[100px] -mt-[80px] lg:-mt-[95px] bg-[--primary-cl]' />
      <div className='bg-[--primary-cl]'>
        <div className='containers flex flex-col md:flex-row items-center px-0 md:px-5 lg:px-5'>
          {/* Image content */}
          <div className='w-full md:w-1/2 order-1 md:order-2 mb-4 md:mb-0'>
            <div className='md:h-[510px] flex justify-center items-center'>
              <Image src={Group} alt='group-image' className='w-[500px] md:h-[500px]' objectFit='contain' />
            </div>
          </div>
          {/* Text content */}
          <div className='w-full pb-[50px] md:pb-0 md:w-1/2 order-2 md:order-1'>
            <div className='md:h-[510px] flex flex-col justify-center text-[--secondary-cl]'>
              <h1 className='font-[clash-display-medium] text-[36px] md:text-[48px] mb-4 md:mb-6'>Submit Your Complaint</h1>
              <p className='font-[general-sans-regular] text-[15px] md:text-[17px] leading-[22px] md:leading-[24px]'>
              Please provide accurate details so our team can address your issue quickly.   
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
