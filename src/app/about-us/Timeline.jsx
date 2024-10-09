'use client'
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import branch from '../../../public/images/about/braches.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


// After Connecting to backend should be remove 
import Coral from '../../../public/images/about/Coral.jpg'
import Coronet from '../../../public/images/about/Coronet.JPG'
import Chaitram from '../../../public/images/about/Chaitram.JPG'
import Cedar from '../../../public/images/about/Cedar.JPG'
import Chiraag from '../../../public/images/about/Chiraag.JPG'
import Cocoon from '../../../public/images/about/Cocoon.JPG'
import Cinthia from '../../../public/images/about/Cinthia.JPG'
import Clarion from '../../../public/images/about/Clarion.jpg'
import Credence from '../../../public/images/about/Credence.JPG'
import Chalet from '../../../public/images/about/Chalet.jpg'
import Candor from '../../../public/images/about/Candor.webp'
import Cassia from '../../../public/images/about/Cassia.jpeg'

// videos
import CidbiVideo1 from '../../../public/video/whoweare/cidbi1.mp4'
import CidbiVideo2 from '../../../public/video/whoweare/cidbi2.mp4'
import CidbiVideo3 from '../../../public/video/whoweare/cidbi3.mp4'
// Thumb
import thumb1 from '../../../public/images/about/thumb/thumbnail1.png'
import thumb2 from '../../../public/images/about/thumb/thumbnail2.png'
import thumb3 from '../../../public/images/about/thumb/thumbnail3.png'


export function Video({ file, thumb }) {
  console.log(thumb,'daxoo');
  
  return (
    <video width="320" height="240" controls preload="none" poster={thumb.src} className='mx-auto rounded-[12px]'>
      <source src={file} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}


function Timeline() {
  const [listing, setListing] = useState([]);
  const sectionRef = useRef(null);

  const videosList = [
    { file: CidbiVideo1, thumb: thumb1 },
    { file: CidbiVideo2, thumb: thumb2 },
    { file: CidbiVideo3, thumb: thumb3 },
  ]

  const data = [
    { image: Coral, year: 2007, name: "Coral" },
    { image: Coronet, year: 2010, name: "Coronet" },
    { image: Chaitram, year: 2011, name: "Chaitram" },
    { image: Cedar, year: 2013, name: "Cedar" },
    { image: Chiraag, year: 2015, name: "Chiraag" },
    { image: Cocoon, year: 2015, name: "Cocoon" },
    { image: Clarion, year: 2017, name: "Clarion" },
    { image: Cinthia, year: 2018, name: "Cinthia" },
    { image: Credence, year: 2017, name: "Credence" },
    { image: Chalet, year: 2023, name: "Chalet" },
    { image: Candor, year: 2024, name: "Candor" },
    { image: Cassia, year: 2024, name: "Cassia" },
  ];

  useEffect(() => {
    const newState = [];
    for (let i = 0; i < data.length; i += 2) {
      newState.push(data.slice(i, i + 2));
    }
    setListing(newState);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="containers py-8 flex overflow-x-auto custom-scrollbar">
        {listing.map((list, index) => (
          <div key={index} className="timeline-item relative min-w-[547px] -ms-[2px] w-[547px] h-[404px] overflow-x-auto">
            <Image src={branch} alt='' className='absolute branch-image' />
            <div className='flex flex-col justify-between h-full items-center'>
              <div className='ps-[9px] w-6/12 h-[111px]'>
                <Image src={list[0].image} alt='' className='w-[147px] h-[111px] rounded-[8px] top-image' />
                <p className='font-[general-sans-regular] text-[20px]'>{list[0]?.name}</p>
              </div>
              <div className='flex flex-col-reverse w-[60%] h-[160px] justify-between'>
                <p className='text-[20px] self-start image-load'>{list[0]?.year}</p>
                <p className='text-[20px] self-end image-load'>{list[1]?.year}</p>
              </div>
              <div className='pe-[1px] w-6/12 h-[111px] flex flex-col items-end '>
                <p className='font-[general-sans-regular] text-[20px] -mt-[30px]'>{list[1]?.name}</p>
                {list[1]?.image && <Image src={list[1]?.image} alt='' className='w-[147px] h-[111px] rounded-[8px] bottom-image' />}
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* Video section */}
      <section className='containers mx-auto pt-[50px] md:px-[100px]'>
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
        >
          {videosList.map((file, index) => (
            <SwiperSlide key={index}>
              <Video file={file.file} thumb={file?.thumb} />
            </SwiperSlide>
          ))}
        </Swiper>

      </section>
      <div className="containers sm:px-5 md:px-[100px] lg:px-[150px] py-1 pt-[50px]">
        <div className="relative w-full rounded-[20px] overflow-hidden" style={{ paddingTop: '56.25%' }}>
          <iframe width="560" height="315"
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/qIW904oqc_Q?si=_CGa3Z1GvePCeDU8"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
}

export default Timeline;