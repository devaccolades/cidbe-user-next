'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// Icons
import arrowIcon from '../../../public/icons/arrow-outward-green.svg'
import { useRouter } from 'next/navigation'
import { getGalaryApi } from '../../services/services'
import NotFound from '../../components/common/NotFound'


function GalaryListing() {
  const router = useRouter()
  const [page_limit, setPage_limit] = useState(2)
  const [total_count, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [galary, setGalary] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getGalaryApi(page, page_limit)
        const { StatusCode, data } = res.data
        if (StatusCode === 6000) {
          setGalary(data)
          setTotal(res.data.total_count)
        } else {
          setGalary([])
        }
      } catch (error) {
        console.log(error);
        setGalary([])
      }
    }
    fetchData()
  }, [page])

  const handleClick = (pageNumber) => {
    setPage(pageNumber);
  };

  function truncateTextByCharacters(text, charLimit) {
    if (!text) return '';

    if (text.length <= charLimit) return text;

    return text.slice(0, charLimit) + '...';
  }

  return (
    <main className="md:bg-[url('/images/achievements/achievements-bg.svg')] bg-cover">
      <div className='containers responsewidth py-[42px] md:py-[82px] flex flex-col gap-[100px]'>
        {galary.length > 0 ? (
          galary.map((galary, index) => (
            <>
              <section key={index} className={`w-full flex flex-col ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-[20px] md:h-[750px]`}>
                <div className='md:w-[40%] flex flex-col gap-[20px]'>
                  <div className="rounded-[8px]  h-[359px] bg-cover bg-center" style={{ backgroundImage: `url(${galary?.images[0]?.image})` }} />
                  <div className='flex flex-col gap-[10px]'>
                    <p className='w-10/12 font-[general-sans-medium] text-[#483C32] text-[16px] lg:text-[24px] leading-[21px] lg:leading-[32px] p'>{galary?.title}</p>
                    <p className='text-[--secondary-cl] text-[10px] bg-[#EBEBEB] flex justify-center items-center rounded-[6px] w-[73px] h-[24px]'>{galary?.date_added}</p>
                  </div>
                  <div className='flex flex-col gap-[50px] lg:w-[96%]'>
                    <p className='font-[general-sans-regular] text-[14px] lg:text-[18px] leading-[21px] lg:leading-[30px]'>{truncateTextByCharacters(galary?.description, 350)}</p>
                    <div className='hidden md:block'>
                      <div className='flex justify-end items-center'>
                        <p className='flex flex-row font-[general-sans-medium] text-[12px] gap-[6px] cursor-pointer' onClick={() => router.push(`/gallery/${galary?.slug}`)}><span>View Full  Gallery</span> <Image src={arrowIcon} className='' alt="" /></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='md:w-[60%] flex flex-col gap-[10px] md:gap-[20px] h-[480px] md:h-full'>
                  <div className='w-full flex flex-row gap-[10px] md:gap-[20px] h-[75%] '>
                    <div className='w-full lg:w-[75%] flex flex-col gap-[10px] md:gap-[20px] '>
                      <div className='w-full h-[35%] flex flex-row gap-[10px] md:gap-[20px]'>
                        <div className="w-[70%] rounded-[8px] h-full bg-cover bg-center" style={{ backgroundImage: `url(${galary?.images[1]?.image})` }} />
                        <div className="w-[30%] rounded-[8px] h-full bg-cover bg-center" style={{ backgroundImage: `url(${galary?.images[2]?.image})` }} />
                      </div>
                      <div className="h-[65%] rounded-[8px] bg-center bg-cover" style={{ backgroundImage: `url(${galary?.images[3]?.image})` }} />
                    </div>
                    <div className='hidden lg:block w-[25%] h-full'>
                      <div className='w-full h-full flex flex-col gap-[10px] md:gap-[20px]'>
                        <div className="h-[70%] w-full rounded-[8px] bg-center bg-cover " style={{ backgroundImage: `url(${galary?.images[4]?.image})` }} ></div>
                        <div className="h-[30%] rounded-[8px] bg-center bg-cover " style={{ backgroundImage: `url(${galary?.images[5]?.image})` }} />
                      </div>
                    </div>
                  </div>
                  <div className='w-full flex flex-row gap-[10px] md:gap-[20px] h-[25%]'>
                    <div className="w-[60%] rounded-[8px] bg-center bg-cover " style={{ backgroundImage: `url(${galary?.images[6]?.image})` }} />
                    <div className="w-[40%] rounded-[8px] bg-center bg-cover" style={{ backgroundImage: `url(${galary?.images[7]?.image})` }} />
                  </div>
                </div>
                <div className='md:hidden block'>
                  <div className='flex justify-center items-center'>
                    <p className='flex flex-row font-[general-sans-medium] text-[12px] gap-[6px] cursor-pointer' onClick={() => router.push(`/gallery/${galary?.slug}`)}><span>View Full  Gallery</span> <Image src={arrowIcon} className='' alt="" /></p>
                  </div>
                </div>
              </section>
            </>
          ))
        ) : (
          <NotFound />
        )}
      </div>
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
            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${page === Math.ceil(10 / 3) ? 'cursor-not-allowed' : 'hover:text-gray-700'}`}
          >
            Next
          </button>
        </nav>
      </div>
    </main>
  )
}

export default GalaryListing