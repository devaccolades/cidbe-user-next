"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { throttle } from "lodash";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import playIcon from "../../public/icons/play.webp";

function VideoSection({ videosection, onVideoModalOpen, onVideoModalClose }) {
  const pathname = usePathname();

  const [numItems, setNumItems] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentVideoId(null);
    onVideoModalClose();
  };

  const handleThumbnailClick = (videoId) => {
    setCurrentVideoId(videoId);
    setIsModalOpen(true);
    onVideoModalOpen();
  };

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  useEffect(() => {
    const determineNumItems = () => {
      const width = window.innerWidth;
      if (width < 768) return 1;
      if (width >= 768 && width <= 1700) return 2;
      return 3;
    };

    setNumItems(determineNumItems());

    const handleResize = throttle(() => {
      setNumItems(determineNumItems());
    }, 200);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Updated videos array with manual thumbnails
  const videos = [
    {
      videoId: "BEU4pU6TzaU", // YouTube video ID
      thumbnail: "/images/image15.jpg", // Path to your custom thumbnail
      title: "Showcase Apartment 1", // Optional title
    },
    // {
    //     videoId: 'YOUR_YOUTUBE_VIDEO_ID_2',
    //     thumbnail: '/images/custom-thumbnail-2.jpg',
    //     title: 'Showcase Apartment 2'
    // },
  ];

  // YouTube Modal Component - FULLY RESPONSIVE
  const YouTubeModal = ({ isOpen, handleClose, videoId }) => {
    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-2 sm:p-4 md:p-6"
        onClick={handleClose}
      >
        <div
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on video
        >
          {/* Responsive video container */}
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1&disablekb=1&iv_load_policy=3`}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="YouTube video player"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className={`relative text-[--secondary-cl] overflow-hidden z-10  flex flex-col gap-[20px] md:gap-[50px] lg:gap-[130px]`}
    >
      <div className="containers">
        <h6 className="font-[clash-display-medium] text-[20px] lg:text-[32px]">
          Explore Our Showcase Apartments
        </h6>

        <div className="mt-[10px] lg:mt-[44px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={numItems}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {videos.map((videoItem, index) => {
              const videoId =
                videoItem.videoId || getYouTubeVideoId(videoItem.videoUrl);

              return (
                <SwiperSlide key={index}>
                  <div
                    className="relative w-full h-[300px] md:h-[478px] rounded-[12px] cursor-pointer overflow-hidden group"
                    onClick={() => handleThumbnailClick(videoId)}
                  >
                    {/* Custom thumbnail using Next.js Image component */}
                    <Image
                      src={videoItem.thumbnail}
                      alt={videoItem.title || `Video thumbnail ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1700px) 50vw, 33vw"
                    />

                    {/* Overlay for better play button visibility */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300" />

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Image
                        className="opacity-70 hover:opacity-90 transition-opacity duration-300"
                        width={50}
                        height={50}
                        src={playIcon}
                        alt="Premium 2 Bhk flats in thrissur"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <YouTubeModal
        isOpen={isModalOpen}
        handleClose={handleModalClose}
        videoId={currentVideoId}
      />
    </section>
  );
}

export default VideoSection;
