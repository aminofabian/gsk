"use client"

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Member Directory",
      description: "Access our network of gastroenterology professionals",
      link: "/members",
      color: "bg-[#003366]"
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: "Certification",
      description: "Professional certification and accreditation",
      link: "/certification",
      color: "bg-[#003366]"
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
      title: "Clinical Guidelines",
      description: "Latest gastroenterology practice guidelines",
      link: "/guidelines",
      color: "bg-[#003366]"
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
      title: "Research Access",
      description: "Member-exclusive research database",
      link: "/research",
      color: "bg-[#003366]"
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
      title: "CPD Points",
      description: "Track your continuing professional development",
      link: "/cpd",
      color: "bg-[#003366]"
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Join GSK",
      description: "Become a member today",
      link: "/join",
      color: "bg-[#003366]"
    }
  ];

  const memberBenefits = [
    {
      title: "Professional Recognition",
      description: "Get listed in our verified member directory",
      icon: (
        <svg className="w-5 h-5 text-[#40e0d0]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Exclusive Resources",
      description: "Access member-only clinical resources",
      icon: (
        <svg className="w-5 h-5 text-[#40e0d0]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "CPD Tracking",
      description: "Automated CPD points tracking system",
      icon: (
        <svg className="w-5 h-5 text-[#40e0d0]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const upcomingEvents = [
    {
      date: "23 FEB",
      title: "Advanced Endoscopy Workshop",
      location: "Nairobi International Convention Centre",
      type: "CME",
      points: "6 CPD Points",
      time: "9:00 AM - 5:00 PM"
    },
    {
      date: "15 MAR",
      title: "GI Pathology Masterclass",
      location: "Virtual Event",
      type: "Workshop",
      points: "4 CPD Points",
      time: "2:00 PM - 4:00 PM"
    },
    {
      date: "05 APR",
      title: "GSK Annual Conference",
      location: "Kenyatta University",
      type: "Conference",
      points: "12 CPD Points",
      time: "10:00 AM - 3:00 PM"
    }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero Section with straight edges */}
      <div className="relative bg-white pt-20">
        {/* Background with straight edges */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#003366"/>
          </svg>
        </div>

        {/* Header Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <div className="text-center">
            <span className="inline-block px-6 py-2 bg-[#003366]/5 text-sm tracking-[0.2em] text-[#003366] mb-6">
              ADVANCING HEALTHCARE
            </span>
            <h2 className="text-5xl font-serif font-light text-[#003366] mb-6">
              <span className="block mb-2">Transforming Gastroenterology</span>
              <span className="relative inline-block">
                in Kenya
                <div className="absolute -bottom-3 left-0 w-full h-0.5 bg-[#003366]"></div>
              </span>
            </h2>
            <p className="text-[#003366]/70 text-lg max-w-2xl mx-auto leading-relaxed mb-12 px-4">
              Join a network of leading specialists and shape the future of 
              <span className="block mt-1">gastroenterology care in Kenya.</span>
            </p>

            {/* Three Images Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16 mb-24 px-6">
              <div className="relative h-72 overflow-hidden shadow-lg">
                <img 
                  src="/images/hero/endoscopy.jpg" 
                  alt="Advanced Endoscopy"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#003366]/80 p-4">
                  <p className="text-white text-base font-medium">Advanced Endoscopy</p>
                </div>
              </div>

              <div className="relative h-72 overflow-hidden shadow-lg">
                <img 
                  src="/images/hero/research.jpg" 
                  alt="Clinical Research"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#003366]/80 p-4">
                  <p className="text-white text-base font-medium">Clinical Research</p>
                </div>
              </div>

              <div className="relative h-72 overflow-hidden shadow-lg">
                <img 
                  src="/images/hero/training.jpg" 
                  alt="Professional Training"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#003366]/80 p-4">
                  <p className="text-white text-base font-medium">Professional Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Straight divider */}
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-36 bg-[#003366]" />
      </div>

      {/* Main Features Section */}
      <div className="relative bg-[#003366] pt-20 pb-32">
        {/* Features Grid */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} 
                   className="group relative bg-white/10 p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 bg-white/10 p-3 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-white/90 font-medium mb-4">{feature.title}</h3>
                  <p className="text-blue-100/70 leading-relaxed mb-6">{feature.description}</p>
                  <a
                    href={feature.link}
                    className="inline-flex items-center text-white group-hover:text-white/90 transition-colors"
                  >
                    <span className="relative">
                      Learn More
                      <div className="absolute bottom-0 left-0 w-0 h-px bg-white/40 group-hover:w-full transition-all duration-300"></div>
                    </span>
                    <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Straight divider to white section */}
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-10 bg-white" />
      </div>

      {/* Benefits and Events Section */}
      <div className="relative bg-white pt-20 pb-32">
        {/* Straight shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#003366]/5"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#003366]/5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#003366] transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              <div className="relative bg-[#003366] p-10">
                <h2 className="text-3xl font-serif text-white/90 font-medium mb-10 flex items-center">
                  Why Join GSK?
                  <span className="ml-4 text-sm px-4 py-1.5 bg-white/10 text-white/70">
                    Premium Benefits
                  </span>
                </h2>
                <div className="space-y-8">
                  {memberBenefits.map((benefit, index) => (
                    <div key={index} className="group/item flex items-start gap-6">
                      <div className="relative">
                        <div className="w-12 h-12 bg-white/20 flex items-center justify-center transform group-hover/item:scale-110 transition-transform">
                          {benefit.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-serif text-white/90 font-medium mb-2">{benefit.title}</h3>
                        <p className="text-blue-100/70">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Events Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#003366] transform -translate-x-1 -translate-y-1 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform"></div>
              <div className="relative bg-[#003366] p-10">
                <h2 className="text-3xl font-serif text-white/90 font-medium mb-10 flex items-center">
                  Upcoming Events
                  <span className="ml-4 text-sm px-4 py-1.5 bg-white/10 text-white/70">
                    Earn CPD Points
                  </span>
                </h2>
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="group/event relative">
                      <div className="absolute inset-0 bg-white/5 transform group-hover/event:scale-[1.02] transition-transform"></div>
                      <div className="relative p-6 flex gap-6">
                        <div className="w-20">
                          <div className="p-3 bg-white/10 text-center">
                            <span className="block text-sm text-white/60">{event.date.split(' ')[0]}</span>
                            <span className="block text-2xl text-white/90 font-medium">{event.date.split(' ')[1]}</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-serif text-white/90 font-medium mb-2">{event.title}</h3>
                          <p className="text-blue-100/70 mb-3">{event.location}</p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-white/10 text-white/70 text-sm">
                              {event.type}
                            </span>
                            <span className="px-3 py-1 bg-white/10 text-white/70 text-sm">
                              {event.points}
                            </span>
                            <span className="px-3 py-1 bg-white/10 text-white/70 text-sm flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {event.time}
                            </span>
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
      </div>
    </section>
  );
};

export default Features; 