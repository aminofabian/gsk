"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";

// Enhanced global styles with unique effects
const styles = {
  radialGradient: {
    background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 26, 53, 0.4) 100%)'
  },
  meshGradient: {
    background: 'linear-gradient(45deg, rgba(0, 26, 53, 0.4) 0%, transparent 100%), radial-gradient(circle at top right, rgba(155, 155, 155, 0.15), transparent 70%)'
  },
  glowEffect: {
    filter: 'drop-shadow(0 0 20px rgba(155, 155, 155, 0.15))'
  },
  shimmerGradient: {
    background: 'linear-gradient(90deg, transparent, rgba(155, 155, 155, 0.1), transparent)',
    backgroundSize: '200% 100%'
  }
} as const;

// Unique statistics with animations
const impactStats = [
  { number: '500+', label: 'Specialists', icon: '👨‍⚕️' },
  { number: '30+', label: 'CME Events', icon: '🎓' },
  { number: '15+', label: 'Research Papers', icon: '📚' }
];

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
      <div className="relative min-h-screen bg-[#001a35] overflow-hidden">
      {/* Background effects */}
        <div className="absolute inset-0" style={styles.meshGradient} />
      <div className="absolute inset-0 bg-[url('/effects/noise.png')] opacity-[0.02] mix-blend-overlay" />
      
      {/* Main content */}
      <div className="relative w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto pt-20 sm:pt-24 flex flex-col h-full">
          {/* Grid background */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
          
          {/* Main text section */}
          <div className="relative z-20 flex-1">
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mb-6"
              >
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 24 }}
                  transition={{ delay: 0.5 }}
                  className="h-[2px] bg-white/30"
                />
                <span className="text-white/70 text-sm tracking-wider">PROFESSIONAL NETWORK</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                <span className="block">ADVANCE YOUR</span>
                <span className="block text-white/90">GASTROENTEROLOGY</span>
                <span className="block">PRACTICE</span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#0a1547] p-6 rounded-sm max-w-xl mt-12"
              >
                <div className="flex items-center gap-4 text-white/90">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-lg font-medium mb-2">Join Kenya's Premier Gastroenterology Network</p>
                    <p className="text-base text-white/80">Access exclusive CME programs, research collaborations, and clinical resources. Connect with leading specialists across East Africa.</p>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <motion.a 
                    href="/membership"
                    className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-8 py-3 rounded-sm transition-all font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Join as Specialist
                    <span className="text-lg">→</span>
                  </motion.a>
                  <motion.a
                    href="/membership/benefits"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-white/60 hover:text-white/90 transition-colors"
                  >
                    View Member Benefits
                  </motion.a>
                </div>
              </motion.div>

              {/* Professional highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex gap-8"
              >
                <div className="flex items-center gap-3 text-white/70">
                  <span className="text-xl">🔬</span>
                  <span className="text-sm">Clinical Excellence</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <span className="text-xl">🎯</span>
                  <span className="text-sm">Specialized Training</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <span className="text-xl">🤝</span>
                  <span className="text-sm">Peer Collaboration</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats and image section */}
          <div className="relative mt-12 lg:mt-0 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-[45%]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-12 top-0 h-full w-24 bg-gradient-to-r from-[#001a35] via-[#001a35]/80 to-transparent z-20" />
              <SwipeCarousel />
              
              {/* Stats overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 right-0 bg-white/10 backdrop-blur-sm p-4 rounded-sm"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-3xl text-white font-bold">15+</span>
                    <span className="text-white/70 text-sm ml-1">Years</span>
                  </div>
                  <div className="text-white/70 text-sm border-l border-white/20 pl-4">
                    Leading<br />Gastroenterology<br />in East Africa
                  </div>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-white ml-2"
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 right-8 text-white/30"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm">Scroll to</span>
              <span className="text-sm">explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center"
              >
                ↓
              </motion.div>
            </div>
          </motion.div>
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
          className="relative w-full shrink-0 flex items-center justify-center"
        >
          <div className="relative w-full mx-auto">
            <div className="relative overflow-visible">
              <motion.img
                src={imgSrc}
                alt={`Slide ${idx + 1}`}
                className="w-full h-auto object-contain"
                style={{ 
                  maxHeight: 'calc(32vh - 20px)',
                  width: 'auto',
                  margin: '0 auto'
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Hero; 