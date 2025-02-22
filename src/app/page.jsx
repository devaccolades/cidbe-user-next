import React from 'react';
import { getSeoApi } from '../services/services';
import dynamic from 'next/dynamic'

import Header from '../layout/Header'
import AboutSection from '../app/(home)/AboutSection'
import Chairman from '../app/(home)/Chairman'
import Skelten from '../components/skeletoneffect/Skelten'
import Footer from '../layout/Footer'
import HomePageSkelten from '../components/skeletoneffect/HomePageSkelten';

const FeaturedProject = dynamic(() => import('../app/(home)/FeaturedProject'), { ssr: false, loading: () => <Skelten />, });
const Blogs = dynamic(() => import('../app/(home)/Blogs'), { ssr: false, loading: () => <Skelten />, });
const CustomerReviewsAndFaq = dynamic(() => import('../app/(home)/CustomerReviewsAndFaq'), { ssr: false, loading: () => <Skelten />, });
const HeroSection = dynamic(() => import('../app/(home)/HeroSection'), { ssr: false, loading: () => <HomePageSkelten />, });

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

export async function generateMetadata() {
  const path = '/';
  const responseData = await fetchSeoData(path);
  const { meta_title, meta_description } = responseData;
  return {
    title: meta_title,
    description: meta_description,
  };
}

function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedProject />
      <Chairman />
      <Blogs />
      <CustomerReviewsAndFaq />
      <Footer />
    </>
  );
}

export default Page;
