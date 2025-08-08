'use client'
import { Card } from '@material-tailwind/react'
import React from 'react'
import Image from 'next/image'
// Icons
import arrow_outward from '../../public/icons/arrow_outward.svg'
import clockIcon from '../../public/icons/clock.svg'
import Link from 'next/link'
function BlogCard({ blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <Card className='w-full group h-[444px] rounded-[12px] blog-card cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1'>
        <div className='overflow-hidden rounded-t-[12px] w-full'>
          <Image
            src={blog?.images[0]?.image}
            width={250} height={250}
            alt="flats in Thrissur"
            unoptimized={true}
            className='h-[240px] w-full rounded-t-[12px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110' />
        </div>
        <div className='p-[24px] flex flex-col gap-[12px]'>
          <div className='font-[general-sans-regular] text-[#616161] flex justify-between  text-[12px]'>
            <p className='bg-[#EBEBEB] py-[2px] px-[5px] rounded-[6px] flex justify-center items-center'>{blog?.date_added}</p>
            <p className='bg-[#EBEBEB] py-[2px] px-[5px] rounded-[6px] flex flex-row items-center gap-[2px]'><Image src={clockIcon} alt='flats in Thrissur' /><span>{blog?.time_to_read} Min read</span></p>
          </div>
          <p className='text-[14px] lg:text-[16px] h-[72px] text-black capitalize leading-[24px] lg:leading-[24px] font-[general-sans-light] line-clamp-3'>
            {/* {blog.title.length > 70 ? `${blog.title.slice(0, 70)}...` : blog.title} */}
            {blog.title}
          </p>

          <button className='bg-[#EC222A] w-full rounded-[8px] py-[8px] text-white font-[general-sans-regular] text-[14px] flex flex-row gap-[8px] justify-center items-center'>Read more<Image src={arrow_outward} alt='flat for sale in Thrissur' /></button>
        </div>
      </Card>
    </Link>
  )
}

export default BlogCard
