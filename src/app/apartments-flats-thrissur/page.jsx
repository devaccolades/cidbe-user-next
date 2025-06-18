import React from 'react'
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Herosection from './Herosection';
import FaqSection from './FaqSection';
import HighlightsSection from './HighlightsSection';
import FormSection from './FormSection';
import WhyChooseSection from './WhyChooseSection';

export default async function page() {
  
  return (
    <>
      <Header />
      <Herosection/>
      <WhyChooseSection />
      <FormSection />
      <HighlightsSection />
      <FaqSection />
      <Footer />
    </>
  )
}