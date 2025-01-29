"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/homepage/Logo";
import {
  FaUserMd,
  FaCalendarAlt,
  FaCertificate,
  FaFileAlt,
  FaUsers,
  FaNewspaper,
  FaSignOutAlt,
  FaGraduationCap,
  FaHandHoldingMedical,
  FaHospital,
  FaStethoscope,
  FaMicroscope
} from "react-icons/fa";
import { MdPayments } from "react-icons/md";

// Stats items
const statsItems = [
  { 
    label: "CPD Points", 
    value: "150/200", 
    icon: "🎯",
    description: "Annual Target"
  },
  { 
    label: "Member Status", 
    value: "Fellow", 
    icon: "🏅",
    description: "FRACP"
  },
  { 
    label: "Research", 
    value: "12", 
    icon: "🔬",
    description: "Publications"
  },
  { 
    label: "Procedures", 
    value: "523", 
    icon: "⚕️",
    description: "This Year"
  },
];

// Menu items grouped by category
const menuGroups = [
  {
    title: "Professional",
    items: [
      { icon: FaCalendarAlt, label: "CME Events", href: "/dashboard/events" },
      { icon: FaStethoscope, label: "Clinical Updates", href: "/dashboard/updates" },
      { icon: FaMicroscope, label: "Research Hub", href: "/dashboard/research" },
      { icon: FaGraduationCap, label: "Resources", href: "/dashboard/resources" },
    ]
  },
  {
    title: "Membership",
    items: [
      { icon: FaCertificate, label: "Certificates", href: "/dashboard/certificates" },
      { icon: MdPayments, label: "Payments", href: "/dashboard/payments" },
      { icon: FaFileAlt, label: "Documents", href: "/dashboard/documents" },
      { icon: FaHospital, label: "Facilities", href: "/dashboard/facilities" },
    ]
  }
];

const bottomMenuItems = [
  { icon: FaUserMd, label: "Profile", href: "/dashboard/profile" },
  { icon: FaSignOutAlt, label: "Sign Out", href: "/auth/signout" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div 
      className={`h-[98vh] my-2 ml-2 bg-[#004488]  border border-white/10 transition-all duration-300 overflow-hidden ${
        isCollapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Content Container */}
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="scale-75 origin-left">
            <Logo variant="light" />
          </div>
        </div>

        {/* Main Scroll Container */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Stats Section */}
          <div className="p-4 border-b border-white/10">
            <h2 className="text-xs font-semibold text-white/60 mb-3 px-2 tracking-wider">PROFESSIONAL STATS</h2>
            <div className="grid grid-cols-2 gap-2">
              {statsItems.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-[#003366]/50 hover:bg-[#003366] transition-all duration-200  p-2.5 group cursor-default"
                >
                  <div className="flex items-center gap-1.5 text-white/60 mb-1">
                    <span className="text-base">{stat.icon}</span>
                    <span className="text-[10px] uppercase tracking-wider font-medium">{stat.label}</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white font-bold text-sm leading-tight">{stat.value}</div>
                    <div className="text-white/50 text-[10px] group-hover:text-white/70 transition-colors">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Groups */}
          {menuGroups.map((group) => (
            <div key={group.title} className="p-4 border-b border-white/10">
              <h2 className="text-sm font-semibold text-white/60 mb-4 px-2">{group.title.toUpperCase()}</h2>
              <nav className="space-y-1.5">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5  transition-all duration-200 ${
                      pathname === item.href
                        ? "bg-[#003366] text-white shadow-sm"
                        : "text-white/60 hover:text-white hover:bg-[#003366]/50"
                    }`}
                  >
                    <item.icon className={`text-xl transition-transform duration-200 ${
                      pathname === item.href ? "scale-110" : ""
                    }`} />
                    <span className="font-medium text-sm">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Account Section - Fixed at bottom */}
        <div className="p-4 border-t border-white/10 bg-[#004488]">
          <h2 className="text-sm font-semibold text-white/60 mb-4 px-2">ACCOUNT</h2>
          <nav className="space-y-1.5">
            {bottomMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2.5  text-white/60 hover:text-white hover:bg-[#003366]/50 transition-all duration-200"
              >
                <item.icon className="text-xl" />
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
} 