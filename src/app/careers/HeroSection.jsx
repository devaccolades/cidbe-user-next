import React from 'react';
import Group from '../../../public/images/careers/Group.webp';
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
              <Image src={Group} alt='Apartments in Thrissur' className='w-[500px] md:h-[500px]' objectFit='contain' />
            </div>
          </div>
          {/* Text content */}
          <div className='w-full pb-[50px] md:pb-0 md:w-1/2 order-2 md:order-1'>
            <div className='md:h-[510px] flex flex-col justify-center text-[--secondary-cl]'>
              <h1 className='font-[clash-display-medium] text-[36px] md:text-[48px] mb-4 md:mb-6'>Join Our Team</h1>
              <p className='font-[general-sans-regular] text-[15px] md:text-[17px] leading-[22px] md:leading-[24px]'>
                At CIDBI, we're not just constructing buildings—we're building careers. Join our dynamic team of professionals dedicated to innovation, excellence, and making a lasting impact. Whether you're an experienced expert or a passionate newcomer, we offer unparalleled opportunities for growth, development, and creativity. Embrace a career where your skills are valued, your contributions are recognized, and your ambitions are supported. Let's create the future together—one project at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
