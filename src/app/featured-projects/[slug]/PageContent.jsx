'use client';
import React, { useState } from 'react';
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import HeroSection from '../../../components/projectinnerpage/HeroSection';
import '../../../components/projectinnerpage/projectDetails.css';
import dynamic from 'next/dynamic';
import { SkeletonLoader } from '../../../components/skeletoneffect/Skelten';
import FeaturedFaq from './FeaturedFaq';

const Brochure = dynamic(() => import('../../../components/projectinnerpage/Brochure'), { ssr: false, loading: () => <SkeletonLoader />, });
const DeepDeatiles = dynamic(() => import('../../../components/projectinnerpage/DeepDeatiles'), { ssr: false, loading: () => <SkeletonLoader />, });

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://cidbi.com/featured-projects/premium-flats-cassia#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes CIDBI’s premium apartments in Thrissur stand out?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CIDBI’s premium apartments in Thrissur combine smart home features, open green spaces, and luxury amenities that families value today. With over three decades of trust in the city, CIDBI delivers homes that balance comfort, technology, and a strong community atmosphere."
          }
        },
        {
          "@type": "Question",
          "name": "Are premium 2 BHK apartments in Thrissur a good choice for small families?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Premium 2 BHK apartments in Thrissur are ideal for nuclear families or first-time buyers. At Cassia, the 2 BHK flats come with well-planned layouts, smart technology, and access to 40+ amenities, making everyday living convenient and modern."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I consider premium 3 BHK apartments in Thrissur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Premium 3 BHK apartments in Thrissur are perfect for growing families who want extra space without compromising on location or lifestyle. Cassia offers spacious 3 BHK flats designed with natural light, ventilation, and smart living features, along with community areas that bring families together."
          }
        },
        {
          "@type": "Question",
          "name": "Do premium 4 BHK flats in Thrissur offer long-term value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Premium 4 BHK flats in Thrissur are best for families who need large, open homes or those who plan for multi-generational living. Cassia’s 4 BHK units provide expansive floor space, advanced smart home systems, and luxury amenities, ensuring long-term comfort and strong investment value."
          }
        },
        {
          "@type": "Question",
          "name": "How can I book a site visit for Cassia apartments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Booking a site visit for Cassia is simple. You can reach out directly through the CIDBI website, submit an enquiry form, or call the sales team to schedule a convenient time to explore the location, project layout, and sample model."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cidbi.com/featured-projects/premium-flats-cassia#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://cidbi.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Featured Projects",
          "item": "https://cidbi.com/featured-projects"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Cassia – Premium Flats in Thrissur",
          "item": "https://cidbi.com/featured-projects/premium-flats-cassia"
        }
      ]
    }
  ]
};

export default function PageContent({ data }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      {data?.data?.slug === "premium-flats-cassia" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}

      {/* Hide Header when video modal is open */}
      {!isVideoModalOpen && <Header />}

      <HeroSection data={data?.data} images={data?.images || []} className='bg-[#ffff]' />
      <Brochure data={data?.data || {}} />
      <div className='bg-[#ffff]'>
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
          videosection={data?.videosection}
          className='bg-[#ffff]'
          onVideoModalOpen={() => setIsVideoModalOpen(true)}
          onVideoModalClose={() => setIsVideoModalOpen(false)}
        />
        <FeaturedFaq />
      </div>
      <Footer />
    </>
  );
}
