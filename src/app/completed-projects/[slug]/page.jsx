import React from "react";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import { getProjectDetails } from "../../../services/services";
import HeroSection from "../../../components/projectinnerpage/HeroSection";
import DeepDeatiles from "../../../components/projectinnerpage/DeepDeatiles";
import "../../../components/projectinnerpage/projectDetails.css";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
import { SkeletonLoader } from "../../../components/skeletoneffect/Skelten";

const Brochure = dynamic(
  () => import("../../../components/projectinnerpage/Brochure"),
  { ssr: false, loading: () => <SkeletonLoader /> },
);

async function fetchData(slug) {
  try {
    const res = await getProjectDetails(slug);

    if (res?.data?.StatusCode === 6000) {
      return res?.data;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching project details for slug: ${slug}`, error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await fetchData(slug);

  if (!data) {
    return {};
  }

  const project = data?.data;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const canonicalUrl = `https://cidbi.com/completed-projects/${slug}`;
  return {
    title: project?.meta_title || "Default Title",
    description: project?.meta_description || "Default Description",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = params;
  const isCandorPage = slug === "flats-in-punkunnam-candor";
  const data = await fetchData(slug);

  if (!data) {
    redirect("/completed-projects");
    return;
  }

  return (
    <>
      {/* <title>{data?.data?.meta_title || 'Default Title'}</title>
            <meta name="description" content={data?.data?.meta_description || 'Default Description'} /> */}
      <Header />
      <HeroSection
        data={data?.data}
        images={data?.images || []}
        className="bg-[#ffff]"
      />
      <Brochure data={data?.data || {}} />
      <div className="bg-[#ffff]">
        <DeepDeatiles
          amenities={data?.amenities}
          features={data?.features}
          amenities_images={data?.amenities_images}
          specification={data?.specification}
          blueprint_image={data?.data?.blueprint_image}
          floor_plan={data?.floor_plan}
          location={data?.data?.iframe}
          nearby={data?.nearby}
          videos={data?.videos}
          status={data?.status || []}
          bank={data?.bank}
          isCandorPage={isCandorPage}
          className="bg-[#ffff]"
        />
        {isCandorPage && (
          <div className="containers bg-white py-8 sm:py-10 md:py-14 ">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
              FAQ’s
            </h3>

            <div className="space-y-3 sm:space-y-4 w-full">
              {[
                {
                  question: "Are flats available in Punkunnam, Thrissur?",
                  answer:
                    "Yes, CIDBI Candor offers luxury 2 BHK and 3 BHK flats in Punkunnam, designed for modern families. These homes are spacious and thoughtfully planned for comfortable city living.",
                },
                {
                  question: "What amenities are available at CIDBI Candor?",
                  answer:
                    "CIDBI Candor offers a range of lifestyle amenities including a rooftop swimming pool, AC health club, and a dedicated play area for kids. The project also ensures safety with biometric entry and 24/7 camera surveillance.",
                },
                {
                  question:
                    "Is Punkunnam a good location to buy apartments in Thrissur?",
                  answer:
                    "Yes, Punkunnam is one of the most sought-after residential areas in Thrissur. It offers excellent connectivity to major roads, schools, and hospitals, while still providing a peaceful living environment.",
                },
                {
                  question:
                    "How can I book a flat at CIDBI Candor in Punkunnam?",
                  answer:
                    "Booking is simple and hassle-free. You can click the Enquire Now button on the website or call the sales team at +91 94969 33000 to schedule a site visit.",
                },
                {
                  question:
                    "Are the flats at CIDBI Candor in Punkunnam close to key facilities and services?",
                  answer:
                    "Yes, the project is located very close to essential facilities. The railway station is just a 300-meter walk away, and institutions like Devamatha Public School and Ashwini Hospital are also nearby.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="border rounded-xl p-4 sm:p-5 md:p-6 group transition-all duration-200 hover:shadow-sm"
                >
                  <summary className="cursor-pointer font-medium text-base sm:text-lg md:text-xl flex justify-between items-center gap-4">
                    <span>{faq.question}</span>
                    <span className="text-sm sm:text-base transition-transform duration-200 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
