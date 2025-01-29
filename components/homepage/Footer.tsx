'use client';

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaChevronRight, FaDna, FaMicroscope, FaFlask } from 'react-icons/fa';
import { GiStomach, GiDna2, GiMedicines } from 'react-icons/gi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';

const DNAStrand = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${(i % 4) * 25}%`,
            top: `${Math.floor(i / 4) * 20}%`,
          }}
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          <div className="relative">
            <FaDna className="text-white/5 text-6xl transform rotate-45" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-[#003366] text-white overflow-hidden">
      {/* DNA Animation Background */}
      <DNAStrand />

      {/* Medical Icons Float */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[GiStomach, FaMicroscope, GiMedicines, FaFlask, GiDna2].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.1, 0.05],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            <Icon className="text-4xl text-[#0f5a5e]/10" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Curved Top Border */}
        <div className="absolute top-0 left-0 w-full overflow-hidden h-16">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120">
            <path 
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,90.7C672,107,768,117,864,112C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Organization Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <Logo variant="light" />
                <p className="mt-8 text-white/90 leading-relaxed">
                  The Gastroenterology Society of Kenya (GSK) is a professional organization dedicated to advancing digestive healthcare through education, research, and clinical excellence.
                </p>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 px-6 py-3 bg-[#0f5a5e]/5 rounded-xl text-white hover:bg-[#0f5a5e]/10 flex items-center gap-2 group transition-all duration-300"
                >
                  Learn more about our mission
                  <FaChevronRight className="text-sm transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-merriweather font-bold mb-8 text-white">Quick Links</h3>
                <ul className="space-y-4 text-white/90">
                  {[
                    "Who We Are",
                    "Membership",
                    "Education & Training",
                    "Meetings",
                    "Guidelines",
                    "Publications"
                  ].map((link, index) => (
                    <motion.li
                      key={link}
                      whileHover={{ x: 4 }}
                      className="transform-gpu"
                    >
                      <Link 
                        href="#" 
                        className="group relative px-4 py-2 block hover:text-[#0f5a5e] transition-colors rounded-lg hover:bg-white/5"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <FaChevronRight className="text-xs text-[#0f5a5e] group-hover:text-[#0f5a5e] transition-colors" />
                          {link}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-merriweather font-bold mb-8 text-white">Contact GSK</h3>
                <div className="space-y-6 text-white/90">
                  {[
                    { icon: FaMapMarkerAlt, title: "Visit Us", content: "KMA Centre, 4th Floor, Wing C\nMara Road, Upper Hill\nNairobi, Kenya" },
                    { icon: FaPhone, title: "Call Us", content: "+254 123 456 789" },
                    { icon: FaGlobe, title: "Website", content: "www.gastro.or.ke" },
                    { icon: FaEnvelope, title: "Email Us", content: "info@gastro.or.ke" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="group relative"
                      whileHover={{ x: 4 }}
                    >
                      <div className="relative flex items-start gap-4 p-4 rounded-xl hover:bg-[#0f5a5e]/5 transition-colors">
                        <div className="p-2 bg-[#0f5a5e]/10 rounded-lg group-hover:bg-[#0f5a5e]/15 transition-colors">
                          <item.icon className="text-[#0f5a5e] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="font-merriweather font-medium text-white mb-1">{item.title}</p>
                          <p className="font-merriweather whitespace-pre-line">{item.content}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="relative mt-16 pt-8">
            <div className="absolute inset-0 bg-[#0f5a5e]/10 h-px" />
            <div className="relative flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.p 
                className="text-white/80 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                © {new Date().getFullYear()} Gastroenterology Society of Kenya. All Rights Reserved.
              </motion.p>
              <motion.div 
                className="flex gap-8 text-white/80 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {["Privacy Policy", "Terms of Service", "Contact Us"].map((item, index) => (
                  <Link 
                    key={item}
                    href="#" 
                    className="relative group px-2 py-1 hover:text-[#0f5a5e] transition-colors"
                  >
                    <span className="relative z-10">{item}</span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-px bg-[#0f5a5e]/30 group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 