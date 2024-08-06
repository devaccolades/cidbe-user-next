'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = ({amenities_images}) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const container = document.querySelector('.container');
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % amenities_images?.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + amenities_images?.length) % amenities_images?.length);
  };

  const getImageIndex = (offset) => {
    return (currentIndex + offset + amenities_images?.length) % amenities_images?.length;
  };

  return (
    <div className='bg-white'>
      <div className="container mx-auto ">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const index = getImageIndex(offset);
            const image = amenities_images[index];
            const zIndex = 5 - Math.abs(offset);
            const opacity = 1 - Math.abs(offset) * 0.3;
            const scale = 1 - Math.abs(offset) * 0.2;
            const translateX = `${offset * 35}%`;
            const translateZ = offset === 0 ? '0px' : '-50px';

            return (
              <div
                key={image?.id}
                onClick={() => setCurrentIndex(index)}
                className="absolute transition-all duration-500 cursor-pointer"
                style={{
                  width: offset === 0 ? '50%' : '40%',
                  height: offset === 0 ? '80%' : '70%',
                  transform: `translateX(${translateX}) translateZ(${translateZ}) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
              >
                <Image
                  src={image?.images}
                  alt={image?.image_alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[30px]"
                  unoptimized
                />
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-0 md:bottom-3 lg:bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          {amenities_images.map((_, index) => (
            <button
              key={index}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentIndex === index ? '10px' : '5.33px',
                height: currentIndex === index ? '10px' : '5.33px',
                backgroundColor: currentIndex === index ? '#D4FA95' : '#999999',
              }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Carousel;