import React from 'react';

const Clan = ({ toggleMenu }) => {
  return (
    <div
      className="
        relative
        w-full
        min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]
        bg-[url('/clan.jpg')]
        bg-cover
        bg-center
        flex
        items-center
        justify-center
      "
    >
      {/* Black overlay covering the entire section */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-20">
        <h2 className="text-yellow-400 text-xl md:text-xl font-bold mb-4 font-gucina">
          Join Our Clan
        </h2>

        <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-6 max-w-4xl leading-tight font-gucina">
          Unlock Your Inner <br /> Genius at Edu-Den!
        </h1>

        <p className="text-white text-base md:text-lg font-light mb-6 max-w-2xl lexend-body">
          Join the Learning Party Now – No Boring Stuff Allowed.
        </p>

        <button
          className="border border-[#FFD700] rounded-full py-1.5 px-6 bg-transparent text-white text-base hover:bg-[#FFD700] hover:text-black hover:shadow-lg transition-all duration-500 ease-in-out"
          onClick={toggleMenu}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Clan;