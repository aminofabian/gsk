import React from 'react';
import { FaUsers, FaBook, FaFlask, FaStar, FaDollarSign } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';

const MembershipFeatures = () => {
  return (
    <section className="relative mt-60">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-[#003366] overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-40 transform translate-y-1/2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#003366"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="bg-[#003366] pt-32 pb-24 relative">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002347] via-[#003366] to-[#003366] opacity-50" />
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
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
            <div className="bg-gradient-to-br from-[#003366]/60 to-[#003366]/40 backdrop-blur-sm p-8  border border-white/10 hover:border-white/30 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#002347]/20">
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
            <div className="bg-gradient-to-br from-[#003366]/60 to-[#003366]/40 backdrop-blur-sm p-8  border border-white/10 hover:border-white/30 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#002347]/20">
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
            <div className="bg-gradient-to-br from-[#003366]/60 to-[#003366]/40 backdrop-blur-sm p-8  border border-white/10 hover:border-white/30 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#002347]/20">
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
            <div className="bg-gradient-to-br from-[#003366]/60 to-[#003366]/40 backdrop-blur-sm p-8  border border-white/10 hover:border-white/30 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#002347]/20">
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
            <div className="bg-gradient-to-br from-[#003366]/60 to-[#003366]/40 backdrop-blur-sm p-8  border border-white/10 hover:border-white/30 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#002347]/20">
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
            <div className="bg-gradient-to-br from-[#003366]/60 to-[#003366]/40 backdrop-blur-sm p-8  border border-white/10 hover:border-white/30 transition-all duration-300 group hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#002347]/20">
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
      </div>
    </section>
  );
};

export default MembershipFeatures; 