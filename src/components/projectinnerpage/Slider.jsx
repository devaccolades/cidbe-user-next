'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Carousel = ({ amenities_images }) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const visibleImages = 2; // Number of visible images on each side
  const slideIntervalRef = useRef(null);
  const userInteractionTimeoutRef = useRef(null);

  const startSlideShow = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % amenities_images?.length);
    }, 3000); // Change image every 3 seconds
  };

  const resetUserInteractionTimeout = () => {
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
    userInteractionTimeoutRef.current = setTimeout(() => {
      startSlideShow();
    }, 2000);
  };

  useEffect(() => {
    startSlideShow();
    return () => {
      clearInterval(slideIntervalRef.current);
      clearTimeout(userInteractionTimeoutRef.current);
    };
  }, [amenities_images]);

  const nextSlide = () => {
    clearInterval(slideIntervalRef.current);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % amenities_images?.length);
    resetUserInteractionTimeout();
  };

  const prevSlide = () => {
    clearInterval(slideIntervalRef.current);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + amenities_images?.length) % amenities_images?.length);
    resetUserInteractionTimeout();
  };

  const getImageIndex = (offset) => {
    return (currentIndex + offset + amenities_images?.length) % amenities_images?.length;
  };

  return (
    <div className='bg-white'>
      <div className="container mx-auto">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {Array.from({ length: visibleImages * 2 + 1 }, (_, i) => i - visibleImages).map((offset) => {
              const index = getImageIndex(offset);
              const image = amenities_images[index];
              const zIndex = visibleImages + 1 - Math.abs(offset);
              const opacity = 1 - Math.abs(offset) * 0.3;
              const scale = 1 - Math.abs(offset) * 0.2;
              const translateX = `${offset * 35}%`;
              const translateZ = offset === 0 ? '0px' : '-50px';

              return (
                <motion.div
                  key={image?.id}
                  onClick={() => {
                    clearInterval(slideIntervalRef.current);
                    setCurrentIndex(index);
                    resetUserInteractionTimeout();
                  }}
                  className="absolute transition-all duration-500 cursor-pointer"
                  style={{
                    width: offset === 0 ? '50%' : '40%',
                    height: offset === 0 ? '80%' : '70%',
                    transform: `translateX(${translateX}) translateZ(${translateZ}) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x > 100) {
                      prevSlide();
                    } else if (offset.x < -100) {
                      nextSlide();
                    }
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
                </motion.div>
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
                onClick={() => {
                  clearInterval(slideIntervalRef.current);
                  setCurrentIndex(index);
                  resetUserInteractionTimeout();
                }}
              />
            ))}
          </div>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden sm:block">
            <button onClick={prevSlide} className="text-gray-800 text-2xl">
              &lt;
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden sm:block">
            <button onClick={nextSlide} className="text-gray-800 text-2xl">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
