import Image from "next/image";
import img1 from "../../../public/images/aprtments_thrissur/img1.jpg";
import img2 from "../../../public/images/aprtments_thrissur/img2.jpg";
import img3 from "../../../public/images/aprtments_thrissur/img3.jpg";
import img4 from "../../../public/images/aprtments_thrissur/img4.jpg";

export default function HighlightsSection() {
  return (
    <section className="pt-8 about-main-bg">
      <div className="w-[92%] md:w-full lg:max-w-[1610px] mx-auto sm:px-6 lg:px-24">
        {/* Project Highlights Header */}
        <div className="text-left font-[general-sans-regular] mb-12">
          <h2 className="text-gray-400 text-[32px]  font-medium">
            Project <span className="text-gray-900">Highlights</span>
          </h2>
          <p className=" text-gray-600 text-[13px] leading-[150%] mt-2">
          CIDBI’s flagship projects are located in prime areas and these apartments in Thrissur redefine urban living. Candor, ready to occupy flats, are in Punkunnam and Cassia, ongoing project, is near Daya Hospital. Candor stands out with its rooftop pool, fitness centre, party hall and landscaped gardens. Cassia, premium smart homes, combines affordability with comfort and convenience. Both projects are built with eco-friendly features like rainwater harvesting and solar power.  They ensure 24/7 security and power backup. Both are ideal homes for modern families seeking location and lifestyle.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 xs:grid-cols-2 xl:grid-cols-4 md:gap-[38px] gap-6 mb-8">
          {[
            {
              img: img1,
              text: "Spacious Rooms & Premium Amenities ",
            },
            {
              img: img2,
              text: "High-Level Security & Smart Features",
            },
            {
              img: img3,
              text: "Eco-Friendly & Energy-Saving Systems",
            },
            {
              img: img4,
              text: "Open Space & Landscaped Gardens",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded overflow-hidden shadow-md relative group xs:min-h-[289px]"
            >
              <Image
                src={item.img}
                alt="Apartments in Thrissur"
                width={300}
                height={300}
                className=" h-[289px] w-full object-cover brightness-50"
              />
              <div className="text-center absolute bottom-0 font-[inter-regular] text-white text-[20px] p-4 w-full transition-all group-hover:bg-opacity-80 leading-[110%] font-bold">
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* Location Advantages */}
        <div className="text-center mb-8 md:pt-[80px]">
          <h3 className="text-gray-400 font-[general-sans-regular] text-[32px] leading-[36px] xs:max-w-xs xs:mx-auto md:max-w-md md:text-[40px] md:leading-[40px] font-medium">
            Location{" "}
            <span className="text-gray-900 font-semibold">
              Advantages – Living in Thrissur
            </span>
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Proximity to Major Hospitals & Healthcare ",
            "Excellent Connectivity to Transport Hubs",
            "Easy Access to Educational Institutions",
            "Thriving Neighbourhoods with Urban Convenience",
          ].map((point, i) => (
            <div
              key={i}
              className={`rounded-lg p-[20px] text-[15px] leading-normal font-medium font-[general-sans-regular] bg-white text-[#052D23] transition-colors duration-200 hover:bg-[#BFD8BD] hover:text-green-800 `}
              style={{boxShadow: "0px 0px 25.8px 0px #0000001F"}}
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
