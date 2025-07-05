import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Herosection from "./Herosection";
import FaqSection from "./FaqSection";
import HighlightsSection from "./HighlightsSection";
import FormSection from "./FormSection";
import WhyChooseSection from "./WhyChooseSection";
// import ScrollToTop from "@components/scrollToTop/ScrollToTop.jsx";
import ScrollToTop from "../../components/scrollToTop/ScrollToTop";
import { getSeoApi } from "../../services/services";
import Head from 'next/head';

export async function generateMetadata() {
  try {
    const res = await getSeoApi('/apartments-flats-thrissur');
    const { data } = res.data;

    return {
      title: data?.[0]?.meta_title || 'Apartments and flats in thrissur',
      description: data?.[0]?.meta_description || 'Default Description',
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: 'Blogs',
      description: 'Default Description',
    };
  }
}


const faqStructuredData = {
  
 "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I find a flat for sale in Thrissur with immediate possession?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CIDBI has ready-to-move flats in Thrissur across multiple projects like Candor and Cassia. These homes are fully completed, legally clear, and available for quick handover, ideal if you don’t want to wait for a project under construction."
          }
        },
        {
          "@type": "Question",
          "name": "What types of apartments in Thrissur does CIDBI offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You’ll find 2 BHK, 3 BHK, and even 4 BHK apartments in Thrissur from CIDBI, each designed to give you more space, natural light, and comfort. Whether you’re a first-time buyer or upgrading, there’s something for every family size and budget."
          }
        },
        {
          "@type": "Question",
          "name": "Are CIDBI flats in Thrissur equipped with smart home features?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Projects like Cassia are designed as smart homes with automation features, modern amenities, and energy-efficient layouts. These flats in Thrissur combine daily convenience with long-term value."
          }
        },
        {
          "@type": "Question",
          "name": "Which locations in Thrissur are CIDBI flats available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CIDBI has projects in key parts of Thrissur including Viyyoor, close to Daya Hospital. These areas offer easy access to schools, hospitals, and daily needs, making them great places to live or invest in."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose a CIDBI apartment in Thrissur over other builders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "CIDBI is known for precise handovers, transparent pricing, and solid construction. Their apartments in Thrissur are built to last, combining thoughtful architecture with practical amenities plus, they deliver when they promise."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a premium flat for sale in Thrissur within ₹1 crore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, at CIDBI Candor you can find 2 BHK with study starting at ₹81.5 lakhs and 3 BHK flats at ₹1.02 crore. These are limited in number and located in developed residential zones, ready for immediate move-in."
          }
        },
        {
          "@type": "Question",
          "name": "Do CIDBI apartments in Thrissur include lifestyle amenities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Definitely. Projects like Cassia offer 40+ amenities including landscaped gardens, indoor play areas, fitness zones, and 70% open space. These homes are designed to offer more than just a place to stay they support a better way of living."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Cidbi - Top builders in Thrissur",
          "item": "https://cidbi.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Apartments & Flats for Sale in Thrissur",
          "item": "https://cidbi.com/apartments-flats-thrissur"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://cidbi.com/apartments-flats-thrissur",
      "name": "Apartments and Flats for Sale in Thrissur – 2, 3, 4 BHK Smart Homes by CIDBI",
      "url": "https://cidbi.com/apartments-flats-thrissur",
      "description": "Explore premium 2 BHK, 3 BHK, and 4 BHK apartments and flats for sale in Thrissur by CIDBI, a trusted builder known for smart home features, timely delivery, and quality construction. Whether you're looking for a ready-to-occupy flat in a prime location or a spacious apartment with lifestyle amenities, CIDBI offers thoughtfully designed homes to match every need.",
      "about": {
        "@type": "Thing",
        "name": "Apartments and Flats for Sale in Thrissur",
        "description": "CIDBI offers smart and spacious 2, 3, and 4 BHK apartments and flats for sale in Thrissur across projects like Cassia and Candor, with modern amenities, prime locations, and immediate availability."
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "CIDBI Cassia",
            "description": "Premium smart apartments in Viyyoor, Thrissur starting from ₹71.85 Lakhs, offering 2, 3, and 4 BHK units with 40+ amenities and 70% open space."
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "CIDBI Candor",
            "description": "Ready-to-occupy flats in Punkunnam, Thrissur with 2 BHK + Study starting at ₹81.5 Lakhs and 3 BHK from ₹1.02 Cr. Limited units available."
          }
        ]
      },
      "audience": {
        "@type": "Audience",
        "audienceType": [
          "Homebuyers in Thrissur",
          "Real estate investors",
          "NRIs looking for property in Kerala",
          "Families seeking apartments in Thrissur"
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "CIDBI",
        "url": "https://cidbi.com",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 94969 33000",
          "email": "salescidbi@gmail.com",
          "contactType": "Customer Support"
        }
      }
    },
    {
      "@type": "RealEstateListing",
      "name": "CIDBI Apartments and Flats for Sale in Thrissur",
      "description": "Discover premium flats and apartments in Thrissur developed by CIDBI, one of Kerala’s trusted real estate builders. Choose from smartly designed 2 BHK, 3 BHK, and 4 BHK units across prime residential areas like Viyyoor. These homes offer modern features, spacious layouts, and ready-to-move options starting at ₹71.85 lakhs. Popular projects include Cassia and Candor, each built to meet the needs of families, professionals, and investors.",
      "url": "https://cidbi.com/apartments-flats-thrissur",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://cidbi.com/apartments-flats-thrissur"
      },
      "propertyType": "ResidentialApartment",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Viyyoor",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "addressCountry": "IN",
        "postalCode": "680001"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "7185000",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": 7185000,
          "maxPrice": 12000000,
          "priceCurrency": "INR"
        },
        "availability": "https://schema.org/InStock"
      },
      "seller": {
        "@type": "RealEstateAgent",
        "name": "CIDBI – Centre for Information and Development of Builders in India",
        "email": "salescidbi@gmail.com",
        "telephone": "+91 94969 33000",
        "url": "https://cidbi.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "CIDBI Office, Viyyoor",
          "addressLocality": "Thrissur",
          "addressRegion": "Kerala",
          "postalCode": "680001",
          "addressCountry": "IN"
        }
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Smart Home Automation",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "40+ Lifestyle Amenities",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "70% Open Space",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Clubhouse and Fitness Center",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Landscaped Gardens",
          "value": true
        }
      ],
      "numberOfRooms": 4,
      "floorSize": {
        "@type": "QuantitativeValue",
        "minValue": 1159,
        "maxValue": 2548,
        "unitCode": "FTK"
      }
    }
  ]
}


export default async function page() {
  return (
    <>
      {/* <Head>
        <link rel="canonical" href="https://cidbi.com/"/>
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head> */}
      <main>
      <Header />
      <ScrollToTop />
      <Herosection />
      <WhyChooseSection />
      <FormSection />
      <HighlightsSection />
      <FaqSection />
      <Footer />
      </main>
    </>
  );
}