import React from 'react';
import { TfiLayoutLineSolid } from 'react-icons/tfi';

const OurCollaboration = () => {
  return (
    <div className="flex flex-col items-center justify-start h-auto bg-black py-2 sm:py-4 md:py-10 lg:py-12">
      {/* Header Section */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-2 sm:mb-6 md:mb-8">
        <TfiLayoutLineSolid className="text-yellow-400 text-xl sm:text-2xl md:text-3xl scale-125 sm:scale-150" />
        <span className="text-yellow-400 text-base sm:text-lg md:text-xl font-semibold">Our Partner</span>
        <TfiLayoutLineSolid className="text-yellow-400 text-xl sm:text-2xl md:text-3xl scale-125 sm:scale-150" />
      </div>

      {/* Title */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.375rem] font-bold text-white relative mb-2 sm:mb-5 md:mb-6 flex gap-2 items-center h-[2rem] sm:h-[4rem] md:h-[5rem]"
      >
        <span className="josefin-sans-title">Our</span>
        <span
          className="font-gucina relative group"
          style={{
            fontWeight: 700,
            lineHeight: '115%',
            letterSpacing: '0%',
          }}
        >
          Collaboration
          <span className="absolute bottom-0 left-0 w-0 h-[0.1rem] sm:h-[0.125rem] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </h1>

      {/* Description */}
      <p
        className="text-center text-gray-300 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-4 sm:mb-2 md:mb-10 lg:mb-12 lexend-body"
        style={{
          fontWeight: 500,
          fontSize: '0.875rem',
          lineHeight: '150%',
          letterSpacing: '0%',
        }}
      >
        Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay dragons and code websites, all while cracking jokes and sipping on virtual coffee. So, why settle for snooze-worthy lectures when you can join the Edu-Den revolution? Let’s make learning epic together!
      </p>

      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-20">
        <img
          src="/ourcollaboration/Group 1006.png"
          alt="Partner Logo 1"
          className="object-contain max-w-[10rem] sm:max-w-[12rem] md:max-w-[15rem] lg:max-w-[18rem] xl:max-w-[20rem] h-[2rem] sm:h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] xl:h-[3.875rem]"
        />
        <img
          src="/ourcollaboration/Group 150.png"
          alt="Partner Logo 2"
          className="object-contain max-w-[10rem] sm:max-w-[12rem] md:max-w-[15rem] lg:max-w-[18rem] xl:max-w-[20rem] h-[2rem] sm:h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] xl:h-[3.875rem]"
        />
        <img
          src="/ourcollaboration/Layer_1.png"
          alt="Partner Logo 3"
          className="object-contain max-w-[10rem] sm:max-w-[12rem] md:max-w-[15rem] lg:max-w-[18rem] xl:max-w-[20rem] h-[2rem] sm:h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] xl:h-[3.875rem]"
        />
        <img
          src="/ourcollaboration/Layer_1(1).png"
          alt="Partner Logo 4"
          className="object-contain max-w-[10rem] sm:max-w-[12rem] md:max-w-[15rem] lg:max-w-[18rem] xl:max-w-[20rem] h-[2rem] sm:h-[2.5rem] md:h-[3rem] lg:h-[3.5rem] xl:h-[3.875rem]"
        />
      </div>
    </div>
  );
};

export default OurCollaboration;
