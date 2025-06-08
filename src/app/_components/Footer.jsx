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
        h-auto
        min-h-[30vh] sm:min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh]
        relative
      "
    >
      {/* Black overlay covering the entire footer */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="relative mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:max-w-[1619px] py-3 sm:py-6 md:py-8 lg:py-10 xl:py-12">
        <div className="rounded-lg p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8 xl:gap-10">
            {/* Section 1: EduDen Logo and Description */}
            <div className="space-y-2 sm:space-y-4 md:space-y-5 text-left">
              <img
                src="/eduden.png"
                alt="EduDen Logo"
                className="w-full max-w-[7rem] sm:max-w-[8rem] md:max-w-[10rem] lg:max-w-[12rem] xl:max-w-[14rem] h-auto object-contain"
                loading="lazy"
              />
              <p className="lexend-body text-[0.6rem] sm:text-xs md:text-sm lg:text-base max-w-[150px] sm:max-w-[200px] md:max-w-xs">
                Empowering minds through quality education, innovative courses, and a vibrant learning community dedicated to lifelong growth and success.
              </p>
              <div className="flex space-x-1 sm:space-x-2 md:space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61557983775555"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow EduDen on Facebook"
                >
                  <img
                    src="/Footer_icons/facebook.png"
                    alt="Facebook"
                    className="w-[0.75rem] h-[0.75rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.25rem] md:h-[1.25rem] hover:filter hover:brightness-200 hover:saturate-200 transition-all duration-300 object-contain"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://www.instagram.com/at_eduden/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow EduDen on Instagram"
                >
                  <img
                    src="/Footer_icons/instagram.png"
                    alt="Instagram"
                    className="w-[0.75rem] h-[0.75rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.25rem] md:h-[1.25rem] hover:filter hover:brightness-200 hover:saturate-200 transition-all duration-300 object-contain"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://youtu.be/r8pDXO6zRUg?si=mJzIfCuuf2lVr7Y4"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow EduDen on YouTube"
                >
                  <img
                    src="/Footer_icons/youtube.png"
                    alt="YouTube"
                    className="w-[0.75rem] h-[0.75rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.25rem] md:h-[1.25rem] hover:filter hover:brightness-200 hover:saturate-200 transition-all duration-300 object-contain"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/edu-den/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow EduDen on LinkedIn"
                >
                  <img
                    src="/Footer_icons/linkedin.png"
                    alt="LinkedIn"
                    className="w-[0.75rem] h-[0.75rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.25rem] md:h-[1.25rem] hover:filter hover:brightness-200 hover:saturate-200 transition-all duration-300 object-contain"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>

            {/* Section 2: Quick Links */}
            <div className="space-y-2 sm:space-y-4 md:space-y-5 text-left">
              <h3 className="font-gucina text-[0.7rem] sm:text-sm md:text-base lg:text-lg font-semibold">
                Quick Links
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li className="flex items-center">
                  <img
                    src="/Footer_icons/yellowarrow.png"
                    alt="Arrow"
                    className="w-[0.6rem] h-[0.6rem] sm:w-[0.875rem] sm:h-[0.875rem] mr-1 sm:mr-2 object-contain"
                    loading="lazy"
                  />
                  <a
                    href="#"
                    className="hover:text-yellow-500 transition-colors text-[0.6rem] sm:text-xs md:text-sm lg:text-base"
                    aria-label="Go to Home page"
                  >
                    Home
                  </a>
                </li>
                <li className="flex items-center">
                  <img
                    src="/Footer_icons/yellowarrow.png"
                    alt="Arrow"
                    className="w-[0.6rem] h-[0.6rem] sm:w-[0.875rem] sm:h-[0.875rem] mr-1 sm:mr-2 object-contain"
                    loading="lazy"
                  />
                  <a
                    href="#"
                    className="hover:text-yellow-500 transition-colors text-[0.6rem] sm:text-xs md:text-sm lg:text-base"
                    aria-label="Go to About Us page"
                  >
                    About Us
                  </a>
                </li>
                <li className="flex items-center">
                  <img
                    src="/Footer_icons/yellowarrow.png"
                    alt="Arrow"
                    className="w-[0.6rem] h-[0.6rem] sm:w-[0.875rem] sm:h-[0.875rem] mr-1 sm:mr-2 object-contain"
                    loading="lazy"
                  />
                  <a
                    href="#"
                    className="hover:text-yellow-500 transition-colors text-[0.6rem] sm:text-xs md:text-sm lg:text-base"
                    aria-label="Go to Courses page"
                  >
                    Courses
                  </a>
                </li>
                <li className="flex items-center">
                  <img
                    src="/Footer_icons/yellowarrow.png"
                    alt="Arrow"
                    className="w-[0.6rem] h-[0.6rem] sm:w-[0.875rem] sm:h-[0.875rem] mr-1 sm:mr-2 object-contain"
                    loading="lazy"
                  />
                  <a
                    href="#"
                    className="hover:text-yellow-500 transition-colors text-[0.6rem] sm:text-xs md:text-sm lg:text-base"
                    aria-label="Go to Contact page"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 3: Learning Platform */}
            <div className="space-y-2 sm:space-y-4 md:space-y-5 text-left">
              <h3 className="font-gucina text-[0.7rem] sm:text-sm md:text-base lg:text-lg font-semibold">
                Learning Platform
              </h3>
              <div className="space-y-1 sm:space-y-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61557983775555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-yellow-500 transition-colors text-[0.6rem] sm:text-xs md:text-sm lg:text-base"
                >
                  <img
                    src="/Footer_icons/facebook.png"
                    alt="Facebook"
                    className="w-[0.75rem] h-[0.75rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.25rem] md:h-[1.25rem] mr-1 sm:mr-2 hover:filter hover:brightness-200 hover:saturate-200 transition-all duration-300 object-contain"
                    loading="lazy"
                  />
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/at_eduden/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-yellow-500 transition-colors text-[0.6rem] sm:text-xs md:text-sm lg:text-base"
                >
                  <img
                    src="/Footer_icons/instagram.png"
                    alt="Instagram"
                    className="w-[0.75rem] h-[0.75rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.25rem] md:h-[1.25rem] mr-1 sm:mr-2 hover:filter hover:brightness-200 hover:saturate-200 transition-all duration-300 object-contain"
                    loading="lazy"
                  />
                  Instagram
                </a>
                <a
                  href="https://youtu.be/r8pDXO6zRUg?si=mJzIfCuuf2lVr7Y4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-yellow-500 transition-colors text-[0.6rem] sm:text-xs md:text-sm lg:text-base"
                >
                  <img
                    src="/Footer_icons/youtube.png"
                    alt="YouTube"
                    className="w-[0.75rem] h-[0.75rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.25rem] md:h-[1.25rem] mr-1 sm:mr-2 hover:filter hover:brightness-200 hover:saturate-200 transition-all duration-300 object-contain"
                    loading="lazy"
                  />
                  YouTube
                </a>
                <a
                  href="https://www.linkedin.com/company/edu-den/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-yellow-500 transition-colors text-[0.6rem] sm:text-xs md:text-sm lg:text-base"
                >
                  <img
                    src="/Footer_icons/linkedin.png"
                    alt="LinkedIn"
                    className="w-[0.75rem] h-[0.75rem] sm:w-[1rem] sm:h-[1rem] md:w-[1.25rem] md:h-[1.25rem] mr-1 sm:mr-2 hover:filter hover:brightness-200 hover:saturate-200 transition-all duration-300 object-contain"
                    loading="lazy"
                  />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Section 4: Get in Touch */}
            <div className="space-y-2 sm:space-y-4 md:space-y-5 text-left">
              <h3 className="font-gucina text-[0.7rem] sm:text-sm md:text-base lg:text-lg font-semibold">
                Get in Touch
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li>
                  <span className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base">Phone:</span>
                  <a
                    href="tel:+8801745349414"
                    className="hover:text-yellow-500 transition-colors text-[0.6rem] sm:text-xs md:text-sm lg:text-base block"
                  >
                    01745349414
                  </a>
                </li>
                <li>
                  <span className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base">Email:</span>
                  <a
                    href="mailto:bd@eduden.com"
                    className="hover:text-yellow-500 transition-colors text-[0.6rem] sm:text-xs md:text-sm lg:text-base block"
                  >
                    bd@eduden.com
                  </a>
                </li>
                <li>
                  <span className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base">Location:</span>
                  <span className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base hover:text-yellow-500 transition-colors block">
                    Dhaka, Kollanpur, Bridge er Niche
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-600 my-3 sm:my-6 md:my-8 lg:my-10" />

          <div className="text-center text-[0.6rem] sm:text-xs md:text-sm lg:text-base pb-2 sm:pb-4">
            Copyright © {new Date().getFullYear()} Edu Den Powered by Ethical Den
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;