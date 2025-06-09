'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Placements = () => {
  const rowRefs = useRef([]);

  const imageRows = [
    ['/Placements/Group(8).png', '/Placements/layer1.png', '/Placements/Group(9).png'],
    ['/Placements/Group(11).png', '/Placements/Group(12).png', '/Placements/Group(13).png'],
    ['/Placements/Group(14).png', '/Placements/Group(15).png'],
    ['/Placements/Group(16).png', '/Placements/layer1.png', '/Placements/Vector(10).png'],
  ];

  useEffect(() => {
    const animations = rowRefs.current.map((ref, idx) => {
      if (!ref) return;

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
        ref.innerHTML += originalHTML;
        const totalWidth = ref.scrollWidth / 2;
        if (totalWidth <= 0) return;

        gsap.set(ref, { x: 0 });

        const direction = idx === 0 || idx === 3 ? -1 : 1;
        const targetX = direction * totalWidth;

        const animation = gsap.to(ref, {
          x: targetX,
          duration: 20 + idx * 2,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        });

        const pause = () => animation.pause();
        const resume = () => animation.resume();

        ref.addEventListener('mouseenter', pause);
        ref.addEventListener('mouseleave', resume);
        ref.parentElement.addEventListener('mouseleave', resume);

        return () => {
          ref.removeEventListener('mouseenter', pause);
          ref.removeEventListener('mouseleave', resume);
          ref.parentElement.removeEventListener('mouseleave', resume);
          animation.kill();
        };
      });
    });

    return () => {
      animations.forEach((cleanup) => {
        if (typeof cleanup === 'function') cleanup();
      });
    };
  }, []);

  return (
    <div className="relative bg-black bg-opacity-70 px-12 py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-10 flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
        {/* Left Section */}
        <div className="w-full lg:w-[52%] xl:w-[55%] space-y-6 -tracking-normal">
          <h2 className="text-white text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-extrabold font-gucina">
            Our Student{' '} <br />
            <span className="relative group inline-block">
              Placements
              <span className="block h-1 w-0 group-hover:w-full bg-yellow-400 transition-all duration-500 mt-1 sm:mt-[0.5rem]"></span>
            </span>
          </h2>
          <p className="text-white text-base md:text-lg font-light max-h-[300px] overflow-y-auto pr-2">
            Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education,
            the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay
            dragons and code websites, all while cracking jokes and sipping on virtual coffee. So, why settle
            for snooze-worthy lectures when you can join the Edu-Den revolution? Let’s make learning epic
            together!
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[48%] xl:w-[45%] bg-black bg-opacity-30 rounded-md p-4" style={{ height: '400px' }}>
          <div className="space-y-6 h-full flex flex-col justify-between">
            {imageRows.map((row, rowIdx) => (
              <div key={rowIdx} className="overflow-hidden w-full px-2" style={{ height: '70px' }}>
                <div
                  ref={(el) => {
                    rowRefs.current[rowIdx] = el;
                  }}
                  className="flex gap-4 will-change-transform whitespace-nowrap flex-nowrap"
                  style={{ minWidth: 'max-content' }}
                >
                  {[...row, ...row].map((src, i) => (
                    <div key={i} className="flex-shrink-0 w-[100px] h-[70px]">
                      <Image
                        src={src}
                        alt={`placement-${rowIdx}-${i}`}
                        width={100}
                        height={70}
                        className="w-full h-full object-contain"
                        priority={rowIdx === 0 && i === 0}
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
  );
};

export default Placements;
