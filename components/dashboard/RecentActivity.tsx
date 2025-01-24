"use client";

import { motion } from "framer-motion";
import { FaCertificate, FaFileAlt } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { IconType } from "react-icons";

interface Activity {
  type: string;
  title: string;
  date: string;
  icon: IconType;
  color: string;
}

const recentActivities: Activity[] = [
  {
    type: "certificate",
    title: "CME Certificate Earned",
    date: "2 days ago",
    icon: FaCertificate,
    color: "text-green-500",
  },
  {
    type: "payment",
    title: "Annual Membership Renewed",
    date: "1 week ago",
    icon: MdPayments,
    color: "text-blue-500",
  },
  {
    type: "document",
    title: "Research Paper Submitted",
    date: "2 weeks ago",
    icon: FaFileAlt,
    color: "text-purple-500",
  },
];

export default function RecentActivity() {
  return (
    <section>
      <h2 className="text-xl font-display font-bold text-gray-900 mb-4">Recent Activity</h2>
      <div className="bg-white rounded-xl shadow-sm divide-y">
        {recentActivities.map((activity, index) => (
          <motion.div
            key={index}
            initial={false}
            whileHover={{ backgroundColor: "rgb(249, 250, 251)", x: 2 }}
            className="p-4 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className={`p-2 rounded-lg ${activity.color} bg-opacity-10`}
              >
                <activity.icon className={`text-lg ${activity.color}`} />
              </motion.div>
              <div>
                <div className="font-medium text-gray-900 group-hover:text-[#003366] transition-colors">
                  {activity.title}
                </div>
                <div className="text-sm text-gray-500 mt-0.5">{activity.date}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 