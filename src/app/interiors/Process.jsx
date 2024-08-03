'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import lineImage from '../../../public/images/interiors/newImageArjun.svg';

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
      description: 'We begin by meeting with you to discuss your goals, preferences, and budget. This is an opportunity for us to understand your lifestyle, tastes, and the specific requirements of your space.'
    },
    {
      title: 'Budget presentation',
      description: 'Based on our discussion, we create initial design concepts tailored to your requirements, presenting them for your feedback and input.'
    },
    {
      title: 'Drawing finalization',
      description: 'Upon approval of the design proposal, we finalize designs, select furniture, fixtures, and finishes, ensuring they align with the agreed-upon concept.'
    },
    {
      title: 'Design Development',
      description: 'We manage the procurement process, sourcing and purchasing all necessary items, and oversee their timely installation by coordinating with suppliers and contractors.'
    },
    {
      title: 'Production',
      description: 'As the project nears completion, we focus on styling and adding finishing touches to enhance the overall aesthetic of your space, ensuring every detail contributes to the cohesive design.'
    },
    {
      title: 'Procurement and Installation',
      description: 'We manage the procurement process, sourcing and purchasing all necessary items, and oversee their timely installation by coordinating with suppliers and contractors.'
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
    <section className="bg-cover bg-center sm:py-[50px] md:py-[75px] lg:py-[100px]" style={{backgroundImage:`url('/images/interiors/interiors.svg')` }}>
      <div className="containers relative">
        <h1 className="font-[clash-display-medium] sm:text-[16px] md:text-[26px] lg:text-[36px] text-center mb-8 text-[--secondary-cl]">Our interior design process</h1>
        <div className="hidden md:block" ref={imageRef} style={imageStyle}>
          <Image
            src={lineImage}
            alt="Line Image"
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
