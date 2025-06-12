import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Needhelp = () => {
  return (
    <div
      className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-24 min-h-[300px] 2xl:h-[400px] w-[100vw] left-1/2 -translate-x-1/2"
      style={{ backgroundImage: `url('/needhelp/needhelpbanner.jpg')` }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(9, 229, 229, 0.07) 0%, rgba(168, 255, 87, 0.07) 100%)',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center mt-[-45px] min-h-[300px]">
        <div className="text-white mb-8 text-center">
          <h1 className="font-gucina text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-bold mb-4 whitespace-nowrap">
            Need Help?
          </h1>
          <p className="lexend-body text-xs sm:text-base md:text-lg lg:text-lg max-w-[250px] sm:max-w-[350px] leading-tight mx-auto">
            Join the Learning Party Now – No Boring Stuff Allowed.   Join the Learning Party Now – No Boring Stuff Allowed.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            className="font-gucina border border-[#FFD700] rounded-full bg-transparent text-[#FFD700] flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg hover:bg-[#FFD700] hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out px-4 sm:px-6 py-2 sm:py-3 md:py-3.5 w-full sm:w-auto min-w-[120px] sm:min-w-[140px] md:min-w-[160px]"
          >
            Contact Us
            <FaLongArrowAltRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Needhelp;