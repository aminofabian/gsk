"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";
import DashboardHeader from "./DashboardHeader";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50/50">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <DashboardHeader />

        {/* Page Content */}
        <main className="max-w-[2000px] mx-auto p-4 sm:p-6 pb-24 lg:pb-6">
          {children}
        </main>

        {/* Bottom Navigation - Visible only on mobile */}
        <BottomNav />
      </div>
    </div>
  );
} 