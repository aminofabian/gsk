const Partners = () => {
  const leaders = [
    {
      name: "Dr. John Doe",
      title: "President",
      image: "/images/leaders/leader1.jpg",
      specialty: "Gastroenterology",
      experience: "15+ years"
    },
    {
      name: "Dr. Jane Smith",
      title: "Secretary General",
      image: "/images/leaders/leader2.jpg",
      specialty: "Hepatology",
      experience: "12+ years"
    },
    {
      name: "Dr. James Mwangi",
      title: "Treasurer",
      image: "/images/leaders/leader3.jpg",
      specialty: "Endoscopy",
      experience: "10+ years"
    },
    {
      name: "Dr. Sarah Kimani",
      title: "Research Director",
      image: "/images/leaders/leader4.jpg",
      specialty: "Clinical Research",
      experience: "13+ years"
    },
    // {
    //   name: "Dr. Peter Odhiambo",
    //   title: "Education Director",
    //   image: "/leaders/leader5.jpg",
    //   specialty: "Medical Education",
    //   experience: "14+ years"
    // },
    // {
    //   name: "Dr. Mary Wangari",
    //   title: "Clinical Practice Director",
    //   image: "/leaders/leader6.jpg",
    //   specialty: "Clinical Practice",
    //   experience: "11+ years"
    // }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#40e0d0]/2 via-white to-[#003366]/2" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50h10v10H50V50zm-10 0h10v10H40V50zm-10 0h10v10H30V50zm30-10h10v10H60V40zm-10 0h10v10H50V40zm-10 0h10v10H40V40zm30-10h10v10H70V30zm-10 0h10v10H60V30zm-10 0h10v10H50V30z' fill='%2340e0d0' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-merriweather font-bold bg-gradient-to-r from-[#003366] via-[#40e0d0]/40 to-[#003366] bg-clip-text text-transparent inline-block">
            GSK Network & Leadership
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#003366] via-[#40e0d0]/30 to-[#003366] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left side - Enhanced Map Section */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex-1 flex flex-col">
              <h3 className="text-2xl font-merriweather font-bold text-[#003366] mb-4">GSK Member Network</h3>
              <p className="font-merriweather text-gray-600 leading-relaxed mb-6">
                GSK represents the largest network of gastroenterology professionals in East Africa, with over 500 dedicated practitioners across Kenya delivering exceptional healthcare services.
              </p>
              
              {/* Enhanced Map Container */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#003366] via-[#004080] to-[#40e0d0]/30 rounded-xl overflow-hidden shadow-lg group flex-shrink-0">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30h10v10H30V30zm-10 0h10v10H20V30zm-10 0h10v10H10V30zm30-10h10v10H40V20zm-10 0h10v10H30V20zm-10 0h10v10H20V20zm-10 0h10v10H10V20z' fill='%23FFFFFF' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                {/* Map Container with Image */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    {/* Glowing Effect */}
                    <div className="absolute inset-0 bg-[#40e0d0]/20 blur-3xl rounded-full scale-90 animate-pulse" />
                    
                    {/* Map Image */}
                    <img 
                      src="/images/leaders/kenya.png"
                      alt="Kenya Map"
                      className="absolute w-full h-full object-contain opacity-80 mix-blend-screen drop-shadow-2xl"
                      style={{ filter: 'brightness(1.2) contrast(1.1)' }}
                    />

                    {/* Medical Cross Markers */}
                    <div className="absolute inset-0">
                      {/* Nairobi */}
                      <div className="absolute top-[55%] left-[48%] transform -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                          <div className="w-6 h-6 rotate-45 bg-[#40e0d0]/70 rounded-sm animate-pulse">
                            <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                              <span className="text-[#003366] text-xs font-bold">+</span>
                            </div>
                          </div>
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                            <span className="text-white text-xs font-semibold bg-[#003366]/70 px-2 py-0.5 rounded">Nairobi</span>
                          </div>
                        </div>
                      </div>

                      {/* Mombasa */}
                      <div className="absolute top-[65%] left-[68%] transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 rotate-45 bg-[#40e0d0]/50 rounded-sm animate-pulse" style={{ animationDelay: '0.5s' }}>
                          <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                            <span className="text-[#003366] text-[10px] font-bold">+</span>
                          </div>
                        </div>
                      </div>

                      {/* Kisumu */}
                      <div className="absolute top-[45%] left-[28%] transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 rotate-45 bg-[#40e0d0]/50 rounded-sm animate-pulse" style={{ animationDelay: '1s' }}>
                          <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                            <span className="text-[#003366] text-[10px] font-bold">+</span>
                          </div>
                        </div>
                      </div>

                      {/* Connection Lines with Pulse Effect */}
                      <svg className="absolute inset-0 w-full h-full">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#40e0d0" stopOpacity="0.3">
                              <animate attributeName="stopOpacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
                            </stop>
                            <stop offset="100%" stopColor="#40e0d0" stopOpacity="0.5">
                              <animate attributeName="stopOpacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite" />
                            </stop>
                          </linearGradient>
                        </defs>
                        <line x1="48%" y1="55%" x2="68%" y2="65%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                        <line x1="48%" y1="55%" x2="28%" y2="45%" stroke="url(#lineGradient)" strokeWidth="1.5" />
                      </svg>

                      {/* Radar Scan Effect */}
                      <div className="absolute top-[55%] left-[48%] transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-40 h-40 border-2 border-[#40e0d0]/20 rounded-full animate-ping opacity-20" />
                        <div className="absolute top-1/2 left-1/2 w-60 h-60 -translate-x-1/2 -translate-y-1/2 border border-[#40e0d0]/10 rounded-full animate-ping opacity-10" style={{ animationDelay: '0.5s' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay with Medical Icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[#003366]/70 via-[#004080]/50 to-[#40e0d0]/20">
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-8 h-8 bg-[#40e0d0]/20 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xl font-bold">+</span>
                      </div>
                    </div>
                    <p className="text-white text-lg font-medium px-6">
                      Serving healthcare professionals across all 47 counties
                    </p>
                    <p className="text-[#40e0d0]/80 text-sm">
                      Advancing Gastroenterology Care in Kenya
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mt-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#40e0d0]/20 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-white p-4 sm:p-6 rounded-xl border border-[#40e0d0]/10 hover:border-[#40e0d0]/20 transition-colors shadow-sm hover:shadow-md duration-300">
                    <div className="flex flex-col items-center sm:items-start">
                      <div className="text-3xl sm:text-4xl font-merriweather font-bold bg-gradient-to-r from-[#003366] to-[#40e0d0]/40 bg-clip-text text-transparent mb-1">500+</div>
                      <div className="text-sm font-merriweather font-medium text-[#003366]/80">Active Members</div>
                    </div>
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                      <svg className="w-8 h-8 text-[#40e0d0]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#40e0d0]/20 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-white p-4 sm:p-6 rounded-xl border border-[#40e0d0]/10 hover:border-[#40e0d0]/20 transition-colors shadow-sm hover:shadow-md duration-300">
                    <div className="flex flex-col items-center sm:items-start">
                      <div className="text-3xl sm:text-4xl font-merriweather font-bold bg-gradient-to-r from-[#003366] to-[#40e0d0]/40 bg-clip-text text-transparent mb-1">47</div>
                      <div className="text-sm font-merriweather font-medium text-[#003366]/80">Counties Covered</div>
                    </div>
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                      <svg className="w-8 h-8 text-[#40e0d0]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#40e0d0]/20 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-white p-4 sm:p-6 rounded-xl border border-[#40e0d0]/10 hover:border-[#40e0d0]/20 transition-colors shadow-sm hover:shadow-md duration-300">
                    <div className="flex flex-col items-center sm:items-start">
                      <div className="text-3xl sm:text-4xl font-merriweather font-bold bg-gradient-to-r from-[#003366] to-[#40e0d0]/40 bg-clip-text text-transparent mb-1">20+</div>
                      <div className="text-sm font-merriweather font-medium text-[#003366]/80">Partners</div>
                    </div>
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                      <svg className="w-8 h-8 text-[#40e0d0]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 7H7v6h6V7z" />
                        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Leadership Section */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex-1 flex flex-col">
              <h3 className="text-2xl font-merriweather font-bold text-[#003366] mb-8">Meet GSK&apos;s Partners</h3>
              <div className="grid grid-cols-2 gap-6 flex-1">
                {leaders.map((leader, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#003366] to-[#40e0d0]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-300" />
                    <div className="relative overflow-hidden rounded-xl bg-white border border-[#40e0d0]/10 hover:border-[#40e0d0]/20 transition-all duration-300">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-[#004080]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                      <div className="p-4 relative bg-white transform transition-transform duration-300 group-hover:-translate-y-2">
                        <h4 className="font-merriweather font-semibold text-lg text-[#003366]">{leader.name}</h4>
                        <p className="font-merriweather text-[#40e0d0]/80">{leader.title}</p>
                        <div className="mt-2 pt-2 border-t border-[#40e0d0]/5">
                          <p className="text-sm font-merriweather text-gray-600">{leader.specialty}</p>
                          <p className="text-sm font-merriweather text-gray-500">{leader.experience}</p>
                        </div>
                        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-5 h-5 text-[#40e0d0]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;