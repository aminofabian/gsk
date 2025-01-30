"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

// Enhanced global styles
const styles = {
  radialGradient: {
    background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 26, 53, 0.3) 100%)'
  },
  meshGradient: {
    background: 'linear-gradient(45deg, rgba(0, 26, 53, 0.3) 0%, transparent 100%), radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent 70%)'
  },
  glowEffect: {
    filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
  }
} as const;

const imgs = [
  "/ban/19195.jpg",
  "/ban/Business-Facebook-Cover-01.jpg",
  "/ban/SL-122519-26430-01.jpg",
  "/ban/ddff.png",
  "/ban/ffff.webp",
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
        {/* Enhanced background with dynamic effects */}
        <div 
          className="absolute inset-0 transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: 'url("/banner/back.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.5) contrast(1.1)'
          }}
        />

        {/* Creative gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a35]/95 via-[#001a35]/80 to-transparent opacity-95" />
        <div className="absolute inset-0" style={styles.meshGradient} />
        
        {/* Animated particles or light effects */}
        <div className="absolute inset-0 bg-[url('/effects/noise.png')] opacity-[0.02] mix-blend-overlay" />
        
        {/* Main content area */}
        <div className="relative w-full min-h-screen mx-auto flex flex-col">
          {/* Enhanced top accent bar */}
          <div className="absolute top-0 inset-x-0 h-1.5">
            <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="h-8 w-full bg-gradient-to-b from-white/5 to-transparent"></div>
          </div>

          {/* Banner content */}
          <div className="flex-1 flex items-center justify-center pt-2 sm:pt-4">
            <div className="w-full max-w-[1800px] px-2 sm:px-4">
              <SwipeCarousel />
            </div>
          </div>

          {/* Enhanced Premium CTA Section */}
          <div className="relative z-20 px-3 sm:px-6 lg:px-8 -mt-12 sm:-mt-24 pb-8 sm:pb-16">
            <div className="max-w-[1600px] mx-auto">
              <div className="bg-gradient-to-br from-black/40 via-black/30 to-black/20 backdrop-blur-xl p-6 sm:p-10 md:p-12 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden rounded-sm">
                {/* Enhanced glass effect elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/5 to-transparent blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-white/5 blur-3xl rotate-45"></div>
                
                {/* Creative corner decorations */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/10 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-white/10 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-white/10 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/10 rounded-br-lg"></div>
                
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 relative max-w-[1400px] mx-auto">
                  {/* Enhanced left side content */}
                  <div className="flex-1 text-center lg:text-left relative">
                    <div className="inline-flex items-center gap-4 mb-8 text-white text-sm tracking-widest uppercase relative">
                      <span className="h-px w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                      <span className="relative">
                        Welcome to GSK
                        <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                      </span>
                      <span className="h-px w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight text-white mb-8 sm:mb-10 tracking-wide max-w-4xl mx-auto lg:mx-0 relative">
                      <span className="relative inline-block">
                        Join the{' '}
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                      </span>
                      <span className="relative block mt-2 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/95 to-white/90">
                        Gastroenterology Society
                        <span className="block mt-2">of Kenya</span>
                        <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                      </span>
                    </h2>
                    <p className="text-white/90 text-lg sm:text-xl xl:text-2xl font-light tracking-wider leading-relaxed max-w-3xl mx-auto lg:mx-0">
                      Connect with leading specialists and advance your career 
                      <span className="hidden sm:inline"> in the field of gastroenterology</span>
                    </p>
                  </div>

                  {/* Enhanced right side CTAs */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-stretch gap-4 w-full lg:w-auto lg:min-w-[300px]">
                    <a 
                      href="/membership"
                      className="group relative w-full sm:w-auto px-12 py-5 text-base sm:text-lg font-medium bg-gradient-to-r from-white to-white/95 text-[#001a35] overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 text-center tracking-wide rounded-sm"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Become a Member
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[url('/effects/noise.png')] mix-blend-overlay"></div>
                    </a>
                    <a 
                      href="/membership/benefits"
                      className="group relative w-full sm:w-auto px-12 py-5 text-base sm:text-lg font-medium text-white border-2 border-white/20 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-center tracking-wide hover:border-white/40 hover:bg-white/5 rounded-sm"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Learn More
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[url('/effects/noise.png')] mix-blend-overlay"></div>
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
            {/* Premium image container with enhanced styling */}
            <div className="relative overflow-hidden bg-gradient-to-b from-black/5 to-black/20 p-0.5 rounded-sm">
              {/* Ambient glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a35]/30 to-transparent mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#001a35]/20 via-transparent to-[#001a35]/20"></div>
              
              {/* Enhanced corner accents */}
              <div className="absolute top-0 left-0 w-24 h-24">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/60 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-white/60 to-transparent"></div>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-white/60 to-transparent"></div>
                <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-white/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-24 h-24">
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-white/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-white/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24">
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-white/60 to-transparent"></div>
                <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-white/60 to-transparent"></div>
              </div>

              {/* Enhanced image with blend effects */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#001a35]/10 via-transparent to-[#001a35]/10"></div>
                <img
                  src={imgSrc}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-auto object-contain shadow-2xl transition-all duration-500 group-hover:scale-[1.01] group-hover:brightness-110"
                  style={{ 
                    maxHeight: 'calc(70vh - 80px)',
                    width: 'auto',
                    margin: '0 auto',
                    filter: 'contrast(1.05) brightness(0.95)'
                  }}
                />
                {/* Subtle vignette effect */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-80"
                  style={styles.radialGradient}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Hero; 