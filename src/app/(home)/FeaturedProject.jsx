'use client'
import React, { useEffect, useState } from 'react'
import "./Home.css"
import ProjectCard from '@/components/ProjectCard'

// after connect backend you should be remove this images
import carorcel1 from '../../../public/images/home/carorcel1.jpeg'
import carorcel2 from '../../../public/images/home/carorcel2.webp'
import carorcel3 from '../../../public/images/home/carorcel3.jpeg'
function FeaturedProject() {
  const [numItems, setNumItems] = useState(1);

  const featuredProject = [
    { id: 1, name: "CASSIA", sub_name: "Unmatched Elegance", rera_number: "K.RERA/PRJ/TSR/043/2023", location: "Near Daya Hospital", thumbnail: 'images/home/carorcel1.jpeg', thumbnail_alt: "", bhk: "2,3 & 4", area_from: "1,159", area_to: "2,548", status: "ongoing" },
    { id: 2, name: "CANDOR", sub_name: "A PROMISE OF HAPPINESS", rera_number: "K-RERA/PRJ/112/2021", location: "Poonkunnam", thumbnail: 'images/home/carorcel2.webp', thumbnail_alt: "", bhk: "2 & 3", area_from: "1,196", area_to: "1,769", status: "ongoing" },
    { id: 3, name: "CHALET", sub_name: "Exclusive Amenities", rera_number: "K-RERA/PRJ/TSR/059/2021", location: "Kannamkulangara", thumbnail: 'images/home/carorcel3.jpeg', thumbnail_alt: "", bhk: "2 & 3", area_from: "992", area_to: "1,340", status: "ready to occupy" },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumItems(1);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1700) {
        setNumItems(2);
      } else {
        setNumItems(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className=' bg-[--primary-cl] text-[--secondary-cl] pt-[80px] pb-[30px]' style={{ backgroundImage: `url(/images/home/line_background.svg)` }}>
      <div className='w-[90%] md:w-[90%] lg:w-[60%] xl:w-[55%] mx-auto flex flex-col gap-[20px]'>
        <h3 className='text-[32px] leading-[43px] font-[general-sans-medium]'>Featured Projects</h3>
        <div className='flex flex-row gap-[20px] w-full'>
          {featuredProject.slice(0, numItems).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <p className='text-[16px] font-[general-sans-medium] text-center underline pt-[30px]'>View All</p>
      </div>
    </div>
  )
}

export default FeaturedProject 