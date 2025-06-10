"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { GoArrowDownRight } from "react-icons/go";
import { gsap } from "gsap";

const Aboutus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);
  const imageRef = useRef(null);
  const welcomeRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const oneStopRef = useRef(null);
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);
  const socialRef = useRef(null);

  const images = [
    "/aboutus.jpg",
    "/creative-people-working-office.jpg",
    "/3rd_image_students.avif",
    "/boy_thinking.jpg",
  ];

  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      if (!isAnimating.current) {
        handleAutoTransition();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const animateImage = (newIndex, direction = 1) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    tl.set(
      [
        welcomeRef.current,
        line1Ref.current,
        line2Ref.current,
        line3Ref.current,
        oneStopRef.current,
        buttonRef.current,
        arrowRef.current,
        socialRef.current,
      ],
      {
        opacity: 0,
        y: 20,
        duration: 0,
      },
      0
    );

    // Image animation with slide and width transition (full-screen to normal)
    tl.to(
      imageRef.current,
      {
        x: direction === 1 ? "-100%" : "100%",
        width: "100vw", // Stretch to full viewport width for exit
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut", // Smooth ease-in-out
      },
      0
    );

    tl.call(
      () => {
        setCurrentIndex(newIndex);
        gsap.set(imageRef.current, {
          x: direction === 1 ? "100%" : "-100%",
          width: "100vw", // Start at full viewport width for entrance
          opacity: 0,
        });
      },
      null,
      0.8
    );

    tl.to(
      imageRef.current,
      {
        x: "0%",
        width: "100%", // Return to container's normal width
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut", // Smooth ease-in-out
      },
      0.8
    );

    const fixedDelay = 0.8 + 1.0;
    tl.to(welcomeRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }, fixedDelay);
    tl.to(line1Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }, fixedDelay + 0.3);
    tl.to(line2Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }, fixedDelay + 0.6);
    tl.to(line3Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }, fixedDelay + 0.6);
    tl.to(oneStopRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }, fixedDelay + 0.6);
    tl.to(buttonRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }, fixedDelay + 0.6);
    tl.to(arrowRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }, fixedDelay + 0.6);
    tl.to(
      socialRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => gsap.set(socialRef.current, { clearProps: "all" }),
      },
      fixedDelay + 0.7
    );
  };

  const handleAutoTransition = () => {
    const newIndex = (currentIndex + 1) % images.length;
    animateImage(newIndex, 1);
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    animateImage(newIndex, -1);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    animateImage(newIndex, 1);
  };

  const goToImage = (index) => {
    const direction =
      index > currentIndex ||
      (index === 0 && currentIndex === images.length - 1)
        ? 1
        : -1;
    animateImage(index, direction);
  };

  return (
    <div className="bg-black flex justify-center pt-2 sm:pt-12">
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] h-[350px] sm:h-[100px] md:h-[450px] lg:h-[520px] rounded-2xl relative border-t-2 overflow-hidden">
        <Image
          ref={imageRef}
          src={images[currentIndex]}
          alt={`About Us Slide ${currentIndex + 1} - Team or Mission Visual`}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center", willChange: "transform, opacity, width" }} // Optimize for width animation
          width={1200}
          height={520}
          priority
        />
        {/* Semi-transparent black overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-5" />
        <div className="absolute top-0 left-0 flex flex-col justify-center items-start text-left p-4 sm:p-6 ml-2 sm:ml-3 w-[calc(100%-48px)] sm:w-[calc(100%-48px)] md:w-[calc(100%-56px)] lg:w-[calc(100%-64px)] gap-2 sm:gap-4 md:gap-6 z-10">
          <h2
            ref={welcomeRef}
            className="flex items-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-yellow-400 border-2 border-yellow-400 border-opacity-50 py-1 px-2 sm:px-3 rounded-2xl"
          >
            <IoHomeOutline className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 mr-1 sm:mr-2" />
            Welcome to EduDen
          </h2>
          <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
            <h1
              ref={line1Ref}
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold text-white"
            >
              Where Learning
            </h1>
            <h1
              ref={line2Ref}
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold text-white"
            >
              Meets Imagination
            </h1>
            <h1
              ref={line3Ref}
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold text-white"
            >
              & Innovation
            </h1>
          </div>
          <h6
            ref={oneStopRef}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-white max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-xl"
          >
            We're your one-stop destination for unlocking your potential and
            conquering the digital realm with confidence.
          </h6>
          <button
            ref={buttonRef}
            className="flex items-center bg-yellow-400 text-black font-semibold py-1 px-4 sm:py-2 sm:px-6 rounded-2xl hover:bg-yellow-500 transition-colors duration-300 text-xs sm:text-sm md:text-base lg:text-lg"
            style={{ willChange: "opacity, transform" }}
            aria-label="Discover More"
          >
            Discover More
            <GoArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
          </button>
        </div>

        <div
          ref={arrowRef}
          className="absolute bottom-0 sm:bottom-4 left-0 flex justify-between items-center w-full px-4 sm:px-6 z-20"
        >
          <button
            onClick={handlePrev}
            className="text-white p-2 sm:p-3 focus:outline-none transition-colors duration-300"
            aria-label="Previous Image"
          >
            <IoIosArrowRoundBack className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={handleNext}
            className="text-white p-2 sm:p-3 focus:outline-none transition-colors duration-300"
            aria-label="Next Image"
          >
            <IoIosArrowRoundForward className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        <div
          ref={socialRef}
          className="absolute top-16 sm:top-20 md:top-24 lg:top-28 right-1 sm:right-1 md:right-2 lg:right-2 flex flex-col justify-start items-center bg-yellow-400 rounded-4xl p-2 gap-3 sm:gap-4 md:gap-5 w-10 sm:w-10 md:w-12 lg:w-14 h-[240px] sm:h-[280px] md:h-[300px] lg:h-[320px] z-10"
          aria-label="Follow Us Social Links"
        >
          <div className="flex items-center justify-center w-full h-8 sm:h-10 md:h-12 lg:h-14">
            <span className="text-black font-semibold text-[8px] sm:text-[10px] md:text-xs lg:text-sm transform rotate-90 origin-center whitespace-nowrap">
              Follow Us
            </span>
          </div>
          <img
            src="/arrow.png"
            alt="Down Arrow"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rotate-180"
          />
          <a
            href="https://www.facebook.com/profile.php?id=61557983775555"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow EduDen on Facebook"
          >
            <img
              src="/follownow_icons/facebook.png"
              alt="Facebook"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://www.instagram.com/at_eduden/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow EduDen on Instagram"
          >
            <img
              src="/follownow_icons/instagram.png"
              alt="Instagram"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://youtu.be/r8pDXO6zRUg?si=mJzIfCuuf2lVr7Y4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow EduDen on YouTube"
          >
            <img
              src="/follownow_icons/youtube.png"
              alt="YouTube"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/edu-den/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow EduDen on LinkedIn"
          >
            <img
              src="/follownow_icons/linkedin.png"
              alt="LinkedIn"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        <div className="absolute bottom-1 sm:bottom-6 md:bottom-8 flex justify-center gap-1 sm:gap-2 w-full z-20">
          {images
            .map((_, index) => index)
            .reverse()
            .map((index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  currentIndex === index
                    ? "bg-yellow-400"
                    : "bg-white bg-opacity-50"
                } hover:bg-opacity-75 transition-colors duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;