import React from 'react';
import CustomerEnquiryForm from './CustomerEnquiryForm';
import { getSeoApi } from '../../services/services';

export async function generateMetadata() {
  const path = "/customer-enquiry";
  try {
    const res = await getSeoApi(path);
    const responseData = res?.data?.data?.[0] || res?.data || {};
    const { meta_title, meta_description, meta_keywords } = responseData;
    return {
      title: meta_title || "Customer Enquiry - CIDBI",
      description: meta_description || "Customer Enquiry Page for CIDBI.",
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
    console.error("Error fetching SEO data for customer enquiry:", error);
    return {
      title: "Customer Enquiry - CIDBI",
      description: "Customer Enquiry Page for CIDBI.",
      keywords: "",
        alternates: {
          canonical: `https://cidbi.com${path}`,
        },
        robots: {
          index: true,
          follow: true,
        },
    <div>
     <CustomerEnquiryForm/>
    </div>
  )
}

export default page
