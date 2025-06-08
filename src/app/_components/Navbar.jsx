'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isWhatsNewOpen, setIsWhatsNewOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsCoursesOpen(false);
      setIsWhatsNewOpen(false);
    }
  };

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  const toggleWhatsNew = () => {
    setIsWhatsNewOpen(!isWhatsNewOpen);
  };

  return (
    <nav
      className={` top-0 left-0 w-full z-50 font-gucina transition-colors duration-500 ${
        isMenuOpen ? 'bg-black text-white' : 'bg-black text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex-shrink-0 w-32 sm:w-36 md:w-40 lg:w-48 xl:w-52">
          <img
            src="/eduden.png"
            alt="EduDen Logo"
            className="object-contain w-full h-auto"
          />
        </div>

        <button
          className="lg:hidden focus:outline-none text-white transition-colors duration-500"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-8 h-8 text-[#FFD700]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        <div className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6">
          <Link href="#" className="hover:text-[#FFD700] transition-colors duration-500">
            Home
          </Link>
          <Link href="#" className="hover:text-[#FFD700] transition-colors duration-500">
            About Us
          </Link>

          <div className="relative">
            <button
              className="hover:text-[#FFD700] transition-colors duration-500 flex items-center"
              onClick={toggleCourses}
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              Courses
              <span className="ml-1">
                <svg
                  className="w-5 h-5 hover:text-[#FFD700] transition-colors duration-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            {isCoursesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-black text-white border border-[#FFD700] rounded-lg shadow-lg z-50 transition-all duration-500">
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[#FFD700] hover:text-black transition-colors duration-500"
                >
                  Web Development
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[#FFD700] hover:text-black transition-colors duration-500"
                >
                  Data Science
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[#FFD700] hover:text-black transition-colors duration-500"
                >
                  Graphic Design
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[#FFD700] hover:text-black transition-colors duration-500"
                >
                  Digital Marketing
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="hover:text-[#FFD700] transition-colors duration-500 flex items equality-center"
              onClick={toggleWhatsNew}
              onMouseEnter={() => setIsWhatsNewOpen(true)}
              onMouseLeave={() => setIsWhatsNewOpen(false)}
            >
              What's New
              <span className="ml-1">
                <svg
                  className="w-5 h-5 hover:text-[#FFD700] transition-colors duration-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            {isWhatsNewOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-black text-white border border-[#FFD700] rounded-lg shadow-lg z-50 transition-all duration-500">
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[#FFD700] hover:text-black transition-colors duration-500"
                >
                  New Courses
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[#FFD700] hover:text-black transition-colors duration-500"
                >
                  Webinars
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-[#FFD700] hover:text-black transition-color duration-500"
                >
                  Blog Posts
                </Link>
              </div>
            )}
          </div>

          <Link href="#" className="hover:text-[#FFD700] transition-colors duration-500">
            Verify
          </Link>
          <Link href="#" className="hover:text-[#FFD700] transition-colors duration-500">
            Contact Us
          </Link>
        </div>

        <div className="hidden lg:flex items-center">
          <button className="border border-[#FFD700] rounded-full py-3 px-8 bg-transparent hover:bg-[#FFD700] hover:text-black hover:shadow-lg transition-all duration-700 ease-in-out">
            Enroll Now
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center w-full bg-black text-white space-y-4 py-6 px-4 transition-all duration-500">
          <Link
            href="#"
            className="w-full max-w-md text-center hover:text-[#FFD700] transition-colors duration-500 py-2"
          >
            Home
          </Link>
          <Link
            href="#"
            className="w-full max-w-md text-center hover:text-[#FFD700] transition-colors duration-500 py-2"
          >
            About Us
          </Link>
          <div className="w-full max-w-md">
            <button
              className="w-full text-center hover:text-[#FFD700] transition-colors duration-500 flex items-center justify-center py-2"
              onClick={toggleCourses}
            >
              Courses
              <span className="ml-2">
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isCoursesOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="w-full bg-black text-white border border-[#FFD700] rounded-lg shadow-lg mt-2">
                <Link
                  href="#"
                  className="block px-4 py-2 text-center hover:bg-[#FFD700] hover:text-black transition-colors duration-300"
                >
                  Web Development
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-center hover:bg-[#FFD700] hover:text-black transition-colors duration-300"
                >
                  Data Science
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-center hover:bg-[#FFD700] hover:text-black transition-colors duration-300"
                >
                  Graphic Design
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-center hover:bg-[#FFD700] hover:text-black transition-colors duration-300"
                >
                  Digital Marketing
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full max-w-md">
            <button
              className="w-full text-center hover:text-[#FFD700] transition-colors duration-500 flex items-center justify-center py-2"
              onClick={toggleWhatsNew}
            >
              What's New
              <span className="ml-2">
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isWhatsNewOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="w-full bg-black text-white border border-[#FFD700] rounded-lg shadow-lg mt-2">
                <Link
                  href="#"
                  className="block px-4 py-2 text-center hover:bg-[#FFD700] hover:text-black transition-colors duration-300"
                >
                  New Courses
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-center hover:bg-[#FFD700] hover:text-black transition-colors duration-300"
                >
                  Webinars
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-center hover:bg-[#FFD700] hover:text-black transition-colors duration-300"
                >
                  Blog Posts
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="#"
            className="w-full max-w-md text-center hover:text-[#FFD700] transition-colors duration-500 py-2"
          >
            Verify
          </Link>
          <Link
            href="#"
            className="w-full max-w-md text-center hover:text-[#FFD700] transition-colors duration-500 py-2"
          >
            Contact Us
          </Link>
          <button
            className="w-full max-w-md border border-[#FFD700] rounded-full py-3 px-8 bg-transparent hover:bg-[#FFD700] hover:text-black hover:shadow-lg transition-all duration-500 ease-in-out"
            onClick={toggleMenu}
          >
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;