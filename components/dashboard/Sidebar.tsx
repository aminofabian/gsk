"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "@/components/homepage/Logo";
import {
  FaHome,
  FaUserMd,
  FaCalendarAlt,
  FaBook,
  FaCertificate,
  FaUsers,
  FaNewspaper,
  FaCog,
  FaSignOutAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { IoDocuments } from "react-icons/io5";

const menuItems = [
  { icon: FaHome, label: "Dashboard", href: "/dashboard" },
  { icon: FaUserMd, label: "My Profile", href: "/dashboard/profile" },
  { icon: FaCalendarAlt, label: "Events & CME", href: "/dashboard/events" },
  { icon: FaBook, label: "Resources", href: "/dashboard/resources" },
  { icon: FaCertificate, label: "Certificates", href: "/dashboard/certificates" },
  { icon: MdPayments, label: "Payments", href: "/dashboard/payments" },
  { icon: FaUsers, label: "Members Directory", href: "/dashboard/members" },
  { icon: IoDocuments, label: "Documents", href: "/dashboard/documents" },
  { icon: FaNewspaper, label: "News & Updates", href: "/dashboard/news" },
];

const bottomMenuItems = [
  { icon: FaCog, label: "Settings", href: "/dashboard/settings" },
  { icon: FaSignOutAlt, label: "Sign Out", href: "/auth/signout" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div 
      className={`sticky top-0 h-screen bg-[#003366] text-white transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 bg-[#003366] text-white p-1 rounded-full shadow-lg"
      >
        {isCollapsed ? <FaChevronRight size={16} /> : <FaChevronLeft size={16} />}
      </button>

      {/* Logo */}
      <div className="p-4 mb-8">
        <div className={`transition-all duration-300 ${isCollapsed ? "scale-75" : ""}`}>
          <Logo variant="light" />
        </div>
      </div>

      {/* Main Menu */}
      <nav className="px-2 py-4 h-[calc(100vh-180px)] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? "bg-white/10 text-white" 
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon className={`text-lg ${isCollapsed ? "mr-0" : "mr-3"}`} />
                  {!isCollapsed && (
                    <span className="font-display text-sm">{item.label}</span>
                  )}
                  {isActive && !isCollapsed && (
                    <motion.div
                      className="absolute left-0 w-1 h-8 bg-white rounded-r-full"
                      layoutId="activeTab"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Menu */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="pt-4 border-t border-white/10">
          <ul className="space-y-2">
            {bottomMenuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <item.icon className={`text-lg ${isCollapsed ? "mr-0" : "mr-3"}`} />
                  {!isCollapsed && (
                    <span className="font-display text-sm">{item.label}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 