'use client'
import { Card } from '@material-tailwind/react'
import React from 'react'
import Image from 'next/image'
// Icons
import arrow_outward from '../../public/icons/arrow_outward.svg'
import clockIcon from '../../public/icons/clock.svg'
function BlogCard({blog}) {
  return (
    <Card className='w-full  h-[444px] rounded-[12px]'>
        <Image src={blog?.thumbnail}  alt={blog?.thumbnail_alt} className='h-[240px] w-full rounded-t-[12px]'/>
        <div className='p-[24px] flex flex-col gap-[12px]'>
            <div className='font-[general-sans-light] text-[#616161] flex justify-between  text-[10px]'>
                <p className='bg-[#EBEBEB] py-[2px] px-[5px] rounded-[6px] flex justify-center items-center'>{blog?.date_added}</p>
                <p className='bg-[#EBEBEB] py-[2px] px-[5px] rounded-[6px] flex flex-row items-center gap-[2px]'><Image src={clockIcon} alt='clock-icon'/><span>{blog?.time_to_read}</span></p>
            </div>
            <p className='text-[18px] h-[72px] leading-[24px] font-[general-sans-light]'>{blog.title} </p>
            <button className='bg-[#EC222A] w-full rounded-[8px] py-[8px] text-white font-[general-sans-regular] flex flex-row gap-[8px] justify-center items-center'>Read more<Image src={arrow_outward} alt='arrow-outward'/></button>
        </div>
    </Card>
  )
}

export default BlogCard
