"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SITE_URL = "https://cidbi.com";
const DEFAULT_TITLE =
  "CIDBI: Best Builders in Thrissur | Trusted Flat Builders Kerala";
const DEFAULT_DESCRIPTION =
  "CIDBI is one of the leading builders in Thrissur, Kerala, offering quality apartments and flats.";

function readPageMetadata(pathname) {
  if (typeof document === "undefined") {
    return {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      url: `${SITE_URL}${pathname === "/" ? "" : pathname}`,
    };
  }

  const canonical = document.querySelector('link[rel="canonical"]')?.href;
  const description = document
    .querySelector('meta[name="description"]')
    ?.getAttribute("content");

  return {
    title: document.title || DEFAULT_TITLE,
    description: description || DEFAULT_DESCRIPTION,
    url:
      canonical ||
      `${SITE_URL}${pathname === "/" ? "" : pathname}`,
  };
}

function buildSchema({ title, description, url }) {
  const webpageId = `${url.replace(/\/$/, "")}#webpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "CIDBI",
        legalName: "Creations India Developers Builders Infrastructures",
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/images/logo/logo.png`,
          contentUrl: `${SITE_URL}/images/logo/logo.png`,
        },
        description:
          "CIDBI is one of the best builders in Thrissur, Kerala, offering quality apartments and flats for comfortable modern living.",
        foundingDate: "2005",
        email: "sales@cidbi.com",
        telephone: ["+919496933000", "+918137873330"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cordial Court, High Road",
          addressLocality: "Thrissur",
          addressRegion: "Kerala",
          postalCode: "680001",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: ["+919496933000", "+918137873330"],
          email: "sales@cidbi.com",
          areaServed: "IN",
          availableLanguage: ["English", "Malayalam"],
        },
        location: {
          "@id": `${SITE_URL}/#thrissur-office`,
        },
      },
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${SITE_URL}/#thrissur-office`,
        name: "CIDBI",
        url: `${SITE_URL}/`,
        description:
          "CIDBI is one of the best builders in Thrissur, Kerala, offering quality apartments and flats for comfortable modern living.",
        logo: {
          "@id": `${SITE_URL}/#logo`,
        },
        parentOrganization: {
          "@id": `${SITE_URL}/#organization`,
        },
        telephone: ["+919496933000", "+918137873330"],
        email: "sales@cidbi.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cordial Court, High Road",
          addressLocality: "Thrissur",
          addressRegion: "Kerala",
          postalCode: "680001",
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "City",
          name: "Thrissur",
        },
        hasMap: `${SITE_URL}/contact-us`,
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url,
        name: title,
        headline: title,
        description,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: "CIDBI",
          publisher: {
            "@id": `${SITE_URL}/#organization`,
          },
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };
}

export default function SitewideOrganizationSchema() {
  const pathname = usePathname();
  const [pageMetadata, setPageMetadata] = useState(() => ({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: `${SITE_URL}${pathname === "/" ? "" : pathname}`,
  }));

  useEffect(() => {
    const updateSchema = () => setPageMetadata(readPageMetadata(pathname));
    const frame = window.requestAnimationFrame(updateSchema);
    const observer = new MutationObserver(updateSchema);

    observer.observe(document.head, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <script
      id="sitewide-organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildSchema(pageMetadata)).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  );
}
