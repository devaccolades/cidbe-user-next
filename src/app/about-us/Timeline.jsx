'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import branch from '../../../public/images/about/braches.svg'

// After Connecting to backend should be remove 
import Coral from '../../../public/images/about/Coral.jpg'
import Coronet from '../../../public/images/about/Coronet.JPG'
import Chaitram from '../../../public/images/about/Chaitram.JPG'
import Cedar from '../../../public/images/about/Cedar.JPG'
import Chiraag from '../../../public/images/about/Chiraag.JPG'
import Cocoon from '../../../public/images/about/Cocoon.JPG'
import Cinthia from '../../../public/images/about/Cinthia.JPG'
import Clarion from '../../../public/images/about/Clarion.jpg'
import Credence from '../../../public/images/about/Credence.JPG'
function Timeline() {
  const [listing,setListing] = useState([])
  const data = [
    { image: Coral, year: 2007, name: "Coral" },
    { image: Coronet, year: 2010, name: "Coronet" },
    { image: Chaitram, year: 2011, name: "Chaitram" },
    { image: Cedar, year: 2013, name: "Cedar" },
    { image: Chiraag, year: 2015, name: "Chiraag" },
    { image: Cocoon, year: 2015, name: "Cocoon" },
    { image: Clarion, year: 2017, name: "Clarion" },
    { image: Cinthia, year: 2018, name: "Cinthia" },
    { image: Credence, year: 2017, name: "Credence" },
  ]

   useEffect(()=>{
    const newState = [];
    for (let i = 0; i < data.length; i += 2) {
      newState.push(data.slice(i, i + 2));
    }
    setListing(newState)
  },[])

  return (
    <>
      <section className="containers py-8 flex overflow-x-auto custom-scrollbar">
        {listing.map((list,index)=>(
          <div className="relative min-w-[547px] -ms-[2px] w-[547px] h-[404px] overflow-x-auto">
          <Image src={branch} alt='' className='absolute' />
          <div className='flex flex-col justify-between h-full items-center'>
            <div className='ps-[9px] w-6/12 h-[111px]'>
              <Image src={list[0].image} alt='' className='w-[147px] h-[111px] rounded-[8px]' />
              <p className='font-[general-sans-regular] text-[20px]'>{list[0]?.name}</p>
            </div>
            <div className='flex flex-col-reverse w-[60%] h-[160px] justify-between'>
              <p className='text-[20px] self-start'>{list[0]?.year}</p>
              <p className='text-[20px] self-end'>{list[1]?.year}</p>
            </div>
            <div className='pe-[1px] w-6/12 h-[111px] flex flex-col items-end '>
              <p className='font-[general-sans-regular] text-[20px] -mt-[30px]'>{list[1]?.name}</p>
              {list[1]?.image&&<Image src={list[1]?.image} alt='' className='w-[147px] h-[111px] rounded-[8px]' />}
            </div>
          </div>
        </div>
        ))}
      </section>
    </>
  );
}

export default Timeline;
