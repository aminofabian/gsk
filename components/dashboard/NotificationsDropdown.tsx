"use client";

import { motion } from "framer-motion";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
}

interface NotificationsDropdownProps {
  notifications: Notification[];
}

export default function NotificationsDropdown({ notifications }: NotificationsDropdownProps) {
  return (
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
  );
} 