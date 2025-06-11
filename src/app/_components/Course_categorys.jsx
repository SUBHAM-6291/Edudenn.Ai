'use client';

import React from 'react';
import Image from 'next/image';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';
import { FaShieldAlt, FaPaintBrush, FaMobileAlt, FaCode, FaDatabase, FaLaptopCode, FaCloud } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';

const courses = [
  {
    id: '1',
    title: 'Cyber Security',
    description: 'Learn the fundamentals of protecting systems and data from cyber threats and attacks.',
    image: '/courses/Group(17).png',
    icon: <FaShieldAlt className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Master the essentials of building responsive and dynamic websites from scratch.',
    image: '/courses/Group(17).png',
    icon: <MdDesignServices className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  },
  {
    id: '3',
    title: 'Graphic Design',
    description: 'Learn the principles of visual design, typography, and branding with industry-standard tools.',
    image: '/courses/Group(17).png',
    icon: <FaPaintBrush className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description: 'Explore cloud services, deployment models, and key providers.',
    image: '/courses/Group(17).png',
    icon: <FaMobileAlt className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  },
  {
    id: '5',
    title: 'Programming Languages',
    description: 'Understand AI concepts and build machine learning models with real-world applications.',
    image: '/courses/Group(17).png',
    icon: <FaCode className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  },
  {
    id: '6',
    title: 'Data Science and AI',
    description: 'Advanced techniques to secure networks and prevent unauthorized access effectively.',
    image: '/courses/Group(17).png',
    icon: <FaDatabase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  },
  {
    id: '7',
    title: 'Web Development',
    description: 'Build modern, responsive websites using HTML, CSS, JavaScript, and frameworks.',
    image: '/courses/Group(17).png',
    icon: <FaLaptopCode className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  },
  {
    id: '8',
    title: 'Cloud Computing',
    description: 'Master cloud architecture, deployment, and management with hands-on projects.',
    image: '/courses/Group(17).png',
    icon: <FaCloud className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />,
  },
];

const Course_categorys = () => {
  const handleKeyDown = (e, course) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      console.log(`Course clicked (keyboard): ${course.title}`);
    }
  };

  const handleClick = (course) => {
    console.log(`Course clicked: ${course.title}`);
    // Show modal or details instead of redirect
  };

  return (
    <div className="bg-black py-8 sm:py-12 md:py-14 lg:py-8 xl:py-6 2xl:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* Heading Icons Row */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8 justify-center">
          <TfiLayoutLineSolid className="text-yellow-400 text-2xl sm:text-3xl scale-150" />
          <span className="text-yellow-400 font-gucina font-semibold text-base sm:text-lg md:text-xl">
            Course Categories
          </span>
          <TfiLayoutLineSolid className="text-yellow-400 text-2xl sm:text-3xl scale-150" />
        </div>

        {/* Main Heading */}
        <div className="mb-6 sm:mb-8 md:mb-10 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold inline-block font-gucina tracking-tight">
            <span className="mr-2">Course</span>
            <span className="relative group inline-block">
              Categories
              <span className="block bg-yellow-400 h-0.5 w-0 group-hover:w-full transition-all duration-500 mt-1 mx-auto"></span>
            </span>
          </h1>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
          {courses.map((course) => (
            <div
              key={course.id}
              role="button"
              tabIndex={0}
              onClick={() => handleClick(course)}
              onKeyDown={(e) => handleKeyDown(e, course)}
              className="relative rounded-2xl w-full h-[20rem] sm:h-[22rem] md:h-[25rem] overflow-hidden cursor-pointer hover:shadow-lg focus:shadow-lg outline-none group bg-[#1a1a1a]"
              aria-label={`View details for ${course.title} category`}
            >
              {/* Background Image and Overlay (Visible on Hover) */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/group/hacker.jpg"
                  alt="Course background"
                  fill
                  className="object-cover rounded-2xl"
                  priority={courses.indexOf(course) < 4}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: 'rgba(250, 183, 10, 0.75)' }}
                />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col justify-start items-center p-4 sm:p-6 text-white h-full">
                <div className="relative w-[3.5rem] h-[3.5rem] sm:w-[4rem] sm:h-[4rem] md:w-[4.5rem] md:h-[4.5rem] mb-3 sm:mb-4 rounded-full bg-yellow-400 group-hover:bg-[#1a1a1a] transition-colors duration-300 flex items-center justify-center">
                  {course.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-center font-gucina text-white group-hover:text-black transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base max-w-[90%] mx-auto leading-relaxed lexend-body text-white group-hover:text-black transition-colors duration-300 text-center">
                  {course.description}
                </p>
              </div>

              {/* Footer Arrow */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 z-10">
                <div className="flex justify-center items-center">
                  <LiaLongArrowAltRightSolid className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white group-hover:text-black transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course_categorys;