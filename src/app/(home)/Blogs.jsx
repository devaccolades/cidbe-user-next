import BlogCard from '@/components/BlogCard'
import React from 'react'

function Blogs() {
  return (
    <section className='h-[651px] bg-[--primary-cl]'>
        <div className='containers py-[40px]'>
            <h4 className='text-[30px] text-center font-[general-sans-regular]'>BLOGS</h4>
            <div className='flex flex-row gap-[20px] py-[10px]'>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
            <p className='py-[20px] text-center underline text-[16px] font-[general-sans-regular]'>View all</p>
        </div>
    </section>
  )
}

export default Blogs