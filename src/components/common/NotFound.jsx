import React from 'react'
import noData from '../../../public/images/notfound/notfoundimage.png'
import Image from 'next/image'
function NotFound() {
  return (
    <section className='flex w-[80%] md:w-[30%] pb-[50px] mx-auto flex-col items-center'>
        <Image src={noData} alt='no-data-found'/>
        <p className='text-[24px] font-[inter-medium]'>Nothing Here!</p>
        <p className='text-center'>There's nothing here yet, but we're building something amazing! 
            Check back soon for updates on our latest projects. For immediate 
            assistance, please contact us at salescidbi@gmail.com
            </p>
    </section>
  )
}

export default NotFound