"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import QuickActions from "@/components/dashboard/QuickActions";
import Statistics from "@/components/dashboard/Statistics";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <QuickActions />
        <Statistics />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <UpcomingEvents />
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  );
} 