'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Placements = () => {
  const rowRefs = useRef([]);
  const animationsRef = useRef([]);

  const imageRows = [
    [
      '/Placements/Group(8).png',
      '/Placements/layer1.png',
      '/Placements/Group(9).png',
      '/Placements/Group(11).png',
      '/Placements/Group(12).png',
    ],
    [
      '/Placements/Group(11).png',
      '/Placements/Group(12).png',
      '/Placements/Group(13).png',
      '/Placements/Group(14).png',
      '/Placements/Group(15).png',
    ],
    [
      '/Placements/Group(14).png',
      '/Placements/Group(15).png',
      '/Placements/Group(16).png',
      '/Placements/layer1.png',
      '/Placements/Group(8).png',
    ],
    [
      '/Placements/Group(16).png',
      '/Placements/layer1.png',
      '/Placements/Vector(10).png',
      '/Placements/Group(9).png',
      '/Placements/Group(11).png',
    ],
  ];

  useEffect(() => {
    animationsRef.current = rowRefs.current.map((ref, idx) => {
      if (!ref) return null;

      const imageElements = ref.querySelectorAll('img');

      return Promise.all(
        Array.from(imageElements).map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
              })
        )
      ).then(() => {
        const originalHTML = ref.innerHTML;
        ref.innerHTML += originalHTML.repeat(5);
        const totalWidth = ref.scrollWidth / 6;
        if (totalWidth <= 0) return null;

        const direction = idx === 0 || idx === 2 ? -1 : 1;
        gsap.set(ref, { x: direction === 1 ? -totalWidth : 0 });

        const targetX = direction * totalWidth;

        const animation = gsap.to(ref, {
          x: targetX,
          duration: 300 + idx * 10,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => {
              const parsedX = parseFloat(x);
              if (direction === 1) {
                return parsedX >= 0 ? parsedX - totalWidth * 2 : parsedX;
              } else {
                return parsedX <= -totalWidth ? parsedX + totalWidth * 2 : parsedX;
              }
            }),
          },
        });

        // Add hover event listeners
        const handleMouseEnter = () => animation.pause();
        const handleMouseLeave = () => animation.play();

        ref.addEventListener('mouseenter', handleMouseEnter);
        ref.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          ref.removeEventListener('mouseenter', handleMouseEnter);
          ref.removeEventListener('mouseleave', handleMouseLeave);
          animation.kill();
        };
      });
    });

    return () => {
      animationsRef.current.forEach((cleanup) => {
        if (typeof cleanup === 'function') cleanup();
      });
    };
  }, []);

  return (
    <div className="w-full bg-black bg-opacity-80 mb-8 sm:mb-12 watch:mb-4 relative">
      <div className="w-full max-w-[1240px] mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 2xl:gap-12 watch:gap-6 relative z-0 items-start justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-[55%] xl:w-[55%] 2xl:w-[58%] bg-black bg-opacity-100 p-6 sm:p-8 watch:p-4 rounded-md min-h-[200px] max-h-[354px] 2xl:h-[340px] flex flex-col justify-between">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5.5xl 2xl:text-5.5xl watch:text-2xl font-extrabold font-gucina text-center sm:text-left md:text-center lg:text-left">
              Our Student <br />
              <span className="relative group inline-block">
                Placements
                <span className="block h-1 w-0 group-hover:w-full bg-yellow-400 transition-all duration-500 mt-1 sm:mt-[0.5rem] watch:mt-0.5"></span>
              </span>
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg watch:text-xs font-light max-w-full pr-0 max-h-[200px] sm:max-h-[250px] 2xl:max-h-[280px] watch:max-h-[150px] text-center sm:text-left md:text-center lg:text-left xl:text-left 2xl:text-left">
              Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education,
              the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay
              dragons and code websites, all while cracking jokes and sipping on virtual coffee. So, why settle
              for snooze-worthy lectures when you can join the Edu-Den revolution? Let’s make learning epic
              together!
            </p>
          </div>

          {/* Right Section with Strong Left & Right Shadow */}
          <div className="w-full lg:w-[45%] xl:w-[45%] 2xl:w-[42%] bg-black/50 rounded-md p-6 sm:p-8 watch:p-4 min-h-[300px] max-h-[354px] 2xl:h-[340px] relative overflow-hidden">
            {/* Wider Left Shadow */}
            <div className="absolute top-0 left-0 h-full w-16 sm:w-24 lg:w-[20rem] 2xl:w-[18rem] watch:w-12 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            {/* Wider Right Shadow */}
            <div className="absolute top-0 right-0 h-full w-16 sm:w-24 lg:w-[20rem] 2xl:w-[18rem] watch:w-12 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

            <div className="relative space-y-3 sm:space-y-6 watch:space-y-2 h-full flex flex-col justify-between">
              {imageRows.map((row, rowIdx) => (
                <div key={rowIdx} className="overflow-hidden w-full" style={{ height: '60px' }}>
                  <div
                    ref={(el) => {
                      rowRefs.current[rowIdx] = el;
                    }}
                    className="flex gap-6 sm:gap-8 watch:gap-4 will-change-transform whitespace-nowrap flex-nowrap min-w-[600px]"
                  >
                    {[...row, ...row, ...row, ...row, ...row, ...row].map((src, i) => (
                      <div key={i} className="flex-shrink-0 w-[100px] h-[70px] watch:w-[60px] watch:h-[40px]">
                        <Image
                          src={src}
                          alt={`Company logo for placement ${rowIdx}-${i}`}
                          width={100}
                          height={70}
                          className="w-full h-full object-contain"
                          priority={rowIdx === 0 && i === 0}
                          sizes="(max-width: 360px) 60px, 100px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placements;