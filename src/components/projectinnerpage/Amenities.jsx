import React from "react";
import Image from "next/image";
import Link from "next/link";

function Amenities({ amenities, isCandorPage, isChaletPage, isCredencePage }) {
  if (!amenities || amenities.length === 0) return null;
  return (
    <div className="containers custom-res py-[20px] mb-[30px]">
      <h2 className="text-[24px] font-[clash-display-medium] mb-[10px]">
        Modern Amenities for Premium Living
      </h2>
      {(isCandorPage || isChaletPage || isCredencePage) && (
        <p className="text-base sm:text-[14px] lg:text-[16px] font-[general-sans-regular] mb-4">
          {isChaletPage ? (
            <>
              Step into an elegant entrance lobby that warmly welcomes you. We
              packed these spaces with smart features for effortless living. If
              you need a{" "}
              <Link className="font-[general-sans-medium]" href="/">
                2 BHK Flat for sale in Thrissur
              </Link>
              , Chalet brings unmatched value. Your family stays safe with CCTV
              surveillance and tight security. We added smart biometric entry
              and handy intercoms for peace of mind. Kids safely enjoy the fun
              play area. Host your friends at the rooftop party area. A six
              passenger lift takes you straight to the terrace. Clean solar
              panels and an auto start generator keep everything running.
            </>
          ) : isCandorPage ? (
            <>
              Discover true ease at our premium homes. We built every feature to
              make your days simpler and much more joyful. You can unwind by the
              rooftop pool or stay fit inside our modern health club. Your
              family enjoys complete peace of mind with steady security, CCTV
              cameras, and secure biometric locks. We also ensure smooth living
              with reliable generator backup and clean solar power. If you want{" "}
              <Link className="font-[general-sans-medium]" href="/">
                premium flats in Punkunnam
              </Link>
              , these spaces bring the perfect blend of joy, safety, and lasting
              comfort.
            </>
          ) : (
            <>
              Step into a lifestyle built for your daily comfort. Credence offers
              the best <span className="font-[general-sans-medium]">Apartments in Thrissur</span>{" "}
              with excellent facilities. Stay fit and active inside our fully
              air-conditioned health club. You can relax after work in the
              beautiful rooftop swimming pool. Kids have a safe play area to
              enjoy every single day. Host your friends easily at the spacious
              rooftop party area. We take your safety very seriously. Your family
              stays protected with strict 24-hour security. Smart CCTV
              surveillance keeps a close watch on the premises. Find your perfect
              <span className="font-[general-sans-medium]"> 3 BHK Apartments in Thrissur</span>{" "}
              right here.
            </>
          )}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-row sm:flex-col lg:flex-row items-center space-x-4 sm:space-x-0 sm:space-y-4 lg:space-y-0 lg:space-x-4"
          >
            <div className="bg-[#BFD8BD] w-[60px] h-[52px] flex items-center justify-center border border-black rounded-lg flex-shrink-0">
              <Image
                src={amenity?.icon}
                alt="Premium Apartments in Thrissur"
                unoptimized
                width={24}
                height={24}
              />
            </div>
            <p className="text-base sm:text-[14px] lg:text-[16px] font-[general-sans-medium] uppercase">
              {amenity.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;
