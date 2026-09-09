import React from "react";
import Link from "next/link";

function Partners({ bank, isCandorPage, isChaletPage }) {
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
      {(isCandorPage || isChaletPage) && (
        <div className="containers grid grid-cols-1 md:grid-cols-2 gap-10 py-3">
          <div>
            {isChaletPage && (
              <>
                <h2 className="text-[18px] leading-[100%] md:text-[24px] md:max-w-xl text-black mb-3 font-semibold">
                  Prime Location in Kannamkulangara
                </h2>

                <div className="text-black text-[13px] leading-normal md:text-[14px] max-w-4xl space-y-3">
                  <p>
                    Chalet brings you to the vibrant heart of Kannamkulangara.
                    This prime spot makes daily travel incredibly easy. Swaraj
                    Round is just two kilometres away. Sakthan Stand sits only
                    one kilometre from your door.
                  </p>

                  <p>
                    If you want <Link className=" font-semibold" href="/">3 &amp; 2 BHK flat for sale in Thrissur</Link>,
                    location truly matters. You get quick access to top city
                    spots. Sun Hospital is a short half-kilometre trip. The
                    railway station and KSRTC stand are just 1.5 kilometres
                    away. A large hypermarket is also very close by.
                  </p>

                  <p>
                    Finding great <Link className=" font-semibold" href="/">apartments for sale In Thrissur</Link> means choosing real
                    daily convenience.
                  </p>
                </div>
              </>
            )}
            {isCandorPage && (
              <>
                <h2 className="text-[18px] leading-[100%] md:text-[24px] md:max-w-xl text-black mb-3 font-semibold">
                  Why Buy Flats in Punkunnam, Thrissur
                </h2>

                <div className="text-black text-[13px] leading-normal md:text-[14px] max-w-4xl space-y-3">
                  <p>
                    Punkunnam shines as a highly desired residential hub in Thrissur
                    city. High demand makes buying <Link className=" font-semibold" href="/">premium flats in Punkunnam</Link> a
                    truly smart choice today.
                  </p>

                  <p>
                    You get amazing connectivity to major roads and lively city spots. The famous Swaraj Round sits just 1.5 kilometres away. Daily travel is easy since the local railway station is only 300 meters from your door.
                  </p>

                  <p>
                    Families adore this location because excellent education sits very close by. Devamatha Public School is just two kilometres away. Premium healthcare is also right around the corner. Ashwini Hospital is a quick one-kilometre drive. Saroja Multi Speciality Hospital is very close by too.
                  </p>

                  <p>
                    Looking for <Link className=" font-semibold" href="/">premium flats for sale in Punkunnam</Link>? These homes offer real convenience. You get a peaceful space linked to active city life.
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="relative z-10">
            {isChaletPage && (
              <>
                <h2 className="text-[18px] md:text-[24px] text-black mb-3 font-semibold">
                  About CIDBI – Trusted Builders in Thrissur
                </h2>

                <div className="!text-black text-[13px] md:text-[14px] max-w-4xl space-y-3">
                  <p>
                    CIDBI stands tall as a highly trusted builder in Thrissur.
                    We craft beautiful homes that families truly love. Mr. A. A.
                    Abdul Lathif leads our skilled and passionate team. We bring
                    years of rich experience to every single build.
                  </p>

                  <p>
                    We proudly hold an ISO 9001:2015 certification for our strict
                    quality standards. As a dedicated CREDAI member, we always
                    deliver pure excellence. Our team works hard to hand over
                    projects right on time.
                  </p>

                  <p>
                    When you search for <Link className=" font-semibold" href="/">apartments for sale in Thrissur</Link>,
                    trust means everything. We build safe spaces filled with
                    lasting peace and deep value.
                  </p>
                </div>
              </>
            )}
            {isCandorPage && (
              <>
                <h2 className="text-[18px] md:text-[24px] text-black mb-3 font-semibold">
                  About CIDBI – Trusted Builders in Thrissur
                </h2>

                <p className="!text-black text-[13px] md:text-[14px] max-w-4xl">
                  CIDBI shines as one of the most trusted builders in Thrissur. We are known for crafting beautiful luxury homes today. Guided by Mr. A. A. Abdul Lathif, our skilled team brings rich experience to every single project. We proudly hold an ISO 9001:2015 certification for our high working standards. Our team always delivers projects on time, earning true trust from happy families. As a proud and dedicated CREDAI member, we promise pure excellence in every home. Choosing CIDBI means choosing lasting peace and true value.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Partners;
