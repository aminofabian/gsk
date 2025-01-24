"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBell, FaSearch, FaChevronDown } from "react-icons/fa";
import NotificationsDropdown from "./NotificationsDropdown";
import UserMenuDropdown from "./UserMenuDropdown";

const notifications = [
  { id: 1, title: "New Event Registration", message: "Annual Conference registration is now open", time: "2 mins ago" },
  { id: 2, title: "Payment Reminder", message: "Your membership renewal is due in 5 days", time: "1 hour ago" },
  { id: 3, title: "New Resource Available", message: "Latest guidelines have been published", time: "2 hours ago" },
];

export default function DashboardHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="bg-gradient-to-b from-white to-gray-50/50 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-[2000px] mx-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl font-display font-bold bg-gradient-to-r from-[#003366] to-[#004488] bg-clip-text text-transparent">
                Welcome back,
              </h1>
              <p className="text-sm sm:text-base text-gray-600 font-medium">
                Dr. John Mwangi
              </p>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
            <motion.div 
              className={`w-full relative transition-all duration-200 ${
                isSearchFocused ? "scale-105" : "scale-100"
              }`}
            >
              <div className={`absolute inset-0 bg-white rounded-2xl transition-all duration-200 ${
                isSearchFocused 
                  ? "shadow-lg ring-2 ring-[#003366]/20" 
                  : "shadow-sm ring-1 ring-gray-200/70"
              }`} />
              <input
                type="text"
                placeholder="Search resources, members, events..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-0 bg-transparent relative text-sm focus:ring-0 transition-colors"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <motion.div
                animate={{ scale: isSearchFocused ? 1.1 : 1 }}
                className="absolute left-4 top-1/2 -translate-y-1/2"
              >
                <FaSearch className={`transition-colors duration-200 ${
                  isSearchFocused ? "text-[#003366]" : "text-gray-400"
                }`} />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Notifications */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowNotifications(!showNotifications)}
                className={`relative p-3 rounded-xl transition-all duration-200 ${
                  showNotifications 
                    ? "bg-[#003366] text-white shadow-lg" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <FaBell className="text-lg" />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white" />
              </motion.button>

              {/* Notifications Dropdown */}
              <AnimatePresence>
                {showNotifications && <NotificationsDropdown notifications={notifications} />}
              </AnimatePresence>
            </div>

            {/* User Menu */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowUserMenu(!showUserMenu)}
                className={`flex items-center gap-3 rounded-xl p-1.5 pr-3 transition-all duration-200 ${
                  showUserMenu 
                    ? "bg-gray-100 shadow-inner" 
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#003366] to-[#004488] flex items-center justify-center text-white font-medium shadow-md">
                  JM
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-sm font-medium text-gray-900">Dr. John Mwangi</div>
                  <div className="text-xs text-gray-500">Gastroenterologist</div>
                </div>
                <motion.div
                  animate={{ rotate: showUserMenu ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaChevronDown className="hidden sm:block text-gray-400 text-xs" />
                </motion.div>
              </motion.button>

              {/* User Dropdown */}
              <AnimatePresence>
                {showUserMenu && <UserMenuDropdown />}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Search - Only visible on mobile */}
        <div className="px-4 pb-4 lg:hidden">
          <motion.div 
            className={`relative transition-all duration-200 ${
              isSearchFocused ? "scale-105" : "scale-100"
            }`}
          >
            <div className={`absolute inset-0 bg-white rounded-xl transition-all duration-200 ${
              isSearchFocused 
                ? "shadow-lg ring-2 ring-[#003366]/20" 
                : "shadow-sm ring-1 ring-gray-200/70"
            }`} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border-0 bg-transparent relative text-sm focus:ring-0 transition-colors"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <motion.div
              animate={{ scale: isSearchFocused ? 1.1 : 1 }}
              className="absolute left-4 top-1/2 -translate-y-1/2"
            >
              <FaSearch className={`transition-colors duration-200 ${
                isSearchFocused ? "text-[#003366]" : "text-gray-400"
              }`} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
} 