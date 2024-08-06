import React from 'react';
import Image from 'next/image';

function Amenities({amenities}) {
  return (
    <div className="containers custom-res py-[20px] mb-[30px]">
      <h1 className='text-[24px] font-[clash-display-medium] mb-[20px]'>Amenities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-[30px]">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-row sm:flex-col lg:flex-row items-center space-x-4 sm:space-x-0 sm:space-y-4 lg:space-y-0 lg:space-x-4"
          >
            <div className="bg-[#BFD8BD] w-[60px] h-[52px] flex items-center justify-center border border-black rounded-lg flex-shrink-0">
              <Image src={amenity?.icon} alt={`${amenity.image_alt} Icon`} unoptimized width={24} height={24} />
            </div>
            <p className="text-base sm:text-[14px] lg:text-[16px] font-[general-sans-medium] whitespace-nowrap">
              {amenity.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;