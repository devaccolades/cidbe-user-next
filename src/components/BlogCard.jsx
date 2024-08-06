'use client'
import { Card } from '@material-tailwind/react'
import React from 'react'
import Image from 'next/image'
// Icons
import arrow_outward from '../../public/icons/arrow_outward.svg'
import clockIcon from '../../public/icons/clock.svg'
import { useRouter } from 'next/navigation'
function BlogCard({ blog }) {
  const router = useRouter()
  return (
    <Card className='w-full  h-[444px] rounded-[12px] '>
      {/* <Image src={blog?.images[0].image}  alt={blog?.images[0].image_alt} className='h-[240px] w-full rounded-t-[12px]'/> */}
      <div className='overflow-hidden rounded-t-[12px]'>
      <div
        className="h-[240px] w-full rounded-t-[12px] bg-cover bg-no-repeat bg-center transition-transform duration-300 ease-in-out hover:scale-110"
        style={{ backgroundImage: `url(${blog?.images[0]?.image})` }}
      />
      </div>
      <div className='p-[24px] flex flex-col gap-[12px]'>
        <div className='font-[general-sans-regular] text-[#616161] flex justify-between  text-[10px]'>
          <p className='bg-[#EBEBEB] py-[2px] px-[5px] rounded-[6px] flex justify-center items-center'>{blog?.date_added}</p>
          <p className='bg-[#EBEBEB] py-[2px] px-[5px] rounded-[6px] flex flex-row items-center gap-[2px]'><Image src={clockIcon} alt='clock-icon' /><span>{blog?.time_to_read} Min read</span></p>
        </div>
        <p className='text-[14px] lg:text-[16px] h-[72px] text-black capitalize leading-[24px] lg:leading-[24px] font-[general-sans-light]'>{blog.title} </p>
        <button onClick={()=>router.push(`/blogs/${blog.slug}`)} className='bg-[#EC222A] w-full rounded-[8px] py-[8px] text-white font-[general-sans-regular] text-[12px] flex flex-row gap-[8px] justify-center items-center'>Read more<Image src={arrow_outward} alt='arrow-outward' /></button>
      </div>
    </Card>
  )
}

export default BlogCard
