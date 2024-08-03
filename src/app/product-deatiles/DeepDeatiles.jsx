"use client";
import React, { useRef } from 'react';
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
  const sectionRefs = {
    Amenities: useRef(null),
    'Smart Features': useRef(null),
    Specifications: useRef(null),
    Plans: useRef(null),
    Video: useRef(null),
    Location: useRef(null),
    'Current Status': useRef(null),
  };

  const scrollToSection = (section) => {
    const offset = 70;
    window.scrollTo({
      top: sectionRefs[section].current.offsetTop - offset,
      behavior: 'smooth'
    });
  };

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
      <section className="lg:sticky top-0 z-50 bg-white py-[10px] hidden lg:block">
        <div className="containers custom-res py-[20px]">
          <ul className="flex justify-between w-full">
            {DetailsNavbar.map((item, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(item.name)}
                className="font-[clash-display-regular] lg:text-[16px] xl:text-[20px] px-[10px] py-[5px] relative cursor-pointer group transition-all duration-300 ease-in-out hover:font-[general-sans-medium]"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div ref={sectionRefs.Amenities} className="pt-[30px] bg-white">
        <Amenities />
      </div>
      <div ref={sectionRefs['Smart Features']} className="pt-[30px] bg-white">
        <SmartFeature />
      </div>
      <div ref={sectionRefs.Specifications} className="pt-[30px] bg-white">
        <Specification />
      </div>
      <div ref={sectionRefs.Plans} className="pt-[30px] bg-white">
        <Plans />
      </div>
      <div ref={sectionRefs.Video} className="pt-[30px] bg-white">
        <ProductVideo />
      </div>
      <div ref={sectionRefs.Location} className="pt-[30px] bg-white">
        <Location />
      </div>
      <div ref={sectionRefs['Current Status']} className="pt-[30px] bg-white">
        <Status />
      </div>
      <Partners />
    </>
  );
}

export default DeepDetails;