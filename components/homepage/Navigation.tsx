"use client";
import React, { useState } from 'react';
import Logo from './Logo';

// Add keyframe animation for marquee
const marqueeStyles = `
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  .animate-marquee {
    animation: marquee 20s linear infinite;
  }
`;

// Add style tag to head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = marqueeStyles;
  document.head.appendChild(style);
}

interface NavItem {
  title: string;
  link: string;
  children?: NavItem[];
}


const NavItem = ({ item }: { item: NavItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a 
        href={item.link}
        className="block px-4 py-2 font-merriweather text-[#003366] hover:text-[#0f5a5e]/80 transition-colors"
      >
        {item.title}
      </a>
      
      {item.children && isOpen && (
        <ul className="absolute left-0 top-[calc(100%-2px)] bg-white shadow-xl min-w-[240px] overflow-hidden border-t-2 border-[#0f5a5e]/30">
          {item.children.map((child, idx) => (
            <li key={idx} className="border-b border-gray-100 last:border-none">
              {child.children ? (
                <div className="relative group/sub">
                  <a 
                    href={child.link}
                    className="block px-6 py-3 uppercase text-[14px] font-merriweather text-gray-700 hover:bg-[#0f5a5e]/5 hover:text-[#003366] transition-colors duration-200 flex justify-between items-center"
                  >
                    {child.title}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <ul className="absolute left-full top-0 bg-white shadow-xl min-w-[240px] hidden group-hover/sub:block border border-gray-100">
                    {child.children.map((subChild, subIdx) => (
                      <li key={subIdx} className="border-b border-gray-100 last:border-none">
                        <a 
                          href={subChild.link}
                          className="block px-6 py-3 uppercase text-[14px] font-merriweather text-gray-700 hover:bg-[#0f5a5e]/5 hover:text-[#003366] transition-colors duration-200"
                        >
                          {subChild.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a 
                  href={child.link}
                  className="block px-6 py-3 uppercase text-[14px] font-merriweather text-gray-700 hover:bg-[#0f5a5e]/5 hover:text-[#003366] transition-colors duration-200"
                >
                  {child.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const MobileMenu = ({ navItems, isOpen, setIsOpen }: { 
  navItems: NavItem[], 
  isOpen: boolean, 
  setIsOpen: (isOpen: boolean) => void 
}) => (
  <div className={`lg:hidden ${isOpen ? 'fixed inset-0 bg-gray-800/50 z-50' : 'hidden'}`}>
    <div className={`fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b flex justify-between items-center">
          <span className="text-lg font-merriweather font-bold text-[#003366]">Menu</span>
          <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500 hover:text-[#0f5a5e] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 py-4">
            {navItems.map((item, index) => (
              <div key={index} className="mb-2">
                <a 
                  href="#" 
                  className="block px-4 py-2 font-merriweather text-[#003366] hover:bg-[#0f5a5e]/5 transition-colors"
                >
                  {item.title}
                </a>
                {item.children && (
                  <div className="ml-4 mt-1 border-l-2 border-[#0f5a5e]/20">
                    {item.children.map((child, childIdx) => (
                      <div key={childIdx}>
                        <a 
                          href="#" 
                          className="block px-4 py-2 font-merriweather text-[#003366] hover:bg-[#0f5a5e]/5 transition-colors"
                        >
                          {child.title}
                        </a>
                        {child.children && (
                          <div className="ml-4 border-l-2 border-[#0f5a5e]/20">
                            {child.children.map((subChild, subIdx) => (
                              <a
                                key={subIdx}
                                href="#" 
                                className="block px-4 py-2 font-merriweather text-[#003366] hover:bg-[#0f5a5e]/5 transition-colors"
                              >
                                {subChild.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t">
          <div className="flex flex-col space-y-2">
            <a href="/login" className="w-full px-4 py-2 text-center text-[14px] font-merriweather font-semibold text-[#003366] border border-[#0f5a5e]/20 hover:bg-[#0f5a5e]/5">
              SIGN IN
            </a>
            <a href="/membership" className="w-full px-4 py-2 text-center text-[14px] font-merriweather font-semibold text-white bg-gradient-to-r from-[#003366] via-[#004080] to-[#0f5a5e] hover:opacity-90">
              JOIN GSK
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HelloBar = () => (
  <div className="bg-[#003366] text-white">
    {/* Announcement Banner */}
    <div className="bg-gradient-to-r from-[#003366] via-[#004080] to-[#0f5a5e]/60 py-1.5 text-center relative overflow-hidden">
      <div className="flex items-center justify-center gap-2">
        <div className="w-1.5 h-1.5 bg-[#0f5a5e]/60 animate-pulse"></div>
        <div className="whitespace-nowrap animate-marquee">
          <span className="font-merriweather text-xs text-white/90">
            Contact Us: +254 704 373746 | secretarygsk@gmail.com | ACS Building, 2nd Floor. Lenana Road, Nairobi, Kenya
            <span className="mx-12">•</span>
            Registration Now Open: 2024 Annual Gastroenterology Conference - Early Bird Rates Available
          </span>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 py-1 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <a href="/donate" className="inline-flex items-center gap-2 px-4 py-1 bg-[#0f5a5e]/80 hover:bg-[#0f5a5e] text-sm font-merriweather text-white transition-all">
          Donate
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </a>
        <a href="/volunteer" className="inline-flex items-center gap-2 px-4 py-1 bg-[#003366] hover:bg-[#0f5a5e]/60 text-sm font-merriweather text-white/90 hover:text-white transition-all">
          Volunteer
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
          </svg>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="/guidelines" className="text-sm font-merriweather text-white/90 hover:text-[#0f5a5e]/80 transition-colors">Clinical Guidelines</a>
        <span className="text-white/50">|</span>
        <a href="/research" className="text-sm font-merriweather text-white/90 hover:text-[#0f5a5e]/80 transition-colors">Research Updates</a>
        <span className="text-white/50">|</span>
        <a href="/cpd" className="text-sm font-merriweather text-white/90 hover:text-[#0f5a5e]/80 transition-colors">CPD Points</a>
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems: NavItem[] = [
    {
      title: 'About Us',
      link: '/about',
      children: [
        { title: 'Mission & Vision', link: '/about/mission' },
        { title: 'Leadership', link: '/about/leadership' }
      ]
    },
    {
      title: 'Education',
      link: '/education',
      children: [
        {
          title: 'Resources',
          link: '/education/resources',
          children: [
            { title: 'Clinical Guidelines', link: '/guidelines' },
            { title: 'Training Programs', link: '/training' },
            { title: 'Research', link: '/research' }
          ]
        }
      ]
    },
    {
      title: 'Events',
      link: '/events',
      children: [
        { title: 'Upcoming Conferences', link: '/conferences' },
        { title: 'Workshops', link: '/workshops' }
      ]
    },
    { title: 'News', link: '/news' },
    { title: 'Membership', link: '/membership' }
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <HelloBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col">
          {/* Top bar with logo */}
          <div className="flex justify-between items-center h-16 sm:h-20 border-b border-gray-100">
            <Logo />
            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex items-center space-x-6">
                <a 
                  href="/login" 
                  className="text-sm font-semibold text-[#003366]/80 hover:text-[#0f5a5e]/70 transition-colors duration-200 uppercase"
                >
                  Sign In
                </a>
                <a 
                  href="/register" 
                  className="px-5 py-2 text-sm font-semibold text-white bg-[#003366] hover:bg-gradient-to-r hover:from-[#003366] hover:to-[#0f5a5e]/80 transition-all duration-200 uppercase tracking-wider"
                >
                  Join GSK
                </a>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-[#003366]/80 hover:text-[#0f5a5e]/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Navigation bar - desktop */}
          <nav className="hidden lg:flex justify-between items-center">
            <ul className="flex -mx-2 items-center">
              {navItems.map((item, index) => (
                <NavItem key={index} item={item} />
              ))}
            </ul>
            <div className="flex items-center h-12">
              <button className="p-2 text-[#003366]/70 hover:text-[#0f5a5e] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu 
        navItems={navItems} 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen}
      />
    </header>
  );
};

export default Navigation; 