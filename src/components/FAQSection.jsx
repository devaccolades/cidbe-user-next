import React from "react";

const faqs = [
  {
    question: "What makes CIDBI’s premium apartments in Thrissur stand out?",
    answer:
      "CIDBI’s premium apartments in Thrissur combine smart home features, open green spaces, and luxury amenities that families value today. With over three decades of trust in the city, CIDBI delivers homes that balance comfort, technology, and a strong community atmosphere.",
  },
  {
    question:
      "Are premium 2 BHK apartments in Thrissur a good choice for small families?",
    answer:
      "Yes. Premium 2 BHK apartments in Thrissur are ideal for nuclear families or first-time buyers. At Cassia, the 2 BHK flats come with well-planned layouts, smart technology, and access to 40+ amenities, making everyday living convenient and modern.",
  },
  {
    question: "Why should I consider premium 3 BHK apartments in Thrissur?",
    answer:
      "Premium 3 BHK apartments in Thrissur are perfect for growing families who want extra space without compromising on location or lifestyle. Cassia offers spacious 3 BHK flats designed with natural light, ventilation, and smart living features, along with community areas that bring families together.",
  },
  {
    question: "Do premium 4 BHK flats in Thrissur offer long-term value?",
    answer:
      "Absolutely. Premium 4 BHK flats in Thrissur are best for families who need large, open homes or those who plan for multi-generational living. Cassia’s 4 BHK units provide expansive floor space, advanced smart home systems, and luxury amenities, ensuring long-term comfort and strong investment value.",
  },
  {
    question: "What’s the price range for premium flats in Thrissur at Cassia?",
    answer:
      "Cassia’s premium flats in Thrissur start from ₹71.85 lakhs onwards. Buyers can choose from 2, 3, and 4 BHK units depending on their budget and lifestyle needs, with flexible options that cater to both small and large families.",
  },
  {
    question: "How well connected are premium apartments in Thrissur like Cassia?",
    answer:
      "Cassia is located near Daya Hospital in Viyyoor, one of the most accessible parts of Thrissur. It is close to schools, shopping hubs, and healthcare facilities, making it a prime choice for buyers seeking both convenience and comfort.",
  },
  {
    question:
      "What amenities do CIDBI’s premium 2 BHK, 3 BHK, and 4 BHK flats in Thrissur offer?",
    answer:
      "CIDBI’s Cassia project offers 40+ premium amenities including an infinity pool, gym, clubhouse, landscaped gardens, kids’ play areas, jogging tracks, and smart home features like automated access and EV charging. These facilities add both lifestyle value and everyday convenience.",
  },
  {
    question:
      "Are CIDBI’s premium apartments in Thrissur suitable for investment?",
    answer:
      "Yes. Thrissur’s real estate market is steadily growing, and premium apartments in Thrissur from reputed builders like CIDBI provide strong long-term value. With smart features, prime locations, and modern designs, Cassia flats are not just homes but also secure investments.",
  },
];

const FAQSection = () => {
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

export default FAQSection;
