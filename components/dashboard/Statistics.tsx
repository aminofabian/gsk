"use client";

import { motion } from "framer-motion";
import { FaMedal, FaCalendarCheck, FaCertificate, FaFileAlt } from "react-icons/fa";
import { IconType } from "react-icons";

interface Stat {
  icon: IconType;
  label: string;
  value: string;
  description: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  progressValue: number;
}

const stats: Stat[] = [
  {
    icon: FaMedal,
    label: "CPD Points",
    value: "45",
    description: "This Year",
    color: "from-blue-500 to-blue-600",
    gradientFrom: "from-blue-400",
    gradientTo: "to-blue-600",
    progressValue: 75, // 45 out of 60 points (75%)
  },
  {
    icon: FaCalendarCheck,
    label: "Events Attended",
    value: "12",
    description: "Last 12 months",
    color: "from-green-500 to-green-600",
    gradientFrom: "from-green-400",
    gradientTo: "to-green-600",
    progressValue: 60, // 12 out of 20 events (60%)
  },
  {
    icon: FaCertificate,
    label: "Certificates",
    value: "8",
    description: "Total Earned",
    color: "from-purple-500 to-purple-600",
    gradientFrom: "from-purple-400",
    gradientTo: "to-purple-600",
    progressValue: 80, // 8 out of 10 certificates (80%)
  },
  {
    icon: FaFileAlt,
    label: "Documents",
    value: "15",
    description: "Submitted",
    color: "from-orange-500 to-orange-600",
    gradientFrom: "from-orange-400",
    gradientTo: "to-orange-600",
    progressValue: 100, // All documents submitted (100%)
  },
];

export default function Statistics() {
  return (
    <section>
      <h2 className="text-xl font-display font-bold text-gray-900 mb-6">Your Progress</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-white p-6  shadow-sm hover:shadow-lg transition-all group relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_rgb(0,0,0)_1px,_transparent_0)] [background-size:16px_16px]" />

            {/* Icon and Value Row */}
            <div className="flex items-start justify-between mb-3">
              {/* Icon Container */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className={`p-3 bg-gradient-to-br ${stat.gradientFrom} ${stat.gradientTo}  text-white shadow-lg`}
              >
                <stat.icon className="text-xl" />
              </motion.div>

              {/* Value */}
              <div className="text-right">
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transform transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            </div>

            {/* Label */}
            <div className="text-sm font-medium text-gray-900 mb-2">{stat.label}</div>

            {/* Progress Bar Container */}
            <div className="relative h-2 bg-gray-100  overflow-hidden">
              {/* Progress Bar Background */}
              <div className="absolute inset-0 bg-gray-50" />

              {/* Animated Progress Bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${stat.progressValue}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`absolute h-full bg-gradient-to-r ${stat.gradientFrom} ${stat.gradientTo} `}
              />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>

            {/* Progress Percentage */}
            <div className="mt-1 text-xs text-right text-gray-500">
              {stat.progressValue}% Complete
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
} 