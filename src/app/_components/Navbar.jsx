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
      className="top-0 left-0 w-full z-50 font-gucina transition-colors duration-500 bg-black text-white"
    >
      <div
        className="
          max-w-7xl 2xl:max-w-[1440px] mx-auto 
          flex items-center justify-between 
          py-0.5 sm:py-1 md:py-1 lg:py-1 xl:py-0.5 2xl:py-1

          px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14
        "
      >
        {/* Logo */}
        <div className="flex-shrink-0 w-32 sm:w-40 md:w-44 lg:w-48 xl:w-52 2xl:w-56">
          <img
            src="/eduden.png"
            alt="EduDen Logo"
            className="object-contain w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden focus:outline-none text-white transition-colors duration-500"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#FFD700]"
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

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-3 xl:space-x-5 2xl:space-x-6">
          <Link href="#" className="hover:text-[#FFD700] transition-colors duration-500 text-sm xl:text-base">
            Home
          </Link>
          <Link href="#" className="hover:text-[#FFD700] transition-colors duration-500 text-sm xl:text-base">
            About Us
          </Link>

          <div className="relative">
            <button
              className="hover:text-[#FFD700] transition-colors duration-500 flex items-center text-sm xl:text-base"
              onClick={toggleCourses}
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              Courses
              <span className="ml-1">
                <svg
                  className="w-4 h-4 xl:w-5 xl:h-5 hover:text-[#FFD700] transition-colors duration-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isCoursesOpen && (
              <div className="absolute left-0 mt-2 w-40 sm:w-44 md:w-48 bg-black text-white border border-[#FFD700] rounded-lg shadow-lg z-50 transition-all duration-500">
                <Link
                  href="#"
                  className="block px-4 py-1.5 hover:bg-[#FFD700] hover:text-black transition-colors duration-500 text-sm"
                >
                  Web Development
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-1.5 hover:bg-[#FFD700] hover:text-black transition-colors duration-500 text-sm"
                >
                  Data Science
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-1.5 hover:bg-[#FFD700] hover:text-black transition-colors duration-500 text-sm"
                >
                  Graphic Design
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-1.5 hover:bg-[#FFD700] hover:text-black transition-colors duration-500 text-sm"
                >
                  Digital Marketing
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="hover:text-[#FFD700] transition-colors duration-500 flex items-center text-sm xl:text-base"
              onClick={toggleWhatsNew}
              onMouseEnter={() => setIsWhatsNewOpen(true)}
              onMouseLeave={() => setIsWhatsNewOpen(false)}
            >
              What's New
              <span className="ml-1">
                <svg
                  className="w-4 h-4 xl:w-5 xl:h-5 hover:text-[#FFD700] transition-colors duration-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isWhatsNewOpen && (
              <div className="absolute left-0 mt-2 w-40 sm:w-44 md:w-48 bg-black text-white border border-[#FFD700] rounded-lg shadow-lg z-50 transition-all duration-500">
                <Link
                  href="#"
                  className="block px-4 py-1.5 hover:bg-[#FFD700] hover:text-black transition-colors duration-500 text-sm"
                >
                  New Courses
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-1.5 hover:bg-[#FFD700] hover:text-black transition-colors duration-500 text-sm"
                >
                  Webinars
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-1.5 hover:bg-[#FFD700] hover:text-black transition-colors duration-500 text-sm"
                >
                  Blog Posts
                </Link>
              </div>
            )}
          </div>

          <Link href="#" className="hover:text-[#FFD700] transition-colors duration-500 text-sm xl:text-base">
            Verify
          </Link>
          <Link href="#" className="hover:text-[#FFD700] transition-colors duration-500 text-sm xl:text-base">
            Contact Us
          </Link>
        </div>

        {/* Enroll Now Button (Desktop) */}
        <div className="hidden lg:flex items-center">
          <button
            className="
              border border-[#FFD700] rounded-full 
              py-1.5 sm:py-2 md:py-2.5 px-6 sm:px-7 md:px-8 
              bg-transparent hover:bg-[#FFD700] hover:text-black hover:shadow-lg 
              transition-all duration-500 ease-in-out text-sm xl:text-base
            "
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="
            lg:hidden flex flex-col items-start w-full bg-black text-white 
            space-y-2 py-3 px-4 sm:px-6 md:px-8 
            transition-all duration-500
          "
        >
          <Link
            href="#"
            className="w-full text-left hover:bg-[#FFD700] hover:text-black rounded-lg px-4 py-1.5 transition-colors duration-300 text-sm sm:text-base"
          >
            Home
          </Link>
          <Link
            href="#"
            className="w-full text-left hover:bg-[#FFD700] hover:text-black rounded-lg px-4 py-1.5 transition-colors duration-300 text-sm sm:text-base"
          >
            About Us
          </Link>
          <div className="w-full">
            <button
              className="
                w-full text-left hover:bg-[#FFD700] hover:text-black rounded-lg 
                px-4 py-1.5 transition-colors duration-300 flex items-center justify-between text-sm sm:text-base
              "
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
                isCoursesOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="w-full bg-black text-white rounded-lg shadow-lg mt-2">
                <Link
                  href="#"
                  className="block text-left px-6 sm:px-8 py-1.5 hover:bg-[#FFD700] hover:text-black rounded-lg transition-colors duration-300 text-sm sm:text-base"
                >
                  Web Development
                </Link>
                <Link
                  href="#"
                  className="block text-left px-6 sm:px-8 py-1.5 hover:bg-[#FFD700] hover:text-black rounded-lg transition-colors duration-300 text-sm sm:text-base"
                >
                  Data Science
                </Link>
                <Link
                  href="#"
                  className="block text-left px-6 sm:px-8 py-1.5 hover:bg-[#FFD700] hover:text-black rounded-lg transition-colors duration-300 text-sm sm:text-base"
                >
                  Graphic Design
                </Link>
                <Link
                  href="#"
                  className="block text-left px-6 sm:px-8 py-1.5 hover:bg-[#FFD700] hover:text-black rounded-lg transition-colors duration-300 text-sm sm:text-base"
                >
                  Digital Marketing
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">
            <button
              className="
                w-full text-left hover:bg-[#FFD700] hover:text-black rounded-lg 
                px-4 py-1.5 transition-colors duration-300 flex items-center justify-between text-sm sm:text-base
              "
              onClick={toggleWhatsNew}
            >
              What's New
              <span className="ml-2">
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isWhatsNewOpen ? 'rotate-180' : ''}`}
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
                isWhatsNewOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="w-full bg-black text-white rounded-lg shadow-lg mt-2">
                <Link
                  href="#"
                  className="block text-left px-6 sm:px-8 py-1.5 hover:bg-[#FFD700] hover:text-black rounded-lg transition-colors duration-300 text-sm sm:text-base"
                >
                  New Courses
                </Link>
                <Link
                  href="#"
                  className="block text-left px-6 sm:px-8 py-1.5 hover:bg-[#FFD700] hover:text-black rounded-lg transition-colors duration-300 text-sm sm:text-base"
                >
                  Webinars
                </Link>
                <Link
                  href="#"
                  className="block text-left px-6 sm:px-8 py-1.5 hover:bg-[#FFD700] hover:text-black rounded-lg transition-colors duration-300 text-sm sm:text-base"
                >
                  Blog Posts
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="#"
            className="w-full text-left hover:bg-[#FFD700] hover:text-black rounded-lg px-4 py-1.5 transition-colors duration-300 text-sm sm:text-base"
          >
            Verify
          </Link>
          <Link
            href="#"
            className="w-full text-left hover:bg-[#FFD700] hover:text-black rounded-lg px-4 py-1.5 transition-colors duration-300 text-sm sm:text-base"
          >
            Contact Us
          </Link>
          <button
            className="
              w-full max-w-xs sm:max-w-sm border border-[#FFD700] rounded-full 
              py-2 sm:py-2.5 px-6 sm:px-8 
              bg-transparent hover:bg-[#FFD700] hover:text-black hover:shadow-lg 
              transition-all duration-500 ease-in-out text-sm sm:text-base
            "
          >
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;