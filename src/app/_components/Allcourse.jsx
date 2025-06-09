'use client';

import React from 'react';
import Image from 'next/image';
import { HiOutlineUsers } from 'react-icons/hi2';
import { FaRegClock } from 'react-icons/fa';
import { PiChatsCircle } from 'react-icons/pi';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { IoArrowForward } from 'react-icons/io5';
import { courses } from '@/backend/allcoursesdata';

const Allcourse = () => {
  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      console.log(`Pressed card: ${id}`);
    }
  };

  return (
    <div className="bg-black p-4 sm:p-8">
      {/* Heading Icons Row */}
      <div className="flex items-center gap-10 mb-8 justify-center">
        <TfiLayoutLineSolid className="text-yellow-400 text-3xl scale-150" />
        <span className="text-yellow-400 font-gucina font-semibold text-lg">
          Popular Courses
        </span>
        <TfiLayoutLineSolid className="text-yellow-400 text-3xl scale-150" />
      </div>

      {/* Main Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold inline-block font-gucina tracking-tight">
          <span className="mr-2">All </span>
          <span className="relative group inline-block">
            Courses
            <span className="block bg-yellow-400 h-1 w-0 group-hover:w-full transition-all duration-500 mt-1 mx-auto"></span>
          </span>
        </h1>
      </div>

      {/* Course Cards Grid */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative rounded-2xl w-full max-w-[24rem] h-[38.36rem] overflow-hidden cursor-pointer transition-transform duration-300 hover:shadow-lg focus:shadow-lg outline-none group"
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, course.id)}
              aria-label={`Course card: ${course.title}`}
              role="button"
            >
              {/* Card Container for Flip Effect */}
              <div className="w-full h-full relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180 card-container">
                {/* Front Face */}
                <div className="absolute w-full h-full backface-hidden bg-white">
                  {/* Image */}
                  <div className="relative w-full h-[50%]">
                    <Image
                      src={course.image}
                      alt={`${course.title} course thumbnail`}
                      fill
                      className="object-cover"
                      priority={courses.indexOf(course) < 3}
                      sizes="(max-width: 640px) 100vw, 33.33vw"
                    />
                  </div>

                  {/* Yellow Circle */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center text-black font-bold text-lg z-10 group-hover:opacity-0 transition-opacity duration-300">
                    ${course.price}
                  </div>

                  {/* Content Section */}
                  <div className="relative z-0 flex flex-col justify-start h-[calc(50%-4rem)] p-6 text-black">
                    {/* Button + Stars */}
                    <div className="flex justify-between items-center mb-6 gap-x-4">
                      <button className="bg-yellow-400 text-black font-medium font-gucina rounded-2xl text-sm px-4 py-2 hover:bg-yellow-500 transition-colors">
                        All Cyber Security
                      </button>

                      <div className="flex gap-1 pr-12">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center font-gucina">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base max-w-[90%] mx-auto leading-relaxed lexend-body text-gray-700 text-center">
                      {course.description}
                    </p>
                  </div>

                  {/* Footer Stats */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-black text-sm sm:text-base lexend-body">
                    <div className="w-full h-px bg-gray-300 mb-3"></div>
                    <div className="relative flex items-center justify-center gap-20">
                      <div className="flex items-center gap-2">
                        <HiOutlineUsers className="w-4 h-4 text-black" />
                        <p className="font-medium">{course.footerStats.enrolled}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaRegClock className="w-4 h-4 text-black" />
                        <p className="font-medium">{course.footerStats.duration}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <PiChatsCircle className="w-4 h-4 text-black" />
                        <p>{course.footerStats.reviews}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-yellow-400 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-6">
                    <button className="bg-black text-white font-medium font-gucina rounded-2xl text-sm px-4 py-2 hover:bg-gray-800 transition-colors">
                      All Cyber Security
                    </button>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-black fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center font-gucina text-black">
                    {course.title}
                  </h3>

                  <p className="text-sm sm:text-base max-w-[90%] mx-auto leading-relaxed lexend-body text-black text-center mb-6">
                    {course.description}
                  </p>

                  <div className="flex justify-between items-center mb-6">
                    <button className="bg-black text-white font-medium font-gucina rounded-2xl text-sm px-4 py-2 hover:bg-gray-800 transition-colors flex items-center gap-2">
                      Enroll Now
                    </button>
                    <IoArrowForward className="w-10 h-12" />
                    <div className="bg-black text-white font-bold text-lg rounded-2xl px-6 py-2">
                      ${course.price}
                    </div>
                  </div>

                  <div className="p-4 text-black text-sm sm:text-base lexend-body">
                    <div className="w-full h-px bg-gray-300 mb-3"></div>
                    <div className="relative flex items-center justify-center gap-20">
                      <div className="flex items-center gap-2">
                        <HiOutlineUsers className="w-4 h-4 text-black" />
                        <p className="font-medium">{course.footerStats.enrolled}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaRegClock className="w-4 h-4 text-black" />
                        <p className="font-medium">{course.footerStats.duration}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <PiChatsCircle className="w-4 h-4 text-black" />
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

      {/* Custom CSS for Flip */}
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
      `}</style>
    </div>
  );
};

export default Allcourse;
