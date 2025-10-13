"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Herogreen from "./Herogreen";
import Herobottom from "./Herobottom";
import { usePathname } from "next/navigation";

export default function Herosection() {
  const pathName = usePathname();
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (!video) return;

    // Function to safely play video & audio
    const playMedia = () => {
      video?.play().catch(() => {});
      audio?.play().catch(() => {});
    };

    // Wait until video is ready (loaded)
    const handleVideoLoaded = () => {
      video.muted = true; // ensure autoplay compatibility
      playMedia();
    };

    video.addEventListener("loadeddata", handleVideoLoaded);

    // Intersection Observer to control playback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playMedia();
          } else {
            video?.pause();
            audio?.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    if (audio) observer.observe(audio);

    // Cleanup
    return () => {
      video.removeEventListener("loadeddata", handleVideoLoaded);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative -mt-[78px] lg:-mt-[95px] text-white w-full h-full">
      {/* Aspect ratio wrapper */}
      <div className="relative w-full sm:aspect-[12/16] aspect-[16/9] h-[85vh] xs:hidden">
        <video
          src="/video/tsr/CIDBI_r.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="hidden xs:block relative w-full ">
        <video
          ref={videoRef}
          src="/video/tsr/CIDBI_l.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="object-cover object-center w-full"
        />
      </div>
      <div className="hidden">
        <video
          ref={audioRef}
          src="/video/tsr/CIDBI_l.mp4"
          autoPlay
          volume={0.5}
          loop
          playsInline
          className="object-cover object-center w-full"
        />
      </div>

      <Herogreen />
      <Herobottom />
    </section>
  );
}
