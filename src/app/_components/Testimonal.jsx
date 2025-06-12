'use client'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesentEx urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent",
    name: "Nazmul Islam",
    role: "Graphic Designer",
    image: "/last.jpg",
  },
  {
    id: 2,
    quote: "Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesentEx urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent.",
    name: "Jane Doe",
    role: "Web Developer",
    image: "/courses/1.jpg",
  },
  {
    id: 3,
    quote: "Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesentEx urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent",
    name: "John Smith",
    role: "UI/UX Designer",
    image: "/courses/2.jpg",
  },
];

const Testimonial = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="bg-black py-12 sm:py-16 md:py-20 lg:py-28">
      <div
        className="
          relative
          w-full
          bg-[url('/footer.jpg')]
          bg-cover
          bg-center
          bg-no-repeat
          flex
          items-center
          justify-center
          min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh]
          px-4 sm:px-6 md:px-8
        "
      >
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex flex-col lg:flex-row-reverse items-center justify-between w-full max-w-6xl gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {/* TEXT CONTENT */}
          <div className="flex flex-col items-start w-full lg:w-1/2 space-y-4 sm:space-y-6 text-left">
            <h2 className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl font-extrabold font-gucina">
              Testimonial
            </h2>
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold font-gucina">
              What Students Say
            </h3>
            <p className="text-white text-sm sm:text-base md:text-lg font-light lexend-body hover:underline-yellow">
              Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris
              placerat ridiculus odio praesent. Ex urna finibus natoque auctor pretium etiam
              consequat eleifend himenaeos mauris placerat ridiculus odio praesent.
            </p>
            <button
              className="
                border border-[#FFD700] rounded-full py-2 px-6 sm:px-8
                bg-[#FFD700] text-black text-sm sm:text-base
                hover:bg-transparent hover:text-[#FFD700] transition-colors
              "
            >
              View All Testimonial
            </button>
          </div>

          {/* TESTIMONIAL SLIDER */}
          <div className="flex flex-col items-start w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <Slider {...settings} className="w-full">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-2">
                  <div className="relative flex p-4 sm:p-6 rounded-[10px] shadow-lg bg-[#141414] w-full h-auto gap-4 items-start">
                    <img
                      src="/66.QuoteRight.png"
                      alt="Quote"
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0"
                      loading="lazy"
                    />
                    <div className="flex flex-col justify-between w-full relative">
                      <div className="absolute top-0 right-0 mt-2 mr-2 flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-white text-xs sm:text-sm font-light lexend-body mt-6 sm:mt-8 leading-relaxed text-left hover:underline-yellow">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center space-x-3 mt-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                          loading="lazy"
                        />
                        <div>
                          <h3 className="text-yellow-400 text-sm sm:text-base font-bold font-gucina text-left">
                            {testimonial.name}
                          </h3>
                          <p className="text-white text-xs sm:text-sm font-light lexend-body text-left">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;