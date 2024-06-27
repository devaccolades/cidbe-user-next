import React from 'react'
import './Home.css'
import Image from 'next/image'

// Images
import chairmanshape from "../../../public/images/home/chairmanshape.svg"
import chairmanshapeMobile from "../../../public/images/home/chairmanshapeMobile.svg"
import chairmanbg from "../../../public/images/home/chairmanbg.svg"
import chairmanbgMobile from "../../../public/images/home/chairmanbgMobile.svg"
function Chairman() {
  return (
    <section className='py-[30px] lg:py-[100px] flex justify-center items-center'>
      <card className='relative  containers shadow-2xl flex flex-col-reverse md:grid md:grid-cols-[1fr,350px] lg:grid-cols-[1fr,435px] rounded-[12px]'>
        <div className='h-[350px] md:h-[430px] lg:h-[433px] chairmanBgGradient md:rounded-s-[12px] rounded-b-[12px] md:rounded-b-0 flex items-center' >
          <div className='absolute hidden md:block'>
            <Image src={chairmanbg} alt='gradient-left' />
          </div>
          <div className='absolute md:hidden block'>
            <Image src={chairmanbgMobile} alt='gradient-left' />
          </div>
          <div className='w-full lg:w-10/12 xl:w-7/12 lg:ms-[50px] xl:ms-[90px]  text-white flex flex-col gap-[10px] px-[30px] md:px-[30px] lg:px-[20px]'>
            <h3 className='text-[24px] font-[general-sans-medium] leading-[29px]'>CHAIRMAN</h3>
            <div className='flex flex-col gap-[20px] font-[general-sans-medium] text-[14px] lg:text-[18px] leading-[21px] md:leading-[24px]'>
              <p>"We build homes which will be a part of your soul, Reflecting your taste &aspiration .We make sure that every moments you spent at your home is not built on walls and beams, but love and dreams .We don't want to push our ideas to the customers ,we simply want to make what they want" </p>
            </div>
            <div className='flex md:justify-end pt-[20px]'>
              <p className='font-[general-sans-medium] text-[14px] lg:text-[12px] leading-[18px]'>
                A A Abdul Lathif <br />
                <span className='text-[12px] leading-[18px]'>CEO, CIDBI, Thrissur</span> <br />
                <span className='text-[12px] leading-[18px]'>President, CREDAI, Thrissur Chapter</span>
              </p>
            </div>
          </div>
        </div>
        <Image className='-mt-[50px] -mb-[12px] md:hidden block w-full' alt='card-shape' src={chairmanshapeMobile} />
        <div className='bg-cover rounded-t-[12px] md:rounded-t-0 md:rounded-e-[12px] h-[500px] md:h-auto' style={{ backgroundImage: `url(/images/home/chraiman.jpeg)` }}>
          <Image className='h-full -ms-[2px] hidden md:block' alt='card-shape' src={chairmanshape} />
        </div>
      </card>
    </section>
  )
}

export default Chairman