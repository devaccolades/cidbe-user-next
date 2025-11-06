import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import dynamic from "next/dynamic";
// import ProjectListing from '../../components/projectlisting/ProjectListing'
import Skelten from "../../components/skeletoneffect/Skelten";
import { getFeaturedProject, getSeoApi } from "../../services/services";
import FeaturedFaq from "./[slug]/FeaturedFaq";
import SeoContents from "./SeoContents";
const ProjectListing = dynamic(
  () => import("../../components/projectlisting/ProjectListing"),
  { ssr: false, loading: () => <Skelten /> }
);

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
  const path = "/featured-projects";
  const responseData = await fetchSeoData(path);
  const { meta_title, meta_description } = responseData;
  return {
    title: meta_title,
    description: meta_description,
    alternates: {
      canonical: `https://cidbi.com${path}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function page() {
  const title = "Featured Projects";
  const subtitle = "CIDBI — Luxury Apartments in Thrissur Built on Trust "

  return (
    <>
      <Header bgPrimary={true} />
      <ProjectListing title={title} subtitle={subtitle} />
      <FeaturedFaq />
      <SeoContents />
      <Footer backGround="" />
    </>
  );
}

export default page;
