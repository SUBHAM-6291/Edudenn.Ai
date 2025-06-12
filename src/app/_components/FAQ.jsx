'use client';

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const FAQ = () => {
  const [openSection, setOpenSection] = useState(0);

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
    <div className="bg-black text-white py-12 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-[35rem] flex flex-col justify-start">
          <div className="mb-6 text-center">
            <h1 className="font-gucina text-4xl font-bold relative group">
              Frequently
              <span className="absolute left-1/2 bottom-[-2px] w-0 h-1 bg-yellow-300 transition-all duration-300 ease-in-out group-hover:w-full -translate-x-1/2"></span>
            </h1>
            <h2 className="font-gucina text-3xl font-semibold mt-1 relative group">
              Asked Questions
              <span className="absolute left-1/2 bottom-[-2px] w-0 h-1 bg-yellow-300 transition-all duration-300 ease-in-out group-hover:w-full -translate-x-1/2"></span>
            </h2>
          </div>

          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl p-5 mb-4 transition-all duration-300"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection(index)}
                role="button"
                aria-expanded={openSection === index}
              >
                <h3 className="text-white text-base sm:text-lg font-semibold">
                  {faq.title}
                </h3>
                <IoIosArrowDown
                  className={`text-white text-lg transition-transform duration-300 ${
                    openSection === index ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openSection === index ? 'max-h-[500px] mt-2' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {faq.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Contact Card */}
        <div className="lg:w-[35rem] bg-white/10 rounded-2xl p-8 flex flex-col items-center justify-center">
          <img
            src="chatsvg.png"
            alt="Chat Icon"
            className="w-16 h-16 mb-5"
          />
          <h2 className="font-gucina text-2xl font-bold text-center mb-4">
            Do you have any questions?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 text-center mb-6 leading-relaxed">
            Our team is here to guide you through your learning journey.
            Contact us for personalized support or course recommendations!
          </p>
          <button className="w-32 h-10 border border-yellow-400 rounded-full bg-transparent text-yellow-400 text-sm font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-500">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;