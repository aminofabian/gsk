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
  { label: "CPD Points", value: "150", icon: "🎯" },
  { label: "Membership", value: "Active", icon: "✅" },
  { label: "Publications", value: "5", icon: "📚" },
  { label: "Events", value: "2", icon: "📅" },
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
      className={`h-screen bg-[#004488] border-r border-white/10 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Content Container */}
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-white/10">
          <div className="scale-75 origin-left">
            <Logo variant="light" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="p-4 border-b border-white/10">
          <h2 className="text-sm font-semibold text-white/60 mb-4">OVERVIEW</h2>
          <div className="grid grid-cols-2 gap-4">
            {statsItems.map((stat, index) => (
              <div key={index} className="bg-[#003366] rounded-lg p-3">
                <div className="flex items-center gap-2 text-white/60 text-sm mb-1">
                  <span>{stat.icon}</span>
                  <span>{stat.label}</span>
                </div>
                <div className="text-white font-medium">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Groups */}
        {menuGroups.map((group) => (
          <div key={group.title} className="p-4 border-b border-white/10">
            <h2 className="text-sm font-semibold text-white/60 mb-4">{group.title.toUpperCase()}</h2>
            <nav className="space-y-2">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-[#003366] text-white"
                      : "text-white/60 hover:text-white hover:bg-[#003366]"
                  }`}
                >
                  <item.icon className="text-xl" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        ))}

        {/* Account Section */}
        <div className="mt-auto p-4 border-t border-white/10">
          <h2 className="text-sm font-semibold text-white/60 mb-4">ACCOUNT</h2>
          <nav className="space-y-2">
            {bottomMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-[#003366] transition-colors"
              >
                <item.icon className="text-xl" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
} 