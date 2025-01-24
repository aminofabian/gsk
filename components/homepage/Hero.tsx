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
      {/* Banner Section */}
      <div className="relative group h-[60vh] overflow-hidden bg-gradient-to-b from-[#002347] to-[#003366]">
        <div className="absolute inset-0 w-full h-full">
          <SwipeCarousel />
        </div>
      </div>

      {/* CTA Section - Now separate from banner */}
      <div className="bg-gradient-to-r from-[#003366] to-[#002347]">
        <div className="relative">
          {/* Decorative top border */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {/* Main content */}
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Text Content */}
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-0.5 w-8 bg-[#FF6B35]"></div>
                    <span className="text-[#FF6B35] font-medium tracking-wide text-sm">MEMBERSHIP</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white font-bold leading-tight">
                    Join Kenya&apos;s Premier Gastroenterology Network
                  </h2>
                  <p className="mt-3 text-white/80 text-base md:text-lg font-light">
                    Access exclusive benefits including CME credits, research collaborations, and specialized training opportunities.
                  </p>
                </div>
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 min-w-[300px]">
                  <a 
                    href="/membership"
                    className="group relative inline-flex justify-center items-center px-8 py-3.5 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#FF6B35]/90 transition-all duration-300 text-base shadow-lg overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Become a Member</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#ff8655] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                  <a 
                    href="/about"
                    className="group inline-flex justify-center items-center px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300 text-base border border-white/10 backdrop-blur-sm"
                  >
                    <span>View Benefits</span>
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gradient-to-b from-[#003366] to-[#002347] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Member Benefits */}
            <div className="group relative p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#ff8655] p-4 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-[#FF6B35] transition-colors">Member Benefits</h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">Access CME credits, research grants, and exclusive training opportunities.</p>
                </div>
              </div>
            </div>

            {/* Professional Network */}
            <div className="group relative p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#ff8655] p-4 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-[#FF6B35] transition-colors">Professional Network</h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">Connect with leading gastroenterology experts across Kenya.</p>
                </div>
              </div>
            </div>

            {/* Research & Innovation */}
            <div className="group relative p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#ff8655] p-4 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-[#FF6B35] transition-colors">Research & Innovation</h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">Participate in cutting-edge research and clinical trials.</p>
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

      {/* Dots moved up higher */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 z-10">
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