"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import {
  getCompletedProject,
  getFeaturedProject,
  getOngoingProject,
  getReadyToOccupyProject,
  getUpcomingProject,
} from "../../services/services";
import NotFound from "../../components/common/NotFound";
import { usePathname } from "next/navigation";
import Skelten from "../skeletoneffect/Skelten";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// Icons
import dropdownGreeen from "../../../public/icons/dropdown-greeen.webp";

import "./ProjectList.css";

const featuredProjectAddOnDatas = [
  {
    title: "CIDBI CASSIA: Redefining Premium Flats in Thrissur",
    description: `
    <p><span style="color:#000000">Nestled near Daya Hospital, Viyyoor, CIDBI Cassia stands as a beacon of modern living, offering a harmonious blend of luxury, comfort, and smart home technology. Designed for families seeking spacious and elegant homes, this premium project by one of the top builders in Thrissur features 2 BHK 3 BHK &amp; 4 BHK smart homes with areas ranging from 1159 to 2548 sq. ft., catering to diverse lifestyle needs.</span></p>
    <p><span style="color:#000000"><strong>Amenities That Redefine Luxury</strong></span></p>
    <p><span style="color:#000000">At CIDBI Cassia, residents are surrounded by an array of amenities designed to elevate their living experience. With 70% open space, this community ensures a serene environment, perfect for relaxation and recreation. The 15m long infinity pool with a pool lounge provides a tranquil escape, while the open gym and health club support a healthy lifestyle.</span></p>
    <p><span style="color:#000000"><strong><em>Key highlights include:</em></strong></span></p>
    <p><span style="color:#000000">Home Theatre for entertainment enthusiasts.</span></p>
    <p><span style="color:#000000">Dedicated Children&rsquo;s Play Area and a Kids Pool for the little ones.</span></p>
    <p><span style="color:#000000">A Jogging Park spanning 250 meters to encourage fitness routines.</span></p>
    <p><span style="color:#000000">Thoughtful spaces like a Senior&#39;s Corner and a Garden Gazebo.</span></p>
    <p><span style="color:#000000">For gatherings and social occasions, the Barbeque Corner and Meeting Hall offer excellent venues. The 1 BHK guest apartments ensure hospitality for visitors, while the Double Height Entry Plaza and Spacious Lobby exude grandeur.</span></p>
    <p><span style="color:#000000"><strong>Cutting-Edge Smart Features</strong></span></p>
    <p><span style="color:#000000">CIDBI Cassia boasts an impressive suite of smart specifications, making it one of the most technologically advanced </span><a href="https://cidbi.com/featured-projects/premium-flats-cassia" style="text-decoration:none"><span style="color:#1155cc"><u>premium flats in Thrissur</u></span></a><span style="color:#000000">:</span></p>
    <p><span style="color:#000000">Face-detected access control and automated car-detected boom barriers enhance security.</span></p>
    <p><span style="color:#000000">Automated garden watering systems and smart lighting in parking and landscapes promote sustainability.</span></p>
    <p><span style="color:#000000">Smart tech extends to conveniences like video door phones, automated smoke detectors, and lift call features from within apartments.</span></p>
    <p><span style="color:#000000">Provisions for electric car charging and access-controlled lifts reflect a future-forward approach.</span></p>
    <p><span style="color:#000000"><strong>Proximity to Key Locations</strong></span></p>
    <p><span style="color:#000000">Located just 100 meters from Daya Hospital, CIDBI Cassia ensures easy access to essential services. It is also close to prominent spots like Ashwini Junction (1.9 km), Swaraj Round (2.8 km), and KSRTC Stand (4.2 km), making it one of the most conveniently located </span><a href="https://cidbi.com/featured-projects/premium-flats-cassia" style="text-decoration:none"><span style="color:#1155cc"><u>luxury apartments in Thrissur</u></span></a><span style="color:#000000">.</span></p>
    <p><span style="color:#000000">For families, the proximity to schools (1.7 km) and churches (900 meters) adds to its appeal. With its unbeatable combination of location, amenities, and technology, CIDBI Cassia is a top choice for homebuyers seeking the best 3 BHK apartments in Thrissur.</span></p>
    <p>&nbsp;</p>
  `,
  },
  // {
  //   title:
  //     "CIDBI CANDOR: Your Destination for Ready to Occupy Apartments in Thrissur",
  //   description: `
  //   <p><span style="color:#000000">Situated in Poonkunnam, CIDBI Candor is the epitome of elegance and convenience, offering 2 BHK &amp; 3 BHK premium luxury apartments that are ready to occupy. Designed by one of the </span><a href="https://cidbi.com/" style="text-decoration:none"><span style="color:#1155cc"><u>best builders in Thrissur</u></span></a><span style="color:#000000">, this project ensures an unmatched living experience, combining modern design with practicality.</span></p>
  //   <p><span style="color:#000000"><strong>Amenities for a Comfortable Lifestyle</strong></span></p>
  //   <p><span style="color:#000000">CIDBI Candor is designed to cater to every aspect of urban living. With a rooftop swimming pool and a party area, residents can unwind while enjoying panoramic city views. The children&rsquo;s play area ensures a safe space for kids, while the air-conditioned health club supports an active lifestyle.</span></p>
  //   <p><span style="color:#000000"><strong><em>Additional amenities include:</em></strong></span></p>
  //   <p><span style="color:#000000">A multi-purpose AC recreation hall for social gatherings.</span></p>
  //   <p><span style="color:#000000">Advanced security features such as biometric card entry, CCTV surveillance, and intercom connectivity.</span></p>
  //   <p><span style="color:#000000">Sustainable energy solutions with a 5kW solar panel connected to the grid.</span></p>
  //   <p><span style="color:#000000">Convenience features like an electronics main door lock, automatic gate, and generator backup for uninterrupted power.</span></p>
  //   <p><span style="color:#000000"><strong>Prime Location in Thrissur</strong></span></p>
  //   <p><span style="color:#000000">CIDBI Candor offers excellent connectivity, being just 300 meters from Punkunnam Railway Station and 1.5 km from Swaraj Round. Families will appreciate the proximity to Devamatha Public School (2 km) and essential services like Ashwini Hospital (1 km) and Bismi Hypermarket (700 meters).</span></p>
  //   <p><span style="color:#000000">These </span><a href="https://cidbi.com/featured-projects/flats-in-thrissur-candor" style="text-decoration:none"><span style="color:#1155cc"><u>ready to occupy flats in Thrissur</u></span></a><span style="color:#000000"> are perfect for homebuyers looking for a combination of convenience and luxury. With its strategic location and top-notch amenities, CIDBI Candor stands out as a symbol of modern living.</span></p>
  //   <p><span style="color:#000000"><strong>Choose CIDBI: Trusted Builders in Thrissur</strong></span></p>
  //   <p><span style="color:#000000">CIDBI has earned its reputation as one of the top builders in Thrissur, offering thoughtfully designed homes that cater to various budgets and preferences. Whether you are looking for luxury flats, budget flats, or ready to occupy apartments, CIDBI delivers exceptional quality and innovation.</span></p>
  //   <p><span style="color:#000000">Both CIDBI Cassia and CIDBI Candor showcase the perfect balance of comfort, technology, and location. Experience the best of urban living by choosing your dream home with CIDBI.</span></p>
  //   <p>&nbsp;</p>
  // `,
  // },
];

const completedProjectAddOnDatas = [
  {
    title: "Completed Projects: A Testament to Quality & Innovation",
    description: `
    <p><span style="color:#000000">For over 33 years, CIDBI has been a name synonymous with trust, quality, and excellence in the
construction industry. Based in Thrissur, we have successfully completed 110 lakh square feet of
projects across a variety of sectors, including residential, commercial, healthcare, and educational
institutions. Each of our projects reflects our commitment to delivering high-quality spaces tailored
to meet client needs, making us one of the most trusted builders in Thrissur town.</p>
<p><span style="color:#000000">
Our team is dedicated to creating spaces that exceed expectations, ensuring that every detail aligns
with global standards. Whether it is luxury apartments in Thrissur town, budget-friendly flats, or
large-scale infrastructure, we bring a Iblend of innovation, craftsmanship, and timely delivery to
every project. With a proven track record of excellence, CIDBI is the builder you can rely on when
you buy  </span><a href="https://cidbi.com" style="text-decoration:none"><span style="color:#1155cc"><u>apartments in Thrissur</u></span></a><span style="color:#000000"></span>.
</span></p>
    <p><span style="color:#000000"><strong>Diverse Industry Experience</strong></span></p>
    <p><span style="color:#000000">CIDBI’s versatility as a builder is evident in our wide range of completed projects. We have made a
significant impact across various sectors, adapting to diverse client needs while maintaining the
highest standards of quality and professionalism.</p>
<p><span style="color:#000000">
Residential: Our expertise in residential construction includes luxury apartments in Thrissur, budgetfriendly flats, and spacious villas. Each project is designed to provide comfort, style, and modern
amenities, catering to the varied preferences of homebuyers. Our new flats projects in Thrissur are
crafted to offer both functionality and elegance.</p>
<p><span style="color:#000000">
Commercial Spaces: CIDBI has developed numerous commercial properties, including office
buildings and shopping complexes. These spaces are designed with practicality and aesthetics in
mind, ensuring they meet the demands of businesses and investors alike.</p>
<p><span style="color:#000000">
Healthcare: In the healthcare sector, CIDBI has constructed hospitals and medical facilities equipped
with advanced technology and infrastructure, ensuring a positive impact on the community.</p>
<p><span style="color:#000000">
Education: Our contributions to the educational sector include the construction of schools and
colleges, offering modern learning environments that inspire students and educators.</p>
<p><span style="color:#000000">
Infrastructure: Beyond buildings, CIDBI has developed large-scale infrastructure projects that
enhance urban connectivity and contribute to the growth of Thrissur as a thriving hub.</p>
<p><span style="color:#000000">
By delivering projects that cater to varied industries, CIDBI has established itself as a reliable and
versatile builder. Whether you’re looking to buy  </span><a href="https://cidbi.com" style="text-decoration:none"><span style="color:#1155cc"><u>flats in Thrissur</u></span></a><span style="color:#000000"></span> or invest in a commercial project,
CIDBI’s expertise ensures a seamless experience.
</span></p>
    <p><span style="color:#000000"><strong>Our Commitment to Quality</strong></span></p>
        <p><span style="color:#000000">At CIDBI, quality is not just a promise; it’s a core value. Every project we undertake is backed by
stringent quality checks to ensure durability, functionality, and customer satisfaction. From flats in
Thrissur town for sale to hospitals and shopping complexes, our commitment to excellence is
evident in every structure we build.</p>
<p><span style="color:#000000">
Our team uses cutting-edge construction technologies, industry best practices, and premium
materials to deliver top-notch results. Personal supervision at every stage of construction ensures
that every detail, from the foundation to the finishing touches, meets our exacting standards. This
dedication to precision and quality has earned us a reputation as trusted builders in Thrissur.</p>
<p><span style="color:#000000">
We also prioritize feedback from our clients, continuously refining our processes to meet evolving
needs. Whether it’s luxury apartments for sale in Thrissur or a budget  </span><a href="https://cidbi.com/blogs/premium-apartments-flats-in-Thrissur" style="text-decoration:none"><span style="color:#1155cc"><u>flat for sale in Thrissur</u></span></a><span style="color:#000000"></span>, CIDBI
guarantees a home-buying experience that exceeds expectations.
</span></p>
    <p>&nbsp;</p>
  `,
  },
];

function ProjectListing({ title }) {
  const [isOpend, setOpen] = useState(null);

  const pathname = usePathname();
  const [page, setPage] = useState(1);
  const [page_limit, setPage_limit] = useState(
    pathname === "/completed-projects" ? 6 : window.innerWidth <= 1150 ? 2 : 3
  );
  const [total_count, setTotal] = useState(0);
  const [projects, setprojects] = useState(null);

  const fetchData = async () => {
    try {
      let res = "";
      if (pathname === "/featured-projects") {
        res = await getFeaturedProject(page, page_limit);
      } else if (pathname === "/ongoing-projects") {
        res = await getOngoingProject(page, page_limit);
      } else if (pathname === "/upcoming-projects") {
        res = await getUpcomingProject(page, page_limit);
      } else if (pathname === "/completed-projects") {
        res = await getCompletedProject(page, page_limit);
      } else if (pathname === "/ready-to-occupy") {
        res = await getReadyToOccupyProject(page, page_limit);
      }
      const { StatusCode, data } = res.data;
      if (StatusCode === 6000) {
        setprojects(data);
        setTotal(res.data.total_count);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else {
        setprojects([]);
      }
    } catch (error) {
      console.log(error);
      setprojects([]);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  const handleClick = (pageNumber) => {
    setPage(pageNumber);
  };
  return (
    <main className="bg-[--primary-cl] bg-cover bg-no-repeat project-list-bg -mt-[80px] lg:-mt-[95px]">
      <section className="containers res-custom-container">
        <h1 className="text-center pt-[120px] text-[16px] lg:text-[32px] font-[clash-display-medium]">
          {title}
        </h1>
        {projects === null ? (
          <Skelten />
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 custom-listing md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full py-[30px]">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <NotFound />
        )}
      </section>
      <div className="pb-[30px] flex justify-end containers">
        <nav
          className="relative z-0 inline-flex shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            onClick={() => handleClick(page - 1)}
            disabled={page === 1}
            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
              page === 1 ? "cursor-not-allowed" : "hover:text-gray-700"
            }`}
          >
            Previous
          </button>
          {Array.from(
            { length: Math.ceil(total_count / page_limit) },
            (_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index + 1)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                  page === index + 1
                    ? "z-10 bg-gray-100 text-gray-900 cursor-default"
                    : "hover:text-gray-500"
                }`}
              >
                {index + 1}
              </button>
            )
          )}
          <button
            onClick={() => handleClick(page + 1)}
            disabled={page === Math.ceil(total_count / page_limit)}
            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${
              page === Math.ceil(total_count / page_limit)
                ? "cursor-not-allowed"
                : "hover:text-gray-700"
            }`}
          >
            Next
          </button>
        </nav>
      </div>
      {
  (pathname === '/featured-projects' || pathname === '/completed-projects') && (
    <div className='containers res-custom-container flex flex-col gap-[6px] lg:gap-[20px] pt-[30px] pb-[30px] lg:pb-[60px]'>
      {pathname === '/featured-projects' && featuredProjectAddOnDatas.map((item, index) => (
        <AddOnContent
          item={item}
          key={index}
          isOpend={isOpend}
          setOpen={setOpen}
          index={index}
        />
      ))}
      {pathname === '/completed-projects' && completedProjectAddOnDatas.map((item, index) => (
        <AddOnContent
          item={item}
          key={index}
          isOpend={isOpend}
          setOpen={setOpen}
          index={index}
        />
      ))}
    </div>
  )
}
    </main>
  );
}

const AddOnContent = ({ item, isOpend, setOpen, index }) => (
  <>
    <div className="flex flex-col">
      <div
        className="flex flex-row justify-between cursor-pointer md:w-[96%] mx-auto"
        onClick={() => setOpen(isOpend === index ? null : index)}
      >
        <h2 className="text-[16px] lg:text-[26px] font-[clash-display-medium]">
          {item?.title}
        </h2>
        <motion.div
          animate={{
            rotate: isOpend === index ? 180 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex justify-center items-center"
        >
          <Image src={dropdownGreeen} className="lg:w-[16px]" alt="" />
        </motion.div>
      </div>
      <hr className="border-t-[1px] border-t-[--secondary-cl]" />
    </div>
    <AnimatePresence>
      {isOpend === index && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:px-[20px] flex flex-col gap-[10px] lg:pt-[10px] add-on-data-card-description"
          dangerouslySetInnerHTML={{ __html: item?.description }}
        />
      )}
    </AnimatePresence>
  </>
);

export default ProjectListing;
