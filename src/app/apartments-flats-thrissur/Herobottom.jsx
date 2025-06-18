'use client';
import React, { useEffect, useState } from 'react';
import ThrissurCard from '../../components/ThrissurCard';
import Skelten from '../../components/skeletoneffect/Skelten';
import NotFound from '../../components/common/NotFound';
import { getTrissurProject } from '../../services/services';

const Herobottom = () => {
  const [projects, setProj] = useState(null);

  useEffect(() => {
    getTrissurProject()
      .then((res) => setProj(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* HERO BOTTOM SECTION */}
      <section
        className="relative w-full py-16 md:py-20 lg:py-34"
        style={{ backgroundColor: '#052D23' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center -mt-[120px] mb-8 md:mb-12">
            <p className="text-white text-[16px] md:text-base font-[general-sans-regular] leading-relaxed max-w-6xl mx-auto">
              Discover your dream home in the cultural heart of Kerala – Thrissur. Known for its rich
              heritage, vibrant festivals, and thriving economy, Thrissur offers the perfect blend of
              modern living and traditional charm. At GVGRI Builders, we present thoughtfully
              designed apartments and flats in prime locations, ensuring you enjoy a comfortable,
              secure, and luxurious lifestyle. Whether you need a spacious family home or a cozy
              apartment, our projects cater to diverse preferences and budgets. Experience the best
              of urban living with world-class amenities and connectivity in the heart of Thrissur.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-[14px] font-[general-sans-regular]">
            <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 min-w-[160px] justify-center">
              Enquire Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200 min-w-[160px]">
              About Us
            </button>
          </div>
        </div>
      </section>

      {/* PROJECT CARDS THAT OVERLAP HERO BOTTOM */}
      <div className="relative z-10 -mt-[80px] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects === null ? (
          <Skelten />
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] py-[30px] items-stretch">
            {projects.map((project, index) => (
              <ThrissurCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default Herobottom;
