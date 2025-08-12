import React from 'react';
import Image from 'next/image';
import tickIcon from '../../../public/images/product-view/smartFeature.svg';

function SmartFeature({features}) {
  return (
    <div className="containers custom-res py-[20px] mb-[30px] bg-white">
      <h2 className="text-[24px] font-[clash-display-medium] mb-[20px]">Smart features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[96px] gap-y-[16px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start"
          >
            <div className="w-[24px] h-[24px] mr-[12px] flex-shrink-0 mt-[2px]">
              <Image src={tickIcon} alt="flats in Thrissur" width={24} height={24} />
            </div>
            <p className="text-[14px] lg:text-[16px] text-[--secondary-cl] font-[general-sans-regular] leading-[20px]">{feature?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmartFeature;