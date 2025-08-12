import React from "react";
import Header from "../../layout/Header";
import HeroSection from "../csr/HeroSection";
import FocusAreas from "../csr/FocusAreas";
import Footer from "../../layout/Footer";
import "./Csr.css";
import { getSeoApi } from "../../services/services";
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
  const path = "/csr";
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
      {/* <CustomCursor/> */}
      <Header bgPrimary={true} />
      <HeroSection />
      <FocusAreas />
      <Footer />
    </>
  );
}

export default page;
