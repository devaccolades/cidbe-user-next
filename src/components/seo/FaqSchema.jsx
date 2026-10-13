"use client";

import { usePathname } from "next/navigation";

const SITE_URL = "https://cidbi.com";

function cleanText(value) {
  return String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#(?:39|x27);/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeFaq(faq) {
  if (Array.isArray(faq)) {
    return { question: faq[0], answer: faq[1] };
  }

  return {
    question: faq?.question || faq?.q,
    answer: faq?.answer || faq?.a,
  };
}

export default function FaqSchema({ faqs = [], url }) {
  const pathname = usePathname();
  const normalizedFaqs = faqs
    .map(normalizeFaq)
    .map(({ question, answer }) => ({
      question: cleanText(question),
      answer: cleanText(answer),
    }))
    .filter(({ question, answer }) => question && answer);

  if (normalizedFaqs.length === 0) return null;

  const pageUrl = url?.startsWith("http")
    ? url
    : `${SITE_URL}${url || pathname}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl.replace(/\/$/, "")}#faq`,
    url: pageUrl,
    mainEntity: normalizedFaqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      data-schema="faq-page"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
