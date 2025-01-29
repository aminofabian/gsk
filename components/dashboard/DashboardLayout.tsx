"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import { FaBell, FaUserMd } from "react-icons/fa";
import { motion } from "framer-motion";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={`flex h-screen bg-gray-50 ${outfit.className}`}>
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Left side */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8  bg-[#003366]/5 flex items-center justify-center">
                <FaUserMd className="text-[#003366]" />
              </div>
              <div>
                <div className="text-gray-900 font-medium">Dr. John Mwangi</div>
                <div className="text-gray-500 text-xs">Gastroenterologist</div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-6">
              {/* Membership Status */}
              <div className="hidden sm:block">
                <div className="text-gray-500 text-xs">Membership Status</div>
                <div className="text-gray-900 text-sm font-medium">Active Member</div>
              </div>

              {/* Notifications */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FaBell className="text-xl" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#003366]  text-xs flex items-center justify-center text-white">2</span>
              </motion.button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-white">
          <div className="p-6 max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        {/* Bottom Navigation - Visible only on mobile */}
        <BottomNav />
      </div>
    </div>
  );
} 