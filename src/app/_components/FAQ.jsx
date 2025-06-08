'use client';

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const FAQ = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const faqData = [
    {
      title: 'What is ByteSkill?',
      content: 'Discover ByteSkill, an online platform delivering IT and coding courses with practical training for tech career success.',
    },
    {
      title: 'Do ByteSkill courses come with certificates?',
      content: 'Yes, ByteSkill courses typically offer certificates upon completion, validating your skills and knowledge.',
    },
    {
      title: 'Is there tutor support available on ByteSkill?',
      content: 'Yes, ByteSkill provides tutor support to assist with course-related queries and enhance your learning experience.',
    },
    {
      title: 'How do I make payments for ByteSkill courses?',
      content: 'Payments for ByteSkill courses are made through their website by selecting a course and completing the secure checkout process.',
    },
    {
      title: 'Are ByteSkill courses suitable for beginners?',
      content: 'Absolutely, ByteSkill offers beginner-friendly courses with comprehensive instruction and hands-on practice.',
    },
  ];

  return (
    <div className="bg-black min-h-screen p-4 sm:p-6 md:p-8 w-full flex flex-col lg:flex-row gap-4 sm:gap-6 items-start justify-between">
      <div className="flex-1 w-full flex flex-col">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-white text-3xl sm:text-6xl md:text-6xl lg:text-[3.75rem] font-bold font-gucina relative group inline-block">
            Frequently
            <span className="block h-1 w-0 group-hover:w-full bg-yellow-400 transition-all duration-500 mt-1 sm:mt-[0.5rem]"></span>
          </h1>
          <h2 className="text-white text-3xl sm:text-6xl md:text-6xl lg:text-[3.75rem] font-semibold font-gucina mt-1 sm:mt-[0.5rem]">
            Asked Questions
          </h2>
        </div>

        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-lg p-4 sm:p-5 md:p-[1.25rem] mb-4 sm:mb-5 md:mb-[1.25rem] transition-all duration-300"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleSection(index)}
              role="button"
              aria-expanded={openSection === index}
              aria-controls={`faq-content-${index}`}
            >
              <h3 className="text-white text-base sm:text-lg md:text-[1.125rem] font-semibold mb-2 sm:mb-[0.5rem] lexend-body">
                {faq.title}
              </h3>
              <IoIosArrowDown
                className={`text-white text-lg sm:text-xl md:text-[1.5rem] transition-transform duration-300 ${
                  openSection === index ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
            {openSection === index && (
              <p
                id={`faq-content-${index}`}
                className="text-gray-300 text-sm sm:text-base md:text-[1rem] leading-relaxed mt-2 sm:mt-3 md:mt-[0.75rem] lexend-body"
              >
                {faq.content}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="w-full lg:w-1/3 max-w-[36rem] h-auto sm:h-[30rem] md:h-[34rem] lg:h-[39.75rem] bg-white/10 rounded-lg p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center overflow-hidden">
        <img
          src="chatsvg.png"
          alt="Chat Icon"
          className="w-16 sm:w-20 md:w-[7.5625rem] h-16 sm:h-20 md:h-[7.0625rem] object-contain mb-4 sm:mb-6 md:mb-[1.5625rem]"
        />

        <h2 className="text-white w-full text-2xl sm:text-3xl md:text-[2.5rem] lg:text-[2.75rem] font-bold font-gucina leading-normal tracking-[0] text-center mb-4 sm:mb-6 md:mb-[1.5625rem]">
          Do you have any questions?
        </h2>

        <p className="text-gray-300 w-full text-sm sm:text-base md:text-[1rem] lg:text-[1.125rem] font-medium leading-relaxed tracking-[0] lexend-body text-center mb-4 sm:mb-6 md:mb-[1.5625rem] overflow-wrap break-word">
          Our team is here to guide you through your learning journey. Contact us for personalized support or course recommendations!
        </p>

        <button
          className="w-32 sm:w-36 md:w-[9.0625rem] h-10 sm:h-11 md:h-[2.875rem] border border-yellow-400 rounded-full bg-transparent text-yellow-400 text-base sm:text-lg md:text-[1.25rem] font-semibold leading-[1.5] tracking-[0] font-gucina hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_10px_rgba(255,215,0,0.5)] transition-all duration-500 flex items-center justify-center"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FAQ;