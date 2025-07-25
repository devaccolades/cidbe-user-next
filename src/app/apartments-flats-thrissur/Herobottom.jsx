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
        className="relative w-full pt-20 pb-48 md:py-20 md:pb-64 lg:py-34  xl:pb-64"
        style={{ backgroundColor: '#052D23' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center -mt-[120px] mb-8 md:mb-12">
            <p className="text-white text-[13px] font-normal xl:max-w-5xl md:text-[14px] md:max-w-2xl font-[general-sans-regular] leading-relaxed  mx-auto">
            Discover your dream home in Thrissur, the cultural heart of Kerala. You can find the convenience of modern living and traditional charm here. CIDBI delivers thoughtfully designed apartments and flats for sale in Thrissur. CIDBI all time ensure you a comfortable, secure, and luxurious lifestyle. Whether it is a compact 2 BHK Flat or spacious3BKH apartments in Thrissur, we have the options for you.
            </p>
          </div>

          <div className="flex gap-4 justify-center items-center text-[14px] font-[general-sans-regular] font-normal">
            <button className="bg-white text-gray-800  py-3 rounded-lg text-[14px] font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center w-full xs:max-w-[210px]  justify-center">
              Enquire Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="border-2 border-white text-white  py-3 rounded-lg font-medium hover:bg-white hover:text-gray-800 transition-colors duration-200 w-full xs:max-w-[210px] ">
              About Us
            </button>
          </div>
        </div>
      </section>

      {/* PROJECT CARDS THAT OVERLAP HERO BOTTOM */}
      <div className="relative z-10 -mt-[200px] px-4  md:-mt-[220px] lg:-mt-[220px] max-w-[1610px] mx-auto  sm:px-6 lg:px-24">
        {projects === null ? (
          <Skelten />
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[10px] py-[30px] ">
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
