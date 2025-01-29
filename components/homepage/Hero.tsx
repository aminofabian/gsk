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
            filter: 'brightness(0.5)'
          }}
        />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a35]/90 via-[#001a35]/70 to-[#001a35]/30 opacity-95" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top right decorative corner */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Bottom left decorative corner */}
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.03]"></div>
        </div>

        {/* Main content area */}
        <div className="relative w-full min-h-screen mx-auto flex flex-col">
          {/* Top accent bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Banner content */}
          <div className="flex-1 flex items-center justify-center pt-2 sm:pt-4">
            <div className="w-full max-w-[1800px] px-2 sm:px-4">
              <SwipeCarousel />
            </div>
          </div>

          {/* Premium CTA Section */}
          <div className="relative z-20 px-3 sm:px-6 lg:px-8 -mt-12 sm:-mt-24 pb-8 sm:pb-16">
            <div className="max-w-6xl mx-auto">
              {/* Unique curved shape container */}
              <div className="relative">
                {/* Background shape with curves */}
                <div className="absolute inset-0 -m-4">
                  <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                    <path 
                      d="M 0 50 C 100 0, 300 0, 400 50 L 400 250 C 300 300, 100 300, 0 250 Z" 
                      className="fill-black/40 backdrop-blur-xl"
                    />
                  </svg>
                </div>

                {/* Main content container with unique border */}
                <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl p-4 sm:p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
                  {/* Decorative corner shapes */}
                  <div className="absolute top-0 left-0">
                    <svg className="w-32 h-32" viewBox="0 0 100 100">
                      <path 
                        d="M 0 0 L 100 0 Q 70 30, 40 40 Q 20 45, 0 100 Z" 
                        className="fill-white/5"
                      />
                      <circle cx="20" cy="20" r="2" className="fill-white/30" />
                      <circle cx="30" cy="15" r="1" className="fill-white/20" />
                      <circle cx="15" cy="30" r="1.5" className="fill-white/25" />
                    </svg>
                  </div>
                  <div className="absolute top-0 right-0 transform rotate-90">
                    <svg className="w-32 h-32" viewBox="0 0 100 100">
                      <path 
                        d="M 0 0 L 100 0 Q 70 30, 40 40 Q 20 45, 0 100 Z" 
                        className="fill-white/5"
                      />
                      <circle cx="20" cy="20" r="2" className="fill-white/30" />
                      <circle cx="30" cy="15" r="1" className="fill-white/20" />
                      <circle cx="15" cy="30" r="1.5" className="fill-white/25" />
                    </svg>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32">
                      <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                        <defs>
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.1 }} />
                            <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                          </linearGradient>
                        </defs>
                        <path 
                          d="M 50 0 Q 75 25, 100 50 Q 75 75, 50 100 Q 25 75, 0 50 Q 25 25, 50 0" 
                          fill="url(#grad1)"
                          className="animate-spin-slow"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40">
                      <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                        <path 
                          d="M 0 50 A 50 50 0 1 1 100 50 A 50 50 0 1 1 0 50" 
                          className="fill-none stroke-white/20 stroke-2"
                        />
                        <path 
                          d="M 25 50 A 25 25 0 1 1 75 50 A 25 25 0 1 1 25 50" 
                          className="fill-none stroke-white/10 stroke-1"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Content with enhanced styling */}
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative">
                    <div className="flex-1 text-center lg:text-left">
                      {/* Welcome badge with unique design */}
                      <div className="inline-flex items-center gap-3 mb-6">
                        <div className="relative">
                          <span className="relative px-6 py-2 text-white/80 text-sm tracking-widest uppercase bg-gradient-to-r from-[#0f5a5e]/20 to-[#0f5a5e]/10 rounded-full backdrop-blur-sm border border-white/10">
                            <span className="relative z-10">Welcome to GSK</span>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0f5a5e]/20 via-transparent to-[#0f5a5e]/20 animate-shimmer"></div>
                          </span>
                        </div>
                      </div>

                      {/* Enhanced heading with creative underline */}
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extralight text-white mb-6 sm:mb-8 tracking-wide relative">
                        <span className="font-light block mb-2">Join the</span>
                        <span className="relative inline-block">
                          <span className="relative z-10">
                            <span className="text-white font-semibold bg-gradient-to-r from-white to-white/90 bg-clip-text">
                              Gastroenterology Society
                            </span>
                            <span className="block mt-2 text-[#0f5a5e] font-semibold">
                              of Kenya
                            </span>
                          </span>
                          {/* Creative underline */}
                          <svg className="absolute -bottom-4 left-0 w-full h-2" viewBox="0 0 200 4">
                            <path 
                              d="M 0 2 Q 50 4, 100 2 Q 150 0, 200 2" 
                              className="stroke-[#0f5a5e] stroke-2 fill-none"
                            />
                          </svg>
                        </span>
                      </h2>

                      {/* Enhanced description */}
                      <p className="text-white/80 text-base sm:text-lg xl:text-xl font-light tracking-wider leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                        Connect with leading specialists and advance your career
                        <span className="hidden sm:inline"> in the field of gastroenterology</span>
                      </p>
                    </div>

                    {/* Enhanced CTA buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
                      <a 
                        href="/membership"
                        className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 text-base sm:text-lg font-medium overflow-hidden text-center tracking-wide"
                      >
                        {/* Button background with unique shape */}
                        <div className="absolute inset-0">
                          <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                            <path 
                              d="M 0 30 Q 40 0, 100 30 Q 160 60, 200 30 L 200 60 L 0 60 Z" 
                              className="fill-[#0f5a5e] transition-all duration-300 group-hover:translate-y-1"
                            />
                          </svg>
                        </div>
                        <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                          Become a Member
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </a>

                      <a 
                        href="/membership/benefits"
                        className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 text-base sm:text-lg font-medium overflow-hidden text-center tracking-wide"
                      >
                        {/* Button border with animated pattern */}
                        <div className="absolute inset-0 rounded-xl border-2 border-[#0f5a5e]/30 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                        </div>
                        <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                          Learn More
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </a>
                    </div>
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
    <div className="relative w-full overflow-hidden rounded-xl">
      {/* Navigation arrows */}
      <button 
        onClick={() => imgIndex > 0 && setImgIndex(prev => prev - 1)}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/30 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 group"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={() => imgIndex < imgs.length - 1 && setImgIndex(prev => prev + 1)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/30 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 group"
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
        <div className="flex gap-3 px-4 py-2 bg-black/20 rounded-full backdrop-blur-sm border border-white/10">
          {imgs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setImgIndex(idx)}
              className={`relative transition-all duration-300 rounded-full
                ${idx === imgIndex 
                  ? "w-6 h-1.5 bg-[#0f5a5e]" 
                  : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                }`}
            >
              {idx === imgIndex && (
                <div className="absolute -inset-1 bg-[#0f5a5e]/20 rounded-full animate-pulse"></div>
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
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-black/5 to-black/20 p-0.5">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-px bg-[#0f5a5e]/50 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-[#0f5a5e]/50 to-transparent"></div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-0 right-0 w-full h-px bg-[#0f5a5e]/50 to-transparent"></div>
                <div className="absolute top-0 right-0 h-full w-px bg-[#0f5a5e]/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16">
                <div className="absolute bottom-0 left-0 w-full h-px bg-[#0f5a5e]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 h-full w-px bg-[#0f5a5e]/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-0 right-0 w-full h-px bg-[#0f5a5e]/50 to-transparent"></div>
                <div className="absolute bottom-0 right-0 h-full w-px bg-[#0f5a5e]/50 to-transparent"></div>
              </div>

              <img
                src={imgSrc}
                alt={`Slide ${idx + 1}`}
                className="w-full h-auto object-contain rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
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