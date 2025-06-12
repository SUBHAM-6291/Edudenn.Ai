"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { GoArrowDownRight } from "react-icons/go";
import { gsap } from "gsap";

const Aboutus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const isAnimating = useRef(false);
  const imageRef = useRef(null);
  const welcomeRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
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
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

    tl.to(
      imageRef.current,
      {
        x: direction === 1 ? "-100%" : "100%",
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
      },
      0
    );

    tl.call(
      () => {
        setCurrentIndex(newIndex);
        gsap.set(imageRef.current, {
          x: direction === 1 ? "100%" : "-100%",
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
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
      },
      0.8
    );

    const fixedDelay = 0.8 + 1.0;
    tl.to(welcomeRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }, fixedDelay);
    tl.to(line1Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }, fixedDelay + 0.3);
    tl.to(line2Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power3.inOut" }, fixedDelay + 0.6);
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
      index > currentIndex || (index === 0 && currentIndex === images.length - 1)
        ? 1
        : -1;
    animateImage(index, direction);
  };

  return (
    <div className="bg-black flex justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="w-full max-w-7xl h-[350px] sm:h-[400px] md:h-[450px] lg:h-[520px] rounded-2xl relative border-t-2 overflow-hidden">
        <Image
          ref={imageRef}
          src={images[currentIndex]}
          alt={`About Us Slide ${currentIndex + 1} - Team or Mission Visual`}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center", willChange: "transform, opacity" }}
          width={1200}
          height={520}
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-5" />
        <div className="absolute top-0 left-0 flex flex-col justify-center items-start text-left p-4 sm:p-6 w-full gap-2 sm:gap-3 md:gap-4 z-8">
          <h2
            ref={welcomeRef}
            className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-yellow-400 border-2 border-yellow-400 border-opacity-50 py-1 px-2 sm:px-3 rounded-full"
          >
            <IoHomeOutline className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
            Welcome to EduDen
          </h2>
          <div className="flex flex-col items-start gap-1 sm:gap-2 md:gap-3">
            <h1
              ref={line1Ref}
              className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            >
              Where Learning Meets
            </h1>
            <h1
              ref={line2Ref}
              className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            >
              Imagination & Innovation
            </h1>
          </div>
          <h6
            ref={oneStopRef}
            className="text-xs sm:text-xs md:text-sm lg:text-lg text-white max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] leading-relaxed"
          >
            We're your one-stop destination for unlocking your potential and
            conquering the digital realm with confidence.
          </h6>
          <button
            ref={buttonRef}
            className="flex items-center bg-yellow-400 text-black font-semibold py-2 px-4 sm:py-2 sm:px-5 md:py-2.5 md:px-6 rounded-full hover:bg-yellow-500 transition-colors duration-300 text-xs sm:text-sm md:text-base"
          >
            Discover More
            <GoArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
          </button>
        </div>

        <div
          ref={arrowRef}
          className="absolute bottom-4 sm:bottom-6 left-0 flex justify-between items-center w-full px-6 sm:px-8 z-20"
        >
          <button
            onClick={handlePrev}
            className="text-white p-3 sm:p-4 focus:outline-none hover:bg-yellow-400/20 rounded-full transition-colors duration-300"
            aria-label="Previous Image"
          >
            <IoIosArrowRoundBack className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={handleNext}
            className="text-white p-3 sm:p-4 focus:outline-none hover:bg-yellow-400/20 rounded-full transition-colors duration-300"
            aria-label="Next Image"
          >
            <IoIosArrowRoundForward className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        <div
          ref={socialRef}
          className="hidden sm:flex absolute top-8 sm:top-10 md:top-12 lg:top-14 2xl:top-14 right-[10%] sm:right-[8%] md:right-[6%] lg:right-[5%] 2xl:right-[5%] flex-col justify-start items-center bg-yellow-400 rounded-full p-2 sm:p-3 md:p-3 lg:p-3 2xl:p-2.5 gap-2 sm:gap-3 md:gap-4 lg:gap-4 2xl:gap-3 w-10 sm:w-11 md:w-12 lg:w-14 2xl:w-14 h-auto min-h-[160px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[280px] 2xl:min-h-[260px] border border-yellow-400 z-10"
          aria-label="Follow Us Social Links"
        >
          <div
            className={`
              flex items-center justify-center w-full
              h-6 sm:h-8 md:h-10 lg:h-12 2xl:h-10
              ${isSmallScreen ? "bg-transparent" : "bg-yellow-400"}
            `}
          >
            <span
              className={`
                text-black font-semibold
                text-[8px] sm:text-[10px] md:text-xs lg:text-sm 2xl:text-sm
                transform rotate-90 origin-center whitespace-nowrap
              `}
            >
              Follow now
            </span>
          </div>
          <img
            src="/arrow.png"
            alt="Down Arrow"
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 2xl:w-6 2xl:h-6 rotate-180"
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
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 2xl:w-6 2xl:h-6 hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://www.instagram.com/at_eduden/"
            target="_blank"
            rel="noopener"
            aria-label="Follow EduDen on Instagram."
          >
            <img
              src="/follownow_icons/instagram.png"
              alt="Instagram"
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 2xl:w-6 2xl:h-6 hover:opacity-80 transition-opacity"
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
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 2xl:w-6 2xl:h-6 hover:opacity-80 transition-opacity"
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
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 2xl:w-6 2xl:h-6 hover:opacity-80 transition-opacity"
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