import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Skelten from "../../components/skeletoneffect/Skelten";
import dynamic from "next/dynamic";
import { getAchievementsApi, getSeoApi } from "../../services/services";
import "./Achievements.css";

const AchievementsListing = dynamic(() => import("./AchievementsListing"), {
  ssr: false,
  loading: () => <Skelten />,
});

export async function generateMetadata() {
  try {
    const res = await getSeoApi("/achievements");
    const path = "/achievements";
    const { data } = res.data;

    return {
      title: data?.[0]?.meta_title || "Achievements",
      description: data?.[0]?.meta_description || "Default Description",
      alternates: {
        canonical: `https://cidbi.com${path}`,
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Achievements",
      description: "Default Description",
    };
  }
}

export default async function Page({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || "1", 10);
  const pageSize = 8;

  let achievements = [];
  let totalCount = 0;

  try {
    const res = await getAchievementsApi(currentPage, pageSize);
    const { StatusCode, data, total_count } = res?.data || {};

    if (StatusCode === 6000) {
      achievements = data || [];
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
      <AchievementsListing
        achievements={achievements}
        totalCount={totalCount}
        currentPage={currentPage}
        pageSize={pageSize}
      />
      <Footer />
    </>
  );
}
