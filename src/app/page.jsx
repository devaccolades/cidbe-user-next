import React from "react";
import { getSeoApi } from "../services/services";
import dynamic from "next/dynamic";
import Header from "../layout/Header";
import AboutSection from "../app/(home)/AboutSection";
import Chairman from "../app/(home)/Chairman";
import Skelten from "../components/skeletoneffect/Skelten";
import Footer from "../layout/Footer";
import HomePageSkelten from "../components/skeletoneffect/HomePageSkelten";
import Head from "next/head";
import Script from "next/script";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

const FeaturedProject = dynamic(() => import("../app/(home)/FeaturedProject"), {
  ssr: false,
  loading: () => <Skelten />,
});
const Blogs = dynamic(() => import("../app/(home)/Blogs"), {
  ssr: false,
  loading: () => <Skelten />,
});
const CustomerReviewsAndFaq = dynamic(
  () => import("../app/(home)/CustomerReviewsAndFaq"),
  { ssr: false, loading: () => <Skelten /> }
);
const HeroSection = dynamic(() => import("../app/(home)/HeroSection"), {
  ssr: false,
  loading: () => <HomePageSkelten />,
});

async function fetchSeoData(path) {
  let data = {};
  try {
    const res = await getSeoApi(path);
    data = res.data.data[0];
  } catch (error) {
    console.log(error);
  }
  return data;
}

// FAQ schema

const faqStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://cidbi.com",
      name: "CIDBI – Smart Apartments and Flats in Thrissur for Sale",
      url: "https://cidbi.com",
      description:
        "Looking for flats in Thrissur that blend quality, space, and smart living? CIDBI offers premium 2 BHK, 3 BHK, and 4 BHK apartments designed for comfort, convenience, and future-ready lifestyles. Whether you're searching for a flat for sale in Thrissur for your family or want to invest in ready-to-occupy homes, CIDBI’s projects like Cassia and Candor stand out for their top locations, superior construction, and lifestyle amenities. Discover spacious apartments in Thrissur that come with modern features, excellent connectivity, and unmatched value.",
      about: {
        "@type": "Thing",
        name: "Flats in Thrissur, Flat for sale in Thrissur, Apartments in Thrissur",
        description:
          "CIDBI is a trusted real estate builder in Thrissur offering well-designed apartments and flats for sale in prime localities. With ongoing and ready-to-move projects like Cassia and Candor, the brand focuses on delivering timely, smart, and durable homes that cater to the real needs of families and investors in Kerala. From 2 BHK to 4 BHK options, CIDBI flats in Thrissur come with modern amenities, high livability, and ideal proximity to schools, hospitals, and daily essentials.",
      },
      audience: {
        "@type": "Audience",
        audienceType: [
          "Homebuyers in Thrissur",
          "Real estate investors",
          "NRIs looking for property in Kerala",
          "Families seeking apartments in Thrissur",
          "Buyers looking for ready-to-occupy flats",
        ],
      },
      publisher: {
        "@type": "Organization",
        name: "CIDBI",
        url: "https://cidbi.com",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91 94969 33000",
          email: "salescidbi@gmail.com",
          contactType: "Customer Support",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://cidbi.com",
      },
    },
    {
      "@type": "Service",
      serviceType: "Flats and Apartments for Sale in Thrissur",
      name: "CIDBI Flats and Apartments in Thrissur",
      description:
        "Explore premium 2 BHK, 3 BHK, and 4 BHK flats in Thrissur by CIDBI. Ready-to-occupy and ongoing apartments available in top localities like Viyyoor and Punkunnam. Ideal for families, investors, and professionals looking for quality living and value.",
      provider: {
        "@type": "Organization",
        name: "CIDBI",
        url: "https://cidbi.com",
        logo: "https://cidbi.com/assets/images/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91 94969 33000",
          contactType: "Sales",
          areaServed: "IN",
          availableLanguage: ["en"],
        },
      },
      areaServed: {
        "@type": "Place",
        name: "Thrissur, Kerala, India",
      },
      offers: [
        {
          "@type": "Offer",
          name: "CIDBI Cassia",
          description:
            "Ongoing smart apartments in Viyyoor, Thrissur. 2, 3 & 4 BHK flats from ₹71.85 lakhs with 40+ amenities.",
          priceCurrency: "INR",
          price: "7185000",
          url: "https://cidbi.com/featured-projects/premium-flats-cassia",
          availability: "https://schema.org/PreOrder",
        },
        {
          "@type": "Offer",
          name: "CIDBI Candor",
          description:
            "Ready-to-move flats in Punkunnam, Thrissur. 2 BHK + Study from ₹81.5 lakhs, 3 BHK at ₹1.02 Cr.",
          priceCurrency: "INR",
          price: "8150000",
          url: "https://cidbi.com/featured-projects/flats-in-thrissur-candor",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    {
      "@type": "RealEstateAgent",
      name: "CIDBI – Centre for Information and Development of Builders in India",
      image: "https://cidbi.com/assets/images/logo.png",
      url: "https://cidbi.com",
      logo: "https://cidbi.com/assets/images/logo.png",
      description:
        "CIDBI is a leading real estate builder in Thrissur offering premium apartments and flats designed for modern families. Known for smart home features, prime locations, and on-time delivery, CIDBI helps buyers find flats in Thrissur that match both comfort and value.",
      areaServed: {
        "@type": "Place",
        name: "Thrissur, Kerala",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "CIDBI Office, Viyyoor",
        addressLocality: "Thrissur",
        addressRegion: "Kerala",
        postalCode: "680001",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 94969 33000",
        email: "salescidbi@gmail.com",
        contactType: "Sales",
        areaServed: "IN",
        availableLanguage: "English",
      },
      sameAs: ["https://www.instagram.com/cidbithrissur/", "https://cidbi.com"],
    },
  ],
};

const newSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://cidbi.com/blogs/2-bhk-flat-in-thrissur-the-perfect-choice",
  },
  headline: "2 BHK Flat in Thrissur: Perfect Choice for Small Families",
  image:
    "https://cidbi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.7a355fa9.webp&w=3840&q=75",
  author: {
    "@type": "Organization",
    name: "Cidbi Builders",
    url: "https://cidbi.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "Cidbi",
    logo: {
      "@type": "ImageObject",
      url: "https://cidbi.com/_next/static/media/logo.5484c0aa.svg",
    },
  },
  datePublished: "2023-07-25",
};

export async function generateMetadata() {
  const path = "/";
  const responseData = await fetchSeoData(path);
  const { meta_title, meta_description } = responseData;
  return {
    title: meta_title,
    description: meta_description,
    robots: {
      index: true,
      follow: true,
    },
  };
}

function Page() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedProject />
      <Chairman />
      <Blogs />
      <CustomerReviewsAndFaq />
      <Footer />
      <Script
        id="seo-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <Script
        id="seo-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newSchema) }}
      />
    </>
  );
}

export default Page;
