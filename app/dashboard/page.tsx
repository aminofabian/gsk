"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaFileAlt, FaGraduationCap, FaStethoscope } from "react-icons/fa";

const quickLinks = [
  {
    title: "Upcoming CME",
    description: "View upcoming events",
    icon: FaCalendarAlt,
    href: "/dashboard/events",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "Clinical Resources",
    description: "Access medical resources",
    icon: FaStethoscope,
    href: "/dashboard/resources",
    gradient: "from-emerald-500 to-teal-400"
  },
  {
    title: "Research Papers",
    description: "Latest publications",
    icon: FaFileAlt,
    href: "/dashboard/research",
    gradient: "from-purple-500 to-indigo-400"
  },
  {
    title: "Learning Hub",
    description: "Educational content",
    icon: FaGraduationCap,
    href: "/dashboard/learning",
    gradient: "from-orange-500 to-pink-400"
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
      <div className="relative rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-[#003366] to-[#004488]">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="relative p-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back, Dr. John</h1>
          <p className="text-white/80 mb-4">Stay updated with the latest in gastroenterology</p>
        </div>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickLinks.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={link.href}>
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${link.gradient} hover:shadow-lg transition-all duration-300 h-full`}>
                <link.icon className="text-white text-2xl mb-4" />
                <h3 className="text-white font-bold mb-2">{link.title}</h3>
                <p className="text-white/80 text-sm">{link.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Recent Updates */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-6">Recent Updates</h2>
        <div className="space-y-4">
          {recentUpdates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div>
                <h3 className="text-white font-medium">{update.title}</h3>
                <p className="text-white/60 text-sm">{update.date}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                {update.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
} 