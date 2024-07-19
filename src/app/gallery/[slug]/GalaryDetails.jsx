'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import image1 from '../../../../public/images/gallery/image1.jpeg'
import image2 from '../../../../public/images/gallery/image2.jpeg'
import image3 from '../../../../public/images/gallery/image3.jpeg'
import image4 from '../../../../public/images/gallery/image4.jpeg'
import image5 from '../../../../public/images/gallery/image5.jpeg'
import image6 from '../../../../public/images/gallery/image6.jpeg'
import image7 from '../../../../public/images/gallery/image7.jpeg'
import image8 from '../../../../public/images/gallery/image9.jpeg'
import Image from 'next/image'

function GalaryDetails() {
    const router = useRouter()
    const gallaryData = [
        { image: image1 },
        { image: image2 },
        { image: image3 },
        { image: image4 },
        { image: image5 },
        { image: image6 },
        { image: image7 },
        { image: image8 },
    ]
    return (
        <main className="bg-[--primary-cl] bg-cover bg-no-repeat md:bg-[url(/images/home/line_background.svg)]">
            <section className='containers py-[60px]'>
                <div className='font-[general-sans-medium] flex flex-row justify-between'>
                    <p className='text-[16px] lg:text-[24px] leading-[21px] lg:leading-[32px] text-[--secondary-cl] w-full lg:w-[450px]'>Clarion / Cocoon Document Handing Over Ceremony</p>
                    <button className='h-[40px] w-[100px] bg-[--secondary-cl] text-white text-[15px] font-bold rounded-[6px] hidden lg:block' onClick={() => router.push('/gallery')}>Back</button>
                </div>
                <p className='text-[--secondary-cl] text-[10px] bg-[#EBEBEB] flex justify-center items-center rounded-[6px] w-[73px] h-[24px] mt-[15px]'>28/03/2024</p>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[20px] py-[50px]'>
                    {gallaryData.map((image, index) => (
                        <div key={index} className='p-[5px] bg-white rounded-[8px]'>
                            <Image src={image?.image} alt='' className='w-full h-full rounded-[8px]' />
                        </div>
                    ))}
                </div>
                <button className='h-[40px] w-[100px] bg-[--secondary-cl] text-white text-[15px] font-bold rounded-[6px] lg:hidden block' onClick={() => router.push('/gallery')}>Back</button>
            </section>
        </main>
    )
}

export default GalaryDetails