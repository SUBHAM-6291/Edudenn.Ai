'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer
      className="
        bg-gray-900
        bg-[url(/footer.jpg)]
        bg-center
        bg-no-repeat
        bg-cover
        text-white
        w-full
        min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh]
        relative
        flex flex-col
      "
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content Container */}
      <div
        className="
          relative flex flex-col flex-1 
          max-w-full sm:max-w-7xl 2xl:max-w-[1440px] 
          ms-0 sm:mx-auto 
          px-4 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-14 
          py-3 sm:py-6 md:py-8 lg:py-10 xl:py-12
        "
      >
        <div className="flex-1 rounded-lg p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
              gap-6 sm:gap-6 md:gap-8 lg:gap-10 
              text-left
            "
          >
            {/* Section 1: EduDen Logo and Description */}
            <div className="space-y-4 sm:space-y-4 md:space-y-5">
              <img
                src="/eduden.png"
                alt="EduDen Logo"
                className="
                  w-full max-w-[7rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[12rem] xl:max-w-[14rem] 
                  h-auto object-contain
                "
                loading="lazy"
              />
              <p
                className="
                  lexend-body text-[0.6rem] sm:text-xs md:text-sm lg:text-base 
                  max-w-[150px] sm:max-w-[200px] md:max-w-xs
                "
              >
                Empowering minds through quality education, innovative courses, and a vibrant learning community dedicated to lifelong growth and success.
              </p>
              <div className="flex space-x-2 sm:space-x-2 md:space-x-3">
                {[
                  { src: '/Footer_icons/facebook.png', href: 'https://www.facebook.com/profile.php?id=61557983775555', label: 'Facebook' },
                  { src: '/Footer_icons/instagram.png', href: 'https://www.instagram.com/at_eduden/', label: 'Instagram' },
                  { src: '/Footer_icons/youtube.png', href: 'https://youtu.be/r8pDXO6zRUg?si=mJzIfCuuf2lVr7Y4', label: 'YouTube' },
                  { src: '/Footer_icons/linkedin.png', href: 'https://www.linkedin.com/company/edu-den/', label: 'LinkedIn' },
                ].map(({ src, href, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow EduDen on ${label}`}
                  >
                    <img
                      src={src}
                      alt={label}
                      className="
                        w-[0.75rem] h-[0.75rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.25rem] md:h-[1.25rem] 
                        hover:filter hover:brightness-200 hover:saturate-200 
                        transition-all duration-300 object-contain
                      "
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Section 2: Quick Links */}
            <div className="space-y-4 sm:space-y-4 md:space-y-5">
              <h3 className="font-gucina text-[0.7rem] sm:text-sm md:text-base lg:text-lg font-semibold">
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-2">
                {['Home', 'About Us', 'Courses', 'Contact'].map((link, i) => (
                  <li key={i} className="flex items-center">
                    <img
                      src="/Footer_icons/yellowarrow.png"
                      alt="Arrow"
                      className="
                        w-[0.6rem] h-[0.6rem] sm:w-[0.875rem] sm:h-[0.875rem] 
                        mr-1 sm:mr-2 object-contain
                      "
                      loading="lazy"
                    />
                    <a
                      href="#"
                      className="
                        hover:text-yellow-500 transition-colors 
                        text-[0.6rem] sm:text-xs md:text-sm lg:text-base
                      "
                      aria-label={`Go to ${link} page`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3: Learning Platform */}
            <div className="space-y-4 sm:space-y-4 md:space-y-5">
              <h3 className="font-gucina text-[0.7rem] sm:text-sm md:text-base lg:text-lg font-semibold">
                Learning Platform
              </h3>
              <div className="space-y-2 sm:space-y-2">
                {[
                  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61557983775555', icon: '/Footer_icons/facebook.png' },
                  { name: 'Instagram', href: 'https://www.instagram.com/at_eduden/', icon: '/Footer_icons/instagram.png' },
                  { name: 'YouTube', href: 'https://youtu.be/r8pDXO6zRUg?si=mJzIfCuuf2lVr7Y4', icon: '/Footer_icons/youtube.png' },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/edu-den/', icon: '/Footer_icons/linkedin.png' },
                ].map(({ name, href, icon }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center hover:text-yellow-500 transition-colors 
                      text-[0.6rem] sm:text-xs md:text-sm lg:text-base
                    "
                  >
                    <img
                      src={icon}
                      alt={name}
                      className="
                        w-[0.75rem] h-[0.75rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.25rem] md:h-[1.25rem] 
                        mr-1 sm:mr-2 hover:filter hover:brightness-200 hover:saturate-200 
                        transition-all duration-300 object-contain
                      "
                      loading="lazy"
                    />
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* Section 4: Get in Touch */}
            <div className="space-y-4 sm:space-y-4 md:space-y-5">
              <h3 className="font-gucina text-[0.7rem] sm:text-sm md:text-base lg:text-lg font-semibold">
                Get in Touch
              </h3>
              <ul className="space-y-2 sm:space-y-2">
                <li>
                  <span className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base">Phone:</span>
                  <a
                    href="tel:+8801745349414"
                    className="
                      hover:text-yellow-500 transition-colors 
                      text-[0.6rem] sm:text-xs md:text-sm lg:text-base block
                    "
                  >
                    01745349414
                  </a>
                </li>
                <li>
                  <span className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base">Email:</span>
                  <a
                    href="mailto:bd@eduden.com"
                    className="
                      hover:text-yellow-500 transition-colors 
                      text-[0.6rem] sm:text-xs md:text-sm lg:text-base block
                    "
                  >
                    bd@eduden.com
                  </a>
                </li>
                <li>
                  <span className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base">Location:</span>
                  <span
                    className="
                      text-[0.6rem] sm:text-xs md:text-sm lg:text-base 
                      hover:text-yellow-500 transition-colors block
                    "
                  >
                    Dhaka, Kollanpur, Bridge er Niche
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-auto">
          <hr className="border-gray-600 mt-6 sm:mt-6 md:mt-8 lg:mt-10" />
          <div
            className="
              text-left sm:text-center 
              text-[0.6rem] sm:text-xs md:text-sm lg:text-base 
              pt-2 sm:pt-4 md:pt-6 lg:pt-8 pb-2 sm:pb-4
            "
          >
            Copyright © {new Date().getFullYear()} Edu Den Powered by Ethical Den
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;