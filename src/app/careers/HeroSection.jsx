import React from 'react'
import Group from '../../../public/images/careers/Group.svg'
import gradiant from '../../../public/images/careers/gradiant.svg'
import Image from 'next/image'
function HeroSection() {
    return (
        <section>
            <div className='h-[100px] -mt-[80px] lg:-mt-[95px] bg-[--primary-cl] -mt' />
            <div className=' bg-[--primary-cl] h-[510px]'>
                <div className='flex flex-row containers'>
                    <div className='w-full h-full text-[--secondary-cl]  relative'>
                        <Image src={gradiant} alt='gradiant' className='absolute'/>
                        <h1 className='font-[clash-display-medium] text-[20px] lg:text-[24px]'>Join Our Team</h1>
                        <p className='font-[general-sans-regular] text-[14px] lg:text-[16px] leading-[21px] lg:leading-[24px]absolute'>
                            At CIDBI, we're not just constructing buildings—we're building
                            careers. Join our dynamic team of professionals dedicated to
                            innovation, excellence, and making a lasting impact. Whether
                            you're an experienced expert or a passionate newcomer, we
                            offer unparalleled opportunities for growth, development,
                            and creativity. Embrace a career where your skills are valued,
                            your contributions are recognized, and your ambitions are
                            supported. Let's create the future together—one project at a time.
                        </p>
                    </div>
                    <div className='w-full flex justify-end items-center h-[510px]'>
                        <Image src={Group} alt='group-image'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection