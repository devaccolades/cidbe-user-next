import React from 'react';
import Image from "next/image";
import aboutFirstGif from '../../../public/gif/mission1-ezgif.com-effects.gif';
import aboutSecondGif from '../../../public/gif/mission-ezgif.com-effects.gif';

function AboutSecondSection() {
  return (
    <>
      <section className='containers pt-[90px] pb-[50px]'>
        <div className='flex flex-col lg:flex-row gap-5 w-full items-center'>
        <div className='w-full lg:w-[40%] h-[212px] flex flex-col justify-center gap-[24px]'>
            <h1 className='text-[#483C32] font-[general-sans-regular] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] gap-5'>
              Welcome to CIDBI - Creations India,
            </h1>
            <h1 className='text-[#483C32] font-[general-sans-regular] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] gap-5'>
              Since 2005, CIDBI has been a beacon of excellence in construction, backed by ISO 9001-2015 certification and a stellar reputation for delivering top-tier homes. Led by Mr. A A Abdul Lathif, our expert team brings over 33 years of collective experience to every project.
            </h1>
            <h1 className='text-[#483C32] font-[general-sans-regular] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] gap-5'>
              Specializing in residential flats, office/shopping complexes, educational institutions, and hospitals, CIDBI has crafted over 110 lakhs sqft of meticulously designed buildings across Thrissur.
            </h1>
          </div>

          <div className='flex flex-col md:flex-row w-full lg:w-[60%] gap-5'>
            <div className=' w-full h-'>
              <div className="text-center flex flex-col p-[20px] lg:p-[10px] xl:p-[20px] items-center gap-[10px] bg-white shadow-2xl rounded-[15px] ">
                <Image src={aboutFirstGif} alt='quality-gif' className='w-[90px] md:w-[120px] lg:w-[120px]' />
                <div className='flex flex-col gap-[10px] lg:gap-[20px]'>
                  <h6 className='font-[general-sans-medium] text-[--secondary-cl] text-[20px] md:text-[24px] xl:text-[24px] leading-[28px] md:leading-[32px] lg:leading-[32px]'>
                    <span className=''>Our Vision</span>
                  </h6>
                  <p className=' font-[general-sans-regular] text-[14px] md:text-[16px] lg:text-[16px] leading-[24px] text-[#483C32]'>
                    Our vision is to be a renowned builders in India and our name is to be known across the country for development and marketing of superior homes with the highest quality. </p>
                </div>
              </div>
            </div>

            <div className='w-full'>
              <div className="text-center flex flex-col  p-[20px] lg:p-[10px] xl:p-[20px] items-center gap-[10px] bg-white shadow-2xl rounded-[15px] ">
                <Image src={aboutSecondGif} alt='mission-gif' className='w-[90px] md:w-[120px] lg:w-[120px]' />
                <div className='flex flex-col gap-[10px] lg:gap-[20px]'>
                  <h6 className='font-[general-sans-medium] text-[--secondary-cl] text-[20px] md:text-[24px] lg:text-[24px] leading-[28px] md:leading-[32px] lg:leading-[32px]'>
                    <span className=''>Our Mission</span>
                  </h6>
                  <p className='font-[general-sans-regular] text-[14px] md:text-[16px] lg:text-[16px] leading-[24px] text-[#483C32]'>
                    Our mission is to serve the customers with exceptional quality by the means of effective management of staff, financial, and physical resources. Putting in earnest dedication and effort.                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSecondSection;
