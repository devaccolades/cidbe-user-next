import React from "react";

const faqs = [
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
];

const OngoingFaq = () => {
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
            <p className="lg:text-[16px] text-[14px] font-[general-sans-regular] leading-[27px]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OngoingFaq;
