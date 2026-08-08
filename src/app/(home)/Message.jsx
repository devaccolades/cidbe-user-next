"use client";

export default function Message({
  label = "Chairman's Message",
  heading = "Our journey is built on integrity, quality, and customer satisfaction",
  message = `Welcome to CIDBI. We drive forward with our commitment to innovation and excellence. Our journey is built on integrity, quality, and customer satisfaction. At CIDBI, we build homes that become a part of your soul, reflecting your taste and aspirations. We ensure that every moment you spend in your home is not built with walls and beams, but with love and dreams. We don't push our ideas; we create what you want. Thank you for your trust and support as we continue to excel in the industries we serve. Warm regards,`,
  name = "A A Abdul Lathif",
  roles = ["CEO, CIDBI, Thrissur", "President, CREDAI, Thrissur Chapter"],
  image = "/images/home/chair.webp",
}) {
  return (
    <section className="relative bg-[#fafaf8] overflow-hidden">
      {/* decorative leaf pattern, top-right */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[420px] h-[260px] opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, #4ade80 1px, transparent 1px), radial-gradient(circle at 70% 60%, #4ade80 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative grid grid-cols-1 md:grid-cols-2">
        {/* Photo */}
        <div className="relative w-full h-[300px] xl:h-[600px] md:h-full">
          <img src={image} alt={name} className="absolute inset-0 h-full w-full object-cover" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-6 xl:px-12 py-6">
          <span className="text-[14px] font-[inter-regular] font-medium text-[#185D41] mb-2">{label}</span>

          <h2 className="xl:text-[48px] lg:text-[40px] md:text-[28px] text-[24px] font-[general-sans-regular] leading-[120%] -tracking-[2%] font-bold text-[#000000] mb-2 md:mb-3 max-w-xl">
            {heading}
          </h2>

          <p className="lg:text-[14px] text-[13px] font-[inter-regular] leading-[140%] text-[#464646] max-w-xl mb-4 md:mb-8 whitespace-pre-line">
            {message}
          </p>

          <div>
            <p className="font-[inter-medium] text-[14px] md:text-[16px] leading-[20px] text-[#000000]">{name}</p>
            {roles.map((role) => (
              <p key={role} className="font-[inter-regular] text-[13px] md:text-[14px] text-[#000000]">
                {role}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}