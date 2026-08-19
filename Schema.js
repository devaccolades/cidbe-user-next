const schema = 
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": [
        "Organization",
        "LocalBusiness",
        "HomeAndConstructionBusiness",
        "RealEstateAgent"
      ],
      "@id": "https://cidbi.com/#organization",
      "name": "CIDBI (Creations India Developers Builders Infrastructures)",
      "url": "https://cidbi.com/",
      "logo": {
        "@id": "https://cidbi.com/#logo"
      },
      "image": "https://cidbi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4dbc3e3a.png&w=256&q=75",
      "description": "CIDBI one of the leading builders in Thrissur, Kerala offers the best apartments and flats. Discover high-quality flats in Thrissur with trusted flat builders. Find your dream apartments in Thrissur today and enjoy a comfortable living experience.",
      "telephone": [
        "+91 9496933000",
        "+91 8137873330",
        "+91 4872423475"
      ],
      "email": [
        "info@cidbi.com",
        "sales@cidbi.com"
      ],
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cordial Court, High Rd, Veliyannur",
        "addressLocality": "Thrissur",
        "addressRegion": "Kerala",
        "postalCode": "680001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.5148801,
        "longitude": 76.2185143
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:30",
        "closes": "17:30"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": [
          "+91 9496933000",
          "+91 8137873330",
          "+91 4872423475"
        ],
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": [
          "English",
          "Malayalam"
        ]
      },
      "sameAs": [
        "https://www.facebook.com/cidbitsr/",
        "https://www.instagram.com/cidbithrissur/",
        "https://www.youtube.com/channel/UCyRwiMStzuHNzaRzEGb__jQ"
      ],
      "hasOfferCatalog": {
        "@id": "https://cidbi.com/#offercatalog"
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://cidbi.com/#logo",
      "url": "https://cidbi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4dbc3e3a.png&w=256&q=75",
      "contentUrl": "https://cidbi.com/contact-us"
    },
    {
      "@type": "WebSite",
      "@id": "https://cidbi.com/#website",
      "url": "https://cidbi.com/",
      "name": "CIDBI",
      "publisher": {
        "@id": "https://cidbi.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://cidbi.com/#webpage",
      "url": "https://cidbi.com/",
      "name": "Best Builders in Thrissur | Trusted Flat Builders Kerala | CIDBI",
      "isPartOf": {
        "@id": "https://cidbi.com/#website"
      },
      "about": {
        "@id": "https://cidbi.com/#organization"
      },
      "breadcrumb": {
        "@id": "https://cidbi.com/#breadcrumb"
      },
      "potentialAction": {
        "@type": "CommunicateAction",
        "name": "Request a Quote",
        "target": "https://cidbi.com/contact"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cidbi.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://cidbi.com/"
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://cidbi.com/#offercatalog",
      "name": "Construction & Real Estate Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": "https://cidbi.com/#service-apartment-construction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": "https://cidbi.com/#service-residential-construction"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@id": "https://cidbi.com/#service-real-estate-development"
          }
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://cidbi.com/#service-apartment-construction",
      "name": "Completed Projects | CIDBI",
      "serviceType": "Apartment Construction",
      "description": "Explore completed projects by CIDBI in Thrissur. Discover ready to move flats and apartments built with quality, trust, and timely delivery. Enquire now!",
      "provider": {
        "@id": "https://cidbi.com/#organization"
      },
      "areaServed": {
        "@type": "State",
        "name": "Kerala"
      },
      "url": "https://cidbi.com/completed-projects"
    },
    {
      "@type": "Service",
      "@id": "https://cidbi.com/#service-residential-construction",
      "name": "Residential Building Construction",
      "serviceType": "Residential Construction",
      "description": "Residential building construction and project development.",
      "provider": {
        "@id": "https://cidbi.com/#organization"
      },
      "areaServed": {
        "@type": "State",
        "name": "Kerala"
      },
      "url": "https://cidbi.com/services"
    },
    {
      "@type": "Service",
      "@id": "https://cidbi.com/#service-real-estate-development",
      "name": "Real Estate Development",
      "serviceType": "Real Estate Development",
      "description": "Development of premium residential apartments and housing projects.",
      "provider": {
        "@id": "https://cidbi.com/#organization"
      },
      "areaServed": {
        "@type": "State",
        "name": "Kerala"
      },
      "url": "https://cidbi.com/completed-projects"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Projects",
      "url": "https://cidbi.com/completed-projects"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "About",
      "url": "https://cidbi.com/about"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Services",
      "url": "https://cidbi.com/completed-projects"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Contact",
      "url": "https://cidbi.com/contact"
    }
  ]
}
