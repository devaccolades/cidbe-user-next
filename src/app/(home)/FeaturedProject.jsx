'use client'
import React, { useEffect, useState } from 'react'
import ProjectCard from '../../components/ProjectCard'
import { useRouter } from 'next/navigation'
import NotFound from '../../components/common/NotFound'
import { getFeaturedProject } from '../../services/services'
import { Fade } from "react-reveal";
import { throttle } from 'lodash';

import "./Home.css"

function FeaturedProject() {
  const router = useRouter()
  const [numItems, setNumItems] = useState(window.innerWidth < 768 ? 1:window.innerWidth >= 768 && window.innerWidth <= 1399 ? 2 :3 );
  const [featuredProject, setFeaturedProject] = useState([])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumItems(1);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1399) {
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

  const fetchData = async () =>{
    try {
      const res = await getFeaturedProject(1,numItems)
      const { StatusCode, data } = res.data
      setFeaturedProject(StatusCode === 6000 ? data : []);
    } catch (error) {
      setFeaturedProject([])
    }
  }
  useEffect(()=>{
    fetchData()
  },[numItems])
  return (
    <Fade bottom delay={200}>
    <div className=' bg-[--primary-cl] text-[--secondary-cl] pt-[40px] md:pt-[80px] pb-[30px] main-featurend-bg'>
      <div className='w-[90%] md:w-[90%] responsive lg:w-[60%] xl:w-[55%] mx-auto flex flex-col gap-[20px]'>
      <Fade bottom delay={300}>
        <h2 className='text-[32px] leading-[43px] font-[general-sans-medium]'>Featured Projects</h2>
        </Fade>
        {featuredProject.length > 0 ?(
          <div className='flex flex-row gap-[20px] w-full'>
            {featuredProject.slice(0, numItems).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ):(
        <NotFound />
        )}
        <p className='text-[16px] font-[general-sans-medium] text-center underline pt-[30px] cursor-pointer' onClick={() => router.push('/featured-projects')}>View All</p>
      </div>
    </div>
    </Fade>
  )
}

export default FeaturedProject 