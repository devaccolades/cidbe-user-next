import Image from "next/image";

export default function AboutLanding() {
  return (
    <>
      <section
        className="h-[373px] md:h-[356px] lg:h-[760px] -mt-[78px] lg:-mt-[95px] bg-cover bg-center overflow-hidden flex items-center"
        style={{
          backgroundImage: 'url("/images/about/about page landing bg img.png")',
        }}
      >
        <div className="h-full flex items-center w-full relative justify-between">
          <div className="flex flex-col items-start z-10 pl-10">
            <Image
              src="/images/about/about landing page logo.png"
              alt="About Landing Logo"
              width={430}
              height={270}
            />
            <p className="mt-4 text-black">
              Your premier choice for <br />
              quality housing solutions in <br />
              Thrissur
            </p>
          </div>
          <div
            className="relative flex items-center justify-center"
            style={{ color: "transparent", zIndex: 11, left: "40px" }}
          >
            <Image
              src="/images/about/shape.svg fill.svg"
              alt="Decorative Shape"
              width={40}
              height={760}
            />
          </div>
          <div className="flex-1 h-full overflow-hidden z-10">
            <div className="h-full w-full relative">
              <Image
                src="/images/about/about landing page side image.jpeg"
                alt="About Landing Side Image"
                layout="fill"
                objectFit="cover"
                className="rounded-br-[121px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
