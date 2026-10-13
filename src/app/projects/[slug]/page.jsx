import { notFound } from "next/navigation";
import { getProjectDetails } from "../../../services/services";
import PageContent from "../../featured-projects/[slug]/PageContent";

async function fetchProject(slug) {
  try {
    const response = await getProjectDetails(slug);

    if (response?.data?.StatusCode === 6000) {
      return response.data;
    }
  } catch (error) {
    console.error(`Error fetching project details for slug: ${slug}`, error);
  }

  return null;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await fetchProject(slug);

  if (!data) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  const project = data.data;

  return {
    title: project?.meta_title || project?.name || "CIDBI Project",
    description: project?.meta_description || "",
    keywords: project?.meta_keywords || "",
    alternates: {
      canonical: `https://cidbi.com/projects/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = params;
  const data = await fetchProject(slug);

  if (!data) {
    notFound();
  }

  return <PageContent data={data} />;
}
