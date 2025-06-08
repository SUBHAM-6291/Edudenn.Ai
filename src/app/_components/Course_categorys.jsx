'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';

// Course categories data
const courses = [
  {
    id: '1',
    title: 'Cyber Security',
    description: 'Learn the fundamentals of protecting systems and data from cyber threats and attacks.',
    image: '/group/Group 26.png',
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Master the essentials of building responsive and dynamic websites from scratch.',
    image: '/group/Group 29.png',
  },
  {
    id: '3',
    title: 'Graphic Design',
    description: 'Dive into data analysis, visualization, and machine learning with practical tools.',
    image: '/group/Group 24.png',
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description: 'Explore cloud services, deployment models, and key providers .',
    image: '/group/Group 23.png',
  },
  {
    id: '5',
    title: 'Programming Languages',
    description: 'Understand AI concepts and build machine learning models with real-world applications.',
    image: '/group/Group 27.png',
  },
  {
    id: '6',
    title: 'Data Science and AI',
    description: 'Advanced techniques to secure networks and prevent unauthorized access effectively.',
    image: '/group/Group 28.png',
  },
  {
    id: '7',
    title: 'Web Development',
    description: 'Build modern, responsive websites using HTML, CSS, JavaScript, and frameworks.',
    image: '/group/Group 26.png',
  },
  {
    id: '8',
    title: 'Cloud Computing',
    description: 'Master cloud architecture, deployment, and management with hands-on projects.',
    image: '/group/Group 27.png',
  },
];

const Course_categorys = () => {
  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      console.log(`Navigating to course category: ${id}`);
    }
  };

  return (
    <div className="bg-black p-4 sm:p-6 md:p-8 lg:p-10">
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
          <span className="mr-2">Course </span>
          <span className="relative group inline-block">
            Categories
            <span className="block bg-yellow-400 h-0.5 w-0 group-hover:w-full transition-all duration-500 mt-1 mx-auto"></span>
          </span>
        </h1>
      </div>

      {/* Course Category Cards Grid */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 place-items-center">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="relative rounded-2xl w-full max-w-[20rem] sm:max-w-[22rem] md:max-w-[25rem] h-[20rem] sm:h-[22rem] md:h-[25rem] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 focus:scale-105 hover:shadow-lg focus:shadow-lg outline-none"
              style={{ backgroundColor: '#1a1a1a' }}
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, course.id)}
              aria-label={`View details for ${course.title} category`}
            >
              {/* Centered Image */}
              <div className="relative w-[5rem] h-[5rem] sm:w-[5.5rem] sm:h-[5.5rem] md:w-[6rem] md:h-[6rem] mx-auto mt-4 sm:mt-6">
                <Image
                  src={course.image}
                  alt={`${course.title} category thumbnail`}
                  fill
                  className="object-cover"
                  priority={courses.indexOf(course) < 4}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>

              {/* Content Section */}
              <div className="relative z-0 flex flex-col justify-start items-center p-4 sm:p-6 text-white pb-16 sm:pb-20 md:pb-24">
                {/* Heading */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-center font-gucina">
                  {course.title}
                </h3>

                {/* Description (Lexend font) */}
                <p className="text-xs sm:text-sm md:text-base max-w-[90%] mx-auto leading-relaxed lexend-body text-gray-300 text-center">
                  {course.description}
                </p>
              </div>

              {/* Footer with Centered Arrow */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white">
                <div className="flex justify-center items-center">
                  <LiaLongArrowAltRightSolid className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course_categorys;