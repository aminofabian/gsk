"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUserMd,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";
import { MdPayments } from "react-icons/md";

const mobileMenuItems = [
  { icon: FaHome, label: "Home", href: "/dashboard" },
  { icon: FaCalendarAlt, label: "Events", href: "/dashboard/events" },
  { icon: MdPayments, label: "Pay", href: "/dashboard/payments" },
  { icon: FaUsers, label: "Members", href: "/dashboard/members" },
  { icon: FaUserMd, label: "Profile", href: "/dashboard/profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50">
      <nav className="flex justify-around items-center h-16">
        {mobileMenuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center justify-center w-full h-full"
            >
              <div
                className={`flex flex-col items-center transition-colors ${
                  isActive ? "text-[#003366]" : "text-gray-500"
                }`}
              >
                <item.icon className="text-xl mb-1" />
                <span className="text-xs font-display">{item.label}</span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute top-0 left-0 right-0 h-0.5 bg-[#003366]"
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
      </nav>
    </div>
  );
} 