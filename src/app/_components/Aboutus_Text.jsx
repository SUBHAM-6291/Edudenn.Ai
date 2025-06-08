import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Aboutus_Text = () => {
  return (
    <div className="bg-black text-white py-8 px-4 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
        {/* Left Side */}
        <div className="lg:w-1/3 flex flex-col items-start">
          <h2 className="font-gucina text-2xl sm:text-3xl md:text-3.5xl lg:text-6xl xl:text-4.5xl 2xl:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 relative group">
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#FFD700] transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </h2>
          <button
            className="font-gucina border border-[#FFD700] rounded-full bg-transparent text-[#FFD700] flex justify-center items-center gap-2 text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl hover:bg-[#FFD700] hover:text-black hover:shadow-lg transition-all duration-700 ease-in-out w-36 sm:w-40 md:w-44 h-10 sm:h-11 md:h-12 mt-6 sm:mt-12 md:mt-16 lg:mt-18 xl:mt-16 2xl:mt-24 animate-slide-up"
          >
            Read More <FaLongArrowAltRight />
          </button>
        </div>

        {/* Right Side */}
        <div className="lg:w-2/3">
          <p className="lexend-body text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl">
            Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay dragons and code websites, all while cracking jokes and sipping on virtual coffee. So, why settle for snooze-worthy lectures when you can join the Edu-Den revolution? Let’s make learning epic together! Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay dragons and code websites, all while cracking jokes and sipping on virtual coffee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus_Text;