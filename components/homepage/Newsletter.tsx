import React from 'react';

const Newsletter = () => {
  return (
    <div className="relative w-full h-[200px] bg-[#00B3B0] overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center px-8">
        {/* Left Content */}
        <div className="text-white space-y-2 max-w-[300px]">
          <div className="space-y-1">
            <p className="text-sm">JOIN OUR</p>
            <h2 className="text-2xl font-bold tracking-wider">NEWSLETTER</h2>
          </div>
          <p className="text-xs">
            Unlock a World of Knowledge and Stay Updated with Our Exclusive Content
          </p>
        </div>

        {/* Right Content - Website Launch Text */}
        <div className="absolute top-4 right-4 text-white text-sm">
          Gastro Website Launch
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-4 right-4 flex gap-3">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/>
          </svg>
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url("/city-skyline.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Curved Shape */}
      <div 
        className="absolute bottom-0 left-0 w-[40%] h-full bg-white"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)'
        }}
      />
    </div>
  );
};

export default Newsletter; 