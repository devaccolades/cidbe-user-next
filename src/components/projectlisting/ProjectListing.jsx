'use client'
import React, { useState } from 'react'
import ProjectCard from '../ProjectCard';

function ProjectListing({title,data}) {
    const [numItems, setNumItems] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(4); 

  
    return (
        <main className="bg-[--primary-cl] bg-cover bg-no-repeat md:bg-[url(/images/home/line_background.svg)] -mt-[80px] lg:-mt-[95px]">
            <section className='containers '>
                <h1 className='text-center pt-[120px] text-[16px] lg:text-[32px] font-[clash-display-medium]'>{title}</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full py-[30px]'>
                {data.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}

                </div>
                <div className="pb-[30px] flex justify-end">
                <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
                  >
                    Previous
                  </button>
                  {Array.from({ length: Math.ceil(10/3) }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${currentPage === index + 1 ? 'z-10 bg-gray-100 text-gray-900 cursor-default' : 'hover:text-gray-500'}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(10 / 3)}
                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === Math.ceil(10 / 3) ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
                  >
                    Next
                  </button>
                </nav>
              </div>
            </section>
           
        </main>
    )
}

export default ProjectListing