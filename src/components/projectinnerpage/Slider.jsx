'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = ({ amenities_images }) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const visibleImages = 2;
  const slideIntervalRef = useRef(null);
  const userInteractionTimeoutRef = useRef(null);

  const startSlideShow = useCallback(() => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % amenities_images.length);
    }, 3000);
  }, [amenities_images]);

  const resetUserInteractionTimeout = useCallback(() => {
    clearTimeout(userInteractionTimeoutRef.current);
    userInteractionTimeoutRef.current = setTimeout(startSlideShow, 2000);
  }, [startSlideShow]);

  useEffect(() => {
    startSlideShow();
    return () => {
      clearInterval(slideIntervalRef.current);
      clearTimeout(userInteractionTimeoutRef.current);
    };
  }, [startSlideShow]);

  const changeSlide = useCallback((direction) => {
    clearInterval(slideIntervalRef.current);
    setCurrentIndex((prevIndex) => {
      const newIndex = direction === 'next'
        ? (prevIndex + 1) % amenities_images.length
        : (prevIndex - 1 + amenities_images.length) % amenities_images.length;
      return newIndex;
    });
    resetUserInteractionTimeout();
  }, [amenities_images, resetUserInteractionTimeout]);

  const getImageIndex = useCallback((offset) => {
    return (currentIndex + offset + amenities_images.length) % amenities_images.length;
  }, [currentIndex, amenities_images]);

  return (
    <div className='bg-white'>
      <div className="container mx-auto">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence initial={false}>
              {Array.from({ length: visibleImages * 2 + 1 }, (_, i) => i - visibleImages).map((offset) => {
                const index = getImageIndex(offset);
                const image = amenities_images[index];
                const zIndex = visibleImages + 1 - Math.abs(offset);
                const opacity = 1 - Math.abs(offset) * 0.3;
                const scale = 1 - Math.abs(offset) * 0.2;
                const translateX = `${offset * 35}%`;

                return (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity,
                      scale,
                      x: translateX,
                      zIndex,
                      width: offset === 0 ? '50%' : '40%',
                      height: offset === 0 ? '80%' : '70%',
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                      clearInterval(slideIntervalRef.current);
                      setCurrentIndex(index);
                      resetUserInteractionTimeout();
                    }}
                    className="absolute cursor-pointer"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      if (offset.x > 100) {
                        changeSlide('prev');
                      } else if (offset.x < -100) {
                        changeSlide('next');
                      }
                    }}
                  >
                    <Image
                      src={image.images}
                      alt="Premium 3 Bhk flats in thrissur"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-[30px]"
                      loading="eager"
                      priority={Math.abs(offset) <= 1}
                      unoptimized
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
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
          <button onClick={() => changeSlide('prev')} className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden sm:block text-gray-800 text-2xl">&lt;</button>
          <button onClick={() => changeSlide('next')} className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden sm:block text-gray-800 text-2xl">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;