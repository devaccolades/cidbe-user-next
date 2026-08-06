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
    <section className="relative overflow-hidden bg-[#F7F7F7] py-24">
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-lime-200 blur-[120px]" />
      <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-lime-200 blur-[120px]" />

      {/* Watermark */}
      <Image
        src="/images/logo-watermark.png"
        alt="Watermark"
        width={500}
        height={300}
        className="absolute bottom-0 right-10 opacity-[0.05] pointer-events-none select-none"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center gap-10 px-6 lg:px-8">

        {/* Left Image */}
        <div className="w-full lg:w-[32%]">
          <div className="relative h-[430px] overflow-hidden rounded-3xl shadow-xl">
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

          <h2 className="mb-6 text-5xl font-light uppercase">
            WHY CHOOSE US?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="mb-3 text-[26px] leading-[30px] font-light">
                  {item.title}
                </h3>

                <p className="text-sm leading-5 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}