'use client'
import React from 'react'
import './Home.css'
import Image from 'next/image'

// Images
import chairmanshape from "../../../public/images/home/chairmanshape.svg"
import chairmanshapeMobile from "../../../public/images/home/chairmanshapeMobile.svg"
import chairmanbg from "../../../public/images/home/chairmanbg.svg"
import chairmanbgMobile from "../../../public/images/home/chairmanbgMobile.svg"
import chraimanImage from "../../../public/images/home/chair.jpeg"

import { Fade } from "react-reveal";

function Chairman() {
  return (
    <Fade bottom delay={200}>
    <section className='py-[30px] lg:py-[100px] flex justify-center items-center'>
      <card className='relative responsive containers shadow-2xl flex flex-col-reverse md:grid md:grid-cols-[1fr,350px] lg:grid-cols-[1fr,435px] rounded-[12px]'>
        <div className='h-[450px] md:h-[430px] lg:h-[433px] chairmanBgGradient rounded-b-[12px] md:rounded-br-none md:rounded-s-[12px]  flex items-center' >
          <div className='absolute hidden md:block -z-0'>
            <Image src={chairmanbg} alt='gradient-left' />
          </div>
          {/* <div className='absolute md:hidden block'>
            <Image src={chairmanbgMobile} className='' alt='gradient-left' />
          </div> */}
          <div className='w-full md:w-[80%] chaiman-cards mx-auto text-white flex flex-col gap-[6px] md:gap-[10px] px-[30px] md:px-[30px] lg:px-[20px]'>
          <Fade bottom delay={300}>
            <h3 className='text-[24px] font-[general-sans-medium] leading-[29px]'>CHAIRMAN</h3>
            </Fade>
            <div className='flex flex-col gap-[20px] font-[general-sans-medium] description text-[14px] lg:text-[18px] leading-[21px] md:leading-[24px]'>
            <Fade bottom delay={400}>
              <p>
                Welcome to CIDBI.
                We drive forward with our commitment to innovation and excellence. Our journey is built on integrity, quality, and customer satisfaction.
                At CIDBI, we build homes that become a part of your soul, reflecting your taste and aspirations. We ensure that every moment you spend in your home is not built with walls and beams, but with love and dreams. We don't push our ideas; we create what you want.
                Thank you for your trust and support as we continue to excel in the industries we serve.
                Warm regards,
              </p>
              </Fade>
            </div>
            <div className='flex md:justify-end name-sectio pt-[20px]'>
            <Fade bottom delay={500}>
              <p className='font-[general-sans-medium] text-[14px] lg:text-[12px] leading-[18px]'>
                <span className='text-[14px]'>A A Abdul Lathif</span> <br />
                <span className='text-[12px] leading-[18px]'>CEO, CIDBI, Thrissur</span> <br />
                <span className='text-[12px] leading-[18px]'>Executive Committee, CREDAI, Thrissur Chapter</span>
              </p>
              </Fade>
            </div>
          </div>
        </div>
        <Image className='min-w-full align-bottom -mt-[10%] -mb-[5%] md:hidden block z-20' alt='card-shape' src={chairmanshapeMobile} />
        <div className='bg-cover bg-top rounded-t-[12px] md:rounded-t-0 md:rounded-e-[12px] h-[400px] md:h-auto z-10' style={{ backgroundImage: `url(${chraimanImage.src})` }}>
          <Image className='h-full -ms-[2px] hidden md:block' alt='card-shape' src={chairmanshape} />
        </div>
      </card>
    </section>
    </Fade>
  )
}

export default Chairman