import React from "react";

const faqs = [
  {
    question: "What makes CIDBI’s Luxury Apartments in Thrissur stand out?",
    answer:
    "CIDBI’s luxury apartments in Thrissur combine elegant design, solid construction, and practical living. Every project follows ISO-certified quality checks and uses durable materials.With over 33 years of experience and 110 lakh sqft delivered, CIDBI offers trusted homes that balance comfort, style, and long-term value.",
  },
  {
    question:
      " Are there 2BHK Luxury Apartments available in Thrissur?",
    answer:
    "Yes. CIDBI offers 2BHK luxury apartments in Thrissur that are ideal for small families and first-time buyers. These homes feature smart layouts, efficient use of space, and premium finishes. Locations like Punkunnam and Kannankulangara provide easy access to schools, hospitals, and transport.",
  },
  {
    question: "What features can I expect in 3BHK Luxury Apartments in Thrissur?",
    answer:
    "CIDBI’s 3BHK luxury apartments in Thrissur focus on family comfort and everyday functionality. Expect spacious living areas, natural light, modular kitchens, and modern fittings. Projects like Candor and Credence include lifestyle amenities such as rooftop pools, play zones, and landscaped surroundings",
  },
  {
    question: "Does CIDBI offer 4BHK Luxury Flats in Thrissur?",
    answer:
    "Yes. CIDBI designs 4BHK luxury flats in Thrissur for those seeking large, private living spaces.These homes provide multiple balconies, premium flooring, high-end fittings, and energy-efficient designs. Ideal for families that value space, privacy, and long-term investment value",
  },
  {
    question: "How can I find the Best Luxury Apartments in Thrissur?",
    answer:
      "Start by exploring CIDBI’s completed and ongoing projects such as Candor, Chalet, and Credence. These developments are known for timely delivery, modern amenities, and trusted construction. CIDBI’s track record makes it one of the top choices for the best luxury apartments in Thrissur.",
  },
  {
    question: "Are CIDBI’s Luxury Flats suitable for investment in Thrissur?",
    answer:
      "Yes. CIDBI’s luxury flats in Thrissur hold strong resale value due to their location, construction quality, and brand trust. Investors benefit from appreciation and consistent rental demand, especially in areas like Punkunnam and Amala Nagar where connectivity and amenities attract steady interest.",
  },
  {
    question:
      "What amenities do CIDBI’s Luxury Apartments in Thrissur include?",
    answer:
      "CIDBI’s luxury apartments include essentials like secure parking, power backup, and lifts with safety systems. Many projects also feature gyms, play areas, pools, and landscaped gardens.Every amenity is chosen to make daily life more comfortable and practical for residents.",
  },
  {
    question:
      " How does CIDBI ensure quality in its Luxury Flats in Thrissur?",
    answer:
      "Quality comes from certified materials, skilled supervision, and strict audits. CIDBI follows ISO-certified procedures with regular structural tests and finish checks. Each stage, from foundation to final handover, is monitored for safety, durability, and finish accuracy",
  },
  {
    question:
      "Why should I choose CIDBI for Luxury Apartments in Thrissur?",
    answer:
       "CIDBI stands for trust, experience, and delivery. With over three decades in construction and a proven track record across sectors, CIDBI ensures homes that meet modern standards while preserving value. From 2BHK to 4BHK luxury apartments in Thrissur, each home is built for comfort, quality, and lasting satisfaction.",
  }
];

const FeaturedFaq = () => {
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

export default FeaturedFaq;
