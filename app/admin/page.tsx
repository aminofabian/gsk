"use client";

import { FaUsers, FaHandshake, FaDonate, FaNewspaper } from "react-icons/fa";
import AdminLayout from "@/components/admin/AdminLayout";
import { motion } from "framer-motion";

// Mock data - replace with actual API calls
const stats = [
  {
    label: "Total Members",
    value: "250",
    change: "+12%",
    trend: "up",
    icon: FaUsers,
    color: "blue",
  },
  {
    label: "Active Partners",
    value: "15",
    change: "+2",
    trend: "up",
    icon: FaHandshake,
    color: "green",
  },
  {
    label: "Total Donations",
    value: "KES 1.2M",
    change: "+25%",
    trend: "up",
    icon: FaDonate,
    color: "purple",
  },
  {
    label: "News Articles",
    value: "45",
    change: "+5",
    trend: "up",
    icon: FaNewspaper,
    color: "orange",
  },
];

const recentActivities = [
  {
    id: 1,
    type: "user",
    message: "New member registration: Dr. Sarah Johnson",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "donation",
    message: "New donation received: KES 50,000",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "partner",
    message: "New partnership request from Medical Solutions Ltd",
    time: "1 day ago",
  },
];

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white  border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <p className={`text-sm mt-1 ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change}
                  </p>
                </div>
                <div
                  className={`p-3  ${
                    stat.color === "blue"
                      ? "bg-blue-100 text-blue-600"
                      : stat.color === "green"
                      ? "bg-green-100 text-green-600"
                      : stat.color === "purple"
                      ? "bg-purple-100 text-purple-600"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  <stat.icon className="text-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 bg-[#003366] text-white  hover:bg-[#004488] transition-colors">
            <div className="flex items-center gap-3">
              <FaUsers className="text-xl" />
              <span>Add New Member</span>
            </div>
          </button>
          <button className="p-4 bg-[#003366] text-white  hover:bg-[#004488] transition-colors">
            <div className="flex items-center gap-3">
              <FaHandshake className="text-xl" />
              <span>Add Partner</span>
            </div>
          </button>
          <button className="p-4 bg-[#003366] text-white  hover:bg-[#004488] transition-colors">
            <div className="flex items-center gap-3">
              <FaNewspaper className="text-xl" />
              <span>Post Update</span>
            </div>
          </button>
          <button className="p-4 bg-[#003366] text-white  hover:bg-[#004488] transition-colors">
            <div className="flex items-center gap-3">
              <FaDonate className="text-xl" />
              <span>Record Donation</span>
            </div>
          </button>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-4 p-4 bg-white  border hover:shadow-sm transition-shadow"
              >
                <div
                  className={`p-2  ${
                    activity.type === "user"
                      ? "bg-blue-100 text-blue-600"
                      : activity.type === "donation"
                      ? "bg-green-100 text-green-600"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  {activity.type === "user" ? (
                    <FaUsers />
                  ) : activity.type === "donation" ? (
                    <FaDonate />
                  ) : (
                    <FaHandshake />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">{activity.message}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
} 