import React from 'react';
import Image from 'next/image';
import first from '../../../public/images/product-view/Deatiles Icons/1.svg';
import second from '../../../public/images/product-view/Deatiles Icons/2.svg';
import third from '../../../public/images/product-view/Deatiles Icons/3.svg';
import fourth from '../../../public/images/product-view/Deatiles Icons/4.svg';
import fifth from '../../../public/images/product-view/Deatiles Icons/5.svg';
import sixth from '../../../public/images/product-view/Deatiles Icons/6.svg';
import seventh from '../../../public/images/product-view/Deatiles Icons/7.svg';
import eighth from '../../../public/images/product-view/Deatiles Icons/8.svg';
import ninth from '../../../public/images/product-view/Deatiles Icons/9.svg';
import tenth from '../../../public/images/product-view/Deatiles Icons/10.svg';
import eleventh from '../../../public/images/product-view/Deatiles Icons/11.svg';
import twelfth from '../../../public/images/product-view/Deatiles Icons/12.svg';
import thirteenth from '../../../public/images/product-view/Deatiles Icons/13.svg';
import fourteenth from '../../../public/images/product-view/Deatiles Icons/14.svg';

// Array with 14 different amenities
const amenitiesDeatiles = [
  { icon: first, title: 'POOL LOUNGE' },
  { icon: second, title: 'MEETING HALL' },
  { icon: third, title: 'GAMING ROOM' },
  { icon: fourth, title: 'MEETING HALL' },
  { icon: fifth, title: '250M JOGGING PARK' },
  { icon: sixth, title: 'INTERCOM' },
  { icon: seventh, title: 'CCTV SURVEILLANCE' },
  { icon: eighth, title: 'INTERCOM' },
  { icon: ninth, title: 'BARBEQUE CORNER' },
  { icon: tenth, title: 'KIDS POOL' },
  { icon: eleventh, title: 'BARBEQUE CORNER' },
  { icon: twelfth, title: 'KIDS POOL' },
  { icon: thirteenth, title: 'OPEN GYM' },
  { icon: fourteenth, title: '70% OPEN SPACE' }
];

function Amenities() {
  return (
    <div className="containers custom-res py-[20px] mb-[30px]">
      <h1 className='text-[24px] font-[clash-display-medium] mb-[20px]'>Amenities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-[30px]">
        {amenitiesDeatiles.map((area, index) => (
          <div
            key={index}
            className="flex flex-row sm:flex-col lg:flex-row items-center space-x-4 sm:space-x-0 sm:space-y-4 lg:space-y-0 lg:space-x-4"
          >
            <div className="bg-[#BFD8BD] w-[60px] h-[52px] flex items-center justify-center border border-black rounded-lg flex-shrink-0">
              <Image src={area.icon} alt={`${area.title} Icon`} width={24} height={24} />
            </div>
            <p className="text-base sm:text-[14px] lg:text-[16px] font-[general-sans-medium] whitespace-nowrap">
              {area.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;