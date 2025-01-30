import React from 'react';
import { FaUsers, FaBook, FaFlask, FaStar, FaDollarSign } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';

const MembershipFeatures = () => {
  return (
    <section className="bg-[#003366] py-24 relative mt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002347] via-[#003366] to-[#003366] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-merriweather text-white mb-6 font-bold">
            Empowering Gastroenterology Excellence
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Access resources, connect with peers, and advance your professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Member Directory */}
          <div className="bg-[#003366]/40 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#002347]/20">
            <div className="text-white mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <FaUsers className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-merriweather text-white mb-4 font-semibold">
              Member Directory
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Access our network of gastroenterology professionals
            </p>
            <a 
              href="/membership/directory" 
              className="inline-flex items-center text-white group-hover:text-white/90 transition-all duration-300 text-lg font-medium"
            >
              Learn More 
              <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
            </a>
          </div>

          {/* Certification */}
          <div className="bg-[#003366]/40 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#002347]/20">
            <div className="text-white mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <HiDocumentText className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-merriweather text-white mb-4 font-semibold">
              Certification
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Professional certification and accreditation
            </p>
            <a 
              href="/education/certification" 
              className="inline-flex items-center text-white group-hover:text-white/90 transition-all duration-300 text-lg font-medium"
            >
              Learn More 
              <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
            </a>
          </div>

          {/* Clinical Guidelines */}
          <div className="bg-[#003366]/40 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#002347]/20">
            <div className="text-white mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <FaBook className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-merriweather text-white mb-4 font-semibold">
              Clinical Guidelines
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Latest gastroenterology practice guidelines
            </p>
            <a 
              href="/guidelines" 
              className="inline-flex items-center text-white group-hover:text-white/90 transition-all duration-300 text-lg font-medium"
            >
              Learn More 
              <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
            </a>
          </div>

          {/* Research Access */}
          <div className="bg-[#003366]/40 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#002347]/20">
            <div className="text-white mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <FaFlask className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-merriweather text-white mb-4 font-semibold">
              Research Access
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Member-exclusive research database
            </p>
            <a 
              href="/research" 
              className="inline-flex items-center text-white group-hover:text-white/90 transition-all duration-300 text-lg font-medium"
            >
              Learn More 
              <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
            </a>
          </div>

          {/* CPD Points */}
          <div className="bg-[#003366]/40 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#002347]/20">
            <div className="text-white mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <FaStar className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-merriweather text-white mb-4 font-semibold">
              CPD Points
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Track your continuing professional development
            </p>
            <a 
              href="/cpd" 
              className="inline-flex items-center text-white group-hover:text-white/90 transition-all duration-300 text-lg font-medium"
            >
              Learn More 
              <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
            </a>
          </div>

          {/* Join GSK */}
          <div className="bg-[#003366]/40 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#002347]/20">
            <div className="text-white mb-6 transform transition-transform duration-300 group-hover:scale-110">
              <FaDollarSign className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-merriweather text-white mb-4 font-semibold">
              Join GSK
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Become a member today
            </p>
            <a 
              href="/membership/join" 
              className="inline-flex items-center text-white group-hover:text-white/90 transition-all duration-300 text-lg font-medium"
            >
              Learn More 
              <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipFeatures; 