'use client'
import React from 'react'
import noData from '../../../public/images/notfound/notfoundimage.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
function NotFound() {
  const pathname = usePathname();

  return (
    <section className='flex w-[80%] md:w-[30%] pb-[50px] mx-auto flex-col items-center'>
        <Image src={noData} alt='Apartments in Thrissur'/>
        <p className='text-[24px] font-[inter-medium]'>Nothing Here!</p>
        <p className='text-center'>There's nothing here yet, but we're building something amazing! 
            Check back soon for updates on our latest projects. For immediate 
            assistance, please contact us at <a href={pathname==="/careers" ? "mailto:jobs.cidbi@gmail.com" : "mailto:salescidbi@gmail.com"}>{pathname==="/careers" ? "jobs.cidbi@gmail.com" : "salescidbi@gmail.com"}</a>
            </p>
    </section>
  )
}

export default NotFound