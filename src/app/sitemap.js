import { getBlogsApi } from "../services/services";
import { MetadataRoute } from "next";

const BASE_URL = "https://cidbi.com";

export default async function sitemap() {
  const staticPages = [
    // Homepage
    { url: "", changeFrequency: "weekly", priority: 1.0 },

    // Landing / Category Pages
    { url: "/apartments-flats-thrissur", changeFrequency: "weekly", priority: 0.9 },
    { url: "/ready-to-occupy-flats-thrissur", changeFrequency: "weekly", priority: 0.9 },
    { url: "/ongoing-projects", changeFrequency: "weekly", priority: 0.9 },
    { url: "/completed-projects", changeFrequency: "monthly", priority: 0.9 },
    { url: "/featured-projects", changeFrequency: "monthly", priority: 0.8 },

    // Project Detail Pages
    { url: "/ongoing-projects/chembaka-premium-luxury-apartments", changeFrequency: "weekly", priority: 0.9 },
    { url: "/featured-projects/premium-flats-cassia", changeFrequency: "weekly", priority: 0.9 },
    { url: "/featured-projects/flats-in-thrissur-candor", changeFrequency: "monthly", priority: 0.8 },
    { url: "/completed-projects/clarion", changeFrequency: "yearly", priority: 0.7 },
    { url: "/completed-projects/chirag", changeFrequency: "yearly", priority: 0.6 },
    { url: "/completed-projects/cocoon", changeFrequency: "yearly", priority: 0.6 },
    { url: "/completed-projects/cedar", changeFrequency: "yearly", priority: 0.6 },
    { url: "/completed-projects/chaithram", changeFrequency: "yearly", priority: 0.6 },
    { url: "/completed-projects/coronet", changeFrequency: "yearly", priority: 0.6 },
    { url: "/completed-projects/coral", changeFrequency: "yearly", priority: 0.6 },

    // Core Pages
    { url: "/about-us", changeFrequency: "monthly", priority: 0.8 },
    { url: "/contact-us", changeFrequency: "yearly", priority: 0.8 },
    { url: "/gallery", changeFrequency: "monthly", priority: 0.7 },
    { url: "/interiors", changeFrequency: "monthly", priority: 0.7 },
    { url: "/achievements", changeFrequency: "monthly", priority: 0.6 },
    { url: "/csr", changeFrequency: "yearly", priority: 0.5 },
    { url: "/careers", changeFrequency: "monthly", priority: 0.5 },
    { url: "/complaints", changeFrequency: "yearly", priority: 0.4 },

    // Blog Listing
    { url: "/blogs", changeFrequency: "weekly", priority: 0.7 },
  ].map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let blogUrls = [];
  try {
    // use large size to fetch all blogs
    const res = await getBlogsApi(1, 1000);

    const blogs = res?.data?.data || [];

    blogUrls = blogs.map((blog) => ({
      url: `${BASE_URL}/blogs/${blog.slug}`,
      lastModified: blog.date_modified || new Date(),
      changeFrequency: "monthly",
      priority: 0.6, // Default priority for blog posts as seen in sitemap
    }));
  } catch (error) {
    console.error("Sitemap blog fetch failed", error);
  }

  return [...staticPages, ...blogUrls];
}
