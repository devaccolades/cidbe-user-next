'use client'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { throttle } from 'lodash'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import VideoModal from '../components/VideoModal'
import playIcon from '../../public/icons/play.webp'

function VideoSection({ isVideoModalOpen, setIsVideoModalOpen }) {
    const pathname = usePathname()

    const [numItems, setNumItems] = useState(1)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentVideo, setCurrentVideo] = useState(null)
    const videoRef = useRef(null)

    const handleModalClose = () => setIsModalOpen(false)

    const handleThumbnailClick = (videoSrc) => {
        setCurrentVideo(videoSrc)
        setIsModalOpen(true)
    }

    useEffect(() => {
        if (!isModalOpen && videoRef.current) {
            videoRef.current.pause()
            setCurrentVideo(null)
        }
    }, [isModalOpen])

    useEffect(() => {
        const determineNumItems = () => {
            const width = window.innerWidth
            if (width < 768) return 1
            if (width >= 768 && width <= 1700) return 2
            return 3
        }

        setNumItems(determineNumItems())

        const handleResize = throttle(() => {
            setNumItems(determineNumItems())
        }, 200)

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const videos = [
        {
            thumbnail: '/images/image16.jpg',
            video: '/video/vid1.mp4',
        },
        {
            thumbnail: '/images/image15.jpg',
            video: '/video/vid2.mp4',
        },
    ]

return (
    <section className={`relative text-[--secondary-cl] overflow-hidden z-10 flex flex-col gap-[20px] md:gap-[50px] lg:gap-[130px]`}>
        <div className="containers">
            <h6 className="font-[clash-display-medium] text-[20px] lg:text-[32px]">Explore Our Showcase Apartments</h6>

            <div className="mt-[10px] lg:mt-[44px]">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={numItems}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                >
                    {videos.map((videoItem, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="relative w-full h-[300px] md:h-[478px] bg-center bg-cover rounded-[12px] cursor-pointer"
                                style={{ backgroundImage: `url(${videoItem.thumbnail})` }}
                                onClick={() => handleThumbnailClick(videoItem.video)}
                            >
                                <Image
                                    className="absolute top-[45%] left-[45%] opacity-[70%]"
                                    width={50}
                                    src={playIcon}
                                    alt="Play video"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

        <VideoModal
            isOpen={isModalOpen}
            handleClose={handleModalClose}
            videoSrc={currentVideo}
        />
    </section>
)

}

export default VideoSection
