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

export default async function page() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Herosection />
      <WhyChooseSection />
      <FormSection />
      <HighlightsSection />
      <FaqSection />
      <Footer />
    </>
  );
}
