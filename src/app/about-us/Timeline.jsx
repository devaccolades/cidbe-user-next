import React from 'react';
import './Timeline.css';
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
  const data = [
    { image: Coral, year: 2007, name: "Coral" },
    { image: Coronet, year: 2007, name: "Coronet" },
    { image: Chaitram, year: 2007, name: "Chaitram" },
    { image: Cedar, year: 2007, name: "Cedar" },
    { image: Chiraag, year: 2007, name: "Chiraag" },
    { image: Cocoon, year: 2007, name: "Cocoon" },
    { image: Cinthia, year: 2007, name: "Cinthia" },
    { image: Clarion, year: 2007, name: "Clarion" },
    { image: Credence, year: 2007, name: "Credence" },
  ]
  return (
    <>
      <section className="containers py-8 flex overflow-x-auto">
        <div className="relative min-w-[547px] w-[547px] h-[404px] overflow-x-auto">
          <Image src={branch} alt='' className='absolute' />
          <div className='flex flex-col justify-between h-full items-center'>
            <div className='ps-[9px] w-6/12 h-[111px]'>
              <Image src={Credence} alt='' className='w-[147px] h-[111px]' />
              <p className='font-[general-sans-regular] text-[20px]'>Cocoon</p>
            </div>
            <div className='flex flex-col-reverse w-[60%] h-[160px] justify-between'>
              <p className='text-[20px] self-start'>2013</p>
              <p className='text-[20px] self-end'>2014</p>
            </div>
            <div className='pe-[1px] w-6/12 h-[111px] flex flex-col items-end '>
              <p className='font-[general-sans-regular] text-[20px] -mt-[30px]'>Cocoon</p>
              <Image src={Credence} alt='' className='w-[147px] h-[111px]' />
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default Timeline;
