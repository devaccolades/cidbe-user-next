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
            Living at a CIDBI apartment means experiencing the best in modern
            living, enhanced by thoughtful design and quality construction. Our
            project highlights reflect our commitment to creating homes that are
            not just beautiful, but also functional and sustainable. Each
            apartment is built with premium materials and cutting-edge
            technology to ensure long-lasting quality and comfort. From spacious
            living areas to energy-efficient designs, CIDBI apartments are
            crafted to provide the perfect balance of luxury and practicality.
            With a focus on community living, our projects also include
            world-class amenities and beautifully landscaped spaces, creating a
            truly exceptional living experience for our residents.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 xs:grid-cols-2 xl:grid-cols-4 md:gap-[38px] gap-6 mb-8">
          {[
            {
              img: img1,
              text: "Modern, spacious apartments with premium amenities.",
            },
            {
              img: img2,
              text: "Eco-friendly construction with rainwater harvesting.",
            },
            {
              img: img3,
              text: "State-of-the-art security and surveillance systems.",
            },
            {
              img: img4,
              text: "Ample car parking and landscaped gardens.",
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
            "5 mins from Thrissur Railway Station.",
            "Near Jubilee Mission Hospital & Devamatha School.",
            "Easy access to highways, shopping malls, and cultural centers.",
            "Peaceful residential environment ideal for families.",
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
