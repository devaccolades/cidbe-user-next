import React from 'react';
import Image from "next/image";
import aboutFirstGif from '../../../public/gif/mission1-ezgif.com-effects.gif';
import aboutSecondGif from '../../../public/gif/mission-ezgif.com-effects.gif';

function AboutSecondSection() {
  return (
    <>
      <section className='containers pt-[20px] lg:pt-[90px] pb-[50px]'>
        <div className='flex flex-col lg:flex-row gap-5 w-full items-center'>
          <div className='w-full lg:w-[40%] md:h-[212px] flex flex-col justify-center gap-[24px]'>
            <h1 className='text-[#483C32] font-[general-sans-regular] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] gap-5'>
              We, Creations India Developers Builders Infrastructures (CIDBI), an ISO 9001-2015 certified builder in Thrissur, was established in 2005 in response to the growing need of quality housings. Since then, we have grown to be one of the best builders in Thrissur. CIDBI is a professionally managed company under the leadership of Mr. A A Abdul Lathif, run by well experienced management. We have more than 33 years of experience in the construction field and have developed more than 110 lakhs sqft buildings in the form of residential flats, office/shopping complexes, educational institutions, hospitals etc in an around Thrissur.
            </h1>
          </div>
          <div className='flex flex-col md:flex-row w-full lg:w-[60%] gap-5'>
            <div className='w-full flex flex-col'>
              <div className="text-center flex flex-col p-[20px] lg:p-[10px] xl:p-[20px] items-center gap-[10px] bg-white shadow-2xl rounded-[15px] flex-1">
                <Image src={aboutFirstGif} alt='quality-gif' className='w-[90px] md:w-[120px] lg:w-[120px]' />
                <div className='flex flex-col gap-[10px] lg:gap-[20px]'>
                  <h6 className='font-[general-sans-medium] text-[--secondary-cl] text-[20px] md:text-[24px] xl:text-[24px] leading-[28px] md:leading-[32px] lg:leading-[32px]'>
                    <span className=''>Our Vision</span>
                  </h6>
                  <p className='font-[general-sans-regular] text-[14px] md:text-[16px] lg:text-[16px] leading-[24px] text-[#483C32]'>
                    Our vision is to be a renowned builders in India and our name is to be known across the country for development and marketing of superior homes with the highest quality. </p>
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <div className="text-center flex flex-col p-[20px] lg:p-[10px] xl:p-[20px] items-center gap-[10px] bg-white shadow-2xl rounded-[15px] flex-1">
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
