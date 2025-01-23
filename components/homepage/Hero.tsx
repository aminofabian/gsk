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
    <div className="relative group h-[100dvh] max-h-[800px] min-h-[450px] overflow-hidden bg-[#003366]">
      {/* Banner Container - Full screen on desktop */}
      <div className="absolute inset-0 w-full h-full">
        <SwipeCarousel />
      </div>

      {/* Content Overlay - Mobile optimized */}
      <div className="absolute inset-x-0 bottom-0 sm:inset-0 flex sm:items-center">
        <div className="relative w-full max-w-7xl mx-auto">
          <div className="relative w-full sm:max-w-[550px] lg:max-w-[600px] sm:ml-4 lg:ml-8">
            <motion.div 
              initial={{ opacity: 0, y: 20, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5 }}
              className="sm:space-y-4 bg-gradient-to-t from-[#003366] via-[#003366]/95 to-[#003366]/60 sm:bg-[#003366]/80 sm:backdrop-blur-md sm:p-6 lg:p-8 sm:rounded-xl sm:border sm:border-white/20 sm:shadow-2xl"
            >
              {/* Mobile-optimized content */}
              <div className="flex flex-col px-4 pb-6 pt-20 sm:p-0">
                {/* Title with gradient overlay for mobile */}
                <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight text-center sm:text-left mb-6 sm:mb-0">
                  Advancing Digestive Health Care in Kenya
                </h1>

                {/* Buttons - Full width on mobile */}
                <div className="flex flex-col sm:flex-row gap-3 sm:items-center mt-4 sm:mt-4">
                  <a 
                    href="/membership"
                    className="w-full sm:w-auto text-center px-6 py-3 sm:py-2 bg-white text-[#003366] rounded-lg sm:rounded-md font-semibold hover:bg-white/90 transition-all duration-300 text-sm shadow-lg sm:shadow-none"
                  >
                    Become a Member
                  </a>
                  <a 
                    href="/about"
                    className="w-full sm:w-auto text-center px-6 py-3 sm:py-2 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-lg sm:rounded-md font-semibold hover:bg-white/20 transition-all duration-300 text-sm"
                  >
                    Learn More
                  </a>
                </div>

                {/* Stats - Enhanced for mobile */}
                <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 mt-6 sm:mt-4 border-t border-white/10 sm:border-white/20">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-3 rounded-xl border border-white/10 hover:border-white/20 transition-colors text-center sm:text-left">
                      <div className="text-2xl sm:text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">500+</div>
                      <div className="text-[11px] sm:text-xs text-white/80 font-medium mt-0.5">Active Members</div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-3 rounded-xl border border-white/10 hover:border-white/20 transition-colors text-center sm:text-left">
                      <div className="text-2xl sm:text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">47</div>
                      <div className="text-[11px] sm:text-xs text-white/80 font-medium mt-0.5">Counties Covered</div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-3 rounded-xl border border-white/10 hover:border-white/20 transition-colors text-center sm:text-left">
                      <div className="text-2xl sm:text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">25+</div>
                      <div className="text-[11px] sm:text-xs text-white/80 font-medium mt-0.5">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
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
    <div className="relative overflow-hidden h-full w-full">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={{
          duration: 0.7,
          ease: TRANSITION_EASE,
          type: "tween"
        }}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing h-full w-full"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      {/* Enhanced Dots - Mobile optimized */}
      <div className="absolute bottom-[180px] sm:bottom-8 left-0 right-0 flex justify-center gap-1.5 z-10">
        {imgs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`transition-all duration-500 ease-out rounded-full 
              ${idx === imgIndex 
                ? "w-2.5 h-2.5 bg-white shadow-lg" 
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
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
          className="relative h-full w-screen shrink-0 flex items-start sm:items-center justify-center"
        >
          <motion.img
            src={imgSrc}
            alt={`Slide ${idx + 1}`}
            animate={{ 
              scale: imgIndex === idx ? 1 : 0.85,
              opacity: imgIndex === idx ? 1 : 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: TRANSITION_EASE,
              opacity: { duration: 0.5 }
            }}
            className="w-full h-[60%] sm:h-full object-contain sm:object-cover"
            style={{ 
              willChange: 'transform'
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default Hero; 