'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Hero Section Component
const AboutHero = () => (
  <div className="relative h-screen min-h-[600px] bg-[#003366]">
    <div className="absolute inset-0">
      <Image
        src="/meeting/75B_6033.jpg"
        alt="GSK Team"
        fill
        className="object-cover opacity-30"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/80 to-[#003366]/95" />
    <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6">
          Let Me Tell Your Story
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-serif leading-relaxed">
          The Gastroenterology Society of Kenya (GSK) is more than just a medical organization - it's a community of dedicated professionals united by a passion for advancing digestive health care through education, research, and advocacy.
        </p>
      </motion.div>
    </div>
  </div>
);

// Gallery Section Component
const Gallery = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-80 overflow-hidden ">
          <Image
            src="/meeting/75B_6035.jpg"
            alt="GSK Activities 1"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="relative h-80 overflow-hidden ">
          <Image
            src="/meeting/75B_6038.jpg"
            alt="GSK Activities 2"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="relative h-80 overflow-hidden ">
          <Image
            src="/meeting/75B_6043.jpg"
            alt="GSK Activities 3"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  </section>
);

// Mission Section Component
const Mission = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative h-[600px]  overflow-hidden">
            <Image
              src="/meeting/75B_6055.jpg"
              alt="GSK Mission"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#003366]/10">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-serif font-bold text-[#003366] mb-8">
            Photography for Every Equestrian
          </h2>
          <p className="text-gray-600 text-lg mb-8 font-serif leading-relaxed">
            Our mission is to advance the practice of gastroenterology through education, research, and the dissemination of knowledge, improving the prevention, diagnosis, treatment, and management of gastrointestinal diseases in Kenya.
          </p>
          <button className="bg-[#003366] text-white px-8 py-3 rounded-full hover:bg-[#004488] transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Work With Me Section Component
const WorkWithMe = () => (
  <section className="py-24 bg-[#003366]">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-serif font-bold text-white text-center mb-16">
        Work with Me
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Education",
            description: "Supporting continuous medical education and professional development for healthcare providers."
          },
          {
            title: "Research",
            description: "Promoting and facilitating research in gastroenterology and digestive health."
          },
          {
            title: "Advocacy",
            description: "Advocating for better digestive health policies and improved healthcare access."
          }
        ].map((item, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-lg p-8 ">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              {item.title}
            </h3>
            <p className="text-white/80 leading-relaxed">
              {item.description}
            </p>
            <button className="mt-6 text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-[#003366] transition-colors duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Ready to Shoot Section Component
const ReadyToShoot = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif font-bold text-[#003366] mb-8">
            Ready to Join?
          </h2>
          <p className="text-gray-600 text-lg mb-8 font-serif leading-relaxed">
            Join the Gastroenterology Society of Kenya and become part of a community dedicated to advancing digestive health care in Kenya. Together, we can make a difference.
          </p>
          <button className="bg-[#003366] text-white px-8 py-3 rounded-full hover:bg-[#004488] transition-colors duration-300">
            Become a Member
          </button>
        </div>
        <div className="relative">
          <div className="relative h-[500px]  overflow-hidden">
            <Image
              src="/meeting/75B_6092.jpg"
              alt="Join GSK"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#003366]/10">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Main About Page Component
export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <Gallery />
      <Mission />
      <WorkWithMe />
      <ReadyToShoot />
    </main>
  );
} 