import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
// import ProjectListing from '../../components/projectlisting/ProjectListing';
import dynamic from "next/dynamic";
import Skelten from "../../components/skeletoneffect/Skelten";
import chembaka from "../../../public/images/logo/Group 1 (1).png";
// import { Rocket, Bell } from "lucide-react";

const ProjectListing = dynamic(
  () => import("../../components/projectlisting/ProjectListing"),
  { ssr: false, loading: () => <Skelten /> },
);

import { getSeoApi } from "../../services/services";
import Image from "next/image";

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
  const path = "/upcoming-projects";
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
  const title = "Upcoming Projects";
  return (
    <>
      <Header bgPrimary={true} />
      <main className="relative w-full -mt-[80px] lg:-mt-[95px]">
        <section className="relative  flex flex-col items-center justify-center min-h-screen px-6 py-10 md:py-20 bg-[#BFD8BD] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none ">
            <div
              className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
              style={{
                backgroundImage: `linear-gradient(#052D23 1px, transparent 1px), linear-gradient(90deg, #052D23 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />

            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#052D23] opacity-[0.08] blur-[120px] rounded-full animate-[pulse_8s_ease-in-out_infinite]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white opacity-[0.3] blur-[100px] rounded-full animate-[pulse_10s_ease-in-out_infinite]" />
          </div>

          <div className="relative mt-4 md:mt-16 lg:mt-32 z-10 max-w-10xl text-center flex flex-col items-center">
            <div className="mb-16 relative">
              <div className="absolute inset-0 -m-10 border border-dashed border-[#052D23]/20 rounded-full animate-[spin_20s_linear_infinite]" />

              <div className="relative w-32 h-28 md:w-44 md:h-44 bg-white/40 backdrop-blur-xl border border-white/40 rounded-[2.5rem] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] ]">
                <span className="w-full drop-shadow-2xl">
                  <Image
                    src={chembaka}
                    alt="logo"
                    className="w-full h-full p-3"
                  />
                </span>

                {/* <div className="absolute top-4 right-4 w-2 h-2 bg-[#052D23] rounded-full" /> */}
              </div>
            </div>

            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#052D23]/20" />
              <span className="text-xs md:text-sm font-bold tracking-[0.4em] text-[#052D23] uppercase">
                Coming Soon
              </span>
              <div className="h-[1px] w-12 bg-[#052D23]/20" />
            </div>

            <h1 className="text-6xl md:text-9xl font-black text-[#052D23] mb-8 tracking-tighter leading-[0.85] text-balance">
              Elevating <br />
              <span className="text-white opacity-90 drop-shadow-sm font-light italic">
                Everyday Living
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-[#052D23]/70 mb-10 leading-relaxed max-w-6xl mx-auto font-[general-sans-regular] font-medium balance">
              Thrissur blends rich heritage with modern urban living, offering
              excellent access to education, healthcare, shopping, and
              transport. Introducing{" "}
              <span className="text-[#052D23] font-semibold">
                Chembaka Premium Luxury Apartments
              </span>{" "}
              by CIDBI—thoughtfully designed homes that combine comfort,
              elegance, and convenience. Located close to everything you need,
              it’s an ideal choice for refined living in the heart of the city.
            </p>

            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-12 py-5 bg-transparent text-[#052D23] font-bold rounded-2xl border-2 border-[#052D23]/10 hover:bg-white/30 transition-all duration-300">
                Our Vision
              </button>
            </div> */}
          </div>

          {/* <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-40">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#052D23] uppercase">
              Scroll to explore
            </p>
            <div className="w-[1px] h-16 bg-gradient-to-b from-[#052D23] to-transparent" />
          </div> */}
        </section>
      </main>
      {/* <ProjectListing title={title} /> */}

      <Footer backGround="" />
    </>
  );
}

export default page;
