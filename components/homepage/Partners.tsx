"use client";
import { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

const AnimatedCounter = ({ end, duration = 1000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <div>{count}+</div>
  );
};

interface MapPointProps {
  top: number;
  left: number;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  delay?: number;
}

interface MapConnectionProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
}

const sizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-6 h-6'
} as const;

const MapPoint = ({ top, left, size = 'md', label = '', delay = 0 }: MapPointProps) => {
  return (
    <div className={`absolute transform -translate-x-1/2 -translate-y-1/2`} style={{ top: `${top}%`, left: `${left}%` }}>
      <div className="relative">
        <div className={`${sizeClasses[size]} rotate-45 bg-white/20 animate-pulse`} style={{ animationDelay: `${delay}ms` }}>
          <div className="absolute inset-0 flex items-center justify-center -rotate-45">
            <span className="text-white text-[10px] font-bold">+</span>
          </div>
        </div>
        {label && (
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <span className="text-white text-xs font-semibold bg-[#003366]/50 px-2 py-0.5">
              {label}
            </span>
          </div>
        )}
        <div className="absolute inset-0 animate-ping" style={{ animationDelay: `${delay}ms` }}>
          <div className={`${sizeClasses[size]} rotate-45 bg-white/10`} />
        </div>
      </div>
    </div>
  );
};

const MapConnection = ({ x1, y1, x2, y2, delay = 0 }: MapConnectionProps) => (
  <line 
    x1={`${x1}%`} 
    y1={`${y1}%`} 
    x2={`${x2}%`} 
    y2={`${y2}%`} 
    stroke="white" 
    strokeOpacity="0.2" 
    strokeWidth="1.5"
    className="animate-drawLine"
    style={{ 
      animationDelay: `${delay}ms`,
      strokeDasharray: '1000',
      strokeDashoffset: '1000',
      animation: 'drawLine 2s ease-out forwards',
    }}
  />
);

interface Leader {
  name: string;
  title: string;
  image: string;
  specialty: string;
  experience: string;
  hospital?: string;
  email?: string;
  linkedin?: string;
}

const Partners = () => {
  const leaders: Leader[] = [
    {
      name: "Dr. Eric Murunga",
      title: "Chairman",
      image: "/doctors/dr erick murunga.avif",
      specialty: "Gastroenterology",
      experience: "15+ years",
      hospital: "GSK Khan University Hospital",
      email: "chairman@gsk.or.ke",
      linkedin: "https://www.linkedin.com/in/dr-eric-murunga"
    },
    {
      name: "Dr. Wilson Kiraitu",
      title: "Vice Chair",
      image: "/doctors/dr wilson kiraitu.jpg",
      specialty: "Gastroenterology",
      experience: "12+ years",
      hospital: "Kenyatta National Hospital",
      email: "vicechair@gsk.or.ke"
    },
    {
      name: "Dr. Linda Gathara",
      title: "Secretary",
      image: "/doctors/Linda-Gathara.jpg",
      specialty: "Gastroenterology",
      experience: "10+ years",
      hospital: "Nairobi Hospital",
      email: "secretary@gsk.or.ke"
    },
    {
      name: "Dr. Mirriam Gatehi",
      title: "Vice Secretary",
      image: "/doctors/dr mirriam gatehi.jpg",
      specialty: "Gastroenterology",
      experience: "13+ years",
      hospital: "MP Shah Hospital",
      email: "vicesecretary@gsk.or.ke"
    },
    {
      name: "Dr. Firoz Alimohammed",
      title: "Treasurer",
      image: "/doctors/dr firoz alimohammed.jpg",
      specialty: "Gastroenterology",
      experience: "14+ years",
      hospital: "Mombasa Hospital",
      email: "treasurer@gsk.or.ke"
    },
    {
      name: "Dr. Rupal Maru",
      title: "Vice - Treasurer",
      image: "/doctors/dr rupal maru.jpg",
      specialty: "Gastroenterology",
      experience: "11+ years",
      hospital: "Kisumu Specialist Hospital",
      email: "vicetreasurer@gsk.or.ke"
    }
  ];

  const mapPoints: MapPointProps[] = [
    { top: 55, left: 48, size: 'lg' as const, label: 'Nairobi', delay: 0 },
    { top: 65, left: 68, size: 'md' as const, label: 'Mombasa', delay: 200 },
    { top: 45, left: 28, size: 'md' as const, label: 'Kisumu', delay: 400 },
    { top: 35, left: 38, size: 'sm' as const, label: 'Nakuru', delay: 600 },
    { top: 25, left: 45, size: 'sm' as const, label: 'Nyeri', delay: 800 },
    { top: 75, left: 55, size: 'sm' as const, label: 'Malindi', delay: 1000 },
    { top: 50, left: 65, size: 'sm' as const, label: 'Machakos', delay: 1200 },
    { top: 40, left: 55, size: 'sm' as const, label: 'Thika', delay: 1400 },
  ];

  const connections = [
    { x1: 48, y1: 55, x2: 68, y2: 65, delay: 200 }, // Nairobi to Mombasa
    { x1: 48, y1: 55, x2: 28, y2: 45, delay: 400 }, // Nairobi to Kisumu
    { x1: 48, y1: 55, x2: 38, y2: 35, delay: 600 }, // Nairobi to Nakuru
    { x1: 48, y1: 55, x2: 45, y2: 25, delay: 800 }, // Nairobi to Nyeri
    { x1: 68, y1: 65, x2: 55, y2: 75, delay: 1000 }, // Mombasa to Malindi
    { x1: 48, y1: 55, x2: 65, y2: 50, delay: 1200 }, // Nairobi to Machakos
    { x1: 48, y1: 55, x2: 55, y2: 40, delay: 1400 }, // Nairobi to Thika
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
          <h2 className="text-4xl md:text-5xl font-merriweather font-bold text-[#003366]">
            GSK Network & Leadership
          </h2>
          <div className="w-20 h-1 bg-[#0f5a5e]/20 mx-auto mt-4 " />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left side - Enhanced Map Section */}
          <div className="flex flex-col h-full">
            <div className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex-1 flex flex-col">
              <h3 className="text-2xl font-merriweather font-bold text-[#003366] mb-4">GSK Member Network</h3>
              <p className="font-merriweather text-gray-600 leading-relaxed mb-6">
                GSK represents the largest network of gastroenterology professionals in East Africa, with over 500 dedicated practitioners across Kenya delivering exceptional healthcare services.
              </p>
              
              {/* Enhanced Map Container */}
              <div className="relative aspect-[4/3] bg-[#003366] overflow-hidden shadow-lg group flex-shrink-0">
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
                      {mapPoints.map((point, index) => (
                        <MapPoint key={index} {...point} />
                      ))}

                      {/* Connection Lines */}
                      <svg className="absolute inset-0 w-full h-full">
                        {connections.map((connection, index) => (
                          <MapConnection key={index} {...connection} />
                        ))}
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#003366]/50">
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-8 h-8 bg-[#0f5a5e]/10 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">+</span>
                      </div>
                    </div>
                    <p className="text-white text-lg font-medium px-6">
                      Serving healthcare professionals across all 47 counties
                    </p>
                    <p className="text-[#0f5a5e]/60 text-sm">
                      Building a stronger healthcare network
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mt-8">
                <div className="relative">
                  <div className="bg-white p-4 sm:p-6 border border-[#003366]/10 hover:border-[#003366] transition-all duration-300">
                    <div className="flex flex-col items-center sm:items-start">
                      <div className="text-3xl sm:text-4xl font-merriweather font-bold text-[#003366] mb-1">
                        <AnimatedCounter end={500} duration={2000} />
                      </div>
                      <div className="text-sm font-merriweather font-medium text-[#003366]">Active Members</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white p-4 sm:p-6 border border-[#003366]/10 hover:border-[#003366] transition-all duration-300">
                    <div className="flex flex-col items-center sm:items-start">
                      <div className="text-3xl sm:text-4xl font-merriweather font-bold text-[#003366] mb-1">
                        <AnimatedCounter end={47} duration={1500} />
                      </div>
                      <div className="text-sm font-merriweather font-medium text-[#003366]">Counties Covered</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white p-4 sm:p-6 border border-[#003366]/10 hover:border-[#003366] transition-all duration-300">
                    <div className="flex flex-col items-center sm:items-start">
                      <div className="text-3xl sm:text-4xl font-merriweather font-bold text-[#003366] mb-1">
                        <AnimatedCounter end={20} duration={1200} />
                      </div>
                      <div className="text-sm font-merriweather font-medium text-[#003366]">Partners</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Leadership Section */}
          <div className="flex flex-col h-full">
            <div className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex-1">
              <h3 className="text-2xl font-merriweather font-bold text-[#003366] mb-8">Meet GSK&apos;s Leadership Team</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {leaders.map((leader, index) => (
                  <div key={index} className="flip-card h-[300px] w-full">
                    <div className="flip-card-inner">
                      {/* Front of card */}
                      <div className="flip-card-front">
                        <div className="relative h-full overflow-hidden bg-white border border-[#003366]/10">
                          <div className="h-[70%] overflow-hidden">
                            <img 
                              src={leader.image} 
                              alt={leader.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="h-[30%] p-4 flex flex-col justify-center items-center bg-white">
                            <h4 className="font-merriweather font-semibold text-lg text-[#003366] text-center">
                              {leader.title}
                            </h4>
                          </div>
                        </div>
                      </div>

                      {/* Back of card */}
                      <div className="flip-card-back">
                        <div className="h-full bg-[#003366] p-6 flex flex-col">
                          {/* Header Section */}
                          <div className="pb-4 mb-4 border-b border-white/10">
                            <h4 className="font-merriweather font-bold text-xl text-white">{leader.name}</h4>
                            <p className="text-white/70 text-sm mt-1">{leader.title}</p>
                          </div>

                          {/* Info Section */}
                          <div className="flex-1 space-y-6">
                            {/* Specialty */}
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-white/10 flex items-center justify-center shrink-0">
                                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-white/50 text-xs uppercase tracking-wider">Specialty</p>
                                <p className="text-white text-sm mt-0.5">{leader.specialty}</p>
                              </div>
                            </div>

                            {/* Experience */}
                            <div className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-white/10 flex items-center justify-center shrink-0">
                                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-white/50 text-xs uppercase tracking-wider">Experience</p>
                                <p className="text-white text-sm mt-0.5">{leader.experience}</p>
                              </div>
                            </div>

                            {/* Hospital - Only show if exists */}
                            {leader.hospital && (
                              <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-white/10 flex items-center justify-center shrink-0">
                                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                  </svg>
                                </div>
                                <div className="flex-1">
                                  <p className="text-white/50 text-xs uppercase tracking-wider">Hospital</p>
                                  <p className="text-white text-sm mt-0.5">{leader.hospital}</p>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Contact Section - Only show if email or linkedin exists */}
                          {(leader.email || leader.linkedin) && (
                            <div className="pt-4 mt-4 border-t border-white/10">
                              <div className="flex justify-center gap-3">
                                {leader.email && (
                                  <a 
                                    href={`mailto:${leader.email}`}
                                    className="w-7 h-7 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                  >
                                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                  </a>
                                )}
                                {leader.linkedin && (
                                  <a 
                                    href={leader.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-7 h-7 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                                  >
                                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                  </a>
                                )}
                              </div>
                            </div>
                          )}
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

      <style jsx>{`
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .animate-drawLine {
          animation: drawLine 1.5s ease-out forwards;
        }

        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Partners;