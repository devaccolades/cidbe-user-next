import React from 'react'
import aboutFormShape from '../../../public/images/about/aboutfromnew.svg.svg'
import Image from 'next/image'


function AboutFourthSection() {
  return (

    <>

      <section>
        <main className='py-[45px]'>
          <card className='relative containers shadow-2xl flex flex-col-reverse md:flex-row rounded-[12px]'>
            <div className='w-full bg-color rounded-b-[12px] md:rounded-e-none  md:rounded-s-[12px] flex items-center p-[30px] md:p-[60px] lg:p-0 '>
              <div className={`h-full rounded-s-[20px] text-[--secondary-cl] p-[30px] md:p-[40px] xl:ms-[90px]`} >
                <div className='flex flex-col gap-[17px] md:gap-[20px]'>
                  <p className='font-[general-sans-semibold] text-[20px] ]'>WE ARE READY TO ANSWER ALL YOUR   QUESTIONS</p>
                  <div className='flex flex-col gap-[10px]'>
                    <div className='flex flex-col gap-[6px]'>
                      <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Name</p>
                      <input className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' placeholder='Enter your name' type="text" />
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                      <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Phone No</p>
                      <input className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' placeholder='Enter Your Phone No Number' type="text" />
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                      <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Email</p>
                      <input className='w-full h-[40px] px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' placeholder='Enter Your Email Address' type="text" />
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                      <p className='font-[inter-regular] text-[11px] md:text-[14px]'>Message</p>
                      <textarea rows="5" placeholder='You can message hear' className='w-full px-[15px] border-2 rounded-[6px] placeholder:text-[14px] placeholder:text-[#BABABA] focus:outline-none' >
                      </textarea>
                    </div>
                    <button className='w-full bg-[--secondary-cl] font-[general-sans-semibold] rounded-[6px] p-[10px] text-[15px] text-white'>Send</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-cover bg-bottom md:w-full lg:w-7/12  md:rounded-e-[12px] z-4' style={{ backgroundImage: `url(/images/about/AboutFormImage.png)`, zIndex: '1' }}>
              <Image className='h-full -ms-[2px] md:visible invisible' alt='card-shape' src={aboutFormShape} />
            </div>
          </card>
        </main>
      </section>
    </>
  )
}

export default AboutFourthSection