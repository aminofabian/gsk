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
      <div className="relative min-h-screen bg-[#001a35]">
        {/* Background image */}
        <div 
          className="absolute inset-0 transition-transform duration-1000"
          style={{
            backgroundImage: 'url("/banner/stethoscope-7664834_1920.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.6)'
          }}
        />

        {/* Simple overlay */}
        <div className="absolute inset-0 bg-[#001a35]/40 backdrop-blur-[2px]" />

        {/* Main content area */}
        <div className="relative w-full min-h-screen mx-auto flex flex-col">
          {/* Banner content */}
          <div className="flex-1 flex items-center justify-center pt-2 sm:pt-4">
            <div className="w-full max-w-[1800px] px-2 sm:px-4">
              <SwipeCarousel />
            </div>
          </div>

          {/* Premium CTA Section */}
          <div className="relative z-20 px-3 sm:px-6 lg:px-8 -mt-12 sm:-mt-24 pb-8 sm:pb-16">
            <div className="max-w-6xl mx-auto">
              <div className="bg-black/30 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-10 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#40e0d0]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#40e0d0]/5 rounded-full blur-3xl"></div>
                
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 relative">
                  {/* Left side content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 mb-4 text-[#40e0d0]/90 text-sm tracking-widest uppercase">
                      <span className="h-px w-5 bg-[#40e0d0]/50"></span>
                      Welcome to GSK
                      <span className="h-px w-5 bg-[#40e0d0]/50"></span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extralight text-white mb-3 sm:mb-5 tracking-wide">
                      Join the{' '}
                      <span className="relative inline-block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#40e0d0] to-[#40e0d0]/90">
                        Gastroenterology Society
                        <span className="block mt-1">of Kenya</span>
                        <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-[#40e0d0]/0 via-[#40e0d0]/50 to-[#40e0d0]/0"></div>
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
                      href="/membership/join"
                      className="group relative w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium bg-[#40e0d0] text-[#001a35] rounded-xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 text-center tracking-wide"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Become a Member
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#40e0d0] to-[#40e0d0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <a 
                      href="/membership/benefits"
                      className="group relative w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium text-white border-2 border-white/20 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-center tracking-wide"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Learn More
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
        className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors duration-300"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={() => imgIndex < imgs.length - 1 && setImgIndex(prev => prev + 1)}
        className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white/50 hover:text-white transition-colors duration-300"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
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
            ease: [0.32, 0.72, 0, 1],
          }}
          className="flex w-full cursor-grab active:cursor-grabbing"
        >
          <Images imgIndex={imgIndex} />
        </motion.div>
      </div>

      {/* Minimalist dots navigation */}
      <div className="absolute -bottom-4 sm:-bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {imgs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full transition-all duration-300 
              ${idx === imgIndex 
                ? "bg-white" 
                : "bg-white/30 hover:bg-white/50"
              }`}
          />
        ))}
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
          <div className="relative w-[95%] sm:w-[90%] md:w-[85%] mx-auto">
            <img
              src={imgSrc}
              alt={`Slide ${idx + 1}`}
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
              style={{
                maxHeight: 'calc(70vh - 80px)',
                width: 'auto',
                margin: '0 auto'
              }}
            />
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Hero; 