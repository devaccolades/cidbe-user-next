import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import dynamic from "next/dynamic";
import Skelten from "../../components/skeletoneffect/Skelten";
import GalaryHeroSection from "./GalaryHeroSection";
import "./Galary.css";
const GalaryListing = dynamic(() => import("./GalaryListing"), {
  ssr: false,
  loading: () => <Skelten />,
});

import { getGalaryApi, getSeoApi } from "../../services/services";

export async function generateMetadata() {
  try {
    const path = "/gallery";
    const res = await getSeoApi("/gallery");
    const { data } = res.data;

    return {
      title: data?.[0]?.meta_title || "Gallery",
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
      title: "Gallery",
      description: "Default Description",
    };
  }
}

// async function fetchSeoData(path) {
//   let data = {};
//   try {
//     const res = await getSeoApi(path);
//     data = res.data.data[0];
//   } catch (error) {
//     console.log(error);
//   }
//   return data;
// }

// export async function generateMetadata() {
//   const path = '/gallery';
//   const responseData = await fetchSeoData(path);
//   const { meta_title, meta_description } = responseData;
//   return {
//     title: meta_title,
//     description: meta_description,
//   };
// }

export default async function Page({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || "1", 10);
  const pageSize = 2;

  let galary = [];
  let totalCount = 0;

  try {
    const res = await getGalaryApi(currentPage, pageSize);
    const { StatusCode, data, total_count } = res?.data || {};

    if (StatusCode === 6000) {
      galary = data || [];
      totalCount = total_count || 0;
    } else {
      console.warn("Unexpected StatusCode. Falling back to empty blogs.");
    }
  } catch (error) {
    console.error("Error loading blogs:", error);
  }

  return (
    <>
      <Header bgPrimary={true} />
      {/* <GalaryHeroSection/> */}
      <GalaryListing
        galary={galary}
        totalCount={totalCount}
        currentPage={currentPage}
        pageSize={pageSize}
      />
      <Footer />
    </>
  );
}
