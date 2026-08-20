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

const faqs = [
  {
    "question": "Where can I find 2 & 3 BHK flats for sale in Thrissur with modern amenities?",
    "answer": "CIDBI's ongoing projects, Cassia and Chembaka, offer 2 & 3 BHK flats for sale in Thrissur with contemporary designs. Both projects combine smart layouts, quality construction, and prime city connectivity."
  },
  {
    "question": "What makes Chembaka a good choice among 2 BHK flats for sale in Thrissur?",
    "answer": "Chembaka Premium Luxury Apartments in Punkunnam offers well-planned 2 BHK flats for sale in Thrissur near Sankarankulangara junction. It suits first-time buyers seeking convenience and central location."
  },
  {
    "question": "Is Chembaka suitable for those searching 3 BHK flats for sale in Thrissur?",
    "answer": "Yes, Chembaka includes spacious 3 BHK flats for sale in Thrissur, ideal for growing families. Its Punkunnam address ensures easy access to schools, hospitals, and daily essentials."
  },
  {
    "question": "Why should I book early in CIDBI's Chembaka new launch project?",
    "answer": "Booking early in Chembaka lets buyers choose preferred floors and layouts before units sell out. Early buyers of 2 BHK apartments for sale Thrissur projects also benefit from pre-launch pricing."
  },
  {
    "question": "Is Cassia a good option for 3 BHK flats for sale in Thrissur nearing possession?",
    "answer": "Cassia is CIDBI's near-completion project, offering ready-soon 3 BHK flats for sale in Thrissur. It suits buyers wanting minimal waiting time before moving into their new home."
  },
  {
    "question": "Does Cassia offer good investment value for 2 BHK apartments in Thrissur?",
    "answer": "Cassia's near-completion status reduces investment risk while still offering solid appreciation potential. Buyers get to inspect real construction progress before finalizing their 2 BHK apartments for sale Thrissur."
  },
  {
    "question": "Can I visit a sample flat before buying at Cassia?",
    "answer": "Yes, CIDBI allows site visits at Cassia so buyers can assess construction quality firsthand. Seeing near-complete units helps buyers make confident, informed purchase decisions."
  },
  {
    "question": "Why should I choose CIDBI for buying flats in Thrissur?",
    "answer": "CIDBI is an ISO 9001-2015 certified builder with over 40 years of construction experience in Thrissur. Their trusted track record makes them a reliable choice for flat buyers."
  },
  {
    "question": "Does CIDBI offer home loan assistance for flat buyers in Thrissur?",
    "answer": "CIDBI works with leading banks to simplify home loan approvals for buyers of 2 & 3 BHK flats. This support helps first-time and repeat buyers secure financing smoothly."
  },
  {
    "question": "Where is CIDBI Chembaka located, and is it convenient for families?",
    "answer": "CIDBI Chembaka is located in Poonkunnam, offering convenient access to Thrissur Town and important daily destinations, making it suitable for families seeking connected urban living."
  },
  {
    "question": "What amenities can buyers expect at CIDBI Chembaka?",
    "answer": "CIDBI Chembaka offers lifestyle amenities including a rooftop swimming pool, air-conditioned fitness hall, home theatre, children's play area, garden gazebo, EV charging and 24-hour security."
  },
  {
    "question": "Does CIDBI Cassia offer 2 BHK and 3 BHK Flats For Sale In Thrissur?",
    "answer": "Yes, CIDBI Cassia offers both 2 BHK and 3 BHK apartments, with thoughtfully designed layouts and premium features for buyers seeking comfortable homes near Daya Hospital."
  },
  {
    "question": "What makes CIDBI Cassia attractive to buyers seeking 3 BHK Flats For Sale In Thrissur?",
    "answer": "CIDBI Cassia offers spacious 3 BHK layouts, premium amenities and smart-home features, making it suitable for families seeking enhanced comfort and modern living in Thrissur."
  },
  {
    "question": "What are the major lifestyle features of CIDBI Cassia?",
    "answer": "CIDBI Cassia features a 15-metre infinity pool, jogging track, open gym, home theatre, children's play area, seniors' corner and multiple smart-home features."
  },
  {
    "question": "Why do buyers consider CIDBI a trusted builder for flats in Thrissur?",
    "answer": "CIDBI has decades of construction experience, an ISO-certified quality approach and a substantial portfolio of completed projects, giving homebuyers greater confidence in construction and delivery."
  },
  {
    "question": "What makes 3 BHK Flats For Sale In Thrissur at Cassia a great family home?",
    "answer": "Cassia offers large 3 BHK homes up to 2,548 square feet with premium fittings. Families love the quick access to top hospitals, grocery stores, and major highways."
  },
  {
    "question": "Do banks approve home loans for 2 BHK Flats For Sale In Thrissur by CIDBI?",
    "answer": "Yes, leading public and private banks like SBI readily approve home loans for CIDBI projects. Our team assists you throughout the loan application process for quick clearance."
  }
]

const OngoingFaq = () => {
  const linkText = "2 BHK apartments for sale Thrissur";
  const linkedFaqIndex = faqs.findIndex((faq) => faq.answer.includes(linkText));

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
              {renderLinkedAnswer(faq.answer, linkText, "/contact-us", index === linkedFaqIndex)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OngoingFaq;
