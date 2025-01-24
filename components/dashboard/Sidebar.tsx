"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
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
import SidebarBackground from "./SidebarBackground";
import SidebarMenuGroup from "./SidebarMenuGroup";
import SidebarMenuItem from "./SidebarMenuItem";

// Grouped menu items
const menuGroups = [
  {
    title: "Main",
    items: [
      { icon: FaHome, label: "Dashboard", href: "/dashboard" },
      { icon: FaUserMd, label: "My Profile", href: "/dashboard/profile" },
    ]
  },
  {
    title: "Professional",
    items: [
      { icon: FaCalendarAlt, label: "Events & CME", href: "/dashboard/events" },
      { icon: FaBook, label: "Resources", href: "/dashboard/resources" },
      { icon: FaCertificate, label: "Certificates", href: "/dashboard/certificates" },
    ]
  },
  {
    title: "Management",
    items: [
      { icon: MdPayments, label: "Payments", href: "/dashboard/payments" },
      { icon: FaUsers, label: "Members Directory", href: "/dashboard/members" },
      { icon: IoDocuments, label: "Documents", href: "/dashboard/documents" },
      { icon: FaNewspaper, label: "News & Updates", href: "/dashboard/news" },
    ]
  }
];

const bottomMenuItems = [
  { icon: FaCog, label: "Settings", href: "/dashboard/settings" },
  { icon: FaSignOutAlt, label: "Sign Out", href: "/auth/signout" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <div 
      className={`sticky top-0 h-screen transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-72"
      }`}
    >
      <SidebarBackground />

      {/* Content Container */}
      <div className="relative h-full flex flex-col">
        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.2, rotate: isCollapsed ? 180 : 0 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-8 bg-white/20 backdrop-blur-md text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30"
        >
          {isCollapsed ? <FaChevronRight size={12} /> : <FaChevronLeft size={12} />}
        </motion.button>

        {/* Logo */}
        <motion.div 
          className="p-6"
          animate={{ 
            width: isCollapsed ? "40px" : "auto",
            opacity: 1 
          }}
        >
          <div className={`transition-all duration-300 ${isCollapsed ? "scale-75" : ""}`}>
            <Logo variant="light" />
          </div>
        </motion.div>

        {/* Main Menu */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <div className="space-y-6">
            {menuGroups.map((group) => (
              <SidebarMenuGroup
                key={group.title}
                title={group.title}
                items={group.items}
                isCollapsed={isCollapsed}
                hoveredItem={hoveredItem}
                currentPath={pathname}
                onHoverStart={(href) => setHoveredItem(href)}
                onHoverEnd={() => setHoveredItem(null)}
              />
            ))}
          </div>
        </nav>

        {/* Bottom Menu */}
        <div className="p-4">
          <div className="pt-4 border-t border-white/10">
            <div className="space-y-2">
              {bottomMenuItems.map((item) => (
                <SidebarMenuItem
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  isActive={pathname === item.href}
                  isCollapsed={isCollapsed}
                  hoveredItem={hoveredItem}
                  onHoverStart={() => setHoveredItem(item.href)}
                  onHoverEnd={() => setHoveredItem(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 