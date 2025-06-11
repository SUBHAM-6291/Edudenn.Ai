'use client';
import React, { useEffect, useRef } from 'react';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { gsap } from 'gsap';

const OurCollaboration = () => {
  const logosContainerRef = useRef(null);

  useEffect(() => {
    const logosContainer = logosContainerRef.current;
    if (!logosContainer) return;

    const originalHTML = logosContainer.innerHTML;
    logosContainer.innerHTML += originalHTML + originalHTML;

    const totalWidth = logosContainer.scrollWidth / 3;
    if (totalWidth <= 0) return;

    gsap.set(logosContainer, { x: 0 });

    const animation = gsap.to(logosContainer, {
      x: -totalWidth,
      duration: 120,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const parsedX = parseFloat(x);
          return parsedX <= -totalWidth ? parsedX + totalWidth : parsedX;
        }),
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  const customLogos = [
    '/ourcollaboration/Group 1006.png',
    '/ourcollaboration/Group 150.png',
    '/ourcollaboration/Layer_1.png',
    '/ourcollaboration/Layer_1(1).png',
    '/ourcollaboration/Group 150.png',
    '/ourcollaboration/Group 1006.png',
    '/ourcollaboration/Layer_1(1).png',
    '/ourcollaboration/Layer_1.png',
    '/ourcollaboration/Group 1006.png',
    '/ourcollaboration/Group 150.png',
    '/ourcollaboration/Layer_1.png',
    '/ourcollaboration/Layer_1(1).png',
    '/ourcollaboration/Group 150.png',
    '/ourcollaboration/Group 1006.png',
    '/ourcollaboration/Layer_1(1).png',
    '/ourcollaboration/Layer_1.png',
  ];

  const repeatedLogos = Array.from({ length: 50 }, (_, i) => `/ourcollaboration/logo${(i % 4) + 1}.png`);
  const logos = [...customLogos, ...repeatedLogos];

  return (
    <div className="flex flex-col items-center justify-start h-auto bg-black py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-6 sm:mb-8 md:mb-10">
        <TfiLayoutLineSolid className="text-yellow-400 text-xl sm:text-2xl md:text-3xl scale-125 sm:scale-150" />
        <span className="text-yellow-400 text-base sm:text-lg md:text-xl font-semibold">Our Partner</span>
        <TfiLayoutLineSolid className="text-yellow-400 text-xl sm:text-2xl md:text-3xl scale-125 sm:scale-150" />
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.375rem] font-bold text-white relative mb-4 sm:mb-6 md:mb-8 flex flex-wrap justify-center text-center px-4">
        <span className="josefin-sans-title mr-2">Our</span>
        <span className="font-gucina relative group inline-block" style={{ fontWeight: 700 }}>
          Collaboration
          <span className="absolute bottom-0 left-0 w-0 h-[2px] sm:h-[3px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </h1>

      {/* Description */}
      <p className="text-center text-gray-300 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lexend-body text-sm sm:text-base md:text-lg px-4" style={{ fontWeight: 500, lineHeight: '150%' }}>
        Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning, and the champions of fun-filled knowledge. Let’s make learning epic together!
      </p>

      {/* Logo Carousel */}
      <div className="w-full max-w-full relative overflow-hidden py-6 bg-black">
        {/* Left and right gradient shadows */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-20 md:w-24 z-20 pointer-events-none bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 h-full w-16 sm:w-20 md:w-24 z-20 pointer-events-none bg-gradient-to-l from-black to-transparent" />

        {/* Scrolling container */}
        <div className="overflow-hidden w-full">
          <div
            ref={logosContainerRef}
            className="flex gap-6 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-24 whitespace-nowrap flex-nowrap"
          >
            {logos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Partner Logo ${i + 1}`}
                className="object-contain min-w-[6rem] sm:min-w-[8rem] md:min-w-[10rem] h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCollaboration;
