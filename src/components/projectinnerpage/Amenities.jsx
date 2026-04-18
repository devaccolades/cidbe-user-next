import React from "react";
import Image from "next/image";

function Amenities({ amenities, isCandorPage }) {
  return (
    <div className="containers custom-res py-[20px] mb-[30px]">
      <h2 className="text-[24px] font-[clash-display-medium] mb-[10px]">
        Amenities
      </h2>
      {isCandorPage && (
        <p className="text-base sm:text-[14px] lg:text-[16px] font-[general-sans-medium] mb-4">
          Step into a world of ease at our premium Punkunnam apartments. We
          designed every feature to make your daily life smoother and far more
          fun. You can relax in the rooftop pool or stay active in the modern
          health club. Your family stays completely safe with round the clock
          security, CCTV cameras, and smart biometric locks. You also enjoy
          total convenience with reliable generator backup and green solar
          power. These apartments in Punkunnam offer the perfect mix of fun,
          safety, and deep comfort.
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
