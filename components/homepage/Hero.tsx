"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "/banner/IBSDIAGNOSISCHECKLIST-WGOvisual2-VF.png",
  "/banner/SocialMediaWebBanner.png",
  "/banner/WGO-Banner-Guarnercourse.png",
  "/banner/WomeninGISubmissionForm1600600px.png"
];
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 8;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 2,
  stiffness: 150,
  damping: 30,
};

const TRANSITION_EASE = [0.32, 0.72, 0, 1];

const Hero = () => {
  return (
    <>
      {/* Main Hero Section */}
      <div className="relative min-h-screen bg-[#001a35] overflow-hidden">
        {/* Background image with parallax effect */}
        <div 
          className="absolute inset-0 transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: 'url("/banner/back.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.6)'
          }}
        />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a35]/90 via-[#001a35]/70 to-transparent opacity-95" />
        
        {/* Main content area */}
        <div className="relative w-full min-h-screen mx-auto flex flex-col">
          {/* Top accent bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#001a35]/30 to-transparent"></div>

          {/* Banner content */}
          <div className="flex-1 flex items-center justify-center pt-2 sm:pt-4">
            <div className="w-full max-w-[1800px] px-2 sm:px-4">
              <SwipeCarousel />
            </div>
          </div>

          {/* Premium CTA Section */}
          <div className="relative z-20 px-3 sm:px-6 lg:px-8 -mt-12 sm:-mt-24 pb-8 sm:pb-16">
            <div className="max-w-6xl mx-auto">
              <div className="bg-black/30 backdrop-blur-xl p-4 sm:p-8 md:p-10 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
                {/* Glass effect elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#001a35]/5 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#001a35]/5 blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-32 bg-white/5 blur-3xl rotate-45"></div>
                
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 relative">
                  {/* Left side content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 mb-4 text-white text-sm tracking-widest uppercase">
                      <span className="h-px w-5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                      Welcome to GSK
                      <span className="h-px w-5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extralight text-white mb-3 sm:mb-5 tracking-wide">
                      Join the{' '}
                      <span className="relative inline-block font-semibold text-white">
                        Gastroenterology Society
                        <span className="block mt-1">of Kenya</span>
                        <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/50 to-white/0"></div>
                      </span>
                    </h2>
                    <p className="text-white/90 text-base sm:text-lg xl:text-xl font-light tracking-wider leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      Connect with leading specialists and advance your career 
                      <span className="hidden sm:inline"> in the field of gastroenterology</span>
                    </p>
                  </div>

                  {/* Right side CTAs */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full lg:w-auto">
                    <a 
                      href="/membership"
                      className="group relative w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium bg-white text-[#001a35] overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 text-center tracking-wide"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Become a Member
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <a 
                      href="/membership/benefits"
                      className="group relative w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium text-white border-2 border-white/30 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-center tracking-wide hover:border-white/50 hover:bg-white/10"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Learn More
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-[#001a35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Navigation arrows */}
      <button 
        onClick={() => imgIndex > 0 && setImgIndex(prev => prev - 1)}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/10 transition-all duration-300 group"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={() => imgIndex < imgs.length - 1 && setImgIndex(prev => prev + 1)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/10 transition-all duration-300 group"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="relative w-full">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          animate={{ translateX: `-${imgIndex * 100}%` }}
          transition={{
            duration: 0.8,
            ease: TRANSITION_EASE,
          }}
          onDragEnd={onDragEnd}
          className="flex w-full cursor-grab active:cursor-grabbing"
        >
          <Images imgIndex={imgIndex} />
        </motion.div>
      </div>

      {/* Enhanced dots navigation */}
      <div className="absolute -bottom-4 sm:-bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        <div className="flex gap-3 px-4 py-2 bg-black/20 backdrop-blur-sm border border-white/10">
          {imgs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={`relative transition-all duration-300
                ${idx === imgIndex 
                  ? "w-6 h-1.5 bg-white" 
                  : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                }`}
            >
              {idx === imgIndex && (
                <div className="absolute -inset-1 bg-white/30 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          className="relative w-full shrink-0 flex items-center justify-center py-2 sm:py-4"
        >
          <div className="relative w-[95%] sm:w-[90%] md:w-[85%] mx-auto group">
            {/* Premium image container */}
            <div className="relative overflow-hidden bg-gradient-to-b from-black/5 to-black/20 p-0.5">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/50 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-white/50 to-transparent"></div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-white/50 to-transparent"></div>
                <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-white/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16">
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-white/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-white/50 to-transparent"></div>
                <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-white/50 to-transparent"></div>
              </div>

              <img
                src={imgSrc}
                alt={`Slide ${idx + 1}`}
                className="w-full h-auto object-contain shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                style={{ 
                  maxHeight: 'calc(70vh - 80px)',
                  width: 'auto',
                  margin: '0 auto'
                }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Hero; 