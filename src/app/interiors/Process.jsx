'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import lineImage from '../../../public/images/interiors/designNewBgImage.webp';

function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === imageRef.current) {
            setIsVisible(entry.isIntersecting);
          } else {
            if (entry.isIntersecting) {
              const index = cardRefs.current.indexOf(entry.target);
              setTimeout(() => {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
              }, index * 200); 
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  const cardDetails = [
    {
      title: 'Initial Consultation',
      description: 'Firstly, our team will meet you to discuss your requirements and tastes. This is an opportunity for our designers to understand your exact needs, and the specific preference for your interiors.'
    },
    {
      title: 'Budget presentation',
      description: 'Based on our discussion, we create initial design concepts customized to your requirements and present them for your feedback and suggestions.'
    },
    {
      title: 'Design Proposal',
      description: 'After that, we prepare a detailed design proposal including floor plans, mood boards, and material samples. This will provide an overall vision for your space.'
    },
    {
      title: 'Drawing finalization',
      description: 'Upon approval of the design proposal, we finalize the designs. Then we select furniture and fixtures that aligns with your desire and concept.'
    },
    {
      title: 'Design Development',
      description: 'We refine the approved design, selecting materials, finishes, and furnishings that complement the overall aesthetic.'
    },
    {
      title: 'Production',
      description: 'With the design finalized, we move into production. Our skilled craftsmen bring your ideas to life with guarantee that every piece is made to the highest standards.'
    },{
      title:'Installation',
      description:'Our experienced and professional team manage the installation and handover the project on time.'
    }
  ];

  const imageStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' :  'translateY(20px)',
    transition: 'opacity 1s, transform 1s',
  };

  const cardStyle = {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.5s, transform 0.5s',
  };


  return (
    <section className="bg-cover bg-center sm:py-[50px] md:py-[75px] lg:py-[100px]" style={{backgroundImage:`url('/images/interiors/interiors.webp')` }}>
      <div className="containers relative">
        <h2 className="font-[clash-display-medium] sm:text-[16px] md:text-[26px] lg:text-[36px] text-center mb-8 text-[--secondary-cl]">Our interior design process</h2>
        <div className="hidden md:block" ref={imageRef} style={imageStyle}>
          <Image
            src={lineImage}
            alt="flats in Thrissur"
            layout="responsive"
            style={{ objectPosition: 'center' }}
          />
        </div>
        <div className="sm:block md:hidden">
          {cardDetails.map((card, index) => (
            <div 
              key={index} 
              ref={(el) => (cardRefs.current[index] = el)}
              className="mb-4 bg-white p-5 rounded-[20px] text-center shadow-md"
              style={{
                ...cardStyle,
                borderRadius: '20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h2 className="font-[general-sans-medium] text-[16px] text-[--secondary-cl] mb-3">{card.title}</h2>
              <p className="font-[general-sans-regular] text-[14px] text-[--secondary-cl]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 640px) and (max-width: 769px) {
          .sm\\:block.md\\:hidden {
            display: block;
          }
          .hidden.md\\:block {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

export default Process;
