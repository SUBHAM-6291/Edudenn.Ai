'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HiOutlineUsers } from 'react-icons/hi2';
import { FaRegClock } from 'react-icons/fa';
import { PiChatsCircle } from 'react-icons/pi';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { IoArrowForward } from 'react-icons/io5';
import { courses } from '@/backend/allcoursesdata';

const Allcourse = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      console.log(`Pressed card: ${id}`);
    }
  };

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const handleDropdownChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Function to infer category from course title and id
  const getCategory = (course) => {
    const title = course.title.toLowerCase();
    const id = course.id.toLowerCase();
    if (title.includes('ui/ux') || id.includes('ui-ux')) return 'UI/UX';
    if (title.includes('web development') || id.includes('web-development')) return 'Web App';
    if (title.includes('ethical hacking') || id.includes('ethical-hacking')) return 'Ethical Hacking';
    if (title.includes('network') || id.includes('network-administration')) return 'Cyber Security';
    if (
      title.includes('javascript') ||
      title.includes('python') ||
      title.includes('data science') ||
      title.includes('devops') ||
      id.includes('javascript') ||
      id.includes('python') ||
      id.includes('data-science') ||
      id.includes('devops')
    ) return 'Program';
    return 'Other';
  };

  // Filter categories based on course data
  const filterCategories = ['All', 'UI/UX', 'Web App', 'Program', 'Ethical Hacking', 'Cyber Security'];

  // Filter courses based on selected category
  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter((course) => getCategory(course) === selectedCategory);

  return (
    <div className="bg-black py-8 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        {/* Heading Icons Row */}
        <div className="flex items-center gap-4 sm:gap-8 md:gap-10 mb-6 sm:mb-8 justify-center">
          <TfiLayoutLineSolid className="text-yellow-400 text-xl sm:text-2xl md:text-3xl scale-150" />
          <span className="text-yellow-400 font-gucina font-semibold text-base sm:text-lg md:text-xl">
            Popular Courses
          </span>
          <TfiLayoutLineSolid className="text-yellow-400 text-xl sm:text-2xl md:text-3xl scale-150" />
        </div>

        {/* Main Heading */}
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold inline-block font-gucina tracking-tight">
            <span className="mr-1 sm:mr-2">All </span>
            <span className="relative group inline-block">
              Courses
              <span className="block bg-yellow-400 h-1 w-0 group-hover:w-full transition-all duration-500 mt-1 mx-auto"></span>
            </span>
          </h1>
        </div>

        {/* Filter Section */}
        <div className="w-full mb-8 sm:mb-10 md:mb-12">
          {/* Dropdown for Small and Tablet Devices */}
          <div className="block md:hidden sm:hidden">
            <select
              value={selectedCategory}
              onChange={handleDropdownChange}
              className="w-full bg-black border border-yellow-400 text-white font-gucina text-sm rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Select course category"
            >
              {filterCategories.map((category) => (
                <option key={category} value={category} className="bg-black text-white">
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons for Larger Devices */}
          <div className="hidden sm:flex flex-wrap justify-start gap-2 sm:gap-4 md:gap-6">
            {filterCategories.map((category) => (
              <button
                key={category}
                className={`font-gucina text-white text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-2xl transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-black'
                    : 'bg-black hover:bg-yellow-400 hover:text-black border border-yellow-400'
                }`}
                onClick={() => handleFilterClick(category)}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 place-items-center">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="relative rounded-2xl w-full max-w-[20rem] sm:max-w-[22rem] md:max-w-[24rem] h-[36rem] sm:h-[38rem] md:h-[40.36rem] overflow-hidden cursor-pointer transition-transform duration-300 hover:shadow-lg focus:shadow-lg outline-none group"
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, course.id)}
                aria-label={`Course card: ${course.title}`}
                role="button"
              >
                {/* Card Container for Flip Effect */}
                <div className="w-full h-full relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180 card-container">
                  {/* Front Face */}
                  <div className="absolute w-full h-full backface-hidden bg-white">
                    <div className="relative w-full h-[50%]">
                      <Image
                        src={course.image}
                        alt={`${course.title} course thumbnail`}
                        fill
                        className="object-cover"
                        priority={courses.indexOf(course) < 3}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33.33vw"
                      />
                    </div>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16  2xl:w-[60.12608337402344px] 2xl:h-[60.12608337402344px] flex items-center justify-center text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl z-10 group-hover:opacity-0 transition-opacity duration-300">
                      ${course.price}
                    </div>
                    <div className="relative z-0 flex flex-col justify-start h-[calc(50%-4rem)] p-4 sm:p-5 md:p-6 text-black">
                      <div className="flex justify-between items-center mb-4 sm:mb-6 gap-x-2 sm:gap-x-4">
                        <button className="bg-yellow-400 text-black font-medium font-gucina rounded-2xl text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-yellow-500 transition-colors">
                          {getCategory(course)}
                        </button>
                        <div className="flex gap-1 pr-2 sm:pr-4 md:pr-6 lg:pr-8">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-4 lg:h-4 text-yellow-400 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-left font-gucina">
                        {course.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base max-w-[90%] leading-relaxed lexend-body text-gray-700 text-left">
                        {course.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-black text-xs sm:text-sm lexend-body">
                      <div className="w-full h-px bg-gray-300 mb-2 sm:mb-3"></div>
                      <div className="flex items-center justify-center gap-16">
                        <div className="flex items-center gap-1">
                          <HiOutlineUsers className="w-3 h-3 text-black" />
                          <p className="font-medium">{course.footerStats.enrolled}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaRegClock className="w-3 h-3 text-black" />
                          <p className="font-medium">{course.footerStats.duration}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <PiChatsCircle className="w-3 h-3 text-black" />
                          <p>{course.footerStats.reviews}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-yellow-400 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
                    <div className="flex justify-between mb-4 sm:mb-6">
                      <button className="bg-black text-white font-medium font-gucina rounded-2xl text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-gray-800 transition-colors">
                        {getCategory(course)}
                      </button>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 sm:w-5 h-4 sm:h-5 text-black fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-left font-gucina text-black">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base max-w-[90%] leading-relaxed lexend-body text-black text-left mb-4 sm:mb-6">
                      {course.description}
                    </p>
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                      <button className="bg-black text-white font-medium font-gucina rounded-2xl text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-gray-800 transition-colors flex items-center gap-1 sm:gap-2">
                        Enroll Now
                      </button>
                      <IoArrowForward className="w-8 sm:w-10 h-10 sm:h-12" />
                      <div className="bg-black text-white font-bold text-base sm:text-lg md:text-xl rounded-2xl px-4 sm:px-5 md:px-6 py-1.5 sm:py-2">
                        ${course.price}
                      </div>
                    </div>
                    <div className="p-3 sm:p-4 text-black text-xs sm:text-sm lexend-body">
                      <div className="w-full h-px bg-black mb-2 sm:mb-3"></div>
                      <div className="flex items-center justify-center gap-20">
                        <div className="flex items-center gap-1">
                          <HiOutlineUsers className="w-3 h-3 text-black" />
                          <p className="font-medium">{course.footerStats.enrolled}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaRegClock className="w-3 h-3 text-black" />
                          <p className="font-medium">{course.footerStats.duration}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <PiChatsCircle className="w-3 h-3 text-black" />
                          <p>{course.footerStats.reviews}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom CSS for Flip and Filter */}
       <style jsx>{`
  .card-container {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  .group:hover .card-container {
    transform: rotateY(180deg);
  }
  .group .card-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    transition: background 0s 0.7s;
    z-index: -1;
  }
  .group:hover .card-container::before {
    background: #fbbf24;
    transition: background 0s 0.7s;
  }
  /* Add this to ensure black text on hover */
  button:hover {
    color: #000000 !important;
  }
`}</style>
      </div>
    </div>
  );
};

export default Allcourse;