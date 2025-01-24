"use client";

import { motion } from "framer-motion";

export default function UserMenuDropdown() {
  return (
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
  );
} 