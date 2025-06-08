import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Needhelp = () => {
  return (
    <div
      className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-24 min-h-[300px] 2xl:h-[400px]"
      style={{ backgroundImage: `url('/needhelp/needhelpbanner.jpg')` }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(9, 229, 229, 0.07) 0%, rgba(168, 255, 87, 0.07) 100%)',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-white mb-8 md:mb-0">
          <h1 className="font-gucina text-2xl sm:text-5xl md:text-5xl lg:text-4xl font-bold mb-4 whitespace-nowrap">
            Need Help ?
          </h1>
          <p className="lexend-body text-xs sm:text-base md:text-lg lg:text-lg max-w-[250px] sm:max-w-[350px] leading-tight">
            <span className="block">
              Join the Learning Party Now – No Boring Stuff Allowed.
            </span>
            <span className="block lexend-body ">
              Join the Learning Party Now – No Boring Stuff Allowed.
            </span>
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <button
            className="font-gucina border border-[#FFD700] rounded-full bg-transparent text-[#FFD700] flex justify-center items-center gap-2 text-xs sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl hover:bg-[#FFD700] hover:text-black hover:shadow-lg transition-all duration-700 ease-in-out w-[5rem] sm:w-[8.125rem] md:w-[9rem] lg:w-[10rem] h-[2rem] sm:h-[2.75rem] md:h-[2.875rem] lg:h-[3rem] rounded-[3.125rem]"
          >
            Contact Us <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Needhelp;