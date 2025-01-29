'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Hero Section Component
const AboutHero = () => (
  <div className="relative h-[60vh] min-h-[400px] bg-[#003366] overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src="/meeting/75B_6033.jpg"
        alt="GSK Team"
        fill
        className="object-cover opacity-20"
      />
    </div>
    <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
      <div className="max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
        >
          About GSK
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 font-serif"
        >
          The Gastroenterology Society of Kenya (GSK) is a professional medical organization dedicated to advancing digestive health care through education, research, and advocacy.
        </motion.p>
      </div>
    </div>
  </div>
);

// Overview Section Component
const Overview = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003366] mb-6">
            Who We Are
          </h2>
          <div className="prose prose-lg">
            <p className="text-gray-600 font-serif">
              The Gastroenterology Society of Kenya (GSK) provides a platform for gastroenterologists and healthcare professionals in the field of digestive health to collaborate, share knowledge, and promote the prevention, diagnosis, and treatment of gastrointestinal diseases.
            </p>
            <p className="text-gray-600 font-serif mt-4">
              Our organization is committed to supporting healthcare professionals through education, training, and research, while also raising awareness about gastrointestinal health issues both within the medical community and among the public.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] -3xl overflow-hidden shadow-2xl">
          <Image
            src="/meeting/75B_6035.jpg"
            alt="GSK Activities"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

// Vision & Mission Component
const VisionMission = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-[#003366] to-[#002244]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white/10 backdrop-blur-lg -3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Our Vision</h3>
          <p className="text-white/90 font-serif">
            To be a leading force in improving gastrointestinal health in Kenya, ensuring individuals have access to high-quality, comprehensive care for gastrointestinal disorders.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg -3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Our Mission</h3>
          <p className="text-white/90 font-serif">
            To advance the practice of gastroenterology through education, research, and the dissemination of knowledge, improving the prevention, diagnosis, treatment, and management of gastrointestinal diseases in Kenya.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Objectives Component
const Objectives = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003366] text-center mb-16">
        Our Primary Objectives
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Education & Training",
            description: "Organizing workshops, conferences, and seminars for healthcare professionals to improve their knowledge and skills.",
            image: "/meeting/75B_6038.jpg"
          },
          {
            title: "Research Support",
            description: "Supporting and promoting research on gastrointestinal diseases to improve understanding and management of digestive health.",
            image: "/meeting/75B_6043.jpg"
          },
          {
            title: "Health Advocacy",
            description: "Raising awareness about digestive health and engaging in public health campaigns to reduce preventable diseases.",
            image: "/meeting/75B_6055.jpg"
          },
          {
            title: "Clinical Excellence",
            description: "Promoting high standards in clinical practice and supporting healthcare infrastructure development.",
            image: "/meeting/75B_6081.jpg"
          },
          {
            title: "Professional Networking",
            description: "Providing platforms for professionals to connect, collaborate, and share experiences.",
            image: "/meeting/75B_6092.jpg"
          },
          {
            title: "Policy Advocacy",
            description: "Engaging with policymakers to ensure gastrointestinal health receives adequate attention in healthcare plans.",
            image: "/meeting/75B_6081.jpg"
          }
        ].map((objective, index) => (
          <div key={index} className="bg-white -3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image
                src={objective.image}
                alt={objective.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-[#003366] mb-4">{objective.title}</h3>
              <p className="text-gray-600 font-serif">{objective.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Membership Benefits Component
const MembershipBenefits = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] -3xl overflow-hidden shadow-2xl">
          <Image
            src="/meeting/75B_6092.jpg"
            alt="GSK Membership"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003366] mb-8">
            Membership Benefits
          </h2>
          <ul className="space-y-4">
            {[
              "Access to continuous education and professional development",
              "Participation in conferences and workshops",
              "Networking opportunities with fellow professionals",
              "Access to latest research and resources",
              "Influence on policy and advocacy initiatives",
              "Part of a supportive community of gastroenterologists"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start gap-4">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600 font-serif">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// Main About Page Component
export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Overview />
      <VisionMission />
      <Objectives />
      <MembershipBenefits />
    </main>
  );
} 