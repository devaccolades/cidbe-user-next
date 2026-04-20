import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
// import ProjectListing from '../../components/projectlisting/ProjectListing';
import dynamic from "next/dynamic";
import Skelten from "../../components/skeletoneffect/Skelten";
const ProjectListing = dynamic(
  () => import("../../components/projectlisting/ProjectListing"),
  { ssr: false, loading: () => <Skelten /> },
);

import { getSeoApi } from "../../services/services";
import ReadyToOccupySeo from "./ReadyToOccupySeo.jsx";

async function fetchSeoData(path) {
  let data = {};
  try {
    const res = await getSeoApi(path);
    data = res.data.data[0];
  } catch (error) {
    console.log(error);
  }
  return data;
}

export async function generateMetadata() {
  const path = "/ready-to-occupy";
  const responseData = await fetchSeoData(path);
  const { meta_title, meta_description } = responseData;
  return {
    title: meta_title,
    description: meta_description,
    alternates: {
      canonical: `https://cidbi.com${path}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function page() {
  const title = "Ready to Occupy ";

  return (
    <>
      <Header bgPrimary={true} />
      {/* <ProjectListing title={title} /> */}
      <section className=" -mt-[60px] lg:-mt-[95px] font-[general-sans-regular] text-[--secondary-cl]">
        {/* HERO SECTION */}
        <div className="relative bg-white pt-28 pb-16 lg:pt-48 lg:pb-40 overflow-hidden">
          {/* Decorative Background Block */}
          <div className="absolute top-0 right-0 w-full lg:w-[45%] h-[400px] sm:h-[500px] lg:h-full bg-[--primary-cl]/20 -z-0" />

          <div className="containers relative z-10 px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-0">
              {/* LEFT SIDE */}
              <div className="lg:col-span-8 ">
                <div className="flex items-center gap-4 mb-6 lg:mb-8">
                  <div className="w-8 lg:w-12 h-[1px] bg-[--secondary-cl]"></div>
                  <span className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[--secondary-cl] font-bold">
                    Established 1986 / Thrissur
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[120px] leading-[0.9] lg:leading-[0.8] tracking-tighter text-[--secondary-cl]">
                  <span className="block mb-2">Buy Premium</span>
                  <span className="relative inline-block font-light">
                    Ready to Occupy
                  </span>
                  <span className="block text-[--primary-cl] mt-4 brightness-75">
                    Flats in Thrissur
                  </span>
                </h1>
              </div>

              {/* RIGHT SIDE */}
              <div className="lg:col-span-4 lg:pt-32 flex flex-col justify-between">
                <div className="relative pl-6 lg:pl-0">
                  {/* Mobile-only accent line */}
                  <div className="absolute left-0 top-0 w-[1px] h-full bg-[--secondary-cl]/20 lg:hidden"></div>

                  <p className="text-lg sm:text-xl lg:text-xl leading-relaxed text-[--secondary-cl] mb-6 lg:mb-8 font-medium italic">
                    Stepping into a finished space is something special and
                    finding the perfect home without the wait feels amazing. You
                    dodge construction delays and can settle in right away.
                    Plus, you get exactly what you see and this makes the buying
                    process completely stress free. If you want ready to move
                    flats in Thrissur, our beautiful Candor project stands as a
                    prime example of this finished excellence. It perfectly
                    shows the high quality of our ready to occupy flats.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Big Background Watermark */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-10 text-[25vw] lg:text-[20vw] font-bold text-[--secondary-cl] opacity-[0.02] select-none pointer-events-none leading-none whitespace-nowrap z-0">
            CIDBI
          </div>
        </div>

        {/* QUOTE BANNER */}
        <div className="bg-white py-8 lg:py-12">
          <div className="containers px-4 sm:px-6">
            <p className="text-center text-lg sm:text-xl lg:text-2xl max-w-5xl mx-auto leading-relaxed italic border-y border-[--primary-cl] py-8 lg:py-10">
              "Choosing CIDBI’s ready to occupy apartments simply means starting
              your new life today in Thrissur."
            </p>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="containers px-4 sm:px-6 py-12 lg:my-20">
          <div className="bg-[--secondary-cl] rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-cl),transparent)] opacity-10" />
            <div className="relative z-10 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 lg:mb-6 tracking-tight">
                Got questions about ready to move flats in Thrissur?
              </h2>
              <p className="text-[--primary-cl] text-base sm:text-lg max-w-xl opacity-80">
                Our team is right here to help you out. Drop us a message or
                give us a quick call today. Let us guide you to a space that
                fits your family perfectly.
              </p>
            </div>
            <ReadyToOccupySeo>
              <button className="relative z-10 w-full lg:w-auto group bg-[--primary-cl] hover:bg-white text-[--secondary-cl] px-8 lg:px-12 py-5 lg:py-6 rounded-full font-bold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-500 shadow-xl">
                Enquire Now
              </button>
            </ReadyToOccupySeo>
          </div>
        </div>

        {/* BENEFITS GRID */}
        <div className="py-16 lg:py-24 bg-[--secondary-cl] text-white overflow-hidden">
          <div className="containers px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-6 lg:gap-8">
              <div className="max-w-3xl">
                <h2 className="text-5xl sm:text-6xl md:text-8xl tracking-tighter leading-[0.9] lg:leading-[0.85] font-[general-sans-regular]">
                  Benefits of Buying <br className="hidden sm:block" />
                  <span className="text-[--primary-cl] ">
                    Ready to Move Flats .
                  </span>
                </h2>
              </div>
              <div className="lg:max-w-sm">
                <p className="text-base sm:text-lg opacity-60 leading-relaxed font-[general-sans-regular]">
                  Choosing a finished flat brings you instant peace of mind.
                  Buying a completed home removes all the stress of waiting.
                </p>
              </div>
            </div>

            <div className="relative border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {[
                  {
                    t: "Move in Now",
                    d: "You get the keys right away. There are zero construction delays to mess up your plans.",
                    tag: "Instant Possession",
                  },
                  {
                    t: "No Hidden Surprises",
                    d: "Walking through the actual space lets you check every detail. What appears is exactly what is delivered.",
                    tag: "Absolute Clarity",
                  },
                  {
                    t: "Quick Loan Approvals",
                    d: "Banks love finished properties. This makes getting a home loan for ready to move flats in Thrissur much faster and easier.",
                    tag: "Financial Ease",
                  },
                  {
                    t: "Save on Taxes",
                    d: "Buying completed homes keeps more money in your pocket. Our finished Candor project requires absolutely no GST.",
                    tag: "Zero GST",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`group relative p-6 lg:p-10 border-b border-white/10 transition-all duration-500 hover:bg-white/[0.03]
                ${i % 2 === 0 ? "md:border-r" : ""} 
              `}
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="h-[1px] w-8 bg-white/10 group-hover:w-16 group-hover:bg-[--primary-cl] transition-all duration-500"></div>
                    </div>

                    <div className="min-h-[60px] flex flex-col justify-end">
                      <span className="block text-[--primary-cl] text-[10px] uppercase tracking-[0.4em] mb-3 opacity-100 lg:opacity-0 group-hover:opacity-100 transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0 transition-all duration-500">
                        {item.tag}
                      </span>
                      <h4 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] font-[general-sans-regular]">
                        {item.t}
                      </h4>
                    </div>

                    <div className="mt-6 lg:mt-8">
                      <p className="text-base sm:text-lg opacity-60 lg:opacity-40 lg:group-hover:opacity-80 leading-relaxed font-[general-sans-regular] transition-opacity duration-500">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex   flex-col md:flex-row justify-center items-center gap-6 opacity-40 text-[10px] sm:text-sm tracking-widest uppercase">
              <p className="text-center">
                Ready to occupy flats offer a smooth and risk free path to
                owning your dream home in Thrissur.
              </p>
              {/* <div className="h-px flex-grow mx-8 bg-white/20 hidden md:block"></div>
              <p>Risk-Free Path to Ownership</p> */}
            </div>
          </div>
        </div>

        {/* WHY THRISSUR */}
        <div className="py-20 lg:py-32 bg-white">
          <div className="containers px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              <div className="lg:w-1/3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter text-[--secondary-cl] mb-6 lg:mb-8 lg:sticky lg:top-32">
                  Why Buy Ready <br className="hidden lg:block" />
                  to Move Flats <br className="hidden lg:block" />
                  in Thrissur
                </h2>
                <p className="text-base sm:text-lg opacity-70">
                  Thrissur offers a beautiful mix of rich culture and modern
                  living. Choosing ready to move flats gives you an amazing
                  lifestyle in Thrissur right away. Here is why this city is the
                  perfect choice for your next home:
                </p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                {[
                  {
                    title: "Growing Infrastructure",
                    desc: "Massive projects like Thrissur Railway Station upgrade make travel easy. The ongoing NH544 highway expansion also keeps the city highly connected.",
                  },
                  {
                    title: "Quality of Living",
                    // desc: "People truly love the clean, green, and culturally vibrant neighbourhoods here, making apartments in Thrissur a popular option for those seeking a safe and peaceful place to raise a happy family. ",
                    desc: (
                      <>
                        People truly love the clean, green, and culturally
                        vibrant neighbourhoods here, making{" "}
                        <a
                          href="https://cidbi.com/apartments-flats-thrissur"
                          className="text-blue-600 hover:underline"
                        >
                          apartments in Thrissur
                        </a>{" "}
                        a popular option for those seeking a safe and peaceful
                        place to raise a happy family.
                      </>
                    ),
                  },
                  {
                    title: "Top Facilities",
                    desc: "Access to schools like CMI Public School and Bhavan's. Healthcare centres like Jubilee Mission and Amala Medical College are always close by.",
                  },
                  {
                    title: "Strong Market",
                    desc: "The Thrissur property market is actively booming. Experts project 8% to 10% annual price growth for prime homes in 2026.",
                  },
                ].map((point, i) => (
                  <div
                    key={point.title}
                    className="border-l-2 border-[--primary-cl] pl-6 lg:pl-8 py-2"
                  >
                    <h5 className="text-lg lg:text-xl font-bold mb-3">
                      {point.title}
                    </h5>
                    <p className="text-sm opacity-70 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AMENITIES */}
        <div className="bg-[--secondary-cl] py-20 lg:py-32 rounded-[2rem] lg:rounded-[5rem] mx-2 sm:mx-4 lg:mx-8">
          <div className="containers px-6">
            <div className="mb-12 lg:mb-20 flex flex-col lg:flex-row justify-between lg:items-end gap-6 lg:gap-8">
              <h2 className="text-white text-3xl sm:text-4xl md:text-6xl tracking-tighter leading-tight">
                Amenities Available <br className="hidden md:block" />
                in Ready to Move Apartments
              </h2>
              <p className="text-[--primary-cl] opacity-60 max-w-md pb-0 lg:pb-2 text-sm sm:text-base">
                Stepping into ready move flats means enjoying a fully equipped
                lifestyle from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl lg:rounded-3xl overflow-hidden">
              {[
                {
                  t: "Health and Fitness",
                  d: "Stay active with a modern AC health club and a beautiful rooftop swimming pool.",
                },
                {
                  t: "Fun for Everyone",
                  d: "Host fun parties in the AC recreation hall or let kids enjoy safe play areas.",
                },
                {
                  t: "Top Tier Security",
                  d: "Keep your family totally safe with 24hour security, CCTV cameras, and smart biometric door locks.",
                },
                {
                  t: "Daily Comfort",
                  d: "Enjoy smooth living in your ready to move flats with full generator backup and solar power.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[--secondary-cl] p-8 lg:p-12 hover:bg-white transition-all duration-700 group"
                >
                  <h4 className="text-[--primary-cl] group-hover:text-[--secondary-cl] text-xl lg:text-2xl font-bold mb-4 transition-colors">
                    {item.t}
                  </h4>
                  <p className="text-white group-hover:text-[--secondary-cl] opacity-60 group-hover:opacity-80 leading-relaxed text-sm lg:text-base transition-all">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHY CHOOSE CIDBI */}
        <div className="containers px-4 sm:px-6 py-20 lg:py-32">
          <div className="bg-[--primary-cl]/20 rounded-[2.5rem] lg:rounded-[4rem] p-8 sm:p-12 lg:p-24 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-7xl tracking-tighter text-[--secondary-cl] mb-6">
                Why Choose <br className="hidden lg:block" />
                CIDBI Builders
              </h2>
              <div className="h-1 w-24 lg:w-32 bg-[--secondary-cl] mb-8 mx-auto lg:mx-0" />
              <p className="text-xl sm:text-2xl font-medium leading-snug text-[--secondary-cl]">
                40+ Years. 20+ Projects. <br />
                11 Million Square Feet.
              </p>
            </div>
            <div className="lg:w-1/2">
              <p className="text-base sm:text-lg opacity-80 leading-relaxed text-center lg:text-left">
                CIDBI, with over 40 years of experience, is a trusted builder in
                Thrissur. We have successfully delivered over 20 premium
                projects and 11 million square feet of space. Our biggest
                strength is our strict "No Sub Contracts" policy. Managing every
                single detail in house guarantees premium construction quality
                in all our residential projects in Thrissur.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="bg-[#f2f6f2] py-20 lg:py-32">
          <div className="containers px-4 sm:px-6">
            <h3 className="text-3xl lg:text-4xl text-center font-bold mb-12 lg:mb-16 text-[--secondary-cl]">
              FAQ'S
            </h3>
            <div className="max-w-4xl mx-auto grid gap-4 lg:gap-6">
              {[
                {
                  q: "Are ready to move apartments available in Thrissur?",
                  a: "Yes, many premium options exist today and you can easily find ready to move flats in Thrissur. Our completed projects like CIDBI Candor offer immediate possession for your family.",
                },
                {
                  q: "Is buying a ready apartment better than under construction?",
                  a: "Yes, it offers instant peace of mind. You avoid all construction delays completely. Buying ready to occupy apartments in Thrissur means you get exactly what you pay for today.",
                },
                {
                  q: "Do ready to move flats require GST?",
                  a: "It depends, certain completed homes prior to RERA with a completion certificate do not attract GST. This makes ready to occupy flats in Thrissur a highly cost effective choice for smart buyers.",
                },
                {
                  q: "What amenities are available in ready to move apartments in Thrissur?",
                  a: "Ready to move flats in Thrissur feature all common luxury amenities. Swimming pools rooftop or ground, AC health clubs, secure play areas, and 24hour smart security systems are only some of them.",
                },
                {
                  q: "Are home loans available for ready to move apartments?",
                  a: "Yes, banks process loans much faster for finished properties. You can easily secure quick financing to buy your dream ready to occupy apartments in Thrissur.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 cursor-pointer shadow-sm border border-transparent hover:border-[--primary-cl] transition-all"
                >
                  <summary className="list-none flex justify-between items-center text-base sm:text-lg lg:text-xl font-bold">
                    <span className="pr-4">{faq.q}</span>
                    <span className="text-xl lg:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg opacity-70 border-t border-[--primary-cl]/20 pt-4 lg:pt-6">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer backGround="" />
    </>
  );
}

export default page;
