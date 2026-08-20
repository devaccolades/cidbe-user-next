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
    "question": "Why should I choose CIDBI for flats for sale in Thrissur town?",
    "answer": "CIDBI has delivered residential projects across Thrissur for over four decades with ISO 9001 2015 certification. Our completed developments reflect consistent quality, timely handovers and transparent dealings with every buyer."
  },
  {
    "question": "What makes CIDBI different from other builders offering flats for sale in Thrissur?",
    "answer": "CIDBI manages construction in house instead of relying on external contractors, ensuring stronger quality control. This approach has helped us build a trusted reputation across Thrissur's real estate market."
  },
  {
    "question": "Does CIDBI offer bank loan assistance for flats in Thrissur town?",
    "answer": "Yes, CIDBI's completed and ongoing projects carry SBI approval, simplifying home loan processing for buyers. Our sales team also assists with documentation and coordination throughout the loan process."
  },
  {
    "question": "Where are CIDBI's completed flats located within Thrissur town?",
    "answer": "CIDBI's completed projects are spread across established residential hubs like Punkunnam and near Daya Hospital. These locations offer strong connectivity to schools, hospitals and Thrissur's main commercial areas."
  },
  {
    "question": "Is CIDBI Cassia a good option for buyers exploring new flats for sale in Thrissur?",
    "answer": "CIDBI Cassia, our nearing completion project in Peringavu, near Daya hospital, offers 2, 3 & 4 BHK apartment configurations for different budgets. It combines fresh design thinking with the same construction standards behind our completed projects."
  },
  {
    "question": "Are CIDBI's nearing completion projects a safer buy?",
    "answer": "Nearing completion projects let buyers inspect actual construction quality before purchase, reducing uncertainty around delivery timelines. CIDBI's track record makes these units a practical choice for near term possession."
  },
  {
    "question": "What documentation support does CIDBI offer while buying a flat in Thrissur?",
    "answer": "CIDBI assists buyers with sale agreements, title verification and loan related paperwork throughout the purchase. This support reduces legal complications commonly faced when buying flats in Thrissur town."
  },
  {
    "question": "Can first time home buyers rely on CIDBI for flats in Thrissur town?",
    "answer": "CIDBI's completed projects demonstrate a consistent history of on time delivery and quality construction. This reliability makes CIDBI a dependable choice for first time buyers evaluating flats in Thrissur town."
  },
  {
    "question": "What types of flats does CIDBI offer in Thrissur?",
    "answer": "CIDBI offers thoughtfully planned 2, 3 and 4 BHK apartments in Thrissur. Buyers can explore different configurations based on family size, lifestyle requirements and available budget."
  },
  {
    "question": "What makes CIDBI a trusted builder for flats in Thrissur?",
    "answer": "CIDBI combines 4 decades of construction experience with quality focused processes and customer centric service. The builder has completed more than 11 million square feet and served over 1,000 customers."
  },
  {
    "question": "What should I check before buying flats for sale in Thrissur?",
    "answer": "Buyers should evaluate location, floor plan, construction quality, amenities, legal approvals, builder reputation and total purchase cost. Visiting the property can also help verify the actual living environment."
  },
  {
    "question": "Does CIDBI have new residential projects for buyers in Thrissur?",
    "answer": "Yes, CIDBI continues to develop new residential opportunities in Thrissur. CIDBI Cassia near Daya Hospital is nearing completion and offers premium 2, 3 and 4 BHK smart homes with 70 cents open space. CIDBI Chembaka in Punkunnam is a new launch project offering 2 & 3 BHK Apartments for sale in Thrissur."
  },
  {
    "question": "Are CIDBI apartments suitable for investment in Thrissur?",
    "answer": "CIDBI apartments can appeal to investors seeking established locations, quality construction and a proven builder. Buyers should independently assess rental demand, location advantages, pricing and expected long term appreciation before investing."
  },
  {
    "question": "How can I choose the right CIDBI flat for sale in Thrissur?",
    "answer": "Compare CIDBI's completed, ready to occupy and newer projects based on location, configuration, budget and possession timeline. A site visit can help you shortlist the home that best fits your needs."
  },
  {
    "question": "Can I inspect completed flats for sale in Thrissur before buying?",
    "answer": "Yes, CIDBI welcomes site visits so you can check the build quality firsthand. You can inspect the room layouts, view common amenities and verify interior finishings easily."
  },
  {
    "question": "What resale and rental value do completed flats in Thrissur Town offer?",
    "answer": "Completed homes in central locations hold strong market demand and generate high rental yields. CIDBI addresses appreciate steadily due to excellent upkeep and prime neighbourhood connectivity."
  },
  {
    "question": "How does CIDBI guarantee legal clearance for completed projects?",
    "answer": "CIDBI secures all local municipal permits, environmental clearances and occupancy certificates before handover. Buyers receive clean title deeds that make bank loan approvals smooth and quick."
  },
  {
    "question": "Why should I invest in CIDBI's new launch flats for sale in Thrissur?",
    "answer": "New launch projects offer the best introductory pricing and flexible milestone based payment plans. You also gain higher capital growth as the development moves toward final completion."
  },
  {
    "question": "How do I book a unit in CIDBI new launch flats in Thrissur Town?",
    "answer": "You can connect with our sales team to review upcoming floor plans and early pricing. Booking early ensures your preferred floor choice and locked in pre launch rates."
  },
  {
    "question": "What are the advantages of choosing nearing completion flats for sale in Thrissur?",
    "answer": "Nearing completion homes let you secure attractive launch rates while avoiding long construction waits. You can schedule your move soon and save on rent expenses easily."
  }
]

const CFaq = () => {
  const linkText = "CIDBI Chembaka in Punkunnam";
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
              {renderLinkedAnswer(faq.answer, linkText, "/chembaka-premium-luxury-apartments", index === linkedFaqIndex)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CFaq;
