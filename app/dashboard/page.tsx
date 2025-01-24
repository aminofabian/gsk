"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import QuickActions from "@/components/dashboard/QuickActions";
import Statistics from "@/components/dashboard/Statistics";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Main Content with improved spacing */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-2xl font-display font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-500">Here's what's happening with your GSK membership.</p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {/* Quick Actions - Most important, so it's at the top */}
          <QuickActions />

          {/* Statistics - Second most important */}
          <Statistics />

          {/* Two-column layout for secondary information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <UpcomingEvents />
            <RecentActivity />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 