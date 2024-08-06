'use client'
import React, { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard';
import { getCompletedProject, getFeaturedProject, getOngoingProject, getReadyToOccupyProject, getUpcomingProject } from '../../services/services';
import NotFound from '../../components/common/NotFound'
import { usePathname } from 'next/navigation';
import './ProjectList.css'
function ProjectListing({ title }) {
  const pathname = usePathname();
  const [page, setPage] = useState(1)
  const [page_limit, setPage_limit] = useState(pathname==="/completed-projects"? 6 : 3)
  const [total_count, setTotal] = useState(0)
  const [projects, setprojects] = useState('')
  const fetchData = async () => {
    try {
      let res = ""
      if (pathname === '/featured-projects') {
        res = await getFeaturedProject(page, page_limit)
      }else if (pathname === '/ongoing-projects'){
        res = await getOngoingProject(page, page_limit)
      }else if (pathname === '/upcoming-projects'){
        res = await getUpcomingProject(page,page_limit)
      }else if (pathname === '/completed-projects'){
        res  = await getCompletedProject(page,page_limit)
      }else if (pathname === '/ready-to-occupy'){
        res = await getReadyToOccupyProject(page,page_limit)
      }
      const { StatusCode, data } = res.data
      if (StatusCode === 6000) {
        setprojects(data)
        setTotal(res.data.total_count)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } else {
        setprojects([])
      }
    } catch (error) {
      console.log(error);
      setprojects([])
    }
  }
  useEffect(() => {
    fetchData()
  }, [page])
  const handleClick = (pageNumber) => {
    setPage(pageNumber);
  };
  return (
    <main className="bg-[--primary-cl] bg-cover bg-no-repeat project-list-bg -mt-[80px] lg:-mt-[95px]">
      <section className='containers '>
        <h1 className='text-center pt-[120px] text-[16px] lg:text-[32px] font-[clash-display-medium]'>{title}</h1>
        {projects.length > 0 ?(
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full py-[30px]'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        ):(
          <NotFound />

        )}

      </section>
      <div className="pb-[30px] flex justify-end containers">
        <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
          <button
            onClick={() => handleClick(page - 1)}
            disabled={page === 1}
            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${page === 1 ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
          >
            Previous
          </button>
          {Array.from({ length: Math.ceil(total_count / page_limit) }, (_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index + 1)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${page === index + 1 ? 'z-10 bg-gray-100 text-gray-900 cursor-default' : 'hover:text-gray-500'}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handleClick(page + 1)}
            disabled={page === Math.ceil(total_count / page_limit)}
            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${page === Math.ceil(total_count / page_limit) ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
          >
            Next
          </button>
        </nav>
      </div>

    </main>
  )
}

export default ProjectListing