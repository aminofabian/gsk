"use client";

import { motion } from "framer-motion";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { FaCalendarAlt, FaFileAlt, FaUsers, FaCertificate } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import Link from "next/link";

const quickActions = [
  {
    icon: FaCalendarAlt,
    label: "Register for Event",
    href: "/dashboard/events",
    color: "bg-blue-500",
  },
  {
    icon: FaFileAlt,
    label: "Submit Document",
    href: "/dashboard/documents",
    color: "bg-green-500",
  },
  {
    icon: MdPayments,
    label: "Make Payment",
    href: "/dashboard/payments",
    color: "bg-purple-500",
  },
  {
    icon: FaUsers,
    label: "Member Directory",
    href: "/dashboard/members",
    color: "bg-orange-500",
  },
];

const stats = [
  {
    label: "CPD Points",
    value: "45",
    description: "This Year",
    color: "from-blue-500 to-blue-600",
  },
  {
    label: "Events Attended",
    value: "12",
    description: "Last 12 months",
    color: "from-green-500 to-green-600",
  },
  {
    label: "Certificates",
    value: "8",
    description: "Total Earned",
    color: "from-purple-500 to-purple-600",
  },
  {
    label: "Documents",
    value: "15",
    description: "Submitted",
    color: "from-orange-500 to-orange-600",
  },
];

const upcomingEvents = [
  {
    title: "Annual Gastroenterology Conference",
    date: "Mar 15-17, 2024",
    location: "Nairobi, Kenya",
    points: 20,
  },
  {
    title: "Endoscopy Workshop",
    date: "Apr 5, 2024",
    location: "Mombasa, Kenya",
    points: 10,
  },
  {
    title: "Research Symposium",
    date: "Apr 20, 2024",
    location: "Virtual",
    points: 8,
  },
];

const recentActivities = [
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

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Quick Actions */}
        <section>
          <h2 className="text-xl font-display font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link key={action.label} href={action.href}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                    <action.icon className="text-xl" />
                  </div>
                  <h3 className="font-display font-medium text-gray-900">{action.label}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section>
          <h2 className="text-xl font-display font-bold text-gray-900 mb-4">Your Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm">
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-900 mt-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <section>
            <h2 className="text-xl font-display font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <div className="bg-white rounded-xl shadow-sm divide-y">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{event.title}</h3>
                      <div className="text-sm text-gray-500 mt-1">
                        {event.date} • {event.location}
                      </div>
                    </div>
                    <div className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded">
                      {event.points} CPD Points
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Activity */}
          <section>
            <h2 className="text-xl font-display font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="bg-white rounded-xl shadow-sm divide-y">
              {recentActivities.map((activity, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${activity.color} bg-opacity-10`}>
                      <activity.icon className={`text-lg ${activity.color}`} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{activity.title}</div>
                      <div className="text-sm text-gray-500">{activity.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
} 