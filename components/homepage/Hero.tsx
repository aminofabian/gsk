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
      <div className="relative group h-[60vh] overflow-hidden bg-[#003366]">
        <div className="absolute inset-0 w-full h-full">
          <SwipeCarousel />
        </div>
        
        {/* CTA Overlay - Moved lower */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="bg-[#003366] py-6">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Text Content */}
                <div className="max-w-2xl">
                  <h2 className="text-2xl md:text-3xl font-serif text-white font-bold leading-tight">
                    Join Kenya's Premier Gastroenterology Network
                  </h2>
                  <p className="mt-2 text-white/90 text-base md:text-lg">
                    Access exclusive benefits including CME credits, research collaborations, and specialized training opportunities.
                  </p>
                </div>
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 min-w-[300px]">
                  <a 
                    href="/membership"
                    className="inline-flex justify-center items-center px-6 py-3 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#FF6B35]/90 transition-all duration-300 text-base shadow-lg group"
                  >
                    <span>Become a Member</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <a 
                    href="/about"
                    className="inline-flex justify-center items-center px-6 py-3 bg-white text-[#003366] rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 text-base border border-white/10"
                  >
                    View Benefits
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-[#003366] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Member Benefits */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-[#FF6B35] p-4 rounded-full transition-all duration-300 group-hover:bg-[#FF6B35]/90">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">Member Benefits</h3>
                <p className="text-white/80">Access CME credits, research grants, and exclusive training opportunities.</p>
              </div>
            </div>

            {/* Professional Network */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-[#FF6B35] p-4 rounded-full transition-all duration-300 group-hover:bg-[#FF6B35]/90">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">Professional Network</h3>
                <p className="text-white/80">Connect with leading gastroenterology experts across Kenya.</p>
              </div>
            </div>

            {/* Research & Innovation */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-[#FF6B35] p-4 rounded-full transition-all duration-300 group-hover:bg-[#FF6B35]/90">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">Research & Innovation</h3>
                <p className="text-white/80">Participate in cutting-edge research and clinical trials.</p>
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

      {/* Dots moved higher from the CTA */}
      <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-1.5 z-10">
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