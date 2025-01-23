import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Logo = () => (
  <div className="relative w-20 h-20 flex-shrink-0">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#003366] to-[#002244] p-[3px] shadow-lg">
      <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
        <div className="relative flex items-center justify-center w-full h-full">
          <div className="absolute w-20 h-20 border-[4px] border-[#003366] rounded-full opacity-90"></div>
          <div className="absolute w-20 h-20 border-[4px] border-[#003366] rounded-full transform rotate-45 opacity-80"></div>
          <div className="absolute w-20 h-20 border-[4px] border-[#002244] rounded-full transform -rotate-45 opacity-70"></div>
          <div className="relative z-10 bg-white rounded-full p-2">
            <span className="text-2xl font-black text-[#003366] tracking-wider">GSK</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface AuthLoaderProps {
  onAuthenticated: () => void;
}

const AuthLoader = ({ onAuthenticated }: AuthLoaderProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '4487') {
      localStorage.setItem('gsk-auth', 'true');
      onAuthenticated();
    } else {
      setError('Incorrect password');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-[#003366] flex items-center justify-center z-50"
    >
      <div className="w-full max-w-md mx-auto p-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          <Logo />
          
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-serif font-bold text-white">
              Gastroenterology Society of Kenya
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
              <p className="text-yellow-400 font-serif">Website Under Development</p>
            </div>
          </div>

          <div className="w-full max-w-sm">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-serif text-white/90">
                    Enter Password to View Website
                  </label>
                  <motion.div
                    animate={{ x: isShaking ? [-10, 10, -10, 10, 0] : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError('');
                      }}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="Enter password"
                    />
                  </motion.div>
                  {error && (
                    <p className="text-red-400 text-sm mt-2">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-white text-[#003366] rounded-lg font-serif font-semibold hover:bg-blue-50 transition-colors"
                >
                  Access Website
                </button>
              </form>
            </div>
          </div>

          <p className="text-white/60 text-sm text-center max-w-xs font-serif">
            This website is currently under development and only accessible to authorized personnel.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthLoader; 