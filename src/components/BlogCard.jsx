'use client'
import { Card } from '@material-tailwind/react'
import React from 'react'
import Image from 'next/image'
// Icons
import arrow_outward from '../../public/icons/arrow_outward.svg'
// After connect backend sould be removed
import blogimg1 from '../../public/images/home/blogimg1.jpeg'
import clockIcon from '../../public/icons/clock.svg'
function BlogCard() {
  return (
    <Card className='w-full xl:w-[315px] h-[444px] rounded-[12px]'>
        <Image src={blogimg1}  alt='' className='h-[240px] rounded-t-[12px]'/>
        <div className='p-[24px] flex flex-col gap-[12px]'>
            <div className='font-[general-sans-light] text-[#616161] flex justify-between  text-[10px]'>
                <p className='bg-[#EBEBEB] py-[2px] px-[5px] rounded-[6px] flex justify-center items-center'>28/03/2024</p>
                <p className='bg-[#EBEBEB] py-[2px] px-[5px] rounded-[6px] flex flex-row items-center gap-[2px]'><Image src={clockIcon} alt='clock-icon'/><span>2 Min read</span></p>
            </div>
            <p className='text-[18px] h-[72px] leading-[24px] font-[general-sans-light]'>What is The Legal Process for Buying a Flat in Kerala </p>
            <button className='bg-[#EC222A] w-full rounded-[8px] py-[8px] text-white font-[general-sans-regular] flex flex-row gap-[8px] justify-center items-center'>Read more<Image src={arrow_outward} alt='arrow-outward'/></button>
        </div>
    </Card>
  )
}

export default BlogCard
