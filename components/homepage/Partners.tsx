"use client";
import { useState, useEffect } from 'react';
import PartnerSlider from './PartnerSlider';

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
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We collaborate with leading organizations to advance research and innovation in healthcare.
        </p>
      </div>
      <PartnerSlider />
    </div>
  );
};

export default Partners;