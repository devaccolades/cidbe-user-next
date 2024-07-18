import React from 'react';
import Image from 'next/image';
import First from '../../../public/images/csr/First.svg';
import Second from '../../../public/images/csr/Second.svg';
import Third from '../../../public/images/csr/Third.svg';
import Fourth from '../../../public/images/csr/Fourth.svg';

function FocusAreas() {
  const focusAreas = [
    { icon: Third, title: 'Environmental Sustainability' },
    { icon: Fourth, title: 'Employee Well-being' },
    { icon: First, title: 'Community Engagement' },
    { icon: Second, title: 'Education' },
  ];

  return (
    <section className='bg-[url(/images/csr/csrbackground.svg)] min-h-screen'>
      <div className='containers px-5 py-12'>
        <h1 className='text-center font-[clash-display-medium] text-2xl sm:text-3xl lg:text-4xl mb-8'>Our Focus Areas</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 lg:flex lg:justify-between'>
          {focusAreas.map((area, index) => (
            <div key={index} className='flex flex-row sm:flex-col lg:flex-row items-center space-x-4 sm:space-x-0 sm:space-y-4 lg:space-y-0 lg:space-x-4'>
              <div className='bg-[#BFD8BD] w-[60px] h-[52px] flex items-center justify-center border border-black rounded-lg flex-shrink-0'>
                <Image src={area.icon} alt={`${area.title} Icon`} width={24} height={24} />
              </div>
              <p className='text-base sm:text-sm lg:text-xs xl:text-sm font-[clash-display-medium] whitespace-nowrap'>{area.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;