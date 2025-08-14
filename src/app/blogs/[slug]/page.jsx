import React from "react";
import BlogCarousel from "./BlogCarousel";
import BlogDescription from "./BlogDescription";
import MoreBlogs from "./MoreBlogs";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import { redirect } from "next/navigation";
import { getBlogDetailsApi } from "../../../services/services";
import "../../../app/globals.css";
import "../Blogs.css";

export async function generateMetadata({ params }) {
  const { slug } = params;
  try {
    const res = await getBlogDetailsApi(slug);

    const { data } = res?.data || {};
    return {
      title: data?.meta_title || "Blogs",
      description: data?.meta_description || "Default Description",
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    console.error(`Error fetching metadata for blog with slug: ${slug}`, error);
    return {
      title: "Blogs",
      description: "Default Description",
    };
  }
}

async function fetchBlogData(slug) {
  try {
    const res = await getBlogDetailsApi(slug);
    const { StatusCode, data, related_blogs } = res.data;
    if (StatusCode === 6000) {
      return { ...data, related_blogs: related_blogs };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching blog details for slug: ${slug}`, error);
    return null;
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  const data = await fetchBlogData(slug);

  if (!data) {
    redirect("/blogs");
    return;
  }
  return (
    <>
      <Header />
      {data.title && (
        <React.Fragment>
          <BlogCarousel blogDetails={data} />
          <BlogDescription body={data?.body} />
          <MoreBlogs related_blogs={data?.related_blogs} />
        </React.Fragment>
      )}

      <div className="bg-white">
        <Footer backGround="" />
      </div>
    </>
  );
}
