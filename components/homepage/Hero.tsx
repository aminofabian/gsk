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

      {/* Wave Separator */}
      <div className="relative w-full">
        <svg className="absolute -top-1 left-0 right-0 w-full transform rotate-180" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 17.75C960 17.75 1056 35.5 1152 44.375C1248 53.25 1344 53.25 1392 53.25H1440V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="#003366"/>
        </svg>
      </div>

      {/* CTA Section - Now separate from banner */}
      <div className="relative bg-[#003366]">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#003366] via-[#003366] to-[#002347]"></div>
        
        {/* Content */}
        <div className="relative">
          {/* Decorative top border */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {/* Main content */}
          <div className="py-4">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Text Content */}
                <div className="max-w-2xl relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-0.5 w-12 bg-[#396390]"></div>
                    <span className="text-[#396390] font-merriweather font-medium tracking-wider text-sm uppercase">Membership</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-merriweather font-bold leading-tight drop-shadow-lg">
                    Join Kenya&apos;s Premier
                    <span className="block mt-1 text-[#396390]">Gastroenterology Association</span>
                  </h1>
                  <p className="mt-4 text-white/90 text-xl md:text-2xl font-merriweather font-light leading-relaxed">
                    Access exclusive benefits including CME credits, research collaborations, and specialized training opportunities.
                  </p>
                </div>
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 min-w-[300px] relative z-10">
                  <a 
                    href="/membership"
                    className="group relative inline-flex justify-center items-center px-8 py-4 bg-[#396390] text-white rounded-lg font-merriweather font-semibold transition-all duration-300 text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Become a Member</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#396390] to-[#ff8655] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                  <a 
                    href="/about"
                    className="group relative inline-flex justify-center items-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg font-merriweather font-semibold transition-all duration-300 text-base border border-white/20 hover:border-white/40 backdrop-blur-sm hover:backdrop-blur-md shadow-lg hover:-translate-y-0.5"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>View Benefits</span>
                      <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="relative w-full">
        <svg className="absolute -bottom-1 left-0 right-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0L48 8.875C96 17.75 192 35.5 288 44.375C384 53.25 480 53.25 576 44.375C672 35.5 768 17.75 864 17.75C960 17.75 1056 35.5 1152 44.375C1248 53.25 1344 53.25 1392 53.25H1440V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="#002347"/>
        </svg>
      </div>

      {/* Info Section */}
      <div className="relative bg-[#002347]">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#003366] to-[#002347]"></div>
        
        {/* Content */}
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Member Benefits */}
              <div className="group relative p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#083c74] to-[#0a4d91] p-4 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-merriweather font-bold mb-2 group-hover:text-[#396390] transition-colors text-white">Member Benefits</h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors font-merriweather">Access CME credits, research grants, and exclusive training opportunities.</p>
                  </div>
                </div>
              </div>

              {/* Professional Network */}
              <div className="group relative p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#083c74] to-[#0a4d91] p-4 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-merriweather font-bold mb-2 group-hover:text-[#396390] transition-colors text-white">Professional Network</h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors font-merriweather">Connect with leading gastroenterology experts across Kenya.</p>
                  </div>
                </div>
              </div>

              {/* Research & Innovation */}
              <div className="group relative p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#083c74] to-[#0a4d91] p-4 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24 text-white" fill="currentColor">
                      <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-merriweather font-bold mb-2 group-hover:text-blue-100 transition-colors text-white">Research & Innovation</h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors font-merriweather">Participate in cutting-edge research and clinical trials.</p>
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