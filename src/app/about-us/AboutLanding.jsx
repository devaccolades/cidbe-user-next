import Image from "next/image";
import shape from "../../../public/images/about/about-banner-shape.svg";
import bannerRightImage from "/Users/niyas/Desktop/Cidbi/cidbe-user-next/public/images/home/about-image.jpg"
import bannerLogo from "../../../public/images/about/about-us-cidbi-logo.svg"

export default function AboutLanding() {
  return (
    <>
    <section className="h-[350px] lg:h-[760px]  flex flex-row rounded-br-[120px] -mt-[80px] lg:-mt-[95px] bg-[#EDFBFD]">
      <div className="w-[60%] flex items-center justify-center">
      <div className="w-[710px] absolute left-[290px] top-[224]">
        <Image src={bannerLogo} alt="bannerLogo" className="h-[207px] w-[430px]" />
         <h1 className="w-[680px]  mt-10 font-[general-sans-regular] text-[#483C32] text-[40px]  uppercase leading-[54px]">Your premier choice for <span className="text-[#00652E]"> quality </span> housing solutions in <span className="text-[#00652E]">Thrissur</span>  </h1>
        </div>
      </div>
      <Image
  src={shape}
  alt="Shape"
  className="w-[40px] z-10   "
  style={{ height: 'fit-content', objectFit: 'contain' }}
/>
      <div className="w-[40%] h-full bg-cover bg-center -ms-[40px] rounded-br-[120px] " style={{ backgroundImage: `url(${bannerRightImage.src})` }}/>
    </section>
    <div className="h-screen">

    </div>
  </>
  
    )
    }
   
    