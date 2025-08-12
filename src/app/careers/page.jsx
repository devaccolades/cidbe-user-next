import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import HeroSection from "./HeroSection";
// import CareerListing from './CareerListing'
import { getSeoApi } from "../../services/services";
import dynamic from "next/dynamic";
import Skelten from "../../components/skeletoneffect/Skelten";
import "./careers.css";
const CareerListing = dynamic(() => import("./CareerListing"), {
  ssr: false,
  loading: () => <Skelten />,
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

export async function generateMetadata() {
  const path = "/careers";
  const responseData = await fetchSeoData(path);
  const { meta_title, meta_description } = responseData;
  return {
    title: meta_title,
    description: meta_description,
    alternates: {
      canonical: `https://cidbi.com${path}`,
    },
  };
}

function page() {
  return (
    <>
      <Header bgPrimary={true} />
      <HeroSection />
      <CareerListing />
      <Footer />
    </>
  );
}

export default page;
