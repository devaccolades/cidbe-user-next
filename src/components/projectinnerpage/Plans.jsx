"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Image as AntdImage } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import buildIcon from "../../../public/images/product-view/plansbuilding.webp";
import Link from "next/link";

function Plans({ floor_plan, blueprint_image, isCandorPage, isChaletPage, isCredencePage }) {
  if ((!floor_plan || floor_plan.length === 0) && !blueprint_image) return null;
  return (
    <section className="py-10 bg-[#ffff]">
      <div className="containers custom-res">
        <h2
          className="text-3xl sm:text-2xl md:text-3xl lg:pr-[20px] font-[clash-display-medium] 
        mb-2.5 "
        >
          Well Designed 2 & 3 BHK Apartment Plans
        </h2>
        {isCandorPage && (
          <p className="text-base sm:text-[14px] lg:text-[16px] font-[general-sans-regular] mb-4">
            CIDBI offers five unique floor layouts for these <Link className="font-[general-sans-medium]" href="/">premium flats in Punkunnam</Link>. Plans from Type A to Type D are standard homes, while
            Type E offers extra spacious living. We craft every corner so your
            family has room to grow and relax. Enjoy bright mornings with smooth
            airflow in every single room. Smart designs and open balconies pull
            in fresh air and plenty of warm sunlight. This keeps your living
            spaces feeling fresh and full of joy all day long. Wide floor spaces
            give you plenty of room for all your favourite furniture. Moving
            around feels easy and completely free.
          </p>
        )}
        {isChaletPage && (
          <div className="text-base sm:text-[14px] lg:text-[16px] font-[general-sans-regular] mb-4">
            <p className="mb-2">
              Chalet brings you beautifully planned spaces for modern
              families. We designed these homes to maximize your daily
              comfort. If you want <Link className="font-[general-sans-medium]" href="/">3 &amp; 2 BHK Flat for sale in Thrissur</Link>,
              you have great choices here.
            </p>
            <p className="mb-2">
              Type A offers a large 1137 square foot 2BHK layout. Type B
              provides a smart 994 square foot design. Type C brings you 1063
              square feet of bright living space.
            </p>
            <p className="mb-2">
              Every single layout pulls in fresh air and warm sunlight. We
              built these open rooms to give your family freedom to move.
              Finding perfect <Link className="font-[general-sans-medium]" href="/">Apartments For Sale In Thrissur</Link> is easy now. These smart
              floor plans make your daily city life truly joyful.
            </p>
          </div>
        )}
        {isCredencePage && (
          <div className="text-base sm:text-[14px] lg:text-[16px] font-[general-sans-regular] mb-4">
            <p className="mb-2">
              Credence offers beautiful floor layouts for modern living. If you
              want the best <span className="font-[general-sans-medium]">Apartments in Thrissur</span>,
              we have the perfect home for you.              Type A features spacious <span className="font-[general-sans-medium]">3 BHK Apartments in Thrissur</span>{" "}
              covering 1615 square feet. It gives large families plenty of room
              to grow. Type B provides a smart 2 BHK design covering 1174 square
              feet. Type C brings you 1033 square feet of highly comfortable
              space.These open plans pull in fresh air and bright sunlight every day.
              Just like our popular <span className="font-[general-sans-medium]">Apartments in Kannamkulangara</span>,
              we built these homes for your total comfort. Discover your dream
              space today.
            </p>

          </div>
        )}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <AntdImage.PreviewGroup>
            <Swiper
              modules={[Scrollbar]}
              spaceBetween={30}
              slidesPerView={3}
              scrollbar={{
                hide: false,
                draggable: true,
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 25 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="!px-4 sm:!px-6 lg:!px-8 !py-4"
            >
              {floor_plan.map((image, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <div
                    className="bg-white rounded-lg p-6 custom-shadow transition-all duration-300 hover:shadow-2xl h-full cursor-pointer"
                    // onClick={() => { openModal(), setSelectedImage(image?.image) }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center mr-4 bg-[#BFD8BD]">
                        <Image
                          src={buildIcon}
                          alt="Premium Flats in Thrissur"
                          width={28}
                          height={28}
                        />
                      </div>
                      <div>
                        <h3 className="text-[16px] lg:text-[24px] font-[general-sans-medium]">
                          {image.plan_type}
                        </h3>
                        <p className="text-sm sm:text-xs md:text-sm font-[general-sans-medium]">
                          {image?.floor_from && `${image?.floor_from} `}{" "}
                          {image?.floor_to && `to ${image?.floor_to}`} Floor
                        </p>
                      </div>
                      <h3 className="text-[20px] lg:text-[30px] font-[general-sans-medium] ml-auto">
                        {image?.bedrooms}BHK
                      </h3>
                    </div>
                    <div className="flex justify-between text-sm sm:text-xs md:text-sm general-sans-light text-[--secondary-cl] mb-6">
                      <p>Area {image?.total_area} sqft</p>
                      <p>Carpet Area {image?.carpet_area} sqft</p>
                    </div>
                    {/*  <Image
                    src={image?.plan_image}
                    alt={image?.plan_alt}
                    layout="responsive"
                    width={1600}
                    height={1200}
                    unoptimized
                    className='w-full'
                  /> */}
                    <AntdImage
                      // width={1000}
                      // height={90}
                      className="h-full w-full"
                      src={image?.plan_image}
                      alt={image?.plan_alt}
                      preview={{ src: image?.image }}
                    />
                    {/* <img src={image?.plan_image}
                  className='mx-auto'
                    alt={image?.plan_alt} /> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </AntdImage.PreviewGroup>
        </div>
        {blueprint_image && (
          <div className="mt-16">
            <Image
              unoptimized
              src={blueprint_image}
              alt="Premium Apartments in Thrissur"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Plans;
