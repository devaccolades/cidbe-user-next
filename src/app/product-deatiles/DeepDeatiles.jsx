import React from 'react';
import Amenities from '../../app/product-deatiles/Amenities';
import SmartFeature from '../../app/product-deatiles/SmartFeature';
import Slider from '../../app/product-deatiles/Slider';
import Specification from '../../app/product-deatiles/Specification';
import ProductVideo from '../../app/product-deatiles/ProductVideo';
import Plans from '../../../src/app/product-deatiles/Plans';
import Location from '../../app/product-deatiles/Location';
import Status from '../../app/product-deatiles/status';
import Partners from '../../app/product-deatiles/Partners';

function DeepDetails() {
  const DetailsNavbar = [
    { name: 'Amenities' },
    { name: 'Smart Features' },
    { name: 'Specifications' },
    { name: 'Plans' },
    { name: 'Video' },
    { name: 'Location' },
    { name: 'Current Status' }
  ];

  return (
    <>
      <section>
        <div className="containers p-[20px] hidden lg:flex">
          <ul className="flex space-x-[20px]">
            {DetailsNavbar.map((item, index) => (
              <li
                key={index}
                className="font-[clash-display-regular] text-[20px] px-[10px] py-[5px] relative cursor-pointer group transition-all duration-300 ease-in-out hover:font-[general-sans-medium]"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      <Amenities />
      <SmartFeature />
      <Slider />
      <Specification />
      <Plans />
      <ProductVideo />
      <Location />
      <Status />
      <Partners />
    </>
  );
}

export default DeepDetails;
