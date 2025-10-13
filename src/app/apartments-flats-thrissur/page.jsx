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
import Head from "next/head";
import Script from "next/script";

export async function generateMetadata() {
  try {
    const path = "/apartments-flats-thrissur";
    const res = await getSeoApi("/apartments-flats-thrissur");
    const { data } = res.data;

    return {
      title: data?.[0]?.meta_title || "Apartments and flats in thrissur",
      description: data?.[0]?.meta_description || "Default Description",
      alternates: {
        canonical: `https://cidbi.com${path}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Blogs",
      description: "Default Description",
    };
  }
}

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Cidbi - Top builders in thrissur",
      item: "https://cidbi.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Apartments & Flats for Sale in Thrissur",
      item: "https://cidbi.com/apartments-flats-thrissur",
    },
  ],
};

export default async function page() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Header />
      <Herosection />
      <WhyChooseSection />
      <FormSection />
      <HighlightsSection />
      <FaqSection />
      <Footer />
      <Script
        id="seo-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
