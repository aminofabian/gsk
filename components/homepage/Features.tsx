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
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Exclusive Resources",
      description: "Access member-only clinical resources",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "CPD Tracking",
      description: "Automated CPD points tracking system",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const upcomingEvents = [
    {
      date: "23",
      month: "FEB",
      title: "Advanced Endoscopy Workshop",
      location: "Nairobi International Convention Centre",
      type: "CME",
      points: "6 CPD Points"
    },
    {
      date: "15",
      month: "MAR",
      title: "GI Pathology Masterclass",
      location: "Virtual Event",
      type: "Workshop",
      points: "4 CPD Points"
    },
    {
      date: "05",
      month: "APR",
      title: "GSK Annual Conference",
      location: "Kenyatta University",
      type: "Conference",
      points: "12 CPD Points"
    }
  ];

  return (
    <div className="flex justify-center gap-8 p-8 bg-white">
      {/* Why Join GSK Card */}
      <div className="w-[500px] bg-[#003366] rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-white">Why Join GSK?</h2>
          <span className="text-sm text-white bg-white/10 px-3 py-1 rounded">Premium Benefits</span>
        </div>
        <div className="space-y-6">
          {memberBenefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-5 h-5">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-white text-lg font-medium">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="/join" className="inline-block mt-8 px-6 py-2 bg-[#40e0d0]/20 text-white rounded hover:bg-[#40e0d0]/30 transition-colors">
          Join Now →
        </a>
      </div>

      {/* Upcoming Events Card */}
      <div className="w-[500px] bg-white rounded-lg p-8 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-[#003366]">Upcoming CPD Events</h2>
          <span className="text-sm text-[#003366] bg-[#003366]/10 px-3 py-1 rounded">Earn Points</span>
        </div>
        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-center w-16">
                <div className="text-2xl font-bold text-[#003366]">{event.date}</div>
                <div className="text-sm text-[#003366]/70">{event.month}</div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#003366]">{event.title}</h3>
                <p className="text-[#003366]/70 text-sm mb-2">{event.location}</p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-[#003366]/10 text-[#003366]/70 rounded">
                    {event.type}
                  </span>
                  <span className="text-xs px-2 py-1 bg-[#003366]/10 text-[#003366]/70 rounded">
                    {event.points}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href="/events" className="inline-block mt-4 text-[#003366] hover:underline">
          View All Events →
        </a>
      </div>
    </div>
  );
};

export default Features; 