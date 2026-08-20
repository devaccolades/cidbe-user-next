import React from "react";
import Link from "next/link";

const renderLinkedAnswer = (answer, linkText, href, shouldLink) => {
  if (!shouldLink) return answer;

  const linkIndex = answer.indexOf(linkText);
  if (linkIndex === -1) return answer;

  return (
    <>
      {answer.slice(0, linkIndex)}
      <Link href={href} className="text-[#4C956C] no-underline">
        {linkText}
      </Link>
      {answer.slice(linkIndex + linkText.length)}
    </>
  );
};

const faqData = {
  "chembaka-premium-luxury-apartments": [
  {
    question: "Where is CIDBI Chembaka Premium Luxury Apartments located?",
    answer:
      "Chembaka is a premium residential project in Punkunnam, Thrissur, near Sankarankulangara Junction. Its location offers easy access to key parts of the city.",
  },
  {
    question: "What types of flats are available at Chembaka in Punkunnam?",
    answer:
      "Chembaka offers thoughtfully planned 2 and 3 BHK flats in Punkunnam, designed for comfortable family living. Buyers can choose from different floor plans and sizes.",
  },
  {
    question: "What are the available 2 BHK apartment sizes at Chembaka?",
    answer:
      "The 2 BHK apartments at Chembaka have a saleable area of 1,060 sq. ft. The layout includes 855 sq. ft. built-up area and 694 sq. ft. carpet area.",
  },
  {
    question: "What are the 3 BHK apartment options at Chembaka?",
    answer:
      "Chembaka offers two 3 BHK apartment plans, with saleable areas of 1,725 sq. ft. and 1,521 sq. ft. Both plans offer well-designed spaces for modern family life.",
  },
  {
    question: "Are these flats in Punkunnam suitable for families with children?",
    answer:
      "Yes, Chembaka includes a dedicated kids play area and kids pool within its residential amenities. Open spaces also give families room to spend time together and relax.",
  },
  {
    question:
      "Do the apartments offer spaces for fitness, leisure, and relaxation?",
    answer:
      "Yes, residents can use the open gym, air-conditioned fitness hall, rooftop pool, garden gazebo, and home theatre. These lifestyle amenities support fitness, leisure, and quiet moments at home.",
  },
  {
    question: "What makes Chembaka a notable residential project in Thrissur?",
    answer:
      "Chembaka combines spacious homes, open areas, modern amenities, and thoughtful design in a well-connected part of Thrissur. The project also focuses on natural light, ventilation, and privacy.",
  },
  {
    question: "Why choose Chembaka when looking for apartments in Punkunnam?",
    answer:
      "Chembaka offers 2 and 3 BHK homes, premium lifestyle amenities, and a location near Sankarankulangara Junction. It brings comfort, space, and modern living together in Punkunnam.",
  },
  {
    question: "Are these premium luxury apartments eco-friendly?",
    answer:
      "Yes, Chembaka runs common area lighting through a grid-connected solar power system. The project also provides EV charging stations for residents with electric vehicles.",
  },
  {
    question:
      "Does CIDBI assist buyers of flats in Punkunnam with loans?",
    answer:
      "Yes, CIDBI's customer care team helps with home loan documentation for every apartment buyer. They also support resale, rental, and interior customisation for Chembaka residences.",
  },
  {
    question:
      "Why choose 2 & 3 BHK apartments in Punkunnam over other Thrissur locations?",
    answer:
      "Punkunnam offers strong connectivity to Thrissur's main roads and public transport hubs. The locality also stays close to Kochi, airports, railways, and seaports.",
  },
  ],
  "premium-flats-cassia": [
  {
    question: "What makes CIDBI Cassia stand out among premium flats in Thrissur?",
    answer: "CIDBI Cassia spans 98 cents with B+G+13 floors and 70% open space. Residents enjoy a 15-meter infinity pool, 250m jogging track, and smart home automation."
  },
  {
    question: "Is CIDBI Cassia nearing completion for buyers looking to move in soon?",
    answer: "Yes, construction is nearing completion and sample flats are open for site visits. Homebuyers can review final finishes and secure their homes before complete handover."
  },
  {
    question: "Which smart features are included in these premium flats in Thrissur?",
    answer: "Apartments include digital main door locks, video door phones, and internal lift call buttons. Common areas feature face detection access, automated lighting, and EV charging provisions."
  },
  {
    question: "How accessible is CIDBI Cassia from major hubs in Thrissur?",
    answer: "Located in Peringavu near Daya Speciality Hospital, CIDBI Cassia connects easily across Thrissur. It sits just 2.8 km from Swaraj Round and near major transit hubs."
  },
  {
    question: "What lifestyle amenities are available at these 2/3/4 BHK luxury apartments in Thrissur?",
    answer: "CIDBI Cassia features a health club, home theatre, games room, and rooftop meeting hall. Additional perks include a 1 BHK guest apartment, kids pool, and garden gazebo."
  },
  {
    question: "Where is Cassia located in Thrissur?",
    answer: "Cassia is located near Daya Speciality Hospital, Peringavu, Thrissur. This central address gives residents quick access to hospitals, schools, and the city's main road network."
  },
  {
    question: "What BHK configurations are available at Cassia?",
    answer: "Cassia offers 2 BHK, 3 BHK, and 4 BHK luxury apartments in Thrissur across 100 units. Carpet areas range from 786 sqft to 1818 sqft, as per RERA."
  },
  {
    question: "Does Cassia offer 4 BHK apartments?",
    answer: "Yes, Cassia's 13th-floor 4 BHK homes span 2548 sqft with 1818 sqft carpet area and a 500 sqft open terrace. These are the project's most spacious luxury apartments in Thrissur."
  },
  {
    question: "What amenities does Cassia offer?",
    answer: "Cassia includes 40+ amenities such as a 15m infinity pool, kids' pool, health club, home theatre, and jogging track. Residents also enjoy 70% open space and a dedicated garden gazebo."
  },
  {
    question: "Does Cassia have smart home features?",
    answer: "Yes, Cassia includes 10+ smart features like face-detected lobby access, video door phones, and automated gas leak detectors. Digital lock main doors and EV charging provisions add further convenience."
  },
  {
    question: "Why should I buy a premium flat in Thrissur at Cassia?",
    answer: "Cassia offers premium flats in Thrissur with 70% open space, 25+ amenities, and smart security features. Its location near Daya Hospital ensures strong long-term value and easy city connectivity."
  },
  {
    question: "Is Cassia suitable for families with children?",
    answer: "Yes, Cassia features a dedicated kids' pool, children's play area, and games room within its 70% open space. Seniors also get a dedicated corner, making it ideal for multi-generational families."
  }
]
};

const OngoingFaq = ({ slug }) => {
  const faqs = faqData[slug] || [];
  const linkText = "luxury apartments in Thrissur";
  const linkedFaqIndex = faqs.findIndex((faq) => faq.answer.includes(linkText));

  if (faqs.length === 0) return null;

  return (
    <section className="containers custom-res py-10">
      <h2 className="text-[24px] font-[clash-display-medium] text-[--secondary-cl] text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition"
          >
            <h3 className="text-[18px] font-[clash-display-medium] text-[--secondary-cl] text-gray-800 mb-2">
              {faq.question}
            </h3>
            <p className="lg:text-[16px] text-[14px] font-[general-sans-regular] leading-[27px]">
              {slug === "premium-flats-cassia"
                ? renderLinkedAnswer(faq.answer, linkText, "/", index === linkedFaqIndex)
                : faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OngoingFaq;
