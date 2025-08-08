import Image from "next/image";
import shape from "../../../public/images/about/about-banner-shape.svg";
import shapeMobile from "../../../public/images/about/about-banner-shape-mobile.svg";
import bannerRightImage from "../../../public/images/home/about-image.webp"
import bannerLogo from "../../../public/images/about/about-us-cidbi-logo.svg"

export default function AboutLanding() {
  return (
    <>
      <section className="md:h-[350px] overflow-hidden main-section lg:h-[760px] flex flex-col md:flex-row rounded-br-[60px] md:rounded-br-[60px] lg:rounded-br-[120px] -mt-[80px] lg:-mt-[95px] bg-[#EDFBFD]">
        <div className="flex justify-center items-end md:items-center w-full -mt-[30px] mb-[20px] md:mb-0 md:mt-0 lg:mt-[70px] h-[360px] md:h-full bg-[#EDFBFD]">
          <div className="flex justify-center  flex-col gap-[20px] ms-[5%] md:ms-[120px]">
          <Image src={bannerLogo} alt="bannerLogo" className="w-[187px] md:w-[22.39vw]" />
          <h1 className="w-10/12 lg:w-[35.4wv] lg:max-w-[680px] font-[general-sans-regular] text-[#483C32] text-[20px] lg:text-[40px]  uppercase leading-[27px] lg:leading-[54px] ">Your premier choice for <span className="text-[#00652E]"> quality </span> housing solutions in <span className="text-[#00652E]">Thrissur</span>  </h1>
          </div>
        </div>
        <Image
          src={shape}
          alt="flat for sale in Thrissur"
          className="w-[40px] z-10 -ms-[20px] -me-[40px] shape hidden md:block"
          style={{ height: 'fit-content', objectFit: 'contain' }}
        />
        <Image src={shapeMobile} alt="flat for sale in Thrissur" className="min-[100px] w-full z-10 md:hidden block"/>
        <div className="w-full md:w-8/12 h-[360px] md:h-full bg-cover bg-center rounded-br-[60px] md:rounded-br-[60px] lg:rounded-br-[120px] " style={{ backgroundImage: `url(${bannerRightImage.src})` }} />
      </section>
    </>

  )
}

