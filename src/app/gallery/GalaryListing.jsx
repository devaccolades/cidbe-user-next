'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// Icons
import arrowIcon from '../../../public/icons/arrow-outward-green.webp'
import { useRouter } from 'next/navigation'
import { getGalaryApi } from '../../services/services'
import NotFound from '../../components/common/NotFound'
import Link from 'next/link'


function GalaryListing({ galary = [], totalCount, currentPage, pageSize }) {
  const visiblePages = Array.from(
    { length: 5 },
    (_, i) => currentPage - 2 + i
  ).filter((pages) => pages > 0 && pages <= Math.ceil(totalCount / pageSize));

  function truncateTextByCharacters(text, charLimit) {
    if (!text) return '';

    if (text.length <= charLimit) return text;

    return text.slice(0, charLimit) + '...';
  }

  return (
    <main className="galary-bg bg-cover -mt-[80px] lg:-mt-[95px]">
      <h1 className='text-[18px] lg:text-[30px] text-center font-[clash-display-medium] pt-[90px] lg:pt-[130px] text-[--secondary-cl]'>GALLERY</h1>
      <div className='containers responsewidth pt-[30px] pb-[30px] md:pt-[42px] md:pb-[42px] flex flex-col gap-[50px] md:gap-[100px]'>
        {galary.length > 0 ? (
          galary.map((galary, index) => (
            <>
              <section key={index} className={`w-full flex flex-col ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-[20px] md:h-[750px]`}>
                <div className='md:w-[40%] flex flex-col gap-[20px]'>
                  <div className=' overflow-hidden rounded-[8px]'>
                    <div className="rounded-[8px] h-[200px] md:h-[359px] bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110" style={{ backgroundImage: `url(${galary?.images[0]?.image})` }} />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <p className='w-10/12 font-[general-sans-medium] text-[#483C32] text-[16px] lg:text-[24px] leading-[21px] lg:leading-[32px]'>{galary?.title}</p>
                    <p className='text-[--secondary-cl] text-[10px] bg-[#EBEBEB] flex justify-center items-center rounded-[6px] w-[73px] h-[24px] font-[general-sans-regular]'>{galary?.date_added}</p>
                  </div>
                  <div className='flex flex-col gap-[50px] lg:w-[96%]'>
                    <p className='font-[general-sans-regular] text-[14px] lg:text-[18px] leading-[21px] text-[#483C32] lg:leading-[30px]'>{truncateTextByCharacters(galary?.description, 350)}</p>
                    <div className='hidden md:block'>
                      <div className='flex justify-end items-center'>
                        <Link href={`/gallery/${galary?.slug}`}><p className='flex flex-row font-[general-sans-medium] text-[12px] gap-[6px] cursor-pointer'><span>View Full  Gallery</span> <Image src={arrowIcon} className='' alt="Apartments in Thrissur" /></p></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='md:w-[60%] flex flex-col gap-[10px] md:gap-[20px] h-[480px] md:h-full'>
                  <div className='w-full flex flex-row gap-[10px] md:gap-[20px] h-[75%] '>
                    <div className='w-full lg:w-[75%] flex flex-col gap-[10px] md:gap-[20px] '>
                      <div className='w-full h-[35%] flex flex-row gap-[10px] md:gap-[20px]'>
                        <div className='overflow-hidden w-[70%] rounded-[8px]'>
                          <div className=" h-full bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110" style={{ backgroundImage: `url(${galary?.images[1]?.image})` }} />
                        </div>
                        <div className='overflow-hidden w-[30%] rounded-[8px]'>
                          <div className=" h-full bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110" style={{ backgroundImage: `url(${galary?.images[2]?.image})` }} />
                        </div>
                      </div>
                      <div className='overflow-hidden h-[65%] rounded-[8px]'>
                        <div className="h-full bg-center bg-cover transition-transform duration-300 ease-in-out hover:scale-110" style={{ backgroundImage: `url(${galary?.images[3]?.image})` }} />
                      </div>
                    </div>
                    <div className='hidden lg:block w-[25%] h-full'>
                      <div className='w-full h-full flex flex-col gap-[10px] md:gap-[20px]'>
                        <div className='overflow-hidden h-[70%] w-full rounded-[8px]'>
                          <div className="h-full  bg-center bg-cover transition-transform duration-300 ease-in-out hover:scale-110" style={{ backgroundImage: `url(${galary?.images[4]?.image})` }} ></div>
                        </div>
                        <div className='overflow-hidden h-[30%] rounded-[8px]'>
                          <div className="h-full bg-center bg-cover transition-transform duration-300 ease-in-out hover:scale-110" style={{ backgroundImage: `url(${galary?.images[5]?.image})` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full flex flex-row gap-[10px] md:gap-[20px] h-[25%]'>
                    <div className='overflow-hidden w-[60%] rounded-[8px]'>
                      <div className="w-full h-full rounded-[8px] bg-center bg-cover transition-transform duration-300 ease-in-out hover:scale-110" style={{ backgroundImage: `url(${galary?.images[6]?.image})` }} />
                    </div>
                    <div className='overflow-hidden w-[40%] rounded-[8px]'>
                      <div className="h-full bg-center bg-cover transition-transform duration-300 ease-in-out hover:scale-110" style={{ backgroundImage: `url(${galary?.images[7]?.image})` }} />
                    </div>
                  </div>
                </div>
                <div className='md:hidden block'>
                  <div className='flex justify-center items-center'>
                    <Link href={`/gallery/${galary?.slug}`}> <p className='flex flex-row font-[general-sans-medium] text-[12px] gap-[6px] cursor-pointer'><span>View Full  Gallery</span> <Image src={arrowIcon} className='' alt="Apartments in Thrissur" /></p></Link>
                  </div>
                </div>
              </section>
            </>
          ))
        ) : (
          <NotFound />
        )}
      </div>
      <div className="pb-[30px] flex justify-center md:justify-end containers">
        <ul className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
          <li>
            <Link
              href={currentPage > 1 ? `/gallery?page=${currentPage - 1}` : '#'}
              onClick={(e) => {
                if (currentPage === 1) {
                  e.preventDefault();
                }
              }}
              className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:text-gray-700'
                }`}
            >
              Previous
            </Link>
          </li>

          {visiblePages.map((pageNumber) => (
            <li key={pageNumber}>
              <Link
                href={`/gallery?page=${pageNumber}`}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300  text-sm font-medium  ${pageNumber === currentPage ? 'z-10 bg-[var(--primary-cl)] border-white text-white hover:text-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-500'}`}
              >
                {pageNumber}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={currentPage === Math.ceil(totalCount / pageSize) ? '#' : `/gallery?page=${currentPage + 1}`}
              onClick={(e) => {
                if (currentPage === Math.ceil(totalCount / pageSize)) {
                  e.preventDefault();
                }
              }}
              className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === Math.ceil(totalCount / pageSize) ? 'cursor-not-allowed' : 'hover:text-gray-700'
                }`}
            >
              Next
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default GalaryListing