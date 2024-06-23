import React from 'react'
import "./Home.css"
import ProjectCard from '@/components/ProjectCard'
function FeaturedProject() {
  return (
    <div className='h-[883px] bg-[--primary-cl] text-[--secondary-cl]' style={{ backgroundImage: `url(/images/home/line_background.svg)` }}>
        <div className='w-[90%] md:w-[80%] lg:w-[55%] mx-auto pt-[94px] flex flex-col gap-[10px]'>
            <h3 className='text-[32px] leading-[43px] font-[general-sans-medium]'>Featured Projects</h3>
            <div className='flex flex-row gap-[20px] w-full'>
            <ProjectCard/>
            <ProjectCard/>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProject 