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
        <div className="absolute inset-x-0 bottom-0 h-[120px] bg-[#003366]">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/membership"
                className="inline-flex justify-center items-center px-8 py-3 bg-[#083c74] text-white rounded-lg font-semibold hover:bg-[#083c74]/90 transition-all duration-300 text-lg shadow-lg"
              >
                Become a Member
              </a>
              <a 
                href="/about"
                className="inline-flex justify-center items-center px-8 py-3 bg-white text-[#003366] rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-[#003366] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-[#083c74] p-4 rounded-full transition-all duration-300 group-hover:bg-[#083c74]/90">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">Patients</h3>
                <p className="text-white/80">Get patient & visitors info and health tips here.</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-[#083c74] p-4 rounded-full transition-all duration-300 group-hover:bg-[#083c74]/90">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">Healthcare Professionals</h3>
                <p className="text-white/80">Find our resources including news, training, careers and more for you.</p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-[#083c74] p-4 rounded-full transition-all duration-300 group-hover:bg-[#083c74]/90">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-2">Community Partners</h3>
                <p className="text-white/80">Work with us to bring care into the community.</p>
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