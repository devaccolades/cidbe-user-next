import React from "react";

const SITE_URL = "https://cidbi.com";

function decodeBasicEntities(value) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#(?:39|x27);/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function createBodyDescription(body, maximumLength = 220) {
  const text = decodeBasicEntities(String(body || "").replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maximumLength) return text;

  const shortened = text.slice(0, maximumLength + 1);
  const lastSpace = shortened.lastIndexOf(" ");

  return `${shortened.slice(0, lastSpace > 0 ? lastSpace : maximumLength)}…`;
}

function toIsoDate(value) {
  if (!value) return undefined;

  const date = String(value).trim();
  const dayFirstMatch = date.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

  if (dayFirstMatch) {
    const [, day, month, year] = dayFirstMatch;
    return `${year}-${month}-${day}`;
  }

  const isoMatch = date.match(/^\d{4}-\d{2}-\d{2}/);
  return isoMatch ? isoMatch[0] : undefined;
}

export default function BlogPostingSchema({ blog }) {
  if (!blog?.slug || !blog?.title) return null;

  const canonicalUrl = `${SITE_URL}/blogs/${blog.slug}`;
  const description =
    blog.description ||
    blog.short_description ||
    createBodyDescription(blog.body);
  const datePublished = toIsoDate(blog.date_added);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: blog.title,
    description,
    ...(datePublished ? { datePublished } : {}),
    author: {
      "@id": `${SITE_URL}/#organization`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    articleSection: "Real Estate",
    inLanguage: "en-IN",
  };

  return (
    <script
      id="blog-posting-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
