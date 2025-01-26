"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative h-[200px] bg-[#003366] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-[#40e0d0]/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#40e0d0]/10 rounded-full blur-3xl"
        />
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center px-8">
          {/* Left Content */}
          <div className="text-white space-y-3 max-w-[300px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-1"
            >
              <p className="text-sm font-merriweather text-[#40e0d0] tracking-wider">JOIN OUR</p>
              <h2 className="text-2xl font-merriweather font-bold tracking-wider">NEWSLETTER</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-white/80 font-merriweather leading-relaxed"
            >
              Unlock a World of Knowledge and Stay Updated with Our Exclusive Content
            </motion.p>
          </div>

          {/* Right Content - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute right-8 top-1/2 -translate-y-1/2"
          >
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#40e0d0]/50 w-[300px] font-merriweather transition-all duration-300 hover:bg-white/[0.15]"
              />
              <button
                type="submit"
                className="h-11 px-6 rounded-lg bg-[#40e0d0] text-white font-merriweather font-medium hover:bg-[#40e0d0]/90 transition-all duration-300 whitespace-nowrap group flex items-center gap-2 hover:gap-3 hover:px-7"
              >
                Subscribe
                <svg 
                  className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </motion.div>

          {/* Social Icons */}
          <div className="absolute bottom-4 right-8 flex gap-4">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                delay: 0.3
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
                delay: 0.4
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                ),
                delay: 0.5
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: item.delay }}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group cursor-pointer hover:scale-110">
                  <svg 
                    className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Curved Shape */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-0 w-[45%] h-full bg-gradient-to-r from-white/10 to-white/5"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)'
          }}
        />
      </motion.div>
    </div>
  );
};

export default Newsletter; 