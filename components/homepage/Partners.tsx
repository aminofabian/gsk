const Partners = () => {
  const leaders = [
    {
      name: "Dr. Eric Murunga",
      title: "Chairman",
      image: "/doctors/dr erick murunga.avif",
      specialty: "Gastroenterology",
      experience: "15+ years"
    },
    {
      name: "Dr. Wilson Kiraitu",
      title: "Vice Chair",
      image: "/doctors/dr wilson kiraitu.jpg",
      specialty: "Gastroenterology",
      experience: "12+ years"
    },
    {
      name: "Dr. Linda Gathara",
      title: "Secretary",
      image: "/doctors/Linda-Gathara.jpg",
      specialty: "Gastroenterology",
      experience: "10+ years"
    },
    {
      name: "Dr. Mirriam Gatehi",
      title: "Vice Secretary",
      image: "/doctors/dr mirriam gatehi.jpg",
      specialty: "Gastroenterology",
      experience: "13+ years"
    },
    {
      name: "Dr. Firoz Alimohammed",
      title: "Treasurer",
      image: "/doctors/dr firoz alimohammed.jpg",
      specialty: "Gastroenterology",
      experience: "14+ years"
    },
    {
      name: "Dr. Rupal Maru",
      title: "Vice - Treasurer",
      image: "/doctors/dr rupal maru.jpg",
      specialty: "Gastroenterology",
      experience: "11+ years"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50h10v10H50V50zm-10 0h10v10H40V50zm-10 0h10v10H30V50zm30-10h10v10H60V40zm-10 0h10v10H50V40zm-10 0h10v10H40V40zm30-10h10v10H70V30zm-10 0h10v10H60V30zm-10 0h10v10H50V30z' fill='%2340e0d0' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-[#0f5a5e]/90 text-sm tracking-widest uppercase">
            <span className="h-px w-12 bg-gradient-to-r from-[#0f5a5e]/10 via-[#40e0d0]/50 to-[#0f5a5e]/10"></span>
            Our Leadership
            <span className="h-px w-12 bg-gradient-to-r from-[#0f5a5e]/10 via-[#40e0d0]/50 to-[#0f5a5e]/10"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-merriweather font-bold mb-3">
            <span className="bg-gradient-to-r from-[#003366] via-[#0f5a5e] to-[#003366] text-transparent bg-clip-text">
              GSK Network & Leadership
            </span>
          </h2>
          <p className="text-[#0f5a5e]/80 text-lg font-light max-w-2xl mx-auto">
            Meet the dedicated team leading the advancement of gastroenterology care in Kenya
          </p>
          <div className="w-32 h-0.5 bg-gradient-to-r from-[#0f5a5e]/10 via-[#40e0d0]/50 to-[#0f5a5e]/10 mx-auto mt-6" />
        </div>

        {/* Main grid container - adjusted for balance */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-start">
          {/* Left side - Enhanced Map Section - 2 columns */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="bg-gradient-to-br from-white to-[#f8fffe] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#40e0d0]/10">
              <div className="mb-6">
                <h3 className="text-2xl font-merriweather font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#003366] via-[#0f5a5e] to-[#003366] text-transparent bg-clip-text">
                    GSK Member Network
                  </span>
                </h3>
                <div className="w-24 h-0.5 bg-gradient-to-r from-[#0f5a5e]/10 via-[#40e0d0]/50 to-[#0f5a5e]/10" />
              </div>
              <p className="font-merriweather text-[#003366]/70 leading-relaxed mb-8 text-lg">
                GSK represents the largest network of gastroenterology professionals in East Africa, with over 500 dedicated practitioners across Kenya delivering exceptional healthcare services.
              </p>
              
              {/* Enhanced Map Container */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#003366] to-[#0f5a5e] rounded-xl overflow-hidden shadow-lg group flex-shrink-0">
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
                    {/* Map Image */}
                    <img 
                      src="/images/leaders/kenya.png"
                      alt="Kenya Map"
                      className="absolute w-full h-full object-contain opacity-80 mix-blend-screen"
                    />

                    {/* Medical Cross Markers */}
                    <div className="absolute inset-0">
                      {/* Nairobi */}
                      <div className="absolute top-[55%] left-[48%] transform -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                          <div className="w-6 h-6 rotate-45 bg-[#0f5a5e]/30 rounded-sm">
                            <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                              <span className="text-white text-xs font-bold">+</span>
                            </div>
                          </div>
                          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                            <span className="text-white text-xs font-semibold bg-[#003366]/50 px-2 py-0.5 rounded">Nairobi</span>
                          </div>
                        </div>
                      </div>

                      {/* Mombasa */}
                      <div className="absolute top-[65%] left-[68%] transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 rotate-45 bg-[#0f5a5e]/20 rounded-sm">
                          <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                            <span className="text-white text-[10px] font-bold">+</span>
                          </div>
                        </div>
                      </div>

                      {/* Kisumu */}
                      <div className="absolute top-[45%] left-[28%] transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 rotate-45 bg-[#0f5a5e]/20 rounded-sm">
                          <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                            <span className="text-white text-[10px] font-bold">+</span>
                          </div>
                        </div>
                      </div>

                      {/* Connection Lines */}
                      <svg className="absolute inset-0 w-full h-full">
                        <line x1="48%" y1="55%" x2="68%" y2="65%" stroke="#0f5a5e" strokeOpacity="0.2" strokeWidth="1.5" />
                        <line x1="48%" y1="55%" x2="28%" y2="45%" stroke="#0f5a5e" strokeOpacity="0.2" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#003366]/50">
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-8 h-8 bg-[#0f5a5e]/10 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xl font-bold">+</span>
                      </div>
                    </div>
                    <p className="text-white text-lg font-medium px-6">
                      Serving healthcare professionals across all 47 counties
                    </p>
                    <p className="text-[#40e0d0] text-sm font-medium">
                      Advancing Gastroenterology Care in Kenya
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mt-8">
                <div className="relative">
                  <div className="bg-gradient-to-br from-white to-[#f8fffe] p-4 sm:p-6 rounded-xl border border-[#40e0d0]/10 hover:border-[#40e0d0]/30 transition-all duration-300 hover:shadow-[0_8px_16px_-6px_rgba(15,90,94,0.1)] group">
                    <div className="flex flex-col items-center sm:items-start relative z-10">
                      <div className="text-3xl sm:text-4xl font-merriweather font-bold mb-1">
                        <span className="bg-gradient-to-r from-[#003366] via-[#0f5a5e] to-[#003366] text-transparent bg-clip-text">
                          500+
                        </span>
                      </div>
                      <div className="text-sm font-merriweather font-medium text-[#0f5a5e]">Active Members</div>
                    </div>
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <svg className="w-8 h-8 text-[#40e0d0]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-white to-[#f8fffe] p-4 sm:p-6 rounded-xl border border-[#40e0d0]/10 hover:border-[#40e0d0]/30 transition-all duration-300 hover:shadow-[0_8px_16px_-6px_rgba(15,90,94,0.1)] group">
                    <div className="flex flex-col items-center sm:items-start relative z-10">
                      <div className="text-3xl sm:text-4xl font-merriweather font-bold mb-1">
                        <span className="bg-gradient-to-r from-[#003366] via-[#0f5a5e] to-[#003366] text-transparent bg-clip-text">
                          47
                        </span>
                      </div>
                      <div className="text-sm font-merriweather font-medium text-[#0f5a5e]">Counties Covered</div>
                    </div>
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <svg className="w-8 h-8 text-[#40e0d0]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-white to-[#f8fffe] p-4 sm:p-6 rounded-xl border border-[#40e0d0]/10 hover:border-[#40e0d0]/30 transition-all duration-300 hover:shadow-[0_8px_16px_-6px_rgba(15,90,94,0.1)] group">
                    <div className="flex flex-col items-center sm:items-start relative z-10">
                      <div className="text-3xl sm:text-4xl font-merriweather font-bold mb-1">
                        <span className="bg-gradient-to-r from-[#003366] via-[#0f5a5e] to-[#003366] text-transparent bg-clip-text">
                          20+
                        </span>
                      </div>
                      <div className="text-sm font-merriweather font-medium text-[#0f5a5e]">Partners</div>
                    </div>
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
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

          {/* Right side - Enhanced Leadership Section - 3 columns */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="bg-gradient-to-br from-white to-[#f8fffe] rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#40e0d0]/10">
              {/* Creative section header */}
              <div className="text-center lg:text-left mb-12 relative">
                {/* Decorative background elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 opacity-[0.07]">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" className="fill-[#003366]" />
                    <circle cx="50" cy="50" r="35" className="fill-none stroke-[#0f5a5e] stroke-1" />
                    <circle cx="50" cy="50" r="30" className="fill-none stroke-[#40e0d0] stroke-1" />
                  </svg>
                </div>
                
                <div className="relative">
                  <h3 className="text-2xl font-merriweather font-bold mb-3 inline-flex flex-col items-center lg:items-start">
                    <span className="relative px-6 py-2 rounded-full bg-gradient-to-r from-[#003366]/5 to-transparent mb-2">
                      <span className="bg-gradient-to-r from-[#003366] via-[#0f5a5e] to-[#003366] text-transparent bg-clip-text">
                        Meet GSK&apos;s Leadership Team
                      </span>
                      <div className="absolute inset-0 rounded-full border border-[#0f5a5e]/10"></div>
                    </span>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="h-px w-12 bg-gradient-to-r from-[#0f5a5e]/10 via-[#40e0d0]/50 to-[#0f5a5e]/10"></span>
                      <span className="text-[#0f5a5e]/60 text-sm font-light">Guiding Excellence in Gastroenterology</span>
                      <span className="h-px w-12 bg-gradient-to-r from-[#0f5a5e]/10 via-[#40e0d0]/50 to-[#0f5a5e]/10"></span>
                    </div>
                  </h3>
                </div>
              </div>

              {/* Unique leadership grid layout - adjusted spacing */}
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 xl:gap-6">
                {leaders.map((leader, index) => (
                  <div key={index} className="group h-[20rem] sm:h-[22rem]">
                    {/* Card container with 3D effect */}
                    <div className="relative h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                      {/* Front of card */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-[#f8fffe] border border-[#40e0d0]/10 shadow-lg backface-hidden">
                        {/* Enhanced image container with creative frame */}
                        <div className="h-[60%] overflow-hidden relative rounded-t-2xl">
                          {/* Decorative background pattern */}
                          <div className="absolute inset-0 bg-[#003366]/5">
                            <svg className="w-full h-full opacity-30" viewBox="0 0 100 100">
                              <defs>
                                <pattern id="medicalPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                  <path d="M10,0 L10,20 M0,10 L20,10" stroke="currentColor" strokeWidth="0.5" />
                              </pattern>
                              </defs>
                              <rect x="0" y="0" width="100" height="100" fill="url(#medicalPattern)" />
                            </svg>
                          </div>

                          {/* Image with gradient overlay */}
                          <div className="absolute inset-0 p-2">
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                          <img 
                            src={leader.image} 
                            alt={leader.name}
                                className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Decorative frame corners */}
                            <div className="absolute inset-0">
                              {/* Top left */}
                              <div className="absolute top-0 left-0 w-8 h-8">
                                <svg viewBox="0 0 32 32" className="w-full h-full">
                                  <path d="M0 0 L32 0 L32 2 L2 2 L2 32 L0 32 Z" className="fill-[#40e0d0]/30" />
                                </svg>
                              </div>
                              {/* Top right */}
                              <div className="absolute top-0 right-0 w-8 h-8 transform rotate-90">
                                <svg viewBox="0 0 32 32" className="w-full h-full">
                                  <path d="M0 0 L32 0 L32 2 L2 2 L2 32 L0 32 Z" className="fill-[#40e0d0]/30" />
                                </svg>
                              </div>
                              {/* Bottom left */}
                              <div className="absolute bottom-0 left-0 w-8 h-8 transform -rotate-90">
                                <svg viewBox="0 0 32 32" className="w-full h-full">
                                  <path d="M0 0 L32 0 L32 2 L2 2 L2 32 L0 32 Z" className="fill-[#40e0d0]/30" />
                            </svg>
                          </div>
                              {/* Bottom right */}
                              <div className="absolute bottom-0 right-0 w-8 h-8 transform rotate-180">
                                <svg viewBox="0 0 32 32" className="w-full h-full">
                                  <path d="M0 0 L32 0 L32 2 L2 2 L2 32 L0 32 Z" className="fill-[#40e0d0]/30" />
                            </svg>
                              </div>
                            </div>
                          </div>

                          {/* Professional title badge */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transform transition-transform duration-300 group-hover:translate-y-2">
                            <p className="text-[#003366] text-sm font-medium">{leader.title}</p>
                          </div>
                        </div>

                        {/* Content section - adjusted height for three columns */}
                        <div className="h-[40%] p-3 sm:p-4 relative flex flex-col justify-between">
                          <div>
                            <h4 className="font-merriweather font-bold text-sm sm:text-base leading-tight mb-2 text-center">
                              <span className="bg-gradient-to-r from-[#003366] via-[#0f5a5e] to-[#003366] text-transparent bg-clip-text line-clamp-2">
                              {leader.name}
                            </span>
                          </h4>
                          
                          {/* Experience badge */}
                            <div className="flex justify-center">
                              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#0f5a5e]/5">
                                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0f5a5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                                <span className="text-[#0f5a5e] text-xs">{leader.experience}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Back of card - adjusted for three columns */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#003366] to-[#0f5a5e] border border-[#40e0d0]/10 shadow-lg backface-hidden rotate-y-180 p-3 sm:p-4">
                        {/* Circular image */}
                        <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
                          <img 
                            src={leader.image} 
                            alt={leader.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="h-full flex flex-col justify-between pt-10 sm:pt-12">
                          {/* Content */}
                          <div>
                            <h4 className="font-merriweather font-bold text-sm sm:text-base text-white text-center mb-2 sm:mb-3">
                              <span className="line-clamp-2">{leader.name}</span>
                              <div className="mt-1 text-xs font-normal text-[#40e0d0]/80">{leader.title}</div>
                            </h4>

                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                  <svg className="w-3 h-3 text-[#40e0d0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.66 3.99c-.67-.38-1.5-.19-1.95.43l-3.17 4.41c-.48.67-1.15 1.02-1.86 1.02-.71 0-1.38-.35-1.86-1.02L7.65 4.42c-.45-.62-1.28-.81-1.95-.43-.67.38-.87 1.22-.49 1.89L8.38 10c.48.67.73 1.46.73 2.27v7.23c0 .83.67 1.5 1.5 1.5h2.77c.83 0 1.5-.67 1.5-1.5v-7.23c0-.81.25-1.6.73-2.27l3.17-4.41c.38-.67.18-1.51-.49-1.89z" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-[#40e0d0] text-xs font-medium">Specialty</p>
                                  <p className="text-white/90 text-xs sm:text-sm line-clamp-2">{leader.specialty}</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2">
                                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                  <svg className="w-3 h-3 text-[#40e0d0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-[#40e0d0] text-xs font-medium">Experience</p>
                                  <p className="text-white/90 text-xs sm:text-sm">{leader.experience}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Decorative bottom pattern */}
                          <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-white/10">
                            <div className="flex justify-center">
                              <div className="inline-flex items-center gap-1.5 text-white/60 text-xs">
                                <svg className="w-3 h-3 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span className="font-light">Flip Back</span>
                              </div>
                            </div>
                          </div>
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