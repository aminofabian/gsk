"use client";
import React, { useState } from 'react';

interface NavItem {
  title: string;
  link: string;
  children?: NavItem[];
}

const Logo = () => (
  <div className="flex items-center gap-4 sm:gap-6">
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 p-[4px] shadow-lg">
        <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
          <div className="relative flex items-center justify-center w-full h-full">
            <div className="absolute w-16 h-16 border-[5px] border-blue-600 rounded-full opacity-90"></div>
            <div className="absolute w-16 h-16 border-[5px] border-blue-600 rounded-full transform rotate-45 opacity-80"></div>
            <div className="absolute w-16 h-16 border-[5px] border-blue-500 rounded-full transform -rotate-45 opacity-70"></div>
            <div className="relative z-10 bg-white rounded-full p-2">
              <span className="text-2xl font-black text-blue-700 tracking-wider">GSK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-lg sm:text-2xl font-bold text-blue-900 leading-tight tracking-tight">
        Gastroenterology Society
      </span>
      <span className="text-lg sm:text-2xl font-bold text-blue-900 leading-tight tracking-tight">
        of Kenya
      </span>
      <span className="text-xs sm:text-sm font-medium text-blue-600 mt-1">
        Advancing Digestive Health Care
      </span>
    </div>
  </div>
);

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
        className="uppercase text-[14px] font-bold tracking-wider text-gray-700 hover:text-blue-600 px-6 py-4 inline-block transition-colors duration-200 border-b-2 border-transparent hover:border-blue-600"
      >
        {item.title}
      </a>
      
      {item.children && isOpen && (
        <ul className="absolute left-0 top-[calc(100%-2px)] bg-white shadow-xl min-w-[240px] rounded-b-lg overflow-hidden border-t-2 border-blue-600">
          {item.children.map((child, idx) => (
            <li key={idx} className="border-b border-gray-100 last:border-none">
              {child.children ? (
                <div className="relative group/sub">
                  <a 
                    href={child.link}
                    className="block px-6 py-3 uppercase text-[14px] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 flex justify-between items-center"
                  >
                    {child.title}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <ul className="absolute left-full top-0 bg-white shadow-xl min-w-[240px] rounded-r-lg hidden group-hover/sub:block border border-gray-100">
                    {child.children.map((subChild, subIdx) => (
                      <li key={subIdx} className="border-b border-gray-100 last:border-none">
                        <a 
                          href={subChild.link}
                          className="block px-6 py-3 uppercase text-[14px] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
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
                  className="block px-6 py-3 uppercase text-[14px] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
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
          <span className="text-lg font-bold text-blue-900">Menu</span>
          <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 py-4">
            {navItems.map((item, index) => (
              <div key={index} className="mb-2">
                <a href={item.link} className="block px-4 py-2 text-[14px] font-semibold text-gray-700 uppercase hover:bg-blue-50 rounded-lg">
                  {item.title}
                </a>
                {item.children && (
                  <div className="ml-4 mt-1 border-l-2 border-gray-100">
                    {item.children.map((child, childIdx) => (
                      <div key={childIdx}>
                        <a href={child.link} className="block px-4 py-2 text-[14px] text-gray-600 hover:text-blue-600">
                          {child.title}
                        </a>
                        {child.children && (
                          <div className="ml-4 border-l-2 border-gray-100">
                            {child.children.map((subChild, subIdx) => (
                              <a
                                key={subIdx}
                                href={subChild.link}
                                className="block px-4 py-2 text-[14px] text-gray-600 hover:text-blue-600"
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
            <a href="/login" className="w-full px-4 py-2 text-center text-[14px] font-semibold text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
              SIGN IN
            </a>
            <a href="/register" className="w-full px-4 py-2 text-center text-[14px] font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
              JOIN GSK
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HelloBar = () => (
  <div className="bg-blue-900 text-white py-1.5">
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
      <div className="flex items-center space-x-4">
        <span className="text-blue-100 hidden sm:inline">Welcome to GSK</span>
        <span className="h-4 w-px bg-blue-700 hidden sm:inline"></span>
        <a href="tel:+254700000000" className="text-blue-100 hover:text-white flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="hidden sm:inline">+254 700 000 000</span>
        </a>
        <a href="mailto:info@gsk.or.ke" className="text-blue-100 hover:text-white items-center gap-1 hidden sm:flex">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          info@gsk.or.ke
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="/contact" className="text-blue-100 hover:text-white hidden sm:inline">Contact</a>
        <span className="h-4 w-px bg-blue-700 hidden sm:inline"></span>
        <a href="/faq" className="text-blue-100 hover:text-white hidden sm:inline">FAQ</a>
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
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <HelloBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col">
          {/* Top bar with logo */}
          <div className="flex justify-between items-center h-20 sm:h-24 border-b border-gray-100">
            <Logo />
            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex items-center space-x-6">
                <a 
                  href="/login" 
                  className="text-[14px] font-semibold text-gray-600 hover:text-blue-600 transition-colors duration-200 uppercase"
                >
                  Sign In
                </a>
                <a 
                  href="/register" 
                  className="px-6 py-2.5 text-[14px] font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 uppercase tracking-wider"
                >
                  Join GSK
                </a>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
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
            <div className="flex items-center h-14">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
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