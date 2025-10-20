"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { getFaqApi, getTestimonialApi } from "../../services/services";
import { Dialog } from "@material-tailwind/react";
import { throttle } from "lodash";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
// icons
import quatsIcon from "../../../public/icons/quats.webp";
import plusIcon from "../../../public/icons/plus.webp";
import minusIcon from "../../../public/icons/minus.webp";
import playIcon from "../../..//public/icons/play.webp";

import customerReviewbg from "../../../public/images/home/customer-reviewsbg.webp";
import path from "path";

function CustomerReviewsAndFaq() {
  const pathname = usePathname();

  const [numItems, setNumItems] = useState(1);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [isOpend, setOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRef = useRef(null);
  const [isContact, setIscontact] = useState(false);

  useEffect(() => {
    if (pathname.includes("/contact-us")) {
      setIscontact(true);
    } else {
      setIscontact(false);
    }
  }, [pathname])

  const handleModalClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleImageClick = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!isModalOpen && videoRef.current) {
      videoRef.current.pause();
      setCurrentVideo(null);
    }
  }, [isModalOpen]);

  useEffect(() => {
    const determineNumItems = () => {
      const width = window.innerWidth;
      if (width < 768) return 1;
      if (width >= 768 && width <= 1700) return 2;
      return 3;
    };

    setNumItems(determineNumItems());

    const handleResize = throttle(() => {
      setNumItems(determineNumItems());
    }, 200);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ferchData
  const fetchData = async (apiFunc, setData) => {
    try {
      const res = await apiFunc();
      const { StatusCode, data } = res.data;
      if (StatusCode === 6000) {
        setData(data);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error(error);
      setData([]);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      await Promise.all([
        fetchData(getTestimonialApi, setTestimonials),
        fetchData(getFaqApi, setFaqs),
      ]);
    };

    fetchAllData();
  }, []);
  return (
    <section
      className={`relative text-[--secondary-cl] overflow-hidden z-10 ${
        pathname === "/contact-us" ? "" : "reviews-bg-gradient"
      }  py-[40px] lg:py-[90px] flex flex-col gap-[20px] md:gap-[50px] lg:gap-[130px]`}
    >
      <Image
        src={customerReviewbg}
        className="absolute right-0 hidden lg:block -z-10 top-[-150px]"
        alt="flats in Thrissur"
      />

      {/* Customer reviews */}
      <div className="containers ">
        <h2 className="font-[clash-display-medium] text-[20px] lg:text-[32px]">
          Customer Reviews
        </h2>
        <div className="mt-[10px] lg:mt-[44px] ">
          <Swiper
            spaceBetween={50}
            slidesPerView={numItems}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {testimonials.map((testimoni, index) => (
              <SwiperSlide key={index}>
                {testimoni.type === "text" ? (
                  <div
                    key={index}
                    className=" bg-white cursor-pointer h-[478px] rounded-[12px] py-[30px] grid md:grid-rows-[110px,1fr,110px]"
                  >
                    <div className="px-[20px]">
                      <Image src={quatsIcon} alt="Builders in Thrissur" />
                    </div>
                    <p className="px-[30px] font-[general-sans-medium] text-[14px] lg:text-[16px] leading-[24px]">
                      {testimoni?.review_text}
                    </p>
                    <div className="px-[30px] flex flex-row gap-[10px] lg:gap-[20px] items-center">
                      <div
                        className="w-[60px] h-[60px] rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${testimoni?.profile_picture})`,
                        }}
                      />
                      <div className="flex flex-col">
                        <p className="text-[15px] font-[inter-medium]">
                          {testimoni?.customer_name}
                        </p>
                        <p className="text-[14px] font-[inter-regular]">
                          {testimoni?.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="relative w-full h-[478px] bg-center bg-cover rounded-[12px] cursor-pointer"
                    style={{ backgroundImage: `url(${testimoni?.thumbnail})` }}
                    onClick={() => handleImageClick(testimoni?.video)}
                  >
                    <Image
                      className="absolute top-[45%] left-[45%] opacity-[70%]"
                      width={50}
                      src={playIcon}
                      alt="Apartments in Thrissur"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Faq */}
      <div className="containers">
        <h2 className="font-[clash-display-medium] text-[20px] lg:text-[32px]">
          FAQ
        </h2>
        <div className="text-black">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div
                className="flex justify-between flex-row cursor-pointer"
                onClick={() => setOpen(isOpend === index ? null : index)}
              >
                <p
                  className={`${
                    isOpend === index
                      ? "font-[general-sans-medium]"
                      : "font-[general-sans-regular]"
                  } text-[12px] lg:text-[16px] py-[14px] w-[90%] md:w-5/12 lg:w-1/3 cursor-pointer `}
                  onClick={() => setOpen(isOpend === index ? null : index)}
                >
                  {faq.question || ""}
                </p>
                <button className="cursor-pointer">
                  <Image
                    src={isOpend === index ? minusIcon : plusIcon}
                    alt="flats in Thrissur"
                  />
                </button>
              </div>
              <AnimatePresence>
                {isOpend === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-[general-sans-regular] text-[12px] lg:text-[16px] py-[8px] leading-[18px] lg:leading-[24px]">
                      {faq.answer || ""}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <hr className="border-t-[1px] border-t-[--secondary-cl]" />
            </div>
          ))}
        </div>
      </div>

      {!isContact && (
        <div className="containers">
          <div className="flex flex-col md:flex-row justify-between items-start gap-[15px]">
            <div className="w-[100%] md:w-[50%] flex flex-col">
              <div className="mb-[16px]">
                <h2 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                  CIDBI – Trusted Builders in Thrissur
                </h2>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[12px] md:text-[13px]">
                    CIDBI (Creations India Developers Builders Infrastructures)
                    has stood for trust and quality in Kerala’s construction
                    landscape for more than three decades. As one of the leading
                    builders in Thrissur, we have constructed flats and
                    apartments that reflect comfort, style and have enduring
                    value.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    CIDBI was founded in 2005. Under the leadership of Mr. A.A.
                    Abdul Lathif, CIDBI has grown into a name synonymous with
                    excellence. We are an ISO 9001:2015 certified builder with
                    over 35 years of experience and a proud track record of 110
                    lakh sq. ft. of completed projects across residential and
                    commercial segments.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    Our success lies in one simple promise — we deliver what we
                    commit.
                  </p>
                </div>
              </div>
              {/* new section  */}
              <div className="mb-[16px]">
                <h2 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                  Experience That Builds Trust
                </h2>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[12px] md:text-[13px]">
                    CIDBI has built a reputation for excellence through
                    dedication and professionalism as one of the most reliable
                    builders in Thrissur. We have developed residential &
                    commercial buildings, educational institutions and hospitals
                    buildings that stand as benchmarks in design and quality
                    over the years.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    Each project begins with a vision to create living spaces
                    that blend modern architecture with practical functionality.
                    Our projects are built to enrich everyday life whether you
                    are looking for luxury flats in Thrissur or thoughtfully
                    designed apartments in Thrissur.
                  </p>
                </div>
              </div>
              {/* new section  */}
              <div className="mb-[16px]">
                <h2 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                  No Sub-Contracts – Total Quality Control
                </h2>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[12px] md:text-[13px]">
                    One of the biggest strengths that set CIDBI apart from other
                    builders in Thrissur is our “No Sub-Contracts” policy. We
                    take pride in managing every stage of construction in-house
                    from laying stone to finish. This ensures complete control
                    over quality and timelines.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    Unlike builders who depend on multiple external contractors,
                    CIDBI handles all processes with our own skilled team. It
                    include structural work, electrical fittings, plumbing,
                    painting and interiors. This approach guarantees superior
                    craftsmanship, uniform quality and timely delivery in every
                    project.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    Our clients trust us because they know every corner of their
                    home is built by CIDBI professionals, not outsourced
                    workers. It’s a promise of accountability and precision that
                    few builders in Thrissur can match.
                  </p>
                </div>
              </div>
              {/* new section  */}
              <div className="mb-[16px]">
                <h2 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                  Flats in Thrissur Designed for Modern Living
                </h2>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[12px] md:text-[13px]">
                    CIDBI design homes that reflect how people truly live today.
                    Our flats in Thrissur combine comfort, elegance and
                    functionality to meet the needs of modern families. Each
                    home is thoughtfully planned with open spaces,
                    cross-ventilation and natural light to create a refreshing
                    atmosphere for residents.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    Every apartment comes equipped with the best materials,
                    efficient layouts and smart amenities. CIDBI offers
                    apartments in Thrissur that fit your lifestyle and budget
                    whether you are a young professional or a growing family.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    Our design philosophy focuses on the details that make a
                    difference — safe neighbourhoods, easy accessibility and
                    vibrant community spaces that bring people together.
                  </p>
                </div>
              </div>
              {/* new section  */}
              <div className="mb-[16px]">
                <h2 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                  ISO Certified Commitment to Quality
                </h2>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[12px] md:text-[13px]">
                    CIDBI follows a strict Quality Assurance process at every
                    stage of construction as an ISO 9001:2015 certified builder.
                    Every detail is checked and verified for consistency, from
                    selecting raw materials to finishing touches.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    We use advanced construction methods and eco-friendly
                    practices to ensure long-term durability and sustainability
                    in our projects. When you buy flats in Thrissur from CIDBI,
                    you are investing in unmatched quality and lasting peace of
                    mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[50%] flex flex-col">
              {/* new section  */}
              <div className="mb-[16px]">
                <h2 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                  Apartments in Thrissur with a Lifestyle Edge
                </h2>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[12px] md:text-[13px]">
                    CIDBI believes a home is more than just four walls. It’s a
                    place where life unfolds beautifully. Our apartments in
                    Thrissur are designed with amenities that enhance both
                    comfort and community living.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    Every feature is chosen with care from landscaped gardens to
                    fitness centres, play areas and security systems. Our
                    developments are strategically located close to schools,
                    hospitals, shopping centres and major roadways. It ensure
                    convenience and accessibility for every family.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    Each of CIDBI’s project is crafted to provide the perfect
                    balance of privacy and modern living.
                  </p>
                </div>
              </div>
              <div className="mb-[16px]">
                <h2 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                  Led by Vision, Driven by Values
                </h2>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[12px] md:text-[13px]">
                    Our founder, Mr. A.A. Abdul Lathif, has built CIDBI on the
                    principles of honesty, transparency and integrity. The
                    company has maintained a culture of professionalism and
                    innovation under his leadership. CIDBI’s team of engineers
                    and professionals work together with a clear mission to
                    build homes that people love to live in.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    This commitment has made CIDBI one of the most respected
                    builders in Thrissur.
                  </p>
                </div>
              </div>
              {/* new section  */}
              <div className="mb-[16px]">
                <h2 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                  Timely Delivery – Our Promise, Your Peace of Mind
                </h2>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[12px] md:text-[13px]">
                    CIDBI ensure each project is completed on schedule without
                    compromising quality. Our in-house construction model allows
                    us to closely monitor progress, reduce dependency on third
                    parties and keep projects on time. Whether it’s luxury
                    apartments in Thrissur or budget-friendly flats in Thrissur,
                    CIDBI delivers every project with punctuality and precision.
                  </p>
                </div>
              </div>
              {/* new section  */}
              <div className="mb-[16px]">
                <h2 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                  Why Choose CIDBI – The Trusted Builders in Thrissur
                </h2>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[12px] md:text-[13px]">
                    <span className="font-semibold"> Proven Expertise:</span>{" "}
                    Over 35 years of construction excellence and 3 of completed
                    projects.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    <span className="font-semibold">
                      {" "}
                      Total In-House Control:
                    </span>{" "}
                    No sub-contracts; we manage every detail ourselves.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    <span className="font-semibold"> Assured Quality: </span>{" "}
                    ISO 9001:2015 certified builder with strict quality checks.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    <span className="font-semibold">
                      {" "}
                      Customer-Centric Design:{" "}
                    </span>{" "}
                    Homes built for real people, real lifestyles.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    <span className="font-semibold"> Timely Delivery: </span>{" "}
                    Every project completed as promised.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    Choosing CIDBI means choosing peace of mind, trust, and
                    superior value.
                  </p>
                  <p></p>
                </div>
              </div>
              {/* new section  */}
              <div className="mb-[16px]">
                <h2 className="text-[14px] font-bold mb-[5px]">
                  A Legacy of Excellence in Thrissur
                </h2>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[12px] md:text-[13px]">
                    Our journey began in Thrissur and our roots remain deeply
                    connected to this vibrant city. Over the years, CIDBI has
                    grown alongside Thrissur’s expanding skyline. We shaped its
                    neighbourhoods with thoughtful designs and long-lasting
                    construction.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    Whether you’re seeking flats in Thrissur for immediate
                    occupancy or apartments in Thrissur with a modern touch,
                    CIDBI offers options that combine affordability quality and
                    aesthetic appeal.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    Each of our projects reflects our dedication to creating
                    spaces that truly feel like home, places where families
                    grow, memories are made and lives flourish.
                  </p>
                </div>
              </div>
              {/* new section  */}
              <div className="mb-[16px]">
                <h2 className="text-[12px] md:text-[13px] font-bold mb-[5px]">
                  Your Dream Home Awaits
                </h2>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[12px] md:text-[13px]">
                    CIDBI’s promise goes beyond bricks and mortar. It’s about
                    building trust and happiness for every family we serve.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    If you’re looking for reliable builders in Thrissur for
                    buying flats in Thrissur or apartments in Thrissur that
                    stand the test of time, CIDBI is your trusted partner.
                  </p>
                  <p className="text-[12px] md:text-[13px]">
                    Let’s build your dream home together with quality you can
                    see, value you can feel and trust that lasts a lifetime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <Dialog
          size="xl"
          open={isModalOpen}
          handler={handleModalClose}
          className="bg-transparent"
        >
          <video
            ref={videoRef}
            className="h-full w-full rounded-[10px]"
            controls
            autoPlay
            src={currentVideo}
          />
        </Dialog>
      )}
    </section>
  );
}

// const VideoModal = ({ onClose, children }) => {
//     return (
// <div onClick={onClose} className='fixed top-0 left-0 w-full h-[100%] bg-[#06060675] flex justify-center items-center video-modal' >
//     <div onClick={(e) => e.stopPropagation()} className='relative video-modal'>
//         {children}
//     </div>
// </div >
//     );
// };

export default CustomerReviewsAndFaq;
