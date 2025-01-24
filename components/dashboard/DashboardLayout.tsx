"use client";

import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import { FaBell, FaSearch, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifications = [
    { id: 1, title: "New Event Registration", message: "Annual Conference registration is now open", time: "2 mins ago" },
    { id: 2, title: "Payment Reminder", message: "Your membership renewal is due in 5 days", time: "1 hour ago" },
    { id: 3, title: "New Resource Available", message: "Latest guidelines have been published", time: "2 hours ago" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="max-w-[2000px] mx-auto">
            <div className="flex items-center justify-between px-4 sm:px-6 py-4">
              {/* Left Section */}
              <div className="flex items-center gap-6">
                <h1 className="text-xl sm:text-2xl font-display font-bold text-gray-900">
                  Welcome back, <span className="text-[#003366]">Dr. John</span>
                </h1>
              </div>

              {/* Search Bar - Hidden on mobile */}
              <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
                <div className="w-full relative">
                  <input
                    type="text"
                    placeholder="Search resources, members, events..."
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] text-sm transition-colors"
                  />
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-3 sm:gap-6">
                {/* Notifications */}
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 text-gray-600 hover:text-[#003366] transition-colors"
                  >
                    <FaBell className="text-xl" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                  </motion.button>

                  {/* Notifications Dropdown */}
                  <AnimatePresence>
                    {showNotifications && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                      >
                        <div className="px-4 py-2 border-b border-gray-100">
                          <h3 className="font-display font-bold text-gray-900">Notifications</h3>
                        </div>
                        <div className="max-h-[300px] overflow-y-auto">
                          {notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className="px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              <div className="font-medium text-sm text-gray-900">{notification.title}</div>
                              <div className="text-sm text-gray-500 mt-0.5">{notification.message}</div>
                              <div className="text-xs text-gray-400 mt-1">{notification.time}</div>
                            </div>
                          ))}
                        </div>
                        <div className="px-4 py-2 border-t border-gray-100">
                          <button className="text-sm text-[#003366] hover:text-[#004488] font-medium">
                            View All Notifications
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* User Menu */}
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-3 hover:bg-gray-50 rounded-lg p-1 pr-2 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#003366] to-[#004488] flex items-center justify-center text-white font-medium shadow-sm">
                      JD
                    </div>
                    <div className="hidden sm:block text-left">
                      <div className="text-sm font-medium text-gray-900">Dr. John Doe</div>
                      <div className="text-xs text-gray-500">Gastroenterologist</div>
                    </div>
                    <FaChevronDown className="hidden sm:block text-gray-400 text-xs" />
                  </button>

                  {/* User Dropdown */}
                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                      >
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                          View Profile
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                          Account Settings
                        </button>
                        <div className="border-t border-gray-100 my-1"></div>
                        <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors">
                          Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Mobile Search - Only visible on mobile */}
            <div className="px-4 pb-4 lg:hidden">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] text-sm transition-colors"
                />
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="max-w-[2000px] mx-auto p-4 sm:p-6 pb-24 lg:pb-6">
          {children}
        </main>

        {/* Bottom Navigation - Visible only on mobile */}
        <BottomNav />
      </div>
    </div>
  );
} 