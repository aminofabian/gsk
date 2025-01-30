'use client';

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="relative bg-[#001a35] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Column 1: Logo & Brief Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Logo variant="light" />
            <p className="mt-4 text-sm text-white/90">
              Advancing digestive healthcare through education, research, and clinical excellence.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/90">
              {["Who We Are", "Membership", "Education", "Guidelines"].map((link) => (
                <motion.li key={link} whileHover={{ x: 2 }}>
                  <Link href="#" className="hover:text-white flex items-center gap-2">
                    <FaChevronRight className="text-xs" />
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-white/90">
              {["Publications", "Meetings", "Training", "Research"].map((link) => (
                <motion.li key={link} whileHover={{ x: 2 }}>
                  <Link href="#" className="hover:text-white flex items-center gap-2">
                    <FaChevronRight className="text-xs" />
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-white/90">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-white/70" />
                KMA Centre, Upper Hill, Nairobi
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-white/70" />
                +254 123 456 789
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-white/70" />
                info@gastro.or.ke
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-white/10 text-center text-xs text-white/70">
          © {new Date().getFullYear()} Gastroenterology Society of Kenya. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 