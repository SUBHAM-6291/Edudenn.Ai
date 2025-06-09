'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Placements = () => {
  const rowRefs = useRef([]);

  const imageRows = [
    ['/Placements/Group(8).png', '/Placements/Group(9).png', '/Placements/Group(10).png'], // Row 1
    ['/Placements/Group(11).png', '/Placements/Group(12).png', '/Placements/Group(13).png'], // Row 2
    ['/Placements/Group(14).png', '/Placements/Group(15).png'], // Row 3
    ['/Placements/Group(16).png', '/Placements/layer1.png', '/Placements/Vector(10).png'], // Row 4
  ];

  useEffect(() => {
    console.log('Placements useEffect running at', new Date().toISOString());

    const animations = rowRefs.current.map((ref, idx) => {
      if (!ref) {
        console.warn(`Row ${idx} ref is null at start`);
        return;
      }
      console.log(`Processing row ${idx}, ref:`, ref);

      // Wait for images to load
      const imageElements = ref.querySelectorAll('img');
      console.log(`Row ${idx}: Found ${imageElements.length} images`);
      return Promise.all(
        Array.from(imageElements).map((img, imgIdx) => {
          if (img.complete) {
            console.log(`Row ${idx}, image ${imgIdx} already loaded: ${img.src}`);
            return Promise.resolve();
          }
          return new Promise((resolve) => {
            img.onload = () => {
              console.log(`Row ${idx}, image ${imgIdx} loaded: ${img.src}`);
              resolve();
            };
            img.onerror = () => {
              console.error(`Row ${idx}, image ${imgIdx} failed to load: ${img.src}`);
              resolve(); // Continue even if an image fails
            };
          });
        })
      ).then(() => {
        console.log(`Row ${idx}: All images loaded`);

        // Duplicate content
        const originalHTML = ref.innerHTML;
        ref.innerHTML += originalHTML;
        console.log(`Row ${idx}: Content duplicated`);

        const totalWidth = ref.scrollWidth / 2;
        console.log(`Row ${idx}: totalWidth=${totalWidth}`);

        if (totalWidth <= 0) {
          console.warn(`Row ${idx}: Invalid totalWidth, skipping animation`);
          return;
        }

        gsap.set(ref, { x: 0 });
        console.log(`Row ${idx}: Initial position set to x=0`);

        // Rows 1 and 4 (idx 0, 3): right to left; Rows 2 and 3 (idx 1, 2): left to right
        const direction = idx === 0 || idx === 3 ? -1 : 1;
        const targetX = direction * totalWidth;
        console.log(`Row ${idx}: direction=${direction}, targetX=${targetX}`);

        const animation = gsap.to(ref, {
          x: targetX,
          duration: 20 + idx * 2,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => {
              const value = parseFloat(x) % totalWidth;
              console.log(`Row ${idx}: x=${value}`);
              return value + 'px';
            }),
          },
          onStart: () => {
            console.log(`Row ${idx}: Animation started`);
          },
          onComplete: () => {
            console.warn(`Row ${idx}: Animation completed unexpectedly (should not happen)`);
          },
          onInterrupt: () => {
            console.warn(`Row ${idx}: Animation interrupted`);
          },
        });

        const pause = () => {
          console.log(`Pausing row ${idx}`);
          animation.pause();
        };
        const resume = () => {
          console.log(`Resuming row ${idx}`);
          animation.resume();
        };

        ref.addEventListener('mouseenter', pause);
        ref.addEventListener('mouseleave', resume);
        const parent = ref.parentElement;
        parent.addEventListener('mouseleave', resume);
        console.log(`Row ${idx}: Hover listeners added`);

        return () => {
          console.log(`Cleaning up row ${idx}`);
          ref.removeEventListener('mouseenter', pause);
          ref.removeEventListener('mouseleave', resume);
          parent.removeEventListener('mouseleave', resume);
          animation.kill();
          console.log(`Row ${idx}: Animation killed`);
        };
      });
    });

    return () => {
      console.log('Cleaning up all animations at', new Date().toISOString());
      animations.forEach((cleanup, idx) => {
        if (typeof cleanup === 'function') {
          console.log(`Running cleanup for row ${idx}`);
          cleanup();
        }
      });
      console.log('Component unmounted at', new Date().toISOString());
    };
  }, []);

  return (
    <div className="relative bg-black bg-opacity-70 py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Left Section: Text (~55% width for 3:3:2:3 ratio) */}
        <div className="w-full lg:w-[55%] space-y-8">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold font-gucina">
            Our Student{' '}
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

        {/* Right Section: Images (~45% width for 3:3:2:3 ratio) */}
        <div
          className="bg-black bg-opacity-30 rounded-md w-full lg:w-[45%]"
          style={{ height: '400px', padding: '16px' }}
        >
          <div className="space-y-6 h-full flex flex-col justify-between">
            {imageRows.map((row, rowIdx) => (
              <div key={rowIdx} className="overflow-hidden w-full px-2" style={{ height: '70px' }}>
                <div
                  ref={(el) => {
                    rowRefs.current[rowIdx] = el;
                    console.log(`Assigned ref for row ${rowIdx}:`, el);
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
                        priority={rowIdx === 0 && i === 0} // Prioritize first image
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