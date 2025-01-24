"use client";

import { ReactNode } from "react";
import { FaUsers, FaImages, FaNewspaper, FaHandshake, FaDonate, FaChartBar } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const adminMenuItems = [
  { icon: FaChartBar, label: "Dashboard", href: "/admin" },
  { icon: FaUsers, label: "User Management", href: "/admin/users" },
  { icon: FaImages, label: "Hero Banners", href: "/admin/hero-banners" },
  { icon: FaNewspaper, label: "News & Updates", href: "/admin/news" },
  { icon: FaHandshake, label: "Partners", href: "/admin/partners" },
  { icon: FaDonate, label: "Donations", href: "/admin/donations" },
];

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-[#003366] text-white">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-display font-bold">GSK Admin Panel</h1>
            <Link 
              href="/dashboard" 
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Return to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Admin Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
            {adminMenuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#003366]"
                      : "text-gray-600 hover:text-[#003366] hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="text-lg" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="adminNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#003366]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[2000px] mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          {children}
        </div>
      </main>
    </div>
  );
} 