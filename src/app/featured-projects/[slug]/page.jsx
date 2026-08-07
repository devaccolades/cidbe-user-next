import React from 'react';
import { getProjectDetails } from '../../../services/services';
import { redirect } from 'next/navigation';
import PageContent from './PageContent';

async function fetchData(slug) {
  try {
    const res = await getProjectDetails(slug);

    if (res?.data?.StatusCode === 6000) {
      return res?.data;
    }
    return null;
  } catch (error) {
    console.error(`Error fetching project details for slug: ${slug}`, error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await fetchData(slug);

  if (!data) {
    return {};
  }

  const project = data?.data;

  return {
    title: project?.meta_title || "Default Title",
    description: project?.meta_description || "Default Description",
    keywords: project?.meta_keywords || "",
    alternates: {
      canonical: `https://cidbi.com/featured-projects/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = params;
  const data = await fetchData(slug);

  if (!data) {
    redirect('/featured-projects');
    return;
  }

  return <PageContent data={data} />;
}