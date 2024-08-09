"use client";
import React, { useRef } from 'react';
import Amenities from './Amenities';
import SmartFeature from './SmartFeature';
import Slider from './Slider';
import Specification from './Specification';
import ProductVideo from './ProductVideo';
import Plans from './Plans';
import Location from './Location';
import Status from './status';
import Partners from './Partners';

function DeepDetails({
  amenities, features, amenities_images, specification, blueprint_image, floor_plan,
  location, nearby, status, bank, videos
}) {
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

  const sections = [
    { name: 'Amenities' },
    { name: 'Smart Features'},
    { name: 'Specifications' },
    { name: 'Plans'},
    { name: 'Video' },
    { name: 'Location' }, 
    { name: 'Current Status'},
  ];

  return (
    <>
      <section className="lg:sticky top-0 z-50 bg-white pt-[20px] pb-[10px] hidden lg:block">
        <div className="containers custom-res py-[20px]">
          <ul className="flex justify-between w-full">
          {sections
              .map((item, index) => (
                <li
                  key={index}
                  onClick={() => scrollToSection(item.name)}
                  className="font-[general-sans-regular] lg:text-[16px] xl:text-[20px] px-[10px] py-[5px] relative cursor-pointer group transition-all duration-300 ease-in-out hover:font-[general-sans-medium]"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
              ))}
          </ul>
        </div>
      </section>

     <div ref={sectionRefs.Amenities} className="pt-[30px] bg-white">
        <Amenities amenities={amenities} />
      </div>
      <div ref={sectionRefs['Smart Features']} className="pt-[30px] bg-white">
         <SmartFeature features={features} />
        {amenities_images.length > 0 && <Slider amenities_images={amenities_images} />}
      </div>
      <div ref={sectionRefs.Specifications} className="pt-[30px] bg-white">
        <Specification specification={specification} />
      </div>
      <div ref={sectionRefs.Plans} className="pt-[30px] bg-white">
        <Plans floor_plan={floor_plan} blueprint_image={blueprint_image} />
      </div>
      <div ref={sectionRefs.Video} className="pt-[30px] bg-white">
        <ProductVideo videos={videos}/>
      </div>
      <div ref={sectionRefs.Location} className="pt-[30px] bg-white">
        <Location location={location} nearby={nearby} />
      </div>
      <div ref={sectionRefs['Current Status']} className="pt-[30px] bg-white">
        <Status status={status} />
      </div>
      {bank.length > 0 && <Partners bank={bank} />}
    </>
  );
}

export default DeepDetails;