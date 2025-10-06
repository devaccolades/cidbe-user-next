'use client';
import React, { useState } from 'react'
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import { getProjectDetails } from '../../../services/services';
import HeroSection from '../../../components/projectinnerpage/HeroSection';
import DeepDeatiles from '../../../components/projectinnerpage/DeepDeatiles';
import '../../../components/projectinnerpage/projectDetails.css'
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';
import { SkeletonLoader } from '../../../components/skeletoneffect/Skelten';
import FAQSection from '../../../components/FAQSection'
import Script from 'next/script';
const Brochure = dynamic(() => import('../../../components/projectinnerpage/Brochure'), { ssr: false, loading: () => <SkeletonLoader />, })

// Create a client component wrapper
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
          "name": "What’s the price range for premium flats in Thrissur at Cassia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cassia’s premium flats in Thrissur start from ₹71.85 lakhs onwards. Buyers can choose from 2, 3, and 4 BHK units depending on their budget and lifestyle needs, with flexible options that cater to both small and large families."
          }
        },
        {
          "@type": "Question",
          "name": "How well connected are premium apartments in Thrissur like Cassia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cassia is located near Daya Hospital in Viyyoor, one of the most accessible parts of Thrissur. It is close to schools, shopping hubs, and healthcare facilities, making it a prime choice for buyers seeking both convenience and comfort."
          }
        },
        {
          "@type": "Question",
          "name": "What amenities do CIDBI’s premium 2 BHK, 3 BHK, and 4 BHK flats in Thrissur offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CIDBI’s Cassia project offers 40+ premium amenities including an infinity pool, gym, clubhouse, landscaped gardens, kids’ play areas, jogging tracks, and smart home features like automated access and EV charging. These facilities add both lifestyle value and everyday convenience."
          }
        },
        {
          "@type": "Question",
          "name": "Are CIDBI’s premium apartments in Thrissur suitable for investment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Thrissur’s real estate market is steadily growing, and premium apartments in Thrissur from reputed builders like CIDBI provide strong long-term value. With smart features, prime locations, and modern designs, Cassia flats are not just homes but also secure investments."
          }
        }
      ]
    },

    {
      "@type": "AboutPage",
      "@id": "https://cidbi.com/featured-projects/premium-flats-cassia#about",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://cidbi.com/featured-projects/premium-flats-cassia"
      },
      "name": "Cassia – Premium Flats in Thrissur",
      "headline": "Cassia by CIDBI Builders – Premium 2, 3 & 4 BHK Apartments in Thrissur",
      "description": "Discover Cassia by CIDBI Builders – premium flats in Thrissur offering 2, 3, and 4 BHK apartments with world-class amenities. Starting at ₹71.85 Lakhs, Cassia is designed for families who want modern, spacious, and elegant homes in Thrissur. Explore premium apartments in Thrissur with unmatched quality and lifestyle features.",
      "url": "https://cidbi.com/featured-projects/premium-flats-cassia",
      "image": "https://backend.cidbi.com/media/projects/images/Cam_Night.webp",
      "publisher": {
        "@type": "Organization",
        "name": "CIDBI Builders",
        "url": "https://cidbi.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://backend.cidbi.com/media/projects/images/Cam_Night.webp"
        }
      }
    },

    {
      "@type": "Product",
      "@id": "https://cidbi.com/featured-projects/premium-flats-cassia#product",
      "name": "Premium Flats in Thrissur - CIDBI Cassia",
      "image": [
        "https://backend.cidbi.com/media/projects/images/Cam_Night.webp",
        "https://backend.cidbi.com/media/projects/images/bg_Fp5KdGb.webp",
        "https://backend.cidbi.com/media/projects/images/cassiaimages.webp"
      ],
      "description": "CIDBI Cassia offers premium 2, 3, and 4 BHK flats in Thrissur starting from ₹71.85 lakhs onwards. Located near Daya Hospital, Viyyoor, these smart homes come with 40+ modern amenities and 70% open space.",
      "brand": {
        "@type": "Brand",
        "name": "CIDBI Builders"
      },
      "sku": "CIDBI-CASSIA-THRISSUR",
      "offers": {
        "@type": "Offer",
        "url": "https://cidbi.com/featured-projects/premium-flats-cassia",
        "priceCurrency": "INR",
        "price": "7185000",
        "priceValidUntil": "2025-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "CIDBI Builders",
          "url": "https://cidbi.com"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "152"
      }
    },

    {
      "@type": "Residence",
      "@id": "https://cidbi.com/featured-projects/premium-flats-cassia#residence",
      "name": "Cassia – Premium Flats in Thrissur",
      "description": "Cassia by CIDBI Builders offers premium 2 BHK, 3 BHK, and 4 BHK apartments in Thrissur with modern amenities including gym, landscaped gardens, kids play area, covered parking, CCTV surveillance, and rainwater harvesting. Prices start at ₹71.85 Lakhs onwards.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Peringavu",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "postalCode": "680008",
        "addressCountry": "IN"
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Gym", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Landscaped Garden", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Kids Play Area", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Covered Parking", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "24/7 Power Backup", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "CCTV Surveillance", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Rainwater Harvesting", "value": true }
      ],
      "numberOfRooms": "2, 3, and 4 BHK",
      "floorSize": { "@type": "QuantitativeValue", "unitCode": "MTK", "value": "Varies" },
      "offers": {
        "@type": "Offer",
        "price": "7185000",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://cidbi.com/featured-projects/premium-flats-cassia"
      },
      "url": "https://cidbi.com/featured-projects/premium-flats-cassia",
      "image": "https://backend.cidbi.com/media/projects/images/Cam_Night.webp",
      "brand": {
        "@type": "Organization",
        "name": "CIDBI Builders",
        "url": "https://cidbi.com/"
      }
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
}


function PageContent({ data }) {
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
      <title>{data?.data?.meta_title || 'Default Title'}</title>
      <meta name="description" content={data?.data?.meta_description || 'Default Description'} />

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
        <FAQSection />
      </div>
      <Footer />
    </>
  );
}

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

export default async function Page({ params }) {
  const { slug } = params;
  const data = await fetchData(slug);

  if (!data) {
    redirect('/featured-projects');
    return;
  }

  return (
    <>
      <PageContent data={data} />
    </>
  );
}