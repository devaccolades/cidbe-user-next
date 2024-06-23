import React from 'react'
import './Home.css'
import Image from 'next/image'

// Images
import chairmanshape from "../../../public/images/home/chairmanshape.svg"
import chairmanbg from "../../../public/images/home/chairmanbg.svg"
function Chairman() {
  return (
    <section className='h-[614px] flex justify-center items-center'>
      <card className='relative containers shadow-2xl flex flex-col-reverse lg:grid lg:grid-cols-[1fr,435px] rounded-[12px]'>
        <div className='h-[430px] lg:h-[433px] chairmanBgGradient rounded-s-[12px] flex items-center' >
          <div className='absolute'>
            <Image src={chairmanbg} alt='gradient-left' />
          </div>
          <div className='w-full lg:w-10/12 xl:w-7/12 lg:ms-[50px] xl:ms-[90px]  text-white flex flex-col gap-[10px] px-[20px]'>
            <h3 className='text-[24px] font-[general-sans-medium] leading-[29px]'>CHAIRMAN</h3>
            <div className='flex flex-col gap-[20px] font-[general-sans-medium] text-[14px] lg:text-[18px] leading-[24px]'>
              <p>"We build homes which will be a part of your soul, Reflecting your taste &aspiration .We make sure that every moments you spent at your home is not built on walls and beams, but love and dreams .We don't want to push our ideas to the customers ,we simply want to make what they want" </p>
            </div>
            <div className='flex justify-end pt-[20px]'>
              <p className='font-[general-sans-medium] text-[14px] lg:text-[12px] leading-[18px]'>
                A A Abdul Lathif <br />
                CEO, CIDBI, Thrissur <br />
                President, CREDAI, Thrissur Chapter
              </p>
            </div>
          </div>
        </div>
        <div className='bg-cover rounded-e-[12px] ' style={{ backgroundImage: `url(/images/home/chraiman.jpeg)` }}>
          <Image className='h-full -ms-[2px]' alt='card-shape' src={chairmanshape} />
        </div>
      </card>
    </section>
  )
}

export default Chairman