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


export default async function page() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://cidbi.com/"/>
      </Head>
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
