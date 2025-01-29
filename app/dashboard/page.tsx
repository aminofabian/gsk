"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaFileAlt, FaGraduationCap, FaStethoscope, FaCertificate, FaFile, FaBuilding } from "react-icons/fa";
import { MdPayments } from "react-icons/md";

const quickLinks = [
  {
    title: "Upcoming CME",
    description: "View upcoming events",
    icon: FaCalendarAlt,
    href: "/dashboard/events",
    gradient: "from-[#083c74] to-[#083c74]"
  },
  {
    title: "Clinical Resources",
    description: "Access medical resources",
    icon: FaStethoscope,
    href: "/dashboard/resources",
    gradient: "from-[#083c74] to-[#083c74]"
  },
  {
    title: "Research Papers",
    description: "Latest publications",
    icon: FaFileAlt,
    href: "/dashboard/research",
    gradient: "from-[#083c74] to-[#083c74]"
  },
  {
    title: "Learning Hub",
    description: "Educational content",
    icon: FaGraduationCap,
    href: "/dashboard/learning",
    gradient: "from-[#083c74] to-[#083c74]"
  },
  {
    title: "Certificates",
    description: "View your certificates",
    icon: FaCertificate,
    href: "/dashboard/certificates",
    gradient: "from-[#083c74] to-[#083c74]"
  },
  {
    title: "Payments",
    description: "Manage your payments",
    icon: MdPayments,
    href: "/dashboard/payments",
    gradient: "from-[#083c74] to-[#083c74]"
  },
  {
    title: "Documents",
    description: "Access your documents",
    icon: FaFile,
    href: "/dashboard/documents",
    gradient: "from-[#083c74] to-[#083c74]"
  },
  {
    title: "Facilities",
    description: "View available facilities",
    icon: FaBuilding,
    href: "/dashboard/facilities",
    gradient: "from-[#083c74] to-[#083c74]"
  }
];

const recentUpdates = [
  {
    title: "New Clinical Guidelines Released",
    date: "March 15, 2024",
    type: "Publication"
  },
  {
    title: "Annual Gastroenterology Conference",
    date: "April 5-7, 2024",
    type: "Event"
  },
  {
    title: "Research Grant Applications Open",
    date: "March 20, 2024",
    type: "Opportunity"
  }
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="relative  overflow-hidden mb-8 bg-gradient-to-r from-[#003366] to-[#004488]">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="relative p-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back, Dr. John</h1>
          <p className="text-white/80 mb-4">Stay updated with the latest in gastroenterology</p>
        </div>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {quickLinks.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={link.href}>
              <div className={`p-4 md:p-6  bg-gradient-to-br ${link.gradient} hover:shadow-lg transition-all duration-300 h-full`}>
                <link.icon className="text-white text-xl md:text-2xl mb-3 md:mb-4" />
                <h3 className="text-white font-bold text-sm md:text-base mb-1 md:mb-2">{link.title}</h3>
                <p className="text-white/80 text-xs md:text-sm">{link.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Recent Updates */}
      <div className="bg-white  p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-[#083c74] "></div>
            <div>
              <h2 className="text-xl font-bold text-[#083c74]">Recent Updates</h2>
              <p className="text-sm text-gray-500">Latest medical updates and announcements</p>
            </div>
          </div>
          <Link href="/dashboard/updates" className="text-sm text-[#083c74] hover:text-[#004488] font-medium">
            View All
          </Link>
        </div>
        <div className="space-y-2.5">
          {recentUpdates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-3.5  bg-[#083c74]/5 hover:bg-[#083c74]/10 transition-all duration-200 border border-[#083c74]/10 hover:border-[#083c74]/20 group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2  bg-[#083c74]/10 text-[#083c74]">
                  {update.type === 'Publication' ? <FaFileAlt className="text-sm" /> :
                   update.type === 'Event' ? <FaCalendarAlt className="text-sm" /> :
                   <FaGraduationCap className="text-sm" />}
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-[#083c74] font-medium text-sm group-hover:text-[#004488] transition-colors line-clamp-1">
                    {update.title}
                  </h3>
                  <p className="text-gray-500 text-xs flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#083c74]/30 "></span>
                    {update.date}
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1  text-[10px] font-medium bg-[#083c74]/10 text-[#083c74]">
                {update.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
} 