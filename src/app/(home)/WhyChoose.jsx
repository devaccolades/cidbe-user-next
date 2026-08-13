import Image from "next/image";

const features = [
  {
    title: "Unparalleled Quality",
    description:
      "CIDBI, one of the top builders in Thrissur, delivers high-quality flats and apartments in Thrissur with unmatched consistency and construction excellence.",
  },
  {
    title: "Comprehensive Amenities",
    description:
      "CIDBI, one of the top builders in Thrissur, offers thoughtfully designed flats and apartments in Thrissur with modern amenities for a better lifestyle.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "CIDBI, trusted builders in Thrissur, offers quality flats and apartments with flexible floor plans and personalized service to match every lifestyle.",
  },
];

export default function WhyChoose() {
  return (
<div className="relative overflow-hidden pt-12 pb-36">
  {/* Green gradient — full section width */}
  <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-[#D9F99D] opacity-70 blur-[120px]" />

  {/* Bottom-right decoration — full section width */}
  <Image
    src="/images/home/c.svg"
    alt="Decoration"
    width={400}
    height={400}
    className="pointer-events-none absolute bottom-0 right-0 z-0 select-none"
  />

  {/* Content container */}
  <div className="containers relative z-10 flex flex-col gap-4 md:flex-row md:gap-6 md:items-start lg:gap-10">
    
    {/* Left Image */}
    <div className="h-full w-full md:w-[30%] lg:w-[32%]">
      <div className="relative h-[250px] overflow-hidden rounded-3xl shadow-[20px] md:h-[350px] lg:h-[430px]">
        <Image
          src="/images/home/whychoose.png"
          alt="Family"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Right Content */}
    <div className="flex-1">
      <h2 className="mb-2 font-[general-sans-medium] text-[20px] -tracking-[-2%] text-start md:mb-4 md:text-[26px] lg:mb-6 lg:text-[32px]">
        WHY CHOOSE US?
      </h2>

      <div className="grid gap-2 md:grid-cols-3 md:gap-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <h3 className="mb-1 font-[general-sans-medium] text-[20px] leading-[120%] text-[#000000] md:mb-3">
              {item.title}
            </h3>

            <p className="font-[general-sans-regular] text-[12px] leading-[156%] text-[#464646] md:text-[14px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
  );
}
