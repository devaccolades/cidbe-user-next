import React from "react";

function Partners({ bank, isCandorPage }) {
  // Array of logos

  return (
    <>
      <section className="bg-[#ffff]">
        <div className="containers custom-res py-[20px]">
          <h2 className="text-center text-[24px] font-[clash-display-medium]">
            Finance Your Dream Apartment with Our Trusted Banks
          </h2>
          <div className="flex flex-wrap items-center justify-center lg:justify-between mt-[20px]">
            {bank.map((img, index) => (
              <div
                key={index}
                className="w-[80px] md:w-[100px] h-auto lg:h-[80px] flex items-center justify-center m-[10px]"
              >
                <img src={img?.image} alt="Apartments in Thrissur" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {isCandorPage && (
        <div className="containers grid grid-cols-1 md:grid-cols-2 gap-10 py-3">
          <div>
            <h2 className="text-[18px] leading-[100%] md:text-[24px] md:max-w-xl text-black mb-3 font-semibold">
              Why Buy Flats in Punkunnam, Thrissur
            </h2>

            <div className="text-black text-[13px] leading-normal md:text-[14px] max-w-4xl space-y-3">
              <p>
                Punkunnam stands out as a highly desired residential hub in
                Thrissur city. High demand makes buying property in Punkunnam a
                truly smart choice today.
              </p>

              <p>
                You get amazing connectivity to major roads and lively city
                spots. The famous Swaraj Round is just 1.5 kilometres away.
                Traveling is a breeze since the Punkunnam Railway Station is
                only 300 meters from your door.
              </p>

              <p>
                Families love these apartments in Punkunnam because top
                education is very close. Devamatha Public School sits just 2
                kilometres away. Top healthcare is also right around the corner.
                Ashwini Hospital is a quick 1 kilometer drive. Saroja Multi
                Speciality Hospital is close by too.
              </p>

              <p>
                With quick travel options, these flats in Punkunnam offer
                unmatched convenience. You get a peaceful home perfectly linked
                to active city life.
              </p>
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-[18px] md:text-[24px] text-black mb-3 font-semibold">
              About CIDBI – Trusted Builders in Thrissur
            </h2>

            <p className="!text-black text-[13px] md:text-[14px] max-w-4xl">
              CIDBI stands as one of the{" "}
              <a
                href="https://cidbi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                trusted builders in Thrissur
              </a>
              , known for excellence in luxury home construction. Led by Mr. A.
              A. Abdul Lathif, our expert team brings years of rich experience
              to every project. We proudly hold an ISO 9001:2015 certification
              for our top-tier standards. We always deliver projects on time,
              earning deep trust from happy families. As a proud CREDAI member,
              we promise pure excellence in every single home we build. When you
              choose CIDBI, you choose lasting peace and true value.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Partners;
