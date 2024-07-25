'use client'
import React, { useEffect, useState } from 'react'
import NotFound from '../../components/common/NotFound'
import { getAchievementsApi } from '../../services/services'
function AchievementsListing() {
    const [achievements, setAchievements] = useState([])
    const [page_limit, setPage_limit] = useState(window.innerWidth < 1023 ? 4 : 8)
    const [total_count, setTotal] = useState(0)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAchievementsApi(page, page_limit)
                const { StatusCode, data } = res.data
                if (StatusCode === 6000) {
                    setAchievements(data)
                    setTotal(res.data.total_count)
                } else {
                    setAchievements([])
                }
            } catch (error) {
                console.log(error);
                setAchievements([])
            }
        }
        fetchData()
    }, [page])
    const handleClick = (pageNumber) => {
        setPage(pageNumber);
    };
    return (
        <main className="bg-white -mt-[80px] lg:-mt-[95px] md:bg-[url('/images/achievements/achievements-bg.svg')] bg-cover">
            <h4 className='text-[16px] lg:text-[24px] text-center font-[clash-display-medium] pt-[90px] lg:pt-[130px] text-[--secondary-cl]'>ACHIEVEMENTS</h4>
            {achievements.length > 0 ? (
                <section className='containers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] py-[30px] lg:py-[70px]'>
                    {achievements.map((achi, index) => (
                        <div key={index} className='rounded-[16px] card-shadow h-full w-auto'>
                            <div
                                className="h-[350px] bg-center bg-cover rounded-t-[16px]"
                                style={{ backgroundImage: `url(${achi?.image})` }}
                            />
                            <div className='w-full p-[24px] flex flex-col gap-[12px] font-[general-sans-regular] bg-white rounded-b-[16px]'>
                                <p className='rounded-[6px] flex justify-center items-center text-[#616161] w-[73px] h-[24px] text-[10px]  bg-[#EBEBEB]'>28/03/2024</p>
                                <p className='text-[14px] leading-[18px] text-[#483C32]'>{achi?.title}</p>
                            </div>
                        </div>
                    ))}

                </section>
            ) : (
                <NotFound />
            )}
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

export default AchievementsListing