import React from 'react'
import ComplaintForm from './ComplaintForm'
import './complaints.css'
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import { getSeoApi } from '../../services/services';

export async function generateMetadata() {
  const path = "/complaints";
  try {
    const res = await getSeoApi(path);
    const responseData = res?.data?.data?.[0] || res?.data || {};
    const { meta_title, meta_description, meta_keywords } = responseData;
    return {
      title: meta_title || "Complaints - CIDBI",
      description: meta_description || "Submit complaints or feedback to CIDBI.",
      keywords: meta_keywords || "",
      alternates: {
        canonical: `https://cidbi.com${path}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    console.error("Error fetching SEO data for complaints:", error);
    return {
      title: "Complaints - CIDBI",
      description: "Submit complaints or feedback to CIDBI.",
      keywords: "",
      alternates: {
        canonical: `https://cidbi.com${path}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }
}

export default function page() {
  return (
    <div>
      <Header bgPrimary={true} />
      {/* <HeroSection/> */}
      <ComplaintForm />
      <Footer />
    </div>
  );
}

