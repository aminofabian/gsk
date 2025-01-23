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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Exclusive Resources",
      description: "Access member-only clinical resources",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "CPD Tracking",
      description: "Automated CPD points tracking system",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
    <section className="relative">
      {/* Top curved section with icons */}
      <div className="relative bg-gradient-to-br from-[#003366] via-[#004080] to-[#002244]">
        {/* Decorative medical symbols background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20h-8v10H12v8h10v10h8V38h10v-8H30V20z' fill='%23FFFFFF' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* SVG Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[60px]"
            style={{ transform: 'rotate(180deg)' }}
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>

        {/* Icons Container */}
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Empowering Gastroenterology Excellence
            </h2>
            <p className="text-lg font-serif text-blue-100 max-w-2xl mx-auto">
              Access resources, connect with peers, and advance your professional development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`${feature.color} rounded-xl p-6 text-white`}>
                {feature.icon}
                <h3 className="text-xl font-serif font-bold mt-4 mb-2">{feature.title}</h3>
                <p className="font-serif text-blue-100 mb-4">{feature.description}</p>
                <a
                  href={feature.link}
                  className="inline-flex items-center px-6 py-3 bg-white text-[#003366] rounded-lg font-serif font-semibold hover:bg-blue-50 transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Member Benefits Card */}
            <div className="bg-gradient-to-br from-[#003366] to-[#004080] rounded-xl shadow-xl overflow-hidden text-white">
              <div className="p-8">
                <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                  <span>Why Join GSK?</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-100 text-sm font-serif rounded-full">
                    Premium Benefits
                  </span>
                </h2>
                <div className="space-y-6">
                  {memberBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center text-blue-100">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-lg">{benefit.title}</h3>
                        <p className="font-serif text-blue-100/80">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a 
                    href="/join"
                    className="inline-flex items-center px-6 py-3 bg-white text-[#003366] rounded-lg font-serif font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Join Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Events Card */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8">
                <h2 className="text-2xl font-serif font-bold text-[#003366] mb-6 flex items-center gap-3">
                  <span>Upcoming CPD Events</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-serif rounded-full">
                    Earn Points
                  </span>
                </h2>
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-16 h-16 bg-[#003366]/10 rounded-lg flex flex-col items-center justify-center text-[#003366] font-serif font-bold">
                        <span className="text-sm">{event.date.split(' ')[0]}</span>
                        <span className="text-lg">{event.date.split(' ')[1]}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif font-semibold text-gray-900">{event.title}</h3>
                        <p className="text-sm font-serif text-gray-600 mt-1">{event.location}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs font-serif px-2 py-1 bg-[#003366]/10 text-[#003366] rounded-full">
                            {event.type}
                          </span>
                          <span className="text-xs font-serif px-2 py-1 bg-green-100 text-green-700 rounded-full">
                            {event.points}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a 
                    href="/events" 
                    className="text-[#003366] font-serif font-medium hover:text-blue-800 transition-colors flex items-center gap-2"
                  >
                    View All Events
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
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