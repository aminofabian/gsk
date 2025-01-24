"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaChartLine, FaMicroscope, FaUserMd, FaHospital, FaBookMedical } from "react-icons/fa";
import { GiStomach, GiMedicalDrip } from "react-icons/gi";
import Image from "next/image";

const Donation = () => {
  const images = [
    "/meeting/75B_6056.jpg",
    "/meeting/75B_6035.jpg",
    "/meeting/75B_6038.jpg",
    "/meeting/75B_6043.jpg",
    "/meeting/75B_6092.jpg"
  ];

  return (
    <section className="relative bg-[#003366] py-20 overflow-hidden">
      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white text-center mb-4">
          Make A Donation
        </h2>
        <p className="text-lg sm:text-xl font-serif text-white/80 text-center max-w-3xl mx-auto">
          Support GSK&apos;s mission to advance digestive healthcare in Kenya through research, education, and community outreach.
        </p>
      </div>

      {/* Support Banner */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              Support Our Global Mission
            </h3>
            <p className="text-lg font-serif text-white/90 max-w-2xl mx-auto">
              Your contribution helps us continue our work in advancing gastroenterology care and research in Kenya.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="/donate"
              className="inline-flex items-center px-8 py-3 bg-white text-[#003366] rounded-xl font-serif font-semibold hover:bg-blue-50 transition-colors"
            >
              Make a Donation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/impact"
              className="inline-flex items-center px-8 py-3 bg-[#003366] text-white border border-white/20 rounded-xl font-serif font-semibold hover:bg-[#004488] transition-colors"
            >
              View Our Impact
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Gastroenterology-themed Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 35c5.5 0 10-4.5 10-10s-4.5-10-10-10S5 19.5 5 25s4.5 10 10 10zm30 0c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zM30 50c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z' fill='%23003366' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px'
      }} />

      {/* Floating Medical Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#003366]"
              style={{
                left: `${(i % 4) * 25}%`,
                top: `${Math.floor(i / 4) * 30}%`,
                fontSize: '24px'
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {i % 3 === 0 ? "🔬" : i % 3 === 1 ? "⚕️" : "💊"}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 text-[#003366] px-6 py-3 rounded-full mb-4 shadow-sm">
            <GiStomach className="text-xl animate-pulse" />
            <span className="text-base font-semibold">Advancing Digestive Healthcare</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-slate-200">
            Support Gastroenterology
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto text-slate-400">
            Help us revolutionize digestive health care and research in Kenya
          </p>
        </motion.div>

        {/* Creative Image Gallery */}
        <div className="relative w-full mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-[600px] md:h-[500px]">
            {/* Main Large Image */}
            <div className="col-span-1 md:col-span-6 h-full">
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={images[0]}
                  alt="Main GSK event"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                    <h3 className="text-white font-serif text-lg font-bold">Annual Conference</h3>
                    <p className="text-white/90 text-sm">Bringing together healthcare professionals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Column */}
            <div className="col-span-1 md:col-span-6 grid grid-cols-2 gap-4 md:gap-6 h-full">
              {/* Top Row */}
              <div className="col-span-2 h-[250px] md:h-[240px]">
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src={images[1]}
                    alt="Research initiatives"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-3">
                      <h3 className="text-white font-serif text-base font-bold">Research</h3>
                      <p className="text-white/90 text-xs">Advancing medical knowledge</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="col-span-1 h-[200px] md:h-[220px]">
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src={images[2]}
                    alt="Training programs"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-3">
                      <h3 className="text-white font-serif text-base font-bold">Training</h3>
                      <p className="text-white/90 text-xs">Building expertise</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 h-[200px] md:h-[220px]">
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src={images[3]}
                    alt="Community outreach"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-3">
                      <h3 className="text-white font-serif text-base font-bold">Community</h3>
                      <p className="text-white/90 text-xs">Making an impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialized Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { 
              number: "500+", 
              label: "Gastroenterologists", 
              icon: <FaUserMd className="text-[#003366]" />,
              description: "Specialized Practitioners"
            },
            { 
              number: "50+", 
              label: "Endoscopy Centers", 
              icon: <FaHospital className="text-[#003366]" />,
              description: "Advanced Facilities"
            },
            { 
              number: "1000+", 
              label: "Research Papers", 
              icon: <FaBookMedical className="text-[#003366]" />,
              description: "Published Studies"
            },
            { 
              number: "20+", 
              label: "Clinical Trials", 
              icon: <FaMicroscope className="text-[#003366]" />,
              description: "Ongoing Research"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl transform rotate-1" />
              <div className="relative bg-white p-6 rounded-2xl shadow-lg transform -rotate-1 transition-all duration-300 group-hover:rotate-0 group-hover:-translate-y-1 border border-blue-100">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-[#003366] mb-1">{stat.number}</div>
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Banner */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#003366] to-[#004488] rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Specialized Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zm0 20c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z' fill='%23FFFFFF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }} />
            </div>
            
            <div className="max-w-4xl mx-auto text-center relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Digestive Healthcare
              </h3>
              <p className="text-blue-100/90 text-lg mb-8 max-w-2xl mx-auto">
                Your support drives innovation in gastroenterology research, enhances patient care, and improves digestive health outcomes across Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#003366] px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors shadow-lg"
                >
                  <FaHandHoldingHeart className="text-xl" />
                  Support Research
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#004488] border border-white/20 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#003366] transition-colors text-white shadow-lg"
                >
                  <FaChartLine className="text-xl" />
                  View Research Impact
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donation; 