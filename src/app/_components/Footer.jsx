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
        min-h-[60vh] sm:min-h-[50vh] md:min-h-[55vh] lg:min-h-[60vh] xl:min-h-[65vh]
        relative
        flex flex-col
      "
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content Container */}
      <div className="relative flex flex-col flex-1 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14">
        {/* Top Content */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {/* Section 1: Logo & Description */}
            <div className="space-y-4 text-left">
              <img
                src="/eduden.png"
                alt="EduDen Logo"
                className="w-full max-w-[8rem] sm:max-w-[9rem] md:max-w-[10rem] h-auto object-contain"
              />
              <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-[200px] sm:max-w-[220px] leading-relaxed">
                Empowering minds through quality education, innovative courses, and a vibrant learning community.
              </p>
            </div>

            {/* Section 2: Quick Links */}
            <div className="space-y-3 text-left">
              <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About Us", "Courses", "Contact"].map((link, i) => (
                  <li key={i} className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg">
                    <img
                      src="/Footer_icons/yellowarrow.png"
                      alt="Arrow"
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-2 object-contain"
                    />
                    <a href="#" className="hover:text-yellow-500">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3: Get in Touch */}
            <div className="space-y-3 text-left">
              <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Get in Touch</h3>
              <ul className="space-y-2 text-xs sm:text-sm md:text-base lg:text-lg">
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+8801745349414" className="hover:text-yellow-500 block">01745349414</a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:bd@eduden.com" className="hover:text-yellow-500 block">bd@eduden.com</a>
                </li>
                <li>
                  <strong>Location:</strong>{" "}
                  <span className="hover:text-yellow-500 block">Dhaka, Kollanpur, Bridge er Niche</span>
                </li>
              </ul>
            </div>

            {/* Section 4: Social Media */}
            <div className="space-y-3 text-left">
              <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Follow Us</h3>
              <div className="flex space-x-3">
                {[
                  { src: "/Footer_icons/facebook.png", href: "https://www.facebook.com/profile.php?id=61557983775555", label: "Facebook" },
                  { src: "/Footer_icons/instagram.png", href: "https://www.instagram.com/at_eduden/", label: "Instagram" },
                  { src: "/Footer_icons/youtube.png", href: "https://youtu.be/r8pDXO6zRUg?si=mJzIfCuuf2lVr7Y4", label: "YouTube" },
                  { src: "/Footer_icons/linkedin.png", href: "https://www.linkedin.com/company/edu-den/", label: "LinkedIn" }
                ].map(({ src, href, label }, idx) => (
                  <a key={idx} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <img
                      src={src}
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain hover:brightness-150 transition"
                      alt={label}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-auto">
          <hr className="border-gray-600 mt-6 sm:mt-8 md:mt-10 lg:mt-12" />
          <div className="text-center text-xs sm:text-sm md:text-base lg:text-lg pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-2">
            Copyright © {new Date().getFullYear()} Edu Den Powered by Ethical Den
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;