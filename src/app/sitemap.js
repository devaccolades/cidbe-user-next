import { getBlogsApi } from "../services/services";
import { MetadataRoute } from "next";

const BASE_URL = "https://cidbi.com";

export default async function sitemap() {
  const staticPages = [
    "",
    "/featured-projects",
    "/completed-projects",
    "/upcoming-projects",
    "/ready-to-occupy",
    "/ongoing-projects",
    "/gallery",
    "/interiors",
    "/blogs",
    "/contact-us",
    "/about-us",
    "/csr",
    "/achievements",

    // important project urls
    "/ongoing-projects/cassia",
    "/featured-projects/premium-flats-cassia",

    "/completed-projects/chalet",
    "/completed-projects/clarion",
    "/completed-projects/chirag",
    "/completed-projects/cocoon",
    "/completed-projects/coral",
    "/completed-projects/cedar",
    "/completed-projects/chaithram",
    "/completed-projects/coronet",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    priority: route === "" ? 1 : 0.8,
  }));

  let blogUrls = [];
  try {
    // use large size to fetch all blogs
    const res = await getBlogsApi(1, 1000);

    const blogs = res?.data?.data || [];

    blogUrls = blogs.map((blog) => ({
      url: `https://cidbi.com/blogs/${blog.slug}`,
      lastModified: blog.date_modified || new Date(),
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Sitemap blog fetch failed", error);
  }

  return [
    {
      url: "https://cidbi.com",
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: "https://cidbi.com/blogs",
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: "https://cidbi.com/completed-projects",
      lastModified: new Date(),
      priority: 0.9,
    },
    ...staticPages,
    ...blogUrls,
  ];
}
